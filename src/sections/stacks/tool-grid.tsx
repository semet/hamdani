import { motion, Variants } from 'motion/react'
import { FC } from 'react'

import { BrandIcon } from '@/components/brand-icon'

type Tool = { id: number; label: string; icon: string }

type Props = {
  title: string
  tools: Tool[]
}

const grid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } }
}

const tile: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
}

export const ToolGrid: FC<Props> = ({ title, tools }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-baseline justify-between border-b border-line pb-3">
        <h3 className="font-mono text-xs tracking-[0.18em] text-muted uppercase">
          {title}
        </h3>
        <span className="font-mono text-xs text-muted tabular-nums">
          {String(tools.length).padStart(2, '0')}
        </span>
      </div>
      <motion.ul
        variants={grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10% 0px' }}
        className="grid grid-cols-3 gap-2 sm:grid-cols-4 xl:grid-cols-5"
      >
        {tools.map((tool) => (
          <motion.li
            key={tool.id}
            variants={tile}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="group relative flex aspect-5/4 flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface p-4 transition-colors duration-300 hover:border-ember/40 hover:bg-surface-2"
          >
            <BrandIcon
              src={tool.icon}
              className="size-7 text-fg/60 transition-colors duration-300 group-hover:text-ember sm:size-8"
            />
            <span className="text-xs text-fg/80 sm:text-sm">{tool.label}</span>
            <span
              aria-hidden
              className="pointer-events-none absolute -right-8 -bottom-8 size-24 rounded-full bg-[radial-gradient(circle,var(--glow-ember),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}
