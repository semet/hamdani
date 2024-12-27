import { AnimatePresence, motion } from 'motion/react'
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
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { activeMenu, onMenuClick } = useLayout()
  const toggle = () => setIsOpen(!isOpen)
  const handleClick = (id: string) => {
    onMenuClick(id)
    toggle()
  }

  return (
    <motion.nav
      className="z-50 block sm:hidden"
      layout
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            onClick={toggle}
            initial="close"
            animate="open"
            exit="close"
            className="fixed inset-0 bg-black bg-opacity-50"
          />
        )}
      </AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="close"
        animate={isOpen ? 'open' : 'close'}
        exit={isOpen ? 'open' : 'close'}
        transition={{ duration: 0.3, type: 'linear' }}
        style={{
          transformOrigin: 'top right'
        }}
        className="absolute right-0 top-0 flex flex-col items-end bg-white shadow-lg"
      >
        <div className="flex min-h-[73px] items-center justify-center pr-4">
          <button onClick={toggle}>
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
              />
            </svg>
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              variants={listVariants}
              initial="close"
              animate={isOpen ? 'open' : 'close'}
              exit="close"
              className="b-4 flex flex-col items-end gap-4 px-4"
            >
              {menus.map((menu) => {
                return (
                  <motion.li
                    key={menu.id}
                    className="flex flex-col items-center justify-center"
                    variants={listItemVariants}
                    transition={{ duration: 0.3, type: 'linear' }}
                  >
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className={twMerge([
                        'relative w-fit px-2 text-slate-600',
                        activeMenu === menu.id && 'text-white'
                      ])}
                      onClick={() => handleClick(menu.id)}
                    >
                      {activeMenu === menu.id && (
                        <motion.span
                          layoutId="mobile-menu-item"
                          className="absolute -inset-1 inline-block rounded-full bg-gradient-to-r from-sky-400 to-indigo-400"
                        />
                      )}
                      <span className="relative">{menu.name}</span>
                    </motion.button>
                  </motion.li>
                )
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  )
}
