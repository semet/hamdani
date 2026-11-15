import type { StaticImageData } from 'next/image'

import abudarda from './images/abudarda.png'
import abudardapedia from './images/abudardapedia.png'
import bookshelf from './images/bookshelf.png'
import brida from './images/brida.png'
import luminae from './images/luminae.png'
import nexy from './images/nexy.png'
import remixAdminLanding from './images/remix-admin-landing.png'
import remixAdmin from './images/remix-admin.png'

export type Item = {
  id: number
  title: string
  /** Short label shown above the title, e.g. "Admin template". */
  kind: string
  /** Plain text, rendered as-is. */
  description: string
  image: StaticImageData
  link: string
  tags: string[]
}

export const items: Item[] = [
  {
    id: 1,
    title: 'Remix Admin',
    kind: 'Admin dashboard template',
    description:
      'A modern, fully responsive admin dashboard built with Remix and Tailwind CSS. Designed to be adopted in minutes and customized without a fight, with React Hook Form, TanStack Table, React Query and Recharts under the hood.',
    image: remixAdmin,
    link: 'https://remix-admin-five.vercel.app/dashboard',
    tags: [
      'Remix',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'React Hook Form',
      'TanStack Table',
      'React Query',
      'Recharts',
      'Framer Motion'
    ]
  },
  {
    id: 2,
    title: 'Remix Admin — Landing',
    kind: 'Product landing page',
    description:
      'The marketing site for Remix Admin: a crisp, responsive landing page that walks visitors through the product, built with Remix and Tailwind CSS.',
    image: remixAdminLanding,
    link: 'https://remix-admin-five.vercel.app',
    tags: [
      'Remix',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'React Hook Form',
      'TanStack Table',
      'React Query',
      'FullCalendar',
      'Recharts'
    ]
  },
  {
    id: 3,
    title: 'Abudarda Boarding School',
    kind: 'School website',
    description:
      'The official website of a boarding school in my home village, built with Next.js and Prisma on a PlanetScale database and deployed on Vercel. Still a work in progress — paused on the school’s administrative side.',
    image: abudarda,
    link: 'https://abudarda.vercel.app/',
    tags: ['Next.js', 'Chakra UI', 'Prisma', 'PlanetScale']
  },
  {
    id: 4,
    title: 'Abudardapedia',
    kind: 'Media & articles platform',
    description:
      'A home for Abudarda Boarding School’s media and articles, built with Next.js, Chakra UI and Prisma, with a complete sign-in system powered by NextAuth and images served through Cloudinary.',
    image: abudardapedia,
    link: 'https://abudardapedia.vercel.app/',
    tags: [
      'Next.js',
      'Chakra UI',
      'Prisma',
      'PlanetScale',
      'Cloudinary',
      'React Query',
      'NextAuth'
    ]
  },
  {
    id: 5,
    title: 'Bookshelf',
    kind: 'Book discovery app',
    description:
      'A book explorer built as a technical assessment for a digital solutions company in the Philippines — powered by the Google Books API and React Query, styled with Tailwind CSS and covered by Jest tests.',
    image: bookshelf,
    link: 'https://bookshelf-jet.vercel.app/',
    tags: ['Next.js', 'Tailwind CSS', 'Google Books API', 'React Query', 'Jest']
  },
  {
    id: 6,
    title: 'BRIDA NTB Redesign',
    kind: 'Government website redesign',
    description:
      'An unsolicited redesign of the BRIDA website in my hometown of Mataram, made as part of a job application. The role never came through, but the redesign was worth every hour. Built with Next.js and Chakra UI.',
    image: brida,
    link: 'https://brida-three.vercel.app/',
    tags: ['Next.js', 'Chakra UI']
  },
  {
    id: 7,
    title: 'Luminae',
    kind: 'E-commerce template',
    description:
      'A community Figma e-commerce UI kit brought to life as a Next.js template — styled with Tailwind CSS, with Zustand managing state and Jest covering the units.',
    image: luminae,
    link: 'https://luminae-eta.vercel.app/',
    tags: ['Next.js', 'Tailwind CSS', 'Zustand', 'Jest']
  },
  {
    id: 8,
    title: 'Nexy',
    kind: 'Landing page template',
    description:
      'My very first design built with Next.js and Chakra UI. Not my most polished work, but the project that taught me how frontend design really works — and where my build-it-from-scratch habit began.',
    image: nexy,
    link: 'https://nexy-byq9.vercel.app/',
    tags: ['Next.js', 'Chakra UI']
  }
]
