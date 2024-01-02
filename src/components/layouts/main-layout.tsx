import React, { FC, Fragment, ReactNode } from "react";
import AppHeader from "../partials/header/app-header";
import AppFooter from "../partials/footer/app-footer";
import ScrollToTop from "../partials/footer/scroll-to-top";

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
   return (
      <div className="bg-gradient-to-br from-indigo-800/30 dark:from-zinc-900 via-transparent dark:via-indigo-950/30 to-transparent">
         {/* Header */}
         <AppHeader />
         {/* content */}
         {children}
         {/* footer */}
         <AppFooter />
         {/* scroll to top */}
         <ScrollToTop />
      </div>
   );
};

export default MainLayout;
