import Link from "next/link";
import { Container, Eyebrow, PillButton, ArrowIcon } from "@/components/ui";
import { WaveBackground, type WaveVariant } from "@/components/WaveBackground";
import { getSections } from "@/lib/sitecontent";
import { MarkBackdrop } from "@/components/Logo";
import { ConceptArt, conceptForCategory } from "@/components/ConceptArt";
import { ConceptIcon } from "@/components/ConceptIcon";
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
        {post.cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.cover}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
            loading="lazy"
            draggable={false}
          />
        ) : (
          <ConceptArt
            concept={conceptForCategory(post.category)}
            className="absolute inset-0 h-full w-full transition-transform duration-300 group-hover:scale-[1.04]"
          />
        )}
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
        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <span className="truncate text-sm font-medium text-ink-soft">
            {post.author}
          </span>
          <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand">
            Read more <ArrowIcon />
          </span>
        </div>
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

export async function EngageOptions({
  title = "Three ways to start",
  intro = "Every engagement begins with a bounded, fixed-scope first step — priced upfront, delivered by practitioners, and designed so you know exactly what you learn and what you get.",
}: {
  title?: string;
  intro?: string;
}) {
  const { entryOffers: ENTRY_OFFERS } = await getSections();
  return (
    <section className="bg-brand-soft">
      <Container className="py-20 sm:py-24">
        <Eyebrow>Getting started</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand sm:text-4xl">
          {title}
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-soft">
          {intro}
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ENTRY_OFFERS.map((offer) => (
            <div
              key={offer.name}
              className="card-hover flex flex-col rounded-2xl bg-white p-8 ring-1 ring-line"
            >
              <ConceptIcon label={`${offer.name} ${offer.body}`} className="mb-5" />
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
                {offer.duration}
              </p>
              <h3 className="mt-3 text-xl font-bold tracking-tight text-ink">
                {offer.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {offer.body}
              </p>
              <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                {offer.deliverables.map((d) => (
                  <li key={d} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                    <svg viewBox="0 0 16 16" className="mt-1 h-3.5 w-3.5 shrink-0 text-teal" fill="none" aria-hidden>
                      <path d="M2.5 8.5 6 12l7.5-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {d}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-7">
                <PillButton href="/company/contact" className="w-full">
                  {offer.cta}
                </PillButton>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export async function Testimonials() {
  const { testimonials: TESTIMONIALS } = await getSections();
  return (
    <section className="bg-ink text-white">
      <Container className="py-20 sm:py-24">
        <Eyebrow dark>What clients say about our people</Eyebrow>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.org}
              className="flex flex-col rounded-2xl border border-white/15 bg-white/5 p-8"
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-teal" fill="currentColor" aria-hidden>
                <path d="M4.5 13.5C4.5 8.8 7.6 5.6 12 4.5l.8 1.8c-2.9 1-4.5 2.9-4.8 5.2.4-.2.9-.3 1.5-.3 1.9 0 3.2 1.4 3.2 3.3 0 2-1.5 3.5-3.5 3.5-2.7 0-4.7-2-4.7-4.5Zm10.7 0c0-4.7 3.1-7.9 7.5-9l.8 1.8c-2.9 1-4.5 2.9-4.8 5.2.4-.2.9-.3 1.5-.3 1.9 0 3.2 1.4 3.2 3.3 0 2-1.5 3.5-3.5 3.5-2.7 0-4.7-2-4.7-4.5Z" />
              </svg>
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-white/85">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-5">
                <p className="font-bold">{t.author}</p>
                <p className="mt-0.5 text-sm text-white/60">{t.org}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-xs text-white/40">
          Perspectives from engagements our founding team delivered in prior
          roles; roles and organizations anonymized under confidentiality
          agreements.
        </p>
      </Container>
    </section>
  );
}

export async function DeliveryTimeline({
  title = "What working with us looks like",
}: {
  title?: string;
}) {
  const { deliveryPhases: DELIVERY_PHASES } = await getSections();
  return (
    <section>
      <Container className="py-20 sm:py-24">
        <Eyebrow>How we deliver</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand sm:text-4xl">
          {title}
        </h2>
        <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {DELIVERY_PHASES.map((p) => (
            <div key={p.phase} className="border-t-2 border-brand pt-5">
              <ConceptIcon label={`${p.title} ${p.body}`} className="mb-4" />
              <p className="font-display text-sm font-bold text-brand">
                {p.phase}
              </p>
              <h3 className="mt-2 text-xl font-bold tracking-tight text-ink">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CaseStudySnapshot({
  caseStudy,
}: {
  caseStudy: {
    client: string;
    challenge: string;
    approach: string;
    results: { metric: string; label: string }[];
  };
}) {
  return (
    <section className="bg-mist">
      <Container className="py-20 sm:py-24">
        <div className="overflow-hidden rounded-3xl bg-ink text-white">
          <div className="grid lg:grid-cols-[1.4fr_1fr]">
            <div className="p-10 sm:p-14">
              <Eyebrow dark>From our team's track record</Eyebrow>
              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                {caseStudy.client}
              </h2>
              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">
                    The challenge
                  </p>
                  <p className="mt-2 leading-relaxed text-white/80">
                    {caseStudy.challenge}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">
                    What we did
                  </p>
                  <p className="mt-2 leading-relaxed text-white/80">
                    {caseStudy.approach}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-6 border-t border-white/10 bg-white/5 p-10 sm:p-14 lg:border-l lg:border-t-0">
              {caseStudy.results.map((r) => (
                <div key={r.label}>
                  <p className="font-display text-4xl font-bold tabular-nums tracking-tight text-teal">
                    {r.metric}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                    {r.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-6 text-xs text-ink-soft/70">
          Engagement delivered by Dataplexor team members in prior roles; client anonymized under confidentiality.
        </p>
      </Container>
    </section>
  );
}

export function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-7">
      <ConceptIcon label={title} className="mb-5" />
      <h3 className="text-lg font-bold tracking-tight text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{body}</p>
    </div>
  );
}
