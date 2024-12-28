import { motion } from 'motion/react'
import { twMerge } from 'tailwind-merge'

import { menus } from '@/data'
import { useLayout } from '@/providers'

export const DesktopMenu = () => {
  const { activeMenu, onMenuClick } = useLayout()

  return (
    <nav className="hidden sm:flex">
      <ul className="hidden gap-2 sm:flex">
        {menus.map((menu) => {
          return (
            <motion.li
              layout
              key={menu.id}
              className={twMerge([
                'relative px-2 text-sm font-semibold text-slate-600 hover:text-tertiary md:text-base',
                activeMenu === menu.id && 'text-white'
              ])}
            >
              {activeMenu === menu.id && (
                <motion.span
                  layoutId="menu-item"
                  className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-400 to-indigo-400"
                />
              )}
              <button onClick={() => onMenuClick(menu.id)}>
                <span className="relative">{menu.name}</span>
              </button>
            </motion.li>
          )
        })}
      </ul>
    </nav>
  )
}
