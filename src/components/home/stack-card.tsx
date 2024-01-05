import { motion } from "framer-motion";
import Image from "next/image";
import { FC, useRef } from "react";

type Props = {
   id: number;
   name: string;
   image: string;
};

const StackCard: FC<Props> = ({ image, name, id }) => {
   // const ref = useRef<HTMLDivElement>(null);
   // const variants = {
   //    initial: {
   //       opacity: 0,
   //       y: 100,
   //    },
   //    animate: (index: number) => ({
   //       opacity: 1,
   //       y: 0,
   //       transition: {
   //          delay: index * 0.05,
   //       },
   //    }),
   // };

   return (
      <motion.div
         // ref={ref}
         // variants={variants}
         // initial="initial"
         // whileInView="animate"
         // custom={id}
         className="w-16 xl:w-20 cursor-pointer tooltip tooltip-bottom"
         data-tip={name}
      >
         <Image
            src={image}
            width={120}
            height={120}
            className="w-full h-full object-cover"
            alt={name}
         />
      </motion.div>
   );
};

export default StackCard;
