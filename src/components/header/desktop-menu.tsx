import { motion } from 'motion/react'
import { twMerge } from 'tailwind-merge'

import { menus } from '@/data/menu'
import { useLayout } from '@/providers/layout-provider'

export const DesktopMenu = () => {
  const { activeMenu, onMenuClick } = useLayout()

  return (
    <nav
      aria-label="Primary"
      className="hidden md:block"
    >
      <ul className="flex items-center gap-1 rounded-full border border-line bg-surface/60 p-1.5 backdrop-blur-md">
        {menus.map((menu) => {
          const active = activeMenu === menu.id
          return (
            <li key={menu.id}>
              <button
                onClick={() => onMenuClick(menu.id)}
                aria-current={active ? 'true' : undefined}
                className={twMerge(
                  'relative rounded-full px-4 py-2 text-sm transition-colors duration-300',
                  active ? 'text-canvas' : 'text-fg/70 hover:text-fg'
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-fg"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{menu.name}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
