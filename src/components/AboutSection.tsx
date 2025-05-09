import React from 'react';
import { ShieldCheck, Network, Code, Server, PenTool as Tool } from 'lucide-react';
import { skills } from '../data';

const AboutSection: React.FC = () => {
  // Group skills by category
  const groupedSkills = {
    cloud: skills.filter(skill => skill.category === 'cloud'),
    network: skills.filter(skill => skill.category === 'network'),
    web: skills.filter(skill => skill.category === 'web'),
    tools: skills.filter(skill => skill.category === 'tools'),
    other: skills.filter(skill => skill.category === 'other')
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Professional Summary */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Professional Summary
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I am a Security Engineer with expertise in cloud-native security tools, vulnerability analysis, 
              threat monitoring, and incident response. My goal is to help organizations build robust security 
              postures through proactive security measures and effective incident handling strategies.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              With a strong background in Microsoft security solutions, network security, and ethical hacking, 
              I specialize in identifying, analyzing, and mitigating security threats across diverse IT ecosystems. 
              I am passionate about staying ahead of evolving cyber threats and implementing cutting-edge security solutions.
            </p>
          </div>

          {/* Core Expertise */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Key Expertise Areas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                    Cloud Security
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Microsoft Sentinel, MS XDR/EDR, Microsoft Defender for Cloud
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <Network className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                    Network Security
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Firewalls, Security Event Logs, Threat Detection
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                    Web Application Security
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    OWASP TOP 10, DVWA, Burp Suite, Nmap
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <Tool className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                    Tools & Automation
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Git, Docker, Powershell, Python
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Graph */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <div key={category} className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
                <h4 className="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200 capitalize">
                  {category === 'cloud' && (
                    <div className="flex items-center gap-2">
                      <Server className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span>Cloud Security</span>
                    </div>
                  )}
                  {category === 'network' && (
                    <div className="flex items-center gap-2">
                      <Network className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span>Network Security</span>
                    </div>
                  )}
                  {category === 'web' && (
                    <div className="flex items-center gap-2">
                      <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span>Web Security</span>
                    </div>
                  )}
                  {category === 'tools' && (
                    <div className="flex items-center gap-2">
                      <Tool className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span>Tools & Technologies</span>
                    </div>
                  )}
                  {category === 'other' && (
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span>Operating Systems</span>
                    </div>
                  )}
                </h4>
                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-gray-500 dark:text-gray-400">{skill.level}/5</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                        <div 
                          className="h-full bg-blue-600 dark:bg-blue-500 rounded-full"
                          style={{ width: `${(skill.level / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;