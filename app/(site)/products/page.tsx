import type { Metadata } from "next";
import Link from "next/link";
import { getProducts } from "@/lib/sitecontent";
import { PageHero, CtaBanner } from "@/components/sections";
import { Container, Eyebrow, PillButton, ArrowIcon } from "@/components/ui";
import { ProductMark, hasProductMark } from "@/components/ProductLogo";

export const metadata: Metadata = {
  title: "Products",
  description:
    "The Dataplexor product family: PlexusCore data platform accelerator, PlexusIQ decision intelligence and AgentMesh agentic AI runtime.",
  alternates: { canonical: "/products" },
};

export default async function ProductsPage() {
  const PRODUCTS = await getProducts();
  return (
    <>
      <PageHero
        wave="orbit"
        eyebrow="Products"
        title="Software that carries our delivery experience inside it"
        subtitle="Every Dataplexor product packages patterns our founders proved across a hundred-plus builds in their careers — launched now as supported, versioned platforms, deployable on your cloud with no lock-in."
        actions={
          <>
            <PillButton href="/company/contact" variant="teal">
              Request a demo
            </PillButton>
            <PillButton href="/services" variant="outline">
              Explore services
            </PillButton>
          </>
        }
      />

      <section className="bg-mist">
        <Container className="space-y-8 py-20 sm:py-24">
          {PRODUCTS.map((product, i) => (
            <div
              key={product.slug}
              className={`grid gap-10 rounded-3xl p-10 sm:p-14 lg:grid-cols-2 ${
                i % 2 === 0 ? "bg-white ring-1 ring-line" : "bg-ink text-white"
              }`}
            >
              <div>
                <div className="flex items-center gap-4">
                  {hasProductMark(product.slug) ? (
                    <ProductMark
                      slug={product.slug}
                      className={`h-12 w-12 shrink-0 ${
                        i % 2 === 0 ? "text-brand" : "text-teal"
                      }`}
                    />
                  ) : null}
                  <div>
                    <Eyebrow dark={i % 2 !== 0}>{product.tag}</Eyebrow>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                      {product.name}
                    </h2>
                  </div>
                </div>
                <p
                  className={`mt-3 text-xl font-semibold ${
                    i % 2 === 0 ? "text-brand" : "text-teal"
                  }`}
                >
                  {product.headline}
                </p>
                <p
                  className={`mt-5 leading-relaxed ${
                    i % 2 === 0 ? "text-ink-soft" : "text-white/80"
                  }`}
                >
                  {product.description}
                </p>
                <div className="mt-8">
                  <PillButton
                    href={`/products/${product.slug}`}
                    variant={i % 2 === 0 ? "primary" : "teal"}
                  >
                    Explore {product.name}
                  </PillButton>
                </div>
              </div>
              <div className="grid content-start gap-4 sm:grid-cols-2">
                {product.capabilities.map((cap) => (
                  <div
                    key={cap.title}
                    className={`rounded-xl p-5 ${
                      i % 2 === 0
                        ? "bg-mist"
                        : "border border-white/15 bg-white/5"
                    }`}
                  >
                    <h3 className="text-sm font-bold">{cap.title}</h3>
                    <p
                      className={`mt-2 text-[13px] leading-relaxed ${
                        i % 2 === 0 ? "text-ink-soft" : "text-white/70"
                      }`}
                    >
                      {cap.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section>
        <Container className="py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-brand sm:text-4xl">
                Products and services, one practice
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                Our products are strongest in the hands of our services teams —
                and our services move faster because of our products. Engage
                either way: license the software, or let us deliver outcomes
                with it.
              </p>
            </div>
            <div className="grid content-center gap-4">
              <Link
                href="/services"
                className="card-hover group flex items-center justify-between rounded-2xl border border-line p-6 hover:border-brand"
              >
                <span className="font-semibold text-ink group-hover:text-brand">
                  Services &amp; Consulting
                </span>
                <ArrowIcon className="h-5 w-5 text-brand" />
              </Link>
              <Link
                href="/company/contact"
                className="card-hover group flex items-center justify-between rounded-2xl border border-line p-6 hover:border-brand"
              >
                <span className="font-semibold text-ink group-hover:text-brand">
                  Talk to a product specialist
                </span>
                <ArrowIcon className="h-5 w-5 text-brand" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="See the products on your data"
        body="Request a working session — we demo on scenarios that look like yours, not canned datasets."
        ctaLabel="Request a demo"
      />
    </>
  );
}
