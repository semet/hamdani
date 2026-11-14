# AGENTS.md

Canonical instructions for AI coding agents working in this repository.
Tool-specific files (`CLAUDE.md`, `GEMINI.md`, `.github/copilot-instructions.md`,
`.cursor/rules/`, `.windsurf/rules/`) defer to this file. **Update this file first**
when conventions change, then sync the short summaries in the others.

## Project at a glance

Single-page personal portfolio for a frontend developer.

- **Framework:** Next.js 15 (**Pages Router**, not App Router) + React 19 + TypeScript (strict)
- **Styling:** Tailwind CSS 3 (+ `@tailwindcss/typography`), `tailwind-merge` for conditional classes
- **Animation:** `motion` (Framer Motion v11, imported from `motion/react`), Lenis smooth scrolling
- **UI primitives:** `@headlessui/react` (tabs, mobile menu)
- **Package manager:** pnpm (lockfile is `pnpm-lock.yaml`; do not add npm/yarn lockfiles)
- **No backend, no API routes, no tests, no CMS.** All content is hard-coded TypeScript data.

## Commands

```bash
pnpm install      # install deps
pnpm dev          # dev server (Turbopack) at http://localhost:3000
pnpm lint         # ESLint (next lint) — must pass before finishing
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
  components/
    header/           # Fixed header, desktop + mobile menus
    logo/ page-title/ scroll-to-top/
    home/
      hero-sections/      -> HeroSection        (ref: homeSection)
      stacks-section/     -> StacksSection      (ref: stacksSection)   data: stacks.ts, tools.ts
      experience-section/ -> Experience         (ref: aboutSection)    data: experiences.ts
      showcase-section/   -> ShowcaseSection    (ref: showcaseSection) data: items.ts
      footer-section/     -> FooterSection      (ref: contactSection)  data: socials.ts
  styles/globals.css  # Tailwind layers + `.main-padding` utility
public/
  images/             # logo.svg, abstract.png
  showcase/           # screenshots referenced by showcase items.ts
```

## Code conventions (enforced by ESLint/Prettier)

- **Imports**
  - Use the `@/` alias (→ `src/`). Parent-relative imports (`../`) are **forbidden** by ESLint.
  - Sibling imports (`./foo`) inside the same folder are fine.
  - Import across folders only via the folder's barrel: `@/components/header` ✅,
    `@/components/header/desktop-menu` ❌ (`@/components/*/*` is restricted). Same for `@/hooks/*/*`.
  - `import/order` is enforced: builtin → external → internal → parent → sibling → index,
    blank line between groups, alphabetized. Run `pnpm lint` to check; `next lint --fix` can fix ordering.
- **Formatting (Prettier):** 2 spaces, **no semicolons**, single quotes, no trailing commas,
  one JSX attribute per line, Tailwind classes auto-sorted by `prettier-plugin-tailwindcss`.
- **No `console.*`** (`no-console: error`). Unused vars/args must be prefixed with `_`.
- **Components:** named exports of arrow-function components (`export const Foo = () => ...`).
  Folder components expose an `index.tsx`; group barrels are `index.ts` with `export * from`.
- **File names:** kebab-case (`desktop-menu.tsx`, `use-aurora.ts`).
- **Styling:** Tailwind utilities only. Use `twMerge([...])` for conditional classes.
  Use `.main-padding` for horizontal page padding. Theme colors: `primary` `#13FFAA`,
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
   - the new component under `src/components/home/<name>-section/`, exported from
     `src/components/home/index.ts`, rendered in `src/pages/index.tsx`
3. **Showcase layout depends on `items.length`.** `ShowcaseSection` sets its height to
   `items.length * itemHeight` vh and its horizontal scroll distance from breakpoint-specific
   magic numbers. Adding/removing items changes scroll length automatically; changing card
   widths requires retuning `subtract` values. `windowWidth` is read once on mount (no resize listener).
4. **Showcase `description` strings are raw HTML** rendered with `dangerouslySetInnerHTML`.
   Only put trusted, hand-written HTML there. Keep links with `target='_blank'`.
5. **Two `AURORA` arrays exist:** `src/hooks/use-aurora.ts` (animated background colors) and
   `src/components/home/hero-sections/data.ts` (brand colors for hero). They are independent.
6. **Client-only APIs** (`window`, `document`) must be inside `useEffect` or event handlers —
   pages are pre-rendered on the server.
7. `react-syntax-highlighter` is listed in `transpilePackages` and lazily imported in
   `stacks-section/code-editor.tsx`; keep it lazy to avoid bloating the initial bundle.

## Editing content (most common task)

| Change                  | File                                                                          |
| ----------------------- | ----------------------------------------------------------------------------- |
| Nav menu labels         | `src/data/menu.ts`                                                            |
| About-me paragraph      | `src/components/home/experience-section/index.tsx`                            |
| Work history            | `src/components/home/experience-section/experiences.ts`                       |
| Tech stack logos        | `src/components/home/stacks-section/stacks.ts`                                |
| Tools logos             | `src/components/home/stacks-section/tools.ts`                                 |
| Portfolio projects      | `src/components/home/showcase-section/items.ts` + image in `public/showcase/` |
| Social links            | `src/components/home/footer-section/socials.ts`                               |
| Phone / email in footer | `src/components/home/footer-section/index.tsx`                                |

Keep `id` values unique and sequential in data arrays; they are used as React keys.

## Workflow rules for agents

- **Create a new git branch before starting any feature or change** (e.g. `feat/...`,
  `fix/...`, `docs/...`). Never commit directly to `main`.
- Keep diffs minimal and consistent with the surrounding style; don't reformat unrelated files.
- Before finishing: `pnpm lint` must pass; run `pnpm build` for non-trivial changes.
- Don't add new dependencies without a clear need; prefer what's already installed.
- Don't commit `.next/`, `node_modules/`, or `.DS_Store`.
- Personal data (contact info, work history) is intentional public content — edit only when asked.
