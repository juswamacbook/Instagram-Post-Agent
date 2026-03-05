import { NextRequest, NextResponse } from "next/server";
import { detectImageSize } from "@/lib/design/analyzeImage";
import { requireAuthenticatedUser } from "@/lib/supabase/auth";
import {
  createSupabaseServiceRoleClient,
  sanitizeFilename,
  uploadPrivateObject,
} from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  const authResult = await requireAuthenticatedUser(request);
  if ("error" in authResult) {
    return NextResponse.json({ error: authResult.error }, { status: authResult.status });
  }

  const formData = await request.formData().catch(() => null);
  const file = formData?.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "image file is required in form-data field 'file'." }, { status: 400 });
  }

  if (!file.type.startsWith("image/")) {
    return NextResponse.json({ error: "Only image uploads are allowed." }, { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const assetId = crypto.randomUUID();
  const filename = sanitizeFilename(file.name || "upload.bin");
  const objectPath = `${authResult.user.id}/${assetId}/${filename}`;

  try {
    await uploadPrivateObject({
      bucket: "uploads",
      path: objectPath,
      content: buffer,
      contentType: file.type || "application/octet-stream",
    });

    const { width, height } = await detectImageSize(buffer);
    const supabase = createSupabaseServiceRoleClient();

    const { error } = await supabase.from("assets").insert({
      id: assetId,
      user_id: authResult.user.id,
      original_path: objectPath,
      width,
      height,
    });

    if (error) {
      return NextResponse.json({ error: "Failed to save asset row.", detail: error.message }, { status: 500 });
    }

    return NextResponse.json(
      {
        assetId,
        originalPath: objectPath,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to upload asset.",
        detail: String(error),
      },
      { status: 500 }
    );
  }
}
