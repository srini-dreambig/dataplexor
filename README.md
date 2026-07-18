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

> Locally (without `DATABASE_URL`) content is read from and written to JSON files in `content/`. In production, set `DATABASE_URL` so content lives in Postgres — see **Deploying to Vercel** below.

## Deploying to Vercel

1. **Import the repository** at [vercel.com/new](https://vercel.com/new) — the Next.js framework preset is detected automatically, no build settings needed.
2. **Set environment variables** (Project → Settings → Environment Variables):

   | Variable | Value |
   | --- | --- |
   | `DATABASE_URL` | Your Neon Postgres connection string (`postgresql://…?sslmode=require`) |
   | `ADMIN_USER` | Admin username |
   | `ADMIN_PASSWORD` | Strong admin password |
   | `ADMIN_SECRET` | Long random string (e.g. `openssl rand -hex 32`) |

3. **Deploy.** On first request the app creates a `content_docs` table in the database and seeds it from the bundled JSON content — no manual migration needed. Admin edits and contact-form messages persist in Postgres. To rotate the database password, just update `DATABASE_URL` in Vercel and redeploy.

Notes:
- `DATABASE_URL` is required on Vercel — the serverless filesystem is read-only, so without it the site still renders (from bundled JSON) but admin saves and the contact form return errors.
- After going live, update **Site settings → Site URL** in the admin (or `content/settings.json`) to your production domain so the sitemap, robots and canonical URLs are correct.
- Optionally connect the domain in Vercel and submit `https://your-domain/sitemap.xml` to Google Search Console.

## Pages

| Area | Routes |
| --- | --- |
| Home | `/` |
| Solutions | `/solutions/data-analytics`, `/solutions/ai`, `/solutions/agentic-ai`, `/solutions/app-building`, `/solutions/product-building` |
| Industries | `/industries` + retail, banking, insurance, healthcare, manufacturing, telecom-media |
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

Content is stored through a pluggable backend (`lib/storage.ts`):

- **With `DATABASE_URL` set** (production/Vercel): documents live in a `content_docs` table in Neon Postgres, auto-created and seeded from the bundled JSON on first use.
- **Without it** (local dev / self-hosted): documents are the JSON files in `content/`.

Documents:

- `settings` — global site settings (`content/settings.json`)
- `home` — home page hero/stats/advantage (`content/home.json`)
- `posts` — insights articles (`content/posts.json`)
- `messages` — contact form submissions

Static structured content (navigation, products, solutions, services) lives in `lib/site.ts`.

## Design system

- **Font**: Google Sans (variable, via `next/font`) across all text, headlines and the logo wordmark
- **Colors**: brand blue `#2338ec`, ink `#0a0a14`, teal accent `#10dfc2`, mist `#f4f5fb`
- **Logo**: brand mark SVG (`components/Logo.tsx`, `public/logo.svg`, favicon at `app/icon.svg`) — transparent background, renders in any color via `currentColor`; `MarkBackdrop` reuses the logo shapes as decorative section backgrounds
- Shared components in `components/` (header with dropdown menus, footer, hero, stat tiles, cards, CTA banners)
