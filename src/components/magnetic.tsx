import { motion, useSpring } from 'motion/react'
import { FC, PointerEvent, ReactNode, useRef } from 'react'

type Props = {
  children: ReactNode
  /** How far (0–1) the element follows the pointer. */
  strength?: number
  className?: string
}

const spring = { stiffness: 220, damping: 18, mass: 0.4 }

/** Pulls its child toward a mouse pointer. Touch input is ignored. */
export const Magnetic: FC<Props> = ({
  children,
  strength = 0.3,
  className
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const x = useSpring(0, spring)
  const y = useSpring(0, spring)

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ x, y }}
      className={className ?? 'inline-block'}
    >
      {children}
    </motion.div>
  )
}
