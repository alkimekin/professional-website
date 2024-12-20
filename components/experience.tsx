import React from "react";
import ExperienceEllipse from "./experience-ellipse";

const experiences = [
  {
    company: "IFT Software",
    position: "Full Stack Developer",
    duration: "Jun 2022 – Present",
  },
  {
    company: "Cornell University",
    position: "Teaching Assistant",
    duration: "August 2022 – Present",
  },
  {
    company: "Cornell University",
    position: "CS & ECE",
    duration: "September 2021 – Present",
  },
];

const Experience: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 w-full">
      <h2 className="text-[#CCDAF1] text-3xl font-['Outfit'] font-medium">
        EXPERIENCE & EDUCATION
      </h2>
      <div className="relative flex flex-col gap-44">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-start gap-6 z-30">
            <ExperienceEllipse className="pt-2" />
            <div className="flex flex-col gap-2">
              <h3 className="text-white text-[26px] font-medium w-full">
                {exp.position}
              </h3>
              <div className="flex items-center gap-4">
                <p className="text-[#8794A9] text-[18px] 2xl:text-[20px]">
                  {exp.company}
                </p>
                <p className="text-[#8794A9] text-[18px] 2xl:text-[20px]">
                  {exp.duration}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
