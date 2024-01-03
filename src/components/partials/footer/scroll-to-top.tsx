import useScroll from "@/hooks/use-isscrolled";
import { AnimatePresence, motion } from "framer-motion";
import React, { FC } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop: FC = () => {
   const { isScrolled } = useScroll(450);
   const handleScrollTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };
   return (
      <AnimatePresence>
         {isScrolled ? (
            <motion.div
               initial={{ y: "200px", opacity: 0 }}
               animate={{ y: "0px", opacity: 1 }}
               exit={{ y: "200px", opacity: 0 }}
               className="fixed bottom-4 right-6"
            >
               <button
                  className="btn btn-circle btn-sm btn-primary shadow-md"
                  onClick={handleScrollTop}
               >
                  <FaArrowUp />
               </button>
            </motion.div>
         ) : null}
      </AnimatePresence>
   );
};

export default ScrollToTop;
