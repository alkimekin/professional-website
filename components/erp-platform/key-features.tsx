import React from "react";

import { Database, Lock, Layout, Gauge, Radio } from "lucide-react";

const KeyFeatures: React.FC = () => {
  const features = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "RESTful API Development",
      description:
        "Designed RESTful APIs for CRUD operations on storage units using Express.js and Prisma.",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Authentication & Authorization",
      description:
        "Implemented authentication and authorization for secure multi-user access.",
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Interactive Frontend",
      description:
        "Developed a responsive and interactive frontend with Next.js, Redux, and TypeScript.",
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Performance Optimization",
      description:
        "Optimized database queries to ensure high performance in multi-level storage systems.",
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Real-time Updates",
      description: "Supported real-time updates for warehouse operations.",
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
