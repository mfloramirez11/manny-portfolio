# mannyflo.com Project Roadmap

## Phase 1: Foundations & Design Tokens [COMPLETE]
- [x] Configure `tailwind.config.js` and `postcss.config.js` at the project root.
- [x] Retain custom font definitions: display (Fraunces), sans (Newsreader), mono (Cutive Mono).
- [x] Enhance `src/styles/tokens.css` to support a pristine, high-fidelity light and dark mode.
- [x] Set up OKLCH-tinted neutrals under both themes (warm-parchment for Light Mode, deep clay-tinted charcoal for Dark Mode, preventing absolute `#000` or `#fff`).
- [x] Eliminate all Tailwind default colors, mapping every color strictly to custom theme variables.
- [x] Support automatic light/dark switching via `prefers-color-scheme` and manual theme override via `.dark` / `:root.dark` selectors.
- [x] Contrast-tune semantic accents (Tezontle clay brand stamp, Ceiba success forest green, Maíz status mustard, Cobalto, Rosa) for AA accessibility in Dark Mode.

## Phase 2: Layout & Core Navigation [COMPLETE]
- [x] Implement responsive masthead structure and wordmark with hover interaction.
- [x] Integrate three-band heritage ribbon functioning as a visual table of contents (TOC).
- [x] Implement responsive mobile hamburger menu with full-screen Paper overlay, avoiding backdrop filters/blur.
- [x] Map active page sections to navigation links via IntersectionObserver.

## Phase 3: Component Primitives [COMPLETE]
- [x] Build Primary and Ghost buttons with custom animatable Framer Motion ink-fill overlays.
- [x] Build pill-shaped Chips and Skill Tags with hover border-color transitions and stagger load reveals.
- [x] Implement Expertise Cards with custom numbers, arrow-list primitives, and hover lifts using Framer Motion.
- [x] Implement Project Cards with dynamic building status indicators, metadata tags, and smooth hover lifts.
- [x] Implement Steward Cards with clean typographic hierarchies and hover borders using Framer Motion.

## Phase 4: Dynamic Micro-Interactions & Content [COMPLETE]
- [x] Implement viewport-triggered SVG wavy underlines for section headlines animating pathLength.
- [x] Map dynamic dates and issues inside the masthead header.
- [x] Enable smooth section transitions, entrance staggering, and intersection hooks using Framer Motion.
- [x] Build the interactive PDF Resume Modal with focus management and backdrop overlays.

## Phase 5: Hardening & Accessibility [COMPLETE]
- [x] Verify keyboard-focusable landmarks, outlines, and skip-link targets.
- [x] Verify strict WCAG 2.1 AA contrast levels (contrast-check neutral & accent pairs).
- [x] Add `prefers-reduced-motion` fallbacks to suppress active animation frames (instant ~0.01ms fallback on Framer Motion and CSS).
- [x] Run test suite and check production build outputs.
