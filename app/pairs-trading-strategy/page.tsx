"use client";
import React from "react";
import Footer from "@/components/footer";
import Header from "@/components/pairs-trading-strategy/header";
import ProjectOverview from "@/components/pairs-trading-strategy/project-overview";
import KeyFeatures from "@/components/pairs-trading-strategy/key-features";

const App: React.FC = () => {
  return (
    <div className="bg-[#000238] min-h-screen text-white flex flex-col">
      {/* Main Content */}
      <div className="flex flex-col items-center flex-grow">
        <div className="w-[60%] mt-32 flex flex-col items-start gap-32">
          <Header />
          <ProjectOverview />
          <KeyFeatures />
          {/* <TechStack /> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
