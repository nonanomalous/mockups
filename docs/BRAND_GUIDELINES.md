# NLS Digital — Brand Guidelines

> **Division of Annex Brands, Inc.**
> Version 2.0 · February 2026
> Classification: Internal Engineering + Design Systems

---

## 1. Overview

This document defines the complete visual identity and technical implementation standards for **NLS Digital**, the digital platform division of Annex Brands. NLS Digital powers the technology layer beneath Annex Brands' seven franchise brands and 850+ retail locations — from instant quoting engines and shipment tracking to API integrations and white-label solutions.

These guidelines exist as **executable specifications**. Every color, typeface, spacing value, animation curve, and component pattern is defined with production CSS, token values, and fallback paths. The brand is the code.

### Keywords

`digital-logistics` · `brand-system` · `design-tokens` · `css-variables` · `typography` · `iconography` · `motion-design` · `component-library` · `accessibility` · `dark-mode` · `responsive` · `api-first`

### Guiding Principles

| Principle | Meaning |
|---|---|
| **Precision over decoration** | Every pixel serves a purpose. No ornamental elements without function. |
| **Engineered trust** | The brand conveys reliability through consistency, not flash. |
| **Network-native** | Designed to scale across 7 brands, 850+ locations, and unlimited API consumers. |
| **Resilient by default** | Every specification includes a fallback. No single point of visual failure. |
| **Dark-first, light-ready** | Primary expression is dark mode. Light mode is a supported variant, not an afterthought. |

---

## 2. Color System

### 2.1 Core Palette

NLS Digital claims **teal-cyan** as its primary territory — a color space unoccupied by any existing Annex brand (PostalAnnex=red, Pak Mail=red/gold, AIM=blue, Navis=green, HWC=brown, Parcel Plus=blue, Sunshine=warm). The teal bridges Navis's green heritage with the trust associations of blue, while signaling digital modernity.

#### Primary Colors

```css
:root {
  /* ── Core Brand ── */
  --nls-cyan:           #0ACDCF;   /* Primary action, links, focus rings    */
  --nls-cyan-bright:    #3EDBDC;   /* Hover states, active indicators       */
  --nls-cyan-muted:     #0A9B9D;   /* Visited links, secondary actions      */
  --nls-cyan-subtle:    #0E4F50;   /* Dark-mode surfaces, active backgrounds*/

  /* ── Neutrals ── */
  --nls-midnight:       #0B1215;   /* Primary background (dark mode)        */
  --nls-charcoal:       #141C20;   /* Elevated surfaces, cards              */
  --nls-slate:          #1E2A30;   /* Borders, dividers, input backgrounds  */
  --nls-graphite:       #2C3A42;   /* Disabled states, subtle borders       */
  --nls-ash:            #5A6872;   /* Placeholder text, tertiary content    */
  --nls-mist:           #94A3AD;   /* Secondary text, labels                */
  --nls-cloud:          #C8D2D8;   /* Primary text (dark mode)              */
  --nls-snow:           #EDF1F3;   /* Headings, emphasis (dark mode)        */
  --nls-white:          #F8FAFB;   /* Pure foreground, high-contrast text   */

  /* ── Light Mode Overrides ── */
  --nls-light-bg:       #F4F6F8;   /* Primary background (light mode)       */
  --nls-light-surface:  #FFFFFF;   /* Cards, elevated surfaces              */
  --nls-light-border:   #DDE3E8;   /* Borders, dividers                     */
  --nls-light-text:     #1A2530;   /* Primary text (light mode)             */
  --nls-light-muted:    #5A6872;   /* Secondary text (light mode)           */
}
```

#### Accent Colors

```css
:root {
  /* ── Status & Feedback ── */
  --nls-green:          #34D399;   /* Success, confirmed, delivered         */
  --nls-green-bg:       #062E20;   /* Success background (dark)             */
  --nls-amber:          #FBBF24;   /* Warning, in-transit, pending          */
  --nls-amber-bg:       #2E2506;   /* Warning background (dark)             */
  --nls-red:            #F87171;   /* Error, cancelled, overdue             */
  --nls-red-bg:         #2E0A0A;   /* Error background (dark)               */
  --nls-blue:           #60A5FA;   /* Informational, links, new             */
  --nls-blue-bg:        #0A1A2E;   /* Info background (dark)                */

  /* ── Shipment Lifecycle (unique to NLS) ── */
  --nls-status-quoted:    #60A5FA; /* Quote generated                       */
  --nls-status-booked:    #A78BFA; /* Booking confirmed                     */
  --nls-status-packed:    #0ACDCF; /* Packed and ready                      */
  --nls-status-transit:   #FBBF24; /* In transit                            */
  --nls-status-delivered: #34D399; /* Delivered                             */
  --nls-status-exception: #F87171; /* Exception / hold                      */
}
```

#### Alpha & Opacity Tokens

```css
:root {
  --nls-overlay:        rgba(11, 18, 21, 0.72);   /* Modal/drawer backdrop       */
  --nls-glass:          rgba(11, 18, 21, 0.55);   /* Glassmorphism panels        */
  --nls-glass-border:   rgba(10, 205, 207, 0.12); /* Glass border glow           */
  --nls-cyan-glow:      rgba(10, 205, 207, 0.15); /* Focus ring outer glow       */
  --nls-shadow-sm:      0 1px 3px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2);
  --nls-shadow-md:      0 4px 12px rgba(0,0,0,0.35), 0 2px 4px rgba(0,0,0,0.2);
  --nls-shadow-lg:      0 12px 40px rgba(0,0,0,0.45), 0 4px 12px rgba(0,0,0,0.25);
  --nls-shadow-cyan:    0 0 20px rgba(10,205,207,0.15), 0 0 60px rgba(10,205,207,0.05);
}
```

### 2.2 Color Usage Rules

**Do:**
- Use `--nls-cyan` exclusively for primary interactive elements (buttons, links, focus)
- Apply status colors only for their semantic purpose (green=success, red=error)
- Maintain a minimum contrast ratio of 4.5:1 for body text, 3:1 for large text (WCAG AA)
- Use the shipment lifecycle palette consistently across all tracking interfaces

**Don't:**
- Use `--nls-cyan` for large background fills (it's an accent, not a surface)
- Mix status colors decoratively (amber only means "warning" or "in-transit")
- Apply `--nls-red` from the Annex Brands parent palette — this red is distinct
- Layer more than two alpha/glass effects without testing contrast

### 2.3 Dark/Light Mode Implementation

```css
/* Dark mode (default) */
[data-theme="dark"],
:root {
  --bg-primary:     var(--nls-midnight);
  --bg-surface:     var(--nls-charcoal);
  --bg-elevated:    var(--nls-slate);
  --border-default: var(--nls-graphite);
  --text-primary:   var(--nls-snow);
  --text-secondary: var(--nls-mist);
  --text-tertiary:  var(--nls-ash);
  --text-inverse:   var(--nls-midnight);
}

/* Light mode */
[data-theme="light"] {
  --bg-primary:     var(--nls-light-bg);
  --bg-surface:     var(--nls-light-surface);
  --bg-elevated:    var(--nls-white);
  --border-default: var(--nls-light-border);
  --text-primary:   var(--nls-light-text);
  --text-secondary: var(--nls-light-muted);
  --text-tertiary:  var(--nls-ash);
  --text-inverse:   var(--nls-white);
}

/* System preference detection */
@media (prefers-color-scheme: light) {
  :root:not([data-theme]) {
    --bg-primary:     var(--nls-light-bg);
    --bg-surface:     var(--nls-light-surface);
    --bg-elevated:    var(--nls-white);
    --border-default: var(--nls-light-border);
    --text-primary:   var(--nls-light-text);
    --text-secondary: var(--nls-light-muted);
    --text-tertiary:  var(--nls-ash);
    --text-inverse:   var(--nls-white);
  }
}
```

### 2.4 Gradient Definitions

```css
:root {
  /* Primary brand gradient — use for hero sections, featured cards */
  --nls-gradient-brand: linear-gradient(
    135deg,
    #0A9B9D 0%,
    #0ACDCF 40%,
    #3EDBDC 100%
  );

  /* Mesh gradient for backgrounds — subtle depth without competing */
  --nls-gradient-mesh: radial-gradient(
    ellipse at 20% 50%,
    rgba(10, 205, 207, 0.08) 0%,
    transparent 50%
  ), radial-gradient(
    ellipse at 80% 20%,
    rgba(96, 165, 250, 0.05) 0%,
    transparent 50%
  ), radial-gradient(
    ellipse at 50% 80%,
    rgba(167, 139, 250, 0.04) 0%,
    transparent 50%
  );

  /* Status bar gradient — for shipment progress indicators */
  --nls-gradient-status: linear-gradient(
    90deg,
    var(--nls-status-quoted) 0%,
    var(--nls-status-booked) 25%,
    var(--nls-status-packed) 50%,
    var(--nls-status-transit) 75%,
    var(--nls-status-delivered) 100%
  );

  /* Surface noise texture overlay */
  --nls-noise: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
}
```

---

## 3. Typography

### 3.1 Font Stack

NLS Digital uses a three-tier typographic system: a **display/heading** face for impact, a **body** face for readability, and a **monospace** face for technical content — all loaded via Google Fonts with carefully ordered fallbacks.

```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap');

:root {
  /* ── Font Families ── */
  --font-display:  'Plus Jakarta Sans', 'Futura', 'Trebuchet MS', sans-serif;
  --font-body:     'Inter', 'Helvetica Neue', 'Arial', sans-serif;
  --font-mono:     'JetBrains Mono', 'Fira Code', 'SF Mono', 'Consolas', monospace;

  /* ── Font Weights ── */
  --weight-light:    300;
  --weight-regular:  400;
  --weight-medium:   500;
  --weight-semibold: 600;
  --weight-bold:     700;
  --weight-extrabold:800;
}
```

**Why Plus Jakarta Sans?** It's a geometric sans-serif with a modern, slightly warm personality — similar to Futura (which already appears across Annex Brands' portfolio) but designed for screens. The soft terminals and open apertures give it a digital-native feel without sacrificing professionalism. It connects to the franchise heritage (Futura as fallback) while pushing forward.

**Why Inter for body?** Inter was purpose-built for computer screens with features like a tall x-height, open apertures, and optical size adjustments at small sizes. It handles UI text, form labels, and data tables without ambiguity. This is a functional choice — we need absolute legibility at 12–16px across devices.

**Why JetBrains Mono?** The platform surfaces code (API keys, tracking IDs, JSON payloads). JetBrains Mono provides increased line height, distinct character shapes (1/l/I, 0/O differentiation), and programming ligatures that signal technical competence.

### 3.2 Type Scale

Based on a **1.250 ratio (Major Third)** from a 16px base, tuned for data-dense logistics UIs:

```css
:root {
  --text-2xs:    0.625rem;   /* 10px — Micro labels, legal footnotes      */
  --text-xs:     0.75rem;    /* 12px — Table cells, metadata, timestamps  */
  --text-sm:     0.875rem;   /* 14px — Secondary body, form labels        */
  --text-base:   1rem;       /* 16px — Primary body text                  */
  --text-md:     1.125rem;   /* 18px — Lead paragraphs, card titles       */
  --text-lg:     1.25rem;    /* 20px — Section headings (H4)              */
  --text-xl:     1.5rem;     /* 24px — Page section titles (H3)           */
  --text-2xl:    1.875rem;   /* 30px — Page titles (H2)                   */
  --text-3xl:    2.25rem;    /* 36px — Hero subtitles                     */
  --text-4xl:    3rem;       /* 48px — Hero headlines                     */
  --text-5xl:    3.75rem;    /* 60px — Display / splash screens           */

  /* ── Line Heights ── */
  --leading-none:    1;
  --leading-tight:   1.15;
  --leading-snug:    1.3;
  --leading-normal:  1.5;
  --leading-relaxed: 1.625;
  --leading-loose:   1.8;

  /* ── Letter Spacing ── */
  --tracking-tighter: -0.03em;
  --tracking-tight:   -0.015em;
  --tracking-normal:   0;
  --tracking-wide:     0.025em;
  --tracking-wider:    0.05em;
  --tracking-widest:   0.1em;
}
```

### 3.3 Heading Styles (Concrete Implementations)

```css
/* ── Display / Hero ── */
.nls-display {
  font-family: var(--font-display);
  font-size: var(--text-5xl);
  font-weight: var(--weight-extrabold);
  line-height: var(--leading-none);
  letter-spacing: var(--tracking-tighter);
  color: var(--text-primary);
}

/* ── H1 — Page Title ── */
.nls-h1, h1 {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  font-weight: var(--weight-bold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--text-primary);
}

/* ── H2 — Section Title ── */
.nls-h2, h2 {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--text-primary);
}

/* ── H3 — Subsection ── */
.nls-h3, h3 {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-normal);
  color: var(--text-primary);
}

/* ── H4 — Card / Component Title ── */
.nls-h4, h4 {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: var(--weight-medium);
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-normal);
  color: var(--text-primary);
}

/* ── Body ── */
.nls-body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--weight-regular);
  line-height: var(--leading-normal);
  letter-spacing: var(--tracking-normal);
  color: var(--text-secondary);
}

/* ── Small / Caption ── */
.nls-caption {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  line-height: var(--leading-normal);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--text-tertiary);
}

/* ── Code / Technical ── */
.nls-code {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: var(--weight-regular);
  line-height: var(--leading-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--nls-cyan-bright);
  background: var(--nls-slate);
  padding: 0.125em 0.375em;
  border-radius: 4px;
}
```

### 3.4 Responsive Typography

```css
/* Fluid type scaling — headings shrink gracefully on mobile */
@media (max-width: 768px) {
  :root {
    --text-5xl: 2.5rem;    /* 60→40px */
    --text-4xl: 2rem;      /* 48→32px */
    --text-3xl: 1.75rem;   /* 36→28px */
    --text-2xl: 1.5rem;    /* 30→24px */
    --text-xl:  1.25rem;   /* 24→20px */
  }
}

/* Clamp-based fluid type (preferred for new components) */
.nls-fluid-display {
  font-size: clamp(2.5rem, 5vw + 1rem, 3.75rem);
}

.nls-fluid-h1 {
  font-size: clamp(2rem, 4vw + 0.5rem, 3rem);
}

.nls-fluid-h2 {
  font-size: clamp(1.5rem, 2.5vw + 0.5rem, 1.875rem);
}
```

### 3.5 Font Loading Strategy

```html
<!-- Preload critical fonts to prevent FOIT -->
<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Critical: Above-the-fold heading weight -->
<link rel="preload" as="font" type="font/woff2" crossorigin
  href="https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_qU79SGYB.woff2">

<style>
  /* Font-display: swap ensures text is visible during load */
  @font-face {
    font-family: 'Plus Jakarta Sans';
    font-display: swap;
    src: local('Plus Jakarta Sans'), url(...) format('woff2');
  }

  /* System font fallback while loading (prevents layout shift) */
  .fonts-loading body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    letter-spacing: -0.01em; /* Approximate Inter metrics */
  }
</style>

<script>
  // Font loading detection for fine-grained control
  if ('fonts' in document) {
    Promise.all([
      document.fonts.load('700 1em "Plus Jakarta Sans"'),
      document.fonts.load('400 1em "Inter"'),
    ]).then(() => {
      document.documentElement.classList.remove('fonts-loading');
      document.documentElement.classList.add('fonts-loaded');
    });
  }
</script>
```

---

## 4. Spacing & Layout

### 4.1 Spacing Scale

Based on a **4px base unit** — all spacing in the system is a multiple of 4:

```css
:root {
  --space-0:    0;
  --space-px:   1px;
  --space-0-5:  0.125rem;   /*  2px */
  --space-1:    0.25rem;    /*  4px */
  --space-1-5:  0.375rem;   /*  6px */
  --space-2:    0.5rem;     /*  8px */
  --space-3:    0.75rem;    /* 12px */
  --space-4:    1rem;       /* 16px */
  --space-5:    1.25rem;    /* 20px */
  --space-6:    1.5rem;     /* 24px */
  --space-8:    2rem;       /* 32px */
  --space-10:   2.5rem;     /* 40px */
  --space-12:   3rem;       /* 48px */
  --space-16:   4rem;       /* 64px */
  --space-20:   5rem;       /* 80px */
  --space-24:   6rem;       /* 96px */
  --space-32:   8rem;       /* 128px */

  /* ── Border Radius ── */
  --radius-none: 0;
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-xl:   16px;
  --radius-2xl:  24px;
  --radius-full: 9999px;
}
```

### 4.2 Layout Grid

```css
/* ── Page Container ── */
.nls-container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-inline: var(--space-6);
}

@media (min-width: 768px)  { .nls-container { padding-inline: var(--space-8); } }
@media (min-width: 1024px) { .nls-container { padding-inline: var(--space-12); } }
@media (min-width: 1440px) { .nls-container { max-width: 1400px; } }

/* ── 12-Column Grid ── */
.nls-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-6);
}

@media (max-width: 768px) {
  .nls-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-4);
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .nls-grid {
    grid-template-columns: repeat(8, 1fr);
  }
}
```

### 4.3 Breakpoints

```css
:root {
  --breakpoint-sm:   640px;     /* Mobile landscape             */
  --breakpoint-md:   768px;     /* Tablet portrait              */
  --breakpoint-lg:   1024px;    /* Tablet landscape / small desktop */
  --breakpoint-xl:   1280px;    /* Desktop                      */
  --breakpoint-2xl:  1536px;    /* Wide desktop                 */
}

/* Usage pattern — mobile first */
/* @media (min-width: 768px) { ... }  */
```

---

## 5. Iconography

### 5.1 Icon System — Lucide + Custom Logistics Set

NLS Digital uses **Lucide** as its base icon system (open source, MIT, consistent 24px grid, 1.5px stroke) supplemented by a custom logistics-specific icon set.

```bash
# Install Lucide
npm install lucide-react     # React
npm install lucide-vue-next  # Vue 3
npm install lucide            # Vanilla JS / SVG sprites
```

#### Icon Sizing Tokens

```css
:root {
  --icon-xs:   14px;    /* Inline with caption text           */
  --icon-sm:   16px;    /* Inline with body text, table cells */
  --icon-md:   20px;    /* Buttons, form inputs               */
  --icon-lg:   24px;    /* Navigation, section markers        */
  --icon-xl:   32px;    /* Feature icons, empty states        */
  --icon-2xl:  48px;    /* Hero features, onboarding          */
}
```

#### Icon Styling Rules

```css
/* Base icon class */
.nls-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--icon-lg);
  height: var(--icon-lg);
  color: currentColor;
  stroke-width: 1.5px;
  transition: color 150ms ease, transform 150ms ease;
}

/* Interactive icon (buttons, links) */
.nls-icon--interactive {
  cursor: pointer;
  border-radius: var(--radius-md);
  padding: var(--space-1-5);
}

.nls-icon--interactive:hover {
  color: var(--nls-cyan);
  background: var(--nls-cyan-glow);
  transform: translateY(-1px);
}

.nls-icon--interactive:active {
  transform: translateY(0) scale(0.95);
}

/* Icon inside a button — auto-sizes to text */
.nls-btn .nls-icon {
  width: 1.25em;
  height: 1.25em;
  margin-right: 0.375em;
}
```

### 5.2 Custom Logistics Icons (SVG Definitions)

These icons extend Lucide for logistics-specific concepts. All follow the same 24×24 viewBox, 1.5px stroke, round linecap/linejoin conventions.

```html
<svg xmlns="http://www.w3.org/2000/svg" style="display:none">

  <!-- nls-crate: Custom crating icon -->
  <symbol id="nls-crate" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="1.5"
    stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="7" width="18" height="14" rx="1"/>
    <path d="M3 11h18"/>
    <path d="M9 7v14"/>
    <path d="M15 7v14"/>
    <path d="M8 3l4 4 4-4"/>
  </symbol>

  <!-- nls-fragile: FLAV item indicator -->
  <symbol id="nls-fragile" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="1.5"
    stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2L8 8h8l-4-6z"/>
    <path d="M12 8v7"/>
    <path d="M9 22h6"/>
    <path d="M10 15c0 2-2 3-2 5h8c0-2-2-3-2-5"/>
    <circle cx="12" cy="15" r="1" fill="currentColor"/>
  </symbol>

  <!-- nls-quote: Instant quote icon -->
  <symbol id="nls-quote" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="1.5"
    stroke-linecap="round" stroke-linejoin="round">
    <rect x="4" y="3" width="16" height="18" rx="2"/>
    <path d="M8 7h8"/>
    <path d="M8 11h5"/>
    <path d="M8 15h3"/>
    <circle cx="16" cy="15" r="3"/>
    <path d="M16 13.5v1.5l1 1"/>
  </symbol>

  <!-- nls-tracking: Shipment tracking icon -->
  <symbol id="nls-tracking" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="1.5"
    stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 3v3"/>
    <path d="M12 18v3"/>
    <path d="M3 12h3"/>
    <path d="M18 12h3"/>
    <path d="M12 12l4-4" stroke-width="2"/>
  </symbol>

  <!-- nls-white-glove: Premium service icon -->
  <symbol id="nls-white-glove" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="1.5"
    stroke-linecap="round" stroke-linejoin="round">
    <path d="M7 11V6a5 5 0 0110 0v5"/>
    <path d="M5 14a2 2 0 012-2h10a2 2 0 012 2v3a5 5 0 01-5 5h-4a5 5 0 01-5-5v-3z"/>
    <path d="M10 12v2"/>
    <path d="M14 12v2"/>
  </symbol>

</svg>

<!-- Usage -->
<svg class="nls-icon"><use href="#nls-crate"/></svg>
<svg class="nls-icon"><use href="#nls-fragile"/></svg>
```

### 5.3 Icon Usage Matrix

| Context | Size Token | Stroke | Color Rule |
|---|---|---|---|
| Inline body text | `--icon-sm` (16px) | 1.5px | `currentColor` (inherits text color) |
| Button with label | `--icon-md` (20px) | 1.5px | Button text color |
| Navigation item | `--icon-lg` (24px) | 1.5px | `--text-secondary`, active: `--nls-cyan` |
| Status badge | `--icon-sm` (16px) | 2px | Semantic status color |
| Empty state | `--icon-2xl` (48px) | 1px | `--text-tertiary` |
| Feature card | `--icon-xl` (32px) | 1.5px | `--nls-cyan` |
| Favicon / App icon | 16–512px | filled | `--nls-cyan` on `--nls-midnight` |

---

## 6. Components & Widgets

### 6.1 Buttons

```css
/* ── Base Button ── */
.nls-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-display);
  font-weight: var(--weight-semibold);
  font-size: var(--text-sm);
  line-height: 1;
  padding: var(--space-3) var(--space-5);
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  transition:
    background-color 150ms ease,
    border-color 150ms ease,
    color 150ms ease,
    box-shadow 150ms ease,
    transform 80ms ease;
}

.nls-btn:active {
  transform: scale(0.97);
}

.nls-btn:focus-visible {
  outline: 2px solid var(--nls-cyan);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px var(--nls-cyan-glow);
}

/* ── Primary (cyan fill) ── */
.nls-btn--primary {
  background: var(--nls-cyan);
  color: var(--nls-midnight);
  border-color: var(--nls-cyan);
}
.nls-btn--primary:hover {
  background: var(--nls-cyan-bright);
  border-color: var(--nls-cyan-bright);
  box-shadow: var(--nls-shadow-cyan);
}

/* ── Secondary (outline) ── */
.nls-btn--secondary {
  background: transparent;
  color: var(--nls-cyan);
  border-color: var(--nls-cyan-muted);
}
.nls-btn--secondary:hover {
  background: var(--nls-cyan-subtle);
  border-color: var(--nls-cyan);
}

/* ── Ghost (no border) ── */
.nls-btn--ghost {
  background: transparent;
  color: var(--text-secondary);
  border-color: transparent;
}
.nls-btn--ghost:hover {
  color: var(--text-primary);
  background: rgba(255,255,255,0.05);
}

/* ── Danger ── */
.nls-btn--danger {
  background: transparent;
  color: var(--nls-red);
  border-color: rgba(248, 113, 113, 0.3);
}
.nls-btn--danger:hover {
  background: var(--nls-red-bg);
  border-color: var(--nls-red);
}

/* ── Sizes ── */
.nls-btn--sm  { font-size: var(--text-xs); padding: var(--space-2) var(--space-3); }
.nls-btn--lg  { font-size: var(--text-base); padding: var(--space-4) var(--space-8); border-radius: var(--radius-lg); }
.nls-btn--xl  { font-size: var(--text-md); padding: var(--space-5) var(--space-10); border-radius: var(--radius-lg); }

/* ── Loading State ── */
.nls-btn--loading {
  position: relative;
  color: transparent;
  pointer-events: none;
}
.nls-btn--loading::after {
  content: '';
  position: absolute;
  width: 18px;
  height: 18px;
  border: 2px solid transparent;
  border-top-color: currentColor;
  border-right-color: currentColor;
  border-radius: 50%;
  animation: nls-spin 0.6s linear infinite;
  /* Use the original text color for the spinner */
  color: var(--nls-midnight);
}
```

### 6.2 Cards

```css
/* ── Base Card ── */
.nls-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  transition:
    border-color 200ms ease,
    box-shadow 200ms ease,
    transform 200ms ease;
}

/* ── Interactive Card ── */
.nls-card--interactive {
  cursor: pointer;
}
.nls-card--interactive:hover {
  border-color: var(--nls-cyan-muted);
  box-shadow: var(--nls-shadow-md), var(--nls-shadow-cyan);
  transform: translateY(-2px);
}

/* ── Glass Card (for overlays, featured content) ── */
.nls-card--glass {
  background: var(--nls-glass);
  backdrop-filter: blur(20px) saturate(1.5);
  -webkit-backdrop-filter: blur(20px) saturate(1.5);
  border: 1px solid var(--nls-glass-border);
}

/* ── Status Card (shipment tracking) ── */
.nls-card--status {
  position: relative;
  overflow: hidden;
}
.nls-card--status::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--status-color, var(--nls-cyan));
}

/* Usage: <div class="nls-card nls-card--status" style="--status-color: var(--nls-status-transit)"> */
```

### 6.3 Form Inputs

```css
/* ── Base Input ── */
.nls-input {
  width: 100%;
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--text-primary);
  background: var(--nls-slate);
  border: 1px solid var(--nls-graphite);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-4);
  transition:
    border-color 150ms ease,
    box-shadow 150ms ease,
    background-color 150ms ease;
}

.nls-input::placeholder {
  color: var(--text-tertiary);
}

.nls-input:hover {
  border-color: var(--nls-ash);
}

.nls-input:focus {
  outline: none;
  border-color: var(--nls-cyan);
  box-shadow: 0 0 0 3px var(--nls-cyan-glow);
  background: var(--nls-charcoal);
}

/* ── Error State ── */
.nls-input--error {
  border-color: var(--nls-red);
}
.nls-input--error:focus {
  box-shadow: 0 0 0 3px rgba(248, 113, 113, 0.15);
}

/* ── Input with Icon ── */
.nls-input-group {
  position: relative;
}
.nls-input-group .nls-icon {
  position: absolute;
  left: var(--space-3);
  top: 50%;
  transform: translateY(-50%);
  width: var(--icon-md);
  height: var(--icon-md);
  color: var(--text-tertiary);
  pointer-events: none;
  transition: color 150ms ease;
}
.nls-input-group .nls-input {
  padding-left: calc(var(--icon-md) + var(--space-5));
}
.nls-input-group:focus-within .nls-icon {
  color: var(--nls-cyan);
}

/* ── Input Label ── */
.nls-label {
  display: block;
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--text-tertiary);
  margin-bottom: var(--space-2);
}
```

### 6.4 Shipment Status Widget

The signature NLS Digital component — a multi-step progress tracker for shipment lifecycle:

```css
/* ── Status Tracker ── */
.nls-tracker {
  display: flex;
  align-items: flex-start;
  gap: 0;
  padding: var(--space-6);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.nls-tracker__step {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-width: 100px;
}

/* Step connector line */
.nls-tracker__step:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 16px;
  left: calc(50% + 20px);
  right: calc(-50% + 20px);
  height: 2px;
  background: var(--nls-graphite);
  transition: background 400ms ease;
}

/* Completed connector */
.nls-tracker__step--complete:not(:last-child)::after {
  background: var(--nls-cyan);
}

/* Active connector (animated) */
.nls-tracker__step--active:not(:last-child)::after {
  background: linear-gradient(
    90deg,
    var(--nls-cyan) 0%,
    var(--nls-graphite) 100%
  );
  background-size: 200% 100%;
  animation: nls-pulse-gradient 2s ease-in-out infinite;
}

/* Step node (circle) */
.nls-tracker__node {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  background: var(--nls-slate);
  border: 2px solid var(--nls-graphite);
  color: var(--text-tertiary);
  position: relative;
  z-index: 1;
  transition: all 300ms ease;
}

.nls-tracker__step--complete .nls-tracker__node {
  background: var(--nls-cyan);
  border-color: var(--nls-cyan);
  color: var(--nls-midnight);
}

.nls-tracker__step--active .nls-tracker__node {
  border-color: var(--nls-cyan);
  color: var(--nls-cyan);
  box-shadow: 0 0 0 4px var(--nls-cyan-glow), var(--nls-shadow-cyan);
  animation: nls-glow-pulse 2s ease-in-out infinite;
}

.nls-tracker__step--error .nls-tracker__node {
  border-color: var(--nls-red);
  color: var(--nls-red);
  box-shadow: 0 0 0 4px rgba(248, 113, 113, 0.15);
}

/* Step label */
.nls-tracker__label {
  margin-top: var(--space-3);
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  color: var(--text-tertiary);
  text-align: center;
  transition: color 300ms ease;
}

.nls-tracker__step--complete .nls-tracker__label,
.nls-tracker__step--active .nls-tracker__label {
  color: var(--text-primary);
}

/* Step timestamp */
.nls-tracker__time {
  margin-top: var(--space-1);
  font-family: var(--font-mono);
  font-size: var(--text-2xs);
  color: var(--text-tertiary);
}
```

```html
<!-- Usage Example -->
<div class="nls-tracker">
  <div class="nls-tracker__step nls-tracker__step--complete">
    <div class="nls-tracker__node">✓</div>
    <span class="nls-tracker__label">Quoted</span>
    <span class="nls-tracker__time">Feb 10, 14:22</span>
  </div>
  <div class="nls-tracker__step nls-tracker__step--complete">
    <div class="nls-tracker__node">✓</div>
    <span class="nls-tracker__label">Booked</span>
    <span class="nls-tracker__time">Feb 10, 15:01</span>
  </div>
  <div class="nls-tracker__step nls-tracker__step--active">
    <div class="nls-tracker__node">3</div>
    <span class="nls-tracker__label">In Transit</span>
    <span class="nls-tracker__time">Est. Feb 14</span>
  </div>
  <div class="nls-tracker__step">
    <div class="nls-tracker__node">4</div>
    <span class="nls-tracker__label">Delivered</span>
    <span class="nls-tracker__time">—</span>
  </div>
</div>
```

### 6.5 Data Table

```css
/* ── NLS Data Table ── */
.nls-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-family: var(--font-body);
  font-size: var(--text-sm);
}

.nls-table thead th {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--text-tertiary);
  background: var(--bg-surface);
  padding: var(--space-3) var(--space-4);
  border-bottom: 1px solid var(--border-default);
  text-align: left;
  position: sticky;
  top: 0;
  z-index: 1;
}

.nls-table tbody td {
  padding: var(--space-3) var(--space-4);
  border-bottom: 1px solid var(--nls-slate);
  color: var(--text-secondary);
  transition: background 150ms ease;
}

.nls-table tbody tr:hover td {
  background: rgba(255,255,255,0.02);
}

/* Sortable column header */
.nls-table th[data-sortable] {
  cursor: pointer;
  user-select: none;
}
.nls-table th[data-sortable]:hover {
  color: var(--nls-cyan);
}
.nls-table th[data-sort="asc"]::after  { content: ' ↑'; }
.nls-table th[data-sort="desc"]::after { content: ' ↓'; }

/* Monospace columns (IDs, tracking numbers, prices) */
.nls-table .col-mono {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-wide);
}
```

### 6.6 Badges & Status Pills

```css
/* ── Base Badge ── */
.nls-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1-5);
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  line-height: 1.4;
}

/* Status variants */
.nls-badge--quoted   { background: var(--nls-blue-bg);  color: var(--nls-blue);  }
.nls-badge--booked   { background: rgba(167,139,250,0.1); color: #A78BFA; }
.nls-badge--packed   { background: rgba(10,205,207,0.1); color: var(--nls-cyan); }
.nls-badge--transit  { background: var(--nls-amber-bg); color: var(--nls-amber); }
.nls-badge--delivered{ background: var(--nls-green-bg); color: var(--nls-green); }
.nls-badge--error    { background: var(--nls-red-bg);   color: var(--nls-red);   }

/* Animated dot indicator for active states */
.nls-badge--pulse::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  animation: nls-badge-pulse 2s ease-in-out infinite;
}
```

### 6.7 Toast / Notification

```css
/* ── Toast Notification ── */
.nls-toast {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  min-width: 320px;
  max-width: 480px;
  padding: var(--space-4) var(--space-5);
  background: var(--nls-charcoal);
  border: 1px solid var(--nls-graphite);
  border-radius: var(--radius-lg);
  box-shadow: var(--nls-shadow-lg);
  animation: nls-toast-in 300ms cubic-bezier(0.16, 1, 0.3, 1);
}

.nls-toast--success { border-left: 3px solid var(--nls-green); }
.nls-toast--warning { border-left: 3px solid var(--nls-amber); }
.nls-toast--error   { border-left: 3px solid var(--nls-red);   }
.nls-toast--info    { border-left: 3px solid var(--nls-blue);  }

.nls-toast__title {
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  color: var(--text-primary);
}

.nls-toast__body {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--text-secondary);
  margin-top: var(--space-1);
}

.nls-toast__dismiss {
  margin-left: auto;
  flex-shrink: 0;
  opacity: 0.5;
  transition: opacity 150ms ease;
}
.nls-toast__dismiss:hover { opacity: 1; }
```

---

## 7. Motion & Animation

### 7.1 Easing Curves

NLS Digital motion uses physics-based easing that feels responsive and natural. Three curves cover all use cases:

```css
:root {
  /* ── Standard: UI feedback (hover, focus, toggle) ── */
  --ease-standard:     cubic-bezier(0.2, 0, 0, 1);

  /* ── Enter: Elements appearing (modals, toasts, dropdowns) ── */
  --ease-enter:        cubic-bezier(0.16, 1, 0.3, 1);

  /* ── Exit: Elements disappearing (close, dismiss, collapse) ── */
  --ease-exit:         cubic-bezier(0.4, 0, 0.7, 0.2);

  /* ── Spring: Playful, physical interactions (drag, bounce) ── */
  --ease-spring:       cubic-bezier(0.34, 1.56, 0.64, 1);

  /* ── Glide: Long-distance transitions (page, route changes) ── */
  --ease-glide:        cubic-bezier(0.25, 0.1, 0.25, 1);
}
```

### 7.2 Duration Scale

```css
:root {
  --duration-instant:    50ms;    /* Checkbox, toggle snap           */
  --duration-fast:       100ms;   /* Button press feedback           */
  --duration-normal:     200ms;   /* Hover states, focus rings       */
  --duration-moderate:   300ms;   /* Dropdowns, tooltips             */
  --duration-slow:       400ms;   /* Modals, page sections           */
  --duration-slower:     600ms;   /* Route transitions, hero reveals */
  --duration-slowest:    1000ms;  /* Splash sequences, onboarding    */
}
```

### 7.3 Transition Presets

```css
/* ── Ready-made transition strings ── */
:root {
  --transition-colors:   color var(--duration-normal) var(--ease-standard),
                         background-color var(--duration-normal) var(--ease-standard),
                         border-color var(--duration-normal) var(--ease-standard);

  --transition-shadow:   box-shadow var(--duration-normal) var(--ease-standard);

  --transition-transform: transform var(--duration-normal) var(--ease-standard);

  --transition-all:      all var(--duration-normal) var(--ease-standard);

  --transition-fade:     opacity var(--duration-moderate) var(--ease-standard);
}
```

### 7.4 Keyframe Animations

```css
/* ── Spinner (loading buttons, async indicators) ── */
@keyframes nls-spin {
  to { transform: rotate(360deg); }
}

/* ── Pulse glow (active tracking node) ── */
@keyframes nls-glow-pulse {
  0%, 100% { box-shadow: 0 0 0 4px var(--nls-cyan-glow), 0 0 20px rgba(10,205,207,0.1); }
  50%      { box-shadow: 0 0 0 8px rgba(10,205,207,0.05), 0 0 40px rgba(10,205,207,0.15); }
}

/* ── Badge pulse dot ── */
@keyframes nls-badge-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.5; transform: scale(0.75); }
}

/* ── Gradient shimmer (status bar, progress) ── */
@keyframes nls-pulse-gradient {
  0%   { background-position: 100% 50%; }
  50%  { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

/* ── Toast entrance ── */
@keyframes nls-toast-in {
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* ── Toast exit ── */
@keyframes nls-toast-out {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
}

/* ── Fade in up (general entrance) ── */
@keyframes nls-fade-in-up {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ── Scale in (modals, dialogs) ── */
@keyframes nls-scale-in {
  from {
    opacity: 0;
    transform: scale(0.92);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* ── Slide in from right (drawers, side panels) ── */
@keyframes nls-slide-in-right {
  from { transform: translateX(100%); }
  to   { transform: translateX(0); }
}

/* ── Skeleton shimmer (content loading) ── */
@keyframes nls-shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* ── Staggered list entrance ── */
@keyframes nls-stagger-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### 7.5 Animation Utility Classes

```css
/* ── Entrance Animations ── */
.nls-animate-fade-in {
  animation: nls-fade-in-up var(--duration-slow) var(--ease-enter) both;
}

.nls-animate-scale-in {
  animation: nls-scale-in var(--duration-moderate) var(--ease-enter) both;
}

.nls-animate-slide-right {
  animation: nls-slide-in-right var(--duration-slow) var(--ease-enter) both;
}

/* ── Staggered Children ── */
.nls-stagger > * {
  animation: nls-stagger-in var(--duration-moderate) var(--ease-enter) both;
}
.nls-stagger > *:nth-child(1)  { animation-delay: 0ms; }
.nls-stagger > *:nth-child(2)  { animation-delay: 50ms; }
.nls-stagger > *:nth-child(3)  { animation-delay: 100ms; }
.nls-stagger > *:nth-child(4)  { animation-delay: 150ms; }
.nls-stagger > *:nth-child(5)  { animation-delay: 200ms; }
.nls-stagger > *:nth-child(6)  { animation-delay: 250ms; }
.nls-stagger > *:nth-child(7)  { animation-delay: 300ms; }
.nls-stagger > *:nth-child(8)  { animation-delay: 350ms; }
.nls-stagger > *:nth-child(n+9){ animation-delay: 400ms; }

/* ── Loading Skeleton ── */
.nls-skeleton {
  background: linear-gradient(
    90deg,
    var(--nls-slate) 25%,
    var(--nls-graphite) 50%,
    var(--nls-slate) 75%
  );
  background-size: 200% 100%;
  animation: nls-shimmer 1.5s var(--ease-glide) infinite;
  border-radius: var(--radius-sm);
}

.nls-skeleton--text {
  height: 1em;
  margin-bottom: var(--space-2);
}

.nls-skeleton--heading {
  height: 1.5em;
  width: 60%;
  margin-bottom: var(--space-4);
}

.nls-skeleton--avatar {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
}
```

### 7.6 Reduced Motion

```css
/* ── Accessibility: respect user preferences ── */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  /* Keep functional indicators that aren't decorative */
  .nls-btn--loading::after {
    animation-duration: 1.2s !important;
    animation-iteration-count: infinite !important;
  }

  .nls-tracker__step--active .nls-tracker__node {
    animation: none;
    box-shadow: 0 0 0 4px var(--nls-cyan-glow);
  }
}
```

### 7.7 Scroll-Triggered Animations

```css
/* ── Intersection Observer CSS hooks ── */
[data-nls-reveal] {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity var(--duration-slower) var(--ease-enter),
    transform var(--duration-slower) var(--ease-enter);
}

[data-nls-reveal="visible"] {
  opacity: 1;
  transform: translateY(0);
}

[data-nls-reveal][data-delay="1"] { transition-delay: 100ms; }
[data-nls-reveal][data-delay="2"] { transition-delay: 200ms; }
[data-nls-reveal][data-delay="3"] { transition-delay: 300ms; }
[data-nls-reveal][data-delay="4"] { transition-delay: 400ms; }
```

```js
// Minimal scroll-reveal observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.dataset.nlsReveal = 'visible';
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
);

document.querySelectorAll('[data-nls-reveal]').forEach(el => observer.observe(el));
```

---

## 8. Surfaces & Effects

### 8.1 Glassmorphism Panels

```css
/* Standard glass panel */
.nls-glass {
  background: var(--nls-glass);
  backdrop-filter: blur(20px) saturate(1.5);
  -webkit-backdrop-filter: blur(20px) saturate(1.5);
  border: 1px solid var(--nls-glass-border);
  border-radius: var(--radius-xl);
}

/* Elevated glass (modals, popovers) */
.nls-glass--elevated {
  background: rgba(20, 28, 32, 0.75);
  backdrop-filter: blur(40px) saturate(1.8);
  -webkit-backdrop-filter: blur(40px) saturate(1.8);
  border: 1px solid rgba(10, 205, 207, 0.08);
  box-shadow: var(--nls-shadow-lg);
}

/* ── Fallback for no backdrop-filter support ── */
@supports not (backdrop-filter: blur(1px)) {
  .nls-glass,
  .nls-glass--elevated {
    background: rgba(20, 28, 32, 0.95);
  }
}
```

### 8.2 Noise Texture Overlay

```css
/* Apply subtle grain to large surfaces for depth */
.nls-noise::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--nls-noise);
  opacity: 0.4;
  pointer-events: none;
  mix-blend-mode: overlay;
  z-index: 1;
}

/* Container must be positioned */
.nls-noise {
  position: relative;
  isolation: isolate;
}
```

### 8.3 Glow Effects

```css
/* Cyan glow border — for featured/promoted content */
.nls-glow {
  position: relative;
}
.nls-glow::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    135deg,
    var(--nls-cyan) 0%,
    transparent 40%,
    transparent 60%,
    var(--nls-cyan-muted) 100%
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

/* Animated glow rotation */
.nls-glow--animated::before {
  background: conic-gradient(
    from var(--glow-angle, 0deg),
    transparent 0%,
    var(--nls-cyan) 10%,
    transparent 20%,
    transparent 100%
  );
  animation: nls-glow-rotate 4s linear infinite;
}

@keyframes nls-glow-rotate {
  to { --glow-angle: 360deg; }
}

/* Requires @property for animated CSS variable */
@property --glow-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}
```

### 8.4 Dividers & Separators

```css
/* Standard divider */
.nls-divider {
  height: 1px;
  background: var(--border-default);
  border: none;
  margin: var(--space-6) 0;
}

/* Gradient divider (section breaks) */
.nls-divider--gradient {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--nls-graphite) 20%,
    var(--nls-cyan-muted) 50%,
    var(--nls-graphite) 80%,
    transparent 100%
  );
  border: none;
}
```

---

## 9. Code & API Presentation

### 9.1 Code Block Styling

NLS Digital platforms display code (API keys, cURL examples, JSON responses). The syntax theme is custom:

```css
/* ── Code Block Container ── */
.nls-codeblock {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  background: var(--nls-midnight);
  border: 1px solid var(--nls-slate);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  overflow-x: auto;
  position: relative;
  tab-size: 2;
}

/* Copy button (top-right) */
.nls-codeblock__copy {
  position: absolute;
  top: var(--space-3);
  right: var(--space-3);
  opacity: 0;
  transition: opacity var(--duration-normal) var(--ease-standard);
}
.nls-codeblock:hover .nls-codeblock__copy {
  opacity: 1;
}

/* Language label (top-left) */
.nls-codeblock__lang {
  position: absolute;
  top: var(--space-3);
  left: var(--space-4);
  font-size: var(--text-2xs);
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--text-tertiary);
}

/* ── Syntax Theme: NLS Midnight ── */
.nls-syntax .keyword    { color: #C792EA; }  /* purple    */
.nls-syntax .string     { color: #C3E88D; }  /* green     */
.nls-syntax .number     { color: #F78C6C; }  /* orange    */
.nls-syntax .function   { color: #82AAFF; }  /* blue      */
.nls-syntax .comment    { color: #546E7A; font-style: italic; }
.nls-syntax .property   { color: var(--nls-cyan-bright); }
.nls-syntax .punctuation{ color: var(--nls-mist); }
.nls-syntax .boolean    { color: #FF5370; }  /* red       */
.nls-syntax .tag        { color: #F07178; }  /* coral     */
.nls-syntax .attr-name  { color: #FFCB6B; }  /* yellow    */
```

### 9.2 Inline Code & API Keys

```css
/* Inline code */
code:not([class]) {
  font-family: var(--font-mono);
  font-size: 0.875em;
  color: var(--nls-cyan-bright);
  background: var(--nls-slate);
  padding: 0.1em 0.4em;
  border-radius: var(--radius-sm);
  word-break: break-all;
}

/* API key display (partially masked) */
.nls-api-key {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  letter-spacing: var(--tracking-wider);
  background: var(--nls-slate);
  border: 1px solid var(--nls-graphite);
  border-radius: var(--radius-md);
  padding: var(--space-2) var(--space-4);
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
}

.nls-api-key__value {
  color: var(--text-tertiary);
}
.nls-api-key__value--revealed {
  color: var(--nls-cyan-bright);
}
```

---

## 10. Accessibility Standards

### 10.1 Contrast Ratios

| Pair | Ratio | WCAG Level |
|---|---|---|
| `--nls-snow` on `--nls-midnight` | 16.2:1 | AAA |
| `--nls-cloud` on `--nls-midnight` | 11.4:1 | AAA |
| `--nls-mist` on `--nls-midnight` | 6.8:1 | AA |
| `--nls-cyan` on `--nls-midnight` | 8.9:1 | AAA |
| `--nls-ash` on `--nls-midnight` | 4.1:1 | AA (large text only) |
| `--nls-light-text` on `--nls-light-bg` | 14.8:1 | AAA |

### 10.2 Focus Management

```css
/* ── Focus ring: visible for keyboard users, hidden for mouse ── */
:focus-visible {
  outline: 2px solid var(--nls-cyan);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px var(--nls-cyan-glow);
}

:focus:not(:focus-visible) {
  outline: none;
  box-shadow: none;
}

/* ── Skip link ── */
.nls-skip-link {
  position: fixed;
  top: -100%;
  left: var(--space-4);
  z-index: 9999;
  padding: var(--space-3) var(--space-5);
  background: var(--nls-cyan);
  color: var(--nls-midnight);
  font-weight: var(--weight-semibold);
  border-radius: 0 0 var(--radius-md) var(--radius-md);
  transition: top var(--duration-fast) var(--ease-enter);
}
.nls-skip-link:focus {
  top: 0;
}
```

### 10.3 Aria Patterns for Custom Widgets

```html
<!-- Status tracker aria pattern -->
<div class="nls-tracker" role="progressbar"
  aria-valuemin="0" aria-valuemax="4" aria-valuenow="2"
  aria-label="Shipment progress: In Transit">
  ...
</div>

<!-- Toast notification aria pattern -->
<div class="nls-toast" role="alert" aria-live="assertive">
  <p class="nls-toast__title">Shipment Confirmed</p>
  <p class="nls-toast__body">Tracking #NLS-2026-00847 is now active.</p>
</div>

<!-- Sortable table header -->
<th data-sortable aria-sort="ascending" role="columnheader">
  Tracking ID
</th>
```

---

## 11. Brand Application Examples

### 11.1 Complete Page Shell

```html
<!DOCTYPE html>
<html lang="en" data-theme="dark" class="fonts-loading">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NLS Digital — Shipment Dashboard</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/nls-tokens.css">
  <link rel="stylesheet" href="/css/nls-components.css">
</head>
<body style="background: var(--bg-primary); color: var(--text-primary);">

  <a href="#main" class="nls-skip-link">Skip to main content</a>

  <header class="nls-glass" style="position:sticky;top:0;z-index:50;">
    <nav class="nls-container" style="display:flex;align-items:center;height:64px;">
      <!-- NLS Logo: Wordmark in cyan, always left-aligned -->
      <span style="font-family:var(--font-display);font-weight:800;font-size:var(--text-lg);color:var(--nls-cyan);letter-spacing:var(--tracking-tight);">
        NLS<span style="color:var(--text-tertiary);font-weight:400;">digital</span>
      </span>
    </nav>
  </header>

  <main id="main" class="nls-container" style="padding-block:var(--space-12);">
    <h1 class="nls-h1">Active Shipments</h1>
    <p class="nls-body" style="margin-top:var(--space-2);max-width:60ch;">
      Track, manage, and optimize every shipment across all NLS service tiers.
    </p>
  </main>

</body>
</html>
```

### 11.2 Wordmark Specification

The NLS Digital wordmark combines **"NLS"** in `--nls-cyan` at `--weight-extrabold` with **"digital"** in `--text-tertiary` at `--weight-regular`, both in `--font-display` (Plus Jakarta Sans). The two parts are set as a single inline element with no separator.

```
NLSdigital          ← dark backgrounds
NLSdigital          ← light backgrounds (NLS in --nls-cyan-muted)
```

Minimum clear space around the wordmark equals the cap-height of the "N". Minimum reproduction size is 80px wide for digital, 20mm for print.

---

## 12. File Architecture

```
nls-digital-brand/
├── BRAND_GUIDELINES.md           ← This document
├── tokens/
│   ├── nls-tokens.css            ← All CSS custom properties
│   ├── nls-tokens.json           ← Design tokens (Style Dictionary format)
│   └── nls-tokens.scss           ← SCSS variables
├── css/
│   ├── nls-reset.css             ← Minimal CSS reset
│   ├── nls-typography.css        ← Type scale + font loading
│   ├── nls-components.css        ← All component styles
│   └── nls-animations.css        ← Keyframes + utility classes
├── icons/
│   ├── nls-logistics.svg         ← Custom icon sprite sheet
│   └── README.md                 ← Icon usage guide
├── fonts/
│   └── README.md                 ← Font license + loading instructions
└── examples/
    ├── dashboard.html            ← Reference implementation
    ├── tracking-page.html        ← Shipment tracking layout
    └── api-docs.html             ← API documentation theme
```

---

## 13. Versioning & Governance

| Version | Date | Change Summary |
|---|---|---|
| 2.0 | 2026-02-13 | Initial digital division brand system |

**Change process:** All modifications to this document require review by the NLS Digital Design Lead and Engineering Lead. Token changes must propagate through the design token pipeline (JSON → CSS/SCSS/JS) before deployment. Semantic versioning: major = breaking visual changes, minor = new components/tokens, patch = corrections/clarifications.

**Token distribution:** The single source of truth is `nls-tokens.json`. Platform-specific formats (CSS custom properties, SCSS variables, iOS/Android constants, Figma variables) are generated from this file via Style Dictionary. Direct editing of derived formats is prohibited.

---

*NLS Digital is a division of Annex Brands, Inc. · 7580 Metropolitan Drive, Suite 200, San Diego, CA 92108*
*© 2026 Annex Brands, Inc. All rights reserved. Confidential — Internal Use Only.*