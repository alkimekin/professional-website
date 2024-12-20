import React from "react";

import { Cpu, Network, Braces, GitBranch, Workflow } from "lucide-react";

const KeyFeatures: React.FC = () => {
  const features = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "System Architecture",
      description:
        "Designed and implemented scalable microservices architecture using Docker and Kubernetes.",
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Network Infrastructure",
      description:
        "Built robust networking layers with load balancing and service discovery capabilities.",
    },
    {
      icon: <Braces className="w-8 h-8" />,
      title: "API Integration",
      description:
        "Developed comprehensive API integrations with third-party services and internal systems.",
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Version Control",
      description:
        "Implemented advanced Git workflows with automated CI/CD pipelines and deployment strategies.",
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Workflow Automation",
      description:
        "Created automated workflows for testing, deployment, and monitoring systems.",
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
