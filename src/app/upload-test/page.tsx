"use client";

import { useState } from "react";

type UploadResponse = {
  assetId: string;
  bucket: string;
  originalPath: string;
};

export default function UploadTestPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [endpointTestResult, setEndpointTestResult] = useState<string | null>(null);
  const [asset, setAsset] = useState<UploadResponse | null>(null);
  const [signedUrl, setSignedUrl] = useState<string | null>(null);

  async function onTestEndpoint() {
    setEndpointTestResult(null);
    setError(null);
    try {
      console.info("[upload-test] Testing /api/upload endpoint");
      const res = await fetch("/api/upload", { method: "GET" });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const message = data?.error ?? "Endpoint test failed.";
        console.error("[upload-test] Endpoint test error", data);
        setError(message);
        setEndpointTestResult(JSON.stringify(data, null, 2));
        return;
      }
      setEndpointTestResult(JSON.stringify(data, null, 2));
      console.info("[upload-test] Endpoint test success", data);
    } catch (requestError) {
      console.error("[upload-test] Endpoint test request failed", requestError);
      setError(String(requestError));
    }
  }

  async function onUpload() {
    if (!file) {
      setError("Choose an image first.");
      return;
    }

    setError(null);
    setAsset(null);
    setSignedUrl(null);
    setIsUploading(true);

    const form = new FormData();
    form.append("file", file);
    console.info("[upload-test] Uploading file", {
      name: file.name,
      type: file.type,
      size: file.size,
      endpoint: "/api/upload",
    });

    try {
      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: form,
      });

      const uploadData = await uploadRes.json().catch(() => ({}));
      if (!uploadRes.ok) {
        const message =
          uploadData?.error
            ? `${uploadData.error}${uploadData?.detail ? `: ${uploadData.detail}` : ""}`
            : "Upload failed.";
        setError(message);
        console.error("[upload-test] Upload failed", uploadData);
        return;
      }

      setAsset(uploadData as UploadResponse);
      console.info("[upload-test] Upload succeeded", uploadData);

      const signedRes = await fetch("/api/assets/signed-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ assetId: uploadData.assetId, expiresIn: 3600 }),
      });

      const signedData = await signedRes.json().catch(() => ({}));
      if (!signedRes.ok) {
        const message =
          signedData?.error
            ? `${signedData.error}${signedData?.detail ? `: ${signedData.detail}` : ""}`
            : "Signed URL request failed.";
        setError(message);
        console.error("[upload-test] Signed URL request failed", signedData);
        return;
      }

      setSignedUrl(signedData.signedUrl ?? null);
      console.info("[upload-test] Signed URL success", signedData);
    } catch (requestError) {
      console.error("[upload-test] Upload request crashed", requestError);
      setError(String(requestError));
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <main className="mx-auto w-full max-w-3xl px-6 py-10">
        <h1 className="text-2xl font-semibold">Upload + Signed URL Test</h1>
        <p className="mt-2 text-sm text-zinc-600">Uploads into private `uploads` bucket via server route, then previews with signed URL.</p>

        <div className="mt-6 rounded-xl border border-zinc-200 bg-white p-5">
          <input
            type="file"
            accept="image/png,image/jpeg"
            onChange={(event) => {
              const nextFile = event.target.files?.[0] ?? null;
              setFile(nextFile);
              console.info("[upload-test] File selected", {
                name: nextFile?.name ?? null,
                type: nextFile?.type ?? null,
                size: nextFile?.size ?? null,
              });
            }}
            className="block w-full text-sm"
          />

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={onUpload}
              disabled={isUploading}
              className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white disabled:opacity-60"
            >
              {isUploading ? "Uploading..." : "Upload & Preview"}
            </button>
            <button
              type="button"
              onClick={onTestEndpoint}
              className="rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700"
            >
              Test Upload Endpoint
            </button>
          </div>

          {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}
          {endpointTestResult ? (
            <pre className="mt-4 overflow-x-auto rounded-md bg-zinc-100 p-3 text-xs text-zinc-700">
              {endpointTestResult}
            </pre>
          ) : null}

          {asset ? (
            <div className="mt-4 rounded-md bg-zinc-100 p-3 text-sm">
              <p><strong>assetId:</strong> {asset.assetId}</p>
              <p><strong>originalPath:</strong> {asset.originalPath}</p>
            </div>
          ) : null}

          {signedUrl ? (
            <div className="mt-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={signedUrl} alt="Uploaded preview" className="max-h-[420px] rounded-md border border-zinc-200" />
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
}
