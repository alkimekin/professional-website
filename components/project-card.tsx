"use client";

import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  onClick: () => void;
}

const skillColors: { [key: string]: string } = {
  TypeScript: "bg-[#A263B1]",
  ExpressJS: "bg-[#4F4292]",
  Prisma: "bg-[#4F4292]",
  BullMQ: "bg-[#4F4292]",
  "Node.js": "bg-[#4F4292]",
  "Next.js": "bg-[#4F4292]",
  Redux: "bg-[#4F4292]",
  "C++": "bg-[#A263B1]",
  "JSON-RPC": "bg-[#5288C5]",
  Cryptography: "bg-[#284089]",
  SQL: "bg-[#A263B1]",
  "Multi-threading": "bg-[#284089]",
  "Pairs trading": "bg-[#284089]",
  "State-space modeling": "bg-[#284089]",
  Fastify: "bg-[#4F4292]",
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  tags,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="group relative flex flex-col w-full h-[400px] rounded-[10px] cursor-pointer overflow-hidden transition-all duration-300 border border-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_4px_4px_0px_rgba(0,0,0,0.25)]"
      style={{
        background: "linear-gradient(180deg, #BF7BD0 0%, #3A1144 100%)",
      }}
    >
      {/* Content Container */}
      <div className="relative flex flex-col h-full z-10 p-[60px]">
        {/* Title */}
        <div className="flex items-start">
          <h2 className="text-[40px] font-semibold text-[#E5E5E5] font-['Outfit'] max-w-[274px]">
            {title}
          </h2>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-x-10 mt-auto">
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
  );
};

export default ProjectCard;
