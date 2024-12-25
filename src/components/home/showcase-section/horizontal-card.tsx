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
      className="group relative min-h-[300px] min-w-full overflow-hidden rounded-lg bg-white shadow md:h-[500px] md:min-w-[500px] 2xl:h-[600px] 2xl:min-w-[600px]"
      style={{
        skewX: skew
      }}
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
