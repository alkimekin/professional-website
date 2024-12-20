import React from "react";

import {
  FileText,
  Server,
  Database,
  Globe,
  Box,
  List,
  Bitcoin,
} from "lucide-react";

const TechStack: React.FC = () => {
  const technologies = [
    [
      { name: "TypeScript", icon: <FileText className="w-8 h-8" /> },
      { name: "ExpressJS", icon: <Server className="w-8 h-8" /> },
      { name: "Prisma", icon: <Database className="w-8 h-8" /> },
      { name: "NextJS", icon: <Globe className="w-8 h-8" /> },
    ],
    [
      { name: "NodeJS", icon: <Box className="w-8 h-8" /> },
      { name: "BullMQ", icon: <List className="w-8 h-8" /> },
      { name: "Binance API", icon: <Bitcoin className="w-8 h-8" /> },
    ],
  ];

  return (
    <div className="flex flex-col w-full justify-between xl:gap-10 2xl:gap-0">
      {/* Text Section */}
      <div className="flex flex-col gap-6 lg:gap-16">
        <h2 className="text-[#CCDAF1] text-3xl font-['Outfit'] font-medium">
          TECH STACK
        </h2>
        <p className="text-[18px] md:text-[18px] xl:text-[20px] 2xl:text-[24px] font-light text-[#8794A9] leading-relaxed"></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-8 w-full">
        {technologies.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-8">
            {column.map((tech, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="text-[#8794A9]">{tech.icon}</div>
                <span className="text-white text-2xl font-medium">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
