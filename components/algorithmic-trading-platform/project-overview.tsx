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
          This platform enables users to subscribe to machine learning-based
          auto trading algorithms for managing cryptocurrency exchange accounts.
          It simplifies trading operations by automating processes, enhancing
          decision-making, and improving efficiency.
        </p>
      </div>
    </div>
  );
};

export default ProjectOverview;
