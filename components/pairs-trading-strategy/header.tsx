import { Github } from "lucide-react";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex flex-row w-full items-center justify-between xl:gap-10 2xl:gap-0">
      {/* Text Section */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col w-[100%]">
          <div className="text-[64px] font-medium">Pairs-Trading</div>

          <div className="flex flex-row items-center gap-4">
            <div className="text-[64px] font-medium">Strategy Development</div>
            <a
              href="https://github.com/alkimekin/exchange-wallets"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8794A9] pt-2"
            >
              <Github className="w-8 h-8 hover:text-[#CCDAF1] transition" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 text-[32px] font-light">
          Harnessing the Power of Kalman Filters to Optimize Cryptocurrency
          Trading
        </div>
      </div>
    </div>
  );
};

export default Header;
