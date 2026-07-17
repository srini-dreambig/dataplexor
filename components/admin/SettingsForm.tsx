"use client";

import { useState } from "react";
import type { Settings } from "@/lib/content";
import { Field, SaveButton, fieldCls } from "@/components/admin/fields";

export function SettingsForm({ initial }: { initial: Settings }) {
  const [settings, setSettings] = useState(initial);
  const [busy, setBusy] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  function set<K extends keyof Settings>(key: K, value: Settings[K]) {
    setSaved(false);
    setSettings((s) => ({ ...s, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const res = await fetch("/api/admin/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(settings),
    });
    setBusy(false);
    if (res.ok) setSaved(true);
    else setError("Save failed. Are you still signed in?");
  }

  return (
    <form onSubmit={onSubmit} className="max-w-3xl space-y-6">
      <div className="grid gap-5 rounded-2xl bg-white p-6 ring-1 ring-line sm:grid-cols-2">
        <Field label="Site name">
          <input className={fieldCls} value={settings.siteName} onChange={(e) => set("siteName", e.target.value)} />
        </Field>
        <Field label="Site URL">
          <input className={fieldCls} value={settings.siteUrl} onChange={(e) => set("siteUrl", e.target.value)} />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Tagline (footer)">
            <input className={fieldCls} value={settings.tagline} onChange={(e) => set("tagline", e.target.value)} />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label="SEO description">
            <textarea rows={3} className={fieldCls} value={settings.description} onChange={(e) => set("description", e.target.value)} />
          </Field>
        </div>
        <Field label="Announcement bar text">
          <input className={fieldCls} value={settings.announcement} onChange={(e) => set("announcement", e.target.value)} />
        </Field>
        <Field label="Announcement link">
          <input className={fieldCls} value={settings.announcementHref} onChange={(e) => set("announcementHref", e.target.value)} />
        </Field>
      </div>

      <div className="grid gap-5 rounded-2xl bg-white p-6 ring-1 ring-line sm:grid-cols-2">
        <Field label="Contact email">
          <input className={fieldCls} value={settings.contact.email} onChange={(e) => set("contact", { ...settings.contact, email: e.target.value })} />
        </Field>
        <Field label="Contact phone">
          <input className={fieldCls} value={settings.contact.phone} onChange={(e) => set("contact", { ...settings.contact, phone: e.target.value })} />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Address">
            <input className={fieldCls} value={settings.contact.address} onChange={(e) => set("contact", { ...settings.contact, address: e.target.value })} />
          </Field>
        </div>
      </div>

      <div className="grid gap-5 rounded-2xl bg-white p-6 ring-1 ring-line sm:grid-cols-2">
        <Field label="LinkedIn URL">
          <input className={fieldCls} value={settings.social.linkedin} onChange={(e) => set("social", { ...settings.social, linkedin: e.target.value })} />
        </Field>
        <Field label="X (Twitter) URL">
          <input className={fieldCls} value={settings.social.x} onChange={(e) => set("social", { ...settings.social, x: e.target.value })} />
        </Field>
        <Field label="GitHub URL">
          <input className={fieldCls} value={settings.social.github} onChange={(e) => set("social", { ...settings.social, github: e.target.value })} />
        </Field>
        <Field label="YouTube URL">
          <input className={fieldCls} value={settings.social.youtube} onChange={(e) => set("social", { ...settings.social, youtube: e.target.value })} />
        </Field>
      </div>

      <SaveButton busy={busy} saved={saved} error={error} />
    </form>
  );
}
