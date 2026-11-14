# Portfolio

Personal portfolio website for Hamdani Ash-Sidiq — a single-page, animation-heavy site
built with Next.js, Tailwind CSS and Motion.

The page has five sections: **Home** (hero), **Stacks** (tech & tools), **About**
(bio + work experience), **Showcase** (projects, horizontally scrolled on desktop) and
**Contact** (footer).

## Tech stack

| Area          | Choice                                                             |
| ------------- | ------------------------------------------------------------------ |
| Framework     | Next.js 15 (Pages Router), React 19, TypeScript                    |
| Styling       | Tailwind CSS 3, `@tailwindcss/typography`, `tailwind-merge`        |
| Animation     | [Motion](https://motion.dev) (`motion/react`), Lenis smooth scroll |
| UI primitives | Headless UI                                                        |
| Tooling       | ESLint 9 (flat config), Prettier + Tailwind plugin, pnpm           |

## Getting started

Requirements: Node.js 18.18+ and [pnpm](https://pnpm.io).

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
  pages/        _app.tsx (fonts, smooth scroll, layout), index.tsx (the page)
  providers/    LayoutProvider — section refs, active menu, scroll-to-section
  data/         nav menu definition
  hooks/        useAurora — animated gradient backgrounds
  components/   header, logo, page-title, scroll-to-top, home/<section>/
  styles/       globals.css
public/         favicons, images/, showcase/ screenshots
```

More detail:

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — how the page, navigation and animations fit together
- [docs/CONTENT.md](docs/CONTENT.md) — how to update projects, experience, stacks, socials
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

Designed for [Vercel](https://vercel.com): import the repo, keep the default Next.js
settings, deploy. Any host that runs `next build && next start` also works.
