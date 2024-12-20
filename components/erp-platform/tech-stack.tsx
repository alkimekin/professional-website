import React from "react";

import { FileText, Server, Database, Globe } from "lucide-react";

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
    <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
    <path d="M12 21.35a2.06 2.06 0 0 1-1-.2c-.37-.17-2.12-1.06-3.77-4.12a14.9 14.9 0 0 1-1.68-4.27 14.9 14.9 0 0 1 0-5.54A14.9 14.9 0 0 1 7.23 3a9.87 9.87 0 0 1 3.77-4.12 2.06 2.06 0 0 1 2 0c.37.17 2.12 1.06 3.77 4.12a14.9 14.9 0 0 1 1.68 4.27 14.9 14.9 0 0 1 0 5.54 14.9 14.9 0 0 1-1.68 4.27c-1.65 3.06-3.4 4-3.77 4.12a2.06 2.06 0 0 1-1 .2Z" />
    <path d="M12 16.5a35.88 35.88 0 0 1-4.88-6 35.88 35.88 0 0 1-2.9-7.2 35.88 35.88 0 0 1 2.9-7.2A35.88 35.88 0 0 1 12 7.5a35.88 35.88 0 0 1 4.88-6 35.88 35.88 0 0 1 2.9-7.2 35.88 35.88 0 0 1-2.9-7.2A35.88 35.88 0 0 1 12 16.5Z" />
  </svg>
);

const ReduxIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
    <path d="M16.63 16.63c.9-.9.9-2.37 0-3.27-.9-.9-2.37-.9-3.27 0-.9.9-.9 2.37 0 3.27.9.9 2.37.9 3.27 0z" />
    <path d="M12 21.35a9.35 9.35 0 1 1 0-18.7 9.35 9.35 0 0 1 0 18.7zm0-16.7a7.35 7.35 0 1 0 0 14.7 7.35 7.35 0 0 0 0-14.7z" />
    <path d="M12 7.35a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
  </svg>
);

const TechStack: React.FC = () => {
  const technologies = [
    [
      { name: "TypeScript", icon: <FileText className="w-8 h-8" /> },
      { name: "ExpressJS", icon: <Server className="w-8 h-8" /> },
      { name: "Prisma", icon: <Database className="w-8 h-8" /> },
    ],
    [
      { name: "React", icon: <ReactIcon /> },
      { name: "Redux", icon: <ReduxIcon /> },
      { name: "NextJS", icon: <Globe className="w-8 h-8" /> },
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
