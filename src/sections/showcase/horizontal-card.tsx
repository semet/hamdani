/* eslint-disable @next/next/no-img-element */
import { motion, MotionValue, useTransform, useVelocity } from 'motion/react'
import { FC } from 'react'

import { Item } from './items'

type Props = Item & {
  scrollYProgress: MotionValue<number>
}

export const HorizontalCard: FC<Props> = (props) => {
  const { description, image, link, tags, title, scrollYProgress } = props
  const scrollVelocity = useVelocity(scrollYProgress)
  const skew = useTransform(scrollVelocity, [-1, 1], [-15, 15])
  return (
    <motion.div
      className="group relative flex min-h-75 min-w-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm md:h-125 md:min-w-125 2xl:h-150 2xl:min-w-150"
      style={{
        skewX: skew
      }}
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
          className="text-2xl font-semibold text-slate-700"
        >
          {title}
        </a>
        <div className="flex flex-col items-center justify-center gap-2">
          <p
            className="prose rounded-sm text-slate-700 prose-a:text-sky-500 prose-a:no-underline"
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
