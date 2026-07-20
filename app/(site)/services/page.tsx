import type { Metadata } from "next";
import { PageHero, CtaBanner, FeatureCard, Testimonials, EngageOptions } from "@/components/sections";
import { Container, Eyebrow, PillButton, SectionTitle, StatTile } from "@/components/ui";
import { ConceptIcon } from "@/components/ConceptIcon";

export const metadata: Metadata = {
  title: "Services & Consulting",
  description:
    "Dataplexor services: data & AI consulting and advisory, product and platform engineering, and managed data & AI operations.",
  alternates: { canonical: "/services" },
};

const SERVICES = [
  {
    id: "consulting",
    tag: "Advise",
    name: "Consulting & Advisory",
    statement: "Advice that survives contact with production.",
    intro:
      "Strategy, architecture and operating-model consulting for data, analytics and AI — delivered by people who build what they recommend. Every engagement ships with working reference implementations, not just slideware.",
    offerings: [
      {
        title: "Data & AI strategy",
        body: "Value-ranked roadmaps that connect data and AI investment to business outcomes, with feasibility scored by engineers.",
      },
      {
        title: "Architecture & tooling advisory",
        body: "Target-state architectures, platform selection and rationalization grounded in your workloads and economics.",
      },
      {
        title: "Operating model & governance",
        body: "Data-product operating models, governance frameworks and AI policy design that people actually follow.",
      },
      {
        title: "Due diligence & assessments",
        body: "Independent assessment of data estates, AI portfolios and engineering organizations for executives and investors.",
      },
    ],
  },
  {
    id: "engineering",
    tag: "Build",
    name: "Product & Platform Engineering",
    statement: "We build the systems your strategy depends on.",
    intro:
      "Full-lifecycle engineering of data platforms, analytics products, AI systems and agentic applications — from first commit to production launch, with your teams embedded throughout.",
    offerings: [
      {
        title: "Data platform engineering",
        body: "Warehouse-native models, pipelines and quality monitors, built and reviewed with our PlexusCore agentic data-engineering platform.",
      },
      {
        title: "Analytics & BI products",
        body: "Semantic layers, dashboards and embedded analytics designed around decisions, powered by PlexusIQ.",
      },
      {
        title: "AI & GenAI engineering",
        body: "RAG systems, fine-tuned models and ML services with evaluation harnesses wired into deployment.",
      },
      {
        title: "Agentic systems",
        body: "Autonomous agents with policy guardrails and observability on our AgentMesh runtime.",
      },
    ],
  },
  {
    id: "managed",
    tag: "Run",
    name: "Managed Data & AI",
    statement: "Systems improve in operation, or they decay.",
    intro:
      "We operate, optimize and evolve data and AI platforms as a managed service — with SLAs on freshness, quality, model performance and cost, and a roadmap that keeps compounding value.",
    offerings: [
      {
        title: "Platform operations",
        body: "24/7 monitoring, incident response and cost optimization for data platforms with published SLAs.",
      },
      {
        title: "ModelOps & agent operations",
        body: "Continuous evaluation, retraining and graduated-autonomy management for models and agent fleets.",
      },
      {
        title: "Data quality management",
        body: "Quality monitoring, contract enforcement and stewardship workflows run as a service.",
      },
      {
        title: "Continuous improvement",
        body: "A standing product roadmap: every quarter your platform gets faster, cheaper and more capable.",
      },
    ],
  },
];

const STATS = [
  { value: "100%", label: "Senior practitioners — nobody learns the basics on your budget" },
  { value: "20+ yrs", label: "Average field experience of every engagement lead" },
  { value: "18", label: "Industries served across our team's careers" },
  { value: "0", label: "Handoffs from the people who sold to the people who build" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        wave="rise"
        eyebrow="Services & Consulting"
        title="One partner from strategy to run"
        subtitle="Consulting, engineering and managed operations for data, analytics, AI and agentic systems — one accountable team across the whole lifecycle."
        actions={
          <>
            <PillButton href="/company/contact" variant="teal">
              Start a conversation
            </PillButton>
            <PillButton href="/products" variant="outline">
              View products
            </PillButton>
          </>
        }
      />

      <section className="bg-brand-soft">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat) => (
              <StatTile key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </Container>
      </section>

      {SERVICES.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={i % 2 === 1 ? "bg-mist" : ""}
        >
          <Container className="scroll-mt-24 py-20 sm:py-24">
            <Eyebrow>{service.tag}</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {service.name}
            </h2>
            <p className="mt-4 max-w-3xl text-2xl font-semibold tracking-tight text-brand">
              {service.statement}
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-soft">
              {service.intro}
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {service.offerings.map((o) => (
                <FeatureCard key={o.title} title={o.title} body={o.body} />
              ))}
            </div>
          </Container>
        </section>
      ))}

      <Testimonials />

      <section className="bg-ink text-white">
        <Container className="py-20 sm:py-24">
          <SectionTitle className="text-white">How we engage</SectionTitle>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Discover",
                body: "A focused assessment of your data, systems and ambitions — typically two to four weeks, ending in a costed, sequenced roadmap.",
              },
              {
                step: "02",
                title: "Deliver",
                body: "Cross-functional pods ship working software in weekly increments, with your engineers embedded from the first sprint.",
              },
              {
                step: "03",
                title: "Scale & run",
                body: "We industrialize what works, transfer skills to your teams, and — where you want it — operate the platform under SLAs.",
              },
            ].map((phase) => (
              <div key={phase.step}>
                <ConceptIcon label={`${phase.title} ${phase.body}`} dark className="mb-5" />
                <p className="text-sm font-bold text-teal">{phase.step}</p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight">
                  {phase.title}
                </h3>
                <p className="mt-3 leading-relaxed text-white/75">{phase.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <EngageOptions />

      <CtaBanner
        title="Tell us what you're trying to build"
        body="We'll respond within one business day with the right people in the room."
      />
    </>
  );
}
