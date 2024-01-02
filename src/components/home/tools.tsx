import React from "react";
import { FaDotCircle } from "react-icons/fa";

const Tools = () => {
   return (
      <div className="main-padding mt-32 space-y-10" id="tools-section">
         <div className="text-center space-y-4">
            <h3 className="text-4xl font-extrabold text-heading">Tools</h3>
            <p> These are tools i use in my daily coding</p>
         </div>
         {/*  */}
         <div className="flex justify-center">
            <ul className="flex flex-col gap-4">
               <li
                  className="flex gap-2 items-center text-sm sm:text-base"
                  data-aos="fade-right"
               >
                  <FaDotCircle className="text-primary" />
                  <span className="text-sm sm:text-base font-bold whitespace-nowrap">
                     Laptop:{" "}
                  </span>{" "}
                  Acer Aspire A715-71G Core i7
               </li>
               <li
                  className="flex gap-2 items-center text-sm sm:text-base"
                  data-aos="fade-right"
                  data-aos-delay="50"
               >
                  <FaDotCircle className="text-primary" />
                  <span className="text-sm sm:text-base font-bold whitespace-nowrap">
                     Keyboard:{" "}
                  </span>{" "}
                  Logitech standard keyboard
               </li>
               <li
                  className="flex gap-2 items-center text-sm sm:text-base"
                  data-aos="fade-right"
                  data-aos-delay="150"
               >
                  <FaDotCircle className="text-primary" />
                  <span className="text-sm sm:text-base font-bold whitespace-nowrap">
                     Mouse:{" "}
                  </span>{" "}
                  Cooler Master Devastator 3
               </li>
               <li
                  className="flex gap-2 items-center text-sm sm:text-base"
                  data-aos="fade-right"
                  data-aos-delay="250"
               >
                  <FaDotCircle className="text-primary" />
                  <span className="text-sm sm:text-base font-bold whitespace-nowrap">
                     Operating System:{" "}
                  </span>{" "}
                  Windows 10 / Linux
               </li>
               <li
                  className="flex gap-2 items-center text-sm sm:text-base"
                  data-aos="fade-right"
                  data-aos-delay="350"
               >
                  <FaDotCircle className="text-primary" />
                  <span className="text-sm sm:text-base font-bold whitespace-nowrap">
                     IDE:{" "}
                  </span>{" "}
                  VSCode and PhpStorm
               </li>
               <li
                  className="flex gap-2 items-center text-sm sm:text-base"
                  data-aos="fade-right"
                  data-aos-delay="450"
               >
                  <FaDotCircle className="text-primary" />
                  <span className="text-sm sm:text-base font-bold whitespace-nowrap">
                     browser:{" "}
                  </span>{" "}
                  Firefox Developer Edition
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Tools;
