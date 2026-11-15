import { motion, Variants } from 'motion/react'
import Image from 'next/image'
import { FC } from 'react'

import { ArrowIcon } from '@/components/arrow-icon'

import { Item } from './items'

type Props = {
  item: Item
  index: number
  total: number
}

const ease = [0.16, 1, 0.3, 1] as const

const image: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.9, ease } }
}

const cta: Variants = {
  rest: { scale: 0.6, opacity: 0 },
  hover: { scale: 1, opacity: 1, transition: { duration: 0.5, ease } }
}

const pad = (n: number) => String(n).padStart(2, '0')

export const ProjectCard: FC<Props> = ({ item, index, total }) => {
  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group relative flex w-full shrink-0 flex-col gap-5 lg:w-[min(62vw,880px,calc((100svh-31rem)*1.6))]"
    >
      <div className="relative aspect-16/10 overflow-hidden rounded-[1.75rem] border border-line bg-surface">
        <motion.div
          variants={image}
          className="absolute inset-0"
        >
          <Image
            src={item.image}
            alt={`Screenshot of ${item.title}`}
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 62vw, 100vw"
            quality={80}
            className="object-cover object-top"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-canvas/60 via-transparent to-transparent" />
        <motion.span
          variants={cta}
          aria-hidden
          className="absolute top-1/2 left-1/2 -mt-12 -ml-12 hidden size-24 place-items-center rounded-full bg-ember text-sm font-medium text-canvas lg:grid"
        >
          Visit
        </motion.span>
        <span className="absolute top-5 left-5 rounded-full border border-line-strong bg-canvas/60 px-3 py-1 font-mono text-[11px] tracking-[0.14em] text-fg/80 backdrop-blur-md">
          {pad(index + 1)} / {pad(total)}
        </span>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <div className="flex max-w-xl flex-col gap-3">
          <span className="font-mono text-xs tracking-[0.16em] text-ember uppercase">
            {item.kind}
          </span>
          <h3 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="after:absolute after:inset-0 after:content-['']"
            >
              {item.title}
            </a>
          </h3>
          <p className="text-sm leading-relaxed text-fg/60 lg:line-clamp-3">
            {item.description}
          </p>
        </div>
        <span className="hidden size-12 shrink-0 place-items-center rounded-full border border-line-strong transition-colors duration-300 group-hover:border-ember group-hover:bg-ember group-hover:text-canvas sm:grid">
          <ArrowIcon />
        </span>
      </div>

      {/* Hidden in the sticky desktop reel on short screens so each card fits the viewport */}
      <ul className="flex flex-wrap gap-1.5 lg:[@media(max-height:820px)]:hidden">
        {item.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-line px-3 py-1 text-xs text-fg/65"
          >
            {tag}
          </li>
        ))}
      </ul>
    </motion.article>
  )
}
