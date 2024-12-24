import { motion } from 'motion/react'

import { useAurora } from '@/hooks'

import { ExperienceTabs } from './experience-tabs'
import { NodejsLogo } from './nodejs-logo'

export const Experience = () => {
  const { toBottom } = useAurora()
  return (
    <motion.section
      className="main-padding relative flex min-h-screen flex-col justify-between gap-4 py-4 lg:flex-row"
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
        className="relative flex w-full flex-col gap-4 lg:w-1/3"
      >
        <h3
          className="rounded-mdp-4 relative text-2xl font-semibold text-white sm:text-5xl"
          style={{
            textShadow: '-4px 4px 2px rgba(0,0,0,0.6)'
          }}
        >
          Experiences
        </h3>
        <p className="prose-sm sm:prose-lg text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A illum
          iusto officiis quidem eos laboriosam sunt explicabo quibusdam
          voluptatem cupiditate! Ipsum, sequi dolorum? Assumenda deleniti
          voluptas dolorum at non rerum. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Ex laboriosam eveniet error. Mollitia ad molestias
          nam perspiciatis deleniti sed incidunt saepe repudiandae,
          reprehenderit ullam dicta tenetur nemo quibusdam voluptatem magni.
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
            delay: 0.5
          }
        }}
        className="flex w-full flex-col gap-4 lg:w-2/3"
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
