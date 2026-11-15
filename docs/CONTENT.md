# Updating content

All content is plain TypeScript in the repo. Edit the file, run `pnpm dev` to preview,
then `pnpm lint`.

## Showcase projects

File: `src/sections/showcase/items.ts`

```ts
{
  id: 9,                                   // unique, next number
  title: 'My Project',
  description: "Built with <a href='https://nextjs.org' target='_blank'>Next.js</a>.",
  image: '/showcase/my-project.png',       // file in public/showcase/
  link: 'https://my-project.vercel.app',
  tags: ['Nextjs', 'Tailwind css']
}
```

- `description` is rendered as **HTML**, so inline `<a>` tags work. Use single quotes
  inside the string's attributes, and only write trusted HTML.
- Put the screenshot in `public/showcase/`. Wide (landscape) screenshots look best.
- The section's scroll length grows automatically with the number of items.

## Work experience

File: `src/sections/experience/experiences.ts`

```ts
{
  id: 4,
  title: 'Frontend Developer',
  company: 'Company Name',
  date: '2024-01-01--Present',   // start--end
  description: 'What you did…',
  technologies: ['Nextjs', 'TypeScript']
}
```

The "About Me" paragraph is inline JSX in `src/sections/experience/experience-section.tsx`.

## Tech stack and tools

- Stacks: `src/sections/stacks/stacks.ts` — `{ id, title, image }`
- Tools: `src/sections/stacks/tools.ts` — `{ id, name, image }`

`image` can be a remote HTTPS URL or a path under `public/`. Prefer local copies for
logos you rely on; remote logo URLs can disappear.

## Contact and socials

- Social icons/links: `src/sections/footer/socials.ts`. The `gmail` entry
  opens a `mailto:` link instead of `href`.
- Phone number, email, and the `mailto:` address: `src/sections/footer/footer-section.tsx`.

## Navigation labels

`src/data/menu.ts` — change `name` freely. Changing an `id` requires updating
`src/providers/layout-provider.tsx` (see [ARCHITECTURE.md](ARCHITECTURE.md)).
