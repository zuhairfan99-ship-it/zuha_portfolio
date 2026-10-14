export type ProjectCategory = 
  | 'All'
  | 'UI/UX'
  | 'Web Development'
  | 'AI / ML'
  | 'Automation'
  | 'Software Engineering';

export interface ProcessStep {
  title: string;
  description: string;
  deliverables?: string[];
}

export interface UserPersona {
  name: string;
  role: string;
  bio: string;
  goals: string[];
  painPoints: string[];
  avatarSeed?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  secondaryCategory?: string;
  year: string;
  description: string;
  role: string;
  technologies: string[];
  thumbnail: string;
  heroImage: string;
  problem: string;
  goal: string;
  myRole: string;
  processType: 'design' | 'engineering';
  process: ProcessStep[];
  gallery: {
    title: string;
    caption: string;
    type?: 'desktop' | 'mobile' | 'system' | 'chart';
    mockupData?: Record<string, unknown>;
  }[];
  outcome: string;
  featured: boolean;
  // UI/UX Specific fields
  isUiUxCaseStudy?: boolean;
  persona?: UserPersona;
  userJourney?: {
    stage: string;
    userAction: string;
    touchpoint: string;
    emotion: string;
  }[];
  colorPalette?: { name: string; hex: string }[];
  typographySpec?: { role: string; family: string; weight: string }[];
  keyLearnings?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  isRemote: boolean;
  dates: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  featuredOnHome?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  roleOrSpecialization?: string;
  credentialUrl: string;
  skillsLearned: string[];
  verificationId?: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  dates: string;
  status: string;
  isPrimary?: boolean;
  details?: string[];
}
