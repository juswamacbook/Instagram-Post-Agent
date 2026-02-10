module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/IG.AI/src/app/brands/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BrandsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/IG.AI/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/IG.AI/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
async function readJsonSafe(res) {
    try {
        return await res.json();
    } catch  {
        return null;
    }
}
function safeJsonParse(value) {
    try {
        return JSON.parse(value);
    } catch  {
        return null;
    }
}
function normalizeAiResult(input) {
    if (!input || typeof input !== "object") return null;
    const data = input;
    const palettes = Array.isArray(data.palette_suggestions) ? data.palette_suggestions.map((item)=>{
        if (!item || typeof item !== "object") return null;
        const obj = item;
        const name = typeof obj.name === "string" ? obj.name : "Untitled";
        const colors = Array.isArray(obj.colors) ? obj.colors.map((color)=>{
            if (typeof color === "string") return color;
            if (color && typeof color === "object") {
                const c = color;
                if (typeof c.color === "string") return c.color;
                if (typeof c.hex === "string") return c.hex;
            }
            return null;
        }).filter(Boolean) : [];
        return {
            name,
            colors: colors
        };
    }).filter(Boolean) : [];
    const captions = Array.isArray(data.mood_captions) ? data.mood_captions.map((item)=>{
        if (typeof item === "string") return item;
        if (item && typeof item === "object") {
            const obj = item;
            if (typeof obj.caption === "string") return obj.caption;
            if (typeof obj.text === "string") return obj.text;
            return JSON.stringify(item);
        }
        return String(item);
    }) : [];
    return {
        palette_suggestions: palettes,
        mood_captions: captions
    };
}
function BrandsPage() {
    const [brands, setBrands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [brandName, setBrandName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [brandHandle, setBrandHandle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [paletteName, setPaletteName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [paletteColors, setPaletteColors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedBrandId, setSelectedBrandId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [aiLoadingId, setAiLoadingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [aiByBrandId, setAiByBrandId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [aiRawByBrandId, setAiRawByBrandId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [editingBrandId, setEditingBrandId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingBrandName, setEditingBrandName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingBrandHandle, setEditingBrandHandle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingPaletteId, setEditingPaletteId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingPaletteName, setEditingPaletteName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingPaletteColors, setEditingPaletteColors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [newColorByPaletteId, setNewColorByPaletteId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [imageFileByPaletteId, setImageFileByPaletteId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [imageLoadingByPaletteId, setImageLoadingByPaletteId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [imageLoadingStepByPaletteId, setImageLoadingStepByPaletteId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const imageLoadingTimers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const imageLoadingMessages = [
        "Scanning your image",
        "Reading your image",
        "Scraping colors",
        "Finalizing details"
    ];
    const sortedBrands = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            ...brands
        ].sort((a, b)=>a.name.localeCompare(b.name)), [
        brands
    ]);
    async function loadBrands() {
        setLoading(true);
        setError(null);
        const res = await fetch("/api/brands");
        const data = await readJsonSafe(res);
        if (!res.ok) {
            setBrands([]);
            setError(data?.error ?? "Failed to load brands.");
            setLoading(false);
            return;
        }
        const nextBrands = Array.isArray(data?.brands) ? data.brands : [];
        setBrands(nextBrands);
        setLoading(false);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadBrands();
    }, []);
    async function handleCreateBrand(event) {
        event.preventDefault();
        setError(null);
        const res = await fetch("/api/brands", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: brandName,
                handle: brandHandle || null
            })
        });
        if (!res.ok) {
            const data = await readJsonSafe(res);
            setError(data?.error ?? "Failed to create brand.");
            return;
        }
        setBrandName("");
        setBrandHandle("");
        await loadBrands();
    }
    async function handleCreatePalette(event) {
        event.preventDefault();
        setError(null);
        if (!selectedBrandId) {
            setError("Pick a brand before adding a palette.");
            return;
        }
        const colors = paletteColors.split(",").map((color)=>color.trim()).filter(Boolean);
        const res = await fetch("/api/palettes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                brandId: selectedBrandId,
                name: paletteName,
                colors
            })
        });
        if (!res.ok) {
            const data = await readJsonSafe(res);
            setError(data?.error ?? "Failed to create palette.");
            return;
        }
        setPaletteName("");
        setPaletteColors("");
        await loadBrands();
    }
    function startEditBrand(brand) {
        setEditingBrandId(brand.id);
        setEditingBrandName(brand.name);
        setEditingBrandHandle(brand.handle ?? "");
    }
    function cancelEditBrand() {
        setEditingBrandId(null);
        setEditingBrandName("");
        setEditingBrandHandle("");
    }
    async function handleUpdateBrand(event) {
        event.preventDefault();
        if (!editingBrandId) return;
        const res = await fetch(`/api/brands/${editingBrandId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: editingBrandName,
                handle: editingBrandHandle || null
            })
        });
        if (!res.ok) {
            const data = await readJsonSafe(res);
            setError(data?.error ?? "Failed to update brand.");
            return;
        }
        cancelEditBrand();
        await loadBrands();
    }
    function startEditPalette(palette) {
        setEditingPaletteId(palette.id);
        setEditingPaletteName(palette.name);
        setEditingPaletteColors(palette.colors.join(", "));
    }
    function cancelEditPalette() {
        setEditingPaletteId(null);
        setEditingPaletteName("");
        setEditingPaletteColors("");
    }
    async function handleUpdatePalette(event) {
        event.preventDefault();
        if (!editingPaletteId) return;
        const colors = editingPaletteColors.split(",").map((color)=>color.trim()).filter(Boolean);
        const res = await fetch(`/api/palettes/${editingPaletteId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: editingPaletteName,
                colors
            })
        });
        if (!res.ok) {
            const data = await readJsonSafe(res);
            setError(data?.error ?? "Failed to update palette.");
            return;
        }
        cancelEditPalette();
        await loadBrands();
    }
    async function handleGenerateAi(brand) {
        setError(null);
        setAiLoadingId(brand.id);
        const res = await fetch("/api/ai/brand", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                brandId: brand.id
            })
        });
        if (!res.ok) {
            const data = await readJsonSafe(res);
            const detail = typeof data?.detail === "string" ? ` ${data.detail}` : "";
            setError((data?.error ?? "Failed to generate AI suggestions.") + detail);
            setAiLoadingId(null);
            return;
        }
        const data = await readJsonSafe(res);
        const rawText = typeof data?.raw === "string" ? data.raw : null;
        const result = data?.result ?? (rawText ? safeJsonParse(rawText) : null);
        const normalized = normalizeAiResult(result);
        setAiByBrandId((prev)=>({
                ...prev,
                [brand.id]: normalized
            }));
        setAiRawByBrandId((prev)=>({
                ...prev,
                [brand.id]: rawText
            }));
        setAiLoadingId(null);
    }
    async function handleDeletePalette(id) {
        const res = await fetch(`/api/palettes/${id}`, {
            method: "DELETE"
        });
        if (!res.ok) {
            const data = await readJsonSafe(res);
            setError(data?.error ?? "Failed to delete palette.");
            return;
        }
        await loadBrands();
    }
    async function handleAddPaletteColor(palette) {
        setError(null);
        const raw = newColorByPaletteId[palette.id]?.trim() ?? "";
        if (!raw) {
            setError("Enter a color value to add.");
            return;
        }
        const nextColors = Array.from(new Set([
            ...palette.colors,
            raw
        ]));
        const res = await fetch(`/api/palettes/${palette.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                colors: nextColors
            })
        });
        if (!res.ok) {
            const data = await readJsonSafe(res);
            setError(data?.error ?? "Failed to add color.");
            return;
        }
        setNewColorByPaletteId((prev)=>({
                ...prev,
                [palette.id]: ""
            }));
        await loadBrands();
    }
    async function handleRemovePaletteColor(palette, colorToRemove) {
        setError(null);
        const nextColors = palette.colors.filter((color)=>color !== colorToRemove);
        const res = await fetch(`/api/palettes/${palette.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                colors: nextColors
            })
        });
        if (!res.ok) {
            const data = await readJsonSafe(res);
            setError(data?.error ?? "Failed to remove color.");
            return;
        }
        await loadBrands();
    }
    function readFileAsDataUrl(file) {
        return new Promise((resolve, reject)=>{
            const reader = new FileReader();
            reader.onload = ()=>{
                if (typeof reader.result === "string") resolve(reader.result);
                else reject(new Error("Failed to read file."));
            };
            reader.onerror = ()=>reject(new Error("Failed to read file."));
            reader.readAsDataURL(file);
        });
    }
    async function handleExtractColorsFromImage(palette) {
        setError(null);
        const file = imageFileByPaletteId[palette.id];
        if (!file) {
            setError("Pick an image to extract colors.");
            return;
        }
        if (file.size > 6 * 1024 * 1024) {
            setError("Image is too large (max 6MB).");
            return;
        }
        let imageBase64;
        try {
            imageBase64 = await readFileAsDataUrl(file);
        } catch (error) {
            setError(String(error));
            return;
        }
        setImageLoadingByPaletteId((prev)=>({
                ...prev,
                [palette.id]: true
            }));
        setImageLoadingStepByPaletteId((prev)=>({
                ...prev,
                [palette.id]: 0
            }));
        if (imageLoadingTimers.current[palette.id]) {
            clearInterval(imageLoadingTimers.current[palette.id]);
        }
        imageLoadingTimers.current[palette.id] = setInterval(()=>{
            setImageLoadingStepByPaletteId((prev)=>{
                const current = prev[palette.id] ?? 0;
                const next = current < imageLoadingMessages.length - 1 ? current + 1 : current;
                return {
                    ...prev,
                    [palette.id]: next
                };
            });
        }, 1500);
        try {
            const res = await fetch(`/api/palettes/${palette.id}/colors-from-image`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    imageBase64
                })
            });
            if (!res.ok) {
                const data = await readJsonSafe(res);
                setError(data?.error ?? "Failed to extract colors.");
                return;
            }
            setImageFileByPaletteId((prev)=>({
                    ...prev,
                    [palette.id]: null
                }));
            await loadBrands();
        } finally{
            if (imageLoadingTimers.current[palette.id]) {
                clearInterval(imageLoadingTimers.current[palette.id]);
                delete imageLoadingTimers.current[palette.id];
            }
            setImageLoadingByPaletteId((prev)=>({
                    ...prev,
                    [palette.id]: false
                }));
        }
    }
    async function handleDeleteBrand(id) {
        const res = await fetch(`/api/brands/${id}`, {
            method: "DELETE"
        });
        if (!res.ok) {
            const data = await readJsonSafe(res);
            setError(data?.error ?? "Failed to delete brand.");
            return;
        }
        await loadBrands();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-zinc-50 text-zinc-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500",
                            children: "Brand Workspace"
                        }, void 0, false, {
                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                            lineNumber: 458,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-semibold tracking-tight",
                            children: "Create brands and palettes"
                        }, void 0, false, {
                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                            lineNumber: 461,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "max-w-2xl text-base text-zinc-600",
                            children: "Keep your Instagram aesthetic consistent by defining brand palettes. Next we will connect this to AI captioning and image guidance."
                        }, void 0, false, {
                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                            lineNumber: 464,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                    lineNumber: 457,
                    columnNumber: 9
                }, this),
                error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                    lineNumber: 471,
                    columnNumber: 11
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "grid gap-6 lg:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleCreateBrand,
                            className: "rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold",
                                    children: "Create a brand"
                                }, void 0, false, {
                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                    lineNumber: 481,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
                                            placeholder: "Brand name",
                                            value: brandName,
                                            onChange: (event)=>setBrandName(event.target.value),
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                            lineNumber: 483,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
                                            placeholder: "Instagram handle (optional)",
                                            value: brandHandle,
                                            onChange: (event)=>setBrandHandle(event.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                            lineNumber: 490,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                    lineNumber: 482,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "mt-4 inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-semibold text-white",
                                    children: "Save brand"
                                }, void 0, false, {
                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                    lineNumber: 497,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                            lineNumber: 477,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleCreatePalette,
                            className: "rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold",
                                    children: "Add a palette"
                                }, void 0, false, {
                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                    lineNumber: 509,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
                                            value: selectedBrandId,
                                            onChange: (event)=>setSelectedBrandId(event.target.value),
                                            required: true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select a brand"
                                                }, void 0, false, {
                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                    lineNumber: 517,
                                                    columnNumber: 17
                                                }, this),
                                                sortedBrands.map((brand)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: brand.id,
                                                        children: brand.name
                                                    }, brand.id, false, {
                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                        lineNumber: 519,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                            lineNumber: 511,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
                                            placeholder: "Palette name",
                                            value: paletteName,
                                            onChange: (event)=>setPaletteName(event.target.value),
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                            lineNumber: 524,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
                                            placeholder: "Comma-separated colors (#111111, #f5f5f5)",
                                            value: paletteColors,
                                            onChange: (event)=>setPaletteColors(event.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                            lineNumber: 531,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                    lineNumber: 510,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "mt-4 inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-semibold text-white",
                                    children: "Save palette"
                                }, void 0, false, {
                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                    lineNumber: 538,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                            lineNumber: 505,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                    lineNumber: 476,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "flex flex-col gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold",
                                    children: "Your brands"
                                }, void 0, false, {
                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                    lineNumber: 549,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: loadBrands,
                                    className: "text-sm font-semibold text-zinc-600 hover:text-black",
                                    children: "Refresh"
                                }, void 0, false, {
                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                    lineNumber: 550,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                            lineNumber: 548,
                            columnNumber: 11
                        }, this),
                        loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-zinc-500",
                            children: "Loading brands..."
                        }, void 0, false, {
                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                            lineNumber: 559,
                            columnNumber: 13
                        }, this) : sortedBrands.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-zinc-500",
                            children: "No brands yet. Create your first one above."
                        }, void 0, false, {
                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                            lineNumber: 561,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4",
                            children: sortedBrands.map((brand)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: editingBrandId === brand.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                        onSubmit: handleUpdateBrand,
                                                        className: "flex flex-col gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
                                                                value: editingBrandName,
                                                                onChange: (event)=>setEditingBrandName(event.target.value),
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 578,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
                                                                value: editingBrandHandle,
                                                                onChange: (event)=>setEditingBrandHandle(event.target.value),
                                                                placeholder: "Instagram handle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 586,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "submit",
                                                                        className: "inline-flex items-center justify-center rounded-full bg-black px-3 py-1 text-xs font-semibold text-white",
                                                                        children: "Save"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 595,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: cancelEditBrand,
                                                                        className: "inline-flex items-center justify-center rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600",
                                                                        children: "Cancel"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 601,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 594,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                        lineNumber: 574,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-semibold",
                                                                children: brand.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 612,
                                                                columnNumber: 27
                                                            }, this),
                                                            brand.handle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-zinc-500",
                                                                children: [
                                                                    "@",
                                                                    brand.handle
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 614,
                                                                columnNumber: 29
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                    lineNumber: 572,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-end gap-2",
                                                    children: [
                                                        editingBrandId === brand.id ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>startEditBrand(brand),
                                                            className: "text-xs font-semibold uppercase tracking-wide text-zinc-500 hover:text-black",
                                                            children: "Edit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                            lineNumber: 623,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleDeleteBrand(brand.id),
                                                            className: "text-xs font-semibold uppercase tracking-wide text-zinc-500 hover:text-red-600",
                                                            children: "Delete"
                                                        }, void 0, false, {
                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                            lineNumber: 630,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                    lineNumber: 621,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                            lineNumber: 571,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap items-center justify-between gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-semibold",
                                                                    children: "AI suggestions"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                    lineNumber: 642,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-zinc-500",
                                                                    children: "Generate palette ideas and mood captions for this brand."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                    lineNumber: 643,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                            lineNumber: 641,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleGenerateAi(brand),
                                                            className: "inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-700",
                                                            disabled: aiLoadingId === brand.id,
                                                            children: aiLoadingId === brand.id ? "Generating..." : "Generate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                            lineNumber: 647,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                    lineNumber: 640,
                                                    columnNumber: 21
                                                }, this),
                                                aiByBrandId[brand.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 grid gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-semibold uppercase tracking-wide text-zinc-500",
                                                                    children: "Palette suggestions"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                    lineNumber: 659,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-2 grid gap-3",
                                                                    children: aiByBrandId[brand.id]?.palette_suggestions?.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "rounded-lg border border-zinc-200 bg-white px-3 py-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm font-semibold",
                                                                                    children: item.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                    lineNumber: 668,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "mt-2 flex flex-wrap gap-2",
                                                                                    children: item.colors.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-2 py-1 text-xs",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "h-3 w-3 rounded-full border border-zinc-200",
                                                                                                    style: {
                                                                                                        backgroundColor: color
                                                                                                    }
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                                    lineNumber: 675,
                                                                                                    columnNumber: 39
                                                                                                }, this),
                                                                                                color
                                                                                            ]
                                                                                        }, `${brand.id}-ai-${item.name}-${color}`, true, {
                                                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                            lineNumber: 671,
                                                                                            columnNumber: 37
                                                                                        }, this))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                    lineNumber: 669,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, `${brand.id}-ai-palette-${index}`, true, {
                                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                            lineNumber: 664,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                    lineNumber: 662,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                            lineNumber: 658,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-semibold uppercase tracking-wide text-zinc-500",
                                                                    children: "Mood captions"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                    lineNumber: 688,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "mt-2 grid gap-2 text-sm text-zinc-700",
                                                                    children: aiByBrandId[brand.id]?.mood_captions?.length ? aiByBrandId[brand.id]?.mood_captions?.map((caption, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "rounded-lg border border-zinc-200 bg-white px-3 py-2",
                                                                            children: caption
                                                                        }, `${brand.id}-ai-caption-${index}`, false, {
                                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                            lineNumber: 694,
                                                                            columnNumber: 33
                                                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: "text-xs text-zinc-500",
                                                                        children: "No captions returned."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 702,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                    lineNumber: 691,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                            lineNumber: 687,
                                                            columnNumber: 25
                                                        }, this),
                                                        aiRawByBrandId[brand.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-3 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-600",
                                                            children: aiRawByBrandId[brand.id]
                                                        }, void 0, false, {
                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                            lineNumber: 707,
                                                            columnNumber: 27
                                                        }, this) : null
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                    lineNumber: 657,
                                                    columnNumber: 23
                                                }, this) : aiRawByBrandId[brand.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 text-xs text-zinc-600",
                                                    children: aiRawByBrandId[brand.id]
                                                }, void 0, false, {
                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                    lineNumber: 713,
                                                    columnNumber: 23
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                            lineNumber: 639,
                                            columnNumber: 19
                                        }, this),
                                        brand.palettes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 text-sm text-zinc-500",
                                            children: "No palettes yet."
                                        }, void 0, false, {
                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                            lineNumber: 720,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 grid gap-3",
                                            children: brand.palettes.map((palette)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-xl border border-zinc-200 px-4 py-3",
                                                    children: editingPaletteId === palette.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                        onSubmit: handleUpdatePalette,
                                                        className: "flex flex-col gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
                                                                value: editingPaletteName,
                                                                onChange: (event)=>setEditingPaletteName(event.target.value),
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 735,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
                                                                value: editingPaletteColors,
                                                                onChange: (event)=>setEditingPaletteColors(event.target.value)
                                                            }, void 0, false, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 743,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "submit",
                                                                        className: "inline-flex items-center justify-center rounded-full bg-black px-3 py-1 text-xs font-semibold text-white",
                                                                        children: "Save"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 751,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: cancelEditPalette,
                                                                        className: "inline-flex items-center justify-center rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600",
                                                                        children: "Cancel"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 757,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 750,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                        lineNumber: 731,
                                                        columnNumber: 29
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-semibold",
                                                                        children: palette.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 769,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>startEditPalette(palette),
                                                                                className: "text-xs font-semibold uppercase tracking-wide text-zinc-500 hover:text-black",
                                                                                children: "Edit"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                lineNumber: 773,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>handleDeletePalette(palette.id),
                                                                                className: "text-xs font-semibold uppercase tracking-wide text-zinc-500 hover:text-red-600",
                                                                                children: "Remove"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                lineNumber: 779,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 772,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 768,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 flex flex-wrap gap-2",
                                                                children: palette.colors.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-zinc-500",
                                                                    children: "No colors listed."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                    lineNumber: 789,
                                                                    columnNumber: 35
                                                                }, this) : palette.colors.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "h-3 w-3 rounded-full border border-zinc-200",
                                                                                style: {
                                                                                    backgroundColor: color
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                lineNumber: 798,
                                                                                columnNumber: 39
                                                                            }, this),
                                                                            color,
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>handleRemovePaletteColor(palette, color),
                                                                                className: "text-[10px] font-semibold uppercase tracking-wide text-zinc-500 hover:text-red-600",
                                                                                children: "Remove"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                lineNumber: 803,
                                                                                columnNumber: 39
                                                                            }, this)
                                                                        ]
                                                                    }, `${palette.id}-${color}`, true, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 794,
                                                                        columnNumber: 37
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 787,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 flex flex-wrap gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        className: "min-w-[180px] flex-1 rounded-lg border border-zinc-200 px-3 py-2 text-xs",
                                                                        placeholder: "Add color (#111111)",
                                                                        value: newColorByPaletteId[palette.id] ?? "",
                                                                        onChange: (event)=>setNewColorByPaletteId((prev)=>({
                                                                                    ...prev,
                                                                                    [palette.id]: event.target.value
                                                                                }))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 817,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>handleAddPaletteColor(palette),
                                                                        className: "inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold text-zinc-700",
                                                                        children: "Add color"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 828,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 816,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2 flex flex-wrap gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "inline-flex min-w-[180px] flex-1 cursor-pointer items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-white px-3 py-2 text-xs font-semibold text-zinc-700 hover:border-zinc-400",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "file",
                                                                                accept: "image/*",
                                                                                onChange: (event)=>setImageFileByPaletteId((prev)=>({
                                                                                            ...prev,
                                                                                            [palette.id]: event.target.files?.[0] ?? null
                                                                                        })),
                                                                                className: "hidden"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                lineNumber: 838,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            imageFileByPaletteId[palette.id]?.name ?? "Choose image"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 837,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>handleExtractColorsFromImage(palette),
                                                                        disabled: imageLoadingByPaletteId[palette.id],
                                                                        className: "inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold text-zinc-700",
                                                                        children: imageLoadingByPaletteId[palette.id] ? "Extracting..." : "Extract from image"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 851,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 836,
                                                                columnNumber: 31
                                                            }, this),
                                                            imageLoadingByPaletteId[palette.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs font-semibold text-zinc-600",
                                                                        children: [
                                                                            imageLoadingMessages[imageLoadingStepByPaletteId[palette.id] ?? 0],
                                                                            "..."
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 864,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-2 h-2 w-full overflow-hidden rounded-full bg-zinc-100",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-full rounded-full bg-black transition-all duration-700",
                                                                            style: {
                                                                                width: `${Math.min(100, ((imageLoadingStepByPaletteId[palette.id] ?? 0) + 1) * (100 / imageLoadingMessages.length))}%`
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                            lineNumber: 873,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 872,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 863,
                                                                columnNumber: 33
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true)
                                                }, palette.id, false, {
                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                    lineNumber: 726,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                            lineNumber: 724,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, brand.id, true, {
                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                    lineNumber: 567,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                            lineNumber: 565,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                    lineNumber: 547,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
            lineNumber: 456,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
        lineNumber: 455,
        columnNumber: 5
    }, this);
}
}),
"[project]/IG.AI/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/IG.AI/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/IG.AI/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/IG.AI/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/IG.AI/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2fe6f570._.js.map