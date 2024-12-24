import Link from 'next/link'

import { menus } from './menu'

export const DesktopMenu = () => {
  return (
    <nav>
      <ul className="flex">
        {menus.map((menu) => {
          return (
            <li
              key={menu.id}
              className="hover:text-tertiary px-2 font-semibold text-slate-600"
            >
              <Link href={menu.link}>{menu.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
