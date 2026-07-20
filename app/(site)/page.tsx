import Link from "next/link";
import type { Metadata } from "next";
import { getHomeContent, getPosts } from "@/lib/content";
import { WaveBackground } from "@/components/WaveBackground";
import { MarkBackdrop } from "@/components/Logo";
import { Container, Eyebrow, PillButton, SectionTitle, StatTile, ArrowIcon } from "@/components/ui";
import { CtaBanner, InsightCard, Testimonials, EngageOptions } from "@/components/sections";
import { getSolutions, getProducts, getIndustries } from "@/lib/sitecontent";
import { artForSolution, artForProduct, artForIndustry } from "@/lib/art";
import { ProductMark, hasProductMark } from "@/components/ProductLogo";

export const metadata: Metadata = {
  title: { absolute: "Dataplexor — Data & Analytics, AI and Agentic AI" },
  description:
    "Dataplexor turns enterprise data into decisions: modern data platforms, production AI and governed agentic systems — delivered through products, services and consulting.",
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  const home = await getHomeContent();
  const posts = (await getPosts()).slice(0, 3);
  const [SOLUTIONS, PRODUCTS, INDUSTRIES] = await Promise.all([
    getSolutions(),
    getProducts(),
    getIndustries(),
  ]);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate text-white">
        <WaveBackground variant="flow" idPrefix="home-hero" />
        <Container className="relative py-28 sm:py-40">
          <Eyebrow dark>{home.hero.eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
            {home.hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/80">
            {home.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <PillButton href={home.hero.primaryCta.href} variant="teal">
              {home.hero.primaryCta.label}
            </PillButton>
            <PillButton href={home.hero.secondaryCta.href} variant="outline">
              {home.hero.secondaryCta.label}
            </PillButton>
            {home.hero.tertiaryCta.label ? (
              <Link
                href={home.hero.tertiaryCta.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition-colors hover:text-white"
              >
                {home.hero.tertiaryCta.label} <ArrowIcon />
              </Link>
            ) : null}
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
          <div className="mt-12 grid gap-6 lg:grid-cols-6">
            {SOLUTIONS.map((solution, i) => (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className={`card-hover group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-line ${
                  i < 3 ? "lg:col-span-2" : "lg:col-span-3"
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    i < 3 ? "aspect-[16/9]" : "aspect-[24/9]"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={artForSolution(solution.slug)}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
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
                </div>
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
                className="card-hover group flex items-center gap-5 rounded-2xl border border-line p-4 pr-6 hover:border-brand"
              >
                <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={artForIndustry(industry.slug)}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.06]"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold tracking-tight text-ink group-hover:text-brand">
                    {industry.name}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-ink-soft">
                    {industry.statement}
                  </p>
                </div>
                <ArrowIcon className="h-4 w-4 shrink-0 text-brand" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="bg-mist">
        <Container className="py-20 sm:py-24">
          <SectionTitle>The company is new. The experience is not.</SectionTitle>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Dataplexor launched in 2026 — built by practitioners who spent
            their careers delivering exactly this work. Judge us on the track
            records of the people in the room.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {home.stats.map((stat) => (
              <StatTile key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </Container>
      </section>

      <Testimonials />

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
                Career-proven patterns,
                <br className="hidden sm:block" /> productized from day one
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
                className="group overflow-hidden rounded-2xl border border-white/15 bg-white/5 transition-colors hover:border-teal/60 hover:bg-white/10"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={artForProduct(product.slug)}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
                <div className="p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
                    {product.tag}
                  </p>
                  <div className="mt-3 flex items-center gap-2.5">
                    {hasProductMark(product.slug) ? (
                      <ProductMark
                        slug={product.slug}
                        className="h-8 w-8 shrink-0 text-teal"
                      />
                    ) : null}
                    <h3 className="text-2xl font-bold tracking-tight">
                      {product.name}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    {product.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal">
                    Learn more <ArrowIcon />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <EngageOptions />

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
