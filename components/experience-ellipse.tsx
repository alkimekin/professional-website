import React from "react";

// Define props type
interface ExperienceEllipseProps {
  className?: string; // Optional prop, if `className` is not always provided
}

const ExperienceEllipse: React.FC<ExperienceEllipseProps> = ({ className }) => {
  return (
    <div className={className}>
      <svg
        width="35"
        height="34"
        viewBox="0 0 35 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_i_203_27)">
          <path
            d="M35 17C35 26.3888 27.165 34 17.5 34C7.83502 34 0 26.3888 0 17C0 7.61116 7.83502 0 17.5 0C27.165 0 35 7.61116 35 17Z"
            fill="white"
            fillOpacity="0.01"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_203_27"
            x="0"
            y="0"
            width="35"
            height="34"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_203_27"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default ExperienceEllipse;
