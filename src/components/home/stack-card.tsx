import { useScroll, motion, useTransform, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { FC, useRef } from "react";

type Props = {
   name: string;
   image: string;
};

const StackCard: FC<Props> = ({ image, name }) => {
   const ref = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end end"],
   });
   const scale = useTransform(
      scrollYProgress,
      [0.71, 0.8, 0.9, 1],
      [0.4, 0.5, 0.8, 1]
   );

   return (
      <motion.div
         ref={ref}
         style={{ scale }}
         className="w-14 cursor-pointer tooltip tooltip-bottom"
         data-tip={name}
      >
         <Image src={image} width={120} height={120} alt={name} />
      </motion.div>
   );
};

export default StackCard;
