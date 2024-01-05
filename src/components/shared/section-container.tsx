import {
   useScroll,
   motion,
   useTransform,
   useInView,
   useAnimation,
} from "framer-motion";
import React, { FC, ReactNode, useEffect, useRef } from "react";

type Props = {
   id: string;
   title: string;
   subtitle: string;
   children?: ReactNode;
};

const SectionContainer: FC<Props> = ({ id, subtitle, title, children }) => {
   const ref = useRef<HTMLSpanElement>(null);
   const isInView = useInView(ref);
   const mainControl = useAnimation();
   const slideControl = useAnimation();

   useEffect(() => {
      if (isInView) {
         mainControl.start("visible");
         slideControl.start("visible");
      }
   });
   return (
      <section
         ref={ref}
         className="main-padding mt-32 space-y-12 min-w-full"
         id={id}
      >
         <div className="text-center space-y-4 relative">
            <motion.h3
               variants={{
                  hidden: { opacity: 0, y: 75, fontSize: "10px" },
                  visible: { opacity: 1, y: 0, fontSize: "36px" },
               }}
               initial="hidden"
               animate={mainControl}
               transition={{ duration: 0.5, delay: 0.25 }}
               className="text-4xl font-extrabold text-heading dark:text-slate-300 inline-block  overflow-hidden relative"
            >
               {title}
               <motion.span
                  variants={{
                     hidden: { left: 0 },
                     visible: { left: "100%" },
                  }}
                  animate={slideControl}
                  transition={{ duration: 1, ease: "easeIn" }}
                  className="absolute top-0 left-0 right-0 transform origin-left z-50 place-self-start bg-slate-900/45 dark:bg-slate-300 h-full w-full"
               ></motion.span>
            </motion.h3>
            <p className="text-slate-600 dark:text-slate-400">{subtitle}</p>
         </div>
         {children}
      </section>
   );
};

export default SectionContainer;
