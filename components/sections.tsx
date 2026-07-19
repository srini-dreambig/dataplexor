import Link from "next/link";
import { Container, Eyebrow, PillButton, ArrowIcon } from "@/components/ui";
import { WaveBackground, type WaveVariant } from "@/components/WaveBackground";
import { MarkBackdrop } from "@/components/Logo";
import { artForCategory } from "@/lib/art";
import { readingTime, type Post } from "@/lib/content";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  actions,
  compact = false,
  wave = "flow",
  bgImage,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  compact?: boolean;
  wave?: WaveVariant;
  /** subject artwork rendered as the full hero background */
  bgImage?: string;
}) {
  return (
    <section className="relative isolate text-white">
      <WaveBackground variant={wave} image={bgImage} idPrefix={`hero-${wave}`} />
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
      className={`card-hover group flex flex-col overflow-hidden rounded-2xl border border-line bg-white ${
        featured ? "sm:col-span-2" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          featured ? "aspect-[24/9]" : "aspect-[16/9]"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={artForCategory(post.category)}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
          loading="lazy"
          draggable={false}
        />
      </div>
      <div className={`flex flex-1 flex-col p-6 ${featured ? "sm:p-8" : "sm:p-7"}`}>
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
          <span>{post.category}</span>
          <span className="h-1 w-1 rounded-full bg-line" />
          <span className="font-medium normal-case tracking-normal text-ink-soft">
            {date} · {readingTime(post.body)} min read
          </span>
        </div>
        <h3
          className={`mt-3.5 font-bold tracking-tight text-ink group-hover:text-brand ${
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
      </div>
    </Link>
  );
}

export function FaqSection({
  faqs,
  title = "Frequently asked questions",
}: {
  faqs: { q: string; a: string }[];
  title?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section className="bg-mist">
      <Container className="py-20 sm:py-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <h2 className="text-3xl font-bold tracking-tight text-brand sm:text-4xl">
          {title}
        </h2>
        <div className="mt-10 max-w-4xl divide-y divide-line overflow-hidden rounded-2xl bg-white ring-1 ring-line">
          {faqs.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 text-left font-bold text-ink transition-colors hover:text-brand [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  className="shrink-0 text-brand transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
                    <path
                      d="M8 2v12M2 8h12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <p className="px-6 pb-6 text-[15px] leading-relaxed text-ink-soft">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function TechStrip({ technologies }: { technologies: string[] }) {
  return (
    <section className="border-y border-line">
      <Container className="py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
          Technologies we work with
        </p>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {technologies.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink-soft"
            >
              {t}
            </span>
          ))}
        </div>
      </Container>
    </section>
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
