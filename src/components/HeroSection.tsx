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
      className="min-h-screen relative flex items-center pt-12 md:pt-0 bg-slate-50 dark:bg-[#0a0f18] overflow-hidden"
    >
      {/* Cyber Background elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 dark:opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Profile image (Removed) */}
          {/*
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden border border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.3)] bg-[#0f172a]/80 backdrop-blur-sm transform rotate-45">
              <div className="-rotate-45 w-full h-full flex items-center justify-center">
              <img
                src={prajwal}
                alt="Prajwal Kumar Pandey"
                className="w-[140%] h-[140%] max-w-none object-cover object-[100%_20%]"
              />
              </div>
              <div className="absolute inset-0 bg-cyan-600 dark:bg-cyan-500 opacity-20 mix-blend-overlay"></div>
            </div>
          </div>
          */}

          {/* Hero content */}
          <div className="w-full md:w-3/4 text-center md:text-left flex flex-col items-center md:items-start mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 text-xs font-mono tracking-widest mb-6 border border-cyan-200 dark:border-cyan-800/50 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span> SYSTEM.ONLINE
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-900 dark:text-white tracking-tight font-mono">
              Prajwal Kumar Pandey
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-mono tracking-wide">
              &gt; Security Engineer
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
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-mono font-semibold rounded-lg transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] uppercase tracking-wider relative overflow-hidden group"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
