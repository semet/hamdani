import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import Education from "@/components/home/education";
import HeroSection from "@/components/home/hero-section";
import Portfolio from "@/components/home/portfolio";
import TechStacks from "@/components/home/tech-stacks";
import Tools from "@/components/home/tools";
import MainLayout from "@/components/layouts/main-layout";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const Home: NextPage = () => {
   return (
      <MainLayout>
         <Head>
            <title>Hamdani</title>
            <meta
               name="google-site-verification"
               content="pT68wa1pdeflo4JOa7u2ONvPj124U3Y0C_U8Rfgxnyc"
            />
         </Head>
         {/* Hero */}
         <HeroSection />
         {/* tech stack */}
         <TechStacks />
         {/* about */}
         <About />
         {/* Portfolio */}
         <Portfolio />
      </MainLayout>
   );
};

export default Home;
