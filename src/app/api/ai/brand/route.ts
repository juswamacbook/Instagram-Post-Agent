import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const OLLAMA_BASE_URL =
  process.env.OLLAMA_BASE_URL?.replace(/\/$/, "") ?? "http://localhost:11434";
const OLLAMA_MODEL = process.env.OLLAMA_MODEL ?? "llama3.1:8b";
const DESIGN_MIMIC_SYSTEM_PROMPT = `You are an AI Design Mimic Agent.

Goal:
Analyze one uploaded image and produce original design concepts that match its style without copying it.

Input:
- Exactly one user-uploaded image (photo, UI, artwork, or graphic).

Behavior:
- Act like a design assistant that is actively analyzing and creating during generation.
- Assume the product UI has:
  - an image upload control
  - a visible loading bar while designs are being generated
- Do not mention technical internals.

Analyze the image for:
- Color palette and contrast
- Shape language, layout, and composition
- Typography style (if present)
- Mood, tone, and overall aesthetic
- Design pattern cues (minimalist, bold, playful, professional, etc.)

Creative rule:
- Extract design principles, not literal elements.
- Generate new work that feels stylistically aligned but clearly original.

Output requirements:
- Return 3 to 5 distinct design variations.
- For each variation include:
  - title
  - style_relation (how it connects to the source style)
  - concept_description (what is new/different)
  - mockup (generated visual output if supported; otherwise a concise visual direction)

Constraints:
- Do not recreate or closely copy the source image.
- Do not reuse identifiable logos, faces, trademarks, or copyrighted elements.
- Prioritize originality with stylistic consistency.

Tone:
Creative, confident, design-focused. Write like a digital designer translating inspiration into fresh concepts.

Return ONLY valid JSON (no markdown) with this structure:
{
  "design_variations": [
    {
      "title": "string",
      "style_relation": "string",
      "concept_description": "string",
      "mockup": "string"
    }
  ]
}`;

function safeJsonParse(value: string) {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

function extractBase64Image(input: string) {
  const trimmed = input.trim();
  const dataUrlMatch = trimmed.match(/^data:image\/[a-zA-Z0-9.+-]+;base64,(.+)$/);
  if (dataUrlMatch?.[1]) return dataUrlMatch[1];
  if (/^[A-Za-z0-9+/=]+$/.test(trimmed)) return trimmed;
  return null;
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body?.brandId) {
    return NextResponse.json(
      { error: "brandId is required." },
      { status: 400 }
    );
  }
  if (typeof body?.imageBase64 !== "string") {
    return NextResponse.json(
      { error: "imageBase64 is required." },
      { status: 400 }
    );
  }

  const imageBase64 = extractBase64Image(body.imageBase64);
  if (!imageBase64) {
    return NextResponse.json(
      { error: "Invalid image format. Expected a base64 image string." },
      { status: 400 }
    );
  }

  const brand = await prisma.brand.findUnique({
    where: { id: body.brandId },
    include: { palettes: true },
  });

  if (!brand) {
    return NextResponse.json({ error: "Brand not found." }, { status: 404 });
  }

  const promptPayload = {
    brand: {
      name: brand.name,
      handle: brand.handle,
    },
    existing_palettes: brand.palettes.map((palette) => ({
      name: palette.name,
      colors: palette.colors,
    })),
    request: {
      design_variations: {
        count: "3-5",
        fields: ["title", "style_relation", "concept_description", "mockup"],
      },
    },
  };

  const payload = {
    model: OLLAMA_MODEL,
    stream: false,
    format: "json",
    messages: [
      {
        role: "system",
        content: DESIGN_MIMIC_SYSTEM_PROMPT,
      },
      {
        role: "user",
        content: JSON.stringify(promptPayload),
        images: [imageBase64],
      },
    ],
  };

  let resultText = "";
  try {
    const res = await fetch(`${OLLAMA_BASE_URL}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json(
        { error: "Ollama request failed.", detail: err },
        { status: 500 }
      );
    }

    const data = await res.json();
    resultText = data?.message?.content ?? data?.response ?? "";
    if (!resultText) {
      return NextResponse.json(
        { error: "Empty response from Ollama.", detail: JSON.stringify(data) },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to reach Ollama. Make sure it is running.",
        detail: String(error),
      },
      { status: 500 }
    );
  }

  const parsed = safeJsonParse(resultText.trim());

  return NextResponse.json({
    result: parsed ?? null,
    raw: resultText,
  });
}
