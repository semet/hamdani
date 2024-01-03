import useIsScrolled from "@/hooks/use-isscrolled";
import { FC } from "react";
import DesktopMenu from "./desktop-menu";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import SocialIcons from "./social-icons";
import ScrollProgress from "./scroll-progress";
import ColorModeSwitcher from "./color-mode-switcher";

const AppHeader: FC = () => {
   const { isScrolled } = useIsScrolled();

   return (
      <header
         className={`flex justify-between items-center main-padding sticky top-0 w-full transition-all ease-in-out duration-700 z-50 ${
            isScrolled
               ? "bg-white dark:bg-slate-900 py-6 shadow-md"
               : "bg-transparent py-10"
         }`}
      >
         <ScrollProgress />
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
            {/* Color mode switcher */}
            <ColorModeSwitcher />
         </div>
      </header>
   );
};

export default AppHeader;
