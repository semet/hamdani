import { animate, useMotionTemplate, useMotionValue } from 'motion/react'
import { useEffect } from 'react'

export const useAurora = () => {
  const color = useMotionValue(AURORA[0])
  const toBottom = useMotionTemplate`linear-gradient(180deg, rgba(0,212,255,1) 24%, ${color} 100%)`
  const toTop = useMotionTemplate`linear-gradient(180deg, ${color} 24%, rgba(0,212,255,1) 100%)`

  useEffect(() => {
    animate(color, AURORA, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror'
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { toBottom, toTop, color }
}

const AURORA = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C']
