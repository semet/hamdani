import React, { FC } from "react";
import items from "./portfolio.json";
import PortfolioCard from "./portfolio-card";
import SectionContainer from "../shared/section-container";

const Portfolio: FC = () => {
   return (
      <SectionContainer
         id="portfolio-section"
         title=" Here is what I make"
         subtitle=" I use Nextjs in most of my project. I Sometime use Laravel"
      >
         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {items.map((item) => (
               <PortfolioCard {...item} key={item.title} />
            ))}
         </div>
      </SectionContainer>
   );
};

export default Portfolio;
