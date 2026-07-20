import Link from "next/link";
import type { Product } from "@/lib/site";
import { WaveBackground } from "@/components/WaveBackground";
import { MarkBackdrop } from "@/components/Logo";
import { ProductMark } from "@/components/ProductLogo";
import { ConceptIcon } from "@/components/ConceptIcon";
import { ConceptArt, IllustrationCard } from "@/components/ConceptArt";
import { FeatureCard, FaqSection } from "@/components/sections";
import {
  Container,
  PillButton,
  Eyebrow,
  SectionTitle,
  ArrowIcon,
} from "@/components/ui";
import { heroArtForProduct } from "@/lib/art";

/**
 * Bespoke, section-rich product page rendered when a product carries a
 * `page`. Falls back to the generic template for products without one.
 */
export function ProductRichPage({ product }: { product: Product }) {
  const page = product.page!;

  return (
    <>
      {/* Hero */}
      <section className="relative isolate text-white">
        <WaveBackground
          variant="orbit"
          image={heroArtForProduct(product.slug)}
          idPrefix="plexuscore-hero"
        />
        <Container className="relative py-24 sm:py-32">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-teal ring-1 ring-white/20">
              <ProductMark slug={product.slug} className="h-7 w-7" />
            </span>
            <Eyebrow dark>{page.hero.eyebrow}</Eyebrow>
          </div>
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            {page.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            {page.hero.subtitle}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <PillButton href={page.hero.primaryCta.href} variant="teal">
              {page.hero.primaryCta.label}
            </PillButton>
            <PillButton href={page.hero.secondaryCta.href} variant="outline">
              {page.hero.secondaryCta.label}
            </PillButton>
          </div>
          <p className="mt-5 text-sm text-white/60">{page.hero.microcopy}</p>
        </Container>
      </section>

      {/* Problem */}
      <section className="bg-white">
        <Container className="py-20 sm:py-24">
          <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            {page.problem.heading}
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {page.problem.body.map((para, i) => (
              <p
                key={i}
                className={`text-lg leading-relaxed ${
                  i === page.problem.body.length - 1
                    ? "font-semibold text-brand"
                    : "text-ink-soft"
                }`}
              >
                {para}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-24 bg-mist">
        <Container className="py-20 sm:py-24">
          <SectionTitle>{page.how.heading}</SectionTitle>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {page.how.intro}
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {page.how.steps.map((s) => (
              <IllustrationCard
                key={s.step}
                eyebrow={`Step ${s.step}`}
                title={s.title}
                body={s.body}
                label={s.title}
              />
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-lg font-semibold leading-relaxed text-brand">
            {page.how.closing}
          </p>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="bg-white">
        <Container className="py-20 sm:py-24">
          <SectionTitle>{page.capabilities.heading}</SectionTitle>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {product.capabilities.map((cap) => (
              <FeatureCard key={cap.title} title={cap.title} body={cap.body} />
            ))}
          </div>
        </Container>
      </section>

      {/* Differentiators */}
      <section className="relative overflow-hidden bg-ink text-white">
        <MarkBackdrop
          className="right-[-6%] top-[-10%] h-[120%]"
          opacity={0.06}
        />
        <Container className="relative py-20 sm:py-24">
          <Eyebrow dark>Why teams trust it</Eyebrow>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Built to be trusted in production, not just demoed.
          </h2>
          <div className="mt-14 space-y-14">
            {page.differentiators.map((d) => (
              <div
                key={d.heading}
                className="grid gap-6 border-t border-white/10 pt-10 md:grid-cols-[300px_1fr]"
              >
                <div>
                  <ConceptIcon label={`${d.eyebrow} ${d.heading}`} dark className="mb-4" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
                    {d.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight">
                    {d.heading}
                  </h3>
                  {d.callout ? (
                    <p className="mt-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-teal ring-1 ring-white/15">
                      {d.callout}
                    </p>
                  ) : null}
                </div>
                <p className="text-lg leading-relaxed text-white/80">{d.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Integrations */}
      <section className="bg-white">
        <Container className="py-20 sm:py-24">
          <SectionTitle>{page.integrations.heading}</SectionTitle>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {page.integrations.intro}
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {page.integrations.groups.map((g) => (
              <div
                key={g.label}
                className="card-hover group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-line"
              >
                <div className="relative flex h-32 items-center justify-center overflow-hidden bg-gradient-to-b from-white to-[#f3f5ff] sm:h-36">
                  <ConceptArt label={g.label} className="h-full w-full" />
                </div>
                <div className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                    {g.label}
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-ink">
                    {g.items}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-soft">
            {page.integrations.footnote.split("Talk to us")[0]}
            <Link
              href="/company/contact"
              className="font-semibold text-brand underline underline-offset-4"
            >
              Talk to us
            </Link>
            {page.integrations.footnote.split("Talk to us")[1]}
          </p>
        </Container>
      </section>

      {/* Security */}
      <section className="bg-mist">
        <Container className="py-20 sm:py-24">
          <SectionTitle>{page.security.heading}</SectionTitle>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {page.security.intro}
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {page.security.items.map((item) => (
              <IllustrationCard
                key={item.label}
                title={item.label}
                body={item.body}
                label={`${item.label} ${item.body}`}
              />
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-lg font-semibold leading-relaxed text-brand">
            {page.security.closing}
          </p>
        </Container>
      </section>

      {/* Audiences */}
      <section className="bg-white">
        <Container className="py-20 sm:py-24">
          <SectionTitle>{page.audiences.heading}</SectionTitle>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {page.audiences.items.map((a) => (
              <IllustrationCard
                key={a.role}
                title={a.role}
                body={a.body}
                label={a.role}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Pilot band */}
      <section className="relative overflow-hidden bg-brand text-white">
        <MarkBackdrop
          className="right-[-4%] top-1/2 h-[230%] -translate-y-1/2"
          opacity={0.09}
        />
        <Container className="relative py-16 sm:py-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {page.pilot.heading}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/85">
                {page.pilot.body}
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-4">
              <PillButton href={page.pilot.primaryCta.href} variant="white">
                {page.pilot.primaryCta.label}
              </PillButton>
              <PillButton href={page.pilot.secondaryCta.href} variant="outline">
                {page.pilot.secondaryCta.label}
              </PillButton>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <FaqSection
        faqs={product.faqs}
        title={`${product.name}: your questions, answered`}
      />

      {/* Final CTA */}
      <section className="bg-ink text-white">
        <Container className="py-20 text-center sm:py-24">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            {page.finalCta.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            {page.finalCta.subhead}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <PillButton href={page.finalCta.primaryCta.href} variant="teal">
              {page.finalCta.primaryCta.label}
            </PillButton>
            <PillButton href={page.finalCta.secondaryCta.href} variant="outline">
              {page.finalCta.secondaryCta.label} <ArrowIcon className="ml-1.5 h-3.5 w-3.5" />
            </PillButton>
          </div>
        </Container>
      </section>
    </>
  );
}
