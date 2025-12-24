import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

export async function GET() {
    try {
        const logoPath = join(process.cwd(), "public", "logo.svg");
        const logoContent = readFileSync(logoPath, "utf-8");

        return new NextResponse(logoContent, {
            status: 200,
            headers: {
                "Content-Type": "image/svg+xml",
                "Cache-Control": "public, max-age=31536000, immutable",
            },
        });
    } catch (error) {
        return new NextResponse("Logo not found", { status: 404 });
    }
}
