import { motion } from 'motion/react'

import { PageTitle } from '@/components/page-title'
import { useAurora } from '@/hooks'
import { useLayout } from '@/providers'

import { ExperienceTabs } from './experience-tabs'
import { NodejsLogo } from './nodejs-logo'

export const Experience = () => {
  const { toBottom } = useAurora()
  const { aboutSection } = useLayout()
  return (
    <motion.section
      ref={aboutSection}
      className="main-padding relative flex min-h-screen flex-col justify-between gap-4 py-4 lg:gap-6 xl:flex-row"
      style={{ backgroundImage: toBottom }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 100
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5
          }
        }}
        className="relative flex w-full flex-col gap-2 xl:w-1/3"
      >
        <PageTitle title="About Me" />
        <p className="prose-sm rounded-lg bg-black/50 p-4 text-justify text-white shadow sm:prose sm:text-white">
          I started coding more than 10 years ago when the good old PHP and
          Double-clicking index.html was a thing. I then learned more advance
          languages like HTML (I am one of those who believe HTML is a
          Programming Language itself 😂), CSS, JavsScript, TypeScript, MySql
          and many more. I also spent my time learning some stuffs like Reactjs,
          Vuejs, Nextjs, Nodejs (especially Express), and a good amount of time
          diving Rest API. But my primary Language is Javascript (React/Nextjs)
          and PHP (Laravel) . I know GraphQL a little bit and I keep myself
          Up-to-Date with the information about the languages and technologies
          that I use. I claim myself to be one of those Fullstack Developer
          because I can do Front-end Design, good understanding of Rest API and
          how to connect both. By the way, I also know Laravel very well (incase
          you need a PHP Developer). I currently work in a leading tech company
          called Synergyse Tech. I work full time as Frontend Developer by using
          Nextjs as the main framework.
        </p>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: 100
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: 0.3
          }
        }}
        className="flex w-full flex-col gap-4 xl:w-2/3"
      >
        <ExperienceTabs />
      </motion.div>
      <div
        className="absolute bottom-0 left-0 z-0 h-1/2 w-full"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.09)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
          maskImage:
            'linear-gradient(0deg, rgba(0,212,255,1) 0%, rgba(0,241,255,0) 75%)'
        }}
      />
      <NodejsLogo />
    </motion.section>
  )
}
