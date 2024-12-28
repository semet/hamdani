import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  Variants
} from 'motion/react'
import { useState } from 'react'
export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 644) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  })

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0,
      y: 100
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0
    }
  }
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          exit="hidden"
          transition={{
            duration: 0.3,
            type: 'linear'
          }}
          className="fixed bottom-4 right-4 z-50"
        >
          <button
            className="rounded-full bg-white p-2 shadow-lg"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="#64748b"
              className="size-5"
            >
              <motion.path
                initial={{ opacity: 0, pathLength: 0, pathOffset: 1 }}
                animate={{ opacity: 1, pathLength: 1, pathOffset: 0 }}
                transition={{ duration: 1 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
              />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
