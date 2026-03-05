import Jimp from "jimp";
import type { SafeZone } from "@/lib/design/types";

function rgbToHex(r: number, g: number, b: number) {
  return `#${[r, g, b]
    .map((value) => Math.max(0, Math.min(255, Math.round(value))).toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase()}`;
}

function kMeansColors(pixels: Array<[number, number, number]>, k: number) {
  if (!pixels.length) {
    return [] as Array<[number, number, number]>;
  }

  const step = Math.max(1, Math.floor(pixels.length / k));
  let centroids = Array.from({ length: k }, (_, index) => pixels[index * step] ?? pixels[0]);

  for (let iter = 0; iter < 10; iter++) {
    const buckets: Array<{ sum: [number, number, number]; count: number }> = Array.from(
      { length: k },
      () => ({ sum: [0, 0, 0], count: 0 })
    );

    for (const [r, g, b] of pixels) {
      let bestIndex = 0;
      let bestDistance = Number.POSITIVE_INFINITY;

      for (let i = 0; i < centroids.length; i++) {
        const [cr, cg, cb] = centroids[i];
        const distance = (r - cr) ** 2 + (g - cg) ** 2 + (b - cb) ** 2;
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = i;
        }
      }

      const bucket = buckets[bestIndex];
      bucket.sum[0] += r;
      bucket.sum[1] += g;
      bucket.sum[2] += b;
      bucket.count += 1;
    }

    centroids = buckets.map((bucket, index) => {
      if (bucket.count === 0) {
        return centroids[index];
      }

      return [
        bucket.sum[0] / bucket.count,
        bucket.sum[1] / bucket.count,
        bucket.sum[2] / bucket.count,
      ];
    });
  }

  return centroids as Array<[number, number, number]>;
}

export async function detectImageSize(buffer: Buffer) {
  try {
    const image = await Jimp.read(buffer);
    return {
      width: image.bitmap.width,
      height: image.bitmap.height,
    };
  } catch {
    return {
      width: null,
      height: null,
    };
  }
}

export async function analyzeImage(buffer: Buffer) {
  const image = await Jimp.read(buffer);
  image.resize(180, Jimp.AUTO);

  const { data, width, height } = image.bitmap;
  const pixels: Array<[number, number, number]> = [];
  const stride = Math.max(1, Math.floor((width * height) / 2500));

  for (let i = 0; i < data.length; i += 4 * stride) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const alpha = data[i + 3];

    if (alpha < 64) continue;
    pixels.push([r, g, b]);
  }

  const k = Math.min(8, Math.max(5, Math.floor(pixels.length / 500) || 5));
  const palette = Array.from(new Set(kMeansColors(pixels, k).map(([r, g, b]) => rgbToHex(r, g, b)))).slice(
    0,
    8
  );

  const safeZones: SafeZone[] = [
    {
      x: 0.15,
      y: 0.2,
      w: 0.7,
      h: 0.6,
      label: "primary_content",
    },
  ];

  return {
    palette: palette.length ? palette : ["#FFFFFF", "#000000", "#888888", "#444444", "#CCCCCC"],
    safe_zones: safeZones,
    tags: [],
    ocr_text: "",
  };
}
