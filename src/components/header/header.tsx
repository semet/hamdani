import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useState } from 'react'

import { ArrowIcon } from '@/components/arrow-icon'
import { Logo } from '@/components/logo'
import { Magnetic } from '@/components/magnetic'
import { ThemeToggle } from '@/components/theme-toggle'
import { useLayout } from '@/providers/layout-provider'

import { DesktopMenu } from './desktop-menu'
import { MobileMenu } from './mobile-menu'

export const Header = () => {
  const { onMenuClick } = useLayout()
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Only flips state when direction changes, so this is cheap per frame.
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    const goingDown = latest > previous && latest > 160
    if (goingDown !== hidden) setHidden(goingDown)
    const isScrolled = latest > 24
    if (isScrolled !== scrolled) setScrolled(isScrolled)
  })

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: hidden ? '-130%' : 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 main-padding pt-4"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="relative rounded-full px-3 py-2">
          {/* Theme-aware backdrop that fades in once the page is scrolled */}
          <motion.span
            aria-hidden
            initial={false}
            animate={{ opacity: scrolled ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 rounded-full border border-line bg-surface/70 backdrop-blur-md"
          />
          <span className="relative">
            <Logo />
          </span>
        </div>

        <DesktopMenu />

        <div className="flex items-center gap-2">
          <Magnetic className="hidden md:inline-block">
            <button
              onClick={() => onMenuClick('contactSection')}
              className="group flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-canvas transition-colors hover:bg-ember"
            >
              Let&apos;s talk
              <ArrowIcon className="size-4 transition-transform duration-300 group-hover:rotate-45" />
            </button>
          </Magnetic>
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </motion.header>
  )
}
