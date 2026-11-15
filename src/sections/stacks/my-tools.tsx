/* eslint-disable @next/next/no-img-element */
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

import { PageTitle } from '@/components/page-title'

import { tools } from './tools'

const shuffleArray = (array: typeof tools) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export const MyTools = () => {
  const [shuffledTools, setShuffledTools] = useState(tools)

  useEffect(() => {
    const interval = setInterval(() => {
      setShuffledTools(shuffleArray)
    }, 5000)

    return () => clearInterval(interval) // Cleanup on unmount
  }, [])
  return (
    <div className="flex flex-col items-center gap-4 lg:items-end">
      <PageTitle title="My Tools" />
      <motion.div className="flex w-full flex-wrap justify-center gap-4 lg:justify-end lg:gap-6 2xl:w-[80%]">
        {shuffledTools.map((tool) => {
          return (
            <motion.div
              layout
              key={tool.id}
              className="flex flex-col items-center gap-1"
            >
              <div className="h-10 w-10 rounded-3xl bg-white p-2 shadow-md sm:h-16 sm:w-16 lg:h-20 lg:w-20">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="h-full w-full rounded-lg object-contain"
                />
              </div>
              <span className="text-xs text-white sm:text-sm">{tool.name}</span>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
