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
    const designVariations = Array.isArray(data.design_variations) ? data.design_variations.map((item)=>{
        if (!item || typeof item !== "object") return null;
        const obj = item;
        return {
            title: typeof obj.title === "string" ? obj.title : "Untitled concept",
            style_relation: typeof obj.style_relation === "string" ? obj.style_relation : "Style relation not provided.",
            concept_description: typeof obj.concept_description === "string" ? obj.concept_description : "Concept description not provided.",
            mockup: typeof obj.mockup === "string" ? obj.mockup : "Mockup direction not provided."
        };
    }).filter(Boolean) : [];
    return {
        palette_suggestions: palettes,
        mood_captions: captions,
        design_variations: designVariations
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
    const [aiImageFileByBrandId, setAiImageFileByBrandId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [aiLoadingStepByBrandId, setAiLoadingStepByBrandId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const aiLoadingTimers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
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
    const aiLoadingMessages = [
        "Analyzing style",
        "Composing variations",
        "Refining concepts",
        "Finalizing designs"
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
        const file = aiImageFileByBrandId[brand.id];
        if (!file) {
            setError("Pick an image before generating design variations.");
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
        setAiLoadingId(brand.id);
        setAiLoadingStepByBrandId((prev)=>({
                ...prev,
                [brand.id]: 0
            }));
        if (aiLoadingTimers.current[brand.id]) {
            clearInterval(aiLoadingTimers.current[brand.id]);
        }
        aiLoadingTimers.current[brand.id] = setInterval(()=>{
            setAiLoadingStepByBrandId((prev)=>{
                const current = prev[brand.id] ?? 0;
                const next = current < aiLoadingMessages.length - 1 ? current + 1 : current;
                return {
                    ...prev,
                    [brand.id]: next
                };
            });
        }, 900);
        try {
            const res = await fetch("/api/ai/brand", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    brandId: brand.id,
                    imageBase64
                })
            });
            if (!res.ok) {
                const data = await readJsonSafe(res);
                const detail = typeof data?.detail === "string" ? ` ${data.detail}` : "";
                setError((data?.error ?? "Failed to generate AI suggestions.") + detail);
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
            setAiImageFileByBrandId((prev)=>({
                    ...prev,
                    [brand.id]: null
                }));
        } finally{
            if (aiLoadingTimers.current[brand.id]) {
                clearInterval(aiLoadingTimers.current[brand.id]);
                delete aiLoadingTimers.current[brand.id];
            }
            setAiLoadingId(null);
        }
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
        const data = await readJsonSafe(res);
        if (!res.ok) {
            setError(data?.error ?? "Failed to remove color.");
            return;
        }
        const updatedColors = Array.isArray(data?.palette?.colors) ? data.palette.colors.filter((color)=>typeof color === "string") : nextColors;
        setBrands((prev)=>prev.map((brand)=>brand.id === palette.brandId ? {
                    ...brand,
                    palettes: brand.palettes.map((item)=>item.id === palette.id ? {
                            ...item,
                            colors: updatedColors
                        } : item)
                } : brand));
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
                            lineNumber: 558,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-semibold tracking-tight",
                            children: "Create brands and palettes"
                        }, void 0, false, {
                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                            lineNumber: 561,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "max-w-2xl text-base text-zinc-600",
                            children: "Keep your Instagram aesthetic consistent by defining brand palettes. Next we will connect this to AI captioning and image guidance."
                        }, void 0, false, {
                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                            lineNumber: 564,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                    lineNumber: 557,
                    columnNumber: 9
                }, this),
                error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                    lineNumber: 571,
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
                                    lineNumber: 581,
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
                                            lineNumber: 583,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
                                            placeholder: "Instagram handle (optional)",
                                            value: brandHandle,
                                            onChange: (event)=>setBrandHandle(event.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                            lineNumber: 590,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                    lineNumber: 582,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "mt-4 inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-semibold text-white",
                                    children: "Save brand"
                                }, void 0, false, {
                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                    lineNumber: 597,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                            lineNumber: 577,
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
                                    lineNumber: 609,
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
                                                    lineNumber: 617,
                                                    columnNumber: 17
                                                }, this),
                                                sortedBrands.map((brand)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: brand.id,
                                                        children: brand.name
                                                    }, brand.id, false, {
                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                        lineNumber: 619,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                            lineNumber: 611,
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
                                            lineNumber: 624,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
                                            placeholder: "Comma-separated colors (#111111, #f5f5f5)",
                                            value: paletteColors,
                                            onChange: (event)=>setPaletteColors(event.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                            lineNumber: 631,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                    lineNumber: 610,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "mt-4 inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-semibold text-white",
                                    children: "Save palette"
                                }, void 0, false, {
                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                    lineNumber: 638,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                            lineNumber: 605,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                    lineNumber: 576,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "flex flex-col gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold",
                                children: "Your brands"
                            }, void 0, false, {
                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                lineNumber: 649,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                            lineNumber: 648,
                            columnNumber: 11
                        }, this),
                        loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-zinc-500",
                            children: "Loading brands..."
                        }, void 0, false, {
                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                            lineNumber: 653,
                            columnNumber: 13
                        }, this) : sortedBrands.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-zinc-500",
                            children: "No brands yet. Create your first one above."
                        }, void 0, false, {
                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                            lineNumber: 655,
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
                                                                lineNumber: 672,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
                                                                value: editingBrandHandle,
                                                                onChange: (event)=>setEditingBrandHandle(event.target.value),
                                                                placeholder: "Instagram handle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 680,
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
                                                                        lineNumber: 689,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: cancelEditBrand,
                                                                        className: "inline-flex items-center justify-center rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600",
                                                                        children: "Cancel"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 695,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 688,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                        lineNumber: 668,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-semibold",
                                                                children: brand.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 706,
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
                                                                lineNumber: 708,
                                                                columnNumber: 29
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                    lineNumber: 666,
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
                                                            lineNumber: 717,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleDeleteBrand(brand.id),
                                                            className: "text-xs font-semibold uppercase tracking-wide text-zinc-500 hover:text-red-600",
                                                            children: "Delete"
                                                        }, void 0, false, {
                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                            lineNumber: 724,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                    lineNumber: 715,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                            lineNumber: 665,
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
                                                                    lineNumber: 736,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-zinc-500",
                                                                    children: "Generate stylistically similar design concept variations."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                    lineNumber: 737,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                            lineNumber: 735,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex min-w-[240px] flex-col items-stretch gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "inline-flex cursor-pointer items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-white px-3 py-2 text-xs font-semibold text-zinc-700 hover:border-zinc-400",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "file",
                                                                            accept: "image/*",
                                                                            onChange: (event)=>setAiImageFileByBrandId((prev)=>({
                                                                                        ...prev,
                                                                                        [brand.id]: event.target.files?.[0] ?? null
                                                                                    })),
                                                                            className: "hidden"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                            lineNumber: 743,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        aiImageFileByBrandId[brand.id]?.name ?? "Choose reference image"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                    lineNumber: 742,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>handleGenerateAi(brand),
                                                                    className: "inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold text-zinc-700",
                                                                    disabled: aiLoadingId === brand.id,
                                                                    children: aiLoadingId === brand.id ? "Generating..." : "Generate"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                    lineNumber: 756,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                            lineNumber: 741,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                    lineNumber: 734,
                                                    columnNumber: 21
                                                }, this),
                                                aiLoadingId === brand.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 rounded-lg border border-zinc-200 bg-white px-3 py-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-zinc-500",
                                                            children: aiLoadingMessages[aiLoadingStepByBrandId[brand.id] ?? 0]
                                                        }, void 0, false, {
                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                            lineNumber: 768,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2 h-2 w-full overflow-hidden rounded-full bg-zinc-100",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-full rounded-full bg-black transition-all duration-500",
                                                                style: {
                                                                    width: `${((aiLoadingStepByBrandId[brand.id] ?? 0) + 1) * (100 / aiLoadingMessages.length)}%`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 772,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                            lineNumber: 771,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                    lineNumber: 767,
                                                    columnNumber: 23
                                                }, this) : null,
                                                aiByBrandId[brand.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 grid gap-4",
                                                    children: [
                                                        aiByBrandId[brand.id]?.design_variations?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-semibold uppercase tracking-wide text-zinc-500",
                                                                    children: "Design variations"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                    lineNumber: 789,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-2 grid gap-3",
                                                                    children: aiByBrandId[brand.id]?.design_variations?.map((variation, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "rounded-lg border border-zinc-200 bg-white px-3 py-3",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm font-semibold",
                                                                                    children: variation.title
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                    lineNumber: 798,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "mt-2 text-xs text-zinc-600",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "font-semibold text-zinc-700",
                                                                                            children: "Style relation:"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                            lineNumber: 800,
                                                                                            columnNumber: 37
                                                                                        }, this),
                                                                                        " ",
                                                                                        variation.style_relation
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                    lineNumber: 799,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "mt-2 text-xs text-zinc-600",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "font-semibold text-zinc-700",
                                                                                            children: "Concept:"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                            lineNumber: 804,
                                                                                            columnNumber: 37
                                                                                        }, this),
                                                                                        " ",
                                                                                        variation.concept_description
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                    lineNumber: 803,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "mt-2 text-xs text-zinc-600",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "font-semibold text-zinc-700",
                                                                                            children: "Mockup:"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                            lineNumber: 808,
                                                                                            columnNumber: 37
                                                                                        }, this),
                                                                                        " ",
                                                                                        variation.mockup
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                    lineNumber: 807,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, `${brand.id}-ai-variation-${index}`, true, {
                                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                            lineNumber: 794,
                                                                            columnNumber: 33
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                    lineNumber: 792,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                            lineNumber: 788,
                                                            columnNumber: 27
                                                        }, this) : null,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-semibold uppercase tracking-wide text-zinc-500",
                                                                    children: "Palette suggestions"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                    lineNumber: 817,
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
                                                                                    lineNumber: 826,
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
                                                                                                    lineNumber: 833,
                                                                                                    columnNumber: 39
                                                                                                }, this),
                                                                                                color
                                                                                            ]
                                                                                        }, `${brand.id}-ai-${item.name}-${color}`, true, {
                                                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                            lineNumber: 829,
                                                                                            columnNumber: 37
                                                                                        }, this))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                    lineNumber: 827,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, `${brand.id}-ai-palette-${index}`, true, {
                                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                            lineNumber: 822,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                    lineNumber: 820,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                            lineNumber: 816,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-semibold uppercase tracking-wide text-zinc-500",
                                                                    children: "Mood captions"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                    lineNumber: 846,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "mt-2 grid gap-2 text-sm text-zinc-700",
                                                                    children: aiByBrandId[brand.id]?.mood_captions?.length ? aiByBrandId[brand.id]?.mood_captions?.map((caption, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "rounded-lg border border-zinc-200 bg-white px-3 py-2",
                                                                            children: caption
                                                                        }, `${brand.id}-ai-caption-${index}`, false, {
                                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                            lineNumber: 852,
                                                                            columnNumber: 33
                                                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: "text-xs text-zinc-500",
                                                                        children: "No captions returned."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 860,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                    lineNumber: 849,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                            lineNumber: 845,
                                                            columnNumber: 25
                                                        }, this),
                                                        aiRawByBrandId[brand.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-3 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-600",
                                                            children: aiRawByBrandId[brand.id]
                                                        }, void 0, false, {
                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                            lineNumber: 865,
                                                            columnNumber: 27
                                                        }, this) : null
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                    lineNumber: 786,
                                                    columnNumber: 23
                                                }, this) : aiRawByBrandId[brand.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 text-xs text-zinc-600",
                                                    children: aiRawByBrandId[brand.id]
                                                }, void 0, false, {
                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                    lineNumber: 871,
                                                    columnNumber: 23
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                            lineNumber: 733,
                                            columnNumber: 19
                                        }, this),
                                        brand.palettes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 text-sm text-zinc-500",
                                            children: "No palettes yet."
                                        }, void 0, false, {
                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                            lineNumber: 878,
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
                                                                lineNumber: 893,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
                                                                value: editingPaletteColors,
                                                                onChange: (event)=>setEditingPaletteColors(event.target.value)
                                                            }, void 0, false, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 901,
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
                                                                        lineNumber: 909,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: cancelEditPalette,
                                                                        className: "inline-flex items-center justify-center rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600",
                                                                        children: "Cancel"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 915,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 908,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                        lineNumber: 889,
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
                                                                        lineNumber: 927,
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
                                                                                lineNumber: 931,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>handleDeletePalette(palette.id),
                                                                                className: "text-xs font-semibold uppercase tracking-wide text-zinc-500 hover:text-red-600",
                                                                                children: "Remove"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                lineNumber: 937,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 930,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 926,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 flex flex-wrap gap-2",
                                                                children: palette.colors.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-zinc-500",
                                                                    children: "No colors listed."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                    lineNumber: 947,
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
                                                                                lineNumber: 956,
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
                                                                                lineNumber: 961,
                                                                                columnNumber: 39
                                                                            }, this)
                                                                        ]
                                                                    }, `${palette.id}-${color}`, true, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 952,
                                                                        columnNumber: 37
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 945,
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
                                                                        lineNumber: 975,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>handleAddPaletteColor(palette),
                                                                        className: "inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold text-zinc-700",
                                                                        children: "Add color"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 986,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 974,
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
                                                                                lineNumber: 996,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            imageFileByPaletteId[palette.id]?.name ?? "Choose image"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 995,
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
                                                                        lineNumber: 1009,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 994,
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
                                                                        lineNumber: 1022,
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
                                                                            lineNumber: 1031,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 1030,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 1021,
                                                                columnNumber: 33
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true)
                                                }, palette.id, false, {
                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                    lineNumber: 884,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                            lineNumber: 882,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, brand.id, true, {
                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                    lineNumber: 661,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                            lineNumber: 659,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                    lineNumber: 647,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
            lineNumber: 556,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
        lineNumber: 555,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7075c70a._.js.map