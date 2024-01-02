import Image from "next/image";
import React, { FC } from "react";
import StackCard from "./stack-card";
import SectionContainer from "../shared/section-container";

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
      name: "Material UI",
      image: "/images/stacks/materialui.png",
   },
   {
      name: "Laravel",
      image: "/images/stacks/laravel.png",
   },
   {
      name: "Next js",
      image: "/images/stacks/nextjs.png",
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
   return (
      <SectionContainer
         id="techstack-section"
         title="My tech stacks"
         subtitle="Technologies I've been working with recently"
      >
         <div className="mx-auto flex flex-wrap gap-8 items-center justify-center w-full md:w-1/2">
            {stacks.map((stack) => (
               <StackCard key={stack.name} {...stack} />
            ))}
         </div>
      </SectionContainer>
   );
};

export default TechStacks;
