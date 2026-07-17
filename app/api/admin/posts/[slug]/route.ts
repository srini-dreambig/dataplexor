import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getPosts, sanitizePost, savePosts, type Post } from "@/lib/content";

type Ctx = { params: Promise<{ slug: string }> };

export async function PUT(request: Request, { params }: Ctx) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { slug } = await params;
  let data: Partial<Post>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const clean = sanitizePost(data);
  if (!clean) {
    return NextResponse.json(
      { error: "Title, excerpt, body and a valid date are required" },
      { status: 400 }
    );
  }
  const posts = getPosts();
  const index = posts.findIndex((p) => p.slug === slug);
  if (index === -1) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  posts[index] = { slug, ...clean };
  savePosts(posts);
  return NextResponse.json(posts[index]);
}

export async function DELETE(_request: Request, { params }: Ctx) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { slug } = await params;
  const posts = getPosts();
  const next = posts.filter((p) => p.slug !== slug);
  if (next.length === posts.length) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  savePosts(next);
  return NextResponse.json({ ok: true });
}
