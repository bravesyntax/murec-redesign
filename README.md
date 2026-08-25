# MUREC — Forest Walk

A frontend redesign assignment: real content from [murec.com](https://murec.com), rebuilt with an
editorial, premium visual language inspired by [timeless.club](https://timeless.club/en).

## Overview

MUREC (Madhusudan Urban Real Estate Collection) is the new real-estate identity of a 78-year-old
Indian family conglomerate, launching with **Forest Walk** — a 97-villa gated community in Dasna,
Ghaziabad, built around the idea of a *"City inside the Forest, Forest inside the City."*

This project takes that line seriously as a design brief: the page itself alternates between a
deep forest-dark register (**canopy**) and a warm stone-light register (**clearing**) as you
scroll, rather than staying on one background throughout. That alternation is the one signature
idea the rest of the page stays quiet around — large serif display type, generous whitespace, and
minimal navigation carry the "Timeless"-inspired premium editorial feel without copying its dark
lounge/nightlife layout, typography, or navigation directly.

All copy, statistics, quotes, and project facts are sourced verbatim (or lightly trimmed for
length) from murec.com. Nothing is invented — no fabricated products, certifications, or numbers.

## Features

- Full-viewport hero with staggered text reveal and cinematic image parallax
- Scroll-aware navbar (transparent on the hero → solid on scroll) with an animated mobile menu
- Editorial asymmetric layouts for About, Mission/Vision, and the Company section
- Manifesto-style Principles list (Trust / Quality / Transparency / Innovation)
- Animated count-up statistics (78+ years, 100M+ family impacted, 7+ sectors)
- Forest Walk collection showcase: zones, route, amenities gallery, and IGBC design pillars
- Horizontal-scroll legacy timeline (1948 → 2026), a real chronological sequence
- Leadership and named-partner story section with real quotes
- Cinematic closing CTA with direct contact details
- Fully responsive (1920px down to 375px), zero horizontal overflow
- Reduced-motion support, visible focus states, semantic HTML, alt text throughout

## Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** for layout utilities, with the brand's design tokens (color, type, spacing)
  extended in `tailwind.config.js`
- **Framer Motion** for scroll reveals, the hero parallax, and the count-up stats
- **Lucide React** for the small icon set (arrows, menu, mail, phone)

No other dependencies — deliberately kept minimal.

## Project Structure

```
murec-redesign/
├── index.html                 # SEO meta, Open Graph, font preconnects
├── src/
│   ├── main.jsx
│   ├── App.jsx                 # composes all sections in order
│   ├── index.css               # Tailwind layers + design tokens as utility classes
│   ├── data/
│   │   └── murec.js            # all real copy, kept out of JSX
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx           # Mission / Vision
│       ├── Principles.jsx      # Trust / Quality / Transparency / Innovation
│       ├── Stats.jsx           # animated counters
│       ├── Collection.jsx      # Forest Walk — zones, amenities, IGBC pillars
│       ├── Timeline.jsx        # 1948–2026 horizontal-scroll legacy gallery
│       ├── Company.jsx         # leadership + named partners
│       ├── CTA.jsx
│       ├── Footer.jsx
│       └── Reveal.jsx          # shared scroll-reveal wrapper
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production Build

```bash
npm run build
```

Verified: builds cleanly with no errors or warnings.

## Deployment (Vercel)

1. Push this project to a GitHub repository.
2. In Vercel, **Add New → Project**, import the repository.
3. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output directory
   `dist` — Vercel fills these in automatically.
4. Deploy. No environment variables are required.

Or from the CLI:

```bash
npm install -g vercel
vercel --prod
```

## Design Approach

**Token system**

| Role | Value |
|---|---|
| Canopy (dark register) | `#141912` |
| Clearing (light register) | `#EDE8DA` |
| Ink (text on light) | `#17160F` |
| Ivory (text on dark) | `#F4EFE2` |
| Brass (accent) | `#B08A4E` |
| Sage (secondary accent) | `#8A9A7E` |
| Display type | Fraunces |
| Body / UI type | Inter |
| Numerals / labels | Space Grotesk |

**Signature**: the page's background alternates between canopy and clearing section by section —
About (light) → Principles (dark) → Stats (light) → Collection (dark) → Legacy (light) → Company
(dark) → CTA (dark, image-backed). The rhythm deliberately resolves into the dark register at the
end, so the closing invitation to "work together" reads as an arrival *inside* the forest the
project sells — the same duality named on Murec's own site.

**Sequenced content stays numbered, parallel content doesn't.** The legacy timeline (1948–2026)
and the "from Delhi" route steps are real sequences, so they're numbered/dated. The four
Principles and the Forest Walk zones are parallel ideas, not a progression, so they're set as a
flat list rather than forced into a 01/02/03 pattern that would imply an order that isn't there.

**Typography**: Fraunces (a warm, editorial serif) carries every large display moment — the hero
mark, section headings, the stat counters — while Inter handles body copy and UI, and Space
Grotesk marks numerals, timeline years, and small data labels, giving the "masterplan / IGBC /
blueprint" content a slightly more architectural feel than the display serif would alone.

## A note on images

Every image on the page is referenced directly from `murec.com`'s public asset URLs, per the
assignment's instruction to use Murec's actual visuals. For a real production deployment, these
should be downloaded, optimized (WebP/AVIF, sized `srcset`s), and served from this project's own
`/src/assets/images` directory instead of hot-linked — the assignment brief's own preferred path.
That step was left out here only because this sandbox's network access doesn't reach murec.com to
fetch the binaries; the `<img>` tags are otherwise exactly where locally-hosted files would go, so
swapping the `src` values is a drop-in change.

## Credits

- **Murec** — [murec.com](https://murec.com) — content and source material
- **Timeless** — [timeless.club/en](https://timeless.club/en) — visual/design inspiration only
