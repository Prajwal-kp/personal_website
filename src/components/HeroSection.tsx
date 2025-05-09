import React from "react";
import { Download, ArrowRight } from "lucide-react";
import { useTypewriter } from "../hooks/useTypewriter";
import prajwal from "../assets/prajwal.jpg";
import resume from "../assets/resume.pdf";
import azure500 from "../assets/azure500.webp";
import azure104 from "../assets/azure104.webp";
import azure900 from "../assets/azure900.png";
import cnsp from "../assets/cnsp.png";
import apisec from "../assets/apisec.png";

const HeroSection: React.FC = () => {
  const valueProposition =
    "Securing cloud environments with proactive threat hunting and incident response strategies.";
  const { displayText } = useTypewriter({
    text: valueProposition,
    speed: 70,
    delay: 1000,
  });

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-12 md:pt-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile image */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-xl">
              <img
                src={prajwal}
                alt="Prajwal Kumar Pandey"
                className="w-full h-full object-cover object-[100%_20%]"
              />
              <div className="absolute inset-0 bg-blue-600 dark:bg-blue-500 opacity-10 "></div>
            </div>
          </div>

          {/* Hero content */}
          <div className="w-full md:w-3/5 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
              Prajwal Kumar Pandey
            </h1>

            <h2 className="text-xl md:text-2xl font-medium mb-6 text-blue-600 dark:text-blue-400">
              Security Engineer
            </h2>

            <div className="min-h-[80px] mb-8">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                {displayText}
                <span className="inline-block w-0.5 h-5 ml-1 bg-blue-600 dark:bg-blue-400 animate-blink"></span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
              <a
                href={resume}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-full px-4">
          <div className="flex flex-wrap justify-center items-center gap-9 mt-9">
            <img
              src={azure500}
              alt="Azure 500"
              className="h-20 lg:h-24 xl:h-28"
            />
            <img
              src={azure104}
              alt="Azure 104"
              className="h-20 lg:h-24 xl:h-28"
            />
            <img
              src={azure900}
              alt="Azure 900"
              className="h-20 lg:h-24 xl:h-28"
            />
            <img
              src={cnsp}
              alt="Certified Network Security Practitioner"
              className="h-20 lg:h-24 xl:h-28"
            />
            <img
              src={apisec}
              alt="API Security"
              className="h-20 lg:h-24 xl:h-28"
            />
          </div>
        </div>

        <div className=" mt-[7rem] md:hidden">
          <div className="flex flex-col ">
            <div className="flex justify-center space-x-8">
              <img src={azure900} alt="Azure 900" className="h-28" />
              <img src={azure104} alt="Azure 104" className="h-28" />
            </div>
            <img
              src={azure500}
              alt="Azure 500"
              className="h-36 object-contain"
            />
            <div className="flex justify-center space-x-8">
              <img
                src={cnsp}
                alt="Certified Network Security Pratitioner"
                className="h-28"
              />
              <img src={apisec} alt="API Security" className="h-28" />
              ``
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
