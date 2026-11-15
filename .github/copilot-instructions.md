# Copilot instructions

Full guide: `AGENTS.md` at the repo root (canonical — read it for architecture details).

## Stack

Next.js 16 **Pages Router** (not App Router), React 19, TypeScript strict, Tailwind CSS 4,
`motion` (import from `motion/react`, not `framer-motion`), Lenis, Headless UI, pnpm.
Single-page portfolio; all content is hard-coded TS data. No API routes, no tests.

## Commands

`pnpm dev` · `pnpm lint` (must pass) · `pnpm build` (verify types)

## Rules

- Branch before any change; never commit to `main`.
- Use the `@/` alias (→ `src/`). `../` imports are forbidden.
- **No barrel files.** Import from the file that defines the export
  (`@/hooks/use-aurora`, `@/components/header/header`), never a folder or `index`; no `export *`.
- Layers: `pages` -> `sections` -> shared (`components`, `providers`, `hooks`, `data`). Shared code
  must not import sections; a section must not import another section's files.
- Import order: builtin → external → internal → parent → sibling → index, blank line between
  groups, alphabetized.
- Prettier: 2 spaces, no semicolons, single quotes, no trailing commas, one JSX attribute per line.
- No `console.*`. Prefix unused vars/args with `_`.
- Named arrow-function component exports; kebab-case filenames; file named after its main export
  (`hero-section.tsx` exports `HeroSection`).
- Tailwind only; `twMerge` for conditional classes; `.main-padding` for page gutters.
  Theme colors: `primary`, `secondary`, `tertiary`, `quaternary`.
- `window`/`document` only inside `useEffect` or event handlers (pages are SSR'd).

## Gotchas

- Navigation is ref-based via `useLayout()` from `src/providers/layout-provider.tsx`.
  Adding a section requires updating `src/data/menu.ts`, the provider (type, refs, switch,
  `useInView`, `sections` array), a new `src/sections/<name>/<name>-section.tsx`, `src/pages/index.tsx`,
  and the section list in the `import/no-restricted-paths` rule in `eslint.config.mjs`.
- Showcase `description` strings are raw HTML (`dangerouslySetInnerHTML`) — trusted content only.
- Showcase section height/scroll distance derive from `items.length` and breakpoint magic numbers.
