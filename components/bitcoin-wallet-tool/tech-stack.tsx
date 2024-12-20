import React from "react";

import { Database, Lock } from "lucide-react";

const CppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
    <path d="M10.5 15.97l.41 2.44c-.26.14-.68.27-1.24.39-.57.13-1.24.2-2.01.2-2.21-.04-3.87-.7-4.98-1.96C1.56 15.77 1 14.16 1 12.21c.05-2.31.72-4.08 2-5.32C4.32 5.64 5.96 5 7.94 5c.75 0 1.4.07 1.94.19s.94.25 1.2.4l-.58 2.49-1.06-.34c-.4-.1-.86-.15-1.39-.15-1.16-.01-2.12.36-2.87 1.1-.76.73-1.15 1.85-1.18 3.34 0 1.36.37 2.42 1.08 3.2.71.77 1.71 1.17 2.99 1.18l1.33-.12c.43-.08.79-.19 1.1-.32z" />
    <path d="M11 11h2v2h-2v-2zm-2 2h2v2H9v-2zm4 0h2v2h-2v-2zm4-2h2v2h-2v-2zm-4-2h2v2h-2V9zm4 0h2v2h-2V9z" />
  </svg>
);

const JsonRpcIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
    <path d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm1 2v16h14V4H5zm2 4h10v2H7V8zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
  </svg>
);

const TechStack: React.FC = () => {
  const technologies = [
    [
      { name: "C++", icon: <CppIcon /> },
      { name: "JSON-RPC", icon: <JsonRpcIcon /> },
    ],
    [
      { name: "Cryptography Libraries", icon: <Lock className="w-8 h-8" /> },
      { name: "SQL", icon: <Database className="w-8 h-8" /> },
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
