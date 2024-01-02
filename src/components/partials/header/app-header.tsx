import React, { FC } from "react";
import Logo from "./logo";
import DesktopMenu from "./desktop-menu";
import SocialIcons from "./social-icons";
import MobileMenu from "./mobile-menu";
import useScroll from "@/hooks/use-scroll";

const AppHeader: FC = () => {
   const { isScrolled } = useScroll(60);
   return (
      <header
         className={`flex justify-between items-center main-padding sticky top-0 transition-all ease-in-out duration-700 z-50 ${
            isScrolled
               ? "bg-white dark:bg-slate-900 py-6 shadow-md"
               : "bg-transparent py-10"
         }`}
      >
         {/* Mobile menu :: available only in mobile */}
         <MobileMenu />
         {/* logo */}
         <Logo />
         <div className="flex gap-4 lg:gap-8 items-center">
            {/* desktop menu available only in desktop*/}
            <DesktopMenu />
            {/* Social Icons */}
            <div className="hidden md:block">
               <SocialIcons />
            </div>
         </div>
      </header>
   );
};

export default AppHeader;
