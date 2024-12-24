import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform
} from 'motion/react'
import { useEffect, useRef, useState } from 'react'

import { useAurora } from '@/hooks'

import { CodeEditor } from './code-editor'
import { RadialStacks } from './radial-stacks'
import { ReactLogo } from './react-logo'
import { Right } from './right'

export const StacksSection = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const { toTop } = useAurora()
  const containerRef = useRef<HTMLDivElement>(null)
  const [radius, setRadius] = useState<number>(0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start']
  })
  const scale = useTransform(scrollYProgress, [0, 1], [0.3, 1.1])

  const radiusMotion = useTransform(
    scrollYProgress,
    [0, 1],
    [100, isMobile ? 150 : 350]
  )
  useMotionValueEvent(radiusMotion, 'change', (value) => {
    setRadius(value)
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    setIsMobile(window.innerWidth < 768)
  }, [])

  return (
    <motion.section
      layout
      ref={containerRef}
      className="main-padding relative flex h-screen items-start justify-between gap-4 overflow-hidden p-4"
      style={{
        backgroundImage: toTop
      }}
    >
      <div className="h-[75%] w-1/2 md:w-[50%]">
        <CodeEditor />
      </div>
      <div className="flex w-1/3 flex-col items-end">
        <Right />
      </div>
      <ReactLogo />
      <RadialStacks
        radius={radius}
        scale={scale}
      />
    </motion.section>
  )
}
