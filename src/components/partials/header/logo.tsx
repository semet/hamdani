import useScroll from "@/hooks/use-scroll";
import { AnimatePresence, motion } from "framer-motion";
import React, { FC } from "react";

const Logo: FC = () => {
   const { isScrolled } = useScroll(60);
   return (
      <div>
         <AnimatePresence>
            {isScrolled ? (
               <motion.h1
                  initial={{
                     y: "100px",

                     scale: 1.8,
                     opacity: 0,
                  }}
                  animate={{ y: 0, scale: 1, x: 0, opacity: 1 }}
                  exit={{ y: "100px", scale: 1.8, opacity: 0 }}
                  className="font-mono text-3xl font-bold tracking-wide bg-gradient-to-r from-[#2681b6] to-[#cf21b3] text-transparent bg-clip-text"
               >
                  Hamdani
               </motion.h1>
            ) : null}
         </AnimatePresence>
      </div>
   );
};

export default Logo;
