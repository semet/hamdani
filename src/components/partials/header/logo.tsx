import {
   AnimatePresence,
   motion,
   useMotionValueEvent,
   useScroll,
   useTransform,
} from "framer-motion";
import React, { FC, useRef } from "react";

const Logo: FC = () => {
   return (
      <div>
         <h1 className="font-mono text-3xl font-bold tracking-wide bg-gradient-to-r from-[#2681b6] to-[#cf21b3] text-transparent bg-clip-text">
            Hamdani
         </h1>
      </div>
   );
};

export default Logo;
