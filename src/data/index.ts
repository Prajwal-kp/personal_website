import { NavItem, Skill, Experience, Project, Certificate } from "../types";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const skills: Skill[] = [
  { name: "Microsoft Sentinel", level: 5, category: "cloud" },
  { name: "Microsoft XDR/EDR", level: 5, category: "cloud" },
  { name: "Microsoft Defender for Cloud", level: 4, category: "cloud" },
  { name: "Network Security", level: 4, category: "network" },
  { name: "Firewalls", level: 4, category: "network" },
  { name: "Security Event Logs", level: 5, category: "network" },
  { name: "OWASP TOP 10", level: 4, category: "web" },
  { name: "DVWA", level: 3, category: "web" },
  { name: "Burp Suite", level: 4, category: "web" },
  { name: "Nmap", level: 4, category: "web" },
  { name: "Linux", level: 4, category: "other" },
  { name: "Windows", level: 5, category: "other" },
  { name: "Git", level: 4, category: "tools" },
  { name: "Docker", level: 3, category: "tools" },
  { name: "Powershell", level: 4, category: "tools" },
  { name: "Python", level: 4, category: "tools" },
];

export const experiences: Experience[] = [
  {
    company: "DanpheLink",
    role: "Cybersecurity Consultant",
    period: "March 2025 - Present",
    description:
      "Providing expert consultation on cloud security, incident response strategies, and threat intelligence.",
    achievements: [
      "Deliver security consulting services to clients, including SOC, IR and best practice implementation.",
      "Create cybersecurity training content and conduct workshops for diverse audiences.",
      "Led the response to a Redtail brute-force malware attack, managing incident detection, analysis, and remediation processes.",
      "Identified and contained unauthorized SSH access by implementing strict UFW rules and restricting access exclusively to the organization's public IP address.",
      "Conducted a deep-dive investigation, discovering malicious files, unauthorized SSH keys, and modified cron jobs used for persistence.",
    ],
  },
  {
    company: "Stellar Computer Systems",
    role: "Security Engineer – Incident Response",
    period: "August 2024 - January 2025",
    description:
      "Led incident response efforts and enhanced security monitoring capabilities.",
    achievements: [
      "Lead end-to-end incident response and security monitoring in Azure-based environments, utilizing Microsoft Sentinel, XDR/EDR, Entra, and Recorded Future threat intelligence.",
      "Proactively detect, investigate, and mitigate security threats by analyzing SIEM (Microsoft Sentinel), Fortinet, and Palo Alto network logs.",
      "Improved team incident response times by 46.43%, reducing average resolution from 56 to 30 minutes, with personal average under 20 minutes.",
      "Collaborate closely with internal stakeholders and external vendors for incident escalation, containment, remediation, and post-incident reviews.",
      "Develop and enhance Standard Operating Procedures (SOPs) to streamline incident response workflows, ensuring faster and more consistent outcomes.",
    ],
  },
  {
    company: "GAJABAR",
    role: "Mentorship",
    period: "May 2023 - July 2023",
    description:
      "Mentored junior security professionals on cloud security best practices and incident response methodologies.",
    achievements: [
      "Guided 12 junior security professionals in developing practical incident response skills",
      "Facilitated hands-on workshops on cloud security tools and methodologies",
      "Developed training materials that were adopted company-wide",
    ],
  },
  {
    company: "Worldlink & Locus",
    role: "Volunteer Coordinator",
    period: "November 2023 - December 2023",
    description:
      "Coordinated security volunteer efforts and contributed to community education initiatives.",
    achievements: [
      "Organized a team of 15 volunteers for a community cybersecurity awareness program",
      "Developed educational materials on basic security hygiene for non-technical audiences",
      "Facilitated workshops that reached over 200 community members",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "web-question-app",
    title: "Web-Based Question Collection and Search Application",
    description:
      "Developed a comprehensive platform for collecting and searching past exam questions, featuring advanced filtering, user authentication, and responsive design for optimal user experience across devices.",
    image:
      "https://images.pexels.com/photos/5797908/pexels-photo-5797908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    techStack: ["React", "Django", "Python", "PostgreSQL", "REST API"],
    demoLink: "https://example.com/demo1",
    githubLink: "https://github.com/example/project1",
    category: "web",
  },
  {
    id: "network-design",
    title: "Comprehensive Network Design for Organizational Efficiency",
    description:
      "Designed and implemented scalable network infrastructures optimized for security, performance, and reliability. Incorporated best practices for segmentation, monitoring, and incident response capabilities.",
    image:
      "https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    techStack: [
      "Network Security",
      "Firewalls",
      "VLAN",
      "Routing & Switching",
      "Security Monitoring",
    ],
    category: "network",
  },
  {
    id: "crop-yield",
    title: "Crop Yield Prediction Using Remote Sensing",
    description:
      "Final-year project using CNN-LSTM models for predicting rice yield in Nepal, leveraging satellite imagery and environmental data to provide accurate forecasts for agricultural planning.",
    image:
      "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    techStack: [
      "Python",
      "CNN-LSTM",
      "Machine Learning",
      "Remote Sensing",
      "Data Analysis",
    ],
    githubLink: "https://github.com/example/project3",
    category: "other",
  },
  {
    id: "security-dashboard",
    title: "Interactive Security Monitoring Dashboard",
    description:
      "Developed a real-time security monitoring dashboard for visualizing threats, incidents, and system vulnerabilities across enterprise infrastructure. Features customizable alerts and reporting.",
    image:
      "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    techStack: ["React", "Node.js", "D3.js", "WebSockets", "Security APIs"],
    demoLink: "https://example.com/demo4",
    category: "security",
  },
];

export const certificates: Certificate[] = [
  {
    name: "Microsoft Certified: Azure Security Engineer Associate (Az-500)",
    issuer: "Microsoft",
    date: "January 2024",
    credentialId: "MS-12345678",
    verificationLink: "https://learn.microsoft.com/en-us/credentials/verify",
    expiryDate: "January 2027",
    image:
      "https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Certified Network Security Practitioner (CNSP)",
    issuer: "Network Security Academy",
    date: "November 2023",
    credentialId: "CNSP-87654321",
    verificationLink: "https://example.com/verify",
    expiryDate: "November 2026",
    image:
      "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Cloud Penetration Testing with Azure",
    issuer: "Cloud Security Alliance",
    date: "August 2023",
    credentialId: "CPT-11223344",
    verificationLink: "https://example.com/verify",
    image:
      "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "ISC2 CC",
    issuer: "ISC2",
    date: "May 2023",
    credentialId: "ISC2-55667788",
    verificationLink: "https://www.isc2.org/verify",
    expiryDate: "May 2026",
    image:
      "https://images.pexels.com/photos/8867431/pexels-photo-8867431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    date: "March 2023",
    credentialId: "AWS-99887766",
    verificationLink: "https://aws.amazon.com/verification",
    expiryDate: "March 2026",
    image:
      "https://images.pexels.com/photos/2080008/pexels-photo-2080008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];
