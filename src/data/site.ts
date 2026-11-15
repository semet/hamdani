// Single source of truth for personal details and SEO metadata.

export const site = {
  name: 'Hamdani Ash-Sidiq',
  shortName: 'Hamdani',
  role: 'Web Designer & Frontend Engineer',
  title: 'Hamdani Ash-Sidiq — Web Designer & Frontend Engineer',
  description:
    'Hamdani Ash-Sidiq is a web designer and frontend engineer crafting fast, beautiful websites and web apps with Next.js, React, TypeScript and Tailwind CSS.',
  keywords: [
    'web designer',
    'frontend engineer',
    'frontend developer',
    'Next.js developer',
    'React developer',
    'UI design',
    'Tailwind CSS',
    'Indonesia',
    'Lombok'
  ],
  location: 'Lombok, Indonesia',
  email: 'hamdanilombok@gmail.com',
  phone: '+6287736690307',
  resumeUrl:
    'https://drive.google.com/file/d/1uUxnd6E0y7qSUY2v8YqV7BQPyViODL2i/view?usp=share_link',
  // Absolute origin, injected at build time by next.config.ts (SITE_URL).
  url: process.env.SITE_URL ?? 'http://localhost:3000',
  ogImage: '/og.png',
  locale: 'en_US',
  twitter: '@HamdaniAshSidik'
} as const
