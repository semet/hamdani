import React, { FC } from "react";
import items from "./portfolio.json";
import PortfolioCard from "./portfolio-card";
import SectionContainer from "../shared/section-container";

const Portfolio: FC = () => {
   return (
      <SectionContainer
         id="portfolio-section"
         title=" Here is what I make"
         subtitle=" I use Nextjs in most of my project. I Sometime use Laravel (based on my client request)"
      >
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {items.map((item) => (
               <PortfolioCard {...item} key={item.title} />
            ))}
         </div>
      </SectionContainer>
   );
};

export default Portfolio;
