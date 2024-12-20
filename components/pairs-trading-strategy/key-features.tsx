import React from "react";

import { LineChart, Box, TrendingUp, BarChart2, AreaChart } from "lucide-react";

const KeyFeatures: React.FC = () => {
  const features = [
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Kalman Filter-Based Modeling",
      description:
        "Captures dynamic relationships between cointegrated cryptocurrency pairs.",
    },
    {
      icon: <Box className="w-8 h-8" />,
      title: "State-Space Model",
      description:
        "Incorporates real-time parameter updates for market prediction.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Trading Strategy",
      description:
        "Exploits mean-reverting behavior for profitable trading opportunities.",
    },
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: "Statistical Testing",
      description:
        "Utilized the Augmented Dickey-Fuller (ADF) test for cointegration validation.",
    },
    {
      icon: <AreaChart className="w-8 h-8" />,
      title: "Back-Testing",
      description:
        "Demonstrated a 22.71% profit over 408 days with optimized parameters.",
    },
  ];
  return (
    <div className="flex flex-col w-full justify-between xl:gap-10 2xl:gap-0">
      {/* Text Section */}
      <div className="flex flex-col gap-6 lg:gap-16">
        <h2 className="text-[#CCDAF1] text-3xl font-['Outfit'] font-medium">
          KEY FEATURES
        </h2>
        <p className="text-[18px] md:text-[18px] xl:text-[20px] 2xl:text-[24px] font-light text-[#8794A9] leading-relaxed"></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16 w-full">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="text-[#8794A9]">{feature.icon}</div>
              <h3 className="text-white text-2xl font-medium">
                {feature.title}
              </h3>
            </div>
            <p className="text-[#8794A9] text-[20px] font-light leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
