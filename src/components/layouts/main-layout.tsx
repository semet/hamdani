import React, { FC, Fragment, ReactNode } from "react";
import AppHeader from "../partials/header/app-header";
import AppFooter from "../partials/footer/app-footer";
import ScrollToTop from "../partials/footer/scroll-to-top";
import ScrollProgress from "../partials/header/scroll-progress";

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
   return (
      <Fragment>
         {/* Header */}
         <AppHeader />
         {/* content */}
         {children}
         {/* footer */}
         <AppFooter />
         {/* scroll to top */}
         <ScrollToTop />
      </Fragment>
   );
};

export default MainLayout;
