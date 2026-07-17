import crypto from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "dpx_admin_session";
const SESSION_HOURS = 12;

function secret(): string {
  return process.env.ADMIN_SECRET || "dataplexor-dev-secret-change-me";
}

export function adminUsername(): string {
  return process.env.ADMIN_USER || "admin";
}

function adminPassword(): string {
  return process.env.ADMIN_PASSWORD || "dataplexor2026";
}

function sign(payload: string): string {
  return crypto.createHmac("sha256", secret()).update(payload).digest("hex");
}

export function verifyCredentials(username: string, password: string): boolean {
  const u = Buffer.from(username);
  const eu = Buffer.from(adminUsername());
  const p = Buffer.from(password);
  const ep = Buffer.from(adminPassword());
  const userOk = u.length === eu.length && crypto.timingSafeEqual(u, eu);
  const passOk = p.length === ep.length && crypto.timingSafeEqual(p, ep);
  return userOk && passOk;
}

export function createSessionToken(username: string): string {
  const payload = Buffer.from(
    JSON.stringify({
      u: username,
      exp: Date.now() + SESSION_HOURS * 3600 * 1000,
    })
  ).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

export function verifySessionToken(token: string | undefined): boolean {
  if (!token) return false;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return false;
  const expected = sign(payload);
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return false;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString());
    return typeof data.exp === "number" && data.exp > Date.now();
  } catch {
    return false;
  }
}

export async function setSessionCookie(username: string) {
  const store = await cookies();
  store.set(COOKIE_NAME, createSessionToken(username), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_HOURS * 3600,
  });
}

export async function clearSessionCookie() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

export async function isAuthenticated(): Promise<boolean> {
  const store = await cookies();
  return verifySessionToken(store.get(COOKIE_NAME)?.value);
}
