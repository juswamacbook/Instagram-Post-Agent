import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";

export const runtime = "nodejs";

type Body = {
  assetId?: string;
  expiresIn?: number;
};

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as Body | null;

  const assetId = typeof body?.assetId === "string" ? body.assetId : "";
  if (!assetId) {
    return NextResponse.json({ error: "assetId is required." }, { status: 400 });
  }

  const expiresInSeconds = Number.isFinite(body?.expiresIn)
    ? Math.max(60, Math.min(86400, Number(body?.expiresIn)))
    : 3600;

  const supabase = supabaseAdmin();

  const { data: asset, error: assetError } = await supabase
    .from("assets")
    .select("original_path")
    .eq("id", assetId)
    .maybeSingle();

  if (assetError) {
    return NextResponse.json(
      { error: "Failed to load asset.", detail: assetError.message },
      { status: 500 }
    );
  }

  if (!asset?.original_path) {
    return NextResponse.json({ error: "Asset not found." }, { status: 404 });
  }

  const { data, error: signedUrlError } = await supabase.storage
    .from("uploads")
    .createSignedUrl(asset.original_path, expiresInSeconds);

  if (signedUrlError || !data?.signedUrl) {
    return NextResponse.json(
      {
        error: "Failed to create signed URL.",
        detail: signedUrlError?.message,
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ signedUrl: data.signedUrl });
}
