import Link from "next/link";
import React, { FC } from "react";
import menus from "./menu.json";

const DesktopMenu: FC = () => {
   return (
      <nav className="hidden md:flex">
         <ul className="flex gap-4 lg:gap-8 text-base uppercase">
            {menus.map((menu) => (
               <li key={menu.label} className="awesome-link">
                  <Link href={menu.link} scroll={false}>
                     {menu.label}
                  </Link>
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default DesktopMenu;
