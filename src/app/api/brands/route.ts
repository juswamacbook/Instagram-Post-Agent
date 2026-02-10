import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const brands = await prisma.brand.findMany({
      orderBy: { createdAt: "desc" },
      include: { palettes: true },
    });

    return NextResponse.json({ brands });
  } catch (error) {
    console.error("Failed to load brands", error);
    return NextResponse.json(
      { error: "Failed to load brands." },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body || !body.name || typeof body.name !== "string") {
    return NextResponse.json(
      { error: "Brand name is required." },
      { status: 400 }
    );
  }

  try {
    const brand = await prisma.brand.create({
      data: {
        name: body.name.trim(),
        handle: typeof body.handle === "string" ? body.handle.trim() : null,
      },
    });

    return NextResponse.json({ brand }, { status: 201 });
  } catch (error) {
    console.error("Failed to create brand", error);
    return NextResponse.json(
      { error: "Failed to create brand." },
      { status: 500 }
    );
  }
}
