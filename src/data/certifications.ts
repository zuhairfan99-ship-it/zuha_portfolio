import { Certification } from '../types';

import galvanAiInternship from '../images/certificates/WhatsApp Image 2026-10-13 at 8.21.00 PM.jpeg';
import galvanAiCompletionLetter from '../images/certificates/WhatsApp Image 2026-10-13 at 8.21.01 PM.jpeg';
import googlePromptingEssentials from '../images/certificates/WhatsApp Image 2026-10-13 at 8.21.02 PM (1).jpeg';
import gitHubDevDays from '../images/certificates/WhatsApp Image 2026-10-13 at 8.21.02 PM.jpeg';
import graphicDesign from '../images/certificates/WhatsApp Image 2026-10-13 at 8.21.03 PM.jpeg';
import freelancing from '../images/certificates/WhatsApp Image 2026-10-13 at 8.21.04 PM.jpeg';
import microsoftBuild from '../images/certificates/WhatsApp Image 2026-10-13 at 8.21.05 PM.jpeg';
import azureAiFundamentals from '../images/certificates/WhatsApp Image 2026-10-13 at 8.21.05 PM (1).jpeg';
import aiMachineLearning from '../images/certificates/WhatsApp Image 2026-10-13 at 8.21.07 PM.jpeg';
import aiAutomation from '../images/certificates/WhatsApp Image 2026-10-13 at 8.21.08 PM (1).jpeg';
import fullStackDevelopment from '../images/certificates/WhatsApp Image 2026-10-13 at 8.21.08 PM.jpeg';
import uiUxDesign from '../images/certificates/WhatsApp Image 2026-10-13 at 8.21.09 PM.jpeg';
import webDevelopment from '../images/certificates/WhatsApp Image 2026-10-13 at 8.21.10 PM (1).jpeg';
import frontEndDevelopment from '../images/certificates/WhatsApp Image 2026-10-13 at 8.21.10 PM.jpeg';

export const certificationsData: Certification[] = [
  {
    id: 'galvanai-internship',
    title: '2-Month Internship Program',
    issuer: 'GalvanAI',
    date: 'July 1 – August 28, 2026',
    roleOrSpecialization: 'Intern',
    credentialUrl: '#',
    skillsLearned: ['Training Sessions', 'Practical Assignments', 'Project-Based Work'],
    description:
      'Completed a two-month internship at GalvanAI, participating in training sessions and practical, project-based assignments in the assigned area of study.',
    image: galvanAiInternship,
  },
  {
    id: 'galvanai-completion-letter',
    title: 'GalvanAI Internship Completion Letter',
    issuer: 'GalvanAI',
    date: 'August 28, 2026',
    roleOrSpecialization: 'Internship completion letter',
    credentialUrl: '#',
    skillsLearned: ['Professional Training', 'Practical Assignments', 'Project-Based Work'],
    description:
      'Completion letter confirming the internship at GalvanAI from July 1 to August 28, 2026, and recognizing participation in training sessions and project-based work.',
    image: galvanAiCompletionLetter,
  },
  {
    id: 'google-prompting-essentials',
    title: 'Google Prompting Essentials',
    issuer: 'Google / Coursera',
    date: 'August 23, 2026',
    roleOrSpecialization: 'Prompt engineering',
    credentialUrl: 'https://www.credly.com/go/14ckYLPI',
    skillsLearned: ['Prompt Engineering', 'Generative AI'],
    description: 'Completed the Google Prompting Essentials course on Coursera.',
    image: googlePromptingEssentials,
  },
  {
    id: 'github-dev-days-rawalpindi',
    title: 'GitHub Dev Days | Rawalpindi',
    issuer: 'Microsoft & GitHub community campaign',
    date: 'Date not shown',
    roleOrSpecialization: 'Certificate of Appreciation',
    credentialUrl: '#',
    skillsLearned: ['Developer Community', 'Technology Events'],
    description:
      'Recognized for participation in GitHub Dev Days in Rawalpindi, organized by AICP FJWU in collaboration with MLSA QAU.',
    image: gitHubDevDays,
  },
  {
    id: 'hco-graphic-design',
    title: 'Graphic Designing Course',
    issuer: 'Health and Care Organization',
    date: 'Date not shown',
    roleOrSpecialization: 'Graphic design',
    credentialUrl: '#',
    skillsLearned: ['Graphic Design'],
    description:
      'Completed a graphic designing course at Health and Care Organization.',
    image: graphicDesign,
  },
  {
    id: 'innovista-freelancing',
    title: 'Freelancing Course',
    issuer: 'Innovista Learn Easy',
    date: 'August 7, 2026',
    roleOrSpecialization: 'Freelancing',
    credentialUrl: '#',
    skillsLearned: ['Freelancing'],
    verificationId: '589-889-142069',
    description: 'Successfully completed the Freelancing Course at Innovista Learn Easy.',
    image: freelancing,
  },
  {
    id: 'build-with-fastn',
    title: 'Build with Fastn',
    issuer: 'Fastn & Microsoft Learn Student Ambassadors Islamabad Chapter',
    date: 'September 19–20, 2026',
    roleOrSpecialization: 'Certificate of Participation',
    credentialUrl: '#',
    skillsLearned: ['Fastn Platform', 'Community Participation'],
    verificationId: 'BWF-EOA2DS',
    description:
      'Recognized for active participation in Build with Fastn, held in Islamabad and organized by Fastn in collaboration with the Microsoft Learn Student Ambassadors Islamabad Chapter.',
    image: microsoftBuild,
  },
  {
    id: 'microsoft-azure-ai-fundamentals',
    title: 'Azure AI Fundamentals',
    issuer: 'Microsoft',
    date: 'June 24, 2026',
    roleOrSpecialization: 'Microsoft Certified: Azure AI Fundamentals',
    credentialUrl: '#',
    skillsLearned: ['Azure AI Fundamentals'],
    verificationId: '14A0F9D56A08C1DE',
    description: 'Passed all requirements for the Microsoft Azure AI Fundamentals certification.',
    image: azureAiFundamentals,
  },
  {
    id: 'developershub-ai-machine-learning',
    title: 'AI & Machine Learning Internship',
    issuer: 'DevelopersHub Corporation',
    date: 'December 22, 2025 – February 15, 2026',
    roleOrSpecialization: 'Six-week virtual internship',
    credentialUrl: '#',
    skillsLearned: ['Artificial Intelligence', 'Machine Learning'],
    verificationId: 'DHC-100',
    description:
      'Completed a virtual internship program in AI & Machine Learning at DevelopersHub Corporation.',
    image: aiMachineLearning,
  },
  {
    id: 'ibixare-ai-automation',
    title: 'AI & Automation Analyst Internship',
    issuer: 'iBixare',
    date: 'September 1–30, 2025',
    roleOrSpecialization: 'AI & Automation Analyst',
    credentialUrl: '#',
    skillsLearned: ['Artificial Intelligence', 'Automation'],
    verificationId: 'IB92IL0020',
    description: 'Completed a one-month remote internship as an AI & Automation Analyst.',
    image: aiAutomation,
  },
  {
    id: 'developershub-full-stack',
    title: 'Full Stack Development Internship',
    issuer: 'DevelopersHub Corporation',
    date: 'December 22, 2025 – February 15, 2026',
    roleOrSpecialization: 'Six-week virtual internship',
    credentialUrl: '#',
    skillsLearned: ['Full Stack Development'],
    verificationId: 'DHC-81',
    description:
      'Completed a virtual internship program in Full Stack Development at DevelopersHub Corporation.',
    image: fullStackDevelopment,
  },
  {
    id: 'developershub-ui-ux',
    title: 'UI/UX Designing Internship',
    issuer: 'DevelopersHub Corporation',
    date: 'December 22, 2025 – February 15, 2026',
    roleOrSpecialization: 'Six-week virtual internship',
    credentialUrl: '#',
    skillsLearned: ['UI/UX Design'],
    verificationId: 'DHC-87',
    description:
      'Completed a virtual internship program in UI/UX Designing at DevelopersHub Corporation.',
    image: uiUxDesign,
  },
  {
    id: 'digital-empowerment-web-development',
    title: 'Web Development Internship',
    issuer: 'Digital Empowerment Network',
    date: 'July 15 – September 2, 2025',
    roleOrSpecialization: 'Web Development Intern',
    credentialUrl: '#',
    skillsLearned: ['Web Development'],
    verificationId: 'STU-WD-251-1631',
    description:
      'Completed a virtual internship in Web Development at Digital Empowerment Network.',
    image: webDevelopment,
  },
  {
    id: 'developershub-front-end',
    title: 'Front End Development Internship',
    issuer: 'DevelopersHub Corporation',
    date: 'December 22, 2025 – February 15, 2026',
    roleOrSpecialization: 'Six-week virtual internship',
    credentialUrl: '#',
    skillsLearned: ['Front End Development'],
    verificationId: 'DHC-81',
    description:
      'Completed a virtual internship program in Front End Development at DevelopersHub Corporation.',
    image: frontEndDevelopment,
  },
];
