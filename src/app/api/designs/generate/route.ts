import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_FORMATS, DEFAULT_STYLES, DEFAULT_TEMPLATES } from "@/lib/design/menu";
import type { DesignFormat, SafeZone } from "@/lib/design/types";
import {
  generateDesignPlans,
  OllamaParseError,
  OllamaUnavailableError,
} from "@/lib/llm/designDirectorOllama";
import { validateDesignDirectorOutput } from "@/lib/validation/validateDesignDirectorOutput";

type GenerateBody = {
  variants?: number;
  postType?: "event" | "product" | "quote" | "announcement" | "general" | string;
  formatTargets?: string[];
  allowedTemplates?: string[];
  allowedStyles?: string[];
  headlineMaxChars?: number;
  subtitleMaxChars?: number;
  palette?: string[];
  safe_zones?: SafeZone[];
  userText?: {
    headline?: string;
    subtitle?: string;
  };
};

function truncate(value: string, max = 220) {
  return value.length <= max ? value : `${value.slice(0, max)}...`;
}

function parseBody(body: GenerateBody) {
  const variants = Number(body.variants);
  if (!Number.isInteger(variants) || variants < 1 || variants > 20) {
    return { error: "variants must be an integer between 1 and 20." } as const;
  }

  const postType = typeof body.postType === "string" && body.postType.trim() ? body.postType.trim() : "general";

  const formatTargetsRaw = Array.isArray(body.formatTargets) && body.formatTargets.length
    ? body.formatTargets
    : [...DEFAULT_FORMATS];

  const formatTargets = formatTargetsRaw.filter(
    (value): value is DesignFormat =>
      typeof value === "string" && (DEFAULT_FORMATS as readonly string[]).includes(value)
  );

  if (!formatTargets.length || formatTargets.length !== formatTargetsRaw.length) {
    return { error: "formatTargets must contain only square, portrait, story." } as const;
  }

  const allowedTemplates = (Array.isArray(body.allowedTemplates) && body.allowedTemplates.length
    ? body.allowedTemplates
    : [...DEFAULT_TEMPLATES]
  ).filter((value): value is string => typeof value === "string" && !!value.trim());

  const allowedStyles = (Array.isArray(body.allowedStyles) && body.allowedStyles.length
    ? body.allowedStyles
    : [...DEFAULT_STYLES]
  ).filter((value): value is string => typeof value === "string" && !!value.trim());

  if (!allowedTemplates.length) {
    return { error: "allowedTemplates must be a non-empty string array." } as const;
  }

  if (!allowedStyles.length) {
    return { error: "allowedStyles must be a non-empty string array." } as const;
  }

  const headlineMaxChars = Number(body.headlineMaxChars);
  const subtitleMaxChars = Number(body.subtitleMaxChars);

  if (!Number.isInteger(headlineMaxChars) || headlineMaxChars <= 0) {
    return { error: "headlineMaxChars must be a positive integer." } as const;
  }

  if (!Number.isInteger(subtitleMaxChars) || subtitleMaxChars <= 0) {
    return { error: "subtitleMaxChars must be a positive integer." } as const;
  }

  const palette = Array.isArray(body.palette)
    ? body.palette.filter((value): value is string => typeof value === "string" && !!value.trim())
    : [];

  if (!palette.length) {
    return { error: "palette must be a non-empty array of hex colors." } as const;
  }

  const safeZones = Array.isArray(body.safe_zones) ? body.safe_zones : [];

  return {
    value: {
      variants,
      postType,
      formatTargets,
      allowedTemplates,
      allowedStyles,
      headlineMaxChars,
      subtitleMaxChars,
      palette,
      safeZones,
      userText: body.userText,
    },
  } as const;
}

function buildSystemPrompt() {
  return [
    "You are IG.AI Design Director.",
    "Output STRICT JSON only. No markdown. No explanation text.",
    "Return exactly N variants.",
    "template_id, style_id, and format must be chosen from the allowed lists in user payload.",
    "Use palette colors for accent/text; only #FFFFFF and #000000 are additionally allowed.",
    "overlay.opacity must stay in [0.15, 0.75].",
    "badge.text must be <= 10 chars.",
    "Respect headline/subtitle max char limits.",
    "If userText headline/subtitle is non-empty, keep it unchanged unless over max, then shorten.",
    "Prefer readable copy placement; if safe_zones occupy center, prefer bottom_bar or corner_badge patterns.",
    "Output shape must be: {\"variants\":[{...}]} with keys template_id/style_id/format/copy/layout/colors.",
  ].join("\n");
}

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as GenerateBody | null;
  if (!body) {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = parseBody(body);
  if ("error" in parsed) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const requestPayload = {
    variants: parsed.value.variants,
    postType: parsed.value.postType,
    formatTargets: parsed.value.formatTargets,
    allowedTemplates: parsed.value.allowedTemplates,
    allowedStyles: parsed.value.allowedStyles,
    headlineMaxChars: parsed.value.headlineMaxChars,
    subtitleMaxChars: parsed.value.subtitleMaxChars,
    palette: parsed.value.palette,
    safe_zones: parsed.value.safeZones,
    userText: parsed.value.userText ?? {},
  };

  const systemPrompt = buildSystemPrompt();

  try {
    const firstOutput = await generateDesignPlans({
      systemPrompt,
      userPayload: requestPayload,
      temperature: 0.3,
    });

    const firstValidation = validateDesignDirectorOutput({
      output: firstOutput,
      expectedVariants: parsed.value.variants,
      allowedTemplates: parsed.value.allowedTemplates,
      allowedStyles: parsed.value.allowedStyles,
      formatTargets: parsed.value.formatTargets,
      palette: parsed.value.palette,
      headlineMaxChars: parsed.value.headlineMaxChars,
      subtitleMaxChars: parsed.value.subtitleMaxChars,
      userText: parsed.value.userText,
    });

    if (firstValidation.ok) {
      return NextResponse.json({ variants: firstValidation.value.variants });
    }

    const correctivePayload = {
      ...requestPayload,
      correction: {
        instruction: "Fix and regenerate. Output strict JSON only.",
        errors: firstValidation.errors.slice(0, 10),
      },
    };

    const secondOutput = await generateDesignPlans({
      systemPrompt,
      userPayload: correctivePayload,
      temperature: 0.2,
    });

    const secondValidation = validateDesignDirectorOutput({
      output: secondOutput,
      expectedVariants: parsed.value.variants,
      allowedTemplates: parsed.value.allowedTemplates,
      allowedStyles: parsed.value.allowedStyles,
      formatTargets: parsed.value.formatTargets,
      palette: parsed.value.palette,
      headlineMaxChars: parsed.value.headlineMaxChars,
      subtitleMaxChars: parsed.value.subtitleMaxChars,
      userText: parsed.value.userText,
    });

    if (!secondValidation.ok) {
      return NextResponse.json(
        {
          error: "Validation failed after one retry.",
          details: secondValidation.errors.slice(0, 10),
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ variants: secondValidation.value.variants });
  } catch (error) {
    if (error instanceof OllamaUnavailableError) {
      return NextResponse.json({ error: error.message }, { status: 503 });
    }

    if (error instanceof OllamaParseError) {
      return NextResponse.json(
        {
          error: error.message,
          rawSnippet: truncate(error.rawSnippet, 240),
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        error: "Generate route failed.",
        detail: truncate(String(error), 240),
      },
      { status: 500 }
    );
  }
}
