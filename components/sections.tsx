import Link from "next/link";
import { Container, Eyebrow, PillButton, ArrowIcon } from "@/components/ui";
import { WaveBackground, type WaveVariant } from "@/components/WaveBackground";
import { MarkBackdrop } from "@/components/Logo";
import type { Post } from "@/lib/content";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  actions,
  compact = false,
  wave = "flow",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  compact?: boolean;
  wave?: WaveVariant;
}) {
  return (
    <section className="relative isolate text-white">
      <WaveBackground variant={wave} idPrefix={`hero-${wave}`} />
      <Container
        className={`relative ${compact ? "py-20 sm:py-24" : "py-24 sm:py-32"}`}
      >
        {eyebrow ? (
          <div className="mb-5">
            <Eyebrow dark>{eyebrow}</Eyebrow>
          </div>
        ) : null}
        <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            {subtitle}
          </p>
        ) : null}
        {actions ? (
          <div className="mt-9 flex flex-wrap items-center gap-4">{actions}</div>
        ) : null}
      </Container>
    </section>
  );
}

export function CtaBanner({
  title = "Ready to put your data to work?",
  body = "Talk to our team about your data, AI and agentic ambitions — and how to get there faster.",
  ctaLabel = "Get in touch",
  ctaHref = "/company/contact",
}: {
  title?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand text-white">
      <MarkBackdrop
        className="right-[-4%] top-1/2 h-[230%] -translate-y-1/2"
        opacity={0.09}
      />
      <Container className="relative flex flex-col items-start gap-8 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/85">{body}</p>
        </div>
        <PillButton href={ctaHref} variant="teal" className="shrink-0">
          {ctaLabel}
        </PillButton>
      </Container>
    </section>
  );
}

export function InsightCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  const date = new Date(post.date + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <Link
      href={`/insights/${post.slug}`}
      className={`group flex flex-col rounded-2xl border border-line bg-white p-7 card-hover ${
        featured ? "sm:col-span-2 sm:p-9" : ""
      }`}
    >
      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
        <span>{post.category}</span>
        <span className="h-1 w-1 rounded-full bg-line" />
        <span className="font-medium normal-case tracking-normal text-ink-soft">
          {date}
        </span>
      </div>
      <h3
        className={`mt-4 font-bold tracking-tight text-ink group-hover:text-brand ${
          featured ? "text-2xl sm:text-3xl" : "text-xl"
        }`}
      >
        {post.title}
      </h3>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-soft">
        {post.excerpt}
      </p>
      <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand">
        Read more <ArrowIcon />
      </span>
    </Link>
  );
}

export function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-7">
      <h3 className="text-lg font-bold tracking-tight text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{body}</p>
    </div>
  );
}
