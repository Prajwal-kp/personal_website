import React from "react";
import {
  ShieldCheck,
  Network,
  Code,
  Server,
  PenTool as Tool,
} from "lucide-react";
import { skills } from "../data";

const AboutSection: React.FC = () => {
  const groupedSkills = {
    cloud: skills.filter((skill) => skill.category === "cloud"),
    network: skills.filter((skill) => skill.category === "network"),
    web: skills.filter((skill) => skill.category === "web"),
    tools: skills.filter((skill) => skill.category === "tools"),
    other: skills.filter((skill) => skill.category === "other"),
  };

  return (
    <section id="about" className="py-20 relative bg-slate-50 dark:bg-[#0a0f18] border-t border-slate-200 dark:border-slate-800">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white font-mono tracking-tight uppercase">
            <span className="text-cyan-500">{'>'}</span> System.Profile
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
        </div>

        {/* Summary & Expertise */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Summary */}
          <div>
            <h3 className="text-xl font-mono mb-6 text-slate-800 dark:text-cyan-400 uppercase tracking-widest border-b border-slate-200 dark:border-slate-800 pb-2">
              Professional Summary
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I am a Security Engineer with expertise in cloud-native security
              tools, vulnerability analysis, threat monitoring, and incident
              response. My goal is to help organizations build robust security
              postures through proactive security measures and effective
              incident handling strategies.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              With a strong background in Microsoft security solutions, network
              security, and ethical hacking, I specialize in identifying,
              analyzing, and mitigating security threats across diverse IT
              ecosystems. I am passionate about staying ahead of evolving cyber
              threats and implementing cutting-edge security solutions.
            </p>
          </div>

          {/* Expertise Icons */}
          <div>
            <h3 className="text-xl font-mono mb-6 text-slate-800 dark:text-cyan-400 uppercase tracking-widest border-b border-slate-200 dark:border-slate-800 pb-2">
              Key Expertise Areas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: ShieldCheck,
                  title: "Cloud Security",
                  description:
                    "Microsoft Sentinel, MS XDR/EDR, Microsoft Defender for Cloud",
                },
                {
                  icon: Network,
                  title: "Network Security",
                  description:
                    "Firewalls, Security Event Logs, Threat Detection",
                },
                {
                  icon: Code,
                  title: "Web Application Security",
                  description: "OWASP TOP 10, DVWA, Burp Suite, Nmap",
                },
                {
                  icon: Tool,
                  title: "Tools & Automation",
                  description: "Git, Docker, Powershell, Python",
                },
              ].map(({ icon: Icon, title, description }, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                      {title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills List Only (No Progress) */}
        <div className="mt-16">
          <h3 className="text-2xl font-mono mb-8 text-center text-slate-900 dark:text-white uppercase tracking-widest">
            <span className="text-cyan-500">~/</span> Technical_Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <div
                key={category}
                className="bg-white/70 dark:bg-[#0f172a]/80 backdrop-blur-md rounded-xl border border-slate-200 dark:border-slate-800 shadow-lg p-6 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-shadow"
              >
                <h4 className="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200 capitalize flex items-center gap-2">
                  {category === "cloud" && (
                    <>
                      <Server className="w-5 h-5 text-blue-600 dark:text-blue-400" />{" "}
                      Cloud Security
                    </>
                  )}
                  {category === "network" && (
                    <>
                      <Network className="w-5 h-5 text-blue-600 dark:text-blue-400" />{" "}
                      Network Security
                    </>
                  )}
                  {category === "web" && (
                    <>
                      <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />{" "}
                      Web Security
                    </>
                  )}
                  {category === "tools" && (
                    <>
                      <Tool className="w-5 h-5 text-blue-600 dark:text-blue-400" />{" "}
                      Tools & Technologies
                    </>
                  )}
                  {category === "other" && (
                    <>
                      <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />{" "}
                      Operating Systems
                    </>
                  )}
                </h4>
                <ul className="list-disc list-inside space-y-2">
                  {categorySkills.map((skill, index) => (
                    <li
                      key={index}
                      className="text-gray-700 dark:text-gray-300"
                    >
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
