import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";

export const runtime = "nodejs";

const ALLOWED_TYPES = new Set(["image/png", "image/jpeg"]);
const PLACEHOLDER_USER_ID = "00000000-0000-0000-0000-000000000000";

function nowIso() {
  return new Date().toISOString();
}

function logUpload(message: string, meta?: Record<string, unknown>) {
  console.info(`[${nowIso()}] UPLOAD ROUTE: ${message}`, meta ?? {});
}

function extensionForMime(mime: string) {
  if (mime === "image/png") return "png";
  if (mime === "image/jpeg") return "jpg";
  return null;
}

export async function GET() {
  logUpload("PING");
  return NextResponse.json({
    ok: true,
    route: "/api/upload",
    timestamp: nowIso(),
  });
}

export async function POST(request: NextRequest) {
  logUpload("HIT", { method: request.method });

  const formData = await request.formData().catch(() => null);
  const file = formData?.get("file");

  if (!(file instanceof File)) {
    logUpload("MISSING_FILE");
    return NextResponse.json(
      {
        error: "Missing file. Submit multipart/form-data with key 'file'.",
        code: "MISSING_FILE",
      },
      { status: 400 }
    );
  }

  logUpload("FILE_RECEIVED", {
    name: file.name,
    type: file.type,
    size: file.size,
  });

  if (!ALLOWED_TYPES.has(file.type)) {
    logUpload("UNSUPPORTED_TYPE", { type: file.type });
    return NextResponse.json(
      {
        error: "Unsupported file type. Only image/png and image/jpeg are allowed.",
        code: "UNSUPPORTED_TYPE",
        receivedType: file.type,
      },
      { status: 400 }
    );
  }

  const ext = extensionForMime(file.type);
  if (!ext) {
    logUpload("MIME_EXTENSION_FAILURE", { type: file.type });
    return NextResponse.json(
      {
        error: "Could not determine file extension from MIME type.",
        code: "MIME_EXTENSION_FAILURE",
      },
      { status: 400 }
    );
  }

  const assetId = crypto.randomUUID();
  const originalPath = `${assetId}/original.${ext}`;
  logUpload("PATH_GENERATED", { assetId, bucket: "uploads", originalPath });

  const fileBuffer = Buffer.from(await file.arrayBuffer());
  const supabase = supabaseAdmin();

  const { error: uploadError } = await supabase.storage
    .from("uploads")
    .upload(originalPath, fileBuffer, {
      contentType: file.type,
      upsert: false,
    });

  if (uploadError) {
    logUpload("STORAGE_UPLOAD_FAILED", { message: uploadError.message });
    return NextResponse.json(
      {
        error: "Failed to upload file to storage.",
        code: "STORAGE_UPLOAD_FAILED",
        detail: uploadError.message,
      },
      { status: 500 }
    );
  }

  logUpload("STORAGE_UPLOAD_SUCCESS", { originalPath });

  const { error: insertError } = await supabase.from("assets").insert({
    id: assetId,
    user_id: PLACEHOLDER_USER_ID,
    original_path: originalPath,
    width: null,
    height: null,
  });

  if (insertError) {
    logUpload("ASSET_INSERT_FAILED", { message: insertError.message });
    await supabase.storage.from("uploads").remove([originalPath]);
    logUpload("CLEANUP_REMOVE_ATTEMPTED", { originalPath });
    return NextResponse.json(
      {
        error: "Failed to create asset record.",
        code: "ASSET_INSERT_FAILED",
        detail: insertError.message,
      },
      { status: 500 }
    );
  }

  logUpload("ASSET_INSERT_SUCCESS", { assetId, originalPath });

  return NextResponse.json(
    {
      assetId,
      bucket: "uploads",
      originalPath,
    },
    { status: 201 }
  );
}
