# manny-portfolio

Personal portfolio site for Manny Flores — Senior Systems Engineer.

**Live:** [mannyflo.com](https://mannyflo.com)

## Stack

- React 19 + Vite 7 (SPA)
- CSS variables (tokens) + scoped component primitives
- `@vercel/analytics` + `@vercel/speed-insights`
- Deployed on Vercel

## Structure

```
manny-portfolio/
├── public/              Static assets (logo, profile image, favicon)
├── src/
│   ├── App.jsx          Single-page portfolio component
│   ├── main.jsx         React entry
│   ├── index.css        Global reset
│   └── styles/
│       ├── tokens.css   Design tokens (color, spacing, radius, shadow, easing, motion)
│       └── app.css      Component primitives + app-specific styles
├── tests/
│   ├── setup.ts         Vitest + Testing Library harness
│   └── *.test.jsx       Component smoke tests
├── index.html
├── vercel.json          Security headers (CSP, HSTS, XFO, Referrer, Permissions)
└── vite.config.js
```

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Start Vite dev server on http://localhost:5173 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint across the repo |
| `npm test` | Run vitest suite once |
| `npm run test:watch` | Vitest in watch mode |

## Design tokens

All visual constants live in `src/styles/tokens.css` as CSS custom properties.

- **Color** — `--color-bg`, `--color-surface`, `--color-border`, `--color-text`, `--color-text-muted`, `--color-accent`, `--color-accent-strong`, `--color-success`
- **Spacing** — `--space-1` (4px) through `--space-10` (80px); 4px base grid
- **Radius** — `--radius-sm` (4px), `--radius-md` (8px), `--radius-lg` (12px), `--radius-xl` (16px), `--radius-pill` (20px)
- **Font size** — `--fs-xs` through `--fs-5xl`; mobile inputs use `--fs-base` (16px) to prevent iOS zoom
- **Shadow** — `--shadow-sm`, `--shadow-md`, `--shadow-glow`
- **Easing / motion** — `--ease-out`, `--ease-in-out`, `--motion-fast`, `--motion-base`, `--motion-slow`

Add a new token by extending `tokens.css`. Do not introduce new raw hex values in components — reference a token instead.

## Component primitives

Defined in `src/styles/app.css`:

- `.card` — surface container (border + subtle bg)
- `.chip` — pill tag for skills / status tags
- `.btn` / `.btn-ghost` — primary and outline button
- `.icon-btn` — square icon-only button (44px hit target)
- `.dot` — status indicator (paired with `.dot--success`)
- `.sr-only` — visually-hidden but screen-reader accessible
- `.tabular` — `font-variant-numeric: tabular-nums` for aligned numbers

## Accessibility

Targeting WCAG 2.1 AA.

- Skip link → `<main id="main">` landmark
- `:focus-visible` on every interactive element
- `aria-expanded` / `aria-controls` on the mobile menu button
- `aria-current="page"` on the active nav item
- `prefers-reduced-motion` respected — animations collapse to 0.01ms
- Color contrast ≥ 4.5:1 on body text, ≥ 3:1 on large text and UI
- 16px minimum font size on mobile inputs (none currently, documented as a rule)
- Semantic landmarks: `<nav>`, `<main>`, `<section>` with `aria-labelledby`, `<footer>`

## Keyboard shortcuts

| Key | Action |
|---|---|
| `Esc` | Close the mobile menu if open |
| `Tab` | Move focus through interactive elements (visible ring) |
| `Enter` / `Space` | Activate focused button / link |

## URL state

Nav buttons update the URL hash (`#expertise`, `#skills`, …) via `history.replaceState` so the active section is shareable without triggering a full scroll reset.

## Security headers

Configured in `vercel.json`:

- `Content-Security-Policy` — `default-src 'self'`; allows inline styles (required by component-level `style={{...}}`); fonts from `fonts.googleapis.com` + `fonts.gstatic.com`; analytics from `va.vercel-scripts.com` and `vitals.vercel-insights.com`
- `Strict-Transport-Security` — `max-age=63072000; includeSubDomains; preload`
- `X-Frame-Options` — `DENY`
- `X-Content-Type-Options` — `nosniff`
- `Referrer-Policy` — `strict-origin-when-cross-origin`
- `Permissions-Policy` — `camera=(), microphone=(), geolocation=(), interest-cohort=()`

## How to add X

**Add a nav section**:
1. Add `{ id, label }` to `NAV_SECTIONS` in `App.jsx`.
2. Add a `<section id={id}>` inside `<main>`.
3. IntersectionObserver will sync the active state automatically.

**Add a skill group**: append to the `skills` array in `App.jsx`.

**Add a project card**: append to the `currentProjects` array in `App.jsx`.

**Add a writing card**: edit the posts array inside the Writing `<section>` in `App.jsx`. Set `WRITING_ENABLED = false` at the top of the file to hide the section entirely.

## Polish rubric

Each axis scored 0–5; targeting ≥ 4.

- **a11y** — WCAG 2.1 AA
- **perf** — Lighthouse 90+, CWV green
- **security** — headers configured, no secrets in client, deps audited
- **ux** — URL state, keyboard shortcuts, clear empty/loading states
- **tests** — vitest + RTL + jsdom, critical-path coverage
- **observability** — Vercel Analytics + Speed Insights
- **docs** — this README
- **design-system** — tokens + primitives, no raw hex in components

## Contact

- [LinkedIn](https://linkedin.com/in/mannyflores11)
