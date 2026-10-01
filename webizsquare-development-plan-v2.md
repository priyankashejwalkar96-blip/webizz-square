# Webiz Square: Website Rebuild, Complete Development Plan (Version 2)

> **Version 2 change:** Hosting moves from Hostinger + Cloudflare to **Vercel**. Development is done locally first (Antigravity), then pushed to **GitHub**, with **Supabase** for the database and media storage. Cloudflare and Hostinger are **not used for now** and can be added later (optional).
>
> | Topic | Version 1 | Version 2 |
> |---|---|---|
> | Hosting | Hostinger Cloud (Node.js) | **Vercel** (serverless, deployed from GitHub) |
> | CDN / WAF / DNS | Cloudflare | Vercel's built-in CDN and SSL; DNS at your domain registrar |
> | Media storage | Hostinger disk (50 GB) | **Supabase Storage** (S3-compatible), via Payload's S3 adapter |
> | Rate limiting | In-memory / Cloudflare rules | **Upstash Redis** (free) + Vercel firewall |
> | Bot protection | Cloudflare Turnstile | Turnstile (works without a Cloudflare proxy) |
> | Deploy | Build in CI, upload to server | Push to GitHub, Vercel builds and deploys automatically |
>
> **Important, read before going live:** Vercel's free **Hobby** plan is intended for personal, non-commercial use. A company website for Webiz Square LLP is commercial, so plan on Vercel **Pro** (about $20/month per seat, verify at vercel.com/pricing) when the site goes live as your business site. Hobby is fine for building and testing.

**Site:** https://webizsquare.com (currently WordPress)
**Goal:** A very fast, SEO-first, secure website with a full admin dashboard, built to rank higher on Google and bring in more clients globally.
**UI/animation reference:** https://influencio.in/ (motion and interaction language only, see section 2.2)
**Stack:** Next.js (TypeScript) + Payload CMS + Supabase (Postgres database and file storage) deployed on Vercel, with GitHub for source control and CI. Developed and tested locally before going live.

---

## 1. Goals and success metrics

| Area | Target |
|---|---|
| Speed | Mobile Lighthouse 95+, LCP < 2.0 s, CLS < 0.05, INP < 200 ms, TTFB < 400 ms |
| SEO | All pages indexed within 30 days, schema on every template, zero broken links, zero lost URLs after migration |
| Leads | Every form, WhatsApp click and call click tracked as a GA4 conversion and stored in the dashboard |
| Admin | Every text, image, menu, SEO field and page editable without touching code |
| Security | No known vulnerabilities, WAF and rate limiting on, 2FA on all admin users, daily off-site backup |
| Growth | Track: organic clicks, impressions, average position, leads per month, lead-to-client rate |

---

## 2. Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js (App Router) + TypeScript** | SSG/ISR for speed, server-rendered HTML for SEO |
| CMS and admin | **Payload CMS 3** (inside the same Next.js app) | One codebase, admin at `/admin`, custom collections, roles, drafts, live preview |
| Database | **Supabase Postgres (free tier)** | Managed Postgres, no server to maintain (see section 3 for limits) |
| Media | **Supabase Storage** (public and private buckets) through Payload's S3 adapter, resized with `sharp` | Vercel has no persistent disk, so uploads must live in object storage (section 3.4) |
| Styling | Tailwind CSS + a small custom design system | Small CSS output, consistent design |
| Forms/validation | React Hook Form + Zod | Same schema on client and server |
| Email | Resend or Brevo (free tier) | Lead alerts, auto-replies |
| CDN / SSL | Vercel (built in); Cloudflare optional later | Global CDN, automatic HTTPS. Turnstile CAPTCHA used standalone |
| Analytics | GTM, GA4, Search Console, Microsoft Clarity | Free, complete tracking |
| Hosting | **Vercel** (Next.js, deployed from GitHub) | Preview deployments per branch, instant rollback |
| CI/CD | GitHub + GitHub Actions | Build, test, deploy, scheduled backups and keep-alive |
| Node version | 22.x (20.x also works) | Set in Vercel project settings |

**Payload plugins:** `plugin-seo`, `plugin-redirects`, `plugin-search` (optional, for site search), `plugin-nested-docs` (optional). Media uses `@payloadcms/storage-s3` (pointed at Supabase Storage) plus `sharp`. Local development can use Payload's local disk storage through an env toggle (`MEDIA_STORAGE=local|s3`).

### 2.1 Animation and UI stack

Identified from a technology scan of the reference site (influencio.in) and mapped to what this project will use. The reference is a React + React Router single-page app; ours is Next.js, so we reproduce the *experience* with the equivalent packages.

| Reference site uses | We use | Notes |
|---|---|---|
| React, React Router 7.8 | **React 19 + Next.js App Router** | Routing is built into Next.js. Do **not** install React Router. |
| Framer Motion | **`motion`** (Framer Motion's current package; `framer-motion` is the older name and also works) | Use `LazyMotion` + `m.*` components with `domAnimation` to keep the bundle small. Scroll reveals, staggers, page and menu transitions, hover and tap effects. |
| Three.js (181) | **`three` + `@react-three/fiber`** (+ `@react-three/drei` only if needed) | Heavy. Hero or one showcase section only, loaded lazily (see performance exception below). |
| Tailwind CSS | **Tailwind CSS 4** | Design tokens in the theme config. |
| Lucide | **`lucide-react`** | Import individual icons only (tree-shaken). |
| Google Font API | **`next/font`** (self-hosted, `display: swap`) | Max two families. Do not load fonts from the Google Fonts CDN. |
| Google Tag Manager, Facebook Pixel | **GTM only**; Meta Pixel is added as a GTM tag | Fire after consent and after first interaction (section 13). |
| PWA | **Optional**: `manifest.webmanifest` + icons in `/public` | Installable, no offline caching needed at launch. |
| Hosting | **Vercel** (v2 change) | Section 15. |

**Optional extras** (only if the reference motion needs them, and only after checking the JS budget): `lenis` for smooth scroll, `next-themes` for a light/dark toggle. Do not add GSAP, particle libraries or canvas backgrounds beyond the single Three.js scene.

**Brand colour rule for the UI:** primary `#ff5987` (from the logo), plus black `#000000` and white `#ffffff`. No other hues. Greys are black or white at reduced opacity. Define these as CSS variables / Tailwind tokens once.

**Animation packages summary (install list):**
`motion`, `three`, `@react-three/fiber`, `@react-three/drei` (optional), `lucide-react`, `lenis` (optional), `next-themes` (optional).

### 2.2 Reference website: influencio.in

**Instruction to designers and developers:** use https://influencio.in/ as the reference for **UI animation and interaction behaviour on all pages**. Take these from it:

- Scroll-triggered reveals (fade-up, stagger) on sections, cards and headings
- Hero entrance sequence and any hero visual effect
- Hover and tap feedback on buttons, cards and links
- Menu, drawer and page transitions
- Marquee/ticker-style strips (logos, technologies) if present
- Any Three.js visual: recreate the *type* of effect, sized to our performance budget

**Do not copy** its text, images, brand colours, logo, layout code or bundled assets. Recreate the motion with our own design, content and the pink/black/white palette. Record the specific effects to reproduce in `docs/motion-spec.md` (page, element, effect, duration, easing, library) before building, so the whole team builds the same thing.

**Performance exception and guardrails (overrides the lean-JS rules only for these items):**
1. Three.js scene loads with `next/dynamic` (`ssr: false`), only after the hero is painted (`requestIdleCallback`), and only on one page section.
2. It is **not** loaded on mobile/low-power devices or when `prefers-reduced-motion` is set; a static image is shown instead. The static image is the LCP element.
3. Motion uses `LazyMotion` (about 5 KB for `domAnimation`), and animation lives in small client components (`Reveal`, `Stagger`, `HoverCard`) wrapping server-rendered content, so pages stay statically generated.
4. Animate `transform` and `opacity` only. Durations 150-300 ms for interactions, up to about 700 ms for entrance.
5. Every animation respects `prefers-reduced-motion` (use `useReducedMotion` from `motion/react`).
6. The Lighthouse targets in section 1 still apply. If the 3D scene pushes mobile below 95, remove it before removing other work.

### 2.3 Node.js project quick start

Requirements: Node 22 LTS (20 also supported), npm or pnpm, Git, a Supabase project (staging first).

```bash
# 1. Node version
echo "22" > .nvmrc && nvm use

# 2. Scaffold Next.js + Payload 3 (choose: blank template, PostgreSQL)
npx create-payload-app@latest webizsquare
cd webizsquare

# 3. Runtime dependencies
npm i motion three @react-three/fiber lucide-react \
      react-hook-form zod @hookform/resolvers \
      @payloadcms/plugin-seo @payloadcms/plugin-redirects \
      @payloadcms/storage-s3 @upstash/ratelimit @upstash/redis \
      sharp resend
# optional
npm i @react-three/drei lenis next-themes @payloadcms/plugin-search @payloadcms/plugin-nested-docs

# 4. Dev dependencies
npm i -D @types/three prettier husky lint-staged

# 5. Environment
cp .env.example .env.local     # fill values from section 6

# 6. Run
npm run dev                    # site at http://localhost:3000, admin at /admin
```

Checks before your first commit: `npm run build` passes, `/admin` lets you create the first user, and the app connects to Supabase through the session pooler (section 3.2). Payload's scaffolding and package names change between releases, so confirm the exact commands against the current Payload docs (payloadcms.com/docs) when you run them.

Suggested `package.json` scripts: `dev`, `build`, `start`, `lint`, `typecheck` (`tsc --noEmit`), `generate:types` (`payload generate:types`), `migrate` (`payload migrate`), `migrate:create` (`payload migrate:create`). Add `"engines": { "node": ">=20 <23" }`.

### 2.4 Local development on your laptop (Antigravity)

The whole website is built and tested on your laptop first, using the Antigravity application as the code editor/AI assistant. Nothing needs to be online until the site passes local testing.

**Laptop setup**
- Install Node 22 LTS (via `nvm`), Git, and optionally Docker Desktop (for a local Postgres).
- Open the project folder in Antigravity. Copy this plan into the repo as `docs/PLAN.md` (and keep `docs/motion-spec.md` beside it) so the AI assistant always has the requirements, palette rule and performance budget in front of it.
- Give the assistant small, page-by-page tasks (as you are doing for the redesign) and review each result in the browser before moving on.
- Commit to Git after every working page, even before GitHub exists (`git init` locally).

**Local environment (`.env.local`)**

| Item | Local value |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3000` |
| Database | **Option A (simplest):** a free Supabase *development* project, session-pooler URL in `DATABASE_URI`. **Option B (offline):** local Postgres in Docker, e.g. `postgres://postgres:postgres@localhost:5432/webiz` |
| Media | `MEDIA_STORAGE=local` writes to a folder on your laptop (e.g. `~/webiz-data/site-media`). Switch to `s3` with a Supabase *development* bucket only when testing the live storage path |
| Email (Resend/Brevo) | Leave empty; log emails to the console in development |
| Cloudflare Turnstile | Use Cloudflare's published test keys locally |
| GTM / Clarity / Meta Pixel | Leave empty locally so test traffic never reaches analytics |
| `robots` | `noindex` everywhere except production |

**Local test routine (run before every push)**
1. `npm run lint && npm run typecheck && npm run build && npm start` (test the *production* build, not only `npm run dev`)
2. Click through every page at 375 px, 768 px and 1280 px, in light and dark mode, with reduced motion on and off
3. Submit each form; confirm the lead appears in `/admin` and the thank-you page loads
4. Run Lighthouse (mobile) on the home page and one service page against `localhost`; fix anything under 95
5. Check the browser console is clean and there are no broken links or missing images

Test on your phone over the same Wi-Fi with `http://<laptop-ip>:3000` (allow it in the firewall).

### 2.5 Going live later: what you need (Version 2)

Do these only after the local site is finished. Order matters.

| Step | Tool | What you need |
|---|---|---|
| 1. Source control | **GitHub** | Account, private repo, `main` (production) and `staging` branches, branch protection. Never commit `.env` files. |
| 2. Database and media | **Supabase** | Two projects (staging, production; Mumbai or Singapore). Runtime connection through the transaction pooler; migrations through the session pooler. Two storage buckets per project: `site-media` (public) and `private-uploads` (private). S3 access keys generated in Supabase. Data API off for the `payload` schema. Keep-alive workflow (section 3.1). |
| 3. Hosting | **Vercel** | Account, GitHub repo imported, Node 22, region near Supabase (e.g. Mumbai), environment variables set separately for Production and Preview (section 15). Use Pro for the live business site (see the note at the top). |
| 4. CI | **GitHub Actions** | Lint, typecheck and tests on every push; scheduled keep-alive and backups; production database migrations. Secrets stored in GitHub Secrets. |
| 5. Email | **Resend or Brevo** | Account and a verified sending domain (SPF, DKIM, DMARC records added at your DNS provider). |
| 6. Spam and rate limiting | **Cloudflare Turnstile** (standalone, free) and **Upstash Redis** (free) | Turnstile site and secret keys; Upstash REST URL and token. |
| 7. Analytics | **GTM, GA4, Search Console, Clarity** | IDs added as production environment variables; sitemap submitted after launch. |
| 8. Domain | **Registrar DNS** | Add `webizsquare.com` in Vercel and create the DNS records Vercel shows. Lower TTL a day before the switch. |
| 9. Content | **Migration** | Load the 301 redirect map (section 16) into the Redirects collection before switching DNS. |
| 10. Cutover | All | Launch checklist (section 19). Keep WordPress untouched for at least 30 days. |

**Not used for now:** Hostinger and Cloudflare (DNS, proxy, WAF, R2). Add Cloudflare later if you want a WAF or extra caching in front of Vercel.

**Moving local data to live:** the schema moves through migrations; content is seeded or re-entered; media is uploaded through the live admin (or a one-off script to the Supabase bucket). Never copy local `.env` files anywhere.

---

## 3. Supabase free tier: what to know before you commit

Free tier limits (verified July 2026, recheck at supabase.com/pricing before launch):

| Limit | Free tier | Impact on your site |
|---|---|---|
| Database size | 500 MB | Plenty for pages, posts, leads (text is tiny). Do NOT store images in the DB |
| File storage | about 1 GB | **Used for media (v2).** Keep images small (section 3.4) |
| Egress | 5 GB / month | Only database traffic counts now, which is tiny because pages are pre-built |
| Projects | 2 active | Use 1 for production, 1 for staging |
| **Inactivity** | **Project pauses after 7 days idle** | **Biggest risk. See below** |
| Backups | No daily backups on free | Do your own (section 17) |

### 3.1 The pause problem (critical)
Because the site is statically generated, the database may go days without a query. A paused project takes the admin and forms down until you restore it manually.

**Mitigations (do all):**
1. A **keep-alive job**: GitHub Actions cron every 3 days runs `SELECT 1` against the database.
2. Form submissions and admin logins also count as activity.
3. **Plan to upgrade to Pro ($25/month) once leads become business-critical.** Pro removes pausing and adds daily backups. Treat free tier as a launch-phase choice, not a permanent one.

### 3.2 Connection details for Vercel
- Vercel runs your app as short-lived serverless functions, so use Supabase's **transaction pooler** (port 6543, IPv4-compatible) for the runtime `DATABASE_URI`. Keep the pool tiny (`max: 1` to `3`) and disable prepared statements if the driver requires it for transaction mode.
- Run **migrations** with the **session pooler** (port 5432) using a separate `DATABASE_URI_MIGRATIONS`, from GitHub Actions or your laptop, not from every preview build.
- Pick the Vercel function region closest to the Supabase region (for example Mumbai for both).
- Preview deployments must use the **staging** Supabase project, never production.

### 3.3 Security of the Supabase project
- Put all Payload tables in a **dedicated schema** (`schemaName: 'payload'` in the Postgres adapter) that is **not exposed** in Supabase's Data API settings.
- Disable the auto-generated REST/GraphQL API for that schema. All access goes through Payload.
- Enable RLS on any table you create in `public`. Never ship the `service_role` key to the browser.
- Store the connection string only in server environment variables.
- Choose the **Mumbai (ap-south-1)** or **Singapore** region for lowest latency to India.

### 3.4 Media storage: Supabase Storage (Version 2)

**Decision:** Vercel functions have no persistent disk, so uploads go to **Supabase Storage** through Payload's S3 adapter (`@payloadcms/storage-s3`). The database stays in the same Supabase project.

**Buckets**
- `site-media` (public): images, logos, case study screenshots, blog covers, public PDFs
- `private-uploads` (private): job application resumes; downloaded only through an authenticated admin route that creates short-lived signed URLs

**How it works**
- **Stable URLs:** the site uses `/uploads/...` paths; `next.config` rewrites `/uploads/*` to the public bucket URL. If you later move media (Vercel Blob, Cloudflare R2, another host), URLs do not change.
- **File names:** `slug-<short-hash>.webp`; upload with `Cache-Control: public, max-age=31536000, immutable`.
- **Sizes:** originals capped, resized to max 2560 px, plus WebP variants (about 320, 640, 960, 1280, 1920 px) generated with `sharp`. Use a small custom image loader that picks the closest pre-generated size, so Vercel's image optimization quota is not consumed.
- **Upload limit:** Vercel limits request bodies to about 4.5 MB, so keep uploads at or under 4 MB, or enable the adapter's direct-to-storage (client) uploads if larger files are needed. Verify current limits in Vercel docs.
- **Legacy WordPress images:** upload the old `wp-content/uploads` folder under a `legacy/` prefix in `site-media`, and rewrite `/wp-content/uploads/*` to it (section 16.1), so old image URLs keep working.

**Limits to respect (Supabase free tier)**
1. About 1 GB storage and 5 GB monthly egress, shared with the database. Keep the hero under 100 KB and total media lean. Monitor usage monthly.
2. When you outgrow it: Supabase Pro (larger storage), Vercel Blob, or Cloudflare R2 through the same adapter.
3. Backups: media is not in the database backup, so copy the buckets off-site on a schedule (section 17).
4. Confirm Payload's S3 adapter options and Supabase's S3 endpoint settings in their current docs when you set this up.

---

## 4. System architecture

```
Visitor -> Vercel (CDN, HTTPS, firewall)
              |
              v
      Vercel serverless functions
      +--------------------------------------+
      |  Next.js app                         |
      |   - Public site (SSG/ISR pages)      |
      |   - API routes / Server Actions      |
      |   - Payload CMS (/admin)             |
      +--------------------------------------+
              |                    |
              v                    v
   Supabase Postgres        Supabase Storage
   (schema: payload)        (site-media public, private-uploads private)
              |
              +--> Resend/Brevo (email)
              +--> Upstash Redis (rate limiting)
              +--> WhatsApp (click-to-chat, later Cloud API)
              +--> GA4 / GTM (events via dataLayer)
```

**Rendering strategy**
- Marketing pages, services, locations, case studies, blog: **static generation with on-demand revalidation**. When you publish in the dashboard, an `afterChange` hook calls `revalidatePath`/`revalidateTag` so the page updates within seconds.
- Forms and dashboard: dynamic server code.
- Result: visitors get pre-built HTML from the CDN edge, so pages load almost instantly.

---

## 5. Repository structure

```
webizsquare/
├─ src/
│  ├─ app/
│  │  ├─ (site)/                 # public website
│  │  │  ├─ page.tsx             # home
│  │  │  ├─ [slug]/page.tsx      # generic pages
│  │  │  ├─ services/[slug]/page.tsx
│  │  │  ├─ locations/[slug]/page.tsx
│  │  │  ├─ portfolios/page.tsx
│  │  │  ├─ portfolios/[slug]/page.tsx
│  │  │  ├─ blogs/page.tsx
│  │  │  ├─ blogs/[slug]/page.tsx
│  │  │  ├─ blogs/category/[slug]/page.tsx
│  │  │  ├─ career/page.tsx
│  │  │  └─ contact/page.tsx
│  │  ├─ (payload)/admin/        # Payload admin
│  │  ├─ api/
│  │  │  ├─ lead/route.ts        # form submissions
│  │  │  ├─ whatsapp-click/route.ts
│  │  │  ├─ revalidate/route.ts
│  │  │  └─ health/route.ts      # keep-alive target
│  │  ├─ sitemap.ts
│  │  ├─ robots.ts
│  │  └─ not-found.tsx
│  ├─ collections/               # Payload collections
│  ├─ globals/                   # Payload globals
│  ├─ blocks/                    # page-builder blocks
│  ├─ components/                # UI components
│  │  └─ motion/                 # Reveal, Stagger, HoverCard, PageTransition, HeroScene (lazy Three.js)
│  ├─ lib/                       # helpers: seo, schema, analytics, rate-limit
│  ├─ hooks/                     # Payload hooks
│  └─ payload.config.ts
├─ docs/motion-spec.md           # effects to reproduce from the reference site
├─ .nvmrc                        # Node 22
├─ public/                       # favicon, manifest.webmanifest, static assets
├─ .github/workflows/            # ci.yml, keepalive.yml, backup.yml
├─ .env.example
└─ next.config.ts
```

---

## 6. Environment variables (`.env.example`)

```
# Core
NEXT_PUBLIC_SITE_URL=https://webizsquare.com
PAYLOAD_SECRET=<long random string>
DATABASE_URI=<Supabase transaction pooler string>

# Storage: local for development, s3 (Supabase Storage) for staging and production
MEDIA_STORAGE=local
MEDIA_DIR=~/webiz-data/site-media            # local only
PRIVATE_UPLOADS_DIR=~/webiz-data/private-uploads   # local only
S3_ENDPOINT=<Supabase S3 endpoint>
S3_REGION=<project region>
S3_ACCESS_KEY_ID=...
S3_SECRET_ACCESS_KEY=...
S3_BUCKET_PUBLIC=site-media
S3_BUCKET_PRIVATE=private-uploads
MEDIA_PUBLIC_URL=/uploads
DATABASE_URI_MIGRATIONS=<Supabase session pooler string>

# Rate limiting
UPSTASH_REDIS_REST_URL=...
UPSTASH_REDIS_REST_TOKEN=...

# Email
RESEND_API_KEY=...
LEAD_NOTIFY_EMAIL=info@webizsquare.com

# Security
TURNSTILE_SITE_KEY=...
TURNSTILE_SECRET_KEY=...
REVALIDATE_SECRET=<random>

# Tracking (also editable in the dashboard Site Settings)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

Never commit `.env`. Set production values in Vercel (Project → Settings → Environment Variables), separately for Production and Preview.

---

## 7. Development phases (start to finish)

Estimated total: **6 to 8 weeks** for one developer working full time. Adjust for content volume.

### Phase 0: Discovery and strategy (Week 1, days 1-3)
- [x] URL inventory from your Rank Math sitemaps (42 URLs) and a full crawl (94 URLs), section 8.1
- [ ] Audit current site: confirm nothing is missing from the sitemaps (crawl with Screaming Frog free, up to 500 URLs), export existing rankings (Search Console) and top pages (GA4)
- [ ] Export all current content, images, blog posts, metadata
- [ ] Competitor review: 5 to 8 top agencies in Nashik, India and target countries
- [ ] Keyword research (Search Console data, Google Keyword Planner, free Ubersuggest limits)
- [ ] Define target audiences and markets (India, UAE/GCC, UK, USA, Australia)
- [ ] Decide brand tone, USP, and conversion goals
- **Deliverable:** Keyword map (keyword -> page), URL list, content inventory

### Phase 1: Information architecture and design (Week 1-2)
- [ ] Final sitemap (section 8)
- [ ] Wireframes for every template (home, service, location, case study, blog, contact)
- [ ] Design system: colors, typography (2 fonts max, self-hosted), spacing, buttons, cards, forms
- [ ] High-fidelity design for desktop and mobile (mobile first)
- [ ] Conversion design: sticky header CTA, WhatsApp button, exit-intent-free (avoid intrusive popups), trust bars
- [ ] Accessibility check: color contrast AA, focus states, alt text
- **Deliverable:** Approved design and component list

### Phase 2: Project setup (Week 2)
- [ ] Follow sections 2.3 and 2.4 to scaffold the Node.js project locally and commit the baseline
- [ ] Create GitHub repo, branches (`main`, `staging`), protect `main`
- [ ] Create Supabase projects (production, staging), Mumbai/Singapore region
- [ ] Create Supabase Storage buckets `site-media` (public) and `private-uploads` (private) on staging; confirm uploads and signed URLs work from the app
- [ ] Scaffold Next.js + Payload, connect to Supabase via session pooler
- [ ] Configure dedicated `payload` schema, disable Data API exposure
- [ ] ESLint, Prettier, Husky pre-commit, TypeScript strict mode
- [ ] Import the GitHub repo into Vercel; set Preview environment variables to the staging Supabase project
- [ ] Use the `staging` branch's Vercel preview URL as the staging site; add `noindex` and Vercel Deployment Protection
- **Deliverable:** Empty app running on staging with a working `/admin`

### Phase 3: Admin dashboard and data model (Week 2-3)
- [ ] Build all collections and globals (section 10)
- [ ] Roles and access control
- [ ] Block-based page builder
- [ ] SEO plugin, redirects plugin
- [ ] Draft/publish, version history, live preview
- [ ] `afterChange` revalidation hooks
- [ ] Custom dashboard home (lead stats, quick links)
- [ ] Lead management views and CSV export
- **Deliverable:** Fully working admin. Content team can create every page type

### Phase 4: Frontend build (Week 3-5)
- [ ] Write `docs/motion-spec.md` from the influencio.in reference (page, element, effect, duration, library)
- [ ] Build reusable motion components (`Reveal`, `Stagger`, `HoverCard`, `PageTransition`) with `motion` + `LazyMotion`
- [ ] Optional Three.js hero scene: lazy, desktop only, static-image fallback, re-run Lighthouse after adding
- [ ] Layout: header (mega menu), footer, announcement bar, breadcrumbs
- [ ] Reusable blocks (section 9.3)
- [ ] All page templates (section 9.4)
- [ ] Forms with validation, Turnstile, success states
- [ ] Image component with WebP/AVIF, responsive sizes, lazy loading
- [ ] 404, 500, maintenance pages
- [ ] Dark mode is optional; skip unless the design needs it
- **Deliverable:** All templates populated with real content on staging

### Phase 5: SEO and technical layer (Week 5)
- [ ] Metadata API for every template (title, description, canonical, OG, Twitter)
- [ ] JSON-LD schema (section 12)
- [ ] `sitemap.ts` (dynamic, split by type), `robots.ts`
- [ ] Redirect map from old WordPress URLs (section 16)
- [ ] hreflang if multi-language later (not needed at launch)
- [ ] Internal linking rules and related-content blocks
- [ ] OG image generation for blog posts (`next/og`)
- [ ] Build the SEO panel in the dashboard and load the keyword map (section 24.1 and 24.2)
- [ ] Implement IndexNow pings on publish/update (section 24.3)
- **Deliverable:** SEO checklist passes on all templates

### Phase 6: Integrations and tracking (Week 5-6)
- [ ] GTM container installed (loaded after interaction for speed)
- [ ] GA4 through GTM, with events (section 13)
- [ ] Search Console verification (DNS TXT record), sitemap submitted
- [ ] Microsoft Clarity
- [ ] Google Business Profile linked
- [ ] Email notifications and auto-reply
- [ ] WhatsApp click-to-chat and click logging
- [ ] Consent banner (only if you target EU/UK visitors; required for GDPR)
- **Deliverable:** Test lead flows end to end, verified in GA4 DebugView

### Phase 7: Security hardening and performance tuning (Week 6)
- [ ] Security headers, CSP, rate limiting, Turnstile (section 14)
- [ ] 2FA for admin users, strong password policy
- [ ] Dependency audit (`npm audit`)
- [ ] Performance pass: bundle analysis, remove unused JS, font subsetting, image audit
- [ ] Load test key pages and the lead API (k6 or autocannon)
- **Deliverable:** Lighthouse 95+ mobile on all templates, security checklist done

### Phase 8: Content migration and QA (Week 6-7)
- [ ] Import/rewrite content. **Rewrite, do not copy-paste, thin content** (start with the 12 blog posts and the 2022-era service pages; use Search Console data to decide what to keep, merge or drop)
- [ ] Upload the old `wp-content/uploads` folder to the `legacy/` prefix in `site-media` and add the `/wp-content/uploads/*` rewrite (section 16.1)
- [ ] Re-upload the 2026 company profile PDF under a clean file name (for example `company-profile-2026.pdf`) and link it from the About page and footer
- [ ] Add real case studies, real client logos, real testimonials, honest stats (replace "0+ Years" and "7+ Clients" style placeholders)
- [ ] Full QA (section 18)
- [ ] Client/owner review and sign-off
- **Deliverable:** Approved staging site

### Phase 9: Launch (Week 7-8)
- [ ] Final backup of the WordPress site (files + DB)
- [ ] Deploy to production on Vercel, add the domain, switch DNS
- [ ] Verify all 301 redirects
- [ ] Remove `noindex`, submit sitemap in Search Console
- [ ] Use URL Inspection to request indexing of top pages
- [ ] Monitor errors and Search Console for 48 hours
- **Deliverable:** Live site and launch report

### Phase 10: Post-launch growth (ongoing)
See sections 20 and 24 (advanced SEO, off-page and backlink plan).

---

## 8. Sitemap

### 8.1 Current site inventory (from your Rank Math sitemaps)

| Sitemap | URLs | What it contains |
|---|---|---|
| Pages | 10 | Home, About, Contact, Career, Services, Portfolios, Messages, ERP Subscription, Privacy Policy, Terms & Conditions |
| Services (custom post type) | 10 | `/service/` hub plus 9 service pages |
| Blog posts | 13 | `/blogs/` hub plus 12 posts |
| Categories | 9 | Business, UI/UX Design, SEO, SMO, Application Development, ERP, Hosting, Software Development, Google Services |
| **Total** | **42** | |

**What the inventory tells us**
- **The site is small.** Only about 10 pages can realistically rank for client-intent keywords. Adding more genuinely useful pages is likely a bigger ranking lever than the technology change alone.
- **Content is old.** Service pages were last modified in Dec 2022. All 12 blog posts were last modified on 31 Aug 2023 within about two hours, and every title follows the same "... with Webiz Square" pattern. That usually points to templated, thin content. Check Search Console (Performance, Pages) to see which of them get impressions before deciding what to keep.
- **Duplicate hubs:** both `/service/` and `/services/` exist. The new site keeps one, `/services/`.
- **Category archives are thin** (no content of their own). The new site consolidates 9 categories into 5.
- **The home page lists 40 images**, which is heavy. The new home page should use about 12 or fewer.
- **robots.txt is the WordPress default.** It only blocks `/wp-admin/` and points to `sitemap_index.xml`, so nothing is being blocked by mistake. See section 12.1 for the new version.
- **All current URLs end with a trailing slash**, so the new site uses `trailingSlash: true` to avoid duplicate versions of every URL.
- **Second source: a full crawl (`sitemap.xml`, 94 URLs).** It contains 56 real pages plus 38 WordPress feed URLs (`*/feed/`), which are junk and should return 410 on the new site. The crawl found things the Rank Math sitemaps did not:
  - **13 tag archives** (google-business-listing, software-development, website-hosting, erp-software-development, application-development, social-media-optimization, seo, graphic-design, website-development, website-migration, electrical, dentist, medical-website)
  - `/blogs/page/2/` (blog pagination)
  - **A 2026 company profile PDF** in the uploads folder, which must keep working
  - An author archive feed
- **What the crawl missed:** `/erp-subscription/` is in the Rank Math sitemap but the crawler never found it, which suggests no page on the site links to it (an orphan page). Either link it from the ERP service page and footer or merge it into the ERP page.
- The `lastmod` dates of 2026-09-29 in the crawl are just the crawl date, not real edit dates. The Rank Math dates above are the accurate ones.

### 8.2 New site: pages to build

**Core**
- Home
- About Us (story, team, values, certifications)
- Services (overview)
- Portfolio / Case studies
- Blogs (hub at `/blogs/`, posts, categories)
- Contact
- Career (`/career/`, existing slug kept)
- ERP Subscription (existing page, URL kept; review whether it should merge into the ERP service page)
- Privacy Policy, Terms & Conditions, Cookie Policy, Refund/Cancellation (if relevant)

**Service pages (one page each, 1,000+ words of useful content, FAQs, process, pricing hints, related case studies)**
- Website Development
- E-commerce Development
- ERP / Custom Software Development
- Mobile App Development
- Web Design (UI/UX)
- SEO Services
- Social Media Marketing
- Digital Marketing / Google Ads
- Bulk SMS / WhatsApp Business API (your existing offering)
- Website Maintenance and Hosting

Keep the existing service slugs (`website-development`, `application-development`, `software-development`, `erp-software-development`, `search-engine-optimization`, `social-media-optimization`, `graphics-designing`, `website-hosting`) and add new ones (for example `ecommerce-development`, `bulk-sms-whatsapp-api`, `google-ads-ppc`) so no ranking history is lost. All service pages move under `/services/`.

**Location pages (only where you can add real local value)**
- Web development company in Nashik
- Nashik, Pune, Mumbai, Ahmedabad (India)
- GCC page (link to your GCC landing)
- Optional: UK, USA, Australia

**Industry pages (optional, phase 2)**
- Manufacturing, Logistics, Agriculture/Export, Real Estate, Healthcare, Education

Avoid near-duplicate location pages. Each must have unique content, local proof and unique FAQs, or Google will treat them as doorway pages.

---

## 9. Frontend details

### 9.1 Design principles
- Mobile first, fast first: no auto-playing video in the hero, no heavy sliders
- One clear H1 per page, one primary CTA per section
- Visible trust signals above the fold: client logos, rating, years, project count (real numbers only)
- 2 fonts maximum, self-hosted via `next/font`, `display: swap`
- Palette: brand pink `#ff5987`, black and white only (section 2.1)
- Motion language follows the influencio.in reference (section 2.2); animation is purposeful, uses `transform`/`opacity`, and respects reduced motion

### 9.2 Global components
- Header with mega menu (Services), sticky, phone and "Get a Quote" CTA
- Footer: services, locations, company links, NAP (name, address, phone), social links
- Announcement bar (controlled from dashboard)
- Floating WhatsApp button (logs click, adds GA4 event)
- Breadcrumbs (with BreadcrumbList schema)
- Cookie/consent banner (conditional)
- Back-to-top, skip-to-content link

### 9.3 Page-builder blocks (all editable in the dashboard)
Hero, Rich text, Services grid, Feature list, Process steps, Stats counters, Client logos, Testimonials, Case study grid, Blog list, Pricing/packages, FAQ (with FAQ schema), CTA banner, Contact form, Team, Image + text, Video embed (lazy, click to load), Tabs, Comparison table, Tech stack icons, Map embed (click to load)

### 9.4 Templates
| Template | Key content |
|---|---|
| Home | Hero + primary CTA, services, why us, process, case studies, testimonials, logos, blog, CTA |
| Service | Intro, benefits, deliverables, process, tech, case studies, pricing guidance, FAQ, related services, CTA |
| Location | Local intro, services offered there, local proof, map, FAQ |
| Case study | Client, problem, solution, tech, results with numbers, screenshots, testimonial |
| Blog post | Title, author, date, TOC, body, related posts, CTA, author schema |
| Contact | Form, phone, email, WhatsApp, address, map, office hours |
| Careers | Openings list, job detail, application form with resume upload |

### 9.5 Performance rules
- Use `next/image` with explicit width/height (no layout shift), `priority` only on the hero image
- Hero image: AVIF/WebP, under 100 KB
- Media is served from `/uploads/` (rewritten to Supabase Storage) with 1-year immutable cache headers. Payload creates resized WebP versions on upload with `sharp`, and a small custom image loader picks the closest size, so Vercel's image optimization quota is not used
- The current home page lists 40 images; keep the new home page to about 12 or fewer
- No client-side JS on static sections (React Server Components by default; `"use client"` only where needed). Animation is the exception: it lives in small client wrapper components (`Reveal`, `Stagger`) around server-rendered content, using `LazyMotion`. The optional Three.js scene follows the guardrails in section 2.2
- Load GTM and Clarity after first interaction or with `requestIdleCallback`
- Preconnect only to domains actually used
- Set long cache headers (`Cache-Control: public, max-age=31536000, immutable`) for hashed assets
- Keep total JS per page under about 150 KB compressed
- Use ISR with on-demand revalidation so Vercel's CDN serves pre-built HTML

---

## 10. Admin dashboard: collections, globals, fields

### 10.1 Roles and permissions
| Role | Can do |
|---|---|
| Super Admin | Everything, including users, settings, deleting |
| Editor | Create and edit content, cannot touch users or settings |
| Sales | View and update leads only, cannot edit site content |
| Viewer | Read-only |

Enable **2FA** and restrict `/admin` with strong passwords, rate limiting, and (if your Vercel plan supports it) firewall rules or an IP allowlist.

### 10.2 Collections

**Users**: name, email, role, avatar, last login

**Media**: file, alt text (required), caption, focal point. Auto-generate sizes and convert to WebP. Stored in Supabase Storage (section 3.4). Images and PDFs only (allowlist), max 4 MB per file because of Vercel's request-size limit.

**Pages**: title, slug, layout (blocks), hero settings, SEO group, status (draft/published), publish date, parent (optional)

**Services**: title, slug, short description, icon, hero image, layout blocks, FAQs, related services, related case studies, SEO, order

**Locations**: city, country, slug, intro, services offered, local proof, FAQs, map coordinates, SEO

**CaseStudies**: title, slug, client name, industry, challenge, solution, results (metrics), technologies, gallery, testimonial, live URL, SEO

**Posts**: title, slug, excerpt, cover image, body (rich text), categories, tags, author, reading time (auto), related posts, SEO, published date, updated date, status

**Categories / Authors**: name, slug, bio, photo, social links (Author also used for E-E-A-T schema)

**Testimonials**: name, company, role, photo, rating, text, source (Google/Clutch/direct), featured flag

**Clients**: name, logo, website, order

**Team**: name, role, photo, bio, social links, order

**Jobs**: title, location, type, description, requirements, status, closing date
**JobApplications**: job, name, email, phone, resume (private file, never publicly accessible), message, status

**Leads (Enquiries)**: see 10.3

**Subscribers** (newsletter): email, source, subscribed date, status

**Redirects**: from, to, type (301/302), enabled. Import from CSV.

### 10.3 Leads collection (core business feature)
| Field | Notes |
|---|---|
| name, email, phone, company | Required: name and (email or phone) |
| service interested | Select from Services |
| budget range, timeline | Optional selects |
| message | Text |
| source type | `contact_form`, `quote_form`, `whatsapp_click`, `call_click`, `newsletter`, `career` |
| status | New, Contacted, Qualified, Proposal sent, Won, Lost, Spam |
| assigned to | Relation to Users |
| priority | Low/Medium/High |
| follow-up date | Date, with dashboard reminder list |
| notes / activity log | Internal notes with timestamps |
| value | Expected project value (for reporting) |
| UTM fields | source, medium, campaign, term, content |
| gclid / fbclid | Captured from URL for ad attribution |
| landing page, referrer | For attribution |
| country | From the `x-vercel-ip-country` header |
| device | Mobile / desktop |
| consent | Timestamp and text of consent |
| IP (hashed) | Hashed only, for spam and duplicate detection |
| created at | Auto |

**Lead dashboard features**
- List view with filters: status, source, service, date, assignee, country
- Search by name, email, phone
- Bulk status change, bulk assign
- Duplicate detection (same email/phone in the last 30 days: link, do not create a new lead)
- Auto-spam scoring (honeypot triggered, disposable email, links in message)
- CSV export (Sales/Super Admin only)
- Email alert on every new lead
- Optional daily digest email of new and overdue follow-ups

### 10.4 Globals
- **Site Settings:** site name, logo (light/dark), favicon, phone, email, WhatsApp number, address, business hours, social links, GTM ID, GA4 ID, Search Console meta tag, Clarity ID, custom head/body scripts (Super Admin only, with warning)
- **Header:** menu items with nested mega-menu, CTA button
- **Footer:** columns, links, legal text, copyright
- **SEO Defaults:** default title template, default OG image, default meta description, robots directives
- **Announcement Bar:** text, link, dates, enabled toggle
- **Forms Settings:** notification emails, auto-reply template, success message, spam settings
- **Schema Settings:** organization details, sameAs links, founder, area served

### 10.5 Editor experience
- Live preview while editing, draft/publish workflow, scheduled publishing
- Version history and one-click restore
- SEO fields on every page with a live snippet preview, character counters, and a pass/fail on-page checklist (section 24.2)
- Validation: required alt text, meta title under 60 characters, description under 160 characters
- After publish: automatic cache revalidation (page + related lists + sitemap)

### 10.6 Custom dashboard home
- Cards: new leads today / this week / this month, conversion by source, top services requested
- Overdue follow-ups list
- Recent activity (who edited what)
- Quick links: create page, new post, view site, Search Console, GA4
- Health checks: last backup time, last keep-alive ping, DB size vs 500 MB limit, media disk used vs 50 GB

---

## 11. The lead flow (end to end)

1. **Visitor** fills the form (or clicks the WhatsApp button)
2. **Client side:** Zod validation, Turnstile token, honeypot field, hidden UTM/gclid fields populated from the URL and stored in `sessionStorage`
3. **Submit** to `POST /api/lead` (or a Server Action)
4. **Server checks:**
   - Verify Turnstile token with Cloudflare's siteverify API (works without a Cloudflare proxy)
   - Re-validate input with the same Zod schema
   - Rate limit (e.g. 5 requests per IP per 10 minutes) with Upstash Redis (`@upstash/ratelimit`); in-memory limits do not work on serverless
   - Honeypot and spam heuristics
   - Sanitize all text
5. **Save** lead in Postgres via Payload (status `New`, attribution fields filled)
6. **Notify:** email to sales inbox (Resend/Brevo) and an auto-reply to the visitor
7. **Optional:** WhatsApp Business Cloud API message to you, or a Slack/Telegram webhook
8. **Respond** with success. Client pushes `generate_lead` to the `dataLayer` (with form name and service, no personal data) and shows a thank-you state or redirects to `/thank-you` (noindex)
9. **Admin:** Sales team follows up, updates status and notes in the dashboard
10. **Reporting:** Won leads feed the "leads to clients" metric

**WhatsApp click flow**
1. Visitor clicks the floating button (`https://wa.me/<number>?text=<prefilled message with page name>`)
2. Before opening, `POST /api/whatsapp-click` logs a `whatsapp_click` lead-lite record (page, UTM), and a `whatsapp_click` GA4 event fires
3. Real enquiries then arrive in your WhatsApp; the dashboard shows click counts per page so you know which pages drive conversations

---

## 12. Technical SEO specification

> This section covers the technical and per-page basics. The full advanced SEO playbook (keyword strategy, on-page checklist, off-page and backlink plan, local and international SEO, measurement) is in **section 24**.

**Per-page**
- Unique title (under 60 chars) and meta description (under 160 chars), canonical URL, OG and Twitter tags
- One H1, logical H2/H3 hierarchy
- Descriptive alt text on every image
- Internal links: each service page links to related services, case studies and posts; each post links to a service page

**Structured data (JSON-LD)**
| Type | Where |
|---|---|
| Organization / LocalBusiness (or ProfessionalService) | Site-wide (with sameAs, address, phone, logo) |
| WebSite (with SearchAction if you add search) | Home |
| BreadcrumbList | All inner pages |
| Service | Service pages |
| FAQPage | Pages with an FAQ block (note: Google now shows FAQ rich results only for limited sites, but the markup still helps understanding) |
| Article / BlogPosting + Person (author) | Blog posts |
| Review / AggregateRating | Only with genuine, verifiable reviews |
| JobPosting | Careers |

Validate with Google's Rich Results Test and schema.org validator.

**Crawl and index**
- `sitemap.xml` (index) plus separate sitemaps: pages, services, locations, posts, case studies. Include `lastmod`
- `robots.txt`: see section 12.1
- Clean, lowercase, hyphenated URLs; no trailing-slash duplicates (pick one style)
- Pagination with proper canonicals; noindex tag/filter pages that add no value
- Custom 404 with helpful links; return real 404/410 status codes
- HTTPS everywhere, single canonical host (no `www` and non-`www` duplicates)

**12.1 robots.txt and sitemap continuity**

Your current robots.txt only blocks `/wp-admin/` and lists `sitemap_index.xml`. The new file (generated by `robots.ts`):

```
User-agent: *
Allow: /
Disallow: /admin
Disallow: /api/
Disallow: /thank-you/
Disallow: /*?s=

Sitemap: https://webizsquare.com/sitemap.xml
```

- **Staging** must use `Disallow: /`, an `X-Robots-Tag: noindex` header, and password protection. Never let staging get indexed.
- Search Console already has `sitemap_index.xml` submitted. Keep that URL alive by redirecting it (and the old Rank Math sitemap URLs) to `/sitemap.xml`, then submit the new sitemap.
- After the move, `/wp-admin/` and `/wp-login.php` will not exist. Bots will keep probing them, so return 410 from Next.js middleware or a Vercel firewall rule.
- Decide deliberately about AI crawlers (for example GPTBot, ClaudeBot). Allowing them is the default and helps visibility in AI answers; block them only if you have a reason.

**Core Web Vitals**: monitor via Search Console, PageSpeed Insights and CrUX after launch. Fix regressions before adding new features.

**Content quality (what really moves rankings)**
- Original, experience-based content: real projects, real numbers, real screenshots
- Author pages with credentials
- Publish 2 to 4 useful posts per month targeting client-intent keywords (e.g. "ERP software cost for manufacturing in India", "WordPress vs custom website for business")
- Update older posts every 6 months
- Earn backlinks: directories (Clutch, GoodFirms, DesignRush), guest posts, client website footer credits, local business listings

---

## 13. Analytics and marketing integrations

| Tool | Setup | Notes |
|---|---|---|
| Google Tag Manager | Container in layout, IDs editable in Site Settings | All other tags go through GTM |
| GA4 | Installed via GTM | Mark key events as conversions |
| Search Console | DNS TXT verification, sitemap submitted | Check weekly: coverage, queries, CWV |
| Google Business Profile | Claim, verify, add services, photos, posts | Link the site, ask clients for reviews |
| Looker Studio | Free dashboard from GA4 + Search Console | Weekly SEO and lead report |
| Microsoft Clarity | Via GTM | Heatmaps and session recordings |
| Google Ads / Meta Pixel | Via GTM when running campaigns | Use `gclid` capture for offline conversion import |
| Cloudflare Web Analytics | Optional, cookie-free | Cross-check traffic |
| PageSpeed / CrUX | Scheduled checks | Track speed trend |

**GA4 events to implement (through `dataLayer`)**
`generate_lead` (form_name, service), `whatsapp_click`, `call_click`, `email_click`, `quote_form_start`, `quote_form_submit`, `cta_click` (label, location), `scroll_depth` (50%, 90%), `file_download`, `outbound_click`, `search`, `blog_read` (engaged), `career_apply`.

Mark `generate_lead`, `whatsapp_click`, `call_click` as **key events** in GA4.

**Privacy**: add a Privacy Policy, disclose cookies and tracking. For EU/UK visitors, use a consent banner with Google Consent Mode v2. In India, align with DPDP Act requirements (clear consent and purpose for collecting personal data).

---

## 14. Security specification

**Edge (Vercel; Cloudflare optional later)**
- HTTPS and HSTS enforced by Vercel
- Vercel Firewall / bot protection rules available on your plan; add custom rules for `/admin` and `/api/*` if supported
- Rate limiting on `/api/*` and login through Upstash Redis in the app
- Turnstile on all forms and the admin login
- If you add Cloudflare later: proxy on, SSL Full (strict), WAF managed rules

**Application**
- Security headers: `Content-Security-Policy` (restrictive, allow only GTM/GA/Clarity/Turnstile), `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`
- Server-side validation on every input (Zod), output escaping, parameterized queries (Payload/Drizzle handle this)
- File upload restrictions: type and size limits; only images and PDFs in the public media folder; resumes (PDF/DOCX) stored in a private storage bucket and served only to logged-in admins through short-lived signed URLs; only image and PDF types are accepted, so nothing uploaded can ever execute; images re-encoded with `sharp`
- CSRF protection via same-site cookies and origin checks on API routes
- Generic error messages (no stack traces in production)
- Admin: strong password rules, 2FA, session timeout, login attempt lockout, audit log of changes

**Infrastructure**
- Secrets only in environment variables, rotated on any staff change
- Supabase: private schema, Data API off for it, service role key never exposed
- Least privilege database role for the app
- Weekly `npm audit` and Dependabot alerts; patch Next.js and Payload promptly when security releases ship
- No unused plugins or packages (a smaller surface than WordPress plugins)

**Privacy and compliance**
- Store only the data needed. Hash IPs. Provide a way to delete a lead on request
- Privacy policy and consent text recorded with each lead

---

## 15. Deployment on Vercel (Version 2)

1. **Push to GitHub.** Vercel deploys from the repo: `main` = production, `staging` = stable preview, every pull request = its own preview URL.
2. **Import the project** in Vercel (framework: Next.js, Node 22). Do not set `output: 'standalone'`; Vercel handles the build output itself.
3. **Environment variables:** set them in Vercel for **Production** (production Supabase) and **Preview** (staging Supabase). Never reuse production keys in Preview.
4. **Migrations:** run `payload migrate` against the right database from GitHub Actions or your laptop before a release that changes the schema, not automatically on every preview build.
5. **Region:** choose the function region closest to Supabase (for example Mumbai). Payload and API routes run on the Node.js runtime, not Edge.
6. **Domain:** add `webizsquare.com` and `www` in Vercel, create the DNS records it shows at your registrar, and let it issue HTTPS. Lower the DNS TTL to 300 s a day before the switch.
7. **Revalidation:** Payload `afterChange` hooks call `revalidatePath`/`revalidateTag` so published edits appear within seconds.
8. **Rollback:** Vercel keeps previous deployments; promote an older one instantly if a release breaks. Keep the WordPress site intact for at least 30 days after cutover.
9. **Staging protection:** `noindex` header and `Disallow: /` on non-production, plus Vercel Deployment Protection where your plan allows.

**Serverless limits to design around** (check current numbers at vercel.com/docs/limits)
- Function execution time is capped (short on Hobby), so no long-running jobs; use scheduled GitHub Actions for heavy tasks.
- Request bodies are limited (about 4.5 MB), which is why uploads are capped at 4 MB or sent directly to storage.
- No persistent local disk; all uploads go to Supabase Storage.
- Cold starts can slow the first request to `/admin` or a form; static pages are unaffected.
- Free-plan bandwidth and usage quotas apply; monitor them in the Vercel dashboard.

---

## 16. Migrating from WordPress without losing rankings

1. Crawl the old site and export all URLs (pages, posts, categories, attachments)
2. Map every old URL to its new URL in a spreadsheet: `old_url, new_url, status`
3. Keep identical slugs wherever the page still makes sense (least risk)
4. Import the map into the **Redirects** collection as 301s
5. Retire URLs with no equivalent to the closest relevant page (never redirect everything to the home page)
6. Migrate all blog posts (rewrite or improve thin ones), keep publish dates, keep images with alt text
7. Preserve existing Search Console and GA4 properties (same domain, so no change)
8. After launch: crawl the new site, check for redirect chains, 404s and orphan pages
9. Monitor Search Console Coverage and Performance daily for the first two weeks; expect a small temporary fluctuation

### 16.1 Redirect map (built from your sitemaps)

Use one-hop 301 redirects. Load them into the **Redirects** collection with a seed script (CSV import) so editors can add more later. Keep trailing slashes.

**Pages**

| Old URL | New URL | Action |
|---|---|---|
| `/` | `/` | Keep |
| `/about/` | `/about/` | Keep |
| `/contact/` | `/contact/` | Keep |
| `/career/` | `/career/` | Keep |
| `/portfolios/` | `/portfolios/` | Keep |
| `/services/` | `/services/` | Keep (single services hub) |
| `/erp-subscription/` | `/erp-subscription/` | Keep (review merge into ERP page later) |
| `/privacy-policy/` | `/privacy-policy/` | Keep |
| `/terms-conditions/` | `/terms-conditions/` | Keep |
| `/messages/` | `/services/bulk-sms-whatsapp-api/` | 301 |

**Services**

| Old URL | New URL |
|---|---|
| `/service/` | `/services/` |
| `/service/all-it-services/` | `/services/` |
| `/service/website-development/` | `/services/website-development/` |
| `/service/application-development/` | `/services/application-development/` |
| `/service/software-development/` | `/services/software-development/` |
| `/service/erp-software-development/` | `/services/erp-software-development/` |
| `/service/search-engine-optimization/` | `/services/search-engine-optimization/` |
| `/service/social-media-optimization/` | `/services/social-media-optimization/` |
| `/service/graphics-designing/` | `/services/graphics-designing/` |
| `/service/website-hosting/` | `/services/website-hosting/` |

**Blog** (posts move from the root into `/blogs/` with shorter slugs; the hub `/blogs/` stays)

| Old URL | New URL |
|---|---|
| `/importance-of-a-business-website-with-webiz-square/` | `/blogs/importance-of-a-business-website/` |
| `/importance-of-a-dentist-website-with-webiz-square/` | `/blogs/importance-of-a-dentist-website/` |
| `/importance-of-an-electrical-website-with-webiz-square/` | `/blogs/importance-of-an-electrical-website/` |
| `/seamlessly-transition-your-digital-home-webiz-squares-website-migration-service/` | `/blogs/website-migration-service/` |
| `/unveiling-the-digital-canvas-the-power-of-graphics-designing-by-webiz-square/` | `/blogs/power-of-graphics-designing/` |
| `/navigating-the-digital-highway-the-importance-of-seo-in-business-growth/` | `/blogs/importance-of-seo-in-business-growth/` |
| `/elevate-your-social-presence-unraveling-social-media-optimization-with-webiz-square/` | `/blogs/social-media-optimization-guide/` |
| `/from-concept-to-reality-the-journey-of-application-development-with-webiz-square/` | `/blogs/application-development-journey/` |
| `/empowering-business-efficiency-unveiling-erp-software-development-with-webiz-square/` | `/blogs/erp-software-development-for-business/` |
| `/beyond-hosting-unraveling-the-essentials-of-website-hosting-with-webiz-square/` | `/blogs/website-hosting-essentials/` |
| `/coding-dreams-into-reality-the-journey-of-software-development-with-webiz-square/` | `/blogs/custom-software-development-journey/` |
| `/unlocking-local-business-success-the-power-of-google-business-listing-with-webiz-square/` | `/blogs/google-business-profile-for-local-business/` |

Before finalizing, check each post's impressions and clicks in Search Console (last 16 months). Posts with traffic: rewrite and improve, keeping the same search intent. Posts with none: rewrite fully, merge into a related service page, or drop (redirect to the closest relevant page, never to the home page).

**Categories** (9 consolidated into 5)

| Old URL | New URL |
|---|---|
| `/category/business/` | `/blogs/category/business/` |
| `/category/ui-ux-design/` | `/blogs/category/design/` |
| `/category/seo/` | `/blogs/category/seo-marketing/` |
| `/category/smo/` | `/blogs/category/seo-marketing/` |
| `/category/google-services/` | `/blogs/category/seo-marketing/` |
| `/category/application-development/` | `/blogs/category/web-and-app-development/` |
| `/category/hosting/` | `/blogs/category/web-and-app-development/` |
| `/category/erp/` | `/blogs/category/erp-software/` |
| `/category/software-development/` | `/blogs/category/erp-software/` |

**Tag archives** (13 found in the crawl; the new site has no tag pages, so each goes to the closest relevant page)

| Old URL | New URL |
|---|---|
| `/tag/website-development/` | `/services/website-development/` |
| `/tag/application-development/` | `/services/application-development/` |
| `/tag/software-development/` | `/services/software-development/` |
| `/tag/erp-software-development/` | `/services/erp-software-development/` |
| `/tag/seo/` | `/services/search-engine-optimization/` |
| `/tag/social-media-optimization/` | `/services/social-media-optimization/` |
| `/tag/graphic-design/` | `/services/graphics-designing/` |
| `/tag/website-hosting/` | `/services/website-hosting/` |
| `/tag/google-business-listing/` | `/blogs/category/seo-marketing/` |
| `/tag/website-migration/` | `/blogs/website-migration-service/` |
| `/tag/electrical/` | `/blogs/importance-of-an-electrical-website/` |
| `/tag/dentist/` | `/blogs/importance-of-a-dentist-website/` |
| `/tag/medical-website/` | `/blogs/importance-of-a-dentist-website/` |

**Other pages and files found in the crawl**

| Old URL | New URL | Action |
|---|---|---|
| `/blogs/page/2/` | `/blogs/` | 301 (or keep pagination if the new blog list paginates) |
| `/wp-content/uploads/2026/09/Webiz-Square-Software-Solutions-LLP-—-Company-Profile-2026.pdf` | `/uploads/company-profile-2026.pdf` | 301. The old file name contains an em dash. Put this rule **before** the generic uploads rewrite below |

**Other WordPress URLs to handle**
- `/wp-content/uploads/*` -> rewrite (not a redirect) to `/uploads/legacy/*`, after copying the old uploads folder into `the `legacy/` prefix in the `site-media` bucket`
- `/sitemap_index.xml`, `/page-sitemap.xml`, `/post-sitemap.xml`, `/service-sitemap.xml`, `/category-sitemap.xml` -> `/sitemap.xml` (Rank Math's default names; confirm against your sitemap index)
- Every `*/feed/` URL (38 found in the crawl: site, comments, posts, categories, tags, services, author), plus `/wp-json/*`, `/xmlrpc.php`, `/wp-login.php` and `/wp-admin/*` -> 410 Gone with one wildcard rule (`/:path*/feed/`), or block with a Vercel firewall rule or middleware. Optional: publish a new RSS feed at `/blogs/rss.xml`
- `/author/*`, `/page/N/`, `?p=ID` shortlinks, attachment pages, and any tag not listed above -> 301 to the closest page, or 404 if none exists. Note: WordPress author URLs use the login username by default (the crawl found one in `/author/.../feed/`), so that login name is publicly visible until the old site is retired
- Test all of it after launch: crawl the old URL list and confirm each returns a single 301 to a 200 page

---

## 17. Backups, monitoring and maintenance

**Backups (free tier has no daily backups, so this is your job)**
- GitHub Actions cron, daily: `pg_dump` the Payload schema, encrypt, upload to private storage (Google Drive or a private GitHub artifact)
- Weekly: copy the `site-media` and `private-uploads` buckets to off-site storage (script in GitHub Actions using the S3 API)
- Keep 14 daily and 8 weekly copies
- Test a restore on the staging Supabase project **once a month**

**Keep-alive:** GitHub Actions cron every 3 days calls `/api/health` (runs a DB query).

**Monitoring**
- UptimeRobot or Better Stack (free): check home page and `/api/health` every 5 minutes, alert by email/WhatsApp
- Sentry free tier for runtime errors
- Search Console email alerts on. GA4 anomaly alerts
- Dashboard health card for DB size and storage used

**Maintenance calendar**
| Frequency | Task |
|---|---|
| Weekly | Review leads, Search Console, uptime; run `npm audit` |
| Monthly | Update dependencies, restore test, review Core Web Vitals, refresh 2 to 4 top pages |
| Quarterly | Content audit, backlink review, competitor check, security review |
| Yearly | Rotate secrets, review plan limits and hosting |

---

## 18. QA and testing checklist

**Functional**
- [ ] Every form submits, saves a lead, sends email and auto-reply, fires the GA4 event
- [ ] Spam tests: honeypot, missing Turnstile, rapid-fire submissions
- [ ] Admin: create, edit, publish, unpublish, schedule, restore version for every collection
- [ ] Roles: Sales cannot edit pages; Editor cannot manage users
- [ ] Revalidation: a published edit appears on the live page within seconds
- [ ] Redirects: test 100% of the redirect map
- [ ] Search, pagination, filters work; 404 page works

**Compatibility**
- [ ] Chrome, Safari, Firefox, Edge (latest); iOS Safari; Android Chrome
- [ ] Screen widths 320, 375, 768, 1024, 1440, 1920

**Performance**
- [ ] Lighthouse mobile 95+ on: home, one service, one post, contact
- [ ] Core Web Vitals pass on real-device test (throttled 4G)
- [ ] Images all WebP/AVIF, correct sizes

**SEO**
- [ ] Unique titles/descriptions, one H1, canonical correct
- [ ] Schema validates with no errors
- [ ] Sitemap valid, robots correct, no accidental `noindex` in production
- [ ] No broken internal links, no redirect chains

**Accessibility**
- [ ] Keyboard navigation, visible focus, alt text, contrast AA, form labels

**Security**
- [ ] Headers verified (securityheaders.com), SSL grade A (SSL Labs)
- [ ] Admin 2FA works, rate limits work
- [ ] No secrets in the repository or client bundle

---

## 19. Launch-day checklist

- [ ] Final WordPress backup stored safely
- [ ] Production environment variables set
- [ ] Database migrations applied on production
- [ ] DNS TTL lowered a day earlier; then switch DNS
- [ ] Vercel domain verified, HTTPS active, `www` redirect correct
- [ ] `noindex` removed; robots and sitemap correct
- [ ] Sitemap submitted in Search Console; top pages requested for indexing
- [ ] Old `/sitemap_index.xml` and Rank Math sitemap URLs redirect to `/sitemap.xml`
- [ ] GTM/GA4 live, test a lead end to end in production
- [ ] Uptime monitoring and backups running
- [ ] Redirects tested live
- [ ] Announce (LinkedIn, Google Business Profile post, email to clients)

---

## 20. Post-launch growth plan

**First 30 days**
- Watch Search Console (coverage, redirects, CWV) and fix issues fast
- Publish 4 blog posts targeting high-intent keywords
- Collect 10+ Google reviews from existing clients and link them to your profile
- Submit to Clutch, GoodFirms, DesignRush, Justdial, Sulekha and other relevant directories

**Days 30 to 90**
- Build out location and industry pages with unique content
- Case study for every completed project (with numbers)
- Start backlink outreach and guest posting
- Run small Google Ads tests on high-intent terms; use data to guide SEO
- A/B test the hero CTA and form length; use Clarity recordings to fix friction

**Days 90+**
- Scale content: comparison posts, guides, tools/calculators (e.g. website cost estimator, which also generates leads)
- Add YouTube/LinkedIn content linking back to pages
- Review Supabase usage; **upgrade to Pro before you approach limits or if the site is business-critical**

---

## 21. Risks and mitigations

| Risk | Mitigation |
|---|---|
| Supabase free project pauses | Keep-alive cron, uptime alerts, upgrade to Pro when ready |
| Database nears the 500 MB free limit | Media is in object storage so the DB stays small; monitor on the dashboard; upgrade to Pro if needed |
| Uploads lost or over quota | Media lives in Supabase Storage (not on the deployment), weekly off-site bucket backup, monitor the 1 GB free limit, upgrade path to Pro / R2 |
| Vercel Hobby used for a commercial site | Use Hobby only for testing; move to Pro at launch |
| Serverless limits (timeouts, 4.5 MB bodies, cold starts) | Design around them (section 15), keep uploads small, test admin flows on staging early |
| Traffic drop after migration | Full redirect map, keep same slugs, monitor daily, keep WordPress backup |
| Thin or duplicated location pages | Unique local content or do not publish them |
| Data loss (no free backups) | Own daily backups plus monthly restore test |
| Spam leads | Turnstile, honeypot, rate limits, spam status in dashboard |
| Vulnerable dependency | Dependabot, `npm audit`, prompt patching |
| Scope creep | Freeze scope after Phase 1; new ideas go to a backlog |

---

## 22. Estimated running costs

| Item | Cost |
|---|---|
| Vercel | Hobby $0 for testing; Pro about $20/month per seat for the live business site (verify) |
| Supabase (database + media storage) | Free at launch (about 1 GB storage); Pro is $25/month when needed |
| Upstash Redis, Cloudflare Turnstile | Free tiers |
| Resend / Brevo | Free tier (enough for lead emails) |
| GTM, GA4, Search Console, Clarity, Looker Studio | Free |
| Uptime monitoring, Sentry | Free tiers |
| Domain | Existing renewal |

---

## 23. Definition of done

The project is complete when: all pages and templates are live with real content, the admin dashboard lets non-developers manage everything, leads flow from every source into the dashboard with attribution, Lighthouse and Core Web Vitals targets are met, security and backup checklists are complete, Search Console shows the new sitemap processed without major errors, and the redirect map has been verified live.

---

## 24. Advanced SEO playbook: on-page, off-page and backlinks

Sections 12 and 20 cover the technical basics and the launch plan. This section is the full SEO strategy that runs alongside development and continues after launch. **No one can guarantee rankings.** Expect first movement in 2 to 3 months, meaningful gains in 4 to 6 months, and competitive keywords (for example "web development company India") to take 9 to 12+ months of steady work.

### 24.1 Keyword research and content architecture (before design is final)

- **Sources (free):** Search Console (what you already show for), Google Keyword Planner, Google Trends, "People also ask" and autocomplete, competitor pages and their ranking terms, Bing Webmaster Tools
- **Keyword groups**
  - Money keywords: "ERP software development company India", "custom software development company Nashik", "e-commerce website development company"
  - Local: "web development company in Nashik", "SEO company in Nashik", plus Pune, Mumbai and other target cities
  - International: GCC, UK, USA, Australia versions of your core services
  - Problem/question keywords for the blog: "website development cost in India", "WordPress vs custom website", "how much does an ERP cost", "how to migrate a website without losing SEO"
  - Comparison and decision keywords: "Next.js vs WordPress for business", "ERP vs Tally"
  - (These are examples. Validate volume and difficulty before committing.)
- **Keyword map (a spreadsheet):** URL, primary keyword, 2 to 4 secondary keywords, search intent, monthly volume, difficulty, current position, target position, status. **One primary keyword per URL** to avoid cannibalization
- **Topic clusters:** each service page is a **pillar**, and 6 to 10 blog posts link up to it and to each other. Example for ERP: cost of ERP, ERP for manufacturing, ERP implementation steps, ERP vs off-the-shelf software, ERP failure reasons, ERP for small business, plus a case study. Every post links to its pillar, and the pillar links to its cluster posts
- **Search intent match:** service pages target commercial intent (proof, process, pricing guidance, CTA), blog posts target informational intent (answer first, then depth). Do not mix them

### 24.2 On-page SEO checklist (applied to every page)

| Element | Rule |
|---|---|
| Title tag | Primary keyword near the start, brand at the end, under 60 characters, unique |
| Meta description | Under 160 characters, includes the benefit and a call to action. Not a ranking factor, but it drives clicks |
| URL | Short, lowercase, hyphenated, contains the primary keyword, no dates or IDs |
| H1 | One per page, natural version of the primary keyword |
| Opening paragraph | Primary keyword and a direct answer or value statement within the first 100 words |
| Subheadings (H2/H3) | Cover secondary keywords, related entities and the "People also ask" questions, written for humans |
| Content depth | Cover the topic better than the pages currently ranking. Do not chase a word count; match the intent |
| Internal links | 3 to 5 contextual links per page with descriptive anchors (not "click here"), to pillar, related services and case studies |
| External links | Link to authoritative sources where they help the reader |
| Images | Descriptive file names, alt text, WebP, correct dimensions, compressed |
| Schema | The right JSON-LD type for the template (section 12) |
| E-E-A-T signals | Named author with bio, real case studies with numbers, client logos and reviews, clear About and Contact details, "last updated" date |
| Snippet formatting | Definitions in 40 to 60 words, numbered steps, comparison tables, FAQ blocks, to win featured snippets and AI answers |
| CTA | One clear primary action per section, form or WhatsApp visible without scrolling on mobile |
| Freshness | Review and update key pages every 6 months, and show the updated date |

**Built into the admin dashboard (an SEO panel on every page and post)**
- Live pass/fail checks: title length, description length, focus keyword present in title, H1, URL and first paragraph, missing alt text, internal link count, external link count, word count, schema present
- **Cannibalization warning** when two pages share the same focus keyword
- **Internal link suggestions** (related pages by shared keywords/category) while editing
- Search snippet and social preview
- A weekly report of: broken internal/external links, pages without meta, orphan pages (no internal links), pages not updated in 6+ months, and images missing alt text

### 24.3 Advanced technical and entity SEO

- **Entity SEO:** make Google understand who Webiz Square is. Consistent name, address and phone (NAP) everywhere, a strong About page, Organization schema with `sameAs` links (LinkedIn, Clutch, Facebook, YouTube, GitHub), `knowsAbout` topics, founder/author pages
- **Instant discovery:** implement **IndexNow** (pings Bing and other engines when a page is published or updated), keep accurate `lastmod` in the sitemap, and use Search Console's URL Inspection for key pages. Do not use Google's Indexing API for normal pages; it is only for job postings and livestream content
- **Internationalization:** if you target several countries, use subfolders (`/ae/`, `/uk/`) with `hreflang` tags and genuinely localized content (currency, examples, contact details), not translated duplicates
- **Your GCC landing page:** it currently lives on a subdomain (`gcc.webizsquare.com`). Google treats subdomains as partly separate, so authority does not fully pass to the main site. Check how it ranks today; if it has little traction, moving it to `webizsquare.com/gcc/` with a 301 usually consolidates authority
- **Rendering and crawling:** all key content is server-rendered (no content hidden behind client-side JS), internal links are real `<a href>` links, log crawl errors from Search Console weekly
- **Core Web Vitals:** keep passing on real-user data (CrUX), not only lab scores
- **AI search visibility (Google AI Overviews, ChatGPT, Perplexity, Claude):** answer-first content, clear headings, FAQs, original data and case studies, consistent brand mentions across the web, and do not block reputable AI crawlers in robots.txt. Treat it as an extension of good SEO rather than a separate trick

### 24.4 Off-page SEO and backlink strategy (white-hat only)

**Principles**
- A few relevant, editorial links beat hundreds of low-quality ones
- Anchor text should look natural: mostly brand name, URL and generic anchors ("this guide"); only a small share (roughly 10 to 15%) exact-match keywords
- **Never** buy links, join private blog networks, do large-scale link exchanges, spam blog comments or forums, or blast submissions to hundreds of low-quality directories. Google's link-spam systems devalue these, and a manual action can remove you from results

**Stage 1: Foundations (Weeks 1 to 4 after launch)**
- **Google Business Profile:** correct categories, services, service areas, photos, weekly posts, Q&A, and the review link. Also claim **Bing Places** and **Apple Business Connect**
- **Brand profiles:** LinkedIn company page, YouTube, Facebook, Instagram, X, GitHub organization, Behance/Dribbble (for design work), Crunchbase
- **Relevant business and agency directories (15 to 25 quality listings, not hundreds):** Clutch, GoodFirms, DesignRush, TechBehemoths, Sortlist, The Manifest, Justdial, Sulekha, IndiaMART (if B2B products fit), and local Nashik/Maharashtra business directories. Keep NAP identical everywhere
- **Reviews:** ask every completed client for a Google review and a Clutch/GoodFirms review. Aim for a steady flow (for example 4 to 8 a month), reply to every review within 48 hours, and never pay for or gate reviews (against Google policy)

**Stage 2: Earn links with useful assets (Month 2 onward)**
- **Free tools that attract links and leads:** website cost calculator, SEO audit checker, ERP ROI calculator, website speed checker
- **Original research:** for example a survey or report on digital adoption among Maharashtra MSMEs, using your own client data (anonymized). Original data attracts citations
- **Templates and guides:** website project brief template, RFP template, migration checklist, ERP vendor checklist
- **Case studies with real numbers**, which clients and industry sites reference

**Stage 3: Active outreach (Month 2 onward, 5 to 10 quality links a month is a realistic goal)**
- **Guest posts** on relevant marketing, technology and business sites (only where the site has real readers and editorial standards). Also publish on LinkedIn, Medium, Dev.to and Hashnode for reach (mostly nofollow, but they build brand and traffic)
- **Expert quote platforms** (for example Qwoted, Featured.com, Terkel, and similar): answer journalist and blogger queries as a web development/ERP expert, which earns editorial links
- **Client links:** a "Website by Webiz Square" credit in client footers (branded anchor, not keyword-stuffed), plus a link from each client's "partners" or "our work" page and a testimonial exchange
- **Local and industry links:** Nashik industry associations and chambers, business networking groups, local news and event pages, sponsorships of local events, college partnerships and internship programs (education links), speaking at meetups and webinars
- **Unlinked brand mentions:** set Google Alerts for "Webiz Square" and ask sites that mention you to add a link
- **Broken link building and resource pages:** find dead links on relevant pages and suggest your matching content as a replacement
- **Competitor link gap:** find sites that link to 2 or 3 competitors but not to you, then earn those links with a better asset
- **Community participation:** genuinely helpful answers on Quora, Reddit and Stack Overflow (mostly nofollow, but traffic and mentions)

**Outreach process:** a Google Sheet with prospect, site, contact, angle, date sent, follow-up date, status, link URL and anchor. Personalize every email, follow up once or twice, and track which angles work

**Link quality checklist before pursuing any link**
- The site is relevant to your topics and has real organic traffic
- The link is editorial (placed because the content deserves it), and the page is indexed
- The site is not a link farm, does not sell links openly, and does not carry obvious spam
- Ignore raw authority scores as the only test; relevance and traffic matter more
- Disavow only when there is a manual action or a clear toxic-link attack; it is rarely needed

### 24.5 Local SEO (Nashik and India)
- Google Business Profile fully optimized, with the primary category matched to your main service
- City and service-area pages with unique content, local proof (clients, projects) and local FAQs. If you cannot add real local value, do not publish the page
- Embedded map and consistent NAP in the footer and Contact page, with LocalBusiness/ProfessionalService schema
- Local citations and reviews as in Stage 1, plus local news and association mentions

### 24.6 Content calendar
- **Cadence:** 2 to 4 quality posts per month, plus 1 case study per completed project
- **Mix:** pillar guides (2,000+ words where the topic needs it), how-to posts, cost and comparison posts, industry posts (manufacturing, logistics, healthcare, education, retail), tool/calculator pages
- **Refresh:** update the top 10 pages and posts every 6 months (new data, screenshots, links, dates)
- **Repurpose:** turn each post into a LinkedIn post, a short video and a newsletter item, each linking back
- **Replace the old batch:** the 12 blog posts from Aug 2023 and the 2022-era service pages are rewritten first (section 8.1)

### 24.7 Measurement and monthly SEO review
- **KPIs:** organic impressions, clicks, average position, number of keywords in the top 10, indexed pages, organic leads and won clients, referring domains (total and new), anchor text mix, Core Web Vitals pass rate, branded vs non-branded traffic
- **Free tools:** Search Console, GA4, Bing Webmaster Tools, **Ahrefs Webmaster Tools** (free for sites you own, shows your backlinks and site audit), Looker Studio dashboard, Microsoft Clarity
- **Monthly review agenda:** top gaining and losing queries, pages stuck at positions 8 to 20 (optimize and add internal links), new backlinks and lost links, indexing issues, top pages by leads, and the next month's content and outreach targets

### 24.8 SEO roadmap

| Period | Focus |
|---|---|
| Before launch | Keyword map, page architecture, redirect map, on-page templates, SEO panel in the dashboard |
| Launch month | Sitemap submission, Search Console and Bing setup, Google Business Profile, first 15 to 25 directory listings, rewrite the top service pages |
| Months 2 to 3 | 4 to 8 new posts and 2 case studies, launch one free tool, start outreach (5 to 10 links a month), review collection |
| Months 4 to 6 | Location and industry pages with real content, guest posts and expert quotes, optimize pages at positions 8 to 20, first research report |
| Months 7 to 12 | Scale content clusters, digital PR, more tools, international pages (GCC, UK, USA, Australia), quarterly content and backlink audits |

### 24.9 What to avoid
- Buying links, private blog networks, mass directory submissions, comment spam
- Thin doorway pages for many cities, or many pages targeting the same keyword
- Auto-generated or lightly edited AI content published without expert review and real examples
- Keyword stuffing, hidden text, cloaking, fake reviews or fake case studies
- Ignoring search intent (a sales page for an informational query, or the reverse)
- Changing URLs after launch without a 301 redirect
