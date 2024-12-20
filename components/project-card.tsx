"use client";

import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  title: string;
  tags: string[];
  url: string;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  tags,
  url,
  onClick,
}) => {
  return (
    <Link href={url} className="block">
      <div
        className="flex flex-col w-full h-[400px] rounded-[10px] cursor-pointer overflow-hidden transition-all duration-300 border-solid border-[#000000] border rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_4px_4px_0px_rgba(0,0,0,0.25)] col-span-3 relative cursor-pointer"
        style={{
          background: "linear-gradient(180deg, #BF7BD0 0%, #DFB8E8 100%)",
        }}
      >
        {/* Content Container */}
        <div className="flex flex-col h-full z-10 p-[60px]">
          {/* Title */}
          <div
            className="text-[#000238] text-[40px] font-['Outfit'] font-semibold"
            style={{
              top: "45px",
              height: "150px",
              left: "calc(100% - 344px + 60px)",
              width: "274px",
            }}
          >
            {title}
          </div>

          {/* Tags */}
          <div className="flex gap-x-10 mt-auto justify-between">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-[#000238] text-2xl font-['Outfit'] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
