import Link from "next/link";
import type { Metadata } from "next";
import { getHomeContent, getPosts } from "@/lib/content";
import { PlexusBackground } from "@/components/PlexusBackground";
import { MarkBackdrop } from "@/components/Logo";
import { Container, Eyebrow, PillButton, SectionTitle, StatTile, ArrowIcon } from "@/components/ui";
import { CtaBanner, InsightCard } from "@/components/sections";
import { SOLUTIONS, PRODUCTS, INDUSTRIES } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Dataplexor — Data & Analytics, AI and Agentic AI" },
  description:
    "Dataplexor turns enterprise data into decisions: modern data platforms, production AI and governed agentic systems — delivered through products, services and consulting.",
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  const home = await getHomeContent();
  const posts = (await getPosts()).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate text-white">
        <PlexusBackground />
        <Container className="relative py-28 sm:py-40">
          <Eyebrow dark>{home.hero.eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
            {home.hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/80">
            {home.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <PillButton href={home.hero.primaryCta.href} variant="teal">
              {home.hero.primaryCta.label}
            </PillButton>
            <PillButton href={home.hero.secondaryCta.href} variant="outline">
              {home.hero.secondaryCta.label}
            </PillButton>
            <PillButton href={home.hero.tertiaryCta.href} variant="outline">
              {home.hero.tertiaryCta.label}
            </PillButton>
          </div>
        </Container>
      </section>

      {/* Advantage — blue band */}
      <section className="relative overflow-hidden bg-brand text-white">
        <MarkBackdrop
          className="right-[-8%] top-[-10%] h-[90%]"
          opacity={0.08}
        />
        <Container className="relative py-20 sm:py-24">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {home.advantage.title}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/85">
            {home.advantage.intro}
          </p>
          <div className="mt-14 grid gap-x-16 gap-y-12 sm:grid-cols-2">
            {home.advantage.items.map((item) => (
              <div key={item.title}>
                <h3 className="text-2xl font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 leading-relaxed text-white/85">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Solutions */}
      <section className="bg-mist">
        <Container className="py-20 sm:py-24">
          <SectionTitle>
            Navigate data and AI with our
            <br className="hidden sm:block" /> solutions built for the enterprise
          </SectionTitle>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {SOLUTIONS.map((solution) => (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className="group flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-line transition-shadow hover:shadow-xl"
              >
                <Eyebrow>{solution.eyebrow}</Eyebrow>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-ink group-hover:text-brand">
                  {solution.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {solution.intro}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-brand">
                  Explore {solution.name} <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries */}
      <section>
        <Container className="py-20 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Industries</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand sm:text-4xl">
                Deep in your domain,
                <br className="hidden sm:block" /> not just your data
              </h2>
            </div>
            <PillButton href="/industries" variant="outline-dark">
              All industries
            </PillButton>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group flex items-start justify-between gap-4 rounded-2xl border border-line p-6 transition-all hover:border-brand hover:shadow-lg"
              >
                <div>
                  <h3 className="font-bold tracking-tight text-ink group-hover:text-brand">
                    {industry.name}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-sm text-ink-soft">
                    {industry.statement}
                  </p>
                </div>
                <ArrowIcon className="mt-1 h-4 w-4 shrink-0 text-brand" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="bg-mist">
        <Container className="py-20 sm:py-24">
          <SectionTitle>Proof, not promises</SectionTitle>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            We measure ourselves the way we teach clients to measure their data
            and AI portfolios: on outcomes in production.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {home.stats.map((stat) => (
              <StatTile key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </Container>
      </section>

      {/* Products */}
      <section className="relative overflow-hidden bg-ink text-white">
        <MarkBackdrop
          className="left-[-6%] bottom-[-40%] h-[110%]"
          opacity={0.07}
        />
        <Container className="relative py-20 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow dark>Products</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Accelerators we productized
                <br className="hidden sm:block" /> from a decade of delivery
              </h2>
            </div>
            <PillButton href="/products" variant="outline">
              View all products
            </PillButton>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PRODUCTS.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group rounded-2xl border border-white/15 bg-white/5 p-8 transition-colors hover:border-teal/60 hover:bg-white/10"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
                  {product.tag}
                </p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {product.summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal">
                  Learn more <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Insights */}
      <section className="bg-mist">
        <Container className="py-20 sm:py-24">
          <SectionTitle>
            Research &amp; Insights
            <span className="block text-brand-light">
              Stay ahead of changing technology
            </span>
          </SectionTitle>
          <div className="mt-8">
            <PillButton href="/insights">Explore all insights</PillButton>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <InsightCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
