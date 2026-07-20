import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { writeMedia } from "@/lib/storage";

const MAX_BYTES = 4 * 1024 * 1024; // stay under serverless request limits

const EXT_BY_TYPE: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
};

export async function POST(request: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Expected a file upload" }, { status: 400 });
  }
  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }
  const ext = EXT_BY_TYPE[file.type];
  if (!ext) {
    return NextResponse.json(
      { error: "Use a JPEG, PNG, WebP or GIF image" },
      { status: 400 }
    );
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json(
      { error: "Image too large — keep it under 4 MB" },
      { status: 400 }
    );
  }
  const id = `${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2, 8)}.${ext}`;
  const data = Buffer.from(await file.arrayBuffer()).toString("base64");
  try {
    await writeMedia(id, { contentType: file.type, data });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Storage unavailable" },
      { status: 503 }
    );
  }
  return NextResponse.json({ url: `/api/media/${id}` });
}
