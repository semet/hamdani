import { useLenis } from 'lenis/react'
import { AnimatePresence, motion, Variants } from 'motion/react'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { ArrowIcon } from '@/components/arrow-icon'
import { HomeMenu, menus } from '@/data/menu'
import { site } from '@/data/site'
import { socials } from '@/data/socials'
import { useLayout } from '@/providers/layout-provider'

const ease = [0.16, 1, 0.3, 1] as const

const panel: Variants = {
  closed: { clipPath: 'inset(0 0 100% 0)' },
  open: {
    clipPath: 'inset(0 0 0% 0)',
    transition: {
      duration: 0.7,
      ease,
      staggerChildren: 0.06,
      delayChildren: 0.2
    }
  },
  exit: { clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.5, ease } }
}

const item: Variants = {
  closed: { y: '100%', opacity: 0 },
  open: { y: '0%', opacity: 1, transition: { duration: 0.7, ease } }
}

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { activeMenu, onMenuClick } = useLayout()
  const lenis = useLenis()

  // Freeze page scroll while the overlay is open.
  useEffect(() => {
    if (isOpen) {
      lenis?.stop()
    } else {
      lenis?.start()
    }
  }, [isOpen, lenis])

  const go = (id: HomeMenu) => {
    setIsOpen(false)
    // Wait for the overlay to start closing so Lenis is running again.
    setTimeout(() => onMenuClick(id), 150)
  }

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className="relative z-60 flex size-11 flex-col items-center justify-center gap-1.5 rounded-full border border-line bg-surface/70 backdrop-blur-md"
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.4, ease }}
          className="block h-px w-5 bg-fg"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.4, ease }}
          className="block h-px w-5 bg-fg"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            variants={panel}
            initial="closed"
            animate="open"
            exit="exit"
            className="fixed inset-0 z-50 flex flex-col justify-between bg-canvas main-padding pt-28 pb-10"
          >
            <ul className="flex flex-col gap-1">
              {menus.map((menu, i) => (
                <li
                  key={menu.id}
                  className="overflow-hidden"
                >
                  <motion.button
                    variants={item}
                    onClick={() => go(menu.id)}
                    className={twMerge(
                      'flex w-full items-baseline gap-4 py-1 text-left font-serif text-6xl tracking-tight',
                      activeMenu === menu.id ? 'text-ember italic' : 'text-fg'
                    )}
                  >
                    <span className="font-mono text-xs text-muted not-italic">
                      0{i + 1}
                    </span>
                    {menu.name}
                  </motion.button>
                </li>
              ))}
            </ul>

            <motion.div
              variants={item}
              className="flex flex-col gap-4 border-t border-line pt-6 text-sm"
            >
              <a
                href={`mailto:${site.email}`}
                className="text-fg"
              >
                {site.email}
              </a>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-muted">
                {socials.map((s) => (
                  <a
                    key={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-fg"
                  >
                    {s.label}
                    <ArrowIcon className="size-3" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}
