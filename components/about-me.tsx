import React from "react";

const AboutMe: React.FC = () => {
  return (
    <div className="flex flex-row w-full items-center justify-between xl:gap-10 2xl:gap-0">
      {/* Text Section */}
      <div className="flex flex-col gap-6 lg:gap-4">
        <h2 className="text-[#CCDAF1] text-3xl font-['Outfit'] font-medium">
          ABOUT ME
        </h2>
        <p className="text-[18px] md:text-[18px] xl:text-[20px] 2xl:text-[24px] font-light text-[#8794A9] leading-relaxed">
          I am a passionate software developer and full-stack engineer with
          expertise in creating scalable web applications and backend systems.
          Currently pursuing a dual major in CS and ECE at Cornell, I specialize
          in using modern technologies like TypeScript, React, and Node.js to
          solve real-world problems.
        </p>
        <p className="text-[18px] md:text-[18px] xl:text-[20px] 2xl:text-[24px] font-light text-[#8794A9] eading-relaxed">
          Beyond coding, I enjoy exploring emerging technologies and
          contributing to open-source projects. When I’m not programming, you
          can find me immersed in photography or learning about algorithmic
          trading.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
