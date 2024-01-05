/* eslint-disable react/no-unescaped-entities */
import { motion, useScroll, useTransform } from "framer-motion";
import { FC, useRef } from "react";
import SectionContainer from "../shared/section-container";
import about from "./about.json";
import Education from "./education";

const About: FC = () => {
   const ref = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end end"],
   });

   const scale = useTransform(scrollYProgress, [0.04, 0.5], [0.5, 1]);

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
               style={{ scale }}
               className="w-full bg-white dark:bg-slate-900 p-5 relative shadow-md rounded-md"
            >
               <p
                  className=" text-gray-600 dark:text-slate-300 prose-lg lg:prose-base xl:prose-xl"
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
