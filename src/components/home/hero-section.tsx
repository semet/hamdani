import Image from "next/image";
import React, { FC, useId } from "react";
import TypewriterComponent, { TypewriterClass } from "typewriter-effect";

const HeroSection: FC = () => {
   return (
      <div className="main-padding my-20 flex justify-between w-full" id="home-page">
         {/* left text*/}
         <div className="space-y-4 w-full md:w-1/2 flex flex-col gap-2 justify-center text-center md:text-start text-5xl font-bold text-heading">
            <h2 className="font-semibold text-slate-800">
               Hi <span className="text-3xl">👋,</span>
            </h2>
            <h3 className="text-slate-700 text-5xl">My name is</h3>
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
            <h4 className="text-3xl lg:text-3xl xl:text-4xl font-light">
               I build website of thing
            </h4>
            <div className="flex justify-center md:justify-start gap-2">
               <button className="btn btn-primary rounded-md shadow-md">
                  Hire me
               </button>
               <button className="btn btn-secondary rounded-md shadow-md">
                  See my CV
               </button>
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
      </div>
   );
};

export default HeroSection;
