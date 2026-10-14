import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    title: "UI/UX & Design",
    description: "Creating accessible, intuitive, and visually harmonious digital interfaces centered on real user needs.",
    iconName: "Palette",
    skills: [
      "UI/UX Design",
      "User Research",
      "Wireframing",
      "Prototyping",
      "User Flows",
      "Journey Mapping",
      "Responsive UI Design",
      "Usability",
      "Accessibility",
      "Graphic Design",
      "Branding"
    ]
  },
  {
    title: "Development",
    description: "Building responsive, modern frontend interfaces and structured backend logic with clean code practices.",
    iconName: "Code2",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Web Design",
      "Backend API Development",
      "Python",
      "C#",
      "C++"
    ]
  },
  {
    title: "AI & Machine Learning",
    description: "Training neural architectures, implementing NLP workflows, and engineering intelligent automation pipelines.",
    iconName: "Cpu",
    skills: [
      "Python",
      "PyTorch",
      "Machine Learning",
      "Natural Language Processing",
      "Data Preprocessing",
      "Model Training",
      "Model Evaluation",
      "Predictive Modeling",
      "AI Automation",
      "Prompt Engineering"
    ]
  },
  {
    title: "Databases & Tools",
    description: "Managing relational schemas, version control workflows, and developer command-line environments.",
    iconName: "Database",
    skills: [
      "MySQL",
      "SQL",
      "Git",
      "GitHub",
      "Visual Studio",
      "Linux"
    ]
  }
];

// Highlighted skills for the Hero / Home page quick badges
export const heroSkillBadges = [
  { label: "UI/UX", category: "Design" },
  { label: "AI & ML", category: "AI" },
  { label: "Python", category: "Code" },
  { label: "Full-Stack", category: "Web" },
  { label: "Automation", category: "Systems" }
];
