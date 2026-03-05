import { NextRequest, NextResponse } from "next/server";
import { analyzeImage } from "@/lib/design/analyzeImage";
import { requireAuthenticatedUser } from "@/lib/supabase/auth";
import { createSupabaseServiceRoleClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  const authResult = await requireAuthenticatedUser(request);
  if ("error" in authResult) {
    return NextResponse.json({ error: authResult.error }, { status: authResult.status });
  }

  const body = await request.json().catch(() => null);
  const assetId = typeof body?.assetId === "string" ? body.assetId : null;

  if (!assetId) {
    return NextResponse.json({ error: "assetId is required." }, { status: 400 });
  }

  const supabase = createSupabaseServiceRoleClient();

  const { data: asset, error: assetError } = await supabase
    .from("assets")
    .select("id, user_id, original_path")
    .eq("id", assetId)
    .eq("user_id", authResult.user.id)
    .maybeSingle();

  if (assetError) {
    return NextResponse.json({ error: "Failed to load asset.", detail: assetError.message }, { status: 500 });
  }

  if (!asset) {
    return NextResponse.json({ error: "Asset not found." }, { status: 404 });
  }

  const { data: downloadData, error: downloadError } = await supabase.storage
    .from("uploads")
    .download(asset.original_path);

  if (downloadError || !downloadData) {
    return NextResponse.json(
      {
        error: "Failed to download source image.",
        detail: downloadError?.message,
      },
      { status: 500 }
    );
  }

  try {
    const buffer = Buffer.from(await downloadData.arrayBuffer());
    const analysis = await analyzeImage(buffer);

    const { error: upsertError } = await supabase.from("asset_analysis").upsert(
      {
        asset_id: assetId,
        palette: analysis.palette,
        safe_zones: analysis.safe_zones,
        tags: analysis.tags,
        ocr_text: analysis.ocr_text,
      },
      { onConflict: "asset_id" }
    );

    if (upsertError) {
      return NextResponse.json(
        {
          error: "Failed to store analysis.",
          detail: upsertError.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ analysis });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to analyze image.",
        detail: String(error),
      },
      { status: 500 }
    );
  }
}
