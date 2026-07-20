"use client";

import { useState } from "react";
import { AutoForm, emptyLike } from "@/components/admin/AutoForm";
import { SaveButton } from "@/components/admin/fields";

type Item = { [key: string]: unknown };

function itemTitle(item: Item, index: number): string {
  const candidate = item.name ?? item.title ?? item.slug;
  return typeof candidate === "string" && candidate.trim()
    ? candidate
    : `Item ${index + 1}`;
}

function useSave(doc: string) {
  const [busy, setBusy] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  async function save(data: unknown) {
    setBusy(true);
    setError("");
    setSaved(false);
    try {
      const res = await fetch(`/api/admin/content/${doc}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSaved(true);
      } else {
        const body = await res.json().catch(() => null);
        setError(body?.error ?? "Save failed. Are you still signed in?");
      }
    } catch {
      setError("Network error — changes not saved.");
    }
    setBusy(false);
  }

  return { busy, saved, error, save, clearSaved: () => setSaved(false) };
}

/** Editor for array documents (solutions, industries, products). */
export function CollectionEditor({
  doc,
  itemNoun,
  initial,
}: {
  doc: string;
  itemNoun: string;
  initial: Item[];
}) {
  const [items, setItems] = useState(initial);
  const [selected, setSelected] = useState(0);
  const { busy, saved, error, save, clearSaved } = useSave(doc);

  function updateItem(next: Item) {
    clearSaved();
    setItems((list) => list.map((it, i) => (i === selected ? next : it)));
  }

  function addItem() {
    clearSaved();
    const template = emptyLike(
      JSON.parse(JSON.stringify(items[items.length - 1])) as never
    ) as Item;
    setItems((list) => [...list, template]);
    setSelected(items.length);
  }

  function removeItem() {
    if (items.length <= 1) return;
    if (!window.confirm(`Delete this ${itemNoun}? The page for it will be removed from the site when you save.`)) return;
    clearSaved();
    setItems((list) => list.filter((_, i) => i !== selected));
    setSelected((s) => Math.max(0, s - 1));
  }

  const current = items[selected];

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        save(items);
      }}
      className="space-y-6"
    >
      <div className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setSelected(i)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
              i === selected
                ? "bg-brand text-white"
                : "bg-white text-ink ring-1 ring-line hover:text-brand"
            }`}
          >
            {itemTitle(item, i)}
          </button>
        ))}
        <button
          type="button"
          onClick={addItem}
          className="rounded-full border border-dashed border-line px-4 py-1.5 text-sm font-semibold text-ink-soft hover:border-brand hover:text-brand"
        >
          + New {itemNoun}
        </button>
      </div>

      {current ? (
        <div className="rounded-2xl bg-white p-6 ring-1 ring-line">
          <div className="mb-5 flex items-center justify-between gap-4 border-b border-line pb-4">
            <div>
              <h2 className="text-lg font-bold text-ink">
                {itemTitle(current, selected)}
              </h2>
              {typeof current.slug === "string" ? (
                <p className="mt-1 text-xs text-ink-soft">
                  URL: /{doc}/{current.slug} — changing the slug changes the
                  page address.
                </p>
              ) : null}
            </div>
            {items.length > 1 ? (
              <button
                type="button"
                onClick={removeItem}
                className="shrink-0 rounded-full px-4 py-1.5 text-sm font-semibold text-red-600 hover:bg-red-50"
              >
                Delete {itemNoun}
              </button>
            ) : null}
          </div>
          <AutoForm value={current as never} onChange={updateItem as never} />
        </div>
      ) : null}

      <div className="sticky bottom-0 -mx-1 rounded-t-xl border-t border-line bg-mist/95 px-1 py-3 backdrop-blur">
        <SaveButton busy={busy} saved={saved} error={error} />
      </div>
    </form>
  );
}

/** Editor for a single object document (shared sections). */
export function DocumentEditor({
  doc,
  initial,
}: {
  doc: string;
  initial: Item;
}) {
  const [content, setContent] = useState(initial);
  const { busy, saved, error, save, clearSaved } = useSave(doc);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        save(content);
      }}
      className="space-y-6"
    >
      <div className="rounded-2xl bg-white p-6 ring-1 ring-line">
        <AutoForm
          value={content as never}
          onChange={((next: Item) => {
            clearSaved();
            setContent(next);
          }) as never}
        />
      </div>
      <div className="sticky bottom-0 -mx-1 rounded-t-xl border-t border-line bg-mist/95 px-1 py-3 backdrop-blur">
        <SaveButton busy={busy} saved={saved} error={error} />
      </div>
    </form>
  );
}
