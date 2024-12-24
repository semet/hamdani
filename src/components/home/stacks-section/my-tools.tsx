/* eslint-disable @next/next/no-img-element */
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

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
      <h3
        className="rounded-mdp-4 relative text-2xl font-semibold text-white sm:text-5xl"
        style={{
          textShadow: '-4px 4px 2px rgba(0,0,0,0.6)'
        }}
      >
        My Tools
      </h3>
      <motion.div className="flex flex-wrap justify-center gap-4 lg:justify-end lg:gap-6">
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
