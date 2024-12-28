import { motion, MotionValue } from 'motion/react'
import { FC } from 'react'

import { HorizontalCard } from './horizontal-card'
import { items } from './items'

type Props = {
  x: MotionValue<number>
  scrollYProgress: MotionValue<number>
}

export const HorizontalView: FC<Props> = ({ scrollYProgress, x }) => {
  return (
    <motion.div
      initial={{ x: 100 }}
      whileInView={{
        x: 0,
        transition: { duration: 0.5, ease: 'easeOut' }
      }}
      style={{ x }}
      className="hidden w-full gap-4 pl-4 lg:flex"
    >
      {items.map((item, index) => {
        return (
          <HorizontalCard
            key={index}
            scrollYProgress={scrollYProgress}
            {...item}
          />
        )
      })}
    </motion.div>
  )
}
