import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { saveHomeContent, type HomeContent } from "@/lib/content";

export async function PUT(request: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  let content: HomeContent;
  try {
    content = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  if (!content?.hero?.title?.trim()) {
    return NextResponse.json({ error: "Hero title is required" }, { status: 400 });
  }
  saveHomeContent(content);
  return NextResponse.json({ ok: true });
}
