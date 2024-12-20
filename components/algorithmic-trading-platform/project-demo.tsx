import React from "react";
import Image from "next/image";

import tradingStrategyProfit from "@/public/images/trading-strategy-profit-overview.png";
import strategyMarketplace from "@/public/images/strategy-marketplace.png";
import exchangeIntegration from "@/public/images/exchange-integration-page.png";
import strategyProfitsOverview from "@/public/images/strategy-profits-overview.png";

const ProjectDemo: React.FC = () => {
  const demos = [
    {
      image: tradingStrategyProfit,
      title: "Trading Strategy Profit Overview",
      alt: "Line chart showing trading strategy profit over time",
    },
    {
      image: strategyMarketplace,
      title: "Strategy Marketplace",
      alt: "Grid view of various trading strategies with performance metrics",
    },
    {
      image: exchangeIntegration,
      title: "Exchange Integration Page",
      alt: "Form interface for exchange API integration",
    },
    {
      image: strategyProfitsOverview,
      title: "Strategy Profits Overview",
      alt: "Donut chart showing strategy profit distribution",
    },
  ];

  return (
    <div className="flex flex-col w-full items-starts justify-between xl:gap-10 2xl:gap-0">
      <div className="flex flex-col gap-6 lg:gap-4 mb-12">
        <h2 className="text-[#CCDAF1] text-3xl font-['Outfit'] font-medium">
          PROJECT DEMO
        </h2>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 w-full">
        {demos.map((demo, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="relative aspect-[5/3] w-full overflow-hidden rounded-lg">
              <Image
                src={demo.image}
                alt={demo.alt}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-[#8794A9] text-[24px] font-['Outfit'] font-light">
              {demo.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDemo;
