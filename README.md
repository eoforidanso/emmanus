# Emmanus Wellness

Telehealth mental health practice site for **Dr. Emmanuel Ofori-Danso, DNP**
(Rush University) — therapy, psychiatry & medication management, and a hub of
free, private self-care tools.

**Live:** https://emmanuswellness.com/

## Features

- **Marketing pages** — Home (hero, trust cards, conditions, Why Emmanus,
  provider spotlight, how it works), Services with Care Finder quiz, Provider
  profile, Contact with state-eligibility checker, Privacy & Terms.
- **Resources hub** — interactive tools that run entirely in the browser
  (nothing is transmitted): WHO-5 wellbeing check-in, mood tracker
  (device-only storage), CBT thought reframing, box breathing, 5-4-3-2-1
  grounding, sleep check-in, journaling prompts, downloadable safety plan,
  curated reading list, and crisis resources (988).
- **Booking** — all CTAs route to the Clarity EHR patient portal; there is no
  backend in this repo.
- Light/dark theme, scroll-reveal and hero animations (all respect
  `prefers-reduced-motion`), PWA manifest + icons, per-page SEO, Open Graph
  card, JSON-LD structured data, sitemap/robots.

## Stack

React 19 · Vite · react-router · hand-rolled CSS design system (no UI
framework). Design tokens and rules live in [DESIGN.md](DESIGN.md) — read it
before changing styles.

## Development

```bash
npm install
npm run dev      # http://localhost:5174/
npm run build    # production build to dist/
```

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds
and publishes to GitHub Pages (SPA fallback via `404.html`). Custom domain
`emmanuswellness.com` is set via `public/CNAME` and the repo's Pages settings;
Vite `base` and the router basename are `/`. DNS is managed on Cloudflare —
see DNS records below.

### DNS (Cloudflare)

| Type | Name | Content | Proxy |
|---|---|---|---|
| A | @ | 185.199.108.153 | DNS only |
| A | @ | 185.199.109.153 | DNS only |
| A | @ | 185.199.110.153 | DNS only |
| A | @ | 185.199.111.153 | DNS only |
| CNAME | www | eoforidanso.github.io | DNS only |

Keep records "DNS only" (grey cloud) until GitHub issues the HTTPS
certificate, then Cloudflare proxy (orange cloud) can be enabled if desired.

## Before real launch

- Replace placeholder content: phone/email, stats, client rating, licensed
  states (`LICENSED_STATES` in `src/data.js`), insurers, testimonials, and
  footer social links.
- Have counsel review the Privacy Policy and Terms pages.
- Point the contact form at a real backend or form service.
