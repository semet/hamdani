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
import Script from "next/script";

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
         <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
         />
         <Script id="google-analytics">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'GA_TRACKING_ID');
        `}
         </Script>
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
