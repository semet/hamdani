import Image from "next/image";
import React, { FC, useRef } from "react";
import StackCard from "./stack-card";
import SectionContainer from "../shared/section-container";
import { useMotionValueEvent, useScroll, useTransform, motion } from "framer-motion";

const stacks = [
   {
      name: "Bootstrap",
      image: "/images/stacks/bootstrap.png",
   },
   {
      name: "CSS",
      image: "/images/stacks/css.png",
   },
   {
      name: "Git",
      image: "/images/stacks/git.png",
   },
   {
      name: "Github",
      image: "/images/stacks/github.png",
   },
   {
      name: "HTML",
      image: "/images/stacks/html.png",
   },
   {
      name: "JavaScript",
      image: "/images/stacks/javascript.png",
   },
   {
      name: "Jest",
      image: "/images/stacks/jest.png",
   },
   {
      name: "Material UI",
      image: "/images/stacks/materialui.png",
   },
   {
      name: "Laravel",
      image: "/images/stacks/laravel.png",
   },
   {
      name: "Next js",
      image: "/images/stacks/next-js.svg",
   },
   {
      name: "Prisma",
      image: "/images/stacks/prisma.png",
   },
   {
      name: "Nuxt js",
      image: "/images/stacks/nuxt.png",
   },
   {
      name: "PHP",
      image: "/images/stacks/php.png",
   },
   {
      name: "React js",
      image: "/images/stacks/react.png",
   },
   {
      name: "Redux",
      image: "/images/stacks/redux.png",
   },
   {
      name: "Tailwind",
      image: "/images/stacks/tailwind.png",
   },
   {
      name: "Typescript",
      image: "/images/stacks/typescript.png",
   },
   {
      name: "VSCode",
      image: "/images/stacks/vscode.png",
   },
   {
      name: "Vue js",
      image: "/images/stacks/vuejs.png",
   },
];

const TechStacks: FC = () => {
   const ref = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end end"],
   });

   const scale = useTransform(scrollYProgress, [0.56, 0.7, 8], [0.5, 0.8, 1]);

   const opacity = useTransform(
      scrollYProgress,
      [0.03, 0.27, 0.67, 0.95],
      [0.2, 0.5, 0.9, 1]
   );

   useMotionValueEvent(scrollYProgress, "change", (latest) => {
      console.log(latest);
   });
   return (
      <SectionContainer
         id="techstack-section"
         title="My stack"
         subtitle="Technologies I've been working with recently"
      >
         <motion.div
            ref={ref}
            style={{ scale }}
            className="mx-auto flex flex-wrap gap-8 items-center justify-center w-full md:w-1/2"
         >
            {stacks.map((stack) => (
               <StackCard key={stack.name} {...stack} />
            ))}
         </motion.div>
      </SectionContainer>
   );
};

export default TechStacks;
