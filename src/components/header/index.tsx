import { motion, useScroll, useSpring, useTransform } from 'motion/react'

import { Logo } from '@/components/logo'

import { DesktopMenu } from './desktop-menu'
import { MobileMenu } from './mobile-menu'

export const Header = () => {
  const { scrollYProgress } = useScroll()

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20
  })

  const backgroundColor = useTransform(
    smoothScroll,
    [0, 0.02],
    ['rgba(255, 255, 255, 0)', 'rgb(255 255 255 / 0.9)']
  )
  const boxShadow = useTransform(
    smoothScroll,
    [0, 0.02],
    ['0px 0px 0px rgba(0, 0, 0, 0)', '0px 0px 4px rgba(0, 0, 0, 0.2)']
  )

  return (
    <motion.header
      className="main-padding fixed left-0 top-0 z-50 flex w-full items-center justify-between py-4 shadow transition-colors duration-300 sm:items-end"
      style={{
        backgroundColor,
        boxShadow,
        transition: 'box-shadow 0.2s ease'
      }}
    >
      <Logo />
      <DesktopMenu />
      <MobileMenu />
    </motion.header>
  )
}
