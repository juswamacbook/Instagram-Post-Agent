import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import Jimp from "jimp";

function getId(request: NextRequest, context: { params?: { id?: string } }) {
  const direct = context?.params?.id;
  if (direct) return direct;

  const pathname = new URL(request.url).pathname;
  const parts = pathname.split("/").filter(Boolean);
  return parts[parts.length - 2] || null;
}

function extractBase64(dataUrl: string) {
  const match = dataUrl.match(/^data:.*?;base64,(.*)$/);
  return match ? match[1] : null;
}

function rgbToHex([r, g, b]: [number, number, number]) {
  const clamp = (value: number) => Math.max(0, Math.min(255, Math.round(value)));
  return (
    "#" +
    [clamp(r), clamp(g), clamp(b)]
      .map((value) => value.toString(16).padStart(2, "0"))
      .join("")
  ).toUpperCase();
}

function kMeansColors(pixels: Array<[number, number, number]>, k: number) {
  if (pixels.length === 0) return [];
  const step = Math.max(1, Math.floor(pixels.length / k));
  let centroids = Array.from({ length: k }, (_, index) => pixels[index * step] ?? pixels[0]);

  for (let iter = 0; iter < 10; iter++) {
    const buckets: Array<{ sum: [number, number, number]; count: number }> = Array.from(
      { length: k },
      () => ({ sum: [0, 0, 0], count: 0 })
    );

    for (const [r, g, b] of pixels) {
      let best = 0;
      let bestDist = Number.POSITIVE_INFINITY;
      for (let i = 0; i < k; i++) {
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

    centroids = buckets.map((bucket, index) => {
      if (!bucket.count) return centroids[index];
      return [
        bucket.sum[0] / bucket.count,
        bucket.sum[1] / bucket.count,
        bucket.sum[2] / bucket.count,
      ];
    });
  }

  return centroids as Array<[number, number, number]>;
}

export async function POST(request: NextRequest, context: { params?: { id?: string } }) {
  const id = getId(request, context);
  if (!id) {
    return NextResponse.json({ error: "Missing palette id." }, { status: 400 });
  }

  const body = await request.json().catch(() => null);
  const dataUrl = typeof body?.imageBase64 === "string" ? body.imageBase64 : null;
  if (!dataUrl) {
    return NextResponse.json({ error: "imageBase64 is required." }, { status: 400 });
  }

  const base64 = extractBase64(dataUrl);
  if (!base64) {
    return NextResponse.json({ error: "Invalid image data." }, { status: 400 });
  }

  const palette = await prisma.palette.findUnique({ where: { id } });
  if (!palette) {
    return NextResponse.json({ error: "Palette not found." }, { status: 404 });
  }

  try {
    const buffer = Buffer.from(base64, "base64");
    const image = await Jimp.read(buffer);
    image.resize(160, Jimp.AUTO);
    const { data, width, height } = image.bitmap;
    const pixels: Array<[number, number, number]> = [];
    const stride = Math.max(1, Math.floor((width * height) / 1500));
    for (let i = 0; i < data.length; i += 4 * stride) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];
      if (a < 50) continue;
      pixels.push([r, g, b]);
    }

    const centroids = kMeansColors(pixels, 6);
    const colors = centroids.map(rgbToHex);
    const uniqueColors = Array.from(new Set(colors));

    if (uniqueColors.length === 0) {
      return NextResponse.json({ error: "No colors extracted." }, { status: 500 });
    }

    const merged = Array.from(new Set([...(palette.colors ?? []), ...uniqueColors]));
    const updated = await prisma.palette.update({
      where: { id },
      data: { colors: merged },
    });

    return NextResponse.json({ palette: updated, added: uniqueColors });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to extract colors.", detail: String(error) },
      { status: 500 }
    );
  }
}
