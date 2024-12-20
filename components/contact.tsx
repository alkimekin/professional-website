import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 w-full mt-16">
      <h2 className="text-[#CCDAF1] text-3xl font-['Outfit'] font-medium">
        CONTACT ME
      </h2>
      <div className="flex flex-row space-x-32 w-full">
        <a
          href="mailto:aea85@cornell.edu"
          className="flex items-center gap-4 text-[#8794A9] text-[18px] 2xl:text-[24px] transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail className="w-6 h-6" />
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/alkim-arguz"
          className="flex items-center gap-2 text-[#8794A9] text-[18px] 2xl:text-[24px] transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-6 h-6" />
          LinkedIn
        </a>
        <a
          href="https://github.com/alkimekin"
          className="flex items-center gap-2 text-[#8794A9] text-[18px] 2xl:text-[24px] transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-6 h-6" />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Contact;
