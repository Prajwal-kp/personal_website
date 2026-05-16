import React from "react";
import { Briefcase, Download } from "lucide-react";
import { experiences } from "../data";

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] opacity-5 pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-cyan-500 dark:bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)] border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Company/Period Section */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-16 text-left"
                      : "md:pl-16 text-right"
                  }`}
                >
                  <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-2">
                      <Briefcase className="w-5 h-5 text-cyan-600 dark:text-cyan-400 font-mono text-sm" />
                      {experience.company}
                    </h3>
                    <p className="text-cyan-600 dark:text-cyan-400 font-mono text-sm font-medium">
                      {experience.period}
                    </p>
                  </div>
                </div>

                {/* Role/Achievements Section */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-16" : "md:pr-16"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {experience.role}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      {experience.description}
                    </p>
                    <h5 className="text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-400 mb-3">
                      Key Achievements
                    </h5>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="relative pl-4">
                          <span className="before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-blue-500">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
