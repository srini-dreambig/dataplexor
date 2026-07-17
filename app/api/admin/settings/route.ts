import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getSettings, saveSettings, type Settings } from "@/lib/content";

export async function PUT(request: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  let incoming: Partial<Settings>;
  try {
    incoming = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const current = getSettings();
  const next: Settings = {
    ...current,
    ...incoming,
    contact: { ...current.contact, ...(incoming.contact || {}) },
    social: { ...current.social, ...(incoming.social || {}) },
  };
  if (!next.siteName?.trim()) {
    return NextResponse.json({ error: "Site name is required" }, { status: 400 });
  }
  saveSettings(next);
  return NextResponse.json({ ok: true });
}
