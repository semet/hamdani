import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform
} from 'motion/react'
import { FC, useEffect, useRef } from 'react'

type Props = {
  to: number
  suffix?: string
  duration?: number
}

/** Counts from 0 to `to` when scrolled into view. Renders a MotionValue, so no re-renders. */
export const CountUp: FC<Props> = ({ to, suffix = '', duration = 1.6 }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const value = useMotionValue(0)
  const display = useTransform(value, (v) => `${Math.round(v)}${suffix}`)

  useEffect(() => {
    if (!inView) return
    const controls = animate(value, to, { duration, ease: [0.16, 1, 0.3, 1] })
    return () => controls.stop()
  }, [inView, to, duration, value])

  return (
    <span className="tabular-nums">
      <span className="sr-only">
        {to}
        {suffix}
      </span>
      <motion.span
        ref={ref}
        aria-hidden
      >
        {display}
      </motion.span>
    </span>
  )
}
