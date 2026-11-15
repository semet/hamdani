# AGENTS.md

Canonical instructions for AI coding agents working in this repository.
Tool-specific files (`CLAUDE.md`, `GEMINI.md`, `.github/copilot-instructions.md`,
`.cursor/rules/`, `.windsurf/rules/`) defer to this file. **Update this file first**
when conventions change, then sync the short summaries in the others.

## Project at a glance

Single-page portfolio for Hamdani Ash-Sidiq, web designer & frontend engineer.
Dark/light editorial design: Instrument Serif display type, Geist body, one ember accent.

- **Framework:** Next.js 16 (**Pages Router**, not App Router) + React 19 + TypeScript (strict)
- **Styling:** Tailwind CSS 4, CSS-first config in `src/styles/globals.css` (no `tailwind.config.ts`).
  `tailwind-merge` (`twMerge`) for conditional classes.
- **Animation:** **Motion only** (`motion/react`). No CSS keyframes. Lenis (`lenis/react`) for smooth scroll.
- **Hosting:** Vercel. Package manager: pnpm.
- **No CMS, no database, no tests.** Content is TypeScript data. Two API routes serve SEO files.

## Commands

```bash
pnpm install      # install deps
pnpm dev          # dev server (Turbopack) at http://localhost:3000
pnpm lint         # ESLint (eslint .) — must pass with zero errors AND zero warnings
pnpm build        # production build — run to verify types
pnpm start        # serve the production build
```

There is no test suite. Verify changes with `pnpm lint` and `pnpm build`, and check the
browser console in `pnpm dev` is clean (Next and Motion only warn in development).

## Directory map

```
src/
  pages/
    _app.tsx          # next/font (Geist, Geist Mono, Instrument Serif), ReactLenis, MotionConfig, LayoutProvider
    _document.tsx     # Pre-paint theme script, theme-color, favicons, manifest
    index.tsx         # The only page: <Seo /> + the five sections in order
    api/sitemap.ts    # /sitemap.xml (rewrite in next.config.ts)
    api/robots.ts     # /robots.txt (rewrite in next.config.ts)
  providers/
    layout-provider.tsx  # Section refs, active section (derived from useInView), Lenis scroll-to
  data/
    site.ts           # Name, role, contact, résumé URL, SEO description, site URL
    socials.ts        # Social links (footer, mobile menu, JSON-LD sameAs)
    menu.ts           # Nav items; HomeMenu type is derived from these ids
  hooks/
    use-theme.ts      # Light/dark store (useSyncExternalStore) + setTheme
    use-local-time.ts # Visitor's local time and time-zone city (useSyncExternalStore)
  components/         # Shared UI
    header/header.tsx (+ desktop-menu, mobile-menu)
    logo.tsx          # "Ha." monogram + rolling wordmark
    seo.tsx           # <head> meta, Open Graph, Twitter, JSON-LD
    theme-toggle.tsx  reveal-text.tsx  scroll-highlight.tsx  marquee.tsx  magnetic.tsx
    count-up.tsx  section-heading.tsx  brand-icon.tsx  arrow-icon.tsx  scroll-to-top.tsx
  sections/           # One folder per section; private parts and data live beside it
    hero/hero-section.tsx             -> HeroSection        (ref: homeSection)
    stacks/stacks-section.tsx         -> StacksSection      (ref: stacksSection)   data: stacks.ts, tools.ts
    experience/experience-section.tsx -> ExperienceSection  (ref: aboutSection)    data: experiences.ts
    showcase/showcase-section.tsx     -> ShowcaseSection    (ref: showcaseSection) data: items.ts, images/
    footer/footer-section.tsx         -> FooterSection      (ref: contactSection)
  styles/globals.css  # Theme variables, @theme tokens, base styles, @utility main-padding / icon-mask
public/
  icons/              # Self-hosted brand logos (Simple Icons / Devicon), rendered as masks
  images/grain.png    # Film-grain tile
  og.png              # 1200×630 social preview
  favicon.ico, *.png, site.webmanifest
```

## Code conventions (enforced by ESLint/Prettier)

- **Imports**
  - Use the `@/` alias (→ `src/`). Parent-relative imports (`../`) are forbidden.
  - **No barrel files.** Import from the defining file (`@/hooks/use-theme`), never a folder
    or `index`. `export *` is banned.
  - **Layers** (`import/no-restricted-paths`): `pages` → `sections` → shared
    (`components`, `providers`, `hooks`, `data`). Shared code must not import sections; a
    section must not import another section's files.
  - `import/order`: builtin → external → internal → parent → sibling → index, alphabetized.
- **Formatting (Prettier):** 2 spaces, no semicolons, single quotes, no trailing commas, one JSX
  attribute per line, Tailwind classes auto-sorted (plugin reads `globals.css`).
- **React 19 rules are strict.** Never disable or downgrade `react-hooks/*` (including React
  Compiler rules `refs`, `set-state-in-effect`, `purity`, `static-components`) and never add
  `eslint-disable`. Instead:
  - derive values during render rather than `setState` in an effect;
  - read browser state (theme, time, media) with `useSyncExternalStore` + a server snapshot;
  - read refs only in effects and event handlers;
  - never create components during render (`motion.create` etc. at module scope only).
- **No `console.*`.** Unused vars/args must be prefixed with `_`.
- **Components:** named arrow-function exports; kebab-case files named after the main export.
- **Tailwind classes must be canonical** (what IntelliSense suggests): e.g. `min-h-75`, not
  `min-h-[300px]`; `aspect-16/10`, not `aspect-[16/10]`; `bg-linear-to-t`, not `bg-gradient-to-t`.

## Design system

- **Colors are semantic, theme-aware tokens** — never hard-code hex/rgba in components:
  `canvas` (page bg), `surface`, `surface-2`, `fg` (text), `muted`, `line`, `line-strong`,
  `ember` (accent). Glows use `var(--glow-ember)` / `var(--glow-indigo)`. Opacity modifiers
  work (`bg-surface/70`, `text-fg/60`). Small text must keep ≥4.5:1 contrast in both themes.
- **Theme:** `data-theme="light|dark"` on `<html>`, set before paint by the script in
  `_document.tsx` (saved choice, else OS preference). Toggle via `setTheme()` from
  `@/hooks/use-theme`. Palettes live at the top of `globals.css`.
- **Type:** `font-serif` (Instrument Serif) for display/headings, italic + `text-ember` for
  accent words; `font-sans` (Geist) body; `font-mono` (Geist Mono) small uppercase labels.
- **Layout:** `main-padding` utility for page gutters; sections use `py-28 sm:py-36`.
- **Motion:** ease `[0.16, 1, 0.3, 1]`. Animate only `transform`/`opacity`. Reveal headings
  with `<RevealText text="… *accent* …" />`. `MotionConfig reducedMotion="user"` is global.
- **Brand icons:** add SVGs to `public/icons/` and render with `<BrandIcon src=… />`
  (monochrome mask painted with `currentColor`). Prefer Simple Icons; use Devicon "plain"
  variants when the Simple Icons glyph is unrecognizable (e.g. Vitest).

## Architecture notes that are easy to get wrong

1. **Navigation is ref-based.** `LayoutProvider` owns one ref per section; each section
   attaches it to its root element. The active menu is derived during render from
   `useInView` (center line of the viewport). Menu clicks scroll via Lenis.
2. **Adding a section** touches: `src/data/menu.ts`, `layout-provider.tsx` (ref, `useInView`,
   `activeMenu` chain, `onMenuClick` refs map), `src/sections/<name>/<name>-section.tsx`,
   `src/pages/index.tsx`, and the section list in `import/no-restricted-paths`.
3. **Showcase reel** measures its track with a `ResizeObserver`; the section height and the
   horizontal travel follow automatically. Card width is capped by viewport height so the
   sticky panel always fits; tags hide on short desktop screens.
4. **Showcase images** are static imports from `src/sections/showcase/images/` rendered with
   `next/image` (`placeholder="blur"`). Any `quality` used must be in `images.qualities`
   in `next.config.ts`.
5. **SEO:** metadata comes from `src/data/site.ts`. The absolute site URL is `SITE_URL`,
   injected by `next.config.ts` from `NEXT_PUBLIC_SITE_URL` or Vercel's production domain.
6. **Performance:** keep the grain a PNG tile (an SVG `feTurbulence` filter cost seconds of
   main-thread time on mobile). Avoid large `backdrop-blur` areas. Above-the-fold text should
   not start at `opacity: 0` (it delays LCP); slide it in instead.
7. **Client-only APIs** (`window`, `document`, `localStorage`) only in effects, handlers or
   `useSyncExternalStore` callbacks — pages are pre-rendered.

## Editing content (most common task)

| Change                           | File                                                          |
| -------------------------------- | ------------------------------------------------------------- |
| Name, role, email, phone, résumé | `src/data/site.ts`                                            |
| Social links                     | `src/data/socials.ts`                                         |
| Nav labels                       | `src/data/menu.ts`                                            |
| Hero headline and intro          | `src/sections/hero/hero-section.tsx`                          |
| About text and stats             | `src/sections/experience/experience-section.tsx`              |
| Work history                     | `src/sections/experience/experiences.ts`                      |
| Tech stack / tools               | `src/sections/stacks/stacks.ts`, `tools.ts` + `public/icons/` |
| Projects                         | `src/sections/showcase/items.ts` + screenshot in `images/`    |

Keep `id` values unique in data arrays; they are used as React keys.

## Workflow rules for agents

- **Create a new git branch before starting any change.** Never commit directly to `main`.
- Keep diffs minimal and consistent with the surrounding style.
- Before finishing: `pnpm lint` passes with no warnings, `pnpm build` succeeds, dev console is clean.
- **Clean up after testing:** stop any servers you started and delete temporary scripts,
  screenshots and reports you created.
- Don't add dependencies without a clear need. Don't commit `.next/`, `node_modules/`, `.DS_Store`.
- Personal data (contact info, work history) is intentional public content — edit only when asked.
