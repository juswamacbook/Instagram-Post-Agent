"use client";

import { useMemo, useState } from "react";
import { DEFAULT_FORMATS, DEFAULT_STYLES, DEFAULT_TEMPLATES } from "@/lib/design/menu";
import type { DesignVariant } from "@/lib/design/types";

const defaultPayload = {
  variants: 6,
  postType: "general",
  formatTargets: [...DEFAULT_FORMATS],
  allowedTemplates: [...DEFAULT_TEMPLATES],
  allowedStyles: [...DEFAULT_STYLES],
  headlineMaxChars: 32,
  subtitleMaxChars: 48,
  palette: ["#0B1220", "#2E90FA", "#FFFFFF", "#98A2B3"],
  safe_zones: [{ x: 260, y: 160, w: 540, h: 540, label: "face" }],
  userText: { headline: "", subtitle: "" },
};

export default function DesignGeneratorTestPage() {
  const [jsonInput, setJsonInput] = useState(() => JSON.stringify(defaultPayload, null, 2));
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [variants, setVariants] = useState<DesignVariant[]>([]);

  const parsedPreview = useMemo(() => {
    try {
      JSON.parse(jsonInput);
      return "Valid JSON";
    } catch {
      return "Invalid JSON";
    }
  }, [jsonInput]);

  async function onGenerate() {
    setIsLoading(true);
    setError(null);
    setVariants([]);

    let payload: unknown;
    try {
      payload = JSON.parse(jsonInput);
    } catch {
      setError("Input is not valid JSON.");
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/designs/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data?.error ?? "Request failed.");
        setIsLoading(false);
        return;
      }

      const nextVariants = Array.isArray(data?.variants) ? data.variants : [];
      setVariants(nextVariants);
    } catch (requestError) {
      setError(String(requestError));
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <main className="mx-auto w-full max-w-6xl px-6 py-10">
        <h1 className="text-2xl font-semibold">Design Director Test</h1>
        <p className="mt-2 text-sm text-zinc-600">POST /api/designs/generate with custom JSON payload.</p>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <section className="rounded-xl border border-zinc-200 bg-white p-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-medium">Request JSON</p>
              <span className="text-xs text-zinc-500">{parsedPreview}</span>
            </div>
            <textarea
              value={jsonInput}
              onChange={(event) => setJsonInput(event.target.value)}
              className="h-96 w-full rounded-md border border-zinc-300 p-3 font-mono text-xs"
            />
            <button
              type="button"
              onClick={onGenerate}
              disabled={isLoading}
              className="mt-3 rounded-md bg-black px-4 py-2 text-sm font-medium text-white disabled:opacity-60"
            >
              {isLoading ? "Generating..." : "Generate"}
            </button>
            {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}
          </section>

          <section className="rounded-xl border border-zinc-200 bg-white p-4">
            <p className="mb-3 text-sm font-medium">Returned Variants ({variants.length})</p>
            <div className="grid gap-3">
              {variants.map((variant, index) => (
                <article key={`${variant.template_id}-${variant.style_id}-${index}`} className="rounded-lg border border-zinc-200 p-3 text-sm">
                  <p><strong>{index + 1}.</strong> {variant.template_id} / {variant.style_id} / {variant.format}</p>
                  <p className="mt-1 text-zinc-700">{variant.copy.headline}</p>
                  <p className="text-zinc-500">{variant.copy.subtitle}</p>
                  <p className="mt-1 text-xs text-zinc-500">accent {variant.colors.accent} | text {variant.colors.text} | overlay {variant.colors.overlay.type} ({variant.colors.overlay.opacity})</p>
                </article>
              ))}
              {!variants.length ? <p className="text-sm text-zinc-500">No variants yet.</p> : null}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
