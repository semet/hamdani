import { motion, MotionValue, useScroll, useTransform } from 'motion/react'
import { FC, useRef } from 'react'

type Props = {
  text: string
  className?: string
}

const Word: FC<{
  word: string
  progress: MotionValue<number>
  range: [number, number]
}> = ({ word, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span className="relative inline-block">
      {/* Base layer in `muted`, which still meets WCAG AA contrast on both themes */}
      <span className="text-muted">{word}</span>
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 text-fg"
      >
        {word}
      </motion.span>
      &nbsp;
    </span>
  )
}

/** Paragraph whose words light up one by one as it scrolls through the viewport. */
export const ScrollHighlight: FC<Props> = ({ text, className }) => {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 85%', 'end 45%']
  })
  const words = text.split(' ')

  return (
    <p
      ref={ref}
      className={className}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {words.map((word, i) => (
          <Word
            key={i}
            word={word}
            progress={scrollYProgress}
            range={[i / words.length, (i + 1) / words.length]}
          />
        ))}
      </span>
    </p>
  )
}
