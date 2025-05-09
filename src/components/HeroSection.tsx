import React from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';

const HeroSection: React.FC = () => {
  const valueProposition = "Securing cloud environments with proactive threat hunting and incident response strategies.";
  const { displayText } = useTypewriter({ 
    text: valueProposition,
    speed: 70,
    delay: 1000
  });

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile image */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-xl">
              <img 
                src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Prajwal Kumar Pandey" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-600 dark:bg-blue-500 opacity-10"></div>
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
                href="#" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
              >
                <Download size={20} />
                Download Resume
              </a>
              
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium transition-colors"
              >
                View Projects
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Key certifications or recognitions */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Microsoft Certified</h3>
            <p className="text-gray-600 dark:text-gray-300">Azure Security Engineer Associate (Az-500)</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">46.43% Improvement</h3>
            <p className="text-gray-600 dark:text-gray-300">Reduced incident response time at Stellar Computer Systems</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Cloud Security Expert</h3>
            <p className="text-gray-600 dark:text-gray-300">Specialized in Microsoft Sentinel, XDR/EDR, and Defender for Cloud</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;