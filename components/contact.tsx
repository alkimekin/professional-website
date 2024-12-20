import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 w-full mt-16">
      <h2 className="text-[#CCDAF1] text-3xl font-['Outfit'] font-medium">
        CONTACT ME
      </h2>
      <div className="flex flex-row space-x-32 w-full">
        <a
          href="mailto:aea85@cornell.edu"
          className="flex items-center gap-0 text-[#8794A9] text-lg transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-icons-outlined"></span>
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/alkim-arguz"
          className="flex items-center gap-2 text-[#8794A9] text-lg transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-icons-outlined"></span>
          LinkedIn
        </a>
        <a
          href="https://github.com/alkimekin"
          className="flex items-center gap-2 text-[#8794A9] text-lg transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-icons-outlined"></span>
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Contact;
