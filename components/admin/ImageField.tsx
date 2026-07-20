"use client";

import { useRef, useState } from "react";
import { fieldCls } from "@/components/admin/fields";

/**
 * Image input backed by /api/admin/media. Stores a URL string — either an
 * uploaded image or any pasted path/URL — so it drops into any content doc.
 */
export function ImageField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function upload(file: File) {
    setBusy(true);
    setError("");
    try {
      const form = new FormData();
      form.append("file", file);
      const res = await fetch("/api/admin/media", { method: "POST", body: form });
      const body = await res.json().catch(() => null);
      if (res.ok && body?.url) {
        onChange(body.url);
      } else {
        setError(body?.error ?? "Upload failed");
      }
    } catch {
      setError("Upload failed — check your connection");
    }
    setBusy(false);
  }

  return (
    <div>
      <span className="mb-1.5 block text-sm font-semibold text-ink">{label}</span>
      <div className="flex items-start gap-3">
        {value ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={value}
            alt=""
            className="h-20 w-32 shrink-0 rounded-lg border border-line object-cover"
          />
        ) : (
          <div className="flex h-20 w-32 shrink-0 items-center justify-center rounded-lg border border-dashed border-line text-xs text-ink-soft">
            No image
          </div>
        )}
        <div className="min-w-0 flex-1 space-y-2">
          <input
            className={fieldCls}
            placeholder="Upload an image or paste an image URL"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              disabled={busy}
              onClick={() => inputRef.current?.click()}
              className="rounded-full border border-line px-4 py-1.5 text-xs font-semibold text-ink hover:border-brand hover:text-brand disabled:opacity-60"
            >
              {busy ? "Uploading…" : "Upload image"}
            </button>
            {value ? (
              <button
                type="button"
                onClick={() => onChange("")}
                className="rounded-full px-3 py-1.5 text-xs font-semibold text-ink-soft hover:bg-red-50 hover:text-red-600"
              >
                Remove
              </button>
            ) : null}
            {error ? (
              <span className="text-xs font-medium text-red-600">{error}</span>
            ) : null}
          </div>
        </div>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) upload(file);
          e.target.value = "";
        }}
      />
    </div>
  );
}
