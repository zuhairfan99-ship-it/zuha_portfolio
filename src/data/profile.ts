import { EducationItem } from '../types';
import aiResumePdf from '../images/resumes/zuha-ai.pdf?url';
import fullStackResumePdf from '../images/resumes/zuha-full-stack.pdf?url';
import uiUxResumePdf from '../images/resumes/zuha-ui-ux.pdf?url';

export interface ProfileData {
  name: string;
  preferredName: string;
  roleBadge: string;
  headline: string;
  headlineHighlight: string;
  subheadline: string;
  aboutIntro: string;
  bioStory: string[];
  pillars: {
    title: string;
    description: string;
  }[];
  education: EducationItem[];
  designPhilosophy: {
    title: string;
    quote: string;
    description: string;
  };
  contact: {
    email: string;
    phone: string;
    location: string;
    availability: string;
    socials: {
      platform: string;
      url: string;
      handle: string;
    }[];
  };
  resumes: {
    id: string;
    title: string;
    category: 'AI / ML' | 'Full-Stack' | 'UI/UX';
    fileName: string;
    fileSize: string;
    updatedDate: string;
    downloadUrl: string;
    summary: string;
    highlights: string[];
  }[];
}

export const profileData: ProfileData = {
  name: "Zuha Irfan",
  preferredName: "Zuha",
  roleBadge: "Software Engineering Student",
  headline: "Designing & Building",
  headlineHighlight: "Meaningful Digital Experiences.",
  subheadline:
    "Software Engineering student with hands-on experience spanning UI/UX design, full-stack web applications, machine learning experimentation, and automated workflow pipelines.",
  aboutIntro:
    "Bridging the gap between empathetic human-centered design and pragmatic software engineering. Passionate about crafting intuitive interfaces and building intelligent, reliable systems that solve real-world problems.",
  bioStory: [
    "I am a Software Engineering undergraduate at Fatima Jinnah Women University (2023–2027) based in Rawalpindi, Pakistan. My journey in technology is driven by a deep curiosity about how humans interact with digital products and how intelligent computing can make everyday tasks more effective.",
    "Across five distinct internship rotations, I have worked at the intersection of user research, frontend interface design, backend API development, PyTorch machine learning models, and automated business workflows. This cross-disciplinary foundation allows me to approach problems holistically — from early user research and wireframing through to robust system architecture and deployment.",
    "I am actively seeking internship opportunities, junior engineering roles, and collaborative projects where thoughtful design thinking meets clean, maintainable engineering."
  ],
  pillars: [
    {
      title: "User-Centered Design",
      description: "Rooting every interface decision in empathy, clear user journeys, and intuitive information architecture."
    },
    {
      title: "Problem Solving",
      description: "Tackling complex challenges with structured logic, clean code, and pragmatic engineering trade-offs."
    },
    {
      title: "Continuous Learning",
      description: "Actively expanding technical horizons across modern frameworks, AI models, and emerging tooling."
    },
    {
      title: "Accessible Experiences",
      description: "Designing products that are inclusive, legible, and easy to navigate for diverse audiences."
    },
    {
      title: "Practical Technology",
      description: "Focusing on tangible value and real-world utility rather than complexity for its own sake."
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "Fatima Jinnah Women University",
      location: "Rawalpindi, Pakistan",
      dates: "2023 – 2027",
      status: "Ongoing",
      isPrimary: true,
      details: [
        "Core coursework in Software Engineering, Data Structures, Database Systems, Object-Oriented Programming, and Web Technologies.",
        "Active involvement in technical societies and interdisciplinary software projects."
      ]
    },
    {
      degree: "Intermediate / Higher Secondary",
      institution: "Educational Institution Placeholder",
      location: "Rawalpindi, Pakistan",
      dates: "2021 – 2023",
      status: "Completed",
      isPrimary: false,
      details: [
        "Foundation in Mathematics and Science."
      ]
    },
    {
      degree: "Secondary School Certificate / Matriculation",
      institution: "Educational Institution Placeholder",
      location: "Rawalpindi, Pakistan",
      dates: "2019 – 2021",
      status: "Completed",
      isPrimary: false,
      details: [
        "Science curriculum with academic excellence."
      ]
    }
  ],
  designPhilosophy: {
    title: "Personal Design & Engineering Philosophy",
    quote: "Aesthetics attract, but clarity and purpose endure.",
    description:
      "Technology is at its best when it feels effortless to the person using it. Great software begins with listening: understanding real frustrations before writing a single line of code or placing a visual element. Whether designing an accessible UI flow or training a predictive model, my objective is to eliminate friction and deliver clarity."
  },
  contact: {
    email: "zuhairfan99@gmail.com",
    phone: "0343-5902786",
    location: "Rawalpindi, Pakistan (Available for Remote Work)",
    availability: "Available for Internships & Junior Roles",
    socials: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/zuha-i-060b62309",
        handle: "linkedin.com/in/zuha-i-060b62309"
      },
      {
        platform: "GitHub",
        url: "https://github.com/zuhairfan99-ship-it",
        handle: "github.com/zuhairfan99-ship-it"
      }
    ]
  },
  resumes: [
    {
      id: "ai-ml",
      title: "AI / Machine Learning Resume",
      category: "AI / ML",
      fileName: "zuha-ai.pdf",
      fileSize: "35 KB",
      updatedDate: "March 2026",
      downloadUrl: aiResumePdf,
      summary: "Tailored for AI/ML engineering and research internships. Highlights PyTorch model training, NLP, predictive analytics, and NAVTTC AI certification.",
      highlights: [
        "PyTorch model training & evaluation",
        "NLP & predictive data modeling experience",
        "AI & Automation workflow analysis at iBixare",
        "NAVTTC / Corvit AI Course Certification"
      ]
    },
    {
      id: "full-stack",
      title: "Full-Stack Development Resume",
      category: "Full-Stack",
      fileName: "zuha-full-stack.pdf",
      fileSize: "34 KB",
      updatedDate: "March 2026",
      downloadUrl: fullStackResumePdf,
      summary: "Tailored for software engineering and full-stack web roles. Highlights API integration, responsive frontend development, and clean backend architecture.",
      highlights: [
        "Full-stack and frontend development internships",
        "Backend API design & database queries (MySQL / SQL)",
        "Modern responsive web standards with HTML, CSS, JS",
        "Software Engineering Degree (FJWU, 2023–2027)"
      ]
    },
    {
      id: "ui-ux",
      title: "UI/UX Design Resume",
      category: "UI/UX",
      fileName: "zuha-ui-ux.pdf",
      fileSize: "33 KB",
      updatedDate: "March 2026",
      downloadUrl: uiUxResumePdf,
      summary: "Tailored for product design, UX research, and UI design opportunities. Emphasizes user flows, wireframing, usability heuristics, and accessibility.",
      highlights: [
        "UI/UX Design Intern at DevelopersHub Corporation",
        "User research, journey mapping & wireframe documentation",
        "High-fidelity prototyping with focus on WCAG accessibility",
        "Bridge between design systems and frontend code"
      ]
    }
  ]
};
