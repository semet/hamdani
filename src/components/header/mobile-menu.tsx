import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { menus } from '@/data'
import { useLayout } from '@/providers'

import {
  containerVariants,
  listItemVariants,
  listVariants,
  overlayVariants,
  toggleVariants
} from './mobile-menu-variants'

export const MobileMenu = () => {
  const { activeMenu, onMenuClick } = useLayout()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggle = () => setIsOpen(!isOpen)
  const handleClick = (id: string) => {
    onMenuClick(id)
    toggle()
  }
  return (
    <motion.nav
      className="block sm:hidden"
      layout
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="close"
            animate="open"
            exit="close"
            transition={{
              type: 'tween',
              duration: 0.3
            }}
            className="fixed inset-0 bg-black/30"
            onClick={toggle}
          />
        )}
      </AnimatePresence>
      <button
        onClick={toggle}
        className="relative"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
        >
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            variants={toggleVariants}
            initial="close"
            animate={isOpen ? 'open' : 'close'}
            exit={isOpen ? 'open' : 'close'}
            transition={{
              type: 'tween',
              duration: 0.3
            }}
          />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            variants={containerVariants}
            initial="close"
            animate="open"
            exit="close"
            style={{
              transformOrigin: 'top right'
            }}
            transition={{
              type: 'tween',
              duration: 0.5
            }}
            className="fixed right-0 top-[75px] rounded-l-lg bg-white/90 p-4"
          >
            <motion.ul
              layout
              variants={listVariants}
              initial="close"
              animate="open"
              exit="close"
              className="flex flex-col items-end justify-center gap-2"
            >
              {menus.map((menu) => {
                return (
                  <motion.li
                    layout
                    variants={listItemVariants}
                    transition={{
                      type: 'linear'
                    }}
                    key={menu.id}
                    whileTap={{ scale: 0.95 }}
                    className={twMerge([
                      'relative w-fit px-2 text-slate-600',
                      activeMenu === menu.id && 'text-white'
                    ])}
                  >
                    {activeMenu === menu.id && (
                      <motion.span
                        layoutId="mobile-menu-item"
                        className="absolute -inset-1 inline-block rounded-full bg-gradient-to-r from-sky-400 to-indigo-400"
                      />
                    )}
                    {!menu.href ? (
                      <button
                        className="relative"
                        onClick={() => handleClick(menu.id)}
                      >
                        {menu.name}
                      </button>
                    ) : (
                      <Link
                        className="relative"
                        href={menu.href}
                      >
                        <span>{menu.name}</span>
                      </Link>
                    )}
                  </motion.li>
                )
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
