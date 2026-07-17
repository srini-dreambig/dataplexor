export type NavItem = {
  label: string;
  href?: string;
  items?: { label: string; href: string; description?: string }[];
};

export const NAV: NavItem[] = [
  {
    label: "Solutions",
    items: [
      {
        label: "Data & Analytics",
        href: "/solutions/data-analytics",
        description: "Platforms, governance and analytics you can trust",
      },
      {
        label: "Artificial Intelligence",
        href: "/solutions/ai",
        description: "Machine learning and generative AI in production",
      },
      {
        label: "Agentic AI",
        href: "/solutions/agentic-ai",
        description: "Autonomous agents with governed autonomy",
      },
    ],
  },
  {
    label: "Products",
    items: [
      {
        label: "PlexusCore",
        href: "/products/plexuscore",
        description: "Unified data platform accelerator",
      },
      {
        label: "PlexusIQ",
        href: "/products/plexusiq",
        description: "Decision intelligence and analytics suite",
      },
      {
        label: "AgentMesh",
        href: "/products/agentmesh",
        description: "Agent orchestration and governance runtime",
      },
      {
        label: "All products",
        href: "/products",
        description: "Explore the full Dataplexor product family",
      },
    ],
  },
  {
    label: "Services",
    items: [
      {
        label: "Consulting & Advisory",
        href: "/services#consulting",
        description: "Strategy, architecture and operating models",
      },
      {
        label: "Product & Platform Engineering",
        href: "/services#engineering",
        description: "Build and modernize data and AI systems",
      },
      {
        label: "Managed Data & AI",
        href: "/services#managed",
        description: "Run, optimize and evolve what we build",
      },
    ],
  },
  { label: "Insights", href: "/insights" },
  {
    label: "Company",
    items: [
      { label: "About us", href: "/company/about" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Careers", href: "/company/careers" },
      { label: "Contact", href: "/company/contact" },
    ],
  },
];

export type Product = {
  slug: string;
  name: string;
  tag: string;
  headline: string;
  summary: string;
  description: string;
  capabilities: { title: string; body: string }[];
  stats: { value: string; label: string }[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "plexuscore",
    name: "PlexusCore",
    tag: "Data platform",
    headline: "One trusted foundation for all of your data",
    summary:
      "A unified data platform accelerator that stands up ingestion, lakehouse storage, transformation and governance in weeks, not quarters.",
    description:
      "PlexusCore packages the architecture decisions, infrastructure code and governance patterns from more than a hundred platform builds into a deployable foundation. It runs on your cloud, with open table formats and no lock-in, and gives every downstream team — analytics, ML, agents — the same trusted building blocks.",
    capabilities: [
      {
        title: "Ingestion & streaming",
        body: "Batch and real-time pipelines with schema enforcement, quality gates and automatic lineage capture at the edge.",
      },
      {
        title: "Lakehouse storage",
        body: "Open-format lakehouse layout with medallion zoning, time travel and cost-optimized lifecycle policies out of the box.",
      },
      {
        title: "Governance & catalog",
        body: "Access control, PII classification, data contracts and a searchable catalog wired in from day one — not bolted on later.",
      },
      {
        title: "DataOps automation",
        body: "CI/CD for pipelines, environment promotion, observability dashboards and freshness SLAs as code.",
      },
    ],
    stats: [
      { value: "6–8 wks", label: "Typical time to a governed production platform" },
      { value: "30%", label: "Average reduction in platform run cost after consolidation" },
      { value: "100%", label: "Infrastructure as code — portable across AWS, Azure and GCP" },
    ],
  },
  {
    slug: "plexusiq",
    name: "PlexusIQ",
    tag: "Decision intelligence",
    headline: "From metrics to decisions in one governed layer",
    summary:
      "A decision-intelligence suite that unifies metrics, ML predictions and natural-language analytics on top of your data platform.",
    description:
      "PlexusIQ gives your organization a single semantic layer where every metric is defined once and used everywhere — in dashboards, forecasts and conversational analytics. Business users ask questions in plain language; PlexusIQ answers with governed, explainable numbers backed by lineage you can audit.",
    capabilities: [
      {
        title: "Semantic metrics layer",
        body: "Version-controlled metric definitions consumed consistently by BI tools, notebooks, APIs and AI assistants.",
      },
      {
        title: "Conversational analytics",
        body: "Natural-language questions answered from governed metrics — with the SQL, lineage and confidence shown, not hidden.",
      },
      {
        title: "Forecasting & ML",
        body: "Built-in forecasting, anomaly detection and propensity models that publish predictions back into the metrics layer.",
      },
      {
        title: "Decision workflows",
        body: "Alerts, approvals and scenario planning that connect insight to the operational systems where decisions execute.",
      },
    ],
    stats: [
      { value: "10x", label: "Faster time-to-answer for business questions" },
      { value: "1", label: "Definition per metric, everywhere it is consumed" },
      { value: "85%", label: "Of routine reporting questions self-served by business users" },
    ],
  },
  {
    slug: "agentmesh",
    name: "AgentMesh",
    tag: "Agentic AI runtime",
    headline: "Run AI agents you can actually trust",
    summary:
      "An orchestration and governance runtime for deploying fleets of AI agents with policy guardrails, observability and human oversight.",
    description:
      "AgentMesh is the control plane for the agentic enterprise. It lets teams compose agents from models, tools and knowledge; enforces declarative policies on every action; and records complete decision traces. Graduated autonomy means agents earn independence with evidence — and every irreversible action keeps a human hand on the switch.",
    capabilities: [
      {
        title: "Agent orchestration",
        body: "Compose single agents or multi-agent workflows with tool access, memory and structured handoffs between agents and humans.",
      },
      {
        title: "Policy guardrails",
        body: "Declarative rules evaluated on every tool call: permissions, budgets, rate limits and hard stops for irreversible operations.",
      },
      {
        title: "Full observability",
        body: "Complete traces of inputs, reasoning, actions and outcomes — searchable, auditable and wired to your monitoring stack.",
      },
      {
        title: "Evaluation harness",
        body: "Continuous regression suites and model-graded scoring so every prompt, model or tool change is proven before release.",
      },
    ],
    stats: [
      { value: "100%", label: "Of agent actions policy-checked and logged" },
      { value: "70%", label: "Average reduction in manual effort on automated workflows" },
      { value: "0", label: "Irreversible actions without explicit authorization" },
    ],
  },
];

export type Solution = {
  slug: string;
  name: string;
  eyebrow: string;
  headline: string;
  statement: string;
  intro: string;
  pillars: { title: string; body: string }[];
  capabilitiesTitle: string;
  capabilitiesIntro: string;
  capabilities: { title: string; body: string }[];
  stats: { value: string; label: string }[];
  relatedProduct: string;
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "data-analytics",
    name: "Data & Analytics",
    eyebrow: "Solutions",
    headline: "Data & Analytics",
    statement:
      "Before organizations can act on their data, they must be able to trust it.",
    intro:
      "We design, build and run modern data platforms and analytics capabilities — from lakehouse foundations and governance to semantic layers and self-service BI — so every decision in your organization starts from the same trusted numbers.",
    pillars: [
      {
        title: "Modern data platforms",
        body: "Cloud-native lakehouse architectures with streaming ingestion, open formats and infrastructure as code — built for AI from day one.",
      },
      {
        title: "Governance you can prove",
        body: "Data contracts, lineage, quality monitoring and access control designed as platform features, giving auditors and analysts the same confidence.",
      },
      {
        title: "Analytics that get used",
        body: "Semantic layers, self-service BI and embedded analytics that meet people inside the tools and workflows where they already work.",
      },
    ],
    capabilitiesTitle: "Features and capabilities",
    capabilitiesIntro:
      "We bring proven blueprints, accelerators and delivery playbooks from more than a hundred data platform engagements across industries.",
    capabilities: [
      {
        title: "Platform strategy & architecture",
        body: "Target-state architecture, tooling rationalization and migration roadmaps grounded in your workloads and economics.",
      },
      {
        title: "Data engineering",
        body: "Batch and streaming pipelines built with software engineering discipline: version control, testing, CI/CD and observability.",
      },
      {
        title: "Data governance & quality",
        body: "Catalogs, contracts, PII controls and quality SLAs that make trusted data the default, not the exception.",
      },
      {
        title: "BI & decision support",
        body: "Metrics layers, executive reporting and self-service analytics adopted because they answer real questions faster.",
      },
    ],
    stats: [
      { value: "120+", label: "Data platforms designed, built or modernized" },
      { value: "30%", label: "Typical run-cost reduction from platform consolidation" },
      { value: "18", label: "Industries served across four continents" },
      { value: "6 wks", label: "Fastest strategy-to-production platform delivery" },
    ],
    relatedProduct: "plexuscore",
  },
  {
    slug: "ai",
    name: "Artificial Intelligence",
    eyebrow: "Solutions",
    headline: "Artificial Intelligence",
    statement:
      "The gap between an AI demo and a production system is where most value is lost.",
    intro:
      "We take machine learning and generative AI from promising prototype to reliable production — with the evaluation, MLOps and governance that make the difference between a demo and a dependable system.",
    pillars: [
      {
        title: "Applied machine learning",
        body: "Forecasting, optimization, personalization and risk models built on rigorous features and honest baselines.",
      },
      {
        title: "Generative AI systems",
        body: "RAG pipelines, fine-tuned models and AI copilots engineered with retrieval quality, latency and cost as first-class requirements.",
      },
      {
        title: "Evaluation & governance",
        body: "Continuous evaluation harnesses, bias and safety testing, and model governance that satisfies your regulators and your engineers.",
      },
    ],
    capabilitiesTitle: "Features and capabilities",
    capabilitiesIntro:
      "We leverage years of applied AI delivery to help enterprises ship models that survive contact with production.",
    capabilities: [
      {
        title: "AI strategy & use-case portfolio",
        body: "Value-ranked use-case portfolios with feasibility scoring, so investment flows to what will actually ship and pay back.",
      },
      {
        title: "ML & GenAI engineering",
        body: "From feature stores to inference services: production-grade systems with the reliability of the rest of your stack.",
      },
      {
        title: "LLMOps & evaluation",
        body: "Golden datasets, model-graded scoring and regression suites wired into deployment — a failing eval blocks a release.",
      },
      {
        title: "Responsible AI",
        body: "Bias audits, explainability, human oversight and documentation aligned to emerging AI regulation.",
      },
    ],
    stats: [
      { value: "40+", label: "AI systems running in production with our clients" },
      { value: "3x", label: "Median ROI on AI portfolios we have rationalized" },
      { value: "90%", label: "Of our AI engagements reach production — not just pilots" },
      { value: "24/7", label: "Monitored, evaluated and retrained in operation" },
    ],
    relatedProduct: "plexusiq",
  },
  {
    slug: "agentic-ai",
    name: "Agentic AI",
    eyebrow: "Solutions",
    headline: "Agentic AI",
    statement:
      "The next advantage is not software that answers — it is software that acts.",
    intro:
      "We help enterprises design, build and govern autonomous AI agents that plan, decide and execute across systems — with the guardrails, observability and human oversight that make autonomy safe to scale.",
    pillars: [
      {
        title: "Agent design & orchestration",
        body: "Single agents and multi-agent systems that decompose real workflows: research, operations, service, engineering.",
      },
      {
        title: "Governed autonomy",
        body: "Policy engines, permission models and budget controls on every action — autonomy that is earned with evidence, not assumed.",
      },
      {
        title: "Human-AI operating models",
        body: "Escalation paths, approval checkpoints and new role designs so people and agents work as one accountable system.",
      },
    ],
    capabilitiesTitle: "Features and capabilities",
    capabilitiesIntro:
      "We combine frontier-model expertise with enterprise engineering to move agents from lab to line of business.",
    capabilities: [
      {
        title: "Agentic opportunity assessment",
        body: "Identify the workflows where volume, latency or complexity exceed human capacity — and quantify the autonomy dividend.",
      },
      {
        title: "Agent engineering",
        body: "Tool integration, memory, planning and multi-agent coordination built on robust runtimes — including our AgentMesh product.",
      },
      {
        title: "Safety & guardrails",
        body: "Sandboxed execution, declarative policies, full decision logging and hard stops for irreversible operations.",
      },
      {
        title: "Agent operations",
        body: "Fleet observability, continuous evaluation and graduated autonomy management as agents scale across the enterprise.",
      },
    ],
    stats: [
      { value: "25+", label: "Agentic systems delivered into production" },
      { value: "70%", label: "Average manual-effort reduction on agentized workflows" },
      { value: "100%", label: "Of agent actions policy-checked and auditable" },
      { value: "0", label: "Unsupervised irreversible actions. Ever." },
    ],
    relatedProduct: "agentmesh",
  },
];

export const FOOTER_LINKS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Solutions",
    links: [
      { label: "Data & Analytics", href: "/solutions/data-analytics" },
      { label: "Artificial Intelligence", href: "/solutions/ai" },
      { label: "Agentic AI", href: "/solutions/agentic-ai" },
    ],
  },
  {
    heading: "Products",
    links: [
      { label: "PlexusCore", href: "/products/plexuscore" },
      { label: "PlexusIQ", href: "/products/plexusiq" },
      { label: "AgentMesh", href: "/products/agentmesh" },
      { label: "All products", href: "/products" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Consulting & Advisory", href: "/services#consulting" },
      { label: "Product & Platform Engineering", href: "/services#engineering" },
      { label: "Managed Data & AI", href: "/services#managed" },
      { label: "Insights & Research", href: "/insights" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About us", href: "/company/about" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Careers", href: "/company/careers" },
      { label: "Contact", href: "/company/contact" },
    ],
  },
];
