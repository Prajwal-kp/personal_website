export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'cloud' | 'network' | 'web' | 'tools' | 'other';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoLink?: string;
  githubLink?: string;
  category: 'web' | 'network' | 'security' | 'other';
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  verificationLink?: string;
  expiryDate?: string;
  image?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ThemeMode = 'light' | 'dark';