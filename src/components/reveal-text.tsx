import { motion, Variants } from 'motion/react'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  /** Text to reveal. Wrap words in *asterisks* to render them as an italic accent. */
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'p'
  className?: string
  accentClassName?: string
  delay?: number
  /** Animate on mount instead of when scrolled into view. */
  immediate?: boolean
}

const container: Variants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.045, delayChildren: delay }
  })
}

const word: Variants = {
  hidden: { y: '110%' },
  visible: {
    y: '0%',
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
  }
}

type Token = { w: string; accent: boolean; glued?: boolean }

/**
 * Splits text into words. Punctuation directly after an *accent* (e.g. "*craft*,")
 * is glued to that word so no space appears before it.
 */
const tokenize = (text: string) =>
  text.split(/(\*[^*]+\*)/g).reduce<Token[]>((tokens, part) => {
    const accent = part.startsWith('*') && part.endsWith('*')
    const clean = accent ? part.slice(1, -1) : part
    const words = clean.split(/\s+/).filter(Boolean)
    words.forEach((w, i) => {
      const glue = i === 0 && !accent && tokens.length > 0 && !/^\s/.test(clean)
      tokens.push({ w, accent, glued: glue })
    })
    return tokens
  }, [])

/** Splits text into masked words that rise into place, staggered. */
export const RevealText: FC<Props> = ({
  text,
  as: Tag = 'p',
  className,
  accentClassName = 'font-serif italic text-ember',
  delay = 0,
  immediate = false
}) => {
  const tokens = tokenize(text)

  return (
    <Tag className={className}>
      <span className="sr-only">{text.replaceAll('*', '')}</span>
      <motion.span
        aria-hidden
        className="block"
        variants={container}
        custom={delay}
        initial="hidden"
        animate={immediate ? 'visible' : undefined}
        whileInView={immediate ? undefined : 'visible'}
        viewport={{ once: true, margin: '-10% 0px' }}
      >
        {tokens.map(({ w, accent }, i) => (
          <span
            key={i}
            className="inline-flex overflow-hidden pb-[0.08em] align-bottom"
          >
            <motion.span
              variants={word}
              className={twMerge('inline-block', accent && accentClassName)}
            >
              {w}
              {i < tokens.length - 1 && !tokens[i + 1].glued && ' '}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}
