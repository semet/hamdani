import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
const useIsScrolled = (position = 150) => {
   const [isScrolled, setIsScrolled] = useState(false);

   const { scrollY } = useScroll();

   useMotionValueEvent(scrollY, "change", (latest) => {
      if (latest >= position) {
         setIsScrolled(true);
      } else {
         setIsScrolled(false);
      }
   });

   return {
      isScrolled,
   };
};

export default useIsScrolled;
