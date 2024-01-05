import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FC, useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

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
   const ref = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end end"],
   });

   const scale = useTransform(scrollYProgress, [0, 0.5, 0.8], [0.5, 0.7, 1]);

   return (
      <motion.div
         ref={ref}
         style={{ scale }}
         className="w-full flex flex-col rounded-md shadow-md overflow-hidden group bg-white dark:bg-slate-800"
      >
         <Link href={url} target="_blank" className="">
            <Image
               src={image}
               width={375}
               height={260}
               alt={title}
               className="object-cover w-full"
               priority={true}
            />
         </Link>
         <div className="flex flex-col gap-4 px-4 py-3 relative">
            <h3 className="text-xl sm:text-2xl lg:text-xl xl:text-3xl font-semibold text-slate-700 dark:text-slate-100">
               {title}
            </h3>
            <ul className="flex items-center flex-wrap gap-1 md:gap-2 lg:gap-1 xl:gap-2">
               <li className="font-bold text-base md:text-lg">Stacks: </li>
               {stacks.map((stack) => (
                  <li
                     key={stack}
                     className="whitespace-nowrap badge badge-outline badge-primary md:text-lg lg:text-base xl:text-lg"
                  >
                     {stack}
                  </li>
               ))}
            </ul>
            <p
               className="prose prose-lg md:prose-xl lg:prose-lg prose-a:no-underline prose-a:text-primary text-gray-600 dark:text-slate-300"
               dangerouslySetInnerHTML={{ __html: description }}
            ></p>

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
      </motion.div>
   );
};

export default PortfolioCard;
