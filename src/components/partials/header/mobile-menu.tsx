import React, { FC, Fragment } from "react";
import { FaAlignJustify } from "react-icons/fa";
import menus from "./menu.json";
import Link from "next/link";

const MobileMenu: FC = () => {
   return (
      <div className="block md:hidden">
         <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
               {/* Page content here */}
               <label
                  htmlFor="my-drawer"
                  className="drawer-button text-2xl text-slate-400 hover:text-slate-600 cursor-pointer"
               >
                  <FaAlignJustify />
               </label>
            </div>
            <div className="drawer-side">
               <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
               ></label>
               <div className="menu p-4 w-80 min-h-full bg-base-200 space-y-6">
                  <h3 className="text-3xl font-semibold">Navigation</h3>
                  <ul className="-ml-4">
                     {menus.map((menu) => (
                        <li key={menu.link}>
                           <Link
                              href={menu.link}
                              scroll={false}
                              className="hover:rounded-l-none rounded-l-none text-lg"
                           >
                              {menu.label}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MobileMenu;
