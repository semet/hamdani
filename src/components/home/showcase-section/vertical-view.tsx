import { MotionValue } from 'motion/react'
import { FC } from 'react'

import { items } from './items'
import { VerticalCard } from './vertical-card'

type Props = {
  scrollYProgress: MotionValue<number>
}

export const VerticalView: FC<Props> = ({ scrollYProgress }) => {
  return (
    <div className="main-padding flex flex-col gap-4 lg:hidden">
      {items.map((item, index) => {
        const targetScale = 1 - (items.length - index) * 0.05
        return (
          <VerticalCard
            key={index}
            scrollYProgress={scrollYProgress}
            itemLength={items.length}
            cardIndex={index}
            range={[index * (1 / items.length), 1]}
            targetScale={targetScale}
            {...item}
          />
        )
      })}
    </div>
  )
}
