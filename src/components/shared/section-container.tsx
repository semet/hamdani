import React, { FC, ReactNode } from "react";

type Props = {
   id: string;
   title: string;
   subtitle: string;
   children?: ReactNode;
};

const SectionContainer: FC<Props> = ({ id, subtitle, title, children }) => {
   return (
      <div className="main-padding mt-32 space-y-12 min-w-full" id={id}>
         <div className="text-center space-y-4">
            <h3 className="text-4xl font-extrabold text-heading dark:text-slate-300">
               {title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400">{subtitle}</p>
         </div>
         {children}
      </div>
   );
};

export default SectionContainer;
