import React from "react";

const ProjectOverview: React.FC = () => {
  return (
    <div className="flex flex-row w-full items-center justify-between xl:gap-10 2xl:gap-0">
      {/* Text Section */}
      <div className="flex flex-col gap-6 lg:gap-4">
        <h2 className="text-[#CCDAF1] text-3xl font-['Outfit'] font-medium">
          PROJECT OVERVIEW
        </h2>
        <p className="text-[18px] md:text-[18px] xl:text-[20px] 2xl:text-[24px] font-light text-[#8794A9] leading-relaxed">
          This Bitcoin Wallet Tool provides a secure and efficient way to manage
          Bitcoin transactions, interact with the Bitcoin blockchain, and access
          wallet functionalities. Designed with a focus on cryptographic
          security and multi-threading, the tool ensures reliability and
          performance for real-time Bitcoin operations.
        </p>
      </div>
    </div>
  );
};

export default ProjectOverview;
