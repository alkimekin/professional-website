import React from "react";
import ExperienceEllipse from "./experience-ellipse";

const Experience: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 w-full">
      <h2 className="text-[#CCDAF1] text-3xl font-['Outfit'] font-medium">
        EXPERIENCE & EDUCATION
      </h2>
      <div className="relative">
        <div className="flex items-start gap-6 mb-16">
          <ExperienceEllipse className="z-10" />
          <div className="flex flex-col">
            <h3 className="text-white text-xl font-medium w-full">
              IFT Software
            </h3>
            <div className="flex items-center gap-4">
              <p className="text-[#8794A9] text-sm">
                Part-time Full Stack Developer
              </p>
              <p className="text-[#8794A9] text-sm">Jun 2022 – Present</p>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-4 mb-10">
          <ExperienceEllipse />
          <div>
            <h3 className="text-white text-xl font-medium">
              Cornell University
            </h3>
            <div className="flex items-center gap-4">
              <p className="text-[#8794A9] text-sm">Teaching Assistant</p>
              <p className="text-[#8794A9] text-sm">August 2022 – Present</p>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <ExperienceEllipse />
          <div>
            <h3 className="text-white text-xl font-medium">
              Cornell University
            </h3>
            <div className="flex items-center gap-4">
              <p className="text-[#8794A9] text-sm">CS & ECE</p>
              <p className="text-[#8794A9] text-sm">September 2021 – Present</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
