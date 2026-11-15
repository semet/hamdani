import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform
} from 'motion/react'
import { useEffect, useRef, useState } from 'react'

import { SectionHeading } from '@/components/section-heading'
import { useLayout } from '@/providers/layout-provider'

import { items } from './items'
import { ProjectCard } from './project-card'

export const ShowcaseSection = () => {
  const { showcaseSection } = useLayout()
  const trackRef = useRef<HTMLDivElement>(null)

  // Horizontal overflow of the track. 0 below `lg`, where cards stack vertically.
  const distance = useMotionValue(0)
  const [sectionHeight, setSectionHeight] = useState<string | undefined>()

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const measure = () => {
      const raw = track.scrollWidth - track.clientWidth
      // scrollWidth ignores the trailing padding, so add it back to end on the gutter.
      const overflow =
        raw > 0 ? raw + parseFloat(getComputedStyle(track).paddingRight) : 0
      distance.set(overflow)
      setSectionHeight(overflow > 0 ? `calc(100vh + ${overflow}px)` : undefined)
    }
    // ResizeObserver fires once on observe, then on every size change.
    const observer = new ResizeObserver(measure)
    observer.observe(track)
    return () => observer.disconnect()
  }, [distance])

  const { scrollYProgress } = useScroll({
    target: showcaseSection,
    offset: ['start start', 'end end']
  })
  const x = useTransform(() => -scrollYProgress.get() * distance.get())
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <section
      ref={showcaseSection}
      aria-label="Selected work"
      style={{ height: sectionHeight }}
      className="relative"
    >
      <div className="flex flex-col gap-12 py-28 sm:py-36 lg:sticky lg:top-0 lg:h-screen lg:justify-center lg:gap-10 lg:overflow-hidden lg:py-0">
        <div className="flex items-end justify-between gap-8 main-padding">
          <SectionHeading
            index="03"
            eyebrow="Selected work"
            title="Things I've *designed* & built."
          />
          <div className="mb-3 hidden w-48 shrink-0 flex-col gap-3 lg:flex">
            <span className="font-mono text-xs tracking-[0.18em] text-muted uppercase">
              Scroll
            </span>
            <div className="h-px w-full bg-line">
              <motion.div
                style={{ scaleX: progress }}
                className="h-px origin-left bg-ember"
              />
            </div>
          </div>
        </div>

        <div
          ref={trackRef}
          className="main-padding"
        >
          <motion.div
            style={{ x }}
            className="flex flex-col gap-20 will-change-transform lg:flex-row lg:gap-10"
          >
            {items.map((item, index) => (
              <ProjectCard
                key={item.id}
                item={item}
                index={index}
                total={items.length}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
