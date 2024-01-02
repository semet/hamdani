import useAosDirection from "@/hooks/use-aos-directin";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FaExternalLinkAlt, FaForward, FaGithub } from "react-icons/fa";

type Props = {
   id: number;
   title: string;
   image: string;
   description: string;
   url: string;
   github: string;
   stacks: Array<string>;
};

const PortfolioCard: FC<Props> = ({
   description,
   id,
   image,
   title,
   url,
   github,
   stacks,
}) => {
   const { directions, index } = useAosDirection();
   return (
      <div
         className="w-full flex flex-col rounded-md shadow-md overflow-hidden group"
         // data-aos={directions[index]}
      >
         <Link href={url} target="_blank" className="">
            <Image
               src={image}
               width={375}
               height={260}
               alt={title}
               className="object-cover w-full"
            />
         </Link>
         <div className="flex flex-col gap-4 px-4 py-3 relative">
            <h3 className="text-xl font-semibold text-slate-700">{title}</h3>
            <ul className="flex items-center flex-wrap gap-1">
               <li className="font-bold">Stacks: </li>
               {stacks.map((stack) => (
                  <li
                     key={stack}
                     className="whitespace-nowrap badge badge-outline badge-primary"
                  >
                     {stack}
                  </li>
               ))}
            </ul>
            <p>{description}</p>

            <div className="absolute flex gap-4 -right-24 group-hover:right-0 top-2 px-4 py-2 bg-heading rounded-l-md shadow-md transition-all ease-in-out duration-300">
               <Link
                  href={url}
                  target="_blank"
                  className="text-xl text-slate-300 hover:text-slate-50"
               >
                  <FaExternalLinkAlt />
               </Link>
               <Link
                  href={github}
                  target="_blank"
                  className="text-xl text-slate-300 hover:text-slate-50"
               >
                  <FaGithub />
               </Link>
            </div>
         </div>
      </div>
   );
};

export default PortfolioCard;
