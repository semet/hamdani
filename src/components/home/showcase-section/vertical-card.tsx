/* eslint-disable @next/next/no-img-element */
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
        top: `calc(35px + ${cardIndex * 25}px)`
      }}
      className="group sticky flex h-[80vh] min-w-full flex-col overflow-hidden rounded-lg bg-white shadow"
    >
      <img
        src={image}
        alt={title}
        className="h-1/2 w-full object-cover object-center"
      />
      <div className="flex flex-col justify-between gap-2 p-4">
        <a
          href={link}
          target="_blank"
          className="text-xl font-semibold text-slate-700 sm:text-2xl"
        >
          {title}
        </a>
        <div className="flex flex-col items-center justify-center gap-2">
          <p
            className="prose-sm rounded text-slate-700 prose-a:text-sky-500 prose-a:no-underline"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => {
              return (
                <span
                  key={index}
                  className="rounded-md bg-blue-500 px-2 py-1 text-xs font-semibold text-white"
                >
                  {tag}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
