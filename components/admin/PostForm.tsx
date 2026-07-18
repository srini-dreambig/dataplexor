"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Post } from "@/lib/content";
import { Field, SaveButton, fieldCls } from "@/components/admin/fields";

const EMPTY: Post = {
  slug: "",
  title: "",
  category: "Data & Analytics",
  date: new Date().toISOString().slice(0, 10),
  author: "Dataplexor Research",
  excerpt: "",
  body: "",
};

const CATEGORIES = [
  "Data & Analytics",
  "AI",
  "Agentic AI",
  "Products",
  "Consulting",
  "Retail",
  "Banking",
  "Insurance",
  "Healthcare",
  "Manufacturing",
  "Telecom & Media",
  "Company news",
];

export function PostForm({ initial }: { initial?: Post }) {
  const isEdit = Boolean(initial);
  const router = useRouter();
  const [post, setPost] = useState<Post>(initial ?? EMPTY);
  const [busy, setBusy] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  function set<K extends keyof Post>(key: K, value: Post[K]) {
    setSaved(false);
    setPost((p) => ({ ...p, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const res = await fetch(
      isEdit ? `/api/admin/posts/${initial!.slug}` : "/api/admin/posts",
      {
        method: isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      }
    );
    setBusy(false);
    if (res.ok) {
      setSaved(true);
      if (!isEdit) {
        const created = await res.json();
        router.push(`/admin/insights/${created.slug}`);
        router.refresh();
      }
    } else {
      const body = await res.json().catch(() => ({}));
      setError(body.error || "Save failed.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-3xl space-y-6">
      <div className="space-y-5 rounded-2xl bg-white p-6 ring-1 ring-line">
        <Field label="Title">
          <input required className={fieldCls} value={post.title} onChange={(e) => set("title", e.target.value)} />
        </Field>
        <div className="grid gap-4 sm:grid-cols-3">
          <Field label="Category">
            <select className={fieldCls} value={post.category} onChange={(e) => set("category", e.target.value)}>
              {CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </Field>
          <Field label="Publish date">
            <input type="date" required className={fieldCls} value={post.date} onChange={(e) => set("date", e.target.value)} />
          </Field>
          <Field label="Author">
            <input className={fieldCls} value={post.author} onChange={(e) => set("author", e.target.value)} />
          </Field>
        </div>
        <Field label="Excerpt (used in cards and SEO description)">
          <textarea required rows={3} className={fieldCls} value={post.excerpt} onChange={(e) => set("excerpt", e.target.value)} />
        </Field>
        <Field label="Body (markdown: ## headings, - lists, **bold**)">
          <textarea required rows={16} className={`${fieldCls} font-mono text-[13px]`} value={post.body} onChange={(e) => set("body", e.target.value)} />
        </Field>
        {isEdit ? (
          <p className="text-xs text-ink-soft">
            URL: /insights/{post.slug}
          </p>
        ) : (
          <p className="text-xs text-ink-soft">
            The URL slug is generated from the title on save.
          </p>
        )}
      </div>
      <SaveButton busy={busy} saved={saved} error={error} />
    </form>
  );
}
