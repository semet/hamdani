import { useLenis } from 'lenis/react'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring
} from 'motion/react'
import { useState } from 'react'

import { ArrowIcon } from '@/components/arrow-icon'
import { useLayout } from '@/providers/layout-provider'

/**
 * Back-to-top button with a ring that fills with page scroll progress.
 * Hidden in the footer, which has its own "Back to top" link.
 */
export const ScrollToTop = () => {
  const lenis = useLenis()
  const { activeMenu } = useLayout()
  const [pastHero, setPastHero] = useState(false)
  const { scrollY, scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const past = latest > 700
    if (past !== pastHero) setPastHero(past)
  })

  // Derived during render, no extra state.
  const isVisible = pastHero && activeMenu !== 'contactSection'

  const toTop = () =>
    lenis ? lenis.scrollTo(0, { duration: 1.6 }) : window.scrollTo({ top: 0 })

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={toTop}
          aria-label="Back to top"
          className="fixed right-5 bottom-5 z-40 grid size-12 place-items-center rounded-full border border-line bg-surface/80 text-fg backdrop-blur-md"
        >
          <svg
            viewBox="0 0 48 48"
            className="absolute inset-0 size-full -rotate-90"
            aria-hidden
          >
            <motion.circle
              cx="24"
              cy="24"
              r="22"
              fill="none"
              stroke="var(--color-ember)"
              strokeWidth="1.5"
              style={{ pathLength: progress }}
            />
          </svg>
          <ArrowIcon
            direction="up"
            className="size-4"
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
