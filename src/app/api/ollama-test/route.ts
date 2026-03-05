import { NextResponse } from "next/server";
import {
  generateDesignPlans,
  OllamaParseError,
  OllamaUnavailableError,
} from "@/lib/llm/designDirectorOllama";

export async function POST() {
  const model = process.env.OLLAMA_MODEL ?? "qcwind/qwen2.5-7B-instruct-Q4_K_M";
  const baseUrl = process.env.OLLAMA_BASE_URL ?? "http://localhost:11434";

  try {
    const parsed = await generateDesignPlans({
      systemPrompt: "Return JSON only.",
      userPayload: {
        task: "health_check",
        required_shape: {
          ok: true,
          model,
        },
      },
      model,
      baseUrl,
      temperature: 0,
    });

    return NextResponse.json(parsed);
  } catch (error) {
    if (error instanceof OllamaUnavailableError) {
      return NextResponse.json({ error: error.message }, { status: 503 });
    }

    if (error instanceof OllamaParseError) {
      return NextResponse.json(
        {
          error: error.message,
          rawSnippet: error.rawSnippet,
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        error: "Unexpected Ollama test failure.",
        detail: String(error),
      },
      { status: 500 }
    );
  }
}
