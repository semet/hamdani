import { motion, Variants } from 'motion/react'

import { useLayout } from '@/providers/layout-provider'

const spring = { type: 'spring', stiffness: 380, damping: 18 } as const
const ease = [0.16, 1, 0.3, 1] as const

const tile: Variants = {
  initial: { scale: 0, rotate: -35 },
  rest: { scale: 1, rotate: 0, transition: { ...spring, delay: 0.15 } },
  hover: { scale: 1.06, rotate: -8, transition: spring }
}

const italicA: Variants = {
  initial: { rotate: 0 },
  rest: { rotate: 0, transition: spring },
  hover: { rotate: 14, transition: spring }
}

const dot: Variants = {
  initial: { scale: 0, y: -10 },
  rest: { scale: 1, y: 0, transition: { ...spring, delay: 0.45 } },
  hover: { y: [0, -6, 0], transition: { duration: 0.45, ease: 'easeOut' } }
}

const letters: Variants = {
  initial: {},
  rest: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
  hover: { transition: { staggerChildren: 0.025 } }
}

const letter: Variants = {
  initial: { y: '0%' },
  rest: { y: '0%', transition: { duration: 0.5, ease } },
  hover: { y: '-100%', transition: { duration: 0.5, ease } }
}

const NAME = 'Hamdani'

/**
 * "Ha." monogram for Hamdani Ash-Sidiq: an upright serif H, an italic a and a
 * full stop on an ember tile, followed by a wordmark whose letters roll on hover.
 */
export const Logo = () => {
  const { onMenuClick } = useLayout()

  return (
    <motion.button
      onClick={() => onMenuClick('homeSection')}
      initial="initial"
      animate="rest"
      whileHover="hover"
      whileFocus="hover"
      className="flex items-center gap-3"
    >
      <span className="sr-only">Hamdani Ash-Sidiq, back to top</span>
      <motion.span
        variants={tile}
        aria-hidden
        className="relative grid size-10 shrink-0 place-items-center rounded-[13px] bg-ember text-canvas shadow-[0_6px_24px_-8px_var(--glow-ember)]"
      >
        <span className="flex items-baseline font-serif text-[27px] leading-none tracking-[-0.06em]">
          <span>H</span>
          <motion.span
            variants={italicA}
            className="inline-block origin-bottom-left italic"
          >
            a
          </motion.span>
          <motion.span
            variants={dot}
            className="ml-px inline-block size-1.25 rounded-full bg-canvas"
          />
        </span>
      </motion.span>

      <span
        aria-hidden
        className="hidden flex-col items-start leading-none sm:flex"
      >
        <motion.span
          variants={letters}
          className="flex font-serif text-[22px] tracking-tight"
        >
          {NAME.split('').map((ch, i) => (
            <span
              key={i}
              className="relative inline-block overflow-hidden"
            >
              <motion.span
                variants={letter}
                className="inline-block"
              >
                {ch}
              </motion.span>
              <motion.span
                variants={letter}
                className="absolute top-full left-0 inline-block text-ember italic"
              >
                {ch}
              </motion.span>
            </span>
          ))}
        </motion.span>
        <span className="mt-1 font-mono text-[9px] tracking-[0.34em] text-muted uppercase">
          Ash—Sidiq
        </span>
      </span>
    </motion.button>
  )
}
