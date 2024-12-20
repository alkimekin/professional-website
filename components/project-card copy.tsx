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
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, tags, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative flex flex-col w-full h-[400px] rounded-lg cursor-pointer overflow-hidden transition-all duration-300"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff9ecd]/40 via-white/30 to-[#6b4dff]/40 blur-2xl group-hover:opacity-75 transition-opacity duration-300" />

      {/* Glass Effect Overlay */}
      <div className="absolute inset-0 bg-[#1E1930]/70 backdrop-blur-sm" />

      {/* Content Container */}
      <div className="relative flex flex-col h-full z-10">
        {/* Top Row (Title) */}
        <div className="flex items-center justify-center h-[25%]">
          <span className="text-center text-white font-medium text-[28px]">
            {title}
          </span>
        </div>

        {/* Middle Row (Image) */}
        <div className="flex items-center justify-center h-[50%] px-6"></div>

        {/* Bottom Row (Tags) */}
        <div className="flex flex-wrap items-center justify-center px-6 pb-2 gap-x-4 h-[25%]">
          {tags.map((tag, index) => (
            <button
              key={index}
              className={`px-4 py-1 text-sm font-medium text-white rounded-full shadow-md hover:opacity-90 transition-all duration-300 ${
                skillColors[tag] || "bg-gray-500"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
