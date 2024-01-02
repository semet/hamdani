import React, { FC, ReactNode } from "react";

type Props = {
   id: string;
   title: string;
   subtitle: string;
   children?: ReactNode;
};

const SectionContainer: FC<Props> = ({ id, subtitle, title, children }) => {
   return (
      <div className="main-padding mt-32 space-y-12" id={id}>
         <div className="text-center space-y-4">
            <h3 className="text-4xl font-extrabold text-heading">{title}</h3>
            <p className="text-slate-600">{subtitle}</p>
         </div>
         {children}
      </div>
   );
};

export default SectionContainer;
