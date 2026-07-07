# Emmanus Wellness — Design System

The single source of truth for how this site looks and feels. All tokens live
as CSS variables in `src/index.css` (`:root` for light, `[data-theme="dark"]`
overrides). Change tokens there — never hardcode values in components.

## Brand feel

Calm · supportive · evidence-based · modern · trustworthy. Every choice below
serves an anxious first-time visitor: soft edges, generous space, slow gentle
motion, warm plain language.

## Color palette

| Token | Light | Role |
|---|---|---|
| `--green-900` | `#2c4a38` | Deep anchor: stats bar, footer, dark gradients |
| `--green-700` | `#3e6b4f` | Primary actions, brand marks |
| `--green-600` | `#4a7c59` | Accents, eyebrows, links, icons |
| `--green-100` / `--green-50` | `#e4ede6` / `#f0f5f1` | Hairlines, borders, tinted sections, icon chips |
| `--cream` | `#faf7f2` | Page background |
| `--sand` | `#f3ede3` | Warm neutral blocks, illustration backdrop |
| `--gold` | `#c9a227` | Sparing warmth: stars, sun, plant pot, ≤5% of any view |
| `--blue` / `--blue-50` | `#5b87a8` / `#eaf1f6` | Gentle blue, gradient hints only |
| `--ink` / `--ink-soft` | `#24322a` / `#55645b` | Body text / secondary text |
| `--heading` | `#2c4a38` | All display headings |

Rule of thumb: green does the work, sand/cream keep it warm, gold and blue are
seasoning. Dark mode remaps the same tokens — components never branch on theme.

## Typography

- **Display**: Fraunces (serif, warm) — all h1–h4, weight 500–600,
  letter-spacing −0.015em, `text-wrap: balance`.
- **Body**: Inter — weight 400–600, `text-wrap: pretty`.
- **Base size**: 17px desktop, 16px mobile. Line-height 1.6.

Scale (desktop): hero H1 ~58–68px (wt 600) · page H1 ~40–48px · section H2
~34–42px · card H3 ~22px · body ~17px · microcopy 14–15px · eyebrow 13px
uppercase, letter-spaced, `--green-600`.

Numbers use `font-variant-numeric: tabular-nums` where they update.

## Iconography & illustration

- Icons are emoji in soft rounded chips (`.card__icon`: 46–60px square,
  `--green-100` background, radius 12px). Rounded and friendly, never sharp
  or clinical line-art.
- Illustrations are inline SVG: organic blob backdrops (`--sand`), warm human
  skin tones, brand greens + gold accents, soft drop shadows, gentle float
  animation. No stock photos except the provider portrait (circular crop).

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
