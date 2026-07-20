import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProducts, getProduct } from "@/lib/sitecontent";
import { PageHero, CtaBanner, FeatureCard, FaqSection } from "@/components/sections";
import { Container, PillButton, SectionTitle, StatTile, ArrowIcon } from "@/components/ui";
import { ProductMark, hasProductMark } from "@/components/ProductLogo";
import { JsonLd, breadcrumbList } from "@/lib/seo";
import { getSettings } from "@/lib/content";
import { heroArtForProduct } from "@/lib/art";

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.tag}`,
    description: product.summary,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: { title: `${product.name} | Dataplexor`, description: product.summary },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();
  const PRODUCTS = await getProducts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    applicationCategory: "BusinessApplication",
    description: product.summary,
    operatingSystem: "Cloud",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Contact for enterprise pricing" },
    provider: { "@type": "Organization", name: "Dataplexor" },
  };

  const settings = await getSettings();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <JsonLd
        data={breadcrumbList(settings.siteUrl, [
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: product.name, path: `/products/${product.slug}` },
        ])}
      />
      <PageHero
        wave="orbit"
        eyebrow={`Products · ${product.tag}`}
        title={product.name}
        subtitle={product.headline}
        bgImage={heroArtForProduct(product.slug)}
        actions={
          <>
            <PillButton href="/company/contact" variant="teal">
              Request a demo
            </PillButton>
            <PillButton href="/products" variant="outline">
              All products
            </PillButton>
          </>
        }
      />

      <section className="bg-brand-soft">
        <Container className="py-20 sm:py-24">
          {hasProductMark(product.slug) ? (
            <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 ring-1 ring-line">
              <ProductMark slug={product.slug} className="h-7 w-7 shrink-0 text-brand" />
              <span className="font-display text-lg font-bold tracking-tight text-ink">
                {product.name}
              </span>
            </div>
          ) : null}
          <p className="max-w-4xl text-2xl font-semibold leading-snug tracking-tight text-brand sm:text-3xl">
            {product.summary}
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
            {product.description}
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-20 sm:py-24">
          <SectionTitle>Capabilities</SectionTitle>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {product.capabilities.map((cap) => (
              <FeatureCard key={cap.title} title={cap.title} body={cap.body} />
            ))}
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {product.stats.map((stat) => (
              <StatTile key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist">
        <Container className="py-16 sm:py-20">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <h2 className="text-2xl font-bold tracking-tight text-ink">
              More from the product family
            </h2>
            <div className="flex flex-wrap gap-4">
              {PRODUCTS.filter((p) => p.slug !== product.slug).map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:border-brand hover:text-brand"
                >
                  {p.name} <ArrowIcon />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <FaqSection
        faqs={product.faqs}
        title={`${product.name}: your questions, answered`}
      />

      <CtaBanner
        title={`Put ${product.name} to work`}
        body="Request a demo on scenarios that look like yours — and a deployment plan for your cloud."
        ctaLabel="Request a demo"
      />
    </>
  );
}
