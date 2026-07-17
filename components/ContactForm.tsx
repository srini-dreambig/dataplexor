"use client";

import { useState } from "react";

const TOPICS = [
  "Data & Analytics",
  "Artificial Intelligence",
  "Agentic AI",
  "Products & Demos",
  "Services & Consulting",
  "Careers",
  "Press & Other",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputCls =
    "w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-brand-soft p-10 text-center">
        <p className="text-2xl font-bold tracking-tight text-brand">
          Thank you — message received.
        </p>
        <p className="mt-3 text-ink-soft">
          Our team will get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink">
            Full name *
          </label>
          <input id="name" name="name" required maxLength={200} className={inputCls} placeholder="Jane Doe" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink">
            Work email *
          </label>
          <input id="email" name="email" type="email" required maxLength={200} className={inputCls} placeholder="jane@company.com" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-semibold text-ink">
            Company
          </label>
          <input id="company" name="company" maxLength={200} className={inputCls} placeholder="Company, Inc." />
        </div>
        <div>
          <label htmlFor="topic" className="mb-1.5 block text-sm font-semibold text-ink">
            Topic *
          </label>
          <select id="topic" name="topic" required className={inputCls} defaultValue="">
            <option value="" disabled>
              Select a topic
            </option>
            {TOPICS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink">
          How can we help? *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={5000}
          className={inputCls}
          placeholder="Tell us about your project, timeline and goals…"
        />
      </div>
      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {status === "error" ? (
          <p className="text-sm font-medium text-red-600">
            Something went wrong. Please try again.
          </p>
        ) : null}
      </div>
      <p className="text-xs leading-relaxed text-ink-soft">
        By submitting this form you agree to our{" "}
        <a href="/legal/privacy" className="underline underline-offset-2">
          Privacy Policy
        </a>
        . We&apos;ll only use your details to respond to your enquiry.
      </p>
    </form>
  );
}
