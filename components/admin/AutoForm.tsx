"use client";

import { Field, fieldCls } from "@/components/admin/fields";
import { ImageField } from "@/components/admin/ImageField";

/**
 * Schema-less recursive form. Renders inputs for any JSON value —
 * strings, string lists, nested objects and lists of objects — so every
 * content document stays editable without writing a bespoke form.
 */

type Json = string | number | boolean | null | Json[] | { [key: string]: Json };

const LONG_TEXT = /body|intro|statement|summary|description|quote|challenge|approach|answer|headline|tagline|whynow/i;
const IMAGE_KEY = /image|photo|cover|avatar|thumbnail|picture/i;

export function labelize(key: string): string {
  const spaced = key
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[-_]/g, " ")
    .toLowerCase();
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

/** Clone a value's shape with all strings emptied — used for "Add" buttons. */
export function emptyLike(value: Json): Json {
  if (typeof value === "string") return "";
  if (Array.isArray(value)) {
    return value.length > 0 && typeof value[0] === "object" && value[0] !== null
      ? [emptyLike(value[0])]
      : [];
  }
  if (typeof value === "object" && value !== null) {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, emptyLike(v)])
    );
  }
  return value;
}

function StringField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const long = value.length > 90 || value.includes("\n") || LONG_TEXT.test(label);
  return (
    <Field label={labelize(label)}>
      {long ? (
        <textarea
          rows={Math.min(6, Math.max(2, Math.ceil(value.length / 90)))}
          className={fieldCls}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          className={fieldCls}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </Field>
  );
}

function StringListField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string[];
  onChange: (v: string[]) => void;
}) {
  return (
    <div>
      <span className="mb-1.5 block text-sm font-semibold text-ink">
        {labelize(label)}
      </span>
      <div className="space-y-2">
        {value.map((item, i) => (
          <div key={i} className="flex items-start gap-2">
            <textarea
              rows={Math.max(1, Math.ceil(item.length / 90))}
              className={fieldCls}
              value={item}
              onChange={(e) =>
                onChange(value.map((v, j) => (j === i ? e.target.value : v)))
              }
            />
            <button
              type="button"
              aria-label={`Remove item ${i + 1}`}
              onClick={() => onChange(value.filter((_, j) => j !== i))}
              className="mt-1.5 rounded-full px-2.5 py-1 text-sm font-semibold text-ink-soft hover:bg-red-50 hover:text-red-600"
            >
              ✕
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => onChange([...value, ""])}
          className="rounded-full border border-line px-4 py-1.5 text-xs font-semibold text-ink hover:border-brand hover:text-brand"
        >
          + Add entry
        </button>
      </div>
    </div>
  );
}

function ObjectListField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: { [key: string]: Json }[];
  onChange: (v: { [key: string]: Json }[]) => void;
}) {
  return (
    <div>
      <span className="mb-2 block text-sm font-semibold text-ink">
        {labelize(label)}
      </span>
      <div className="space-y-4">
        {value.map((item, i) => (
          <div key={i} className="rounded-xl border border-line bg-mist/60 p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                {labelize(label)} {i + 1}
              </span>
              {value.length > 1 ? (
                <button
                  type="button"
                  onClick={() => onChange(value.filter((_, j) => j !== i))}
                  className="rounded-full px-3 py-1 text-xs font-semibold text-ink-soft hover:bg-red-50 hover:text-red-600"
                >
                  Remove
                </button>
              ) : null}
            </div>
            <AutoForm
              value={item}
              onChange={(next) =>
                onChange(value.map((v, j) => (j === i ? next : v)))
              }
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            onChange([
              ...value,
              emptyLike(value[value.length - 1] ?? {}) as {
                [key: string]: Json;
              },
            ])
          }
          className="rounded-full border border-line px-4 py-1.5 text-xs font-semibold text-ink hover:border-brand hover:text-brand"
        >
          + Add {labelize(label).toLowerCase().replace(/s$/, "")}
        </button>
      </div>
    </div>
  );
}

export function AutoForm({
  value,
  onChange,
  skipKeys = [],
}: {
  value: { [key: string]: Json };
  onChange: (v: { [key: string]: Json }) => void;
  skipKeys?: string[];
}) {
  const set = (key: string, v: Json) => onChange({ ...value, [key]: v });

  return (
    <div className="space-y-5">
      {Object.entries(value).map(([key, v]) => {
        if (skipKeys.includes(key)) return null;
        if (typeof v === "string") {
          if (IMAGE_KEY.test(key)) {
            return (
              <ImageField
                key={key}
                label={labelize(key)}
                value={v}
                onChange={(next) => set(key, next)}
              />
            );
          }
          return (
            <StringField
              key={key}
              label={key}
              value={v}
              onChange={(next) => set(key, next)}
            />
          );
        }
        if (typeof v === "number" || typeof v === "boolean") {
          return (
            <Field key={key} label={labelize(key)}>
              <input
                className={fieldCls}
                value={String(v)}
                onChange={(e) => {
                  const raw = e.target.value;
                  if (typeof v === "number") {
                    const n = Number(raw);
                    set(key, Number.isFinite(n) ? n : 0);
                  } else {
                    set(key, raw === "true");
                  }
                }}
              />
            </Field>
          );
        }
        if (Array.isArray(v)) {
          if (v.every((item) => typeof item === "string")) {
            return (
              <StringListField
                key={key}
                label={key}
                value={v as string[]}
                onChange={(next) => set(key, next)}
              />
            );
          }
          return (
            <ObjectListField
              key={key}
              label={key}
              value={v as { [key: string]: Json }[]}
              onChange={(next) => set(key, next)}
            />
          );
        }
        if (typeof v === "object" && v !== null) {
          return (
            <div key={key} className="rounded-xl border border-line bg-mist/60 p-4">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-wider text-ink-soft">
                {labelize(key)}
              </span>
              <AutoForm value={v} onChange={(next) => set(key, next)} />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
