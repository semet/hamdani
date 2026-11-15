# Architecture

The site is one Next.js page (`src/pages/index.tsx`) made of five full-width sections.
There is no data fetching, API, or state library — just React context and Motion.

## Render tree

```
_app.tsx
└─ LayoutProvider            (src/providers/layout-provider.tsx)
   └─ <main> (Nunito Sans / Fira Code fonts)
      ├─ Header              fixed; DesktopMenu + MobileMenu
      ├─ pages/index.tsx      (imports each section from src/sections/<name>/<name>-section.tsx)
      │  ├─ HeroSection      ref: homeSection
      │  ├─ StacksSection    ref: stacksSection
      │  ├─ ExperienceSection ref: aboutSection
      │  ├─ ShowcaseSection  ref: showcaseSection
      │  └─ FooterSection    ref: contactSection
      └─ ScrollToTop
```

`_app.tsx` also starts a [Lenis](https://github.com/darkroomengineering/lenis) instance
on mount for smooth scrolling and destroys it on unmount.

## Navigation and active menu

Menu items aren't links to routes. Instead:

1. `src/data/menu.ts` defines `{ id, name }` items. `HomeMenu` is the union of those ids.
2. `LayoutProvider` creates one `useRef` per section and shares them via `useLayout()`.
3. Each section component attaches its ref to its root `motion.section`.
4. Clicking a menu item calls `onMenuClick(id)`, which `window.scrollTo`s the section's
   `offsetTop` (with per-section offsets to clear the fixed header). Contact scrolls to the bottom.
5. `useInView` (with a `-500px` top margin) watches each ref; the first visible section
   becomes `activeMenu`, which the menus highlight with a shared `layoutId` pill.

### Adding a new section

1. Add `{ id: 'fooSection', name: 'Foo' }` to `src/data/menu.ts` in display order.
2. In `layout-provider.tsx`: add `fooSection` to `LayoutProviderType` and `sectionRefs`,
   add a `case` to `onMenuClick`, add a `useInView` call, and add it to the `sections` array
   and the effect's dependency list.
3. Create `src/sections/foo/foo-section.tsx` exporting `FooSection`; attach
   `const { fooSection } = useLayout()` as the root `ref`.
4. Import it directly in `src/pages/index.tsx` and render it (there are no barrel files).
5. Add `'foo'` to the section list in the `import/no-restricted-paths` rule in
   `eslint.config.mjs` so its files stay private to it.

## Visual system

- **Aurora backgrounds:** `useAurora()` (`src/hooks/use-aurora.ts`) animates a color through
  a palette over 20s and returns two Motion templates, `toBottom` and `toTop`
  (gradients from cyan to the animated color). Sections alternate between them so the
  seams line up.
- **Grid overlay:** several sections add an absolutely positioned SVG grid with a gradient mask.
- **Theme tokens** (`@theme` in `src/styles/globals.css`): `primary #13FFAA`, `secondary #1E67C6`,
  `tertiary #CE84CF`, `quaternary #DD335C`; `font-sans` Nunito Sans, `font-mono` Fira Code.
- **Gutters:** `main-padding` (an `@utility` in `globals.css`) applies responsive horizontal padding.

## Scroll-driven effects

| Section  | Effect                                                                                                                                                 |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Header   | Background and shadow fade in after ~2% page scroll (spring-smoothed).                                                                                 |
| Stacks   | Radial logo ring scales (0.3→1.1) and its radius grows (100→320px) as the section enters.                                                              |
| Showcase | Section is `items.length × 100vh` tall (85vh below `lg`); a sticky row translates horizontally on desktop, a vertical list is used on smaller screens. |
| Footer   | Slides up from `-300px` as it scrolls into view.                                                                                                       |

The showcase translation distance per item is a breakpoint-specific constant
(`-410` / `-390` / `-460` px for lg / xl / 2xl). If you change card widths, retune these.
The window width is read once on mount, so resizing across breakpoints needs a reload.

## Module structure

- `src/pages/` holds routes only. `src/sections/<name>/` holds one page section: its
  `<name>-section.tsx` entry plus private sub-components and data files.
- `src/components/`, `src/providers/`, `src/hooks/` and `src/data/` are shared and must not
  import from `src/sections/`. A section must not import another section's files.
- There are **no barrel (`index.ts`) files**. Every import names the file that defines the
  export, so dependencies are explicit, go-to-definition lands on real code, and nothing
  pulls in unrelated modules. ESLint enforces all of this.

## Conventions

See [AGENTS.md](../AGENTS.md) for import rules, formatting, and lint constraints.
