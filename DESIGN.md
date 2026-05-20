---
name: mannyflo.com
description: Roma / Feria Direction 07 · the calm editorial cousin of Colonia. Magazine serif on warm parchment, chaptered like a printed notebook.
colors:
  paper: "#F5EFE3"
  paper-2: "#EFE8D8"
  ink: "#1C1816"
  ink-mid: "#4B4238"
  ink-subtle: "#8B7F6E"
  ink-on-emphasis: "#F5EFE3"
  tezontle: "#C46B3A"
  tezontle-strong: "#A35828"
  ceiba: "#2F5544"
  maiz: "#C89A3A"
  cobalto: "#1E4FA6"
  rosa: "#B5495A"
  border: "rgba(28, 24, 22, 0.22)"
  border-subtle: "rgba(28, 24, 22, 0.12)"
  border-strong: "#1C1816"
typography:
  display:
    fontFamily: "Fraunces, Charter, Georgia, serif"
    fontSize: "clamp(3rem, 6.5vw, 5.25rem)"
    fontWeight: 400
    fontVariationSettings: '"opsz" 144'
    lineHeight: 0.9
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Fraunces, Charter, Georgia, serif"
    fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)"
    fontWeight: 400
    fontVariationSettings: '"opsz" 72'
    lineHeight: 1.05
    letterSpacing: "-0.012em"
  title:
    fontFamily: "Fraunces, Charter, Georgia, serif"
    fontSize: "1.375rem"
    fontWeight: 700
    fontVariationSettings: '"opsz" 18'
    lineHeight: 1.2
    letterSpacing: "-0.005em"
  body:
    fontFamily: "Newsreader, Georgia, Times New Roman, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  label:
    fontFamily: "Cutive Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.12em"
rounded:
  none: "0"
  sm: "2px"
  md: "6px"
  lg: "8px"
  xl: "10px"
  pill: "999px"
  full: "9999px"
spacing:
  px-1: "4px"
  px-2: "8px"
  px-3: "12px"
  px-4: "16px"
  px-5: "20px"
  px-6: "24px"
  px-7: "28px"
  px-8: "32px"
  px-9: "40px"
  px-10: "48px"
  px-12: "64px"
  px-14: "96px"
  px-20: "120px"
  px-24: "144px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
    fontFamily: "{typography.body.fontFamily}"
    fontWeight: 600
  button-primary-hover:
    backgroundColor: "{colors.tezontle}"
    textColor: "{colors.paper}"
  button-primary-active:
    backgroundColor: "{colors.tezontle-strong}"
    textColor: "{colors.paper}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
    border: "1.5px solid {colors.ink}"
    fontFamily: "{typography.body.fontFamily}"
    fontWeight: 600
  button-ghost-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
    border: "1px solid {colors.border}"
    fontFamily: "{typography.label.fontFamily}"
  chip-hover:
    borderColor: "{colors.tezontle}"
    textColor: "{colors.tezontle}"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "32px"
    border: "1px solid {colors.border}"
  card-hover:
    transform: "translateY(-1px)"
    boxShadow: "0 1px 0 rgba(28,24,22,0.10), 0 6px 16px -8px rgba(28,24,22,0.16)"
    borderColor: "rgba(28, 24, 22, 0.30)"
---

# Design System: mannyflo.com

## 1. Overview

**Creative North Star: "Roma / Feria Direction 07 · the calm editorial cousin of Colonia. Magazine serif on warm parchment, chaptered like a printed notebook."**

Roma is the magazine-serif, warm-parchment direction in the Feria seven-direction system. It is the calm editorial half of a deliberately bilingual brand language; its loud sibling is Colonia (the bilingual CDMX direction with hard rectangles, Talavera cobalt-and-rose tile, Spanish-first body). On mannyflo.com, Roma carries its origin in palette names (Tezontle, Maíz, Ceiba, Cobalto, Rosa) and the "Cuaderno" eyebrow framing. Body copy is English by design. Heritage lives in the form, not the words.

The page reads as a printed notebook: warm parchment surface, dense press ink, a single warm accent (Tezontle) that opens every chapter and carries the italic emphasis word in every section headline. Three numbered chapters (01 Stack, 02 In the Making, 03 Stewardship) sit under a heritage-color ribbon that doubles as a visual table of contents — each chapter's eyebrow dot color matches its band on the ribbon. The system rejects glassmorphism, gradient blobs, hero-metric templates, identical card grids, and SaaS landing clichés. It rejects Latin kitsch (sombreros, sugar skulls, decorative papel-picado). It rejects internal jargon and company-specific acronyms in user-facing copy. It rejects Colonia direction behaviors imported into Roma surfaces.

**Key Characteristics:**

- Roma Paper (`#F5EFE3`) is the page surface, always. Never `#fff`.
- Roma Ink (`#1C1816`) is the press. Never `#000`.
- Tezontle (`#C46B3A`) is the sole body accent: chapter dots, italic emphasis words, animated underlines, button hover ink-fill.
- Fraunces variable serif at high optical size (144 display, 72 headline) for editorial warmth without extreme stroke contrast.
- Newsreader for body — a screen-optimized reading serif.
- Cutive Mono for eyebrows, labels, status, and metadata only.
- Soft 6px corners (`radius-md`) on cards and buttons. Roma identity. Never hard-rect (that's Colonia), never pill (that's not Roma).
- One signal-color ribbon under the masthead, three bands matching three chapters.
- Flat by default. Depth comes from hairline borders, not shadows. One shadow exists, used only on interactive card hover.

**Physical scene:** A hiring manager opens mannyflo.com on a 13" laptop in a well-lit room, glances for 30 seconds before deciding whether to read. The page rewards scanning and invites reading: chapter eyebrows guide the eye; the chosen italic word in each headline carries the meaning; the warm parchment keeps the surface from feeling clinical.

## 2. Colors

**Strategy: Full palette · 3 named semantic roles plus a warm neutral base.** The page is parchment and ink; one accent (Tezontle) carries every warm-toned moment; two heritage colors (Maíz, Ceiba) earn their place as semantic chapter signals. Two more (Cobalto, Rosa) are defined but unused in the current build.

### Primary
- **Paper** (`#F5EFE3` / `oklch(95.2% 0.017 77)`) · The page surface. Warm parchment, not clinical white. Never `#fff`.
- **Ink** (`#1C1816` / `oklch(17.5% 0.014 50)`) · All headlines, body text, button fill, and 1.5px ghost-button borders. Never `#000`.

### Brand Accent
- **Tezontle** (`#C46B3A` / `oklch(57.5% 0.150 42)`) · The Roma brand stamp, named for the porous volcanic stone in Mexico City colonial walls. Used for: the chapter dot, the italic emphasis word in every section headline, the wavy SVG underline that draws in on scroll, the primary button's ink-fill animation, nav active-state underline, the wordmark hover state. The single most important color on the page.
- **Tezontle Strong** (`#A35828` / `oklch(47.5% 0.130 42)`) · Primary button active/pressed state only.

### Heritage Semantic Roles (active)
- **Ceiba** (`#2F5544` / `oklch(37.5% 0.075 160)`) · Forest. Stewardship chapter band (chapter 03). Eyebrow dot color for the Stewardship section. Also aliased as `--color-success` for any future shipped/settled state.
- **Maíz** (`#C89A3A` / `oklch(70.0% 0.130 80)`) · Mustard. In the Making chapter band (chapter 02). Eyebrow dot color for the Current Focus section. Also the building-status indicator color on project cards (the dot next to "BUILDING" in chapter 02).

### Heritage Semantic Roles (defined but unused)
- **Cobalto** (`#1E4FA6` / `oklch(38.5% 0.165 264)`) · Talavera Cobalt. Defined in `tokens.css` as `--color-cobalto`. Currently unused in the live build (it sat in the seven-band heritage ribbon before Phase 6 reduced the ribbon to three chapter-mapped bands). Preserved as a token for lineage and possible future use; do not introduce into the active palette without an explicit reason.
- **Rosa** (`#B5495A` / `oklch(47.0% 0.115 14)`) · Museum Rose. Defined in `tokens.css` as `--color-rosa`. Same deprecation path as Cobalto, was a heritage-ribbon stripe pre-Phase-6, now unused. Reserved for high-urgency signals only if the system later needs one.

### Neutrals
- **Ink Mid** (`#4B4238`) · Muted text, secondary metadata, nav items at rest, masthead labels.
- **Ink Subtle** (`#8B7F6E`) · Tertiary labels, placeholders.
- **Border** (`rgba(28, 24, 22, 0.22)`) · Card borders, chip borders. The hairline that does the work of structure on a flat page.
- **Border Subtle** (`rgba(28, 24, 22, 0.12)`) · Dividers, section hairlines.
- **Border Strong** (`#1C1816`) · Solid 1.5px ghost-button border.

### Named Rules

**The Tezontle Doctrine.** Tezontle is the sole warm accent on body surfaces. It carries every italic emphasis word, every chapter dot, every active-state mark, and the button hover ink-fill. Rosa never substitutes for it; that direction belongs to a louder Feria sibling (Colonia), not Roma.

**The Single Dot Rule.** Each chapter eyebrow opens with exactly one colored dot. The dot color matches the chapter's heritage ribbon band (chapter 01 → Tezontle; chapter 02 → Maíz; chapter 03 → Ceiba). The hero eyebrow ("ENGINEER") uses the Tezontle default and is not numbered.

**The Three-Band Ribbon Rule.** The heritage ribbon under the masthead has three equal-width bands, edge-to-edge, in chapter order: Tezontle (Stack), Maíz (In the Making), Ceiba (Stewardship). It functions as a visual table of contents. The seven-band Feria heritage ribbon belongs to Colonia and other Feria directions; on Roma it is reduced to the active chapter palette.

**The Defined-but-Unused Rule.** Cobalto and Rosa exist as tokens in `tokens.css` but are not part of Roma's active surface. Future commands must not pull them into new components, status indicators, or palette swatches without an explicit decision to expand the active palette.

## 3. Typography

**Display Font:** Fraunces (Google Fonts variable: opsz 9-144, wght 100-900, italic axis). Soft optical-size-responsive serif. At high opsz (72-144) it reads editorial and warm; the high optical size suppresses extreme stroke contrast and prevents the page from looking like a fashion magazine cover. Fraunces is the display voice of Roma.

**Body Font:** Newsreader (Google Fonts variable: opsz 6-72, wght 300-800, italic axis). Designed for screen reading. Upright for running prose; italic for emphasis where it earns its place.

**Label / Mono Font:** Cutive Mono (Google Fonts). A typewriter-cut monospace for eyebrows, dates, status tags, skill chips, and metadata. The rubber stamp in the corner of the page.

**Character:** An engineering notebook by someone who reads. Fraunces gives authority without formality. Newsreader sustains reading without fatigue. Cutive Mono is the rubber stamp.

### Hierarchy

- **Display** (Fraunces 400, `opsz 144`, `clamp(3rem, 6.5vw, 5.25rem)`, line-height 0.9, tracking -0.025em) · Hero name. One per page.
- **Hero Role** (Fraunces italic 400, `opsz 72`, `clamp(1.5rem, 2.6vw, 2.25rem)`, line-height 1.15, color: Tezontle) · The role/title in the hero. Always Tezontle italic.
- **Headline** (Fraunces 400, `opsz 72`, `clamp(1.75rem, 3.2vw, 2.75rem)`, line-height 1.05, tracking -0.012em) · Section openers. One italic Tezontle emphasis word with animated wavy underline (multi-word headlines only).
- **Title** (Fraunces 700, `opsz 18`, 1.375rem, line-height 1.2, tracking -0.005em) · Card headings, expertise titles, project titles. The only place Fraunces hits weight 700 (small sizes need the heavier weight to compensate for low optical size).
- **Body** (Newsreader 400, 1.0625rem, line-height 1.6) · Running prose. Cap at 65ch (`--measure`).
- **Lede** (Newsreader 400, 1.125rem, line-height 1.55) · Section ledes, hero lede.
- **Wordmark** (Fraunces italic 500, 1.5rem, tracking 0.02em) · The `mannyflo.` mark. Tezontle on hover.
- **Label** (Cutive Mono 400, 0.75rem, tracking 0.12em, UPPERCASE) · Section eyebrows, nav links, masthead, dates, project status.
- **Tag** (Cutive Mono 400, 0.7rem, tracking 0.08-0.10em, UPPERCASE) · Skill chips, project tags.

### Named Rules

**The Fraunces Italic Carries Emotion.** Italic Fraunces appears on one or two words per section headline, always Tezontle. It marks the emotional or thematic peak of the sentence. Single-noun headlines (`Stack.`, `Stewardship.`) skip the italic; only multi-word headlines (`In the making.`) get the emphasized word.

**The Optical Size Law.** Always set `font-variation-settings: "opsz" N` explicitly. Display: 144. Headlines: 72. Card titles: 18. Never rely on the browser default opsz.

**The Newsreader Rule.** Body Newsreader runs at weight 400. Bold (700) is permitted for proper nouns and key technical terms inside body prose. Never bold entire sentences. Never weight 600 in body text (the heavier weight belongs to buttons, not prose).

**The Mono is Metadata Rule.** Cutive Mono is reserved for non-prose surfaces. Never in headlines, never in body copy, never as a developer-aesthetic affectation.

## 4. Elevation

The system is **flat by default**. Depth comes from hairline borders at `rgba(28, 24, 22, 0.22)` and semantic color shifts on interaction, not from shadows. Air is the brand; type and color do the work; chrome stays out of the way. Exactly one shadow is permitted: the interactive card hover lift.

### Shadow Vocabulary

- **`shadow-hover`** (`0 1px 0 rgba(28,24,22,0.10), 0 6px 16px -8px rgba(28,24,22,0.16)`) · Applied only on `:hover` of `.expertise-card` and `.project-card`. Expertise cards combine it with `translateY(-1px)` and border darkening; project cards add only the shadow and border darken (no motion). Steward cards use border-color shift on hover, no shadow. Never present at rest.
- **`shadow-sm`** (`0 1px 0 rgba(28,24,22,0.08)`) · Reserved. Currently unused in the live build.

### Named Rules

**The Flat-by-Default Rule.** Surfaces are flat at rest. No resting shadows, no glow, no drop-shadow decoration. If a surface needs to feel raised, it earns a hairline border instead.

**The No Glass Rule.** No `backdrop-filter: blur()`. No translucent panels. No glassmorphism. The mobile menu is a solid Roma Paper sheet with hairline borders between items.

**The Air Rule.** Whitespace is structural, not vestigial. The Stack chapter separates its expertise cards from its tools chip-row with 96px (`var(--space-14)`) of vertical air, then a typographic eyebrow ("— TOOLS") rather than a horizontal rule. Roma divides surfaces with whitespace and editorial markers, never with decorative dividers.

## 5. Components

**Component philosophy: Editorial restraint. Flat surfaces, hairline borders, no decorative shadows. Air is the brand; type and color do the work; chrome stays out of the way.**

### Buttons

- **Shape:** Soft rectangle, `border-radius: 6px` (`rounded.md`). Roma identity. No pill (`rounded.pill` belongs to chips), no hard-rect (that's Colonia).
- **Primary** (`.btn`) · Ink background, Paper text, 14×28 padding, Newsreader 600. Tezontle ink-fill animation lifts from bottom on hover via `@property --btn-ink { initial-value: -2%; }`. Active state shifts to Tezontle Strong. Focus: 2px Tezontle outline, 2px offset, follows the button's 6px corner radius.
- **Ghost** (`.btn-ghost`) · Transparent background, Ink text, 1.5px solid Ink border, same padding and font. Same ink-fill animation on hover; text shifts to Paper at the gradient front. The `-2%` initial-value on `--ghost-ink` is critical: it keeps the gradient stop below the visible border so the full ghost border remains visible at rest.

### Chips and Skill Tags

- **Chip** (`.chip`) · Pill (`rounded.pill` = 999px), Roma Paper background, 1px `border` hairline (Border token, all four edges visible), Cutive Mono uppercase 0.7rem, 4×12 padding. Used for project tags. Hover: border and text shift to Tezontle.
- **Skill Tag** (`.skill-tag`) · Identical treatment to Chip. Used in the Stack section's tools chip-row under the "— TOOLS" eyebrow. Hover: border shifts to Tezontle.

### Cards

- **Expertise Card** (`.expertise-card`) · Roma Paper background, 1px `border` hairline, 6px radius, 32px padding. Cutive Mono Tezontle number label, Fraunces 700 opsz 18 title, Newsreader body, hairline-bordered `<ul>` with arrow markers (`→`). Hover: `translateY(-1px)`, shadow-hover, border darkens to `rgba(28,24,22,0.30)`.
- **Project Card** (`.project-card`) · Same shape and border treatment. Internal hierarchy: Cutive Mono "BUILDING" status with Maíz dot, Fraunces 700 title, Newsreader description, Cutive Mono tag chips along the bottom. Hover: shadow-hover, border darkens to `rgba(28,24,22,0.30)`. No motion.
- **Steward Card** (`.steward-card`) · Same shape and border. Cutive Mono number, Fraunces 700 area name, Newsreader description. Hover: border darkens to `rgba(28,24,22,0.30)`. No motion, no shadow.
- **No nested cards.** Cards never contain cards.

### Navigation

- **Masthead structure:** A heritage ribbon (6px, edge-to-edge, three bands) sits directly under a Roma Paper bar. Wordmark left, nav links right.
- **Wordmark** (`.wordmark`) · Fraunces italic 500, 1.5rem. Hover: shifts to Tezontle.
- **Nav Links** (`.nav-item`) · Cutive Mono uppercase 0.75rem, tracking 0.12em. Rest: Ink Mid with transparent bottom border. Hover: Ink with Tezontle bottom border. Active (current section, set by IntersectionObserver via `aria-current="page"`): Ink with Tezontle bottom border.
- **Mobile menu:** Hamburger reveals a solid Roma Paper panel. Hairline borders between items. No blur.

### Section Eyebrow (signature)

Every section opens with the Cuaderno eyebrow:

```
●  CHAPTER 01 · STACK
```

A heritage-color dot (`font-size: 0.875rem`), two spaces, Cutive Mono uppercase tracking 0.12em, middot separator. The dot color is set per chapter via `.eyebrow-ch-01 / -02 / -03` modifier classes — chapter 01 is Tezontle, chapter 02 is Maíz, chapter 03 is Ceiba. This locks each chapter to its ribbon band as a visual TOC.

The hero eyebrow ("ENGINEER") is the only un-numbered eyebrow. It uses the default Tezontle dot.

### Section Headlines

Fraunces 400 opsz 72. One italic Tezontle emphasis word per headline, never more. The italic word carries an SVG wavy underline (Tezontle stroke) that draws in via `clip-path: inset(0 100% 0 0)` → `inset(0 0% 0 0)` when the headline enters viewport (IntersectionObserver + `.in-view` class). Single-noun headlines (`Stack.`, `Stewardship.`) skip the emphasis treatment — only multi-word headlines get the italic word.

### Heritage Ribbon

Three bands, edge-to-edge, 6px tall, directly under the masthead:

| Order | Class | Color | Token | Maps to |
|---|---|---|---|---|
| 1 | `.ribbon-stack` | Tezontle | `var(--color-tezontle)` | Chapter 01 |
| 2 | `.ribbon-making` | Maíz | `var(--color-maiz)` | Chapter 02 |
| 3 | `.ribbon-stewardship` | Ceiba | `var(--color-ceiba)` | Chapter 03 |

Functions as a visual table of contents. Each band's color matches its chapter's eyebrow dot. Never decorative, never repeated.

### Resume Modal

Roma Paper panel overlaying the page. Escape key + overlay-click + close button all dismiss. Body overflow locked while open. Auto-focuses the close button on open and restores focus to the trigger on close. Contains: panel header (Cutive Mono title, Ghost download button, close button), full-width PDF iframe with `#navpanes=0&toolbar=0` to suppress browser chrome.

### Portrait

240×240px at desktop in the right column of an `800px + 320px` hero grid (lede on the left, portrait on the right). At mobile (≤768px) the grid collapses to a single column and the portrait stacks above the lede via `order: -1` at 180×180px. `object-fit: cover`, `object-position: center 15%` to frame the face, hairline border, descriptive `alt` text. One per page.

## 6. Do's and Don'ts

### Do:

- **Do** use Paper (`#F5EFE3`) as the surface always. Never `#fff`.
- **Do** use Ink (`#1C1816`) for all text and 1.5px ghost-button borders. Never `#000`.
- **Do** set Fraunces `font-variation-settings: "opsz"` explicitly at each size (144 display, 72 headline, 18 card title).
- **Do** use Tezontle as the sole body accent: chapter dots, italic emphasis words, animated underlines, button hover ink-fill, nav active state.
- **Do** open every section with a heritage-color dot + Cutive Mono eyebrow: `● CHAPTER 0X · LABEL`.
- **Do** cap body line length at 65ch (`max-width: var(--measure)`).
- **Do** use `border-radius: 6px` (`rounded.md`) on cards and buttons. Roma identity.
- **Do** use `border-radius: 999px` (`rounded.pill`) only on chips and skill tags.
- **Do** set `@property --btn-ink { initial-value: -2%; }` and `@property --ghost-ink { initial-value: -2%; }` to prevent gradient bleed at the button's resting state.
- **Do** apply shadow-hover only on interactive card hover. Never at rest.
- **Do** use Maíz for the "BUILDING" project status indicator and chapter 02 ribbon band.
- **Do** use Ceiba for the chapter 03 ribbon band (and any future shipped/settled status indicator).
- **Do** keep the heritage ribbon at three bands matching the three chapters. One position: directly under the masthead.
- **Do** divide sections with whitespace and typographic eyebrows. Never with horizontal rules.
- **Do** write the colophon as: `Fraunces, Newsreader, Cutive Mono.` — the live font stack.
- **Do** preserve Cobalto and Rosa as defined-but-unused tokens. They are part of the Feria lineage even when not on the page.

### Don't:

- **Don't** import Colonia behaviors into Roma. Hard rectangles, Talavera cobalt-and-rose tile patterns, Spanish-first body copy: those belong to a different Feria direction. Roma is soft 6px corners, English body, parchment-and-clay.
- **Don't** use `font-weight: 700` on Fraunces at display opsz 144. Weight 400 reads editorial; 700 produces extreme stroke contrast that strains reading. Card titles at opsz 18 are the only place Fraunces hits 700.
- **Don't** use Bodoni Moda, General Sans, Inter, IBM Plex, DM Serif, Cormorant, Playfair Display, Space Grotesk, or Newsreader as a display font. Fraunces is the display voice of Roma. Other Feria directions carry their own display voice and follow their own DESIGN.md.
- **Don't** substitute Rosa or Cobalto for Tezontle. Tezontle owns the brand-accent role on Roma.
- **Don't** introduce a fourth heritage color into the active palette without an explicit decision to expand. Cobalto and Rosa are reserved.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored decorative stripe on cards or list items.
- **Don't** use `background-clip: text` gradient text.
- **Don't** use glassmorphism, `backdrop-filter: blur()`, or translucent panels.
- **Don't** use the hero-metric template (big number, small label, gradient accent). PRODUCT.md anti-reference: AI slop and generative-agency sites.
- **Don't** use identical card grids with icon + heading + text, repeated. Differentiate through content hierarchy, number labels, and varied structure. PRODUCT.md anti-reference: SaaS landing clichés.
- **Don't** use em dashes (`—` or `--`) anywhere. Use commas, colons, semicolons, periods, or parentheses.
- **Don't** include `.btn` or `.btn-ghost` in any global `border-bottom-color: transparent` rule. It clobbers the ghost button's bottom border. Same trap caught the chip and skill-tag in the same selector — keep that selector limited to actual link-pattern elements (`.icon-btn`, `.nav-item`, `.wordmark`, `.skip-link`).
- **Don't** use Latin kitsch — sombreros, mariachi, Día-de-los-Muertos sugar skulls, agave silhouettes, "fiesta" papel-picado used decoratively. PRODUCT.md anti-reference. Heritage as texture, not costume.
- **Don't** use internal jargon or company-specific acronyms in user-facing copy. PRODUCT.md anti-reference. CorpEng, CAPPS, EDDs, PRDs, TRA — spell them out or pick a public-facing equivalent.
- **Don't** write static years or months in the masthead without a dynamic source. The `Cuaderno · YYYY` and `No. NN · MONTH` strings come from `new Date()`.
- **Don't** write colophon copy that references the old font stack. The live stack is Fraunces, Newsreader, Cutive Mono.
