(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/IG.AI/src/app/brands/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BrandsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/IG.AI/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/IG.AI/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/IG.AI/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(107);
    if ($[0] !== "e3e748eb022cc5697dd7fcc26e0efc82860fe74ae028226f0a818fde94fca606") {
        for(let $i = 0; $i < 107; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e3e748eb022cc5697dd7fcc26e0efc82860fe74ae028226f0a818fde94fca606";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [brands, setBrands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [brandName, setBrandName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [brandHandle, setBrandHandle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [paletteName, setPaletteName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [paletteColors, setPaletteColors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedBrandId, setSelectedBrandId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [aiLoadingId, setAiLoadingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {};
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [aiByBrandId, setAiByBrandId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {};
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const [aiRawByBrandId, setAiRawByBrandId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    const [editingBrandId, setEditingBrandId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingBrandName, setEditingBrandName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingBrandHandle, setEditingBrandHandle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingPaletteId, setEditingPaletteId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingPaletteName, setEditingPaletteName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingPaletteColors, setEditingPaletteColors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {};
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const [newColorByPaletteId, setNewColorByPaletteId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {};
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const [imageFileByPaletteId, setImageFileByPaletteId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t4);
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {};
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t5);
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {};
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t6);
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {};
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t7);
    let t8;
    if ($[9] !== brands) {
        t8 = [
            ...brands
        ].sort(_BrandsPageAnonymous);
        $[9] = brands;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    const sortedBrands = t8;
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = async function loadBrands() {
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
        };
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    const loadBrands = t9;
    let t10;
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "BrandsPage[useEffect()]": ()=>{
                loadBrands();
            }
        })["BrandsPage[useEffect()]"];
        t11 = [];
        $[12] = t10;
        $[13] = t11;
    } else {
        t10 = $[12];
        t11 = $[13];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t10, t11);
    let t12;
    if ($[14] !== brandHandle || $[15] !== brandName) {
        t12 = async function handleCreateBrand(event) {
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
        };
        $[14] = brandHandle;
        $[15] = brandName;
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    const handleCreateBrand = t12;
    let t13;
    if ($[17] !== paletteColors || $[18] !== paletteName || $[19] !== selectedBrandId) {
        t13 = async function handleCreatePalette(event_0) {
            event_0.preventDefault();
            setError(null);
            if (!selectedBrandId) {
                setError("Pick a brand before adding a palette.");
                return;
            }
            const colors = paletteColors.split(",").map(_BrandsPageHandleCreatePaletteAnonymous).filter(Boolean);
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
        };
        $[17] = paletteColors;
        $[18] = paletteName;
        $[19] = selectedBrandId;
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    const handleCreatePalette = t13;
    let t14;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = function startEditBrand(brand) {
            setEditingBrandId(brand.id);
            setEditingBrandName(brand.name);
            setEditingBrandHandle(brand.handle ?? "");
        };
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    const startEditBrand = t14;
    let t15;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = function cancelEditBrand() {
            setEditingBrandId(null);
            setEditingBrandName("");
            setEditingBrandHandle("");
        };
        $[22] = t15;
    } else {
        t15 = $[22];
    }
    const cancelEditBrand = t15;
    let t16;
    if ($[23] !== editingBrandHandle || $[24] !== editingBrandId || $[25] !== editingBrandName) {
        t16 = async function handleUpdateBrand(event_1) {
            event_1.preventDefault();
            if (!editingBrandId) {
                return;
            }
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
        };
        $[23] = editingBrandHandle;
        $[24] = editingBrandId;
        $[25] = editingBrandName;
        $[26] = t16;
    } else {
        t16 = $[26];
    }
    const handleUpdateBrand = t16;
    let t17;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = function startEditPalette(palette) {
            setEditingPaletteId(palette.id);
            setEditingPaletteName(palette.name);
            setEditingPaletteColors(palette.colors.join(", "));
        };
        $[27] = t17;
    } else {
        t17 = $[27];
    }
    const startEditPalette = t17;
    let t18;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = function cancelEditPalette() {
            setEditingPaletteId(null);
            setEditingPaletteName("");
            setEditingPaletteColors("");
        };
        $[28] = t18;
    } else {
        t18 = $[28];
    }
    const cancelEditPalette = t18;
    let t19;
    if ($[29] !== editingPaletteColors || $[30] !== editingPaletteId || $[31] !== editingPaletteName) {
        t19 = async function handleUpdatePalette(event_2) {
            event_2.preventDefault();
            if (!editingPaletteId) {
                return;
            }
            const colors_0 = editingPaletteColors.split(",").map(_BrandsPageHandleUpdatePaletteAnonymous).filter(Boolean);
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
        };
        $[29] = editingPaletteColors;
        $[30] = editingPaletteId;
        $[31] = editingPaletteName;
        $[32] = t19;
    } else {
        t19 = $[32];
    }
    const handleUpdatePalette = t19;
    let t20;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = async function handleGenerateAi(brand_0) {
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
            setAiByBrandId({
                "BrandsPage[handleGenerateAi > setAiByBrandId()]": (prev)=>({
                        ...prev,
                        [brand_0.id]: normalized
                    })
            }["BrandsPage[handleGenerateAi > setAiByBrandId()]"]);
            setAiRawByBrandId({
                "BrandsPage[handleGenerateAi > setAiRawByBrandId()]": (prev_0)=>({
                        ...prev_0,
                        [brand_0.id]: rawText
                    })
            }["BrandsPage[handleGenerateAi > setAiRawByBrandId()]"]);
            setAiLoadingId(null);
        };
        $[33] = t20;
    } else {
        t20 = $[33];
    }
    const handleGenerateAi = t20;
    let t21;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = async function handleDeletePalette(id) {
            const res_5 = await fetch(`/api/palettes/${id}`, {
                method: "DELETE"
            });
            if (!res_5.ok) {
                const data_6 = await readJsonSafe(res_5);
                setError(data_6?.error ?? "Failed to delete palette.");
                return;
            }
            await loadBrands();
        };
        $[34] = t21;
    } else {
        t21 = $[34];
    }
    const handleDeletePalette = t21;
    let t22;
    if ($[35] !== newColorByPaletteId) {
        t22 = async function handleAddPaletteColor(palette_0) {
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
            setNewColorByPaletteId({
                "BrandsPage[handleAddPaletteColor > setNewColorByPaletteId()]": (prev_1)=>({
                        ...prev_1,
                        [palette_0.id]: ""
                    })
            }["BrandsPage[handleAddPaletteColor > setNewColorByPaletteId()]"]);
            await loadBrands();
        };
        $[35] = newColorByPaletteId;
        $[36] = t22;
    } else {
        t22 = $[36];
    }
    const handleAddPaletteColor = t22;
    let t23;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = async function handleRemovePaletteColor(palette_1, colorToRemove) {
            setError(null);
            const nextColors_0 = palette_1.colors.filter({
                "BrandsPage[handleRemovePaletteColor > palette_1.colors.filter()]": (color_1)=>color_1 !== colorToRemove
            }["BrandsPage[handleRemovePaletteColor > palette_1.colors.filter()]"]);
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
        };
        $[37] = t23;
    } else {
        t23 = $[37];
    }
    const handleRemovePaletteColor = t23;
    let t24;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = function readFileAsDataUrl(file) {
            return new Promise((resolve, reject)=>{
                const reader = new FileReader();
                reader.onload = ()=>{
                    if (typeof reader.result === "string") {
                        resolve(reader.result);
                    } else {
                        reject(new Error("Failed to read file."));
                    }
                };
                reader.onerror = ()=>reject(new Error("Failed to read file."));
                reader.readAsDataURL(file);
            });
        };
        $[38] = t24;
    } else {
        t24 = $[38];
    }
    const readFileAsDataUrl = t24;
    let t25;
    if ($[39] !== imageFileByPaletteId) {
        t25 = async function handleExtractColorsFromImage(palette_2) {
            setError(null);
            const file_0 = imageFileByPaletteId[palette_2.id];
            if (!file_0) {
                setError("Pick an image to extract colors.");
                return;
            }
            if (file_0.size > 6291456) {
                setError("Image is too large (max 6MB).");
                return;
            }
            let imageBase64;
            ;
            try {
                imageBase64 = await readFileAsDataUrl(file_0);
            } catch (t26) {
                const error_0 = t26;
                setError(String(error_0));
                return;
            }
            const res_8 = await fetch(`/api/palettes/${palette_2.id}/colors-from-image`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    imageBase64
                })
            });
            if (!res_8.ok) {
                const data_9 = await readJsonSafe(res_8);
                setError(data_9?.error ?? "Failed to extract colors.");
                return;
            }
            setImageFileByPaletteId({
                "BrandsPage[handleExtractColorsFromImage > setImageFileByPaletteId()]": (prev_2)=>({
                        ...prev_2,
                        [palette_2.id]: null
                    })
            }["BrandsPage[handleExtractColorsFromImage > setImageFileByPaletteId()]"]);
            await loadBrands();
        };
        $[39] = imageFileByPaletteId;
        $[40] = t25;
    } else {
        t25 = $[40];
    }
    const handleExtractColorsFromImage = t25;
    let t26;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = async function handleDeleteBrand(id_0) {
            const res_9 = await fetch(`/api/brands/${id_0}`, {
                method: "DELETE"
            });
            if (!res_9.ok) {
                const data_10 = await readJsonSafe(res_9);
                setError(data_10?.error ?? "Failed to delete brand.");
                return;
            }
            await loadBrands();
        };
        $[41] = t26;
    } else {
        t26 = $[41];
    }
    const handleDeleteBrand = t26;
    let t27;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "flex flex-col gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500",
                    children: "Brand Workspace"
                }, void 0, false, {
                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                    lineNumber: 623,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-semibold tracking-tight",
                    children: "Create brands and palettes"
                }, void 0, false, {
                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                    lineNumber: 623,
                    columnNumber: 148
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "max-w-2xl text-base text-zinc-600",
                    children: "Keep your Instagram aesthetic consistent by defining brand palettes. Next we will connect this to AI captioning and image guidance."
                }, void 0, false, {
                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                    lineNumber: 623,
                    columnNumber: 233
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
            lineNumber: 623,
            columnNumber: 11
        }, this);
        $[42] = t27;
    } else {
        t27 = $[42];
    }
    let t28;
    if ($[43] !== error) {
        t28 = error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700",
            children: error
        }, void 0, false, {
            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
            lineNumber: 630,
            columnNumber: 19
        }, this) : null;
        $[43] = error;
        $[44] = t28;
    } else {
        t28 = $[44];
    }
    let t29;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-semibold",
            children: "Create a brand"
        }, void 0, false, {
            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
            lineNumber: 638,
            columnNumber: 11
        }, this);
        $[45] = t29;
    } else {
        t29 = $[45];
    }
    let t30;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = ({
            "BrandsPage[<input>.onChange]": (event_3)=>setBrandName(event_3.target.value)
        })["BrandsPage[<input>.onChange]"];
        $[46] = t30;
    } else {
        t30 = $[46];
    }
    let t31;
    if ($[47] !== brandName) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
            placeholder: "Brand name",
            value: brandName,
            onChange: t30,
            required: true
        }, void 0, false, {
            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
            lineNumber: 654,
            columnNumber: 11
        }, this);
        $[47] = brandName;
        $[48] = t31;
    } else {
        t31 = $[48];
    }
    let t32;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = ({
            "BrandsPage[<input>.onChange]": (event_4)=>setBrandHandle(event_4.target.value)
        })["BrandsPage[<input>.onChange]"];
        $[49] = t32;
    } else {
        t32 = $[49];
    }
    let t33;
    if ($[50] !== brandHandle) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
            placeholder: "Instagram handle (optional)",
            value: brandHandle,
            onChange: t32
        }, void 0, false, {
            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
            lineNumber: 671,
            columnNumber: 11
        }, this);
        $[50] = brandHandle;
        $[51] = t33;
    } else {
        t33 = $[51];
    }
    let t34;
    if ($[52] !== t31 || $[53] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 flex flex-col gap-3",
            children: [
                t31,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
            lineNumber: 679,
            columnNumber: 11
        }, this);
        $[52] = t31;
        $[53] = t33;
        $[54] = t34;
    } else {
        t34 = $[54];
    }
    let t35;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "mt-4 inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-semibold text-white",
            children: "Save brand"
        }, void 0, false, {
            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
            lineNumber: 688,
            columnNumber: 11
        }, this);
        $[55] = t35;
    } else {
        t35 = $[55];
    }
    let t36;
    if ($[56] !== handleCreateBrand || $[57] !== t34) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleCreateBrand,
            className: "rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm",
            children: [
                t29,
                t34,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
            lineNumber: 695,
            columnNumber: 11
        }, this);
        $[56] = handleCreateBrand;
        $[57] = t34;
        $[58] = t36;
    } else {
        t36 = $[58];
    }
    let t37;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-semibold",
            children: "Add a palette"
        }, void 0, false, {
            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
            lineNumber: 704,
            columnNumber: 11
        }, this);
        $[59] = t37;
    } else {
        t37 = $[59];
    }
    let t38;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = ({
            "BrandsPage[<select>.onChange]": (event_5)=>setSelectedBrandId(event_5.target.value)
        })["BrandsPage[<select>.onChange]"];
        $[60] = t38;
    } else {
        t38 = $[60];
    }
    let t39;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Select a brand"
        }, void 0, false, {
            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
            lineNumber: 720,
            columnNumber: 11
        }, this);
        $[61] = t39;
    } else {
        t39 = $[61];
    }
    let t40;
    if ($[62] !== sortedBrands) {
        t40 = sortedBrands.map(_BrandsPageSortedBrandsMap);
        $[62] = sortedBrands;
        $[63] = t40;
    } else {
        t40 = $[63];
    }
    let t41;
    if ($[64] !== selectedBrandId || $[65] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
            value: selectedBrandId,
            onChange: t38,
            required: true,
            children: [
                t39,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
            lineNumber: 735,
            columnNumber: 11
        }, this);
        $[64] = selectedBrandId;
        $[65] = t40;
        $[66] = t41;
    } else {
        t41 = $[66];
    }
    let t42;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = ({
            "BrandsPage[<input>.onChange]": (event_6)=>setPaletteName(event_6.target.value)
        })["BrandsPage[<input>.onChange]"];
        $[67] = t42;
    } else {
        t42 = $[67];
    }
    let t43;
    if ($[68] !== paletteName) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
            placeholder: "Palette name",
            value: paletteName,
            onChange: t42,
            required: true
        }, void 0, false, {
            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
            lineNumber: 753,
            columnNumber: 11
        }, this);
        $[68] = paletteName;
        $[69] = t43;
    } else {
        t43 = $[69];
    }
    let t44;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = ({
            "BrandsPage[<input>.onChange]": (event_7)=>setPaletteColors(event_7.target.value)
        })["BrandsPage[<input>.onChange]"];
        $[70] = t44;
    } else {
        t44 = $[70];
    }
    let t45;
    if ($[71] !== paletteColors) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
            placeholder: "Comma-separated colors (#111111, #f5f5f5)",
            value: paletteColors,
            onChange: t44
        }, void 0, false, {
            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
            lineNumber: 770,
            columnNumber: 11
        }, this);
        $[71] = paletteColors;
        $[72] = t45;
    } else {
        t45 = $[72];
    }
    let t46;
    if ($[73] !== t41 || $[74] !== t43 || $[75] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 flex flex-col gap-3",
            children: [
                t41,
                t43,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
            lineNumber: 778,
            columnNumber: 11
        }, this);
        $[73] = t41;
        $[74] = t43;
        $[75] = t45;
        $[76] = t46;
    } else {
        t46 = $[76];
    }
    let t47;
    if ($[77] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "mt-4 inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-semibold text-white",
            children: "Save palette"
        }, void 0, false, {
            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
            lineNumber: 788,
            columnNumber: 11
        }, this);
        $[77] = t47;
    } else {
        t47 = $[77];
    }
    let t48;
    if ($[78] !== handleCreatePalette || $[79] !== t46) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleCreatePalette,
            className: "rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm",
            children: [
                t37,
                t46,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
            lineNumber: 795,
            columnNumber: 11
        }, this);
        $[78] = handleCreatePalette;
        $[79] = t46;
        $[80] = t48;
    } else {
        t48 = $[80];
    }
    let t49;
    if ($[81] !== t36 || $[82] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "grid gap-6 lg:grid-cols-2",
            children: [
                t36,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
            lineNumber: 804,
            columnNumber: 11
        }, this);
        $[81] = t36;
        $[82] = t48;
        $[83] = t49;
    } else {
        t49 = $[83];
    }
    let t50;
    if ($[84] === Symbol.for("react.memo_cache_sentinel")) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-semibold",
                    children: "Your brands"
                }, void 0, false, {
                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                    lineNumber: 813,
                    columnNumber: 62
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: loadBrands,
                    className: "text-sm font-semibold text-zinc-600 hover:text-black",
                    children: "Refresh"
                }, void 0, false, {
                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                    lineNumber: 813,
                    columnNumber: 116
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
            lineNumber: 813,
            columnNumber: 11
        }, this);
        $[84] = t50;
    } else {
        t50 = $[84];
    }
    let t51;
    if ($[85] !== aiByBrandId || $[86] !== aiLoadingId || $[87] !== aiRawByBrandId || $[88] !== editingBrandHandle || $[89] !== editingBrandId || $[90] !== editingBrandName || $[91] !== editingPaletteColors || $[92] !== editingPaletteId || $[93] !== editingPaletteName || $[94] !== handleAddPaletteColor || $[95] !== handleExtractColorsFromImage || $[96] !== handleUpdateBrand || $[97] !== handleUpdatePalette || $[98] !== imageFileByPaletteId || $[99] !== loading || $[100] !== newColorByPaletteId || $[101] !== sortedBrands) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "flex flex-col gap-4",
            children: [
                t50,
                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm text-zinc-500",
                    children: "Loading brands..."
                }, void 0, false, {
                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                    lineNumber: 820,
                    columnNumber: 68
                }, this) : sortedBrands.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm text-zinc-500",
                    children: "No brands yet. Create your first one above."
                }, void 0, false, {
                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                    lineNumber: 820,
                    columnNumber: 161
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4",
                    children: sortedBrands.map({
                        "BrandsPage[sortedBrands.map()]": (brand_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                            onChange: {
                                                                "BrandsPage[sortedBrands.map() > <input>.onChange]": (event_8)=>setEditingBrandName(event_8.target.value)
                                                            }["BrandsPage[sortedBrands.map() > <input>.onChange]"],
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                            lineNumber: 821,
                                                            columnNumber: 328
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
                                                            value: editingBrandHandle,
                                                            onChange: {
                                                                "BrandsPage[sortedBrands.map() > <input>.onChange]": (event_9)=>setEditingBrandHandle(event_9.target.value)
                                                            }["BrandsPage[sortedBrands.map() > <input>.onChange]"],
                                                            placeholder: "Instagram handle"
                                                        }, void 0, false, {
                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                            lineNumber: 823,
                                                            columnNumber: 93
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
                                                                    lineNumber: 825,
                                                                    columnNumber: 146
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: cancelEditBrand,
                                                                    className: "inline-flex items-center justify-center rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600",
                                                                    children: "Cancel"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                    lineNumber: 825,
                                                                    columnNumber: 298
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                            lineNumber: 825,
                                                            columnNumber: 108
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                    lineNumber: 821,
                                                    columnNumber: 261
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-semibold",
                                                            children: brand_2.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                            lineNumber: 825,
                                                            columnNumber: 513
                                                        }, this),
                                                        brand_2.handle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-zinc-500",
                                                            children: [
                                                                "@",
                                                                brand_2.handle
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                            lineNumber: 825,
                                                            columnNumber: 588
                                                        }, this) : null
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                lineNumber: 821,
                                                columnNumber: 204
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-end gap-2",
                                                children: [
                                                    editingBrandId === brand_2.id ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: {
                                                            "BrandsPage[sortedBrands.map() > <button>.onClick]": ()=>startEditBrand(brand_2)
                                                        }["BrandsPage[sortedBrands.map() > <button>.onClick]"],
                                                        className: "text-xs font-semibold uppercase tracking-wide text-zinc-500 hover:text-black",
                                                        children: "Edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                        lineNumber: 825,
                                                        columnNumber: 751
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: {
                                                            "BrandsPage[sortedBrands.map() > <button>.onClick]": ()=>handleDeleteBrand(brand_2.id)
                                                        }["BrandsPage[sortedBrands.map() > <button>.onClick]"],
                                                        className: "text-xs font-semibold uppercase tracking-wide text-zinc-500 hover:text-red-600",
                                                        children: "Delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                        lineNumber: 827,
                                                        columnNumber: 176
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                lineNumber: 825,
                                                columnNumber: 664
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                        lineNumber: 821,
                                        columnNumber: 148
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
                                                                lineNumber: 829,
                                                                columnNumber: 334
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-zinc-500",
                                                                children: "Generate palette ideas and mood captions for this brand."
                                                            }, void 0, false, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 829,
                                                                columnNumber: 389
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                        lineNumber: 829,
                                                        columnNumber: 329
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: {
                                                            "BrandsPage[sortedBrands.map() > <button>.onClick]": ()=>handleGenerateAi(brand_2)
                                                        }["BrandsPage[sortedBrands.map() > <button>.onClick]"],
                                                        className: "inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-700",
                                                        disabled: aiLoadingId === brand_2.id,
                                                        children: aiLoadingId === brand_2.id ? "Generating..." : "Generate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                        lineNumber: 829,
                                                        columnNumber: 492
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                lineNumber: 829,
                                                columnNumber: 262
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
                                                                lineNumber: 831,
                                                                columnNumber: 393
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2 grid gap-3",
                                                                children: aiByBrandId[brand_2.id]?.palette_suggestions?.map({
                                                                    "BrandsPage[sortedBrands.map() > (anonymous)()]": (item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "rounded-lg border border-zinc-200 bg-white px-3 py-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm font-semibold",
                                                                                    children: item.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                    lineNumber: 832,
                                                                                    columnNumber: 202
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "mt-2 flex flex-wrap gap-2",
                                                                                    children: item.colors.map({
                                                                                        "BrandsPage[sortedBrands.map() > (anonymous)() > item.colors.map()]": (color_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-2 py-1 text-xs",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: "h-3 w-3 rounded-full border border-zinc-200",
                                                                                                        style: {
                                                                                                            backgroundColor: color_2
                                                                                                        }
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                                        lineNumber: 833,
                                                                                                        columnNumber: 266
                                                                                                    }, this),
                                                                                                    color_2
                                                                                                ]
                                                                                            }, `${brand_2.id}-ai-${item.name}-${color_2}`, true, {
                                                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                                lineNumber: 833,
                                                                                                columnNumber: 110
                                                                                            }, this)
                                                                                    }["BrandsPage[sortedBrands.map() > (anonymous)() > item.colors.map()]"])
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                    lineNumber: 832,
                                                                                    columnNumber: 254
                                                                                }, this)
                                                                            ]
                                                                        }, `${brand_2.id}-ai-palette-${index}`, true, {
                                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                            lineNumber: 832,
                                                                            columnNumber: 90
                                                                        }, this)
                                                                }["BrandsPage[sortedBrands.map() > (anonymous)()]"])
                                                            }, void 0, false, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 831,
                                                                columnNumber: 491
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                        lineNumber: 831,
                                                        columnNumber: 388
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs font-semibold uppercase tracking-wide text-zinc-500",
                                                                children: "Mood captions"
                                                            }, void 0, false, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 837,
                                                                columnNumber: 91
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "mt-2 grid gap-2 text-sm text-zinc-700",
                                                                children: aiByBrandId[brand_2.id]?.mood_captions?.length ? aiByBrandId[brand_2.id]?.mood_captions?.map({
                                                                    "BrandsPage[sortedBrands.map() > (anonymous)()]": (caption, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "rounded-lg border border-zinc-200 bg-white px-3 py-2",
                                                                            children: caption
                                                                        }, `${brand_2.id}-ai-caption-${index_0}`, false, {
                                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                            lineNumber: 838,
                                                                            columnNumber: 95
                                                                        }, this)
                                                                }["BrandsPage[sortedBrands.map() > (anonymous)()]"]) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "text-xs text-zinc-500",
                                                                    children: "No captions returned."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                    lineNumber: 839,
                                                                    columnNumber: 76
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 837,
                                                                columnNumber: 183
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                        lineNumber: 837,
                                                        columnNumber: 86
                                                    }, this),
                                                    aiRawByBrandId[brand_2.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-3 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-600",
                                                        children: aiRawByBrandId[brand_2.id]
                                                    }, void 0, false, {
                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                        lineNumber: 839,
                                                        columnNumber: 182
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                lineNumber: 831,
                                                columnNumber: 355
                                            }, this) : aiRawByBrandId[brand_2.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 text-xs text-zinc-600",
                                                children: aiRawByBrandId[brand_2.id]
                                            }, void 0, false, {
                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                lineNumber: 839,
                                                columnNumber: 359
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                        lineNumber: 829,
                                        columnNumber: 191
                                    }, this),
                                    brand_2.palettes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 text-sm text-zinc-500",
                                        children: "No palettes yet."
                                    }, void 0, false, {
                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                        lineNumber: 839,
                                        columnNumber: 484
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 grid gap-3",
                                        children: brand_2.palettes.map({
                                            "BrandsPage[sortedBrands.map() > brand_2.palettes.map()]": (palette_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-xl border border-zinc-200 px-4 py-3",
                                                    children: editingPaletteId === palette_3.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                        onSubmit: handleUpdatePalette,
                                                        className: "flex flex-col gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
                                                                value: editingPaletteName,
                                                                onChange: {
                                                                    "BrandsPage[sortedBrands.map() > brand_2.palettes.map() > <input>.onChange]": (event_10)=>setEditingPaletteName(event_10.target.value)
                                                                }["BrandsPage[sortedBrands.map() > brand_2.palettes.map() > <input>.onChange]"],
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 840,
                                                                columnNumber: 275
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                className: "rounded-lg border border-zinc-200 px-3 py-2 text-sm",
                                                                value: editingPaletteColors,
                                                                onChange: {
                                                                    "BrandsPage[sortedBrands.map() > brand_2.palettes.map() > <input>.onChange]": (event_11)=>setEditingPaletteColors(event_11.target.value)
                                                                }["BrandsPage[sortedBrands.map() > brand_2.palettes.map() > <input>.onChange]"]
                                                            }, void 0, false, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 842,
                                                                columnNumber: 120
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
                                                                        lineNumber: 844,
                                                                        columnNumber: 142
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: cancelEditPalette,
                                                                        className: "inline-flex items-center justify-center rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600",
                                                                        children: "Cancel"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 844,
                                                                        columnNumber: 294
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 844,
                                                                columnNumber: 104
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                        lineNumber: 840,
                                                        columnNumber: 206
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
                                                                        lineNumber: 844,
                                                                        columnNumber: 562
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: {
                                                                                    "BrandsPage[sortedBrands.map() > brand_2.palettes.map() > <button>.onClick]": ()=>startEditPalette(palette_3)
                                                                                }["BrandsPage[sortedBrands.map() > brand_2.palettes.map() > <button>.onClick]"],
                                                                                className: "text-xs font-semibold uppercase tracking-wide text-zinc-500 hover:text-black",
                                                                                children: "Edit"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                lineNumber: 844,
                                                                                columnNumber: 660
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: {
                                                                                    "BrandsPage[sortedBrands.map() > brand_2.palettes.map() > <button>.onClick]": ()=>handleDeletePalette(palette_3.id)
                                                                                }["BrandsPage[sortedBrands.map() > brand_2.palettes.map() > <button>.onClick]"],
                                                                                className: "text-xs font-semibold uppercase tracking-wide text-zinc-500 hover:text-red-600",
                                                                                children: "Remove"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                lineNumber: 846,
                                                                                columnNumber: 208
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 844,
                                                                        columnNumber: 619
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 844,
                                                                columnNumber: 511
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 flex flex-wrap gap-2",
                                                                children: palette_3.colors.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-zinc-500",
                                                                    children: "No colors listed."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                    lineNumber: 848,
                                                                    columnNumber: 300
                                                                }, this) : palette_3.colors.map({
                                                                    "BrandsPage[sortedBrands.map() > brand_2.palettes.map() > palette_3.colors.map()]": (color_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "h-3 w-3 rounded-full border border-zinc-200",
                                                                                    style: {
                                                                                        backgroundColor: color_3
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                    lineNumber: 849,
                                                                                    columnNumber: 262
                                                                                }, this),
                                                                                color_3,
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: {
                                                                                        "BrandsPage[sortedBrands.map() > brand_2.palettes.map() > palette_3.colors.map() > <button>.onClick]": ()=>handleRemovePaletteColor(palette_3, color_3)
                                                                                    }["BrandsPage[sortedBrands.map() > brand_2.palettes.map() > palette_3.colors.map() > <button>.onClick]"],
                                                                                    className: "text-[10px] font-semibold uppercase tracking-wide text-zinc-500 hover:text-red-600",
                                                                                    children: "Remove"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                    lineNumber: 851,
                                                                                    columnNumber: 41
                                                                                }, this)
                                                                            ]
                                                                        }, `${palette_3.id}-${color_3}`, true, {
                                                                            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                            lineNumber: 849,
                                                                            columnNumber: 120
                                                                        }, this)
                                                                }["BrandsPage[sortedBrands.map() > brand_2.palettes.map() > palette_3.colors.map()]"])
                                                            }, void 0, false, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 848,
                                                                columnNumber: 224
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 flex flex-wrap gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        className: "min-w-[180px] flex-1 rounded-lg border border-zinc-200 px-3 py-2 text-xs",
                                                                        placeholder: "Add color (#111111)",
                                                                        value: newColorByPaletteId[palette_3.id] ?? "",
                                                                        onChange: {
                                                                            "BrandsPage[sortedBrands.map() > brand_2.palettes.map() > <input>.onChange]": (event_12)=>setNewColorByPaletteId({
                                                                                    "BrandsPage[sortedBrands.map() > brand_2.palettes.map() > <input>.onChange > setNewColorByPaletteId()]": (prev_3)=>({
                                                                                            ...prev_3,
                                                                                            [palette_3.id]: event_12.target.value
                                                                                        })
                                                                                }["BrandsPage[sortedBrands.map() > brand_2.palettes.map() > <input>.onChange > setNewColorByPaletteId()]"])
                                                                        }["BrandsPage[sortedBrands.map() > brand_2.palettes.map() > <input>.onChange]"]
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 854,
                                                                        columnNumber: 159
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: {
                                                                            "BrandsPage[sortedBrands.map() > brand_2.palettes.map() > <button>.onClick]": ()=>handleAddPaletteColor(palette_3)
                                                                        }["BrandsPage[sortedBrands.map() > brand_2.palettes.map() > <button>.onClick]"],
                                                                        className: "inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold text-zinc-700",
                                                                        children: "Add color"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 861,
                                                                        columnNumber: 106
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 854,
                                                                columnNumber: 116
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
                                                                                onChange: {
                                                                                    "BrandsPage[sortedBrands.map() > brand_2.palettes.map() > <input>.onChange]": (event_13)=>setImageFileByPaletteId({
                                                                                            "BrandsPage[sortedBrands.map() > brand_2.palettes.map() > <input>.onChange > setImageFileByPaletteId()]": (prev_4)=>({
                                                                                                    ...prev_4,
                                                                                                    [palette_3.id]: event_13.target.files?.[0] ?? null
                                                                                                })
                                                                                        }["BrandsPage[sortedBrands.map() > brand_2.palettes.map() > <input>.onChange > setImageFileByPaletteId()]"])
                                                                                }["BrandsPage[sortedBrands.map() > brand_2.palettes.map() > <input>.onChange]"],
                                                                                className: "hidden"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                                lineNumber: 863,
                                                                                columnNumber: 534
                                                                            }, this),
                                                                            imageFileByPaletteId[palette_3.id]?.name ?? "Choose image"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 863,
                                                                        columnNumber: 314
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: {
                                                                            "BrandsPage[sortedBrands.map() > brand_2.palettes.map() > <button>.onClick]": ()=>handleExtractColorsFromImage(palette_3)
                                                                        }["BrandsPage[sortedBrands.map() > brand_2.palettes.map() > <button>.onClick]"],
                                                                        className: "inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold text-zinc-700",
                                                                        children: "Extract from image"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                        lineNumber: 870,
                                                                        columnNumber: 195
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                                lineNumber: 863,
                                                                columnNumber: 271
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                }, palette_3.id, false, {
                                                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                                    lineNumber: 840,
                                                    columnNumber: 89
                                                }, this)
                                        }["BrandsPage[sortedBrands.map() > brand_2.palettes.map()]"])
                                    }, void 0, false, {
                                        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                        lineNumber: 839,
                                        columnNumber: 549
                                    }, this)
                                ]
                            }, brand_2.id, true, {
                                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                                lineNumber: 821,
                                columnNumber: 56
                            }, this)
                    }["BrandsPage[sortedBrands.map()]"])
                }, void 0, false, {
                    fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                    lineNumber: 820,
                    columnNumber: 252
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
            lineNumber: 820,
            columnNumber: 11
        }, this);
        $[85] = aiByBrandId;
        $[86] = aiLoadingId;
        $[87] = aiRawByBrandId;
        $[88] = editingBrandHandle;
        $[89] = editingBrandId;
        $[90] = editingBrandName;
        $[91] = editingPaletteColors;
        $[92] = editingPaletteId;
        $[93] = editingPaletteName;
        $[94] = handleAddPaletteColor;
        $[95] = handleExtractColorsFromImage;
        $[96] = handleUpdateBrand;
        $[97] = handleUpdatePalette;
        $[98] = imageFileByPaletteId;
        $[99] = loading;
        $[100] = newColorByPaletteId;
        $[101] = sortedBrands;
        $[102] = t51;
    } else {
        t51 = $[102];
    }
    let t52;
    if ($[103] !== t28 || $[104] !== t49 || $[105] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-zinc-50 text-zinc-900",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-12",
                children: [
                    t27,
                    t28,
                    t49,
                    t51
                ]
            }, void 0, true, {
                fileName: "[project]/IG.AI/src/app/brands/page.tsx",
                lineNumber: 898,
                columnNumber: 66
            }, this)
        }, void 0, false, {
            fileName: "[project]/IG.AI/src/app/brands/page.tsx",
            lineNumber: 898,
            columnNumber: 11
        }, this);
        $[103] = t28;
        $[104] = t49;
        $[105] = t51;
        $[106] = t52;
    } else {
        t52 = $[106];
    }
    return t52;
}
_s(BrandsPage, "tbHzCA/YDNBdC0wznzSZAZ0ev+o=");
_c = BrandsPage;
function _BrandsPageSortedBrandsMap(brand_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: brand_1.id,
        children: brand_1.name
    }, brand_1.id, false, {
        fileName: "[project]/IG.AI/src/app/brands/page.tsx",
        lineNumber: 909,
        columnNumber: 10
    }, this);
}
function _BrandsPageHandleUpdatePaletteAnonymous(color_0) {
    return color_0.trim();
}
function _BrandsPageHandleCreatePaletteAnonymous(color) {
    return color.trim();
}
function _BrandsPageAnonymous(a, b) {
    return a.name.localeCompare(b.name);
}
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
"[project]/IG.AI/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/IG.AI/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/IG.AI/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/IG.AI/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$IG$2e$AI$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/IG.AI/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/IG.AI/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=IG_AI_a1c61f9c._.js.map