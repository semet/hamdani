import { motion } from 'motion/react'
import { FC, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  children: ReactNode
  /** Seconds for one full loop. */
  duration?: number
  reverse?: boolean
  className?: string
}

/**
 * Infinite horizontal marquee. Content is rendered twice and the track slides by
 * exactly half its width, so the loop is seamless. Only `x` is animated (GPU).
 */
export const Marquee: FC<Props> = ({
  children,
  duration = 40,
  reverse = false,
  className
}) => {
  return (
    <div
      className={twMerge(
        'flex overflow-hidden mask-[linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]',
        className
      )}
    >
      <motion.div
        className="flex shrink-0 will-change-transform"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div
          className="flex shrink-0 items-center"
          aria-hidden
        >
          {children}
        </div>
      </motion.div>
    </div>
  )
}
