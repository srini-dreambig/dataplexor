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
      {
        label: "Application Building",
        href: "/solutions/app-building",
        description: "Cloud-native apps, platforms and modernization",
      },
      {
        label: "Product Building",
        href: "/solutions/product-building",
        description: "Zero-to-one and one-to-scale product engineering",
      },
    ],
  },
  {
    label: "Industries",
    items: [
      {
        label: "Retail & E-commerce",
        href: "/industries/retail",
        description: "Forecasting, personalization and agentic commerce",
      },
      {
        label: "Banking & Financial Services",
        href: "/industries/banking",
        description: "Governed AI and automation built for regulators",
      },
      {
        label: "Insurance",
        href: "/industries/insurance",
        description: "Underwriting intelligence and claims automation",
      },
      {
        label: "Healthcare & Life Sciences",
        href: "/industries/healthcare",
        description: "Interoperable data and clinically-aware AI",
      },
      {
        label: "Manufacturing & Supply Chain",
        href: "/industries/manufacturing",
        description: "Industrial data, predictive quality and uptime",
      },
      {
        label: "Telecom & Media",
        href: "/industries/telecom-media",
        description: "Customer value, network and service intelligence",
      },
      {
        label: "All industries",
        href: "/industries",
        description: "See how we work across sectors",
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
  relatedProduct?: string;
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
  {
    slug: "app-building",
    name: "Application Building",
    eyebrow: "Solutions",
    headline: "Application Building",
    statement:
      "Great software is not written once — it is engineered to keep changing.",
    intro:
      "We design and build cloud-native applications — customer experiences, internal platforms and the modernization of the systems they replace — with the engineering discipline that keeps them fast, secure and easy to change for years.",
    pillars: [
      {
        title: "Digital experiences",
        body: "Web and mobile applications your customers actually enjoy — designed with users, measured in production, iterated weekly.",
      },
      {
        title: "Internal platforms",
        body: "Workflow tools, portals and APIs that remove friction from operations — often the fastest ROI in the enterprise.",
      },
      {
        title: "Modernization",
        body: "Legacy systems decomposed and rebuilt incrementally — strangler-pattern migrations that never bet the business on a big bang.",
      },
    ],
    capabilitiesTitle: "Features and capabilities",
    capabilitiesIntro:
      "Full-stack teams covering product design, engineering, cloud infrastructure and security — one pod, one backlog, one accountable delivery.",
    capabilities: [
      {
        title: "Product design & UX",
        body: "Research, prototyping and design systems that make complex workflows feel simple — tested with real users before a line of code.",
      },
      {
        title: "Cloud-native engineering",
        body: "TypeScript, Python, JVM and Go services on Kubernetes and serverless — with CI/CD, infrastructure as code and observability from day one.",
      },
      {
        title: "API & integration",
        body: "Well-designed APIs, event streams and integration layers that make your application landscape composable instead of tangled.",
      },
      {
        title: "Security & reliability",
        body: "Threat modeling, automated security testing and SRE practices baked into delivery — not audited in afterwards.",
      },
    ],
    stats: [
      { value: "200+", label: "Applications shipped to production" },
      { value: "<1 wk", label: "From commit to production on our delivery platforms" },
      { value: "99.95%", label: "Median availability across systems we operate" },
      { value: "60%", label: "Typical reduction in change lead time after modernization" },
    ],
    relatedProduct: "plexuscore",
  },
  {
    slug: "product-building",
    name: "Product Building",
    eyebrow: "Solutions",
    headline: "Product Building",
    statement:
      "From a validated idea to a scaling product — without losing the speed that got you there.",
    intro:
      "We take products from zero to one and from one to scale: discovery, MVP, product-market iteration and the hardening that turns a promising launch into a durable business — for startups, corporate ventures and product companies.",
    pillars: [
      {
        title: "Zero to one",
        body: "Discovery sprints, rapid prototyping and MVPs that reach real users in weeks — learning fast without building throwaway software.",
      },
      {
        title: "One to scale",
        body: "Architecture, performance and team topology for the moment growth arrives — scaling the product and the organization together.",
      },
      {
        title: "AI-native products",
        body: "Products with data, ML and agentic capabilities designed in from the start — not sprinkled on top of a finished roadmap.",
      },
    ],
    capabilitiesTitle: "Features and capabilities",
    capabilitiesIntro:
      "We operate like a product company on your behalf: outcome roadmaps, weekly releases and metrics that tie engineering to revenue.",
    capabilities: [
      {
        title: "Product strategy & discovery",
        body: "Market and user research, opportunity sizing and outcome-driven roadmaps that decide what not to build.",
      },
      {
        title: "MVP & venture building",
        body: "Cross-functional pods that take a concept to a launched, instrumented product — pricing, onboarding and analytics included.",
      },
      {
        title: "Growth engineering",
        body: "Experimentation platforms, activation funnels and performance work guided by product analytics, not opinion.",
      },
      {
        title: "Platform hardening",
        body: "Multi-tenancy, compliance readiness (SOC 2, ISO 27001), cost engineering and enterprise features that unlock bigger deals.",
      },
    ],
    stats: [
      { value: "35+", label: "Products taken from concept to launch" },
      { value: "6-10 wks", label: "Typical time from kickoff to first users" },
      { value: "3", label: "Products of our own — we practice what we deliver" },
      { value: "$400M+", label: "Follow-on funding raised by products we helped build" },
    ],
    relatedProduct: "plexusiq",
  },
];

export type Industry = {
  slug: string;
  name: string;
  headline: string;
  statement: string;
  intro: string;
  challenges: { title: string; body: string }[];
  outcomes: { metric: string; title: string; body: string }[];
  useCases: { title: string; body: string; whyNow: string; impact: string }[];
  solutions: string[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "retail",
    name: "Retail & E-commerce",
    headline: "Retail & E-commerce",
    statement: "Every margin point in retail now runs through data.",
    intro:
      "From demand forecasting and dynamic pricing to personalization and agent-assisted service, we help retailers turn first-party data into the margin and loyalty advantages the market no longer gives away.",
    challenges: [
      {
        title: "Demand & inventory intelligence",
        body: "ML forecasting across stores, channels and SKUs that cuts stockouts and markdowns at the same time — fed by clean, governed data pipelines.",
      },
      {
        title: "Personalization at scale",
        body: "Recommendation and next-best-action systems built on real-time customer data platforms, measured on incremental revenue, not clicks.",
      },
      {
        title: "Agent-assisted commerce & service",
        body: "AI agents for conversational shopping, order operations and service recovery — with guardrails that protect brand and margin.",
      },
      {
        title: "Supply chain visibility",
        body: "Streaming data platforms that give planners a live, trusted view from supplier to shelf.",
      },
    ],
    outcomes: [
      {
        metric: "-23%",
        title: "Markdown reduction for an omnichannel apparel retailer",
        body: "Rebuilt demand forecasting on a lakehouse foundation with SKU-store level ML models; markdowns fell 23% in two seasons while availability improved.",
      },
      {
        metric: "+12%",
        title: "Revenue per session from personalization",
        body: "A governed customer data platform plus real-time recommendations lifted revenue per session 12% — with full consent lineage for privacy teams.",
      },
    ],
    useCases: [
      {
        title: "Agentic shopping assistants",
        body: "Conversational AI that guides discovery, answers product questions and completes purchases — the Rufus-style assistant is becoming table stakes for large catalogs.",
        whyNow: "Generative search is resetting how customers find products; retailers without an assistant lose the conversation entirely.",
        impact: "+8-15% conversion on assisted journeys",
      },
      {
        title: "Autonomous replenishment & allocation",
        body: "Agents that turn forecasts into draft transfer, reorder and allocation decisions for planner approval — closing the loop between prediction and action.",
        whyNow: "Planner teams are shrinking while SKU counts grow; prediction without execution leaves the value on the table.",
        impact: "Hours of planner time returned daily",
      },
      {
        title: "Markdown & dynamic pricing optimization",
        body: "SKU-store level price and markdown optimization that protects margin in volatile demand — the fastest payback program in most retail portfolios.",
        whyNow: "Persistent cost pressure and demand volatility make static pricing calendars an annual write-off.",
        impact: "-15-25% markdown spend",
      },
      {
        title: "Retail media data foundations",
        body: "Clean-room-ready first-party data products that power the retail media business — audiences, measurement and closed-loop attribution advertisers will pay for.",
        whyNow: "Retail media is the industry's fastest-growing profit pool, and it runs entirely on governed customer data.",
        impact: "New high-margin revenue line",
      },
      {
        title: "Computer-vision shrink & shelf intelligence",
        body: "Vision models on existing camera estates for loss prevention, on-shelf availability and planogram compliance.",
        whyNow: "Shrink hit historic highs post-pandemic while shelf-edge labor keeps getting scarcer.",
        impact: "-20-30% preventable shrink",
      },
    ],
    solutions: ["data-analytics", "ai", "agentic-ai"],
  },
  {
    slug: "banking",
    name: "Banking & Financial Services",
    headline: "Banking & Financial Services",
    statement: "In banking, the constraint is not ambition — it is auditability.",
    intro:
      "We build data platforms, AI models and agentic workflows that satisfy model risk management and regulators by design — so banks can automate boldly without ever losing the audit trail.",
    challenges: [
      {
        title: "Risk & regulatory reporting",
        body: "Governed data platforms with full lineage that turn BCBS 239-style reporting from a fire drill into a pipeline.",
      },
      {
        title: "Financial crime & fraud",
        body: "Real-time detection models with explainability and case-management workflows that cut false positives without missing the real thing.",
      },
      {
        title: "Governed agentic automation",
        body: "AI agents for KYC refresh, dispute handling and operations — every action policy-checked, logged and reviewable, aligned with model risk expectations.",
      },
      {
        title: "Customer intelligence",
        body: "Next-best-conversation analytics for relationship managers and digital channels, built on consented, governed data.",
      },
    ],
    outcomes: [
      {
        metric: "-40%",
        title: "False-positive reduction in transaction monitoring",
        body: "Replaced rule-only screening with a hybrid ML approach and evaluation harness; analyst workload fell 40% with improved detection coverage — documented for model validation.",
      },
      {
        metric: "8x",
        title: "Faster KYC periodic reviews with governed agents",
        body: "Agentic workflows on AgentMesh assemble evidence and draft assessments for human approval; review cycle time dropped from days to hours with a complete decision log.",
      },
    ],
    useCases: [
      {
        title: "Agentic KYC & AML operations",
        body: "Agents that assemble evidence, screen media, draft risk assessments and route to human approvers — with every step logged for the second line.",
        whyNow: "Compliance cost per client keeps climbing while regulators demand faster refresh cycles; headcount alone cannot close the gap.",
        impact: "Days-to-hours review cycles",
      },
      {
        title: "Relationship manager copilots",
        body: "GenAI briefs that synthesize portfolios, market moves and CRM history into next-best-conversation preparation for bankers.",
        whyNow: "The productivity gap between AI-equipped and unequipped RMs is now visible in wallet share.",
        impact: "+30% client-facing time",
      },
      {
        title: "Real-time fraud & scam defense",
        body: "Behavioral and network models that catch authorized-push-payment scams and mule activity as payments go instant.",
        whyNow: "Instant payment rails compress the fraud decision window to milliseconds — batch screening is structurally too late.",
        impact: "-40% false positives at higher catch rates",
      },
      {
        title: "Explainable credit underwriting",
        body: "ML underwriting with reason codes, bias monitoring and full documentation — built for EU AI Act high-risk obligations and fair-lending scrutiny.",
        whyNow: "Credit scoring is explicitly high-risk under the EU AI Act, with obligations now in application.",
        impact: "More approvals at equal risk, audit-ready",
      },
      {
        title: "Regulatory reporting pipelines",
        body: "Lineage-complete data platforms that assemble BCBS 239-style risk and finance reports as governed pipelines, not quarterly heroics.",
        whyNow: "Supervisors are probing data lineage directly; manual assembly is now itself a finding.",
        impact: "-60% report production effort",
      },
    ],
    solutions: ["data-analytics", "agentic-ai", "ai"],
  },
  {
    slug: "insurance",
    name: "Insurance",
    headline: "Insurance",
    statement: "Underwriting is a data business wearing a paper costume.",
    intro:
      "We help insurers digitize the core — underwriting, claims and service — with data platforms and AI that price risk sharper, settle claims faster and keep every decision explainable to regulators and reinsurers.",
    challenges: [
      {
        title: "Underwriting intelligence",
        body: "Risk models enriched with third-party and geospatial data, delivered into underwriter workbenches that explain every recommendation.",
      },
      {
        title: "Claims automation",
        body: "Straight-through processing for clean claims and AI-assisted adjudication for the rest — with fraud signals and human escalation built in.",
      },
      {
        title: "Document intelligence",
        body: "LLM-powered extraction from submissions, medical records and loss runs that turns unstructured paper into structured, auditable data.",
      },
      {
        title: "Portfolio & cat analytics",
        body: "Exposure and accumulation analytics on modern lakehouse foundations, ready for climate-driven scrutiny.",
      },
    ],
    outcomes: [
      {
        metric: "-65%",
        title: "Submission triage time for a commercial insurer",
        body: "Document-intelligence pipelines extract and normalize submission data; underwriters start with a structured risk picture instead of a PDF pile.",
      },
      {
        metric: "4.2 days",
        title: "Average claims cycle reduced from 11 days",
        body: "Straight-through processing for low-complexity claims and agent-assisted adjudication elsewhere — customer satisfaction up double digits.",
      },
    ],
    useCases: [
      {
        title: "Submission intake & triage",
        body: "Document intelligence that reads broker submissions, loss runs and schedules, normalizes them and prioritizes the book for underwriters.",
        whyNow: "Commercial submission volumes are up while underwriting capacity is flat — triage decides which risks you even get to quote.",
        impact: "-65% triage time, higher quote ratios",
      },
      {
        title: "Claims straight-through processing",
        body: "Clean claims settled automatically; complex ones assembled and drafted by agents for adjuster judgment — fraud signals woven throughout.",
        whyNow: "Claims experience is the #1 driver of retention, and settlement speed is the experience.",
        impact: "Cycle times cut by half or more",
      },
      {
        title: "Climate & catastrophe analytics",
        body: "Geospatial and cat-model data fused with portfolio exposure for accumulation control, pricing and climate disclosure.",
        whyNow: "Secondary perils keep breaking loss records and reinsurers are repricing accordingly — capital costs now track analytics maturity.",
        impact: "Sharper pricing, defensible disclosures",
      },
      {
        title: "Underwriter & agent copilots",
        body: "Assistants that surface appetite, guidelines, comparable risks and prior decisions inside the underwriting workbench.",
        whyNow: "A generation of senior underwriters is retiring; their judgment leaves with them unless it is productized.",
        impact: "Faster onboarding, consistent decisions",
      },
      {
        title: "Subrogation & recovery detection",
        body: "NLP over claim files that flags missed recovery opportunities and drafts demand packages.",
        whyNow: "Recovery leakage is pure margin sitting in unstructured claim notes.",
        impact: "+2-4pt recovery rate improvement",
      },
    ],
    solutions: ["ai", "data-analytics", "agentic-ai"],
  },
  {
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    headline: "Healthcare & Life Sciences",
    statement: "In healthcare, trust is the deployment environment.",
    intro:
      "We build interoperable data platforms and clinically-aware AI for providers, payers and life-sciences organizations — engineered for privacy, safety and the scrutiny that patient impact demands.",
    challenges: [
      {
        title: "Interoperable data foundations",
        body: "FHIR-based clinical data platforms that unify EHR, claims and device data with consent and de-identification built in.",
      },
      {
        title: "Clinical & operational AI",
        body: "Models for capacity planning, care-gap detection and documentation relief — validated with clinicians, monitored in production.",
      },
      {
        title: "Ambient & agentic workflows",
        body: "AI assistants that draft notes, prior-auth packages and referrals for clinician approval — giving hours back to care teams.",
      },
      {
        title: "Research & RWE analytics",
        body: "Governed real-world-evidence platforms that accelerate research while protecting patients.",
      },
    ],
    outcomes: [
      {
        metric: "2.5 hrs",
        title: "Clinician time returned per day",
        body: "Ambient documentation and agent-drafted prior authorizations reduced administrative burden — adoption led by clinicians, not mandated.",
      },
      {
        metric: "-31%",
        title: "Readmission-risk false alerts",
        body: "Recalibrated risk models with continuous evaluation cut alert fatigue while catching more true high-risk patients.",
      },
    ],
    useCases: [
      {
        title: "Ambient clinical documentation",
        body: "AI that listens to the visit and drafts the note, orders and codes for clinician sign-off — the fastest-adopted clinical AI in a decade.",
        whyNow: "Documentation burden is the top driver of clinician burnout, and health systems now compete on it in recruiting.",
        impact: "2+ hours returned per clinician day",
      },
      {
        title: "Prior authorization automation",
        body: "Agents that assemble clinical evidence, draft prior-auth packages and track payer responses — on both provider and payer sides.",
        whyNow: "New interoperability and turnaround regulation is forcing payers to modernize exactly as providers automate submissions.",
        impact: "Days-to-hours approvals, fewer denials",
      },
      {
        title: "Denials & revenue cycle intelligence",
        body: "Models that predict denials before submission and agents that draft appeals with chart evidence.",
        whyNow: "Denial rates and administrative cost are rising in tandem — this is the CFO's most requested AI use case.",
        impact: "-25-40% preventable denials",
      },
      {
        title: "Care-gap & population health analytics",
        body: "Risk stratification and outreach prioritization on unified clinical and claims data, tuned to value-based contracts.",
        whyNow: "Value-based revenue now depends on finding and closing gaps proactively, not at year-end reconciliation.",
        impact: "Higher quality scores, captured incentives",
      },
      {
        title: "Clinical trial matching & RWE",
        body: "LLM-powered matching of patients to trials and governed real-world-evidence platforms for research partnerships.",
        whyNow: "Sponsors are paying for sites and data partners that can actually recruit and evidence outcomes.",
        impact: "Faster accrual, new research revenue",
      },
    ],
    solutions: ["data-analytics", "ai", "agentic-ai"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Supply Chain",
    headline: "Manufacturing & Supply Chain",
    statement: "The factory floor is the most underused data center you own.",
    intro:
      "We connect OT and IT data into platforms that power predictive quality, asset reliability and resilient supply chains — turning industrial data exhaust into throughput and uptime.",
    challenges: [
      {
        title: "Industrial data platforms",
        body: "Unified namespace and lakehouse architectures that land sensor, MES and ERP data in one governed, analyzable place.",
      },
      {
        title: "Predictive quality & maintenance",
        body: "ML on high-frequency process data that catches drift before scrap and failure before downtime.",
      },
      {
        title: "Supply chain intelligence",
        body: "Demand sensing, supplier risk and logistics optimization with scenario planning your planners actually use.",
      },
      {
        title: "Frontline AI",
        body: "Copilots and agents that put work instructions, root-cause history and expert knowledge in front of operators and engineers.",
      },
    ],
    outcomes: [
      {
        metric: "+9pt",
        title: "OEE improvement across three plants",
        body: "Predictive maintenance and quality models on a unified industrial data platform lifted overall equipment effectiveness nine points in a year.",
      },
      {
        metric: "-45%",
        title: "Unplanned downtime on critical assets",
        body: "Vibration and process-data models with maintenance-workflow integration cut unplanned stoppages nearly in half.",
      },
    ],
    useCases: [
      {
        title: "Predictive maintenance at fleet scale",
        body: "Vibration, thermal and process-data models that schedule intervention before failure — rolled out as a platform, not pilot-by-asset.",
        whyNow: "The maintenance workforce is aging out while asset utilization targets keep rising.",
        impact: "-30-50% unplanned downtime",
      },
      {
        title: "Visual quality inspection",
        body: "Camera-based defect detection on the line with drift monitoring — catching in-process what end-of-line inspection ships.",
        whyNow: "Quality escapes now trigger recalls announced on social media the same week.",
        impact: "-40% escaped defects, less scrap",
      },
      {
        title: "Supply chain digital twin",
        body: "Live network models for demand sensing, supplier risk and scenario planning that planners run before committing capital.",
        whyNow: "Tariff volatility and supplier shocks have made static annual network plans obsolete on arrival.",
        impact: "Days-faster disruption response",
      },
      {
        title: "Frontline knowledge copilots",
        body: "Assistants that put work instructions, root-cause history and retiring-expert knowledge in front of operators in their language.",
        whyNow: "Decades of tribal knowledge is walking out the door with retirements — capture windows are closing.",
        impact: "-50% time-to-competency for new operators",
      },
      {
        title: "Energy & emissions optimization",
        body: "Process-level energy models that cut consumption and generate audit-ready sustainability reporting from the same data.",
        whyNow: "Energy is now a top-three cost line and disclosure regulation is tightening around scope reporting.",
        impact: "-8-15% energy cost",
      },
    ],
    solutions: ["data-analytics", "ai", "app-building"],
  },
  {
    slug: "telecom-media",
    name: "Telecom & Media",
    headline: "Telecom & Media",
    statement: "Networks generate the data; the winners operationalize it.",
    intro:
      "We help operators and media companies monetize network and audience data — churn and ARPU intelligence, network optimization and AI-powered customer operations at telco scale.",
    challenges: [
      {
        title: "Customer value management",
        body: "Churn, upsell and next-best-offer models on streaming customer data — activated in campaigns and care channels in real time.",
      },
      {
        title: "Network intelligence",
        body: "Analytics and ML over network telemetry for capacity planning, anomaly detection and energy optimization.",
      },
      {
        title: "AI-powered service operations",
        body: "Agentic assistants that resolve billing, provisioning and support journeys end-to-end, with graceful human handoff.",
      },
      {
        title: "Audience & content analytics",
        body: "Engagement and recommendation systems that grow watch time and subscriber retention.",
      },
    ],
    outcomes: [
      {
        metric: "-18%",
        title: "Churn among high-value subscribers",
        body: "Real-time churn signals wired into retention journeys reduced high-value churn 18% within two quarters.",
      },
      {
        metric: "55%",
        title: "Of tier-1 support contacts resolved by governed agents",
        body: "Agentic service flows resolve the majority of routine contacts with policy guardrails — CSAT held steady while cost-to-serve fell.",
      },
    ],
    useCases: [
      {
        title: "Agentic service containment",
        body: "AI agents that resolve billing, provisioning and support journeys end-to-end with graceful human handoff — beyond chatbot deflection.",
        whyNow: "Contact volumes and wage inflation are rising together; deflection that frustrates customers just moves the cost.",
        impact: "50%+ tier-1 containment at stable CSAT",
      },
      {
        title: "Self-healing network operations",
        body: "AIOps that detects anomalies, predicts degradations and drafts remediation across the RAN and core.",
        whyNow: "Network complexity (5G, fiber, edge) has outgrown manual NOC operations economics.",
        impact: "-30% incident volume, faster MTTR",
      },
      {
        title: "Churn prediction & save journeys",
        body: "Real-time churn signals wired directly into retention offers and care interactions for high-value subscribers.",
        whyNow: "Saturated markets mean growth is now net-churn arithmetic — every save is cheaper than any acquisition.",
        impact: "-15-20% high-value churn",
      },
      {
        title: "Field force optimization",
        body: "Dispatch optimization and technician copilots that fix first-visit resolution — the most expensive truck roll is the second one.",
        whyNow: "Fiber build-outs and aging copper coexist, stretching field capacity to its limit.",
        impact: "+15pt first-visit resolution",
      },
      {
        title: "Content & audience intelligence",
        body: "Recommendation and engagement analytics that grow watch time, reduce churn and price ad inventory with confidence.",
        whyNow: "Streaming economics have shifted from subscriber growth to engagement-per-dollar.",
        impact: "Higher retention and ad yield",
      },
    ],
    solutions: ["ai", "agentic-ai", "data-analytics"],
  },
];

export const FOOTER_LINKS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Solutions",
    links: [
      { label: "Data & Analytics", href: "/solutions/data-analytics" },
      { label: "Artificial Intelligence", href: "/solutions/ai" },
      { label: "Agentic AI", href: "/solutions/agentic-ai" },
      { label: "Application Building", href: "/solutions/app-building" },
      { label: "Product Building", href: "/solutions/product-building" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Retail & E-commerce", href: "/industries/retail" },
      { label: "Banking & Financial Services", href: "/industries/banking" },
      { label: "Insurance", href: "/industries/insurance" },
      { label: "Healthcare & Life Sciences", href: "/industries/healthcare" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Telecom & Media", href: "/industries/telecom-media" },
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
