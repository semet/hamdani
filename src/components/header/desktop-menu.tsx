import Link from 'next/link'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { useLayout } from '@/providers'

import { menus, otherMenus } from './menu'

export const DesktopMenu = () => {
  const [activeMenu, setActiveMenu] = useState('homeSection')
  const { aboutSection, homeSection, showcaseSection, stacksSection } =
    useLayout()

  const handleMenuClick = (id: string) => {
    setActiveMenu(id)
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
    }
  }
  return (
    <nav>
      <ul className="hidden sm:flex">
        {menus.map((menu) => {
          return (
            <li
              key={menu.id}
              className={twMerge([
                'px-2 font-semibold text-slate-600 hover:text-tertiary',
                activeMenu === menu.id && 'text-tertiary'
              ])}
            >
              <button onClick={() => handleMenuClick(menu.id)}>
                {menu.name}
              </button>
            </li>
          )
        })}
        {otherMenus.map((menu) => {
          return (
            <li
              key={menu.id}
              className={twMerge([
                'px-2 font-semibold text-slate-600 hover:text-tertiary'
              ])}
            >
              <Link href={menu.href}>{menu.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
