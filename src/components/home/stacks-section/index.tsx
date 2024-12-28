import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform
} from 'motion/react'
import { useState } from 'react'

import { useAurora } from '@/hooks'
import { useLayout } from '@/providers'

import { CodeEditor } from './code-editor'
import { MyTools } from './my-tools'
import { RadialStacks } from './radial-stacks'
import { ReactLogo } from './react-logo'
import { SquareStacks } from './square-stacks'

export const StacksSection = () => {
  const { toTop } = useAurora()
  const { stacksSection } = useLayout()
  const [radius, setRadius] = useState<number>(0)
  const { scrollYProgress } = useScroll({
    target: stacksSection,
    offset: ['start end', 'start start']
  })
  const scale = useTransform(scrollYProgress, [0, 1], [0.3, 1.1])

  const radiusMotion = useTransform(scrollYProgress, [0, 1], [100, 320])
  useMotionValueEvent(radiusMotion, 'change', (value) => {
    setRadius(value)
  })

  return (
    <motion.section
      layout
      ref={stacksSection}
      className="main-padding relative flex h-auto flex-col items-start justify-start gap-4 overflow-hidden p-4 py-4 lg:h-screen lg:flex-row lg:justify-between"
      style={{
        backgroundImage: toTop
      }}
    >
      <div className="h-full w-full lg:h-[75%] lg:w-[50%]">
        <CodeEditor />
        <SquareStacks />
      </div>
      <div className="flex w-full flex-col items-end lg:w-1/2">
        <MyTools />
      </div>
      <ReactLogo />
      <RadialStacks
        radius={radius}
        scale={scale}
        scrollYProgress={scrollYProgress}
      />
    </motion.section>
  )
}
