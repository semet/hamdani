# Updating content

All content is plain TypeScript in the repo. Edit the file, preview with `pnpm dev`, then
run `pnpm lint`.

## Personal details and SEO

File: `src/data/site.ts` — name, role, email, phone, résumé link, location and the SEO
description used in search results and link previews.

Social links (footer, mobile menu and structured data): `src/data/socials.ts`.

## Projects

File: `src/sections/showcase/items.ts`

```ts
import myProject from './images/my-project.png'

{
  id: 9,                          // unique
  title: 'My Project',
  kind: 'Landing page',           // small label above the title
  description: 'One or two sentences, plain text.',
  image: myProject,               // static import from ./images
  link: 'https://my-project.vercel.app',
  tags: ['Next.js', 'Tailwind CSS']
}
```

- Put the screenshot in `src/sections/showcase/images/`. Landscape (16:10) works best; the
  top of the image is what shows.
- The reel's length adapts automatically to the number of projects.

## Work experience

File: `src/sections/experience/experiences.ts` — `date` is `'YYYY-MM-DD--YYYY-MM-DD'` or
`'YYYY-MM-DD--Present'` and is formatted as "Jan 2023 — Present". The About text and stats
are in `src/sections/experience/experience-section.tsx`.

## Tech stack and tools

- Stack: `src/sections/stacks/stacks.ts` — `{ id, title, icon }`
- Tools: `src/sections/stacks/tools.ts` — `{ id, name, icon }`

Add the logo as an SVG in `public/icons/`. Download from
[Simple Icons](https://simpleicons.org); if that glyph is hard to recognize in one color, use
the Devicon "plain" variant. Logos render as a single color that follows the theme.

## Headlines

Section titles use `RevealText` / `SectionHeading`. Wrap a word in asterisks to make it the
italic ember accent: `title="The tools behind *every* pixel."`

## Navigation labels

`src/data/menu.ts` — change `name` freely. Changing an `id` also requires updating
`src/providers/layout-provider.tsx` (see [ARCHITECTURE.md](ARCHITECTURE.md)).
