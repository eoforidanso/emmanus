# Emmanus Wellness — Design System

The single source of truth for how this site looks and feels. All tokens live
as CSS variables in `src/index.css` (`:root` for light, `[data-theme="dark"]`
overrides). Change tokens there — never hardcode values in components.

## Brand feel

**Premium clinical**: precise · calm · evidence-based · human warmth without
cartoon friendliness. Not marketplace-telehealth. Every choice below serves
an anxious first-time visitor while signaling medical expertise: rectangular
components, hairline borders, minimal shadows, generous space, slow gentle
motion, warm plain language.

## Color palette

| Token | Light | Role |
|---|---|---|
| `--green-900` / `--forest` | `#0f2f2a` | Deep forest — authority, calm: hero, primary buttons, stats, footer |
| `--green-700` / `--green-600` | `#1b4a42` / `#2e6157` | Mid greens for CTA band, hovers |
| `--cream` | `#f7f4ef` | Soft ivory page background — warmth without pastel |
| `--slate` / `--blue` | `#3e4a66` | Clinical trust — eyebrows, tags, secondary accents |
| `--gold` | `#c9a875` | Gold sand — premium accent: hero CTA, hover borders, divider, ≤5% of any view |
| `--ink` | `#1c1c1c` | Charcoal — typography clarity |
| `--ink-soft` | `#4f5752` | Secondary text |
| `--line` | `#ddd7c9` | 1px hairline borders everywhere |
| `--green-100` / `--green-50` / `--sand` | warm neutrals | Tinted sections, icon chips |

Rule of thumb: deep forest carries authority, ivory keeps it human, slate adds
clinical trust, gold sand is the only luxury note. No mint, no pastel. Dark
mode remaps the same tokens — components never branch on theme.

**Signature surface — the evergreen hero.** The homepage hero is deliberately
dark in both themes: `--forest` (#0f2f2a) with gold-sand accents for the
availability badge, italic em, philosophy line, and the primary button (gold
fill, charcoal text). A subtle SVG film grain overlays the surface; the hero
ends in a 1px gold hairline (no wave — clinical geometry). The hero art is an
**abstract geometric composition** (concentric rings, two overlapping ivory
discs, a gold arc, a breath line) — never cartoon figures or UI mockups.
This dark-hero/light-body contrast is the brand's differentiator — do not
lighten the hero back to cream. Footer uses `--forest-2` to bookend.

## Typography

- **Display**: Spectral (serif — clinical, high-end) — all h1–h4, weight
  500–600, letter-spacing −0.015em, `text-wrap: balance`.
- **Body**: Inter — weight 400–600, `text-wrap: pretty`.
- **Base size**: 17px desktop, 16px mobile. Line-height 1.6.

Scale (desktop): hero H1 ~58–68px (wt 600) · page H1 ~40–48px · section H2
~34–42px · card H3 ~22px · body ~17px · microcopy 14–15px · eyebrow 13px
uppercase, letter-spaced, `--green-600`.

Numbers use `font-variant-numeric: tabular-nums` where they update.

## Iconography & illustration

- Icons are **thin-stroke, monochrome SVG** (1.5px stroke, currentColor) in
  square bordered chips (`.card__icon`: 48px, ivory background, 1px
  `--line` border, radius 6px). The set lives in `src/components/icons.jsx`.
  Emoji remain only in the Resources tools pending migration — do not add
  new emoji icons.
- Illustration is abstract geometric (see hero note above): soft overlapping
  shapes, subtle gradients, clinical geometry. No cartoons, no mockups. The
  provider portrait (circular crop, sage backdrop) is the only photograph.

## Card system

`.card`: white surface, 1px `--green-100` border, radius 16px (`--radius`),
`--shadow-sm` at rest → hover lifts −4px with `--shadow-lg` (0.4s `--ease`).
Variants: `.card--mini` (horizontal icon + text), `.card--link` (whole card
clickable, icon tilts on hover, meta gains →), `.provider`, `.quote`,
`.finder` (interactive tools), `.prompt-card`.

## CTA system

- **Primary** (`.btn--primary`): filled `--green-700`, white text, pill
  (999px), inner top highlight, hover lifts −2px onto a soft shadow. One per
  view section. Booking CTAs always link to the Clarity patient portal and
  may carry `.btn__arrow` (→ slides 4px on hover).
- **Secondary** (`.btn--ghost`): outlined green, fills `--green-100` on hover.
- **On dark surfaces** (`.btn--light`): cream fill, hardcoded colors so it
  works in both themes.
- **Tertiary** (`.finder__reset`): underlined green text button.
- All buttons press down to scale(0.96) on `:active`.

## Motion

One easing everywhere: `--ease: cubic-bezier(0.22, 1, 0.36, 1)`.
- Scroll reveal (`<Reveal>`): fade + 22px rise, 0.7s, stagger siblings 90ms.
- Hero: text staggers in (80–100ms steps), illustration fades in then floats
  7s alternate.
- Route changes: `.page-fade` (0.5s fade + 10px rise).
- Ambient: page-hero blobs drift 14–18s.
- **Everything** is disabled under `prefers-reduced-motion` — non-negotiable
  for an anxiety-sensitive audience.

## Spacing rules

- Sections: 100px vertical desktop, 72px mobile. Tinted sections
  (`.section--tint`, `--green-50`) alternate with cream and carry hairline
  top/bottom borders as soft dividers.
- Container: max 1120px, 24px side padding.
- Grids: `.grid-3` / `.grid-2`, 26px gaps, collapse to one column ≤900px.
- Section heads: eyebrow → H2 → one short paragraph, max-width 620px,
  48px below.
- Ornament divider (`.divider`, a 🌿 between hairlines) separates adjacent
  cream sections; `.card--pillar` cards carry a large faint brand motif
  (leaf/heart/sun, ~9% opacity) in the corner.

## Voice & safety

- Warm, plain, second person. No jargon without a plain-language gloss.
- Signature phrase: **"Pills and Skills"** — therapy alongside medication.
- Every page that could meet someone in distress shows the crisis banner
  (988) and tools state their privacy posture inline ("never leaves this
  page"). Self-care tools are labeled snapshots, not diagnoses.
