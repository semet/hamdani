import {
  motion,
  MotionValue,
  SpringOptions,
  useSpring,
  useTransform
} from 'motion/react'
import { FC } from 'react'

import { stacks } from './stacks'

type Props = {
  radius: number
  scale: MotionValue<number>
  scrollYProgress: MotionValue<number>
}

const options: SpringOptions = {
  stiffness: 100,
  damping: 50,
  bounce: 0
}

export const RadialStacks: FC<Props> = ({ radius, scale, scrollYProgress }) => {
  const rotateContainerRaw = useTransform(scrollYProgress, [0, 1], [0, 360])
  const rotateContainer = useSpring(rotateContainerRaw, options)
  const rotateItemRaw = useTransform(scrollYProgress, [0, 1], [360, 0])
  const rotateItem = useSpring(rotateItemRaw, options)
  return (
    <div className="absolute bottom-[10%] left-[20%] hidden -translate-x-[20%] -translate-y-1/3 transform items-start justify-center lg:flex xl:bottom-0 2xl:bottom-[18%]">
      <motion.div
        className="size-[500px]"
        style={{
          rotate: rotateContainer
        }}
        transition={{
          type: 'spring'
        }}
      >
        {stacks.map((ele, index) => {
          const angle = (index / stacks.length) * 2 * Math.PI
          const x = radius * Math.cos(angle)
          const y = radius * Math.sin(angle)

          return (
            <motion.div
              key={ele.id}
              className="absolute h-10 w-10 cursor-pointer overflow-hidden rounded-3xl bg-white p-2 shadow-lg lg:h-20 lg:w-20"
              style={{
                x,
                y,
                left: '40%',
                top: '40%',
                scale,
                rotate: rotateItem
              }}
            >
              <motion.img
                src={ele.image}
                alt="img"
                layoutId={`spinner-${ele.id}`}
                className="h-full w-full rounded-lg object-fill"
                whileHover={{
                  scale: 1.05
                }}
                viewport={{ once: true }}
              />
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
