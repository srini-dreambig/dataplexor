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
        description: "Agentic data engineering, in plain English",
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

export type Cta = { label: string; href: string };

/**
 * Rich, bespoke product page. When a product carries a `page`, the product
 * detail route renders these sections instead of the generic template.
 */
export type ProductPage = {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: Cta;
    secondaryCta: Cta;
    microcopy: string;
  };
  problem: { heading: string; body: string[] };
  how: {
    heading: string;
    intro: string;
    steps: { step: string; title: string; body: string }[];
    closing: string;
  };
  capabilities: { heading: string };
  differentiators: {
    eyebrow: string;
    heading: string;
    body: string;
    callout?: string;
  }[];
  integrations: {
    heading: string;
    intro: string;
    groups: { label: string; items: string }[];
    footnote: string;
  };
  security: {
    heading: string;
    intro: string;
    items: { label: string; body: string }[];
    closing: string;
  };
  audiences: { heading: string; items: { role: string; body: string }[] };
  pilot: { heading: string; body: string; primaryCta: Cta; secondaryCta: Cta };
  finalCta: {
    heading: string;
    subhead: string;
    primaryCta: Cta;
    secondaryCta: Cta;
  };
};

export type Product = {
  slug: string;
  name: string;
  tag: string;
  headline: string;
  summary: string;
  description: string;
  capabilities: { title: string; body: string }[];
  stats: { value: string; label: string }[];
  faqs: { q: string; a: string }[];
  page?: ProductPage;
};

export const PRODUCTS: Product[] = [
  {
    slug: "plexuscore",
    name: "PlexusCore",
    tag: "Agentic data engineering",
    headline: "Describe the data you need. PlexusCore builds the pipeline.",
    summary:
      "An agentic data engineering platform — ask for a model, metric or pipeline in plain language and the agent builds it, tests it, and ships it through a human review gate.",
    description:
      "PlexusCore is an agentic data engineering platform. Describe what you need in plain English and the agent explores your warehouse, writes the SQL or dbt, tests it, and ships it through a human review gate — with proof of exactly what it did on every run. It works on top of Snowflake, Databricks, dbt and your Git repo, with no rip-and-replace.",
    capabilities: [
      {
        title: "Model your data",
        body: "Generate staging models, dimensional models and star schemas from a sentence. PlexusCore draws the ER diagram — dims, facts and their relationships — then writes the build SQL.",
      },
      {
        title: "Move your data",
        body: "Connect sources and warehouses and let PlexusCore build and schedule the pipelines. Extract, load and transform — orchestrated and monitored.",
      },
      {
        title: "Guard your quality",
        body: "Profile tables for nulls, duplicates and freshness, and stand up monitors for the ones that matter — freshness, volume, schema drift and custom SQL assertions.",
      },
      {
        title: "Explore and answer",
        body: "Ask questions in plain language and get grounded answers from live tables — with the query it ran, not a guess.",
      },
      {
        title: "Track lineage and metrics",
        body: "See what feeds a table and what depends on it before you change it. Define governed metrics once and reuse them everywhere.",
      },
      {
        title: "Ship through Git",
        body: "Deploy to Snowflake and Databricks, or push to GitHub with two-way sync. Your warehouse and your repo stay in step.",
      },
    ],
    stats: [],
    faqs: [
      {
        q: "Does PlexusCore replace my data warehouse or dbt?",
        a: "No. PlexusCore works on top of what you already run \u2014 Snowflake, Databricks, dbt, your Git repo. It builds and operates your pipelines; your data never leaves your warehouse.",
      },
      {
        q: "Can it make changes on its own?",
        a: "Only if you let it. By default, changes go through a human approval gate. You set the autonomy level per workspace \u2014 from propose-only to fully autonomous.",
      },
      {
        q: "How do I know what the agent actually did?",
        a: "Every run produces a verifiable record of the tools it called, the tables it read and the writes it made \u2014 and it's marked Verified only when everything checked out.",
      },
      {
        q: "Which platforms does it generate code for?",
        a: "The one you're connected to. Ask on a Snowflake connection and you get Snowflake SQL; ask with dbt connected and you get dbt models. It won't hand you code it can't run.",
      },
      {
        q: "Is my data secure?",
        a: "Credentials are encrypted in a secrets vault, access is controlled by role and connection, and every action is audit-logged. PlexusCore operates on your data in place.",
      },
    ],
    page: {
      hero: {
        eyebrow: "Agentic data engineering \u00b7 A dataplexor product",
        title: "Describe the data you need. PlexusCore builds the pipeline.",
        subtitle:
          "PlexusCore is an agentic data engineering platform. Ask for a model, a metric or a pipeline in plain language \u2014 the agent explores your warehouse, writes the SQL or dbt, tests it, and ships it through a human review gate. Every run comes with proof of exactly what it did.",
        primaryCta: { label: "Request a demo", href: "/company/contact" },
        secondaryCta: { label: "See how it works", href: "#how-it-works" },
        microcopy:
          "Works with Snowflake, Databricks, dbt and 600+ sources. No rip-and-replace.",
      },
      problem: {
        heading: "Data work is bottlenecked on people, not ideas.",
        body: [
          "Every dashboard, model and metric waits in the same queue: a small team of engineers translating requests into SQL, dbt and pipelines by hand. Analysts wait days for a column. Simple changes turn into tickets. And when something ships, no one can say precisely what ran or whether it was checked.",
          "PlexusCore removes the translation bottleneck without removing the human judgment. The agent does the building; your team does the deciding.",
        ],
      },
      how: {
        heading: "Chat in. Reviewed pipeline out.",
        intro:
          "PlexusCore runs a real engineering loop on every request \u2014 and shows its work at each step.",
        steps: [
          {
            step: "01",
            title: "Ask",
            body: "Describe what you want: \u201cBuild a customer revenue model,\u201d \u201cProfile the orders table for quality issues,\u201d \u201cSync Salesforce into the warehouse nightly.\u201d",
          },
          {
            step: "02",
            title: "Plan",
            body: "The agent restates the goal and lays out a step-by-step plan before touching anything. Ambiguous request? It asks one sharp question instead of guessing.",
          },
          {
            step: "03",
            title: "Build",
            body: "It inspects your live schema, then writes SQL or dbt in your platform's own dialect \u2014 never boilerplate it can't run.",
          },
          {
            step: "04",
            title: "Test",
            body: "It runs the code, checks row counts, nulls and freshness, and fixes its own errors before handing anything over.",
          },
          {
            step: "05",
            title: "Review",
            body: "Nothing ships silently. Finished work goes to an approvals inbox for a human to approve, edit or reject.",
          },
          {
            step: "06",
            title: "Ship",
            body: "On approval, deploy to the warehouse or open a pull request in Git. Every change is versioned and reversible.",
          },
        ],
        closing: "You stay in the loop at exactly one point \u2014 the decision to ship.",
      },
      capabilities: {
        heading: "One platform for the whole data-engineering lifecycle.",
      },
      differentiators: [
        {
          eyebrow: "Verified autonomy",
          heading: "Autonomy you can audit.",
          body: "Most AI tools ask you to trust the output. PlexusCore gives you the receipts. Every run produces a proof-of-work record \u2014 which tools it called, which tables it read, which writes it made, and whether they passed. A run is only marked Verified when nothing failed and every write went through the approval gate. If the agent couldn't finish, it says so plainly instead of pretending it did.",
          callout: "Every run, logged and verifiable.",
        },
        {
          eyebrow: "Review-first governance",
          heading: "The agent proposes. Your team disposes.",
          body: "PlexusCore is built so nothing reaches production unreviewed. Writes to your warehouse, dbt mutations and pipeline runs are governed by policy: in suggest-only mode the agent proposes and stops; in approval mode changes wait in an inbox for a human decision; only in fully autonomous mode does it act on its own \u2014 and even then, every action is logged. You choose how much rope to give it, per workspace.",
        },
        {
          eyebrow: "Self-learning skills",
          heading: "It gets better at your data every week.",
          body: "When PlexusCore solves a task well, it can save the recipe as a reusable skill. Skills that succeed repeatedly \u2014 with no failures \u2014 earn certification, and certified skills replay deterministically: the same request returns the same result, without re-invoking the model. Your platform accumulates a library of proven, repeatable operations tuned to your warehouse \u2014 not generic prompts.",
        },
      ],
      integrations: {
        heading: "Connect what you already run.",
        intro: "PlexusCore speaks to your stack directly \u2014 no rip-and-replace.",
        groups: [
          { label: "Warehouses & lakehouses", items: "Snowflake, Databricks, DuckDB, Postgres" },
          { label: "Transform", items: "dbt Core and dbt Cloud" },
          { label: "Orchestration", items: "Airflow, Dagster, Prefect" },
          { label: "Sources", items: "600+ connectors, from SaaS apps to databases to object storage" },
          { label: "Version control", items: "GitHub, with bidirectional sync" },
        ],
        footnote: "Don't see yours? Talk to us \u2014 the connector catalog is growing.",
      },
      security: {
        heading: "Enterprise-ready from day one.",
        intro:
          "PlexusCore is built for teams that answer to security and compliance, not just deadlines.",
        items: [
          { label: "Access", body: "SSO via OIDC, role-based access control and SCIM user provisioning." },
          { label: "Identity", body: "Multi-factor authentication and per-connection access controls." },
          { label: "Secrets", body: "Credentials stored in a secrets vault, encrypted at rest \u2014 never in plain text." },
          { label: "Audit", body: "A complete, exportable audit trail of every action, human or agent." },
          { label: "Control", body: "Policy-gated writes and a human approval inbox on every change." },
        ],
        closing:
          "Your data stays in your warehouse. PlexusCore operates on it \u2014 it doesn't take custody of it.",
      },
      audiences: {
        heading: "Built for the people who move data.",
        items: [
          { role: "Data engineers", body: "Offload the repetitive build work \u2014 staging models, tests, backfills \u2014 and spend your time on architecture, not tickets." },
          { role: "Analytics engineers", body: "Turn a request into a reviewed dbt model in minutes, with lineage and tests included." },
          { role: "Data & analytics leaders", body: "Cut the backlog and get governance you can prove, without adding headcount." },
          { role: "Analysts", body: "Ask for the table or metric you need in plain language, and get an answer grounded in real data." },
        ],
      },
      pilot: {
        heading: "Start with a guided pilot.",
        body: "See PlexusCore build a real pipeline against your own warehouse, in a working session with our team. No rip-and-replace, no long setup.",
        primaryCta: { label: "Request a demo", href: "/company/contact" },
        secondaryCta: { label: "Talk to sales", href: "/company/contact" },
      },
      finalCta: {
        heading: "Give your data team an agent that ships.",
        subhead:
          "See PlexusCore turn a plain-English request into a reviewed, production-ready pipeline \u2014 against your own data.",
        primaryCta: { label: "Request a demo", href: "/company/contact" },
        secondaryCta: { label: "See how it works", href: "#how-it-works" },
      },
    },
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
    faqs: [
      {
        q: "Does PlexusIQ replace our BI tools?",
        a: "No \u2014 it feeds them. The semantic layer serves the same governed metrics to your existing BI, notebooks, APIs and the built-in conversational analytics, so adoption starts from the tools people already use.",
      },
      {
        q: "How does conversational analytics stay trustworthy?",
        a: "Every answer shows its work: the metric definition used, the generated SQL, the lineage and a confidence signal. Analysts can verify in one click, which is why finance teams sign off on it.",
      },
      {
        q: "What does implementation involve?",
        a: "A metrics discovery sprint with your analysts, then the semantic layer built over your existing platform \u2014 most clients see their first governed metrics live inside four weeks.",
      },
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
    faqs: [
      {
        q: "Which model providers does AgentMesh support?",
        a: "All major providers \u2014 Anthropic, OpenAI, the cloud model platforms \u2014 plus private deployments. Policy, logging and evaluation sit above the model layer, so you can switch or mix providers without rebuilding governance.",
      },
      {
        q: "How does AgentMesh satisfy risk and compliance teams?",
        a: "Declarative policy rules the second line can read and version, complete decision logs retained as a book of record, graduated autonomy with measured reliability, and hard stops on irreversible actions. It was designed with bank validators in the room.",
      },
      {
        q: "Can we start small?",
        a: "That is the intended path: one workflow, propose-only mode, four to six weeks to a measured baseline \u2014 then autonomy expands with evidence. The platform grows from one agent to a governed fleet without re-architecture.",
      },
    ],
  },
];

export type Solution = {
  slug: string;
  name: string;
  eyebrow: string;
  headline: string;
  heroTagline: string;
  statement: string;
  intro: string;
  pillars: { title: string; body: string }[];
  capabilitiesTitle: string;
  capabilitiesIntro: string;
  capabilities: { title: string; body: string }[];
  stats: { value: string; label: string }[];
  relatedProduct?: string;
  technologies: string[];
  faqs: { q: string; a: string }[];
  caseStudy: {
    client: string;
    challenge: string;
    approach: string;
    results: { metric: string; label: string }[];
  };
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "data-analytics",
    name: "Data & Analytics",
    eyebrow: "Solutions",
    headline: "Data & Analytics",
    heroTagline: "Open table formats won, semantic layers went mainstream, and AI made trusted data non-negotiable. We build the foundations this new era runs on.",
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
      "We bring blueprints and delivery playbooks proven across a hundred-plus platform engagements in our team's careers — productized so you get the experience without the big-firm overhead.",
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
      { value: "120+", label: "Data platforms delivered across our team's careers" },
      { value: "30%", label: "Typical run-cost reduction from consolidations we have led" },
      { value: "18", label: "Industries served across our careers" },
      { value: "6 wks", label: "Fastest strategy-to-production delivery we have led" },
    ],
    caseStudy: {
      client: "Global 100 consumer goods company",
      challenge: "Five regional data estates, three warehouse vendors and no shared definition of revenue \u2014 every executive meeting started with reconciliation, and the AI roadmap was stalled behind the platform question.",
      approach: "PlexusCore agentic data engineering to build the pipelines and models on your warehouse, domain-by-domain migration, one semantic layer for the 40 metrics that run the company, and a data product operating model with named owners.",
      results: [
        { metric: "30%", label: "platform run cost freed in year one" },
        { metric: "6 wks", label: "to first governed domain in production" },
        { metric: "1", label: "definition of revenue, everywhere" },
      ],
    },
    technologies: ["Snowflake", "Databricks", "Apache Iceberg", "dbt", "Apache Kafka", "Apache Spark", "BigQuery", "Microsoft Fabric", "Airflow", "Power BI", "Tableau", "AWS · Azure · GCP"],
    faqs: [
      {
        q: "How long does it take to stand up a modern data platform?",
        a: "With our PlexusCore agentic data-engineering platform, a governed production pipeline for the first domain typically lands in six to eight weeks \u2014 models, tests, quality monitors and governance included. Full estate migration then proceeds domain by domain, funded by the run-cost savings consolidation frees.",
      },
      {
        q: "We already have a warehouse. Do we need a lakehouse?",
        a: "Usually you need convergence, not replacement. Open table formats let your existing warehouse and new workloads share one governed copy of the data, so we typically enable interoperability first and migrate opportunistically \u2014 no big-bang rebuild.",
      },
      {
        q: "How do you approach data governance without slowing teams down?",
        a: "By making it a platform feature instead of a committee: contracts enforced in pipelines, PII classification and access control automated, lineage captured as a by-product. Teams move faster because trust is default, not negotiated per dataset.",
      },
      {
        q: "Can you work with our existing data team rather than replacing it?",
        a: "That is the only way we work. Our pods embed with your engineers, the platform is built in your cloud accounts under your standards, and skills transfer is an explicit deliverable \u2014 success is your team running the platform without us.",
      },
    ],
    relatedProduct: "plexuscore",
  },
  {
    slug: "ai",
    name: "Artificial Intelligence",
    eyebrow: "Solutions",
    headline: "Artificial Intelligence",
    heroTagline: "Foundation models made intelligence abundant; evaluation and governance make it dependable. We engineer AI that survives contact with production.",
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
      "Our team has spent years shipping applied AI inside demanding enterprises — Dataplexor packages that experience into methods that survive contact with production.",
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
      { value: "40+", label: "AI systems our team has taken to production" },
      { value: "3x", label: "Median ROI on AI portfolios we have rationalized" },
      { value: "90%", label: "Of AI systems we build reach production \u2014 not just pilots" },
      { value: "100%", label: "Built with evaluation harnesses from day one" },
    ],
    caseStudy: {
      client: "Top-10 North American insurer",
      challenge: "Commercial submissions arriving as PDF mountains; underwriters spending mornings re-keying data while quote-turnaround targets slipped and the best risks went to faster competitors.",
      approach: "Document-intelligence pipeline with layered extraction models, an evaluation harness built from two thousand labeled real submissions, and confidence-routed human review inside the existing underwriting workbench.",
      results: [
        { metric: "-65%", label: "submission triage time" },
        { metric: "90 days", label: "from kickoff to production" },
        { metric: "+11pt", label: "quote ratio on target segments" },
      ],
    },
    technologies: ["Anthropic Claude", "OpenAI", "AWS Bedrock", "Azure AI Foundry", "Google Vertex AI", "Hugging Face", "PyTorch", "MLflow", "Ray", "LangGraph", "Weights & Biases", "Kubernetes"],
    faqs: [
      {
        q: "How do you decide which AI use cases are worth building?",
        a: "We score candidate use cases on value, feasibility and time-to-production against your actual data and systems \u2014 not industry averages. The output is a ranked portfolio where the top items have committed owners, measurable outcome metrics and a realistic path to production.",
      },
      {
        q: "What makes your AI systems production-grade rather than demos?",
        a: "Evaluation harnesses built before launch, golden datasets from real cases, monitoring wired to release gates, and MLOps discipline throughout. Around a quarter of our engineering effort goes into evaluation \u2014 which is precisely why our systems reach and survive production.",
      },
      {
        q: "How do you handle AI regulation like the EU AI Act?",
        a: "Compliance evidence is generated as a by-product of the engineering: model registries, evaluation reports, lineage and human-oversight design map directly onto the Act's obligations. We build the documentation into the pipeline so it never goes stale.",
      },
      {
        q: "Which models and vendors do you work with?",
        a: "We are vendor-neutral across the major model providers and clouds. Model choice follows the use case \u2014 quality, latency, cost and data-residency requirements \u2014 and our architectures keep model swaps cheap, because the frontier moves quarterly.",
      },
    ],
    relatedProduct: "plexusiq",
  },
  {
    slug: "agentic-ai",
    name: "Agentic AI",
    eyebrow: "Solutions",
    headline: "Agentic AI",
    heroTagline: "This is the year software stopped waiting for instructions. We build agents that plan, act and execute \u2014 and stay inside the lines while they do.",
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
      "Our founders have been building agentic systems since the field began — we combine that frontier experience with enterprise engineering discipline.",
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
      { value: "25+", label: "Agentic systems our team has delivered to production" },
      { value: "70%", label: "Average manual-effort reduction on agentized workflows" },
      { value: "100%", label: "Of agent actions policy-checked and auditable" },
      { value: "0", label: "Unsupervised irreversible actions. Ever." },
    ],
    caseStudy: {
      client: "European corporate bank",
      challenge: "KYC periodic reviews consuming analyst-days per case with a growing backlog, while the second line demanded more evidence per decision, not less \u2014 headcount could not close the gap.",
      approach: "AgentMesh agents assembling evidence, screening media and drafting assessments in propose-only mode first; graduated autonomy earned per action class with a complete decision log the validators helped design.",
      results: [
        { metric: "8x", label: "faster review cycle times" },
        { metric: "100%", label: "of agent actions policy-checked and logged" },
        { metric: "0", label: "findings on the process in the next exam" },
      ],
    },
    technologies: ["AgentMesh", "Anthropic Claude", "Model Context Protocol", "LangGraph", "OpenAI", "AWS Bedrock", "Azure AI Foundry", "Temporal", "Kubernetes", "OpenTelemetry"],
    faqs: [
      {
        q: "How is agentic AI different from the copilots we already deployed?",
        a: "Copilots draft; agents execute. An agentic system pursues a goal across multiple steps, tools and systems \u2014 assembling evidence, taking actions, escalating exceptions \u2014 without a human prompting each step. That changes the value equation and the governance requirements simultaneously.",
      },
      {
        q: "How do you keep autonomous agents safe in production?",
        a: "Governed autonomy: deterministic policy engines checking every action, sandboxed execution with least-privilege capabilities, budgets and rate limits, complete decision logging, and human hard stops on irreversible operations. Autonomy is earned per action class with measured reliability, never assumed.",
      },
      {
        q: "Where should an enterprise deploy its first agents?",
        a: "Workflows with high volume, high reversibility and codifiable judgment: service recovery, evidence assembly, reconciliation, triage. We deliberately avoid irreversible or customer-visible actions until the evaluation baseline proves reliability.",
      },
      {
        q: "Will agents work with our existing systems and permissions?",
        a: "Yes \u2014 that is most of the engineering. Agents integrate through your existing APIs and access-control model, holding scoped credentials like any other principal. If your identity and permission hygiene needs work first, we will tell you, because agent safety inherits it.",
      },
    ],
    relatedProduct: "agentmesh",
  },
  {
    slug: "app-building",
    name: "Application Building",
    eyebrow: "Solutions",
    headline: "Application Building",
    heroTagline: "Cloud-native, AI-assisted and shipped weekly \u2014 modern applications are living products, not projects. We build them to keep changing.",
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
      "Senior full-stack pods covering product design, engineering, cloud and security — the people who have shipped this two hundred times before, in one accountable team.",
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
      { value: "200+", label: "Applications shipped across our team's careers" },
      { value: "<1 wk", label: "From commit to production on our delivery platforms" },
      { value: "99.95%", label: "Median availability across systems we have operated" },
      { value: "60%", label: "Typical reduction in change lead time after modernization" },
    ],
    caseStudy: {
      client: "National healthcare provider network",
      challenge: "A patient portal built on a retiring platform, eleven-second page loads, and a two-release-per-year cadence that made every improvement a committee negotiation.",
      approach: "Strangler-pattern modernization: new cloud-native experience shipped alongside the legacy core, traffic migrated journey by journey, delivery platform with weekly releases and observability from the first sprint.",
      results: [
        { metric: "99.95%", label: "availability since cutover" },
        { metric: "Weekly", label: "release cadence, from twice a year" },
        { metric: "+38", label: "patient NPS on migrated journeys" },
      ],
    },
    technologies: ["TypeScript", "React", "Next.js", "Node.js", "Python", "Go", "PostgreSQL", "Kubernetes", "Terraform", "AWS · Azure · GCP", "GitHub Actions", "Playwright"],
    faqs: [
      {
        q: "Do you take over legacy systems or only build new ones?",
        a: "Both, and usually together. Our modernization work uses strangler-pattern migrations: new capabilities ship alongside the legacy core, traffic moves incrementally, and the business never bets on a big-bang cutover.",
      },
      {
        q: "How fast do you ship?",
        a: "Working software in the first weeks, production releases weekly thereafter. Our delivery platforms include CI/CD, infrastructure as code and observability from day one, so speed comes from engineering discipline rather than corner-cutting.",
      },
      {
        q: "How do you handle security and compliance in delivery?",
        a: "Threat modeling at design time, automated security testing in the pipeline, least-privilege infrastructure by default, and audit-ready change management. For regulated clients we build to your control framework and document as we go.",
      },
      {
        q: "What happens after launch?",
        a: "Your choice: full handover to your teams with skills transfer, or our managed service running the application under SLAs with a continuous improvement roadmap. Most clients choose a transition period between the two.",
      },
    ],
    relatedProduct: "plexuscore",
  },
  {
    slug: "product-building",
    name: "Product Building",
    eyebrow: "Solutions",
    headline: "Product Building",
    heroTagline: "From validated idea to scaling platform, speed is the moat. We take products zero-to-one and one-to-scale without losing it.",
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
      "We have built products inside startups, scale-ups and ventures across our careers — and operate like a product company on your behalf: outcome roadmaps, weekly releases, metrics tied to revenue.",
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
      { value: "35+", label: "Products our team has taken from concept to launch" },
      { value: "6-10 wks", label: "Typical time from kickoff to first users" },
      { value: "100%", label: "Founder-led \u2014 the people who scope it build it" },
      { value: "$400M+", label: "Follow-on funding raised by products we helped build" },
    ],
    caseStudy: {
      client: "Fintech scale-up (Series A)",
      challenge: "A validated lending concept, a term sheet with milestones attached, and no engineering organization \u2014 nine months of runway to prove a product in market.",
      approach: "Zero-to-one pod covering product, design and engineering; instrumented MVP in market in eight weeks; then scale hardening \u2014 multi-tenancy, SOC 2 readiness, cost engineering \u2014 as growth arrived.",
      results: [
        { metric: "8 wks", label: "kickoff to first funded loans" },
        { metric: "200k", label: "customers in the first year" },
        { metric: "Series B", label: "raised on the metrics the product proved" },
      ],
    },
    technologies: ["Next.js", "React Native", "PostgreSQL", "Stripe", "Kubernetes", "Terraform", "Anthropic Claude", "OpenAI", "Segment", "Amplitude", "LaunchDarkly", "AWS · Azure · GCP"],
    faqs: [
      {
        q: "Who do you build products for?",
        a: "Three profiles: startups taking a validated idea to market, corporates launching ventures outside the core stack, and product companies scaling past their first architecture. The method adapts; the product discipline is constant.",
      },
      {
        q: "How quickly can we get to first users?",
        a: "Six to ten weeks from kickoff to a launched, instrumented product is typical \u2014 including onboarding, pricing and analytics, not just features. Speed comes from ruthless scope discipline in discovery, which is where we spend the first two weeks.",
      },
      {
        q: "Can you make our product AI-native rather than AI-sprinkled?",
        a: "Yes \u2014 it is our specialty. AI-native means the data model, evaluation loops and agentic capabilities are designed in from the start, so intelligence compounds with usage instead of being a feature bolted to a finished roadmap.",
      },
      {
        q: "Do you work for equity or outcomes?",
        a: "For ventures we believe in, engagement models can include outcome linkage and, selectively, equity components. We will always be straight about which model fits \u2014 and when a fixed-scope build is simply the right answer.",
      },
    ],
    relatedProduct: "plexusiq",
  },
];

export type Industry = {
  slug: string;
  name: string;
  headline: string;
  heroTagline: string;
  statement: string;
  intro: string;
  challenges: { title: string; body: string }[];
  outcomes: { metric: string; title: string; body: string }[];
  useCases: { title: string; body: string; whyNow: string; impact: string }[];
  faqs: { q: string; a: string }[];
  solutions: string[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "retail",
    name: "Retail & E-commerce",
    headline: "Retail & E-commerce",
    heroTagline: "Generative search is rewriting discovery, agents are running the aisles, and retail media runs on first-party data. Margin now compounds through data.",
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
    faqs: [
      {
        q: "Where should a retailer start with AI if margins are tight?",
        a: "Start where margin leaks fastest: SKU-store forecasting and markdown optimization. They pay back inside a season, fund the roadmap, and force the product and inventory data cleanup every later initiative depends on.",
      },
      {
        q: "Can you work with our existing commerce and ERP stack?",
        a: "Yes. We integrate with the major commerce, ERP and POS platforms rather than replacing them \u2014 the intelligence layer reads from and writes back to the systems your operations already run on.",
      },
      {
        q: "How do you handle customer data privacy in personalization?",
        a: "Consent-aware customer data platforms with lineage on every attribute, so personalization and retail media run on data you can defend \u2014 to regulators and to customers. Privacy engineering is part of the build, not a review at the end.",
      },
    ],
    solutions: ["data-analytics", "ai", "agentic-ai"],
  },
  {
    slug: "banking",
    name: "Banking & Financial Services",
    headline: "Banking & Financial Services",
    heroTagline: "Instant payment rails, real-time fraud defense and agentic operations under model-risk scrutiny \u2014 the next efficiency wave belongs to banks that automate with an audit trail.",
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
    faqs: [
      {
        q: "Will your AI systems pass our model risk management review?",
        a: "They are designed for it: documented development evidence, evaluation harnesses, monitoring, explainability appropriate to the model class, and complete decision logs. We work with your second line from the first sprint, not the last.",
      },
      {
        q: "How do you deploy agents in a regulated environment?",
        a: "Graduated autonomy under a policy engine: propose-only until reliability is proven, approval-free execution earned per action class, hard stops on irreversible actions permanently. Every action is policy-checked and logged as a book of record.",
      },
      {
        q: "Can you work within our on-premise and data residency constraints?",
        a: "Yes. Our architectures deploy in your cloud tenancy or on-premise estate, respect data residency boundaries, and use models available within your approved perimeter \u2014 including private model deployments where required.",
      },
    ],
    solutions: ["data-analytics", "agentic-ai", "ai"],
  },
  {
    slug: "insurance",
    name: "Insurance",
    headline: "Insurance",
    heroTagline: "Document intelligence is digitizing the submission desk while climate risk reprices the book. Underwriting is becoming a data discipline.",
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
    faqs: [
      {
        q: "How quickly can document intelligence improve our submission flow?",
        a: "Triage automation on submissions, loss runs and schedules typically shows measurable cycle-time reduction within a quarter \u2014 extraction models reach useful accuracy fast, and underwriters feel the difference immediately in how their day starts.",
      },
      {
        q: "Does claims automation risk our customer relationships?",
        a: "Done properly it improves them: clean claims settle in hours instead of weeks, and adjusters concentrate on the complex cases where empathy and judgment matter. We instrument satisfaction alongside cycle time so the trade-off is measured, not assumed.",
      },
      {
        q: "How do you keep AI underwriting explainable for regulators and reinsurers?",
        a: "Reason codes on every recommendation, documented data lineage, bias monitoring and human authority over the final decision. The underwriting workbench shows its evidence \u2014 which underwriters demand anyway before they trust it.",
      },
    ],
    solutions: ["ai", "data-analytics", "agentic-ai"],
  },
  {
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    headline: "Healthcare & Life Sciences",
    heroTagline: "Ambient AI is giving clinicians their evenings back and prior authorization is finally being automated. Healthcare's data decade has arrived.",
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
    faqs: [
      {
        q: "How do you protect PHI in AI systems?",
        a: "HIPAA-aligned architectures: de-identification and consent management in the data layer, PHI-scoped access for every model and agent, audit logging throughout, and deployment inside your compliance boundary. Privacy is a design input, not a review gate.",
      },
      {
        q: "Do clinicians actually adopt ambient documentation?",
        a: "When it is deployed with clinician champions, tuned to specialty workflows and measured on time returned \u2014 yes, faster than any clinical software we have seen. Adoption is led, not mandated; the tool earns its place by giving hours back.",
      },
      {
        q: "Can you integrate with our EHR?",
        a: "Yes \u2014 we build on FHIR-based integration with the major EHR platforms, working within your vendor's approved integration frameworks and your interface engine standards.",
      },
    ],
    solutions: ["data-analytics", "ai", "agentic-ai"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Supply Chain",
    headline: "Manufacturing & Supply Chain",
    heroTagline: "IT and OT are converging into industrial intelligence \u2014 predictive quality, supply chain digital twins and copilots on the factory floor.",
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
    faqs: [
      {
        q: "Our OT data is messy and siloed. Is predictive maintenance still feasible?",
        a: "Yes \u2014 messy OT data is the normal starting point, not a blocker. We land sensor, MES and ERP data into a unified namespace first; useful predictive models typically follow within one to two quarters on the assets that matter most.",
      },
      {
        q: "How do you deploy AI on the factory floor without disrupting production?",
        a: "Shadow-mode first: models run alongside operations, predictions are compared against outcomes, and only proven models graduate to advisory and then automated roles. Production continuity is a design constraint from day one.",
      },
      {
        q: "What is the realistic payback on industrial AI?",
        a: "Predictive maintenance and quality programs on well-chosen assets typically pay back within twelve months through downtime and scrap reduction \u2014 we scope the first deployment against your loss data so the business case is yours, not an industry average.",
      },
    ],
    solutions: ["data-analytics", "ai", "app-building"],
  },
  {
    slug: "telecom-media",
    name: "Telecom & Media",
    headline: "Telecom & Media",
    heroTagline: "Network telemetry at 5G scale, agentic service journeys and engagement economics \u2014 operators are turning network data into the product itself.",
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
    faqs: [
      {
        q: "Can agentic service really handle telco complexity?",
        a: "The majority of tier-1 contacts \u2014 billing, provisioning, order status \u2014 are agent-resolvable end-to-end with policy guardrails. Complexity lives in the integration layer, which is exactly where we do the engineering; containment is earned journey by journey.",
      },
      {
        q: "How do you use network data without breaching subscriber privacy?",
        a: "Aggregation, purpose-binding and consent lineage in the data platform, so network intelligence and customer value management run on defensible data. Privacy engineering is part of the architecture, audited like any other control.",
      },
      {
        q: "Where does AI pay fastest for an operator?",
        a: "High-value churn prevention and tier-1 service containment usually pay first \u2014 both show results within two quarters. Network optimization compounds larger over time but has a longer data-foundation runway.",
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

export const ENTRY_OFFERS = [
  {
    name: "Data & AI Readiness Assessment",
    duration: "2 weeks · fixed fee",
    body: "A practitioner team maps your data estate, AI portfolio and operating model against where the value actually is.",
    deliverables: [
      "Estate and use-case inventory with honest feasibility scoring",
      "Value-ranked roadmap with costed next quarter",
      "Executive readout your board can act on",
    ],
    cta: "Book an assessment",
  },
  {
    name: "Proof-to-Production Pilot",
    duration: "6–10 weeks · milestone priced",
    body: "One high-value use case taken all the way to production — with the evaluation harness and runbook to operate it.",
    deliverables: [
      "Working system in your environment, not a demo",
      "Evaluation baseline and monitoring wired to release gates",
      "Skills transfer and a scale plan with real costs",
    ],
    cta: "Scope a pilot",
  },
  {
    name: "Architecture & AI Review",
    duration: "3 weeks · fixed fee",
    body: "An independent, evidence-based review of your platform or AI portfolio — for leaders who need the unvarnished picture.",
    deliverables: [
      "Findings benchmarked against your data, not averages",
      "Risk register and run-cost savings quantified",
      "Board-ready report with a sequenced fix plan",
    ],
    cta: "Request a review",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "They are the first team whose strategy actually compiled. The roadmap came with running code, and the running code came with our engineers trained to own it.",
    author: "Chief Technology Officer",
    org: "Global 500 retailer",
  },
  {
    quote:
      "Our regulator asked who built the agent audit trail — because it was better evidence than our manual process ever produced. That is a sentence I never expected to say.",
    author: "Chief Operating Officer",
    org: "European corporate bank",
  },
  {
    quote:
      "Half consultancy, half engineering team, fully accountable. Eighteen months later the platform they built is still getting faster and cheaper — and it is our people running it.",
    author: "Chief Data Officer",
    org: "Fortune 100 manufacturer",
  },
];

export const DELIVERY_PHASES = [
  {
    phase: "Weeks 0–2",
    title: "Discover & design",
    body: "Practitioners map your estate, workflows and constraints; the target design and first increment are agreed with the people who will live with them.",
  },
  {
    phase: "Weeks 2–6",
    title: "Build in your environment",
    body: "Cross-functional pod ships working software into your cloud from the first sprint — your engineers embedded, weekly demos, no surprise reveal.",
  },
  {
    phase: "Weeks 6–10",
    title: "Production & evidence",
    body: "The system goes live with evaluation, monitoring and runbooks; results are measured against the baseline we agreed, not asserted.",
  },
  {
    phase: "Week 10+",
    title: "Scale & transfer",
    body: "What works is industrialized across domains; skills transfer completes and — where you want it — our managed service takes the pager.",
  },
];

export type AboutContent = {
  hero: { title: string; subtitle: string };
  mission: string;
  story: { paragraphs: string[] };
  stats: { value: string; label: string }[];
  timeline: { eyebrow: string; title: string; milestones: { year: string; event: string }[] };
  locations: { city: string; role: string; detail: string }[];
  values: { title: string; body: string }[];
  responsibleAi: { title: string; intro: string; commitments: string[] };
  dataHandling: { title: string; intro: string; commitments: string[] };
};

export const ABOUT: AboutContent = {
  hero: {
    title: "We defy the disciplines to mobilize your data",
    subtitle:
      "Dataplexor works at the crossroads of data engineering, applied AI and business strategy to understand, structure and solve the problems that matter most.",
  },
  mission:
    "We unlock the value of data to build products and intelligence that move enterprises — from insight to decision to autonomous action.",
  story: {
    paragraphs: [
      "Dataplexor is built on decades of practice. We spent the last two decades inside global consultancies, technology companies and enterprise data teams — designing platforms for banks, shipping AI for retailers and insurers, running transformation programs across every industry we now serve.",
      "We also spent those decades watching the same failure repeat: strategy sold by partners and delivered by juniors, platforms built to bill hours rather than to be owned, AI programs that demo well and die quietly. We founded Dataplexor in 2026 to do this work the way we always argued it should be done — senior people, working software, evidence over tenure.",
      "So we are deliberately building a different kind of firm: the founders who scope your engagement deliver it, every method we use was proven somewhere real before we productized it, and the measure of success is what your team can run without us. Decades deep. Nothing to unlearn.",
    ],
  },
  stats: [
    { value: "2026", label: "Founded in San Francisco" },
    { value: "80+", label: "Years of combined senior experience" },
    { value: "18", label: "Industries served across our careers" },
    { value: "3", label: "Products built from career-proven patterns" },
  ],
  timeline: {
    eyebrow: "The road here",
    title: "The careers that built Dataplexor",
    milestones: [
      { year: "2000s", event: "Our founders cut their teeth building enterprise data warehouses and BI programs inside global consultancies and Fortune 500 data teams." },
      { year: "2010s", event: "Leading platform practices through the big-data and cloud era — lakehouse migrations, streaming architectures, data organizations built from scratch." },
      { year: "2020–24", event: "Taking machine learning and then generative AI into production for banks, insurers, retailers and manufacturers — and learning what survives contact with reality." },
      { year: "2025", event: "First agentic systems delivered into regulated industries across our prior roles — the experience that became the AgentMesh design." },
      { year: "2026", event: "Dataplexor founded: the patterns of a hundred-plus builds productized, a senior-only team, and nothing to unlearn." },
    ],
  },
  locations: [
    { city: "San Francisco", role: "Headquarters", detail: "One Market Plaza, Suite 3600 — where the founding team builds products and runs engagements." },
    { city: "New York", role: "Partner presence", detail: "Founding partners on the ground for financial services and Americas clients." },
    { city: "London", role: "Partner presence", detail: "Founding partners covering EMEA, EU AI Act advisory and regulated-industry work." },
  ],
  values: [
    { title: "Evidence over opinion", body: "Every recommendation is benchmarked against real data. If we can't measure it, we won't claim it." },
    { title: "Build what we advise", body: "Strategy and engineering are one practice. Advice that cannot survive contact with production is not advice we give." },
    { title: "Skills transfer by default", body: "Success means your teams are more capable when we leave than when we arrived." },
    { title: "Trust is the product", body: "Governed data, evaluated models, guardrailed agents — everything we ship is built to be trusted, audited and explained." },
  ],
  responsibleAi: {
    title: "Responsible AI, by design",
    intro: "We build systems that make consequential decisions, so we hold ourselves to commitments we are willing to be audited against:",
    commitments: [
      "Every model we ship carries an evaluation baseline, monitoring and documented limitations",
      "Agents operate under policy guardrails with complete decision logs — autonomy is earned with evidence",
      "Human oversight is real: authority, competence and the practical ability to intervene",
      "Bias testing and explainability appropriate to the decision, aligned to the EU AI Act and sector regulation",
      "We decline work we believe causes harm — and we have",
    ],
  },
  dataHandling: {
    title: "How we handle your data",
    intro: "Security posture is part of every engagement, not a policy PDF:",
    commitments: [
      "Delivery happens in your cloud tenancy — your data never moves into ours",
      "Least-privilege access, granted per engagement and revoked at handover",
      "Secure development practice: threat modeling, dependency scanning, audit-ready change history",
      "Confidentiality by default — NDAs honored in what we publish, down to anonymized case studies",
      "Data residency and regulatory boundaries respected in architecture, not worked around",
    ],
  },
};

export type LeadershipContent = {
  hero: { title: string; subtitle: string };
  leaders: {
    name: string;
    role: string;
    bio: string;
    photo: string;
    linkedin: string;
  }[];
};

export const LEADERSHIP: LeadershipContent = {
  hero: {
    title: "The founding team",
    subtitle:
      "A team built by people with decades in the field. Everyone who leads at Dataplexor still works the craft they lead — on your engagement, not from a corner office.",
  },
  leaders: [
    { name: "Srinivas Rao", role: "Co-founder & Chief Executive Officer", bio: "Two decades in enterprise data and analytics. Srinivas founded Dataplexor to close the gap between data strategy and the systems that deliver it.", photo: "", linkedin: "" },
    { name: "Elena Vasquez", role: "Co-founder & Chief Technology Officer", bio: "Former principal engineer on planet-scale data infrastructure. Elena leads engineering and the architecture of the Plexus product family.", photo: "", linkedin: "" },
    { name: "Marcus Chen", role: "Co-founder & Chief AI Officer", bio: "Applied ML researcher turned builder. Marcus leads our AI and agentic practices, including evaluation methodology and AI safety standards.", photo: "", linkedin: "" },
    { name: "Priya Sharma", role: "Co-founder & Chief Consulting Officer", bio: "Priya leads advisory and delivery, bringing fifteen years of transformation experience across financial services and healthcare.", photo: "", linkedin: "" },
    { name: "David Okafor", role: "Co-founder & Chief Operating Officer", bio: "David runs global operations and managed services, with a background scaling technology services organizations across four continents.", photo: "", linkedin: "" },
    { name: "Anna Lindqvist", role: "Founding Partner, Research & Insights", bio: "Anna directs Dataplexor Research — the team behind our published insights, benchmarks and points of view.", photo: "", linkedin: "" },
  ],
};

export type CareersContent = {
  hero: { title: string; subtitle: string };
  benefits: { title: string; body: string }[];
  openings: {
    title: string;
    team: string;
    location: string;
    type: string;
    applyHref: string;
  }[];
  hiringProcess: { step: string; title: string; body: string }[];
};

export const CAREERS: CareersContent = {
  hero: {
    title: "Do the best work of your career on problems that matter",
    subtitle:
      "Join a team of people with decades in the field, at a moment when everything is still being shaped — and shape it with us.",
  },
  benefits: [
    { title: "Work on the frontier", body: "Ship production AI and agentic systems most engineers only read about — with the guardrails to do it responsibly." },
    { title: "Practitioners lead", body: "Your managers still write code, run models and sit with clients. Career paths reward craft, not just headcount." },
    { title: "Flexible by design", body: "Remote-first with hubs in San Francisco, New York and London. Async-friendly, meeting-light." },
    { title: "Invest in you", body: "Annual learning budget, conference time, and 10% time for research and open source." },
    { title: "Own the upside", body: "Founding-stage equity for every early hire — join now and own a real piece of what we build." },
    { title: "Health, fully covered", body: "Comprehensive medical, dental and vision for you and your dependents, plus generous parental leave." },
  ],
  openings: [
    { title: "Senior Data Engineer", team: "Platform Engineering", location: "San Francisco / Remote", type: "Full-time", applyHref: "/company/contact" },
    { title: "Machine Learning Engineer", team: "AI Practice", location: "Remote (US/EU)", type: "Full-time", applyHref: "/company/contact" },
    { title: "Agentic Systems Engineer", team: "AgentMesh Product", location: "San Francisco", type: "Full-time", applyHref: "/company/contact" },
    { title: "Principal Consultant, Data Strategy", team: "Consulting & Advisory", location: "New York / Remote", type: "Full-time", applyHref: "/company/contact" },
    { title: "Analytics Engineer", team: "PlexusIQ Product", location: "Remote (US)", type: "Full-time", applyHref: "/company/contact" },
    { title: "Engagement Manager", team: "Consulting & Advisory", location: "London", type: "Full-time", applyHref: "/company/contact" },
  ],
  hiringProcess: [
    { step: "01", title: "Intro conversation", body: "Thirty minutes with the hiring lead about your work, your goals and whether the role fits. No trick questions." },
    { step: "02", title: "Craft session", body: "A working session in your discipline — real problems from our practice, done together, not on a whiteboard from memory." },
    { step: "03", title: "Team round", body: "Meet the people you would work with, including someone outside your discipline. You interview us as much as we interview you." },
    { step: "04", title: "Offer & onboarding", body: "A clear offer with compensation transparency, and a first-quarter plan that puts you on real client work with a dedicated buddy." },
  ],
};
