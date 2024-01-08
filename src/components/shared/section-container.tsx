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

   useEffect(() => {
      if (isInView) {
         mainControl.start("visible");
      }
   });
   return (
      <section
         ref={ref}
         className="main-padding mt-32 space-y-12 min-w-full"
         id={id}
      >
         <motion.div
            variants={{
               hidden: { opacity: 0, y: 75 },
               visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControl}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-center space-y-5 relative"
         >
            <h3 className="text-4xl xl:text-5xl font-extrabold text-heading dark:text-slate-300 inline-block overflow-x-clip relative">
               {title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-base lg:text-xl">
               {subtitle}
            </p>
         </motion.div>
         {children}
      </section>
   );
};

export default SectionContainer;
