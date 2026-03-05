export class OllamaUnavailableError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "OllamaUnavailableError";
  }
}

export class OllamaParseError extends Error {
  rawSnippet: string;

  constructor(message: string, rawSnippet: string) {
    super(message);
    this.name = "OllamaParseError";
    this.rawSnippet = rawSnippet;
  }
}

export type GenerateDesignPlansParams = {
  systemPrompt: string;
  userPayload: unknown;
  model?: string;
  baseUrl?: string;
  temperature?: number;
};

function getBaseUrl(explicit?: string) {
  return (explicit ?? process.env.OLLAMA_BASE_URL ?? "http://localhost:11434").replace(/\/$/, "");
}

function getModel(explicit?: string) {
  return explicit ?? process.env.OLLAMA_MODEL ?? "qcwind/qwen2.5-7B-instruct-Q4_K_M";
}

function truncate(value: string, max = 350) {
  return value.length <= max ? value : `${value.slice(0, max)}...`;
}

export async function generateDesignPlans(params: GenerateDesignPlansParams): Promise<unknown> {
  const baseUrl = getBaseUrl(params.baseUrl);
  const model = getModel(params.model);
  const temperature = params.temperature ?? 0.3;

  const prompt = [
    `SYSTEM:\n${params.systemPrompt}`,
    `USER:\n${JSON.stringify(params.userPayload)}`,
  ].join("\n\n");

  let response: Response;

  try {
    response = await fetch(`${baseUrl}/api/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        prompt,
        stream: false,
        temperature,
        format: "json",
      }),
    });
  } catch {
    throw new OllamaUnavailableError(`Ollama not running at ${baseUrl}`);
  }

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new OllamaUnavailableError(`Ollama not running at ${baseUrl}${detail ? ` (${truncate(detail, 180)})` : ""}`);
  }

  const data = await response.json().catch(() => null);
  const raw = typeof data?.response === "string" ? data.response.trim() : "";

  if (!raw) {
    throw new OllamaParseError("Ollama returned an empty response string.", "");
  }

  try {
    return JSON.parse(raw);
  } catch {
    throw new OllamaParseError("Failed to parse JSON from Ollama response.", truncate(raw));
  }
}
