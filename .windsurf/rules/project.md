---
trigger: always_on
---

# Project rules

Full guide: `AGENTS.md` at the repo root (canonical — read it for architecture details).

## Stack

Next.js 16 **Pages Router** (not App Router), React 19, TypeScript strict, Tailwind CSS 4
(CSS-first config in `src/styles/globals.css`), **Motion only** for animation (`motion/react`),
Lenis smooth scroll, pnpm, hosted on Vercel. Single-page portfolio; content is TS data.

## Commands

`pnpm dev` · `pnpm lint` (zero errors and zero warnings) · `pnpm build` (verify types)

## Rules

- Branch before any change; never commit to `main`.
- Use the `@/` alias (→ `src/`). `../` imports are forbidden.
- **No barrel files.** Import from the defining file (`@/hooks/use-theme`); no folder/`index`
  imports, no `export *`.
- Layers: `pages` → `sections` → shared (`components`, `providers`, `hooks`, `data`). Shared code
  must not import sections; a section must not import another section's files.
- **React 19 rules are strict:** never disable or downgrade `react-hooks/*` rules and never add
  `eslint-disable`. Derive state during render, use `useSyncExternalStore` for browser state,
  read refs only in effects/handlers, never create components during render.
- Prettier: 2 spaces, no semicolons, single quotes, no trailing commas, one JSX attribute per line.
- No `console.*`. Prefix unused vars/args with `_`.
- Named arrow-function component exports; kebab-case files named after the main export.
- Colors are semantic theme tokens only: `canvas`, `surface`, `surface-2`, `fg`, `muted`, `line`,
  `line-strong`, `ember`. No hard-coded hex/rgba. Small text keeps ≥4.5:1 contrast in both themes.
- Use canonical Tailwind classes (`min-h-75`, `aspect-16/10`, `bg-linear-to-t`), `twMerge` for
  conditional classes, `main-padding` for page gutters.
- Animate only `transform`/`opacity` with Motion; ease `[0.16, 1, 0.3, 1]`.
- Clean up after testing: stop servers you started, delete temp scripts and screenshots.

## Gotchas

- Navigation is ref-based via `useLayout()` (`src/providers/layout-provider.tsx`); the active
  section is derived from `useInView`. Adding a section also needs `src/data/menu.ts`,
  `src/pages/index.tsx` and the section list in `import/no-restricted-paths`.
- Theme: `data-theme` on `<html>` is set before paint in `_document.tsx`; toggle with `setTheme()`.
- Showcase images are static imports with `next/image`; any `quality` must be in
  `images.qualities` in `next.config.ts`.
- Keep film grain a PNG tile; avoid big `backdrop-blur` areas; don't start above-the-fold text
  at `opacity: 0` (hurts LCP).
