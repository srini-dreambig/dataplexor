import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import {
  getPosts,
  sanitizePost,
  savePosts,
  slugify,
  type Post,
} from "@/lib/content";

export async function POST(request: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
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
  const posts = await getPosts();
  let slug = slugify(clean.title);
  if (!slug) slug = `post-${Date.now()}`;
  while (posts.some((p) => p.slug === slug)) {
    slug = `${slug}-2`;
  }
  const post: Post = { slug, ...clean };
  posts.push(post);
  try {
    await savePosts(posts);
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Storage unavailable" },
      { status: 503 }
    );
  }
  return NextResponse.json(post, { status: 201 });
}
