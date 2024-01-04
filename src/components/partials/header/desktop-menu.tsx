import Link from "next/link";
import { FC } from "react";
import menus from "./menu.json";
import useScrollTop from "@/hooks/use-scroll-top";

const DesktopMenu: FC = () => {
   const { handleScrollTop } = useScrollTop();
   return (
      <nav className="hidden md:flex">
         <ul className="flex gap-4 lg:gap-8 text-base uppercase">
            <li className="awesome-link cursor-pointer" onClick={handleScrollTop}>
               Home
            </li>
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
