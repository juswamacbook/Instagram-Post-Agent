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
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/timers [external] (timers, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("timers", () => require("timers"));

module.exports = mod;
}),
"[project]/IG.AI/src/app/api/palettes/[id]/colors-from-image/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/IG.AI/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/IG.AI/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$jimp$2f$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/IG.AI/node_modules/jimp/es/index.js [app-route] (ecmascript)");
;
;
;
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
function rgbToHex([r, g, b]) {
    const clamp = (value)=>Math.max(0, Math.min(255, Math.round(value)));
    return ("#" + [
        clamp(r),
        clamp(g),
        clamp(b)
    ].map((value)=>value.toString(16).padStart(2, "0")).join("")).toUpperCase();
}
function kMeansColors(pixels, k) {
    if (pixels.length === 0) return [];
    const step = Math.max(1, Math.floor(pixels.length / k));
    let centroids = Array.from({
        length: k
    }, (_, index)=>pixels[index * step] ?? pixels[0]);
    for(let iter = 0; iter < 10; iter++){
        const buckets = Array.from({
            length: k
        }, ()=>({
                sum: [
                    0,
                    0,
                    0
                ],
                count: 0
            }));
        for (const [r, g, b] of pixels){
            let best = 0;
            let bestDist = Number.POSITIVE_INFINITY;
            for(let i = 0; i < k; i++){
                const [cr, cg, cb] = centroids[i];
                const dist = (r - cr) ** 2 + (g - cg) ** 2 + (b - cb) ** 2;
                if (dist < bestDist) {
                    bestDist = dist;
                    best = i;
                }
            }
            const bucket = buckets[best];
            bucket.sum[0] += r;
            bucket.sum[1] += g;
            bucket.sum[2] += b;
            bucket.count += 1;
        }
        centroids = buckets.map((bucket, index)=>{
            if (!bucket.count) return centroids[index];
            return [
                bucket.sum[0] / bucket.count,
                bucket.sum[1] / bucket.count,
                bucket.sum[2] / bucket.count
            ];
        });
    }
    return centroids;
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
    try {
        const buffer = Buffer.from(base64, "base64");
        const image = await __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$jimp$2f$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].read(buffer);
        image.resize(160, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$jimp$2f$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].AUTO);
        const { data, width, height } = image.bitmap;
        const pixels = [];
        const stride = Math.max(1, Math.floor(width * height / 1500));
        for(let i = 0; i < data.length; i += 4 * stride){
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const a = data[i + 3];
            if (a < 50) continue;
            pixels.push([
                r,
                g,
                b
            ]);
        }
        const centroids = kMeansColors(pixels, 6);
        const colors = centroids.map(rgbToHex);
        const uniqueColors = Array.from(new Set(colors));
        if (uniqueColors.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "No colors extracted."
            }, {
                status: 500
            });
        }
        const merged = Array.from(new Set([
            ...palette.colors ?? [],
            ...uniqueColors
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
            added: uniqueColors
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to extract colors.",
            detail: String(error)
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__694c91f4._.js.map