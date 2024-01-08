import { motion, useScroll, useSpring } from "framer-motion";
import { FC } from "react";

const ScrollProgress: FC = () => {
   const { scrollYProgress } = useScroll();
   // const scaleX = useSpring(scrollYProgress);
   return (
      <motion.div
         style={{ scaleX: scrollYProgress }}
         className="w-full h-1 bg-gradient-to-r from-indigo-800 to-secondary fixed top-0 left-0 right-0 transform origin-left z-50 place-self-start"
      />
   );
};

export default ScrollProgress;
