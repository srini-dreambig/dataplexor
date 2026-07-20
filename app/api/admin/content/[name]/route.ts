import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { EDITABLE_DOCS } from "@/lib/sitecontent";
import { writeDoc } from "@/lib/storage";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { name } = await params;
  const doc = EDITABLE_DOCS[name as keyof typeof EDITABLE_DOCS];
  if (!doc) {
    return NextResponse.json({ error: "Unknown document" }, { status: 404 });
  }
  let data: unknown;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  if (doc.kind === "array") {
    if (!Array.isArray(data) || data.length === 0) {
      return NextResponse.json(
        { error: "Expected a non-empty list of items" },
        { status: 400 }
      );
    }
  } else if (typeof data !== "object" || data === null || Array.isArray(data)) {
    return NextResponse.json({ error: "Expected an object" }, { status: 400 });
  }
  try {
    await writeDoc(name, data);
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Storage unavailable" },
      { status: 503 }
    );
  }
  return NextResponse.json({ ok: true });
}
