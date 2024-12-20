import { Github, Globe } from "lucide-react";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex flex-row w-full items-center justify-between xl:gap-10 2xl:gap-0">
      {/* Text Section */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col w-[80%]">
          <div className="flex flex-row items-center gap-4">
            <div className="text-[64px] font-medium">ERP Platform</div>
            <a
              href="https://github.com/alkimekin/logistics-erp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8794A9] pt-2"
            >
              <Github className="w-8 h-8 hover:text-[#CCDAF1] transition" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 text-[32px] font-light">
          Efficient Storage Management for Multi-Level Warehouses
        </div>

        {/* Icons Section */}
        {/* <div className="flex gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <Github className="w-8 h-8 hover:text-[#CCDAF1] transition" />
          </a>
          <a
            href="https://iftalgo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <Globe className="w-8 h-8 hover:text-[#CCDAF1] transition" />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
