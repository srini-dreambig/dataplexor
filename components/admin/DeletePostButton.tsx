"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function DeletePostButton({ slug }: { slug: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  return (
    <button
      type="button"
      disabled={busy}
      onClick={async () => {
        if (!confirm("Delete this post? This cannot be undone.")) return;
        setBusy(true);
        await fetch(`/api/admin/posts/${slug}`, { method: "DELETE" });
        router.push("/admin/insights");
        router.refresh();
      }}
      className="rounded-full border border-red-300 px-4 py-1.5 text-sm font-semibold text-red-600 hover:bg-red-50 disabled:opacity-60"
    >
      {busy ? "Deleting…" : "Delete"}
    </button>
  );
}
