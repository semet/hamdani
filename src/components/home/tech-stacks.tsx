import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FC, useRef } from "react";
import SectionContainer from "../shared/section-container";
import StackCard from "./stack-card";

const stacks = [
   {
      id: 1,
      name: "Bootstrap",
      image: "/images/stacks/bootstrap.png",
   },
   {
      id: 2,
      name: "CSS",
      image: "/images/stacks/css.png",
   },
   {
      id: 3,
      name: "Git",
      image: "/images/stacks/git.png",
   },
   {
      id: 4,
      name: "Github",
      image: "/images/stacks/github.png",
   },
   {
      id: 5,
      name: "HTML",
      image: "/images/stacks/html.png",
   },
   {
      id: 6,
      name: "JavaScript",
      image: "/images/stacks/javascript.png",
   },
   {
      id: 7,
      name: "Jest",
      image: "/images/stacks/jest.png",
   },
   {
      id: 8,
      name: "Material UI",
      image: "/images/stacks/materialui.png",
   },
   {
      id: 9,
      name: "Laravel",
      image: "/images/stacks/laravel.png",
   },
   {
      id: 10,
      name: "Next js",
      image: "/images/stacks/next-js.svg",
   },
   {
      id: 11,
      name: "Prisma",
      image: "/images/stacks/prisma.png",
   },
   {
      id: 12,
      name: "Nuxt js",
      image: "/images/stacks/nuxt.png",
   },
   {
      id: 13,
      name: "PHP",
      image: "/images/stacks/php.png",
   },
   {
      id: 14,
      name: "React js",
      image: "/images/stacks/react.png",
   },
   {
      id: 15,
      name: "Redux",
      image: "/images/stacks/redux.png",
   },
   {
      id: 16,
      name: "Tailwind",
      image: "/images/stacks/tailwind.png",
   },
   {
      id: 17,
      name: "Typescript",
      image: "/images/stacks/typescript.png",
   },
   {
      id: 18,
      name: "VSCode",
      image: "/images/stacks/vscode.png",
   },
   {
      id: 19,
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

   const scale = useTransform(scrollYProgress, [0.05, 0.41, 0.75], [0.3, 0.5, 1]);

   return (
      <SectionContainer
         id="techstack-section"
         title="My stack"
         subtitle="Technologies I've been working with recently"
      >
         <motion.div
            ref={ref}
            style={{ scale }}
            className="mx-auto flex flex-wrap gap-8 items-center justify-center w-full lg:w-[60%]"
         >
            {stacks.map((stack) => (
               <StackCard key={stack.name} {...stack} />
            ))}
         </motion.div>
      </SectionContainer>
   );
};

export default TechStacks;
