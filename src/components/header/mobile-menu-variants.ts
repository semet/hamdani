import { Variants } from 'motion/react'

export const containerVariants: Variants = {
  open: { height: '320px', width: '130px', borderBottomLeftRadius: '6px' },
  close: {
    height: '0px',
    width: '0px',
    borderBottomLeftRadius: '99px',
    transition: { delay: 0.1 }
  }
}
export const listVariants: Variants = {
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delay: 0.3
    }
  },
  close: { opacity: 0, transition: { staggerChildren: 0.05 } }
}
export const listItemVariants: Variants = {
  open: { opacity: 1, x: 0 },
  close: { opacity: 0, x: 50 }
}

export const toggleVariants: Variants = {
  open: {
    d: 'M6 18L18 6M6 6l12 12',
    stroke: '#64748b',
    transition: { duration: 0.3, type: 'tween' }
  },
  close: {
    d: 'M4 6h16M4 12h16m-7 6h7',
    stroke: '#334155',
    transition: { duration: 0.3, type: 'tween', delay: 0.2 }
  }
}
export const overlayVariants: Variants = {
  open: { opacity: 1 },
  close: { opacity: 0 }
}
