import Ajv2020, { type ErrorObject } from "ajv/dist/2020";
import designSchema from "./designSchema.json";
import type { DesignDirectorOutput, DesignFormat, DesignVariant } from "@/lib/design/types";

const ajv = new Ajv2020({ allErrors: true, strict: false });
const validateSchema = ajv.compile(designSchema);

const HEX_COLOR_RE = /^#[0-9A-F]{6}$/;
const ALWAYS_ALLOWED_COLORS = new Set(["#FFFFFF", "#000000"]);

export type ValidateDesignInput = {
  output: unknown;
  expectedVariants: number;
  allowedTemplates: string[];
  allowedStyles: string[];
  formatTargets: DesignFormat[];
  palette: string[];
  headlineMaxChars: number;
  subtitleMaxChars: number;
  userText?: {
    headline?: string;
    subtitle?: string;
  };
};

export type ValidateDesignResult =
  | {
      ok: true;
      value: DesignDirectorOutput;
      data: DesignDirectorOutput;
    }
  | {
      ok: false;
      errors: string[];
    };

function formatAjvErrors(errors: ErrorObject[] | null | undefined): string[] {
  if (!errors?.length) {
    return ["Schema validation failed."];
  }

  return errors.map((err) => {
    const path = err.instancePath || "root";
    return `${path} ${err.message ?? "is invalid"}`;
  });
}

function normalizeHex(value: string): string {
  return value.toUpperCase();
}

function truncate(value: string, max: number): string {
  if (max <= 0) return "";
  return value.length <= max ? value : value.slice(0, max);
}

function clampOpacity(opacity: number): number {
  if (Number.isNaN(opacity)) return 0.15;
  return Math.min(0.75, Math.max(0.15, opacity));
}

function isAllowedColor(color: string, paletteSet: Set<string>) {
  return ALWAYS_ALLOWED_COLORS.has(color) || paletteSet.has(color);
}

export function validateDesignDirectorOutput(input: ValidateDesignInput): ValidateDesignResult {
  if (!validateSchema(input.output)) {
    return {
      ok: false,
      errors: formatAjvErrors(validateSchema.errors),
    };
  }

  const typedOutput = input.output as DesignDirectorOutput;

  if (typedOutput.variants.length !== input.expectedVariants) {
    return {
      ok: false,
      errors: [
        `Expected exactly ${input.expectedVariants} variants, got ${typedOutput.variants.length}.`,
      ],
    };
  }

  const paletteSet = new Set(
    input.palette
      .map((color) => color.toUpperCase())
      .filter((color) => HEX_COLOR_RE.test(color))
  );

  const allowedTemplates = new Set(input.allowedTemplates);
  const allowedStyles = new Set(input.allowedStyles);
  const allowedFormats = new Set(input.formatTargets);

  const normalizedVariants: DesignVariant[] = [];
  const errors: string[] = [];

  typedOutput.variants.forEach((variant, index) => {
    if (!allowedTemplates.has(variant.template_id)) {
      errors.push(`variants[${index}].template_id must be one of allowedTemplates.`);
    }

    if (!allowedStyles.has(variant.style_id)) {
      errors.push(`variants[${index}].style_id must be one of allowedStyles.`);
    }

    if (!allowedFormats.has(variant.format)) {
      errors.push(`variants[${index}].format must be in formatTargets.`);
    }

    const accent = normalizeHex(variant.colors.accent);
    const text = normalizeHex(variant.colors.text);

    if (!HEX_COLOR_RE.test(accent) || !isAllowedColor(accent, paletteSet)) {
      errors.push(`variants[${index}].colors.accent must be in palette or black/white.`);
    }

    if (!HEX_COLOR_RE.test(text) || !isAllowedColor(text, paletteSet)) {
      errors.push(`variants[${index}].colors.text must be in palette or black/white.`);
    }

    const overlayOpacity = clampOpacity(variant.colors.overlay.opacity);

    const lockedHeadline = input.userText?.headline
      ? truncate(input.userText.headline, input.headlineMaxChars)
      : truncate(variant.copy.headline, input.headlineMaxChars);

    const lockedSubtitle = input.userText?.subtitle
      ? truncate(input.userText.subtitle, input.subtitleMaxChars)
      : truncate(variant.copy.subtitle, input.subtitleMaxChars);

    const badgeText = truncate(variant.layout.badge.text ?? "", 10);

    normalizedVariants.push({
      ...variant,
      copy: {
        headline: lockedHeadline,
        subtitle: lockedSubtitle,
      },
      layout: {
        ...variant.layout,
        badge: {
          enabled: variant.layout.badge.enabled,
          text: variant.layout.badge.enabled ? badgeText : "",
        },
      },
      colors: {
        ...variant.colors,
        accent,
        text,
        overlay: {
          ...variant.colors.overlay,
          opacity: overlayOpacity,
        },
      },
    });
  });

  if (errors.length) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    value: {
      variants: normalizedVariants,
    },
    data: {
      variants: normalizedVariants,
    },
  };
}
