import { motion } from 'motion/react'
import { FC } from 'react'

import { ArrowIcon } from '@/components/arrow-icon'

type Props = {
  onClick: () => void
}

/** Circular "scroll to explore" text badge that slowly rotates. */
export const ScrollBadge: FC<Props> = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Scroll to explore"
    className="group relative ml-2 hidden size-24 place-items-center sm:grid"
  >
    <motion.svg
      viewBox="0 0 100 100"
      className="absolute inset-0 size-full text-muted transition-colors group-hover:text-fg"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
      aria-hidden
    >
      <defs>
        <path
          id="badge-circle"
          d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
        />
      </defs>
      <text
        fill="currentColor"
        className="font-mono text-[9.5px] tracking-[0.32em] uppercase"
      >
        <textPath href="#badge-circle">
          Scroll to explore • Scroll to explore •
        </textPath>
      </text>
    </motion.svg>
    <span className="grid size-10 place-items-center rounded-full border border-line-strong transition-colors group-hover:border-ember group-hover:bg-ember group-hover:text-canvas">
      <ArrowIcon
        direction="down"
        className="size-4"
      />
    </span>
  </button>
)
