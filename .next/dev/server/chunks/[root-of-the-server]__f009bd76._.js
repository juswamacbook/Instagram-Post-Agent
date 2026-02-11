module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/IG.AI/src/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/IG.AI/node_modules/@prisma/client)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
;
;
;
function loadEnvIfMissing() {
    if (process.env.DATABASE_URL) return;
    const candidates = [
        __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].resolve(process.cwd(), ".env"),
        __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].resolve(process.cwd(), ".env.local"),
        __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].resolve(process.cwd(), "prisma/.env")
    ];
    for (const file of candidates){
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].existsSync(file)) continue;
        const content = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].readFileSync(file, "utf8");
        for (const line of content.split(/\r?\n/)){
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith("#")) continue;
            const eq = trimmed.indexOf("=");
            if (eq === -1) continue;
            const key = trimmed.slice(0, eq).trim();
            let value = trimmed.slice(eq + 1).trim();
            if (value.startsWith("\"") && value.endsWith("\"") || value.startsWith("'") && value.endsWith("'")) {
                value = value.slice(1, -1);
            }
            if (process.env[key] === undefined) process.env[key] = value;
        }
        if (process.env.DATABASE_URL) return;
    }
}
loadEnvIfMissing();
const globalForPrisma = /*TURBOPACK member replacement*/ __turbopack_context__.g;
const prisma = globalForPrisma.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
}),
"[project]/IG.AI/src/app/api/ai/brand/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/IG.AI/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/IG.AI/src/lib/prisma.ts [app-route] (ecmascript)");
;
;
const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL?.replace(/\/$/, "") ?? "http://localhost:11434";
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
function safeJsonParse(value) {
    try {
        return JSON.parse(value);
    } catch  {
        return null;
    }
}
function extractBase64Image(input) {
    const trimmed = input.trim();
    const dataUrlMatch = trimmed.match(/^data:image\/[a-zA-Z0-9.+-]+;base64,(.+)$/);
    if (dataUrlMatch?.[1]) return dataUrlMatch[1];
    if (/^[A-Za-z0-9+/=]+$/.test(trimmed)) return trimmed;
    return null;
}
async function POST(request) {
    const body = await request.json().catch(()=>null);
    if (!body?.brandId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "brandId is required."
        }, {
            status: 400
        });
    }
    if (typeof body?.imageBase64 !== "string") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "imageBase64 is required."
        }, {
            status: 400
        });
    }
    const imageBase64 = extractBase64Image(body.imageBase64);
    if (!imageBase64) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Invalid image format. Expected a base64 image string."
        }, {
            status: 400
        });
    }
    const brand = await __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].brand.findUnique({
        where: {
            id: body.brandId
        },
        include: {
            palettes: true
        }
    });
    if (!brand) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Brand not found."
        }, {
            status: 404
        });
    }
    const promptPayload = {
        brand: {
            name: brand.name,
            handle: brand.handle
        },
        existing_palettes: brand.palettes.map((palette)=>({
                name: palette.name,
                colors: palette.colors
            })),
        request: {
            design_variations: {
                count: "3-5",
                fields: [
                    "title",
                    "style_relation",
                    "concept_description",
                    "mockup"
                ]
            }
        }
    };
    const payload = {
        model: OLLAMA_MODEL,
        stream: false,
        format: "json",
        messages: [
            {
                role: "system",
                content: DESIGN_MIMIC_SYSTEM_PROMPT
            },
            {
                role: "user",
                content: JSON.stringify(promptPayload),
                images: [
                    imageBase64
                ]
            }
        ]
    };
    let resultText = "";
    try {
        const res = await fetch(`${OLLAMA_BASE_URL}/api/chat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        if (!res.ok) {
            const err = await res.text();
            return __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Ollama request failed.",
                detail: err
            }, {
                status: 500
            });
        }
        const data = await res.json();
        resultText = data?.message?.content ?? data?.response ?? "";
        if (!resultText) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Empty response from Ollama.",
                detail: JSON.stringify(data)
            }, {
                status: 500
            });
        }
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to reach Ollama. Make sure it is running.",
            detail: String(error)
        }, {
            status: 500
        });
    }
    const parsed = safeJsonParse(resultText.trim());
    return __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        result: parsed ?? null,
        raw: resultText
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f009bd76._.js.map