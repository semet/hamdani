import { Variants } from 'motion/react'

export const containerVariants: Variants = {
  open: { opacity: 1, width: '40vw', height: '40vh' },
  close: { opacity: 0, width: 0, height: 0 }
}
export const listVariants: Variants = {
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  },
  close: { opacity: 0 }
}
export const listItemVariants: Variants = {
  open: { opacity: 1, x: 0 },
  close: { opacity: 0, x: 50 }
}

export const toggleVariants: Variants = {
  open: {
    d: 'M6 18L18 6M6 6l12 12',
    stroke: 'black'
  },
  close: {
    d: 'M4 6h16M4 12h16m-7 6h7',
    stroke: 'black'
  }
}
export const overlayVariants: Variants = {
  open: { opacity: 1 },
  close: { opacity: 0 }
}
