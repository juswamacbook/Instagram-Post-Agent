(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/IG.AI/src/app/brands/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BrandsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/IG.AI/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/IG.AI/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    _s();
    const [brands, setBrands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [brandName, setBrandName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [brandHandle, setBrandHandle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [paletteName, setPaletteName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [paletteColors, setPaletteColors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedBrandId, setSelectedBrandId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [aiLoadingId, setAiLoadingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [aiByBrandId, setAiByBrandId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [aiRawByBrandId, setAiRawByBrandId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [editingBrandId, setEditingBrandId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingBrandName, setEditingBrandName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingBrandHandle, setEditingBrandHandle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingPaletteId, setEditingPaletteId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingPaletteName, setEditingPaletteName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingPaletteColors, setEditingPaletteColors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newColorByPaletteId, setNewColorByPaletteId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [imageFileByPaletteId, setImageFileByPaletteId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [imageLoadingByPaletteId, setImageLoadingByPaletteId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [imageLoadingStepByPaletteId, setImageLoadingStepByPaletteId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const imageLoadingTimers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const imageLoadingMessages = [
        "Scanning your image",
        "Reading your image",
        "Scraping colors",
        "Finalizing details"
    ];
    const sortedBrands = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BrandsPage.useMemo[sortedBrands]": ()=>[
                ...brands
            ].sort({
                "BrandsPage.useMemo[sortedBrands]": (a, b)=>a.name.localeCompare(b.name)
            }["BrandsPage.useMemo[sortedBrands]"])
    }["BrandsPage.useMemo[sortedBrands]"], [
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BrandsPage.useEffect": ()=>{
            loadBrands();
        }
    }["BrandsPage.useEffect"], []);
    async function handleCreateBrand(event) {
        event.preventDefault();
        setError(null);
        const res_0 = await fetch("/api/brands", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: brandName,
                handle: brandHandle || null
            })
        });
        if (!res_0.ok) {
            const data_0 = await readJsonSafe(res_0);
            setError(data_0?.error ?? "Failed to create brand.");
            return;
        }
        setBrandName("");
        setBrandHandle("");
        await loadBrands();
    }
    async function handleCreatePalette(event_0) {
        event_0.preventDefault();
        setError(null);
        if (!selectedBrandId) {
            setError("Pick a brand before adding a palette.");
            return;
        }
        const colors = paletteColors.split(",").map((color)=>color.trim()).filter(Boolean);
        const res_1 = await fetch("/api/palettes", {
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
        if (!res_1.ok) {
            const data_1 = await readJsonSafe(res_1);
            setError(data_1?.error ?? "Failed to create palette.");
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
    async function handleUpdateBrand(event_1) {
        event_1.preventDefault();
        if (!editingBrandId) return;
        const res_2 = await fetch(`/api/brands/${editingBrandId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: editingBrandName,
                handle: editingBrandHandle || null
            })
        });
        if (!res_2.ok) {
            const data_2 = await readJsonSafe(res_2);
            setError(data_2?.error ?? "Failed to update brand.");
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
    async function handleUpdatePalette(event_2) {
        event_2.preventDefault();
        if (!editingPaletteId) return;
        const colors_0 = editingPaletteColors.split(",").map((color_0)=>color_0.trim()).filter(Boolean);
        const res_3 = await fetch(`/api/palettes/${editingPaletteId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: editingPaletteName,
                colors: colors_0
            })
        });
        if (!res_3.ok) {
            const data_3 = await readJsonSafe(res_3);
            setError(data_3?.error ?? "Failed to update palette.");
            return;
        }
        cancelEditPalette();
        await loadBrands();
    }
    async function handleGenerateAi(brand_0) {
        setError(null);
        setAiLoadingId(brand_0.id);
        const res_4 = await fetch("/api/ai/brand", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                brandId: brand_0.id
            })
        });
        if (!res_4.ok) {
            const data_4 = await readJsonSafe(res_4);
            const detail = typeof data_4?.detail === "string" ? ` ${data_4.detail}` : "";
            setError((data_4?.error ?? "Failed to generate AI suggestions.") + detail);
            setAiLoadingId(null);
            return;
        }
        const data_5 = await readJsonSafe(res_4);
        const rawText = typeof data_5?.raw === "string" ? data_5.raw : null;
        const result = data_5?.result ?? (rawText ? safeJsonParse(rawText) : null);
        const normalized = normalizeAiResult(result);
        setAiByBrandId((prev)=>({
                ...prev,
                [brand_0.id]: normalized
            }));
        setAiRawByBrandId((prev_0)=>({
                ...prev_0,
                [brand_0.id]: rawText
            }));
        setAiLoadingId(null);
    }
    async function handleDeletePalette(id) {
        const res_5 = await fetch(`/api/palettes/${id}`, {
            method: "DELETE"
        });
        if (!res_5.ok) {
            const data_6 = await readJsonSafe(res_5);
            setError(data_6?.error ?? "Failed to delete palette.");
            return;
        }
        await loadBrands();
    }
    async function handleAddPaletteColor(palette_0) {
        setError(null);
        const raw = newColorByPaletteId[palette_0.id]?.trim() ?? "";
        if (!raw) {
            setError("Enter a color value to add.");
            return;
        }
        const nextColors = Array.from(new Set([
            ...palette_0.colors,
            raw
        ]));
        const res_6 = await fetch(`/api/palettes/${palette_0.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                colors: nextColors
            })
        });
        if (!res_6.ok) {
            const data_7 = await readJsonSafe(res_6);
            setError(data_7?.error ?? "Failed to add color.");
            return;
        }
        setNewColorByPaletteId((prev_1)=>({
                ...prev_1,
                [palette_0.id]: ""
            }));
        await loadBrands();
    }
    async function handleRemovePaletteColor(palette_1, colorToRemove) {
        setError(null);
        const nextColors_0 = palette_1.colors.filter((color_1)=>color_1 !== colorToRemove);
        const res_7 = await fetch(`/api/palettes/${palette_1.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                colors: nextColors_0
            })
        });
        if (!res_7.ok) {
            const data_8 = await readJsonSafe(res_7);
            setError(data_8?.error ?? "Failed to remove color.");
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
    async function handleExtractColorsFromImage(palette_2) {
        setError(null);
        const file_0 = imageFileByPaletteId[palette_2.id];
        if (!file_0) {
            setError("Pick an image to extract colors.");
            return;
        }
        if (file_0.size > 6 * 1024 * 1024) {
            setError("Image is too large (max 6MB).");
            return;
        }
        let imageBase64;
        try {
            imageBase64 = await readFileAsDataUrl(file_0);
        } catch (error_0) {
            setError(String(error_0));
            return;
        }
        setImageLoadingByPaletteId((prev_2)=>({
                ...prev_2,
                [palette_2.id]: true
            }));
        setImageLoadingStepByPaletteId((prev_3)=>({
                ...prev_3,
                [palette_2.id]: 0
            }));
        if (imageLoadingTimers.current[palette_2.id]) {
            clearInterval(imageLoadingTimers.current[palette_2.id]);
        }
        imageLoadingTimers.current[palette_2.id] = setInterval(()=>{
            setImageLoadingStepByPaletteId((prev_4)=>{
                const current = prev_4[palette_2.id] ?? 0;
                const next = current < imageLoadingMessages.length - 1 ? current + 1 : current;
                return {
                    ...prev_4,
                    [palette_2.id]: next
                };
            });
        }, 1500);
        try {
            const res = await fetch(`/api/palettes/${palette_2.id}/colors-from-image`, {
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
                    [palette_2.id]: null
                }));
            await loadBrands();
        } finally{
            if (imageLoadingTimers.current[palette_2.id]) {
                clearInterval(imageLoadingTimers.current[palette_2.id]);
                delete imageLoadingTimers.current[palette_2.id];
            }
            setImageLoadingByPaletteId((prev)=>({
                    ...prev,
                    [palette_2.id]: false
                }));
        }
    }
    async function handleDeleteBrand(id_0) {
        const res_8 = await fetch(`/api/brands/${id_0}`, {
            method: "DELETE"
        });
        if (!res_8.ok) {
            const data_9 = await readJsonSafe(res_8);
            setError(data_9?.error ?? "Failed to delete brand.");
            return;
        }
        await loadBrands();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-zinc-50 text-zinc-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500",
                            children: "Brand Workspace"
                        }, void 0, false, {
                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                            lineNumber: 427,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-semibold tracking-tight",
                            children: "Create brands and palettes"
                        }, void 0, false, {
                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                            lineNumber: 430,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "max-w-2xl text-base text-zinc-600",
                            children: "Keep your Instagram aesthetic consistent by defining brand palettes. Next we will connect this to AI captioning and image guidance."
                        }, void 0, false, {
                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                            lineNumber: 433,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                    lineNumber: 426,
                    columnNumber: 9
                }, this),
                error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                    lineNumber: 439,
                    columnNumber: 18
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "grid gap-6 lg:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleCreateBrand,
                            className: "rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold",
                                    children: "Create a brand"
                                }, void 0, false, {
                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                    lineNumber: 445,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
                                            placeholder: "Brand name",
                                            value: brandName,
                                            onChange: (event_3)=>setBrandName(event_3.target.value),
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                            lineNumber: 447,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
                                            placeholder: "Instagram handle (optional)",
                                            value: brandHandle,
                                            onChange: (event_4)=>setBrandHandle(event_4.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                            lineNumber: 448,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                    lineNumber: 446,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "mt-4 inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-semibold text-white",
                                    children: "Save brand"
                                }, void 0, false, {
                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                    lineNumber: 450,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                            lineNumber: 444,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleCreatePalette,
                            className: "rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold",
                                    children: "Add a palette"
                                }, void 0, false, {
                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                    lineNumber: 456,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
                                            value: selectedBrandId,
                                            onChange: (event_5)=>setSelectedBrandId(event_5.target.value),
                                            required: true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select a brand"
                                                }, void 0, false, {
                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                    lineNumber: 459,
                                                    columnNumber: 17
                                                }, this),
                                                sortedBrands.map((brand_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: brand_1.id,
                                                        children: brand_1.name
                                                    }, brand_1.id, false, {
                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                        lineNumber: 460,
                                                        columnNumber: 46
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                            lineNumber: 458,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
                                            placeholder: "Palette name",
                                            value: paletteName,
                                            onChange: (event_6)=>setPaletteName(event_6.target.value),
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                            lineNumber: 464,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
                                            placeholder: "Comma-separated colors (#111111, #f5f5f5)",
                                            value: paletteColors,
                                            onChange: (event_7)=>setPaletteColors(event_7.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                            lineNumber: 465,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                    lineNumber: 457,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "mt-4 inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-semibold text-white",
                                    children: "Save palette"
                                }, void 0, false, {
                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                    lineNumber: 467,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                            lineNumber: 455,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                    lineNumber: 443,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "flex flex-col gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold",
                                    children: "Your brands"
                                }, void 0, false, {
                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                    lineNumber: 475,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: loadBrands,
                                    className: "text-sm font-semibold text-zinc-600 hover:text-black",
                                    children: "Refresh"
                                }, void 0, false, {
                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                    lineNumber: 476,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                            lineNumber: 474,
                            columnNumber: 11
                        }, this),
                        loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-zinc-500",
                            children: "Loading brands..."
                        }, void 0, false, {
                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                            lineNumber: 481,
                            columnNumber: 22
                        }, this) : sortedBrands.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-zinc-500",
                            children: "No brands yet. Create your first one above."
                        }, void 0, false, {
                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                            lineNumber: 481,
                            columnNumber: 115
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4",
                            children: sortedBrands.map((brand_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: editingBrandId === brand_2.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                        onSubmit: handleUpdateBrand,
                                                        className: "flex flex-col gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
                                                                value: editingBrandName,
                                                                onChange: (event_8)=>setEditingBrandName(event_8.target.value),
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 488,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
                                                                value: editingBrandHandle,
                                                                onChange: (event_9)=>setEditingBrandHandle(event_9.target.value),
                                                                placeholder: "Instagram handle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 489,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "submit",
                                                                        className: "inline-flex items-center justify-center rounded-full bg-black px-3 py-1 text-xs font-semibold text-white",
                                                                        children: "Save"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 491,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: cancelEditBrand,
                                                                        className: "inline-flex items-center justify-center rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600",
                                                                        children: "Cancel"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 494,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 490,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                        lineNumber: 487,
                                                        columnNumber: 56
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-semibold",
                                                                children: brand_2.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 499,
                                                                columnNumber: 27
                                                            }, this),
                                                            brand_2.handle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-zinc-500",
                                                                children: [
                                                                    "@",
                                                                    brand_2.handle
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 500,
                                                                columnNumber: 45
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                    lineNumber: 486,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-end gap-2",
                                                    children: [
                                                        editingBrandId === brand_2.id ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>startEditBrand(brand_2),
                                                            className: "text-xs font-semibold uppercase tracking-wide text-zinc-500 hover:text-black",
                                                            children: "Edit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                            lineNumber: 506,
                                                            columnNumber: 63
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleDeleteBrand(brand_2.id),
                                                            className: "text-xs font-semibold uppercase tracking-wide text-zinc-500 hover:text-red-600",
                                                            children: "Delete"
                                                        }, void 0, false, {
                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                            lineNumber: 509,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                    lineNumber: 505,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                            lineNumber: 485,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap items-center justify-between gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-semibold",
                                                                    children: "AI suggestions"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                    lineNumber: 518,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-zinc-500",
                                                                    children: "Generate palette ideas and mood captions for this brand."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                    lineNumber: 519,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                            lineNumber: 517,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleGenerateAi(brand_2),
                                                            className: "inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-700",
                                                            disabled: aiLoadingId === brand_2.id,
                                                            children: aiLoadingId === brand_2.id ? "Generating..." : "Generate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                            lineNumber: 523,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                    lineNumber: 516,
                                                    columnNumber: 21
                                                }, this),
                                                aiByBrandId[brand_2.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 grid gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-semibold uppercase tracking-wide text-zinc-500",
                                                                    children: "Palette suggestions"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                    lineNumber: 530,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-2 grid gap-3",
                                                                    children: aiByBrandId[brand_2.id]?.palette_suggestions?.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "rounded-lg border border-zinc-200 bg-white px-3 py-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm font-semibold",
                                                                                    children: item.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                    lineNumber: 535,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "mt-2 flex flex-wrap gap-2",
                                                                                    children: item.colors.map((color_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-2 py-1 text-xs",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "h-3 w-3 rounded-full border border-zinc-200",
                                                                                                    style: {
                                                                                                        backgroundColor: color_2
                                                                                                    }
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                                    lineNumber: 538,
                                                                                                    columnNumber: 39
                                                                                                }, this),
                                                                                                color_2
                                                                                            ]
                                                                                        }, `${brand_2.id}-ai-${item.name}-${color_2}`, true, {
                                                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                            lineNumber: 537,
                                                                                            columnNumber: 63
                                                                                        }, this))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                    lineNumber: 536,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, `${brand_2.id}-ai-palette-${index}`, true, {
                                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                            lineNumber: 534,
                                                                            columnNumber: 97
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                    lineNumber: 533,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                            lineNumber: 529,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-semibold uppercase tracking-wide text-zinc-500",
                                                                    children: "Mood captions"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                    lineNumber: 548,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "mt-2 grid gap-2 text-sm text-zinc-700",
                                                                    children: aiByBrandId[brand_2.id]?.mood_captions?.length ? aiByBrandId[brand_2.id]?.mood_captions?.map((caption, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "rounded-lg border border-zinc-200 bg-white px-3 py-2",
                                                                            children: caption
                                                                        }, `${brand_2.id}-ai-caption-${index_0}`, false, {
                                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                            lineNumber: 552,
                                                                            columnNumber: 145
                                                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: "text-xs text-zinc-500",
                                                                        children: "No captions returned."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 554,
                                                                        columnNumber: 42
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                    lineNumber: 551,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                            lineNumber: 547,
                                                            columnNumber: 25
                                                        }, this),
                                                        aiRawByBrandId[brand_2.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-3 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-600",
                                                            children: aiRawByBrandId[brand_2.id]
                                                        }, void 0, false, {
                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                            lineNumber: 557,
                                                            columnNumber: 55
                                                        }, this) : null
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                    lineNumber: 528,
                                                    columnNumber: 48
                                                }, this) : aiRawByBrandId[brand_2.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 text-xs text-zinc-600",
                                                    children: aiRawByBrandId[brand_2.id]
                                                }, void 0, false, {
                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                    lineNumber: 560,
                                                    columnNumber: 61
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                            lineNumber: 515,
                                            columnNumber: 19
                                        }, this),
                                        brand_2.palettes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 text-sm text-zinc-500",
                                            children: "No palettes yet."
                                        }, void 0, false, {
                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                            lineNumber: 565,
                                            columnNumber: 52
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 grid gap-3",
                                            children: brand_2.palettes.map((palette_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-xl border border-zinc-200 px-4 py-3",
                                                    children: editingPaletteId === palette_3.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                        onSubmit: handleUpdatePalette,
                                                        className: "flex flex-col gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
                                                                value: editingPaletteName,
                                                                onChange: (event_10)=>setEditingPaletteName(event_10.target.value),
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 570,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
                                                                value: editingPaletteColors,
                                                                onChange: (event_11)=>setEditingPaletteColors(event_11.target.value)
                                                            }, void 0, false, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 571,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "submit",
                                                                        className: "inline-flex items-center justify-center rounded-full bg-black px-3 py-1 text-xs font-semibold text-white",
                                                                        children: "Save"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 573,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: cancelEditPalette,
                                                                        className: "inline-flex items-center justify-center rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600",
                                                                        children: "Cancel"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 576,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 572,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                        lineNumber: 569,
                                                        columnNumber: 64
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-semibold",
                                                                        children: palette_3.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 582,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>startEditPalette(palette_3),
                                                                                className: "text-xs font-semibold uppercase tracking-wide text-zinc-500 hover:text-black",
                                                                                children: "Edit"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                lineNumber: 586,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>handleDeletePalette(palette_3.id),
                                                                                className: "text-xs font-semibold uppercase tracking-wide text-zinc-500 hover:text-red-600",
                                                                                children: "Remove"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                lineNumber: 589,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 585,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 581,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 flex flex-wrap gap-2",
                                                                children: palette_3.colors.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-zinc-500",
                                                                    children: "No colors listed."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                    lineNumber: 595,
                                                                    columnNumber: 66
                                                                }, this) : palette_3.colors.map((color_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "h-3 w-3 rounded-full border border-zinc-200",
                                                                                style: {
                                                                                    backgroundColor: color_3
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                lineNumber: 598,
                                                                                columnNumber: 39
                                                                            }, this),
                                                                            color_3,
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>handleRemovePaletteColor(palette_3, color_3),
                                                                                className: "text-[10px] font-semibold uppercase tracking-wide text-zinc-500 hover:text-red-600",
                                                                                children: "Remove"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                lineNumber: 602,
                                                                                columnNumber: 39
                                                                            }, this)
                                                                        ]
                                                                    }, `${palette_3.id}-${color_3}`, true, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 597,
                                                                        columnNumber: 77
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 594,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 flex flex-wrap gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        className: "min-w-[180px] flex-1 rounded-lg border border-zinc-200 px-3 py-2 text-xs",
                                                                        placeholder: "Add color (#111111)",
                                                                        value: newColorByPaletteId[palette_3.id] ?? "",
                                                                        onChange: (event_12)=>setNewColorByPaletteId((prev_5)=>({
                                                                                    ...prev_5,
                                                                                    [palette_3.id]: event_12.target.value
                                                                                }))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 608,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>handleAddPaletteColor(palette_3),
                                                                        className: "inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold text-zinc-700",
                                                                        children: "Add color"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 612,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 607,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2 flex flex-wrap gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "inline-flex min-w-[180px] flex-1 cursor-pointer items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-white px-3 py-2 text-xs font-semibold text-zinc-700 hover:border-zinc-400",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "file",
                                                                                accept: "image/*",
                                                                                onChange: (event_13)=>setImageFileByPaletteId((prev_6)=>({
                                                                                            ...prev_6,
                                                                                            [palette_3.id]: event_13.target.files?.[0] ?? null
                                                                                        })),
                                                                                className: "hidden"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                lineNumber: 618,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            imageFileByPaletteId[palette_3.id]?.name ?? "Choose image"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 617,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>handleExtractColorsFromImage(palette_3),
                                                                        disabled: imageLoadingByPaletteId[palette_3.id],
                                                                        className: "inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold text-zinc-700",
                                                                        children: imageLoadingByPaletteId[palette_3.id] ? "Extracting..." : "Extract from image"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 624,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 616,
                                                                columnNumber: 31
                                                            }, this),
                                                            imageLoadingByPaletteId[palette_3.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs font-semibold text-zinc-600",
                                                                        children: [
                                                                            imageLoadingMessages[imageLoadingStepByPaletteId[palette_3.id] ?? 0],
                                                                            "..."
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 629,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-2 h-2 w-full overflow-hidden rounded-full bg-zinc-100",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-full rounded-full bg-black transition-all duration-700",
                                                                            style: {
                                                                                width: `${Math.min(100, ((imageLoadingStepByPaletteId[palette_3.id] ?? 0) + 1) * (100 / imageLoadingMessages.length))}%`
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                            lineNumber: 634,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 633,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 628,
                                                                columnNumber: 72
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true)
                                                }, palette_3.id, false, {
                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                    lineNumber: 568,
                                                    columnNumber: 58
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                            lineNumber: 567,
                                            columnNumber: 28
                                        }, this)
                                    ]
                                }, brand_2.id, true, {
                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                    lineNumber: 484,
                                    columnNumber: 44
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                            lineNumber: 483,
                            columnNumber: 22
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                    lineNumber: 473,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
            lineNumber: 425,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
        lineNumber: 424,
        columnNumber: 10
    }, this);
}
_s(BrandsPage, "24eiwJVSr4f1npRpQBjjcJDsXtY=");
_c = BrandsPage;
var _c;
__turbopack_context__.k.register(_c, "BrandsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/IG.AI/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/IG.AI/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/IG.AI/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/IG.AI/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/IG.AI/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/IG.AI/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=IG_AI_de246b8f._.js.map