/* eslint-disable react/no-unescaped-entities */
import React, { FC } from "react";
import Education from "./education";
import SectionContainer from "../shared/section-container";

const About: FC = () => {
   return (
      <SectionContainer
         id="about-section"
         title="About me"
         subtitle="A little information about me"
      >
         <div className="flex flex-col lg:flex-row md:justify-between w-full">
            {/* About */}
            <div className="w-full lg:w-[60%] tilt-card" data-aos="fade-right">
               <p className="text-lg lg:text-base xl:text-lg text-gray-600 dark:text-slate-300">
                  I started coding more than 10 years ago when the good old PHP and
                  Double-clicking index.html was a thing. I then learned more advance
                  languages like HTML (I am one of those who believe HTML is a
                  Programming Language itself 😂), CSS, JavsScript, TypeScript, MySql
                  and many more. I also spent my time learning some stuffs like
                  Reactjs, Vuejs, Nextjs, Nodejs (especially Express), and a good
                  amount of time diving Rest API. But my primary Language is PHP
                  (Laravel) and Javascript (React/Nextjs). I know GraphQL a little
                  bit and I keep myself Up-to-Date with the information about the
                  languages and technologies that I use. Sadly, up until you read
                  this, I never have my first job as Web Developer and most of my
                  works I open for free in my Github page. I don't know the minimum
                  requirement of a man being a Fullstack Developer but I claim myself
                  to be one of those because I can do Front-end Design, good
                  understanding of Rest API and how to connect both. By the way, I
                  also know Laravel very well (incase you need a PHP Developer).
               </p>
            </div>
            {/* Education */}
            <div className="w-full lg:w-[40%]">
               <Education />
            </div>
         </div>
      </SectionContainer>
   );
};

export default About;
