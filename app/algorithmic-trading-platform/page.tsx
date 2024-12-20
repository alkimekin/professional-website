"use client";

import Footer from "@/components/footer";
import Header from "@/components/algorithmic-trading-platform/header";
import React from "react";
import ProjectOverview from "@/components/algorithmic-trading-platform/project-overview";
import KeyFeatures from "@/components/algorithmic-trading-platform/key-features";
import TechStack from "@/components/algorithmic-trading-platform/tech-stack";
import ProjectDemo from "@/components/algorithmic-trading-platform/project-demo";

const App: React.FC = () => {
  return (
    <div className="bg-[#000238] min-h-screen text-white flex flex-col">
      {/* Main Content */}
      <div className="flex flex-col items-center flex-grow">
        <div className="w-[60%] mt-32 flex flex-col items-start gap-32">
          <Header />
          <ProjectOverview />
          <KeyFeatures />
          <TechStack />
          <ProjectDemo />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
