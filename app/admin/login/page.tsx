"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/Logo";

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setBusy(false);
    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      setError("Invalid username or password.");
    }
  }

  const inputCls =
    "w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-teal focus:outline-none";

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#05050f] px-6">
      <div className="w-full max-w-sm">
        <div className="flex justify-center text-white">
          <Logo textClassName="text-2xl" markClassName="h-9 w-9" />
        </div>
        <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-8">
          <h1 className="text-lg font-bold text-white">Content administration</h1>
          <p className="mt-1 text-sm text-white/60">
            Sign in to manage website content.
          </p>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="username" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/60">
                Username
              </label>
              <input id="username" name="username" required autoComplete="username" className={inputCls} />
            </div>
            <div>
              <label htmlFor="password" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/60">
                Password
              </label>
              <input id="password" name="password" type="password" required autoComplete="current-password" className={inputCls} />
            </div>
            {error ? (
              <p className="text-sm font-medium text-red-400">{error}</p>
            ) : null}
            <button
              type="submit"
              disabled={busy}
              className="w-full rounded-full bg-teal px-6 py-3 text-sm font-bold text-ink transition-opacity disabled:opacity-60"
            >
              {busy ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </div>
        <p className="mt-6 text-center text-xs text-white/40">
          Access is restricted to authorized Dataplexor administrators.
        </p>
      </div>
    </div>
  );
}
