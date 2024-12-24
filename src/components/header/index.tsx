import { motion, useScroll, useSpring, useTransform } from 'motion/react'

import { DesktopMenu } from './desktop-menu'
import { Logo } from './logo'

export const Header = () => {
  const { scrollYProgress } = useScroll()

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20
  })

  const backgroundColor = useTransform(
    smoothScroll,
    [0.01, 0.07],
    ['rgba(255, 255, 255, 0)', 'rgb(255 255 255 / 0.9)']
  )
  const boxShadow = useTransform(
    smoothScroll,
    [0, 0.05], // Adjust range as needed
    ['0px 0px 0px rgba(0, 0, 0, 0)', '0px 0px 4px rgba(0, 0, 0, 0.2)']
  )

  return (
    <motion.header
      className="main-padding fixed left-0 top-0 z-50 flex w-full items-end justify-between py-4 shadow transition-colors duration-300"
      style={{
        backgroundColor,
        boxShadow,
        transition: 'box-shadow 0.2s ease'
      }}
    >
      <Logo />
      <DesktopMenu />
    </motion.header>
  )
}
