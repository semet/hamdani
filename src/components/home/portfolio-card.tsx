import useAosDirection from "@/hooks/use-aos-directin";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { FaGithub } from "react-icons/fa";

type Props = {
   id: number;
   title: string;
   image: string;
   description: string;
   url: string;
   github: string;
};

const PortfolioCard: FC<Props> = ({
   description,
   id,
   image,
   title,
   url,
   github,
}) => {
   const { directions, index } = useAosDirection();
   return (
      <div
         className="w-full rounded-md shadow-md overflow-hidden relative group"
         data-aos={directions[index]}
      >
         <Image
            src={image}
            width={375}
            height={260}
            alt={title}
            className="object-cover w-full"
         />
         <div className="absolute -bottom-52 group-hover:bottom-0 transition-all ease-in-out duration-500 w-full h-[40%] bg-slate-100/95 p-2 flex flex-col gap-2">
            <h4 className="text-slate-900 font-extrabold">{title}</h4>
            {/* <p className="line-clamp-4 text-gray-700">{description}</p> */}
            <div className="flex justify-start gap-4 items-center">
               <Link
                  href={url}
                  target="_blank"
                  className="text-primary font-semibold hover:text-secondary"
               >
                  Visit &#x2192;
               </Link>
               <Link
                  href={github}
                  className="text-xl text-gray-500 hover:text-gray-700"
               >
                  <FaGithub />
               </Link>
            </div>
         </div>
      </div>
   );
};

export default PortfolioCard;
