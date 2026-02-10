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
"[project]/IG.AI/src/app/api/palettes/[id]/colors-from-image/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
const OLLAMA_VISION_MODEL = process.env.OLLAMA_VISION_MODEL ?? process.env.OLLAMA_MODEL ?? "llama3.2-vision";
function getId(request, context) {
    const direct = context?.params?.id;
    if (direct) return direct;
    const pathname = new URL(request.url).pathname;
    const parts = pathname.split("/").filter(Boolean);
    return parts[parts.length - 2] || null;
}
function extractBase64(dataUrl) {
    const match = dataUrl.match(/^data:.*?;base64,(.*)$/);
    return match ? match[1] : null;
}
async function POST(request, context) {
    const id = getId(request, context);
    if (!id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Missing palette id."
        }, {
            status: 400
        });
    }
    const body = await request.json().catch(()=>null);
    const dataUrl = typeof body?.imageBase64 === "string" ? body.imageBase64 : null;
    if (!dataUrl) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "imageBase64 is required."
        }, {
            status: 400
        });
    }
    const base64 = extractBase64(dataUrl);
    if (!base64) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Invalid image data."
        }, {
            status: 400
        });
    }
    const palette = await __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].palette.findUnique({
        where: {
            id
        }
    });
    if (!palette) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Palette not found."
        }, {
            status: 404
        });
    }
    const payload = {
        model: OLLAMA_VISION_MODEL,
        stream: false,
        format: "json",
        messages: [
            {
                role: "system",
                content: "You are a color extraction assistant. Return ONLY valid JSON with a single key 'colors' as an array of 4-8 hex colors (e.g. #AABBCC)."
            },
            {
                role: "user",
                content: "Extract the dominant palette colors from this image.",
                images: [
                    base64
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
    let parsed = null;
    try {
        parsed = JSON.parse(resultText.trim());
    } catch  {
        parsed = null;
    }
    const colors = Array.isArray(parsed?.colors) ? parsed?.colors.filter((color)=>typeof color === "string") : [];
    if (colors.length === 0) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "No colors returned from Ollama.",
            detail: resultText
        }, {
            status: 500
        });
    }
    const merged = Array.from(new Set([
        ...palette.colors ?? [],
        ...colors
    ]));
    const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].palette.update({
        where: {
            id
        },
        data: {
            colors: merged
        }
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        palette: updated,
        added: colors
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e83140b6._.js.map