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

export const Right = () => {
  const [shuffledTools, setShuffledTools] = useState(tools)

  useEffect(() => {
    const interval = setInterval(() => {
      setShuffledTools(shuffleArray)
    }, 5000)

    return () => clearInterval(interval) // Cleanup on unmount
  }, [])
  return (
    <div className="flex flex-col items-end gap-4">
      <h1
        className="rounded-mdp-4 relative text-5xl font-semibold text-white"
        style={{
          textShadow: '-4px 4px 2px rgba(0,0,0,0.6)'
        }}
      >
        My Tools
      </h1>
      <motion.div
        layout
        className="flex flex-wrap justify-end gap-6"
      >
        {shuffledTools.map((tool) => {
          return (
            <motion.div
              layout
              key={tool.id}
              className="flex flex-col items-center gap-1"
            >
              <div className="h-20 w-20 rounded-3xl bg-white p-2 shadow-md">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="h-full w-full rounded-lg object-contain"
                />
              </div>
              <span className="text-sm text-white">{tool.name}</span>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
