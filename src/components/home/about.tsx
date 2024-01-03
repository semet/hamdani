/* eslint-disable react/no-unescaped-entities */
import React, { FC, useRef } from "react";
import Education from "./education";
import SectionContainer from "../shared/section-container";
import {
   useMotionValueEvent,
   useScroll,
   useTransform,
   motion,
   useSpring,
} from "framer-motion";

const About: FC = () => {
   const ref = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end end"],
   });

   const scale = useTransform(scrollYProgress, [0.39, 0.45, 0.51], [0.8, 0.9, 1]);
   const opacity = useTransform(scrollYProgress, [0.39, 0.4], [0.1, 1]);

   const animatedScale = useSpring(scale);

   return (
      <SectionContainer
         id="about-section"
         title="About me"
         subtitle="A little information about me"
      >
         <div className="flex flex-col lg:flex-row md:justify-between">
            {/* About */}
            <motion.div
               ref={ref}
               style={{ scale }}
               className="w-full lg:w-1/2 tilt-card"
            >
               <p className="text-lg lg:text-base xl:text-lg text-gray-600 dark:text-slate-300 prose prose-base">
                  I started coding more than 10 years ago when the good old PHP and
                  Double-clicking index.html was a thing. I then learned more advance
                  languages like HTML (I am one of those who believe HTML is a
                  Programming Language itself 😂), CSS, JavsScript, TypeScript, MySql
                  and many more. I also spent my time learning some stuffs like
                  Reactjs, Vuejs, Nextjs, Nodejs (especially Express), and a good
                  amount of time diving Rest API. But my primary Language is
                  Javascript (React/Nextjs) and PHP (Laravel) . I know GraphQL a
                  little bit and I keep myself Up-to-Date with the information about
                  the languages and technologies that I use. I claim myself to be one
                  of those Fullstack Developer because I can do Front-end Design,
                  good understanding of Rest API and how to connect both. By the way,
                  I also know Laravel very well (incase you need a PHP Developer).
               </p>
            </motion.div>
            {/* Education */}
            <motion.div style={{ opacity, scale }} className="w-full lg:w-1/2">
               <Education />
            </motion.div>
         </div>
      </SectionContainer>
   );
};

export default About;
