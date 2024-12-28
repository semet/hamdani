import { motion, useScroll, useTransform } from 'motion/react'

import { PageTitle } from '@/components/page-title'
import { useAurora, useWindowWidth } from '@/hooks'
import { useLayout } from '@/providers'

import { Background } from './background'
import { HorizontalView } from './horizontal-view'
import { items } from './items'
import { VerticalView } from './vertical-view'

export const ShowcaseSection = () => {
  const { toTop } = useAurora()
  const windowWidth= useWindowWidth()
  const { showcaseSection } = useLayout()
  const { scrollYProgress } = useScroll({
    target: showcaseSection,
    offset: ['start start', 'end end']
  })

  //begin at lg:1024
  const subtract =
    windowWidth >= 1024 && windowWidth <= 1279
      ? -410
      : windowWidth >= 1280 && windowWidth <= 1535
        ? -390
        : windowWidth >= 1536
          ? -460
          : -50
  const itemHeight = windowWidth >= 1024 ? 100 : 85
  const x = useTransform(scrollYProgress, [0, 1], [0, subtract * items.length])


  return (
    <motion.section
      ref={showcaseSection}
      className="relative z-20 pb-4"
      style={{
        backgroundImage: toTop,
        height: `${items.length * itemHeight}vh`
      }}
    >
      <Background />
      <div className="top-0 flex flex-col gap-2 lg:sticky lg:top-40 lg:overflow-hidden">
        <div className="main-padding">
          <PageTitle title="Showcase" />
        </div>
        <HorizontalView
          scrollYProgress={scrollYProgress}
          x={x}
        />
        <VerticalView scrollYProgress={scrollYProgress} />
      </div>
    </motion.section>
  )
}
