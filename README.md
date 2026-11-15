# Portfolio

Portfolio of Hamdani Ash-Sidiq, web designer & frontend engineer. A single-page,
editorial-style site with light and dark themes, built with Next.js, Tailwind CSS and Motion.

Sections: **Index** (hero), **Toolkit** (stack & tools), **About** (bio, stats, experience),
**Work** (projects in a horizontal scroll reel on desktop) and **Contact**.

Lighthouse: desktop 100 / 100 / 100 / 100 · mobile 91 / 100 / 100 / 100
(performance / accessibility / best practices / SEO).

## Tech stack

| Area      | Choice                                                                    |
| --------- | ------------------------------------------------------------------------- |
| Framework | Next.js 16 (Pages Router), React 19, TypeScript                           |
| Styling   | Tailwind CSS 4 (CSS-first config), `tailwind-merge`                       |
| Animation | [Motion](https://motion.dev) (`motion/react`), [Lenis](https://lenis.dev) |
| Type      | Instrument Serif, Geist, Geist Mono via `next/font`                       |
| Tooling   | ESLint 9 (flat config, React Compiler rules), Prettier + Tailwind plugin  |
| Hosting   | Vercel                                                                    |

## Getting started

Requirements: Node.js 24 or 26 (pinned in `package.json` `engines`, which Vercel uses) and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

### Scripts

| Script       | What it does                        |
| ------------ | ----------------------------------- |
| `pnpm dev`   | Start the dev server with Turbopack |
| `pnpm build` | Production build (also type-checks) |
| `pnpm start` | Serve the production build          |
| `pnpm lint`  | Run ESLint                          |

There is no automated test suite; `pnpm lint` and `pnpm build` are the checks.

## Project structure

```
src/
  pages/        _app (fonts, Lenis, Motion config), _document (theme script), index, api/ (sitemap, robots)
  sections/     one folder per page section (<name>/<name>-section.tsx + its parts and data)
  components/   shared UI: header, logo, seo, theme toggle, reveal text, marquee, …
  providers/    LayoutProvider — section refs, active section, scroll-to
  hooks/        use-theme, use-local-time
  data/         site details, socials, nav menu
  styles/       globals.css — theme palettes and Tailwind tokens
public/         icons/, images/, og.png, favicons, site.webmanifest
```

More detail:

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — page structure, theming, motion, SEO and performance
- [docs/CONTENT.md](docs/CONTENT.md) — how to update projects, experience, stack, socials
- [AGENTS.md](AGENTS.md) — conventions for contributors and AI coding agents

## Contributing workflow

1. Create a branch: `git checkout -b feat/short-description`
2. Make the change, following the conventions in [AGENTS.md](AGENTS.md)
3. Run `pnpm lint` and `pnpm build`
4. Open a pull request into `main`

## AI agent support

This repo ships instructions for common AI coding assistants. `AGENTS.md` is the source
of truth; the others summarize or import it:

| Tool                                    | File                              |
| --------------------------------------- | --------------------------------- |
| OpenAI Codex, Jules, Zed, Aider, others | `AGENTS.md`                       |
| Claude Code                             | `CLAUDE.md` (imports `AGENTS.md`) |
| Gemini CLI / Code Assist                | `GEMINI.md` (imports `AGENTS.md`) |
| GitHub Copilot                          | `.github/copilot-instructions.md` |
| Cursor                                  | `.cursor/rules/project.mdc`       |
| Windsurf                                | `.windsurf/rules/project.md`      |

When conventions change, update `AGENTS.md` first, then the condensed copies.

## Deployment

Hosted on [Vercel](https://vercel.com): import the repo and deploy with the default Next.js
settings. Canonical URLs, Open Graph images and the sitemap use Vercel's production domain
automatically; set `NEXT_PUBLIC_SITE_URL` to override it (for example, for a custom domain).
