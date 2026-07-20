import { readMedia } from "@/lib/storage";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const file = await readMedia(id);
  if (!file) {
    return new Response("Not found", { status: 404 });
  }
  return new Response(Buffer.from(file.data, "base64"), {
    headers: {
      "Content-Type": file.contentType,
      // ids are unique per upload, so the bytes never change
      "Cache-Control": "public, max-age=31536000, immutable",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
