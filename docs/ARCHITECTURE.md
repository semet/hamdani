# Architecture

The site is one statically generated Next.js page (`src/pages/index.tsx`) made of five
sections. There is no database or state library: React context for navigation, a tiny
external store for the theme, and Motion for every animation.

## Render tree

```
_document.tsx            pre-paint theme script, favicons, theme-color
_app.tsx
└─ ReactLenis (root)     smooth scrolling
   └─ MotionConfig       reducedMotion="user"
      └─ LayoutProvider  section refs + active section + scroll-to
         ├─ Header       logo, nav pill, "Let's talk", theme toggle, mobile menu
         ├─ <main>
         │  └─ pages/index.tsx
         │     ├─ <Seo />             <head> meta, Open Graph, JSON-LD
         │     ├─ HeroSection         ref: homeSection
         │     ├─ StacksSection       ref: stacksSection
         │     ├─ ExperienceSection   ref: aboutSection
         │     ├─ ShowcaseSection     ref: showcaseSection
         │     └─ FooterSection       ref: contactSection
         └─ ScrollToTop  hidden in the footer
```

## Navigation and active section

1. `src/data/menu.ts` defines `{ id, name }`; `HomeMenu` is the union of ids.
2. `LayoutProvider` creates one ref per section and shares them through `useLayout()`.
3. Each section attaches its ref to its root element.
4. `useInView` with a center-line margin reports which section crosses the middle of the
   viewport; `activeMenu` is **derived during render** from those booleans.
5. Menu clicks call `onMenuClick(id)`, which scrolls with Lenis (`lenis.scrollTo`).

### Adding a section

1. Add `{ id: 'fooSection', name: 'Foo' }` to `src/data/menu.ts`.
2. In `layout-provider.tsx`: add the ref, a `useInView` call, a branch in the `activeMenu`
   chain, the ref in the `onMenuClick` map and the context value.
3. Create `src/sections/foo/foo-section.tsx` exporting `FooSection` and attach the ref.
4. Render it in `src/pages/index.tsx`.
5. Add `'foo'` to the section list in `import/no-restricted-paths` (`eslint.config.mjs`).

## Theming (light / dark)

- Palettes are CSS variables at the top of `src/styles/globals.css` and are exposed to
  Tailwind as semantic colors: `canvas`, `surface`, `surface-2`, `fg`, `muted`, `line`,
  `line-strong`, `ember`.
- An inline script in `_document.tsx` sets `data-theme` on `<html>` **before first paint**:
  the saved choice from `localStorage`, otherwise the OS `prefers-color-scheme`. No flash.
- `src/hooks/use-theme.ts` is a small external store read with `useSyncExternalStore`.
  It follows OS changes until the visitor picks a theme with the toggle.
- Light-theme colors were tuned for WCAG AA (≥4.5:1 for small text).

## Motion

All animation uses Motion (`motion/react`) and only animates `transform` / `opacity`.

| Piece             | What it does                                                                  |
| ----------------- | ----------------------------------------------------------------------------- |
| `RevealText`      | Words rise from a mask, staggered; `*word*` renders as an italic ember accent |
| `ScrollHighlight` | About paragraph lights up word by word with scroll                            |
| `Marquee`         | Endless services strip (content duplicated, track slides 50%)                 |
| `Magnetic`        | Buttons follow a mouse pointer with springs (ignored on touch)                |
| `CountUp`         | Stats count up when visible, rendered from a MotionValue (no re-renders)      |
| Hero              | Drifting glows, content parallax/fade on scroll, rotating "scroll" badge      |
| Header            | Hides on scroll down, returns on scroll up; nav pill uses `layoutId`          |
| Showcase          | Sticky horizontal reel driven by scroll progress                              |
| Logo              | Tile springs in; on hover it tilts, the italic _a_ swings, letters roll       |

## Showcase reel

The track is measured with a `ResizeObserver`. Its horizontal overflow becomes both the
section height (`100vh + overflow`) and the distance the row travels while the panel is
sticky. Below `lg` the same cards stack vertically and nothing is transformed. Card width is
capped by viewport height so the sticky panel always fits.

## SEO and performance

- `src/components/seo.tsx`: title, description, canonical, Open Graph, Twitter card and a
  JSON-LD `Person` + `WebSite` graph, all from `src/data/site.ts`.
- `/sitemap.xml` and `/robots.txt` are API routes behind rewrites in `next.config.ts`.
- `SITE_URL` comes from `NEXT_PUBLIC_SITE_URL`, else Vercel's production domain.
- Fonts via `next/font` (self-hosted, `display: swap`); the mono label font isn't preloaded.
- Screenshots: static imports + `next/image` (AVIF/WebP, blur placeholder, real sizes).
- Brand icons are self-hosted SVGs in `public/icons/` — no third-party requests.
- Lighthouse at the time of the redesign: desktop 100/100/100/100, mobile 91/100/100/100.

## Conventions

See [AGENTS.md](../AGENTS.md) for import rules, React 19 rules, formatting and lint constraints.
