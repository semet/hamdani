import { motion } from 'motion/react'
import { FC } from 'react'

import { RevealText } from '@/components/reveal-text'

type Props = {
  index: string
  eyebrow: string
  /** Supports *accent* words, see RevealText. */
  title: string
}

export const SectionHeading: FC<Props> = ({ index, eyebrow, title }) => {
  return (
    <div className="flex flex-col gap-5">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-muted uppercase"
      >
        <span className="text-ember">({index})</span>
        <span className="h-px w-10 bg-line-strong" />
        <span>{eyebrow}</span>
      </motion.div>
      <RevealText
        as="h2"
        text={title}
        className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl"
      />
    </div>
  )
}
