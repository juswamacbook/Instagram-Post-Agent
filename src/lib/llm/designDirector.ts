import type { DesignDirectorOutput, DesignFormat, SafeZone } from "@/lib/design/types";
import {
  validateDesignDirectorOutput,
  type ValidateDesignInput,
} from "@/lib/validation/validateDesignDirectorOutput";

const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL?.replace(/\/$/, "") ?? "http://localhost:11434";
const OLLAMA_MODEL = process.env.OLLAMA_MODEL ?? "qwen2.5:7b";

export type DesignDirectorGenerateParams = {
  variants: number;
  postType: string;
  formatTargets: DesignFormat[];
  allowedTemplates: string[];
  allowedStyles: string[];
  palette: string[];
  safeZones: SafeZone[];
  headlineMaxChars: number;
  subtitleMaxChars: number;
  userText?: {
    headline?: string;
    subtitle?: string;
  };
};

const SYSTEM_PROMPT = [
  "You are IG.AI Design Director.",
  "Output JSON only. No markdown.",
  "Must produce exactly N variants.",
  "template_id/style_id/format must be from allowed lists.",
  "Use palette colors; allow #FFFFFF and #000000.",
  "Overlay opacity in [0.15, 0.75].",
  "Badge text <= 10 chars.",
  "Respect headline/subtitle max chars.",
  "If user_text headline/subtitle provided, keep them unchanged unless exceeding max, then shorten.",
  "Return exactly this JSON shape: {\"variants\":[{" +
    "\"template_id\":\"...\",\"style_id\":\"...\",\"format\":\"square|portrait|story\",\"copy\":{\"headline\":\"...\",\"subtitle\":\"...\"}," +
    "\"layout\":{\"headline_align\":\"left|center|right\",\"subtitle_align\":\"left|center|right\",\"badge\":{\"enabled\":true,\"text\":\"...\"}}," +
    "\"colors\":{\"accent\":\"#RRGGBB\",\"text\":\"#RRGGBB\",\"overlay\":{\"type\":\"none|gradient|solid_bar|blur_bar\",\"opacity\":0.3}}}]}.",
].join("\n");

function safeJsonParse(value: string): unknown | null {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

function buildPrompt(messages: Array<{ role: "system" | "user"; content: string }>) {
  return messages
    .map((message) => `${message.role.toUpperCase()}:\n${message.content}`)
    .join("\n\n");
}

async function callOllama(messages: Array<{ role: "system" | "user"; content: string }>) {
  const prompt = buildPrompt(messages);

  const response = await fetch(`${OLLAMA_BASE_URL}/api/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: OLLAMA_MODEL,
      prompt,
      stream: false,
      temperature: 0.3,
      format: "json",
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Ollama request failed: ${response.status} ${detail}`);
  }

  const data = await response.json();
  const content = data?.response;

  if (typeof content !== "string" || !content.trim()) {
    throw new Error("Ollama returned empty content.");
  }

  return content;
}

export async function generateDesignDirectorOutput(
  params: DesignDirectorGenerateParams
): Promise<DesignDirectorOutput> {
  const userPayload = {
    request: {
      variants: params.variants,
      post_type: params.postType,
    },
    allowed_templates: params.allowedTemplates,
    allowed_styles: params.allowedStyles,
    format_targets: params.formatTargets,
    palette: params.palette,
    safe_zones: params.safeZones,
    constraints: {
      headline_max_chars: params.headlineMaxChars,
      subtitle_max_chars: params.subtitleMaxChars,
      badge_max_chars: 10,
      overlay_opacity_min: 0.15,
      overlay_opacity_max: 0.75,
      colors_must_be_from_palette_plus_bw: true,
    },
    user_text: params.userText ?? {},
  };

  const validateInput: Omit<ValidateDesignInput, "output"> = {
    expectedVariants: params.variants,
    allowedTemplates: params.allowedTemplates,
    allowedStyles: params.allowedStyles,
    formatTargets: params.formatTargets,
    palette: params.palette,
    headlineMaxChars: params.headlineMaxChars,
    subtitleMaxChars: params.subtitleMaxChars,
    userText: params.userText,
  };

  const firstContent = await callOllama([
    { role: "system", content: SYSTEM_PROMPT },
    { role: "user", content: JSON.stringify(userPayload) },
  ]);

  const firstParsed = safeJsonParse(firstContent);
  const firstValidation = validateDesignDirectorOutput({
    ...validateInput,
    output: firstParsed,
  });

  if (firstValidation.ok) {
    return firstValidation.data;
  }

  const correctivePrompt = {
    instruction: "Fix your previous output. Return valid JSON only.",
    errors: firstValidation.errors.slice(0, 12),
    request: userPayload,
  };

  const secondContent = await callOllama([
    { role: "system", content: SYSTEM_PROMPT },
    { role: "user", content: JSON.stringify(userPayload) },
    {
      role: "user",
      content: JSON.stringify(correctivePrompt),
    },
  ]);

  const secondParsed = safeJsonParse(secondContent);
  const secondValidation = validateDesignDirectorOutput({
    ...validateInput,
    output: secondParsed,
  });

  if (!secondValidation.ok) {
    throw new Error(`Design Director output invalid after retry: ${secondValidation.errors.join(" | ")}`);
  }

  return secondValidation.data;
}
