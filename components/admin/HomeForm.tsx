"use client";

import { useState } from "react";
import type { HomeContent } from "@/lib/content";
import { Field, SaveButton, fieldCls } from "@/components/admin/fields";

export function HomeForm({ initial }: { initial: HomeContent }) {
  const [content, setContent] = useState(initial);
  const [busy, setBusy] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  function update(fn: (c: HomeContent) => HomeContent) {
    setSaved(false);
    setContent(fn);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const res = await fetch("/api/admin/home", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    });
    setBusy(false);
    if (res.ok) setSaved(true);
    else setError("Save failed. Are you still signed in?");
  }

  return (
    <form onSubmit={onSubmit} className="max-w-3xl space-y-6">
      <section className="space-y-5 rounded-2xl bg-white p-6 ring-1 ring-line">
        <h2 className="text-lg font-bold text-ink">Hero</h2>
        <Field label="Eyebrow">
          <input className={fieldCls} value={content.hero.eyebrow}
            onChange={(e) => update((c) => ({ ...c, hero: { ...c.hero, eyebrow: e.target.value } }))} />
        </Field>
        <Field label="Title">
          <textarea rows={2} className={fieldCls} value={content.hero.title}
            onChange={(e) => update((c) => ({ ...c, hero: { ...c.hero, title: e.target.value } }))} />
        </Field>
        <Field label="Subtitle">
          <textarea rows={3} className={fieldCls} value={content.hero.subtitle}
            onChange={(e) => update((c) => ({ ...c, hero: { ...c.hero, subtitle: e.target.value } }))} />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          {(["primaryCta", "secondaryCta", "tertiaryCta"] as const).map((key) => (
            <div key={key} className="space-y-3 rounded-xl bg-mist p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                {key.replace("Cta", "")} button
              </p>
              <Field label="Label">
                <input className={fieldCls} value={content.hero[key].label}
                  onChange={(e) => update((c) => ({ ...c, hero: { ...c.hero, [key]: { ...c.hero[key], label: e.target.value } } }))} />
              </Field>
              <Field label="Link">
                <input className={fieldCls} value={content.hero[key].href}
                  onChange={(e) => update((c) => ({ ...c, hero: { ...c.hero, [key]: { ...c.hero[key], href: e.target.value } } }))} />
              </Field>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-5 rounded-2xl bg-white p-6 ring-1 ring-line">
        <h2 className="text-lg font-bold text-ink">Stats</h2>
        {content.stats.map((stat, i) => (
          <div key={i} className="grid gap-4 sm:grid-cols-[140px_1fr]">
            <Field label={`Stat ${i + 1} value`}>
              <input className={fieldCls} value={stat.value}
                onChange={(e) => update((c) => ({ ...c, stats: c.stats.map((s, j) => (j === i ? { ...s, value: e.target.value } : s)) }))} />
            </Field>
            <Field label="Label">
              <input className={fieldCls} value={stat.label}
                onChange={(e) => update((c) => ({ ...c, stats: c.stats.map((s, j) => (j === i ? { ...s, label: e.target.value } : s)) }))} />
            </Field>
          </div>
        ))}
      </section>

      <section className="space-y-5 rounded-2xl bg-white p-6 ring-1 ring-line">
        <h2 className="text-lg font-bold text-ink">Advantage section</h2>
        <Field label="Section title">
          <input className={fieldCls} value={content.advantage.title}
            onChange={(e) => update((c) => ({ ...c, advantage: { ...c.advantage, title: e.target.value } }))} />
        </Field>
        <Field label="Intro">
          <textarea rows={3} className={fieldCls} value={content.advantage.intro}
            onChange={(e) => update((c) => ({ ...c, advantage: { ...c.advantage, intro: e.target.value } }))} />
        </Field>
        {content.advantage.items.map((item, i) => (
          <div key={i} className="space-y-3 rounded-xl bg-mist p-4">
            <Field label={`Card ${i + 1} title`}>
              <input className={fieldCls} value={item.title}
                onChange={(e) => update((c) => ({ ...c, advantage: { ...c.advantage, items: c.advantage.items.map((it, j) => (j === i ? { ...it, title: e.target.value } : it)) } }))} />
            </Field>
            <Field label="Body">
              <textarea rows={2} className={fieldCls} value={item.body}
                onChange={(e) => update((c) => ({ ...c, advantage: { ...c.advantage, items: c.advantage.items.map((it, j) => (j === i ? { ...it, body: e.target.value } : it)) } }))} />
            </Field>
          </div>
        ))}
      </section>

      <SaveButton busy={busy} saved={saved} error={error} />
    </form>
  );
}
