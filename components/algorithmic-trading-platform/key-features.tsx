import React from "react";

import { Code2, Database, Clock, Wallet } from "lucide-react";

const KeyFeatures: React.FC = () => {
  const features = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Microservices",
      description:
        "Designed for user authentication, strategy management, subscription handling, and payment services.",
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "REST API Development",
      description: "Built using TypeScript, ExpressJS, and Prisma.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Asynchronous Task Management",
      description:
        "Implemented periodic trade execution, processing of strategy signals, and monitoring incoming payments using BullMQ.",
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Binance API Client",
      description: "Developed in Node.js and published to the npm registry.",
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
