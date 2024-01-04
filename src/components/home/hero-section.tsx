import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FC, useRef } from "react";
import TypewriterComponent from "typewriter-effect";

const HeroSection: FC = () => {
   const ref = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "end start"],
   });

   const opacity = useTransform(
      scrollYProgress,
      [0.23, 0.25, 0.29, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.81],
      [1, 0.95, 0.85, 0.75, 0.6, 0.5, 0.4, 0.3, 0.2, 0]
   );

   const sendMail = () => {
      if (typeof window !== "undefined") {
         (window as any).location = "mailto:hamdanilombok@gmail.com";
      }
   };
   return (
      <motion.div
         ref={ref}
         style={{ scale: opacity }}
         className="main-padding my-20 flex justify-between w-full"
      >
         {/* left text*/}
         <div className="space-y-4 w-full md:w-1/2 flex flex-col gap-2 justify-center text-center md:text-start text-5xl font-bold text-heading">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
               Hi <span className="text-3xl">👋,</span>
            </h2>
            <h3 className="text-slate-700 dark:text-slate-400 text-5xl">
               My name is
            </h3>
            <div className="mockup-code text-base w-min self-center md:self-start">
               <pre className="flex font-mono" data-prefix="$">
                  <code className="text-[#DE616D]">
                     <TypewriterComponent
                        onInit={(typewriter) => {
                           typewriter
                              .typeString("Dani")
                              .deleteAll()
                              .typeString("console.log('Hamdani')")
                              .start();
                        }}
                     />
                  </code>
               </pre>
            </div>
            <h4 className="text-3xl lg:text-3xl xl:text-4xl font-light text-slate-700 dark:text-slate-400">
               I code your dream website
            </h4>
            <div className="flex justify-center md:justify-start gap-2">
               <button
                  className="btn btn-primary dark:text-slate-50 rounded-md shadow-md tracking-wide"
                  onClick={sendMail}
               >
                  Hire me
               </button>
               <Link
                  href="https://drive.google.com/file/d/1uUxnd6E0y7qSUY2v8YqV7BQPyViODL2i/view?usp=share_link"
                  target="_blank"
                  className="btn btn-secondary dark:text-slate-50 rounded-md shadow-md tracking-wide"
               >
                  See my CV
               </Link>
            </div>
         </div>
         {/* Image */}
         <div className="hidden md:flex w-1/2 justify-end">
            <div className="w-[300px] h-[300px] p-1 bg-gradient-to-tr from-blue-600 to-pink-800 from rounded-full overflow-hidden">
               <Image
                  src="/images/hamdani.png"
                  width={439}
                  height={439}
                  alt="Hamdani"
                  className="rounded-full"
               />
            </div>
         </div>
      </motion.div>
   );
};

export default HeroSection;
