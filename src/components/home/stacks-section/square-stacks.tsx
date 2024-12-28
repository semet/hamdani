/* eslint-disable @next/next/no-img-element */
import { motion } from 'motion/react'

import { PageTitle } from '@/components/page-title'

import { stacks } from './stacks'

export const SquareStacks = () => {
  return (
    <div className="flex flex-col items-center gap-4 lg:hidden">
      <PageTitle title="My Stacks" />
      <motion.div className="flex flex-wrap justify-center gap-4 lg:justify-end lg:gap-6">
        {stacks.map((stack) => {
          return (
            <motion.div
              layout
              key={stack.id}
              className="flex flex-col items-center gap-1"
            >
              <div className="h-10 w-10 rounded-3xl bg-white p-2 shadow-md sm:h-16 sm:w-16 lg:h-20 lg:w-20">
                <img
                  src={stack.image}
                  alt={stack.title}
                  className="h-full w-full rounded-lg object-contain"
                />
              </div>
              <span className="text-xs text-white sm:text-sm">
                {stack.title}
              </span>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
