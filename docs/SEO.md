# Dataplexor — SEO & Google Search Content

This document lists exactly what Google will show for each page once the site
is deployed and indexed, plus the launch checklist. Titles and meta
descriptions below are already implemented in the page metadata — edit the
page files (or, for the home page and posts, the admin) to change them.

## How the site appears on Google

Every page ships: a unique `<title>`, meta description, canonical URL,
Open Graph/Twitter card (with `/og.png`), and JSON-LD structured data
(Organization + WebSite site-wide; SoftwareApplication on products; Article
on insights; BreadcrumbList on all detail pages — eligible for breadcrumb
rich results).

### Search snippets by page

| Page | Title shown on Google | Meta description |
| --- | --- | --- |
| `/` | Dataplexor — Data & Analytics, AI and Agentic AI | Dataplexor turns enterprise data into decisions: modern data platforms, production AI and governed agentic systems — delivered through products, services and consulting. |
| `/solutions/data-analytics` | Data & Analytics Solutions \| Dataplexor | We design, build and run modern data platforms and analytics capabilities — from lakehouse foundations and governance to semantic layers and self-service BI… |
| `/solutions/ai` | Artificial Intelligence Solutions \| Dataplexor | We take machine learning and generative AI from promising prototype to reliable production — with the evaluation, MLOps and governance that make the difference… |
| `/solutions/agentic-ai` | Agentic AI Solutions \| Dataplexor | We help enterprises design, build and govern autonomous AI agents that plan, decide and execute across systems — with guardrails, observability and human oversight… |
| `/solutions/app-building` | Application Building Solutions \| Dataplexor | We design and build cloud-native applications — customer experiences, internal platforms and modernization — with engineering discipline that keeps them fast, secure and easy to change. |
| `/solutions/product-building` | Product Building Solutions \| Dataplexor | We take products from zero to one and from one to scale: discovery, MVP, product-market iteration and the hardening that turns a launch into a durable business. |
| `/industries` | Industries \| Dataplexor | Dataplexor serves retail, banking, insurance, healthcare, manufacturing and telecom with data & analytics, AI and agentic solutions built for each domain. |
| `/industries/retail` | Retail & E-commerce — Data & AI Solutions \| Dataplexor | From demand forecasting and dynamic pricing to personalization and agent-assisted service… |
| `/industries/banking` | Banking & Financial Services — Data & AI Solutions \| Dataplexor | Data platforms, AI models and agentic workflows that satisfy model risk management and regulators by design… |
| `/industries/insurance` | Insurance — Data & AI Solutions \| Dataplexor | Underwriting, claims and service digitized with data platforms and AI that keep every decision explainable… |
| `/industries/healthcare` | Healthcare & Life Sciences — Data & AI Solutions \| Dataplexor | Interoperable data platforms and clinically-aware AI for providers, payers and life sciences… |
| `/industries/manufacturing` | Manufacturing & Supply Chain — Data & AI Solutions \| Dataplexor | OT and IT data connected into platforms for predictive quality, asset reliability and resilient supply chains… |
| `/industries/telecom-media` | Telecom & Media — Data & AI Solutions \| Dataplexor | Churn and ARPU intelligence, network optimization and AI-powered customer operations at telco scale… |
| `/products` | Products \| Dataplexor | The Dataplexor product family: PlexusCore data platform accelerator, PlexusIQ decision intelligence and AgentMesh agentic AI runtime. |
| `/products/plexuscore` | PlexusCore — Data platform \| Dataplexor | A unified data platform accelerator that stands up ingestion, lakehouse storage, transformation and governance in weeks, not quarters. |
| `/products/plexusiq` | PlexusIQ — Decision intelligence \| Dataplexor | A decision-intelligence suite that unifies metrics, ML predictions and natural-language analytics on top of your data platform. |
| `/products/agentmesh` | AgentMesh — Agentic AI runtime \| Dataplexor | An orchestration and governance runtime for deploying fleets of AI agents with policy guardrails, observability and human oversight. |
| `/services` | Services & Consulting \| Dataplexor | Dataplexor services: data & AI consulting and advisory, product and platform engineering, and managed data & AI operations. |
| `/insights` | Insights & Research \| Dataplexor | Research and perspectives from Dataplexor on data & analytics, artificial intelligence, agentic AI and technology consulting. |
| `/insights/[slug]` | *Post title* \| Dataplexor | *Post excerpt (set per post in the admin)* |
| `/company/about` | About Us \| Dataplexor | Dataplexor is a data & analytics, AI and agentic AI company. Learn about our mission, values and the way we work. |
| `/company/leadership` | Leadership \| Dataplexor | Meet the leadership team of Dataplexor — practitioners leading our data, AI and consulting practices. |
| `/company/careers` | Careers \| Dataplexor | Careers at Dataplexor — join a team building data platforms, production AI and agentic systems for the world's most demanding enterprises. |
| `/company/contact` | Contact Us \| Dataplexor | Get in touch with Dataplexor — talk to our team about data & analytics, AI, agentic AI, products, services and consulting. |
| Legal pages | Privacy Policy / Terms of Service / Cookie Policy \| Dataplexor | One-line description each; indexed but low priority in the sitemap. |

The favicon Google shows next to results is served from `/favicon.ico` and
`/icon.svg` (the dp-infinity mark). Link previews on social/chat apps use
`/og.png`.

## Launch checklist (do these after deploying)

1. **Set the production domain** — in `/admin` → Site settings → Site URL
   (e.g. `https://www.dataplexor.com`). Canonicals, sitemap, robots and
   JSON-LD all derive from it.
2. **Google Search Console** — add the domain property at
   [search.google.com/search-console](https://search.google.com/search-console).
   For the HTML-tag verification method, set the `GOOGLE_SITE_VERIFICATION`
   env var in Vercel to the token Google gives you and redeploy — the meta
   tag is emitted automatically.
3. **Submit the sitemap** — in Search Console, submit
   `https://your-domain/sitemap.xml`. New insights posts are added to the
   sitemap automatically.
4. **Request indexing** of the home page for a faster first crawl.
5. **Verify rich results** — test a product and an insight URL at
   [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
   (expect Organization, Breadcrumb, Article and SoftwareApplication).
6. **Bing** (optional) — import the verified property at
   [bing.com/webmasters](https://www.bing.com/webmasters); it can reuse the
   Search Console verification.

## Ongoing SEO

- Publish insights regularly from `/admin/insights` — each post gets its own
  indexed URL, Article structured data and sitemap entry.
- Keep titles under ~60 characters and descriptions under ~155 so Google
  doesn't truncate them.
- The announcement bar, hero and stats are editable in the admin without a
  deploy; page-level copy lives in `lib/site.ts` and the page files.
