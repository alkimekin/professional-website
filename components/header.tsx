import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex flex-row w-full items-center justify-between xl:gap-10 2xl:gap-0">
      {/* Text Section */}
      <div className="flex flex-col gap-10 lg:gap-0 lg:pt-10 xl:pt-0 ">
        <h1 className="text-[48px] md:text-[48px] lg:text-[48px] xl:text-[64px] 2xl:text-[84px] font-medium">
          Alkim Arguz
        </h1>
        <div className="flex flex-col items-start gap-6 lg:gap-6 2xl:gap-10">
          <div className="flex flex-col items-start">
            <p className="text-[24px] 2xl:text-[28px] font-thin">
              CS & ECE Major @ Cornell
            </p>
            <p className="text-[24px] 2xl:text-[28px] font-thin">
              Full Stack Developer @ IFT Software
            </p>
          </div>

          <button className="px-6 py-3 bg-[#A263B1] text-white text-[24px] lg:text-[20px] xl:text-[24px] 2xl:text-[24px] font-bold rounded-xl cursor-pointer">
            Resume
          </button>
        </div>
      </div>

      {/* Headshot Section */}
      <div className="hidden lg:flex items-center justify-center w-[35%] pb-0">
        <img
          src="https://via.placeholder.com/300" // Placeholder image
          alt="Headshot"
          className="w-full 2xl:w-[90%] rounded-full object-cover "
        />
      </div>
    </div>
  );
};

export default Header;
