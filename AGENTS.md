# AGENTS.md

Canonical instructions for AI coding agents working in this repository.
Tool-specific files (`CLAUDE.md`, `GEMINI.md`, `.github/copilot-instructions.md`,
`.cursor/rules/`, `.windsurf/rules/`) defer to this file. **Update this file first**
when conventions change, then sync the short summaries in the others.

## Project at a glance

Single-page personal portfolio for a frontend developer.

- **Framework:** Next.js 16 (**Pages Router**, not App Router) + React 19 + TypeScript (strict)
- **Styling:** Tailwind CSS 4 (+ `@tailwindcss/typography`), `tailwind-merge` for conditional classes
  CSS-first config: there is no `tailwind.config.ts`. Theme tokens live in `@theme`, custom
  utilities in `@utility`, and plugins in `@plugin` inside `src/styles/globals.css`.
- **Animation:** `motion` (Framer Motion v11, imported from `motion/react`), Lenis smooth scrolling
- **UI primitives:** `@headlessui/react` (tabs, mobile menu)
- **Package manager:** pnpm (lockfile is `pnpm-lock.yaml`; do not add npm/yarn lockfiles)
- **No backend, no API routes, no tests, no CMS.** All content is hard-coded TypeScript data.

## Commands

```bash
pnpm install      # install deps
pnpm dev          # dev server (Turbopack) at http://localhost:3000
pnpm lint         # ESLint (eslint .)  — must pass before finishing
pnpm build        # production build — run to verify type errors
pnpm start        # serve the production build
```

There is no test suite. Verify changes with `pnpm lint` and `pnpm build`.

## Directory map

```
src/
  pages/
    _app.tsx          # Fonts (Nunito Sans, Fira Code), Lenis init, LayoutProvider, Header, ScrollToTop
    _document.tsx
    index.tsx         # The only page: composes the five home sections in order
  providers/
    layout-provider.tsx  # Section refs, active-menu tracking, scroll-to-section logic (useLayout hook)
  data/
    menu.ts           # Nav menu items; HomeMenu type is derived from these ids
  hooks/
    use-aurora.ts     # Animated gradient background (motion values) shared by all sections
  components/         # Shared UI used by pages and sections
    header/header.tsx (+ desktop-menu, mobile-menu, mobile-menu-variants)
    logo.tsx  page-title.tsx  scroll-to-top.tsx
  sections/           # One folder per home-page section; private parts and data live beside it
    hero/hero-section.tsx             -> HeroSection        (ref: homeSection)
    stacks/stacks-section.tsx         -> StacksSection      (ref: stacksSection)   data: stacks.ts, tools.ts
    experience/experience-section.tsx -> ExperienceSection  (ref: aboutSection)    data: experiences.ts
    showcase/showcase-section.tsx     -> ShowcaseSection    (ref: showcaseSection) data: items.ts
    footer/footer-section.tsx         -> FooterSection      (ref: contactSection)  data: socials.ts
  styles/globals.css  # Tailwind v4 entry: @import, @theme tokens, @plugin, @utility main-padding
public/
  images/             # logo.svg, abstract.png
  showcase/           # screenshots referenced by showcase items.ts
```

## Code conventions (enforced by ESLint/Prettier)

- **Imports**
  - Use the `@/` alias (→ `src/`). Parent-relative imports (`../`) are **forbidden** by ESLint.
  - Sibling imports (`./foo`) inside the same folder are fine.
  - **No barrel files.** Import from the file that defines the export:
    `@/hooks/use-aurora` ✅, `@/hooks` ❌, `./index` ❌. `export *` is banned
    (`no-restricted-syntax`). Don't create `index.ts` re-export files.
  - **Layers** (`import/no-restricted-paths`): `pages` → `sections` → shared
    (`components`, `providers`, `hooks`, `data`). Shared code must not import from
    `sections`, and a section must not import another section's files — move anything
    reused to a shared folder.
  - `import/order` is enforced: builtin → external → internal → parent → sibling → index,
    blank line between groups, alphabetized. Run `pnpm lint` to check; `pnpm lint --fix` can fix ordering.
- **Formatting (Prettier):** 2 spaces, **no semicolons**, single quotes, no trailing commas,
  one JSX attribute per line, Tailwind classes auto-sorted by `prettier-plugin-tailwindcss`.
- **No `console.*`** (`no-console: error`). Unused vars/args must be prefixed with `_`.
- React Compiler lint rules `react-hooks/refs` and `react-hooks/set-state-in-effect` are
  set to warn (existing patterns are intentional); don't add new violations.
- **Components:** named exports of arrow-function components (`export const Foo = () => ...`).
- **File names:** kebab-case, named after the main export (`hero-section.tsx` →
  `HeroSection`, `use-aurora.ts` → `useAurora`). Single-file components are plain files
  (`components/logo.tsx`); use a folder only when a component has private parts.
- **Styling:** Tailwind utilities only. Use `twMerge([...])` for conditional classes.
  Use the `main-padding` utility (defined with `@utility`) for horizontal page padding. Theme colors: `primary` `#13FFAA`,
  `secondary` `#1E67C6`, `tertiary` `#CE84CF`, `quaternary` `#DD335C`. Fonts: `font-sans`
  (Nunito Sans), `font-mono` (Fira Code).
- **Animation:** import from `motion/react` (not `framer-motion`). Section entrances use
  `initial`/`whileInView`; scroll-linked effects use `useScroll` + `useTransform`.
- **Images:** existing code uses plain `<img>` tags. `next.config.ts` allows any HTTPS remote
  host, so `next/image` would also work if introduced.

## Architecture notes that are easy to get wrong

1. **Navigation is ref-based, not route-based.** `LayoutProvider` owns one ref per section
   and exposes them via `useLayout()`. Each section attaches its ref to its root
   `motion.section`. Active menu highlighting uses `useInView` on those refs.
2. **Adding/renaming a section touches several places** — keep them in sync:
   - `src/data/menu.ts` — add `{ id, name }` (the `HomeMenu` type derives from it)
   - `src/providers/layout-provider.tsx` — add the ref to the type, `sectionRefs`,
     the `onMenuClick` switch, a `useInView` call, and the `sections` array in the effect
   - the new component at `src/sections/<name>/<name>-section.tsx`, rendered in
     `src/pages/index.tsx`
   - the section list in the `import/no-restricted-paths` rule in `eslint.config.mjs`
3. **Showcase layout depends on `items.length`.** `ShowcaseSection` sets its height to
   `items.length * itemHeight` vh and its horizontal scroll distance from breakpoint-specific
   magic numbers. Adding/removing items changes scroll length automatically; changing card
   widths requires retuning `subtract` values. `windowWidth` is read once on mount (no resize listener).
4. **Showcase `description` strings are raw HTML** rendered with `dangerouslySetInnerHTML`.
   Only put trusted, hand-written HTML there. Keep links with `target='_blank'`.
5. **Two `AURORA` arrays exist:** `src/hooks/use-aurora.ts` (animated background colors) and
   `src/sections/hero/data.ts` (brand colors for hero). They are independent.
6. **Client-only APIs** (`window`, `document`) must be inside `useEffect` or event handlers —
   pages are pre-rendered on the server.
7. `react-syntax-highlighter` is listed in `transpilePackages` and lazily imported in
   `stacks-section/code-editor.tsx`; keep it lazy to avoid bloating the initial bundle.

## Editing content (most common task)

| Change                  | File                                                           |
| ----------------------- | -------------------------------------------------------------- |
| Nav menu labels         | `src/data/menu.ts`                                             |
| About-me paragraph      | `src/sections/experience/experience-section.tsx`               |
| Work history            | `src/sections/experience/experiences.ts`                       |
| Tech stack logos        | `src/sections/stacks/stacks.ts`                                |
| Tools logos             | `src/sections/stacks/tools.ts`                                 |
| Portfolio projects      | `src/sections/showcase/items.ts` + image in `public/showcase/` |
| Social links            | `src/sections/footer/socials.ts`                               |
| Phone / email in footer | `src/sections/footer/footer-section.tsx`                       |

Keep `id` values unique and sequential in data arrays; they are used as React keys.

## Workflow rules for agents

- **Create a new git branch before starting any feature or change** (e.g. `feat/...`,
  `fix/...`, `docs/...`). Never commit directly to `main`.
- Keep diffs minimal and consistent with the surrounding style; don't reformat unrelated files.
- Before finishing: `pnpm lint` must pass; run `pnpm build` for non-trivial changes.
- Don't add new dependencies without a clear need; prefer what's already installed.
- Don't commit `.next/`, `node_modules/`, or `.DS_Store`.
- Personal data (contact info, work history) is intentional public content — edit only when asked.
