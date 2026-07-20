import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getIndustry, getSolutions } from "@/lib/sitecontent";
import { PageHero, CtaBanner, FeatureCard, FaqSection } from "@/components/sections";
import { Container, Eyebrow, PillButton, SectionTitle, ArrowIcon } from "@/components/ui";
import { MarkBackdrop } from "@/components/Logo";
import { JsonLd, breadcrumbList } from "@/lib/seo";
import { getSettings } from "@/lib/content";
import { heroArtForIndustry } from "@/lib/art";
import { ConceptArt, conceptForSolution } from "@/components/ConceptArt";
import { ConceptIcon, iconForTitleBody } from "@/components/ConceptIcon";

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = await getIndustry(slug);
  if (!industry) return {};
  return {
    title: `${industry.name} — Data & AI Solutions`,
    description: industry.intro,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: { title: `${industry.name} | Dataplexor`, description: industry.intro },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const industry = await getIndustry(slug);
  if (!industry) notFound();
  const settings = await getSettings();
  const related = (await getSolutions()).filter((s) =>
    industry.solutions.includes(s.slug)
  );

  return (
    <>
      <JsonLd
        data={breadcrumbList(settings.siteUrl, [
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${industry.slug}` },
        ])}
      />
      <PageHero
        wave="horizon"
        eyebrow="Industries"
        title={industry.headline}
        subtitle={industry.heroTagline}
        bgImage={heroArtForIndustry(industry.slug)}
        actions={
          <>
            <PillButton href="/company/contact" variant="teal">
              Talk to an industry lead
            </PillButton>
            <PillButton href="/industries" variant="outline">
              All industries
            </PillButton>
          </>
        }
      />

      <section className="relative overflow-hidden bg-brand-soft">
        <MarkBackdrop
          className="right-[-6%] top-[-15%] h-[110%] text-brand"
          opacity={0.06}
        />
        <Container className="relative py-20 sm:py-24">
          <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-brand sm:text-4xl">
            {industry.statement}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
            {industry.intro}
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-20 sm:py-24">
          <SectionTitle>What we solve</SectionTitle>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {industry.challenges.map((c) => (
              <FeatureCard key={c.title} title={c.title} body={c.body} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist">
        <Container className="py-20 sm:py-24">
          <Eyebrow>Use cases</Eyebrow>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-brand sm:text-4xl">
            The use cases on every {industry.name} agenda right now
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Not a lab wishlist — the initiatives leaders are funding this year,
            with the reason each one became urgent and the impact on the
            table.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industry.useCases.map((useCase, i) => (
              <article
                key={useCase.title}
                className="card-hover flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-line"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <ConceptArt
                    icon={iconForTitleBody(useCase.title, useCase.body)}
                    className="absolute inset-0 h-full w-full"
                  />
                  <span className="absolute right-4 top-3 font-display text-sm font-bold text-ink-soft/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                <h3 className="text-lg font-bold tracking-tight text-ink">
                  {useCase.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                  {useCase.body}
                </p>
                <div className="mt-5 border-t border-line pt-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft/60">
                    Why now
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {useCase.whyNow}
                  </p>
                </div>
                <p className="mt-auto flex items-center gap-2.5 pt-5 text-sm font-semibold text-ink">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  {useCase.impact}
                </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink text-white">
        <Container className="py-20 sm:py-24">
          <Eyebrow dark>Outcomes</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Results our clients measure
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {industry.outcomes.map((o) => (
              <div
                key={o.title}
                className="rounded-2xl border border-white/15 bg-white/5 p-8"
              >
                <ConceptIcon label={o.title} dark className="mb-5" />
                <p className="text-5xl font-bold tracking-tight text-teal">
                  {o.metric}
                </p>
                <h3 className="mt-4 text-xl font-bold tracking-tight">
                  {o.title}
                </h3>
                <p className="mt-3 leading-relaxed text-white/75">{o.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-white/50">
            Results from engagements delivered by our team across their careers;
            anonymized, and outcomes vary by context and baseline.
          </p>
        </Container>
      </section>

      <section className="bg-mist">
        <Container className="py-20 sm:py-24">
          <SectionTitle>How we get there</SectionTitle>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="card-hover group overflow-hidden rounded-2xl bg-white ring-1 ring-line"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <ConceptArt
                    concept={conceptForSolution(s.slug)}
                    className="absolute inset-0 h-full w-full transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-bold tracking-tight text-ink group-hover:text-brand">
                    {s.name}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-soft">
                    {s.intro}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                    Explore <ArrowIcon />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <FaqSection
        faqs={industry.faqs}
        title={`${industry.name}: your questions, answered`}
      />

      <CtaBanner
        title={`Let's talk ${industry.name}`}
        body="Bring us a workflow, a margin problem or a modernization mandate — we'll bring the blueprint and the team."
      />
    </>
  );
}
