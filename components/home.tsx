"use client";

import React, { useState } from "react";
import Header from "./header";
import Projects from "./projects";
import Experience from "./experience";
import Contact from "./contact";
import Footer from "./footer";
import Modal from "./modal";
import AboutMe from "./about-me";

interface Project {
  title: string;
  description: string;
  skills: string[];
  imageUrl: string;
}

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Algorithmic Trading Platform",
      description:
        "Built a platform that enables users to subscribe to machine learning-based auto trading algorithms to manage cryptocurrency exchange accounts. Designed and developed backend microservices for user authentication, strategy management, subscription handling, and payment services. Developed REST APIs using TypeScript, ExpressJS, and Prisma. Implemented asynchronous task management using BullMQ for periodic trade execution, processing of strategy signals, and monitoring incoming payments. Developed a Binance API client using Node.js and published it to the npm registry for public use. Focused on comprehensive error handling and testing at every step. Developed the frontend using Next.js and TypeScript.",
      skills: ["NextJS", "Fastify"],
      imageUrl: "/images/algo-trading-platform.png",
    },
    {
      title: "ERP Platform",
      description:
        "Developed a storage management system for a multi-level warehouse environment. Designed and implemented RESTful APIs using ExpressJS and Prisma to efficiently fetch, update, and organize storage units. Developed the frontend using Next.js, Redux, and TypeScript.",
      skills: ["NextJS", "ExpressJS"],
      imageUrl: "",
    },
    {
      title: "Bitcoin Wallet Tool",
      description:
        "Developed a Bitcoin JSON-RPC client to interact with the Bitcoin node for wallet creation, transaction management, and blockchain data access. Built functionality for receiving, signing, and broadcasting transactions using cryptography libraries for secure public/private key management and address generation. Implemented multi-threaded transaction listener to monitor mempool transactions and store them in a database, using mutexes and condition variables for thread synchronization. Designed an SQL query builder to manage database interactions. Developed the entire project in C++.",
      skills: ["C++", "Bitcoin Core"],
      imageUrl: "",
    },
    {
      title: "Trading Strategy Development",
      description:
        "Applied the unscented Kalman Filter to pairs trading to exploit mean-reverting behavior in correlated and cointegrated cryptocurrency pairs. Developed a state-space model with dynamically updated parameters to predict relationships between assets, using real market data for validation. Implemented a systematic trading strategy that effectively managed risk and maximized profitability, achieving a 22.71% profit in USD over 408 days of back-testing.",
      skills: ["Python", "Numpy/Pandas"],
      imageUrl: "",
    },
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="bg-[#000238] min-h-screen text-white flex flex-col">
      {/* Main Content */}
      <div className="flex flex-col items-center flex-grow">
        <div className="w-[60%] mt-32 flex flex-col items-start gap-44">
          <Header />
          <AboutMe />
          <Projects projects={projects} onProjectClick={handleProjectClick} />
          <Experience />
          <Contact />
        </div>
      </div>

      <Footer />

      {/* Modal */}
      {selectedProject && (
        <Modal
          title={selectedProject.title}
          description={selectedProject.description}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default App;
