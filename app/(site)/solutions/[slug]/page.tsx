import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SOLUTIONS, PRODUCTS } from "@/lib/site";
import { PageHero, CtaBanner, FeatureCard } from "@/components/sections";
import { MarkBackdrop } from "@/components/Logo";
import { JsonLd, breadcrumbList } from "@/lib/seo";
import { getSettings } from "@/lib/content";
import { Container, PillButton, SectionTitle, StatTile, Eyebrow, ArrowIcon } from "@/components/ui";

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = SOLUTIONS.find((s) => s.slug === slug);
  if (!solution) return {};
  return {
    title: `${solution.name} Solutions`,
    description: solution.intro,
    alternates: { canonical: `/solutions/${solution.slug}` },
    openGraph: { title: `${solution.name} | Dataplexor`, description: solution.intro },
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const solution = SOLUTIONS.find((s) => s.slug === slug);
  if (!solution) notFound();
  const product = PRODUCTS.find((p) => p.slug === solution.relatedProduct);
  const settings = await getSettings();

  return (
    <>
      <JsonLd
        data={breadcrumbList(settings.siteUrl, [
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions/data-analytics" },
          { name: solution.name, path: `/solutions/${solution.slug}` },
        ])}
      />
      <PageHero
        eyebrow={solution.eyebrow}
        title={solution.headline}
        actions={
          <>
            <PillButton href="/company/contact" variant="teal">
              Get in touch
            </PillButton>
            <PillButton href="/products" variant="outline">
              View products
            </PillButton>
          </>
        }
      />

      {/* Statement */}
      <section className="relative overflow-hidden bg-brand-soft">
        <MarkBackdrop
          className="right-[-6%] top-[-15%] h-[110%] text-brand"
          opacity={0.06}
        />
        <Container className="relative py-20 sm:py-24">
          <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-brand sm:text-4xl">
            {solution.statement}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
            {solution.intro}
          </p>
          <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-3">
            {solution.pillars.map((pillar) => (
              <div key={pillar.title}>
                <h3 className="text-xl font-bold tracking-tight text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section>
        <Container className="py-20 sm:py-24">
          <SectionTitle>{solution.capabilitiesTitle}</SectionTitle>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {solution.capabilitiesIntro}
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solution.stats.map((stat) => (
              <StatTile key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {solution.capabilities.map((cap) => (
              <FeatureCard key={cap.title} title={cap.title} body={cap.body} />
            ))}
          </div>
        </Container>
      </section>

      {/* Related product */}
      {product ? (
        <section className="bg-mist">
          <Container className="py-20 sm:py-24">
            <div className="rounded-3xl bg-ink p-10 text-white sm:p-14">
              <Eyebrow dark>Related product · {product.tag}</Eyebrow>
              <div className="mt-4 flex flex-wrap items-end justify-between gap-8">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    {product.name}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-white/80">
                    {product.summary}
                  </p>
                </div>
                <PillButton href={`/products/${product.slug}`} variant="teal">
                  Explore {product.name}
                </PillButton>
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      {/* Other solutions */}
      <section>
        <Container className="py-20 sm:py-24">
          <SectionTitle>Explore our other solutions</SectionTitle>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {SOLUTIONS.filter((s) => s.slug !== solution.slug).map((s) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="group rounded-2xl border border-line p-8 card-hover"
              >
                <h3 className="text-xl font-bold tracking-tight text-ink group-hover:text-brand">
                  {s.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {s.intro}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Learn more <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title={`Let's talk about ${solution.name}`}
        body="Tell us where you are today and where you need to be. We will bring the blueprint."
      />
    </>
  );
}
