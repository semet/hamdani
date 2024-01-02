import React, { FC } from "react";
import SocialIcons from "../header/social-icons";
import { Copse } from "next/font/google";
import { Copyright } from "./copyright";

const AppFooter: FC = () => {
   return (
      <div className="main-padding mt-28 ">
         <div className="flex justify-between items-center">
            {/* left */}
            <h1 className="font-mono text-xl font-bold tracking-wide bg-gradient-to-r from-[#2681b6] to-[#cf21b3] text-transparent bg-clip-text">
               Hamdani
            </h1>
            {/* right */}
            <div className="flex gap-10">
               <div className="flex gap-10 text-gray-700">
                  <a href="">+6287736690307</a>
                  <a href="">hamdanilombok@gmail.com</a>
               </div>
               <SocialIcons />
            </div>
         </div>
         <div className="divider"></div>
         {/* Copyright */}
         <Copyright />
      </div>
   );
};

export default AppFooter;
