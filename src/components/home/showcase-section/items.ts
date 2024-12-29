export type Item = {
  id: number
  title: string
  description: string
  image: string
  link: string
  tags: string[]
}

export const items = [
  {
    id: 1,
    title: 'Remix Admin Template',
    description:
      'Remix Admin Template is a modern and responsive admin template built with Remix and Tailwind CSS. It is designed to be easy to use and customize. It uses some popular library like.',
    image: '/showcase/remix-admin.png',
    link: 'https://remix-admin-five.vercel.app/dashboard',
    repository: '',
    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Remix',
      'React Hook Form',
      'React Table',
      'React Query',
      'Recharts',
      'framer-motion'
    ]
  },
  {
    id: 2,
    title: 'Remix Admin Template Landing',
    description:
      'Remix Admin Template Landing is a modern and responsive landing page built with Remix and Tailwind CSS. It is designed to be easy to use and customize.',
    image: '/showcase/remix-admin-landing.png',
    link: 'https://remix-admin-five.vercel.app',
    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Remix',
      'React Hook Form',
      'React Table',
      'React Query',
      'React Full Calendar',
      'Recharts'
    ]
  },
  {
    id: 3,
    title: 'Website Abudarda Boarding School',
    description:
      "This is the official website of a Boarding School in my village. I built it using <a href='https://nextjs.org' target='_blank'>Nextjs</a>, <a href='https://nextjs.org' target='_blank'>Nextjs</a>, Bootstrap, and Prisma and deployed on Vercel. The database is hosted in <a href='https://getbootstrap.com/docs/5.0/getting-started/introduction target='_blank'> Bootstrap </a>, and <a href='https://www.prisma.io' target='_blank'>Prisma</a> and deployed on <a href='https://vercel.com' target='_blank'>Vercel</a>. The database is hosted in <a href='https://planetscale.com' target='_blank'>Planetscale</a>. This website is not 100% done because of Administration issue",
    url: 'https://abudarda.vercel.app',
    image: '/showcase/abudarda.png',
    link: 'https://abudarda.vercel.app/',
    tags: ['Nextjs', 'Chakra UI', 'Planetscale', 'Prisma']
  },
  {
    id: 4,
    title: 'Abudardapedia (Media Abudarda)',
    description:
      "Another website i built on top of <a href='https://nextjs.org' target='_blank'>Nextjs</a>, <a href='https://chakra-ui.com' target='_blank'>Chakra UI</a>, and <a href='https://www.prisma.io' target='_blank'>Prisma</a>. This website has a full working Login System built with <a href='https://next-auth.js.org' target='_blank'>Next-Auth</a> library. This website is intended for the Abudarda Boarding School to share their Media and Articles",
    image: '/showcase/abudardapedia.png',
    link: 'https://abudardapedia.vercel.app/',
    tags: [
      'Nextjs',
      'Chakra UI',
      'Planetscale',
      'Prisma',
      'Cloudinary',
      'React Query',
      'Next Auth'
    ]
  },
  {
    id: 5,
    title: 'Bookshelf',
    description:
      "This website is made as a test for me when I applied in the Digital Solution company located in Philipphine. The test require me using external Api <a href='https://developers.google.com/books' target='_blank'>(Google Book API)</a> and my favorite library; <a href='https://tanstack.com/query/v5/docs/react/overview' target='_blank'>React Query</a>. I use <a href='https://tailwindcss.com' target='_blank'>Tailwind css</a> to style this website. This repository also uses <a href='https://jestjs.io' target='_blank'>Jest</a> as the testing Framework",
    image: '/showcase/bookshelf.png',
    link: 'https://bookshelf-jet.vercel.app/',
    tags: ['Nextjs', 'Tailwind css', 'Google book API', 'React Query', 'Jest']
  },
  {
    id: 6,
    title: 'Remake Website Brida NTB',
    description:
      "I created this website on the purpose of applying for a job in  <a href='https://brida.ntbprov.go.id' target='_blank'>BRIDA Academy</a> in my home town, Mataram. Even though I receive no response after my application, I feel happy creating this remake of their website. This Website is another result of <a href='https://nextjs.org' target='_blank'>Nextjs</a> + <a href='https://chakra-ui.com' target='_blank'>Chakra UI</a> combined together",
    image: '/showcase/brida.png',
    link: 'https://brida-three.vercel.app/',
    tags: ['Nextjs', 'Chakra UI']
  },
  {
    id: 7,
    title: 'Luminae (E-comers template)',
    description:
      "This is a <a href='https://nextjs.org' target='_blank'>Nextjs</a> Version of a <a href='https://www.figma.com/file/2MxWLF542kMuO5aS9VrgcI/Ecommerce-UI-Kit-(Community)?type=design&node-id=0-1&mode=design&t=DwqUmjBcEoUnI3Hx-0' target='_blank'>Figma file</a>. I transformed the <a href='https://www.figma.com' target='_blank'>Figma</a> design into a website template using <a href='https://nextjs.org' target='_blank'>Nextjs</a> and <a href='https://tailwindcss.com' target='_blank'>Tailwind css</a>. I handle state management using popular library called <a href='https://zustand-demo.pmnd.rs' target='_blank'>Zustand</a>. As usual, I pop <a href='https://jestjs.io' target='_blank'>Jest</a> testing library once again to deal with Unit Testing in this project",
    image: '/showcase/luminae.png',
    link: 'https://luminae-eta.vercel.app/',
    tags: ['Nextjs', 'Tailwind css', 'Jest', 'Zustand']
  },
  {
    id: 8,
    title: 'Nexy Landing template',
    description:
      "This was my first design using <a href='https://nextjs.org' target='_blank'>Nextjs</a> and <a href='https://chakra-ui.com' target='_blank'>Chakra UI</a>. It might look awful, but this project means a lot to me. This project open my mind and understanding about how Frontend design works. This is the beginning of my 'start-from-scratch' project",
    image: '/showcase/nexy.png',
    link: 'https://nexy-byq9.vercel.app/',
    tags: ['Nextjs', 'Chakra UI']
  },
  {
    id: 9,
    title: 'Animated Portfolio',
    description:
      "This is a Open Source animated portfolio template made with <a href='https://nextjs.org' target='_blank'>Nextjs</a>, <a href='https://motion.dev/' target='_blank'>Framer Motion</a>, <a href='https://r3f.docs.pmnd.rs/' target='_blank'>React Three Fiber</a>, and <a href='https://drei.docs.pmnd.rs/getting-started/introduction' target='_blank'>React Three Drei</a>. Definitely check it out!",
    image: '/showcase/animated-portfolio.png',
    link: 'https://tanstack-router-app.vercel.app/portfolio',
    tags: ['Reactjs', 'Framer Motion', 'React Three Fiber', 'React Three Drei']
  }
]
