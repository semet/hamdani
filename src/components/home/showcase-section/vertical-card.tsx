import { MotionValue, motion, useTransform } from 'motion/react'
import { FC } from 'react'

import { Item } from './items'

type Props = Item & {
  scrollYProgress: MotionValue<number>
  itemLength: number
  cardIndex: number
  range: [number, number]
  targetScale: number
}

export const VerticalCard: FC<Props> = (props) => {
  const {
    description,
    image,
    link,
    tags,
    title,
    scrollYProgress,
    targetScale,
    range,
    cardIndex
  } = props

  const opacity = useTransform(scrollYProgress, range, [1, targetScale + 0.1])
  const scale = useTransform(scrollYProgress, range, [1, targetScale])
  return (
    <motion.div
      style={{
        opacity,
        scale,
        top: `calc(75px + ${cardIndex * 25}px)`
      }}
      className="group sticky h-[80vh] min-w-full overflow-hidden rounded-lg shadow"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{
          backgroundImage: `url(${image})`
        }}
      />
      <div className="relative h-full">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
          <h4 className="text-2xl font-semibold text-white">{title}</h4>
          <p className="text-white">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => {
              return (
                <span
                  key={index}
                  className="rounded-md bg-blue-500 px-2 py-1 text-sm font-semibold text-white"
                >
                  {tag}
                </span>
              )
            })}
          </div>
          <a
            className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>
      </div>
    </motion.div>
  )
}
