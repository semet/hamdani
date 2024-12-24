import Link from 'next/link'

import { menus } from './menu'

export const DesktopMenu = () => {
  return (
    <nav>
      <ul className="hidden sm:flex">
        {menus.map((menu) => {
          return (
            <li
              key={menu.id}
              className="px-2 font-semibold text-slate-600 hover:text-tertiary"
            >
              <Link href={menu.link}>{menu.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
