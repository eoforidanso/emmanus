# Emmanus Wellness — Design System

The single source of truth for how this site looks and feels. All tokens live
as CSS variables in `src/index.css` (`:root` for light, `[data-theme="dark"]`
overrides). Change tokens there — never hardcode values in components.

## Brand feel

**Premium clinical**: precise · calm · evidence-based · human warmth without
cartoon friendliness. Not marketplace-telehealth. Every choice below serves
an anxious first-time visitor while signaling medical expertise: softly
rounded components, hairline borders, layered depth, generous space, slow
gentle motion, warm plain language.

## Color palette

| Token | Light | Role |
|---|---|---|
| `--green-900` / `--forest` | `#0f2f2a` | Deep forest — authority, calm: hero, primary buttons, stats, footer |
| `--green-700` / `--green-600` | `#1b4a42` / `#2e6157` | Mid greens for fills, CTA band, hovers |
| `--link-strong` | `#1b4a42` → `#9fd0be` dark | Emphasis for links and active states |
| `--cream` | `#f7f4ef` | Soft ivory page background — warmth without pastel |
| `--slate` / `--blue` | `#3e4a66` | Clinical trust — eyebrows, tags, secondary accents |
| `--gold` | `#c9a875` | Gold sand — premium accent: hero CTA, hover borders, divider, ≤5% of any view |
| `--ink` | `#1c1c1c` | Charcoal — typography clarity |
| `--ink-soft` | `#4f5752` | Secondary text |
| `--line` | `#ddd7c9` | 1px hairline borders everywhere |
| `--green-100` / `--green-50` / `--sand` | warm neutrals | Tinted sections, icon chips |

Rule of thumb: deep forest carries authority, ivory keeps it human, slate adds
clinical trust, gold sand is the only luxury note. No mint, no pastel.

**Dark mode is a first-class theme, not a filter.** It is seeded from
`prefers-color-scheme` and toggleable. Two rules keep it honest:

1. **The forest greens are ground colours in dark mode, never text colours.**
   `--green-700` and `--green-900` remap to near-black surfaces, so using one
   as a text colour lands dark-on-dark. Use `--link-strong` for emphasis text
   and `--heading` for active states — both flip.
2. **Nothing hardcodes `#fff` or `var(--white)` as a surface** unless it also
   has a `[data-theme="dark"]` counterpart. `--white` remaps to `#14231e`.

**Signature surface — the evergreen hero (locked spec).** The homepage hero
is deliberately dark in both themes: `--forest` (#0f2f2a) with an extremely
subtle geometric grid patterning (masked to fade toward the left, 3.5%
opacity). H1 is Spectral in cream with a gold italic second clause, capped at
`clamp(2.3rem, 4vw, 3.2rem)` — large enough to carry the page, small enough
that the CTA row stays above the fold at 1280×720. Below it: one subheadline
sentence (Inter, muted cream), the CTA row, a plain micro-trust row ("Most
insurance accepted · Next-day appointments often available"), closed with a
64px gold hairline rule. CTA row: Book a Session (gold fill, charcoal text) +
Meet your clinician (ghost, cream border). No wave, no floating chips.

Hero art (right column) is an **abstract composition** in flat brand colour —
two overlapping fields with a figure in each, standing for patient and
clinician and the shared space between them. Never photographs, never UI
mockups, never cartoon faces. This dark-hero/light-body contrast is the
brand's differentiator — do not lighten the hero back to cream.
Footer uses `--forest-2` to bookend.

## Typography

- **Display**: Spectral (serif — clinical, high-end) — all h1–h4, weight
  500–600, letter-spacing −0.015em, `text-wrap: balance`.
- **Body**: Inter — weight 400–600, `text-wrap: pretty`.
- **Base size**: 17px desktop, 16px mobile. Line-height 1.6.

Only the weights actually used are requested from the font CDN: Spectral
500/600 roman and italic, Inter 400–700. Adding a weight means adding a
download — check it earns its place.

Scale (desktop): hero H1 ~37–51px (wt 600) · page H1 ~40–48px · section H2
~34–42px · card H3 ~22px · body ~17px · microcopy 14–15px · eyebrow 13px
uppercase, letter-spaced, `--slate`.

Numbers use `font-variant-numeric: tabular-nums` where they update.

**Punctuation is typographic, not typewriter.** Curly quotes (&ldquo; &rdquo;
&lsquo; &rsquo;) and real apostrophes (’), em dashes with spaces around them.
Straight `"` and `'` are a bug in prose.

## Iconography

**One icon language: thin-stroke, monochrome SVG.** 24×24 viewBox, 1.5px
stroke, `currentColor`, round caps and joins. The whole set lives in
`src/components/icons.jsx` — conditions, services, self-care tools, contact
channels, mood scale, navigation chrome, and social marks.

**No emoji anywhere in the product.** They render as a different typeface on
every platform, cannot inherit colour, and go muddy on dark surfaces. If a
concept needs a mark and the set does not have one, add it to `icons.jsx` in
the same idiom. The only fills in the set are the rating star and the social
brand marks, which are conventionally solid.

Icons sit in rounded bordered chips (`.card__icon`: 48px, ivory background,
1px `--line` border, `--radius-sm`) at 22px, or inline at 15–20px. The set has no
intrinsic size — an unsized `<svg>` collapses to 0×0, so every context needs a
width/height rule.

Illustration is abstract geometric (see hero note above). The provider
portrait is the only photograph; it ships at 620px, twice its largest display
size, and is reused at every scale so the page pays for one download.

## Glass & depth

**Three radii, no loose values.** `--radius-sm` (12px) for buttons, icon
chips, tags and small controls; `--radius` (16px) for cards, notices and
panels; `--radius-lg` (22px) for floating glass and the largest feature
surfaces. Circles stay circles.

**Depth is always two shadows.** A tight contact shadow anchors the element,
a soft ambient one gives it height — `--shadow-sm` / `--shadow` /
`--shadow-lg`, plus `--shadow-float` for anything fixed. One blur, however
large, reads flat.

**Every raised surface carries a lit top edge** (`--edge-light`). That inner
highlight is what makes a panel read as an object rather than a drop shadow.
It drops to a hint in dark mode, where a bright rim would look like a seam.
Icon chips take the inverse — pressed into the card, not sitting on it — so
they don't compete with the card's own edge.

**Glass is only for surfaces that float over content**: the nav bar,
announcement bar, mobile nav sheet, booking launcher and card, and
back-to-top. Body cards and page panels stay solid. Use `--glass-bg`,
`--glass-border` and `--glass-blur` together; a translucent fill without the
blur is just a weak colour.

**Glass contrast cannot be read from computed styles.** The effective
background is whatever `backdrop-filter` composited from the page behind it,
so it has to be measured from real pixels with the worst-case backdrop
underneath — on this site, the forest hero, stats band and footer. Both
failures found that way came from alpha being too low, not from the blur:
the nav at 0.72 gave 4.19:1 and the mobile sheet at 0.72 gave 4.1:1. **Blur
and saturation carry the glass look; alpha carries the contrast.** Light-mode
values are tuned to the floor: `--nav-bg` 0.84, `--glass-bg` 0.86.

Provide an opaque fallback wherever `backdrop-filter` is unsupported, or the
links end up sitting on live page content.

## Card system

`.card`: white surface, 1px `--line` border, radius `--radius` (16px),
`--edge-light` + `--shadow-sm` at rest → hover lifts −2px onto `--shadow`
with a gold border (0.4s `--ease`).
Variants: `.card--mini` (horizontal icon + text), `.card--link` (whole card
clickable, icon tilts on hover, meta gains →), `.provider`, `.quote`,
`.finder` (interactive tools), `.prompt-card`.

Rows that don't divide evenly into the column count (`.grid-flow`,
`.specialty-grid`) centre the last row rather than leaving a hole in it.

## CTA system

- **Primary** (`.btn--primary`): filled `--green-900`, cream text,
  `--radius-sm`, an inner top highlight so the fill isn't a flat rectangle of
  colour, hover lifts −1px onto a gold border. **One per section.** Booking CTAs
  always link to the Clarity patient portal and may carry `.btn__arrow`
  (→ slides 4px on hover).
- **Secondary** (`.btn--ghost`): outlined ink, gold border on hover.
- **On dark surfaces** (`.btn--light`): cream fill, hardcoded colors so it
  works in both themes.
- **Tertiary** (`.finder__reset`): underlined green text button.
- All buttons press down to scale(0.96) on `:active`.

**Labels are sentence case** ("Check availability", "Explore all services"),
except the brand-level "Book a Session". Two links to the same destination
should not have two different labels: one page, one name for each thing.

## Controls & touch targets

Every icon-only control uses `.icon-btn` — 44×44, the Apple HIG minimum. That
covers the nav toggle, theme toggle, carousel arrows, back-to-top and footer
socials. Carousel dots keep an 8px visual dot inside a 44px button.

Links inside a sentence are exempt (WCAG 2.5.8) and get looser leading
instead, with one exception: the **988 and 911 crisis numbers get real
padding** to a ~44px box. Use padding rather than an overlaid pseudo-element
so the line box grows too — two emergency numbers with overlapping hit areas
is worse than two small ones.

## Navigation

Four destinations (Services · Your Clinician · Resources · Contact), a
hairline, two utility links (Join session · Patient portal), then the Book a
Session CTA. The logo is the home link. Keep the list at four: the bar
collapses to a sheet at 1024px, and every item added drags that breakpoint up
until 13" laptops get a hamburger.

The mobile sheet is a real sheet: scrim over the page, body scroll locked,
Escape closes, focus is trapped inside it and returns to the toggle. The scrim
renders outside `<header>` — the bar's `backdrop-filter` makes it the
containing block for fixed descendants.

Both the primary nav and the footer's link columns are `<nav>` landmarks.

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
- Container: max 1120px, 24px side padding. The nav bar opts out and runs
  wider so the full row fits.
- Grids: `.grid-3` / `.grid-2`, 26px gaps, collapse to one column ≤900px.
- Section heads: eyebrow → H2 → one short paragraph, max-width 620px,
  48px below. Section-level CTAs use `.section-cta`.
- `.divider` is a plain hairline between adjacent cream sections;
  `.card--pillar` cards carry a large faint brand motif (~9% opacity).

**Layout values belong in CSS.** Reach for `.section-cta`, `.section--flush`,
`.notice--spaced`, `.grid-2--centered` and friends rather than an inline
`style={{ marginTop: 32 }}`.

## Structure & semantics

Heading levels never skip: every page is h1 → h2 → h3, including the footer.
A section that needs cards with h3s needs an h2 above them, even if the design
does not call for a visible one.

## Voice & safety

- Warm, plain, second person. No jargon without a plain-language gloss.
- Signature phrase: **"Pills and Skills"** — therapy alongside medication.
- Every page that could meet someone in distress shows the crisis banner
  (988) and tools state their privacy posture inline ("never leaves this
  page"). Self-care tools are labeled snapshots, not diagnoses.
- **Claims must match the practice.** The structured data in `index.html` and
  the meta descriptions list only what `src/data.js` actually offers.
