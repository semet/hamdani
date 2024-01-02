import React, { FC, Fragment } from "react";

const educations = [
   {
      year: "1997/2003",
      name: "SDN Nyangget",
   },
   {
      year: "2003/2006",
      name: "SMPN 2 Praya Timur",
   },
   {
      year: "2006/2009",
      name: "SMAN 2 Praya",
   },
   {
      year: "2009/2013",
      name: "IKIP Mataran (Faculty of Language and Art)",
   },
];

const Education: FC = () => {
   return (
      <div className="mt-16 lg:mt-0 space-y-10 lg:space-y-0">
         <div className="block lg:hidden text-center space-y-4">
            <h3 className="text-4xl font-extrabold text-heading dark:text-slate-300">
               Education
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
               My Education background
            </p>
         </div>
         <ul className="timeline timeline-snap-icon timeline-vertical text-2xl">
            {educations.map((education, index) => (
               <Fragment key={education.year}>
                  {index % 2 == 0 ? (
                     <li>
                        <div className="timeline-middle">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5 text-primary"
                           >
                              <path
                                 fillRule="evenodd"
                                 d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                 clipRule="evenodd"
                              />
                           </svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10 space-y-3">
                           <time className="text-xl font-bold text-slate-500">
                              {education.year}
                           </time>
                           <div className="text-lg lg:text-base font-semibold text-heading dark:text-slate-200">
                              {education.name}
                           </div>
                        </div>
                        <hr className="bg-primary" />
                     </li>
                  ) : (
                     <li>
                        <hr className="bg-primary" />
                        <div className="timeline-middle">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5 text-primary"
                           >
                              <path
                                 fillRule="evenodd"
                                 d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                 clipRule="evenodd"
                              />
                           </svg>
                        </div>
                        <div className="timeline-end mb-10">
                           <time className="text-xl font-bold text-slate-500">
                              {education.year}
                           </time>
                           <div className="text-lg lg:text-base font-semibold text-heading dark:text-slate-200">
                              {education.name}
                           </div>
                        </div>
                        <hr className="bg-primary" />
                     </li>
                  )}
               </Fragment>
            ))}
         </ul>
      </div>
   );
};

export default Education;
