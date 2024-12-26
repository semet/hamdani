import { motion } from 'motion/react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { HomeMenu, menus } from '@/data'
import { useLayout } from '@/providers'

export const DesktopMenu = () => {
  const {
    aboutSection,
    homeSection,
    showcaseSection,
    stacksSection,
    activeMenu
  } = useLayout()

  const handleMenuClick = (id: HomeMenu) => {
    const section = id
    const offset = 70
    switch (section) {
      case 'homeSection':
        window.scrollTo({
          top: homeSection.current?.offsetTop,
          behavior: 'smooth'
        })
        break
      case 'stacksSection':
        window.scrollTo({
          top: (stacksSection.current?.offsetTop ?? 0) - offset - 40,
          behavior: 'smooth'
        })
        break
      case 'aboutSection':
        window.scrollTo({
          top: (aboutSection.current?.offsetTop ?? 0) - offset,
          behavior: 'smooth'
        })
        break
      case 'showcaseSection':
        window.scrollTo({
          top: showcaseSection.current?.offsetTop,
          behavior: 'smooth'
        })
        break
      case 'contactSection':
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        })
        break
    }
  }

  return (
    <nav>
      <ul className="hidden gap-2 sm:flex">
        {menus.map((menu) => {
          return (
            <motion.li
              layout
              key={menu.id}
              className={twMerge([
                'relative px-2 font-semibold text-slate-600 hover:text-tertiary',
                activeMenu === menu.id && 'text-white'
              ])}
            >
              {activeMenu === menu.id && (
                <motion.span
                  layoutId="menu-item"
                  className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-400 to-indigo-400"
                />
              )}
              {!menu.href ? (
                <button onClick={() => handleMenuClick(menu.id)}>
                  <span className="relative">{menu.name}</span>
                </button>
              ) : (
                <Link href={menu.href}>
                  <span>{menu.name}</span>
                </Link>
              )}
            </motion.li>
          )
        })}
      </ul>
    </nav>
  )
}
