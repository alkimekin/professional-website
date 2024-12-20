"use client";

import React, { useState } from "react";
import ProjectCard from "./project-card";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  skills: string[];
  imageUrl: string;
}

interface ProjectsProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ projects, onProjectClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 < projects.length ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : projects.length - 1));
  };

  const getVisibleProjects = () => {
    const visibleProjects = [];
    for (let i = -1; i <= 2; i++) {
      const index = (currentIndex + i + projects.length) % projects.length;
      visibleProjects.push({ ...projects[index], index });
    }
    return visibleProjects;
  };

  return (
    <div className="flex flex-col mt-8 w-full relative space-y-10">
      <h2 className="text-[#CCDAF1] text-3xl font-['Outfit'] font-medium mb-6">
        PROJECTS
      </h2>

      <div className="flex items-center justify-center overflow-hidden px-12 mx-16">
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10  p-2  text-white rounded-full  transition"
          aria-label="Previous project"
        >
          <ChevronLeft size={32} />
        </button>
        <div className="flex gap-4 justify-center items-center ">
          {getVisibleProjects().map((project, index) => (
            <div
              key={project.index}
              className={`flex-shrink-0 w-[280px] lg:w-[360px] xl:w-[380px] transition-all duration-300 ${
                index === 0 || index === 3
                  ? "opacity-50 scale-90"
                  : "opacity-100 scale-100"
              }`}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                tags={project.skills}
                onClick={() => onProjectClick(project)}
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 z-10 p-2 text-white rounded-full transition"
          aria-label="Next project"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

export default Projects;
