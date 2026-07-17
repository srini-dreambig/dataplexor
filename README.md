# Dataplexor — Corporate Website

Corporate website for **Dataplexor** (Data & Analytics · AI · Agentic AI · Products · Services & Consulting), built with Next.js (App Router), TypeScript and Tailwind CSS, with a built-in content administration area.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

Production:

```bash
npm run build
npm start
```

> The site renders dynamically from JSON content files (`content/`), so it must run on a Node server (`next start`, Docker, or any Node host). Content edits made in the admin go live immediately.

## Pages

| Area | Routes |
| --- | --- |
| Home | `/` |
| Solutions | `/solutions/data-analytics`, `/solutions/ai`, `/solutions/agentic-ai` |
| Products | `/products`, `/products/plexuscore`, `/products/plexusiq`, `/products/agentmesh` |
| Services & Consulting | `/services` (Consulting, Engineering, Managed) |
| Insights (blog) | `/insights`, `/insights/[slug]` |
| Company | `/company/about`, `/company/leadership`, `/company/careers`, `/company/contact` |
| Legal | `/legal/privacy`, `/legal/terms`, `/legal/cookies` |
| SEO | `/sitemap.xml`, `/robots.txt`, JSON-LD structured data, per-page metadata/canonicals, custom 404 |
| Admin | `/admin` (login at `/admin/login`) |

## Content administration (`/admin`)

Log in at **`/admin`** to manage:

- **Site settings** — site name, SEO description, announcement bar, contact details, social links
- **Home page** — hero headline, CTAs, stats, advantage section
- **Insights** — create / edit / delete blog posts (markdown body)
- **Messages** — enquiries submitted through the contact form

### Credentials

Configure via environment variables (see `.env.example`):

| Variable | Purpose | Default (dev only) |
| --- | --- | --- |
| `ADMIN_USER` | Admin username | `admin` |
| `ADMIN_PASSWORD` | Admin password | `dataplexor2026` |
| `ADMIN_SECRET` | Secret used to sign the session cookie | dev fallback |

**Set all three in production.** Sessions are HMAC-signed, HTTP-only cookies valid for 12 hours.

## Content storage

All editable content lives in `content/`:

- `settings.json` — global site settings
- `home.json` — home page hero/stats/advantage
- `posts.json` — insights articles
- `messages.json` — contact form submissions (created on first submission)

Static structured content (navigation, products, solutions, services) lives in `lib/site.ts`.

## Design system

- **Font**: Inter (via `next/font`)
- **Colors**: brand blue `#2338ec`, ink `#0a0a14`, teal accent `#10dfc2`, mist `#f4f5fb`
- **Logo**: original SVG plexus mark (`components/Logo.tsx`, `public/logo.svg`, favicon at `app/icon.svg`) — transparent background, renders in any color via `currentColor`
- Shared components in `components/` (header with dropdown menus, footer, hero, stat tiles, cards, CTA banners)
