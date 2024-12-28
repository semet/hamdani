import { motion } from 'motion/react'

import { useAurora } from '@/hooks'
import { useLayout } from '@/providers'

import { Left } from './left'
import { Right } from './right'

export const HeroSection = () => {
  const { toBottom, color } = useAurora()
  const { homeSection } = useLayout()

  return (
    <motion.section
      ref={homeSection}
      style={{
        backgroundImage: toBottom
      }}
      className="h-screen"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.08)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
          maskImage:
            'linear-gradient(180deg, rgba(0,212,255,1) 0%, rgba(0,241,255,0) 75%)'
        }}
      />
      <div className="absolute inset-0 flex flex-col-reverse items-center justify-center gap-4 px-4 py-4 md:flex-row md:justify-start md:pl-10 lg:pl-20 xl:pl-32 2xl:pl-44">
        <Left color={color} />
        <Right containerRef={homeSection} />
      </div>
    </motion.section>
  )
}
