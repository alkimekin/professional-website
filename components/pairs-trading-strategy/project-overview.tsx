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
          This study applies the Kalman Filter to pairs trading in the
          cryptocurrency market, focusing on exploiting the mean-reverting
          behavior of cointegrated cryptocurrency pairs. By developing a
          state-space model with dynamically updated parameters, we effectively
          manage risk and optimize profitability in a volatile market.
        </p>
      </div>
    </div>
  );
};

export default ProjectOverview;
