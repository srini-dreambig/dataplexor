import { NextResponse } from "next/server";
import crypto from "crypto";
import { addMessage } from "@/lib/content";

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(data.name || "").trim().slice(0, 200);
  const email = String(data.email || "").trim().slice(0, 200);
  const company = String(data.company || "").trim().slice(0, 200);
  const topic = String(data.topic || "").trim().slice(0, 100);
  const message = String(data.message || "").trim().slice(0, 5000);

  if (!name || !email || !topic || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  addMessage({
    id: crypto.randomUUID(),
    name,
    email,
    company,
    topic,
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
