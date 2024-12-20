"use client";
import React from "react";
import Footer from "@/components/footer";

import ProjectOverview from "@/components/erp-platform/project-overview";
import Header from "@/components/erp-platform/header";
import KeyFeatures from "@/components/erp-platform/key-features";
import TechStack from "@/components/erp-platform/tech-stack";

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
          {/* <ProjectDemo /> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
