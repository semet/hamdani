/* eslint-disable react/no-unescaped-entities */
import {
   motion,
   useMotionValueEvent,
   useScroll,
   useSpring,
   useTransform,
} from "framer-motion";
import { FC, useRef } from "react";
import SectionContainer from "../shared/section-container";
import Education from "./education";
import about from "./about.json";

const About: FC = () => {
   const ref = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end end"],
   });

   const scale = useTransform(scrollYProgress, [0.04, 0.5], [0.5, 1]);

   const animatedScale = useSpring(scale);

   return (
      <SectionContainer
         id="about-section"
         title="About me"
         subtitle="A little information about me"
      >
         <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* About */}
            <motion.div
               ref={ref}
               style={{ scale: animatedScale }}
               className="w-full bg-white dark:bg-slate-900 p-5 relative shadow-md rounded-md"
            >
               <p
                  className="text-lg lg:text-base xl:text-lg text-gray-600 dark:text-slate-300 prose prose-base"
                  dangerouslySetInnerHTML={{ __html: about.me }}
               />
            </motion.div>
            {/* Education */}
            <motion.div style={{ scale }} className="w-full">
               <Education />
            </motion.div>
         </div>
      </SectionContainer>
   );
};

export default About;
