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
          This ERP platform streamlines storage management for multi-level
          warehouse environments, enabling businesses to efficiently organize,
          fetch, and update storage units. The solution integrates robust APIs
          and a modern frontend interface to deliver a seamless user experience.
        </p>
      </div>
    </div>
  );
};

export default ProjectOverview;
