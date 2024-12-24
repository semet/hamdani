import { motion, MotionValue } from 'motion/react'
import { FC } from 'react'

import { stacks } from './stacks'

type Props = {
  radius: number
  scale: MotionValue<number>
}

export const RadialStacks: FC<Props> = ({ radius, scale }) => {
  return (
    <div className="absolute bottom-[10%] left-[20%] hidden -translate-x-[20%] -translate-y-1/3 transform items-start justify-center lg:flex xl:bottom-0">
      <motion.div
        className="size-[500px]"
        animate={{
          rotate: 360,
          transition: {
            duration: 50,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop'
          }
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
                scale
              }}
              animate={{
                rotate: -360,
                transition: {
                  duration: 50,
                  repeat: Infinity,
                  ease: 'linear',
                  repeatType: 'loop'
                }
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
