import React from 'react';
import { profileData } from '../data/profile';
import { Badge } from '../components/Badge';
import { useScene } from '../components/MotionSystem';
import { Download, FileText } from 'lucide-react';

export const ResumePage: React.FC = () => {
  const scene = useScene();

  return (
    <div ref={scene} className="shell resume-page space-y-12 sm:space-y-16">
      <section className="page-hero space-y-6">
        <Badge variant="lavender" size="md" icon={<FileText className="w-3.5 h-3.5 text-[#8B5CF6]" />}>
          Curriculum Vitae
        </Badge>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1F1B2D] leading-[1.15]">
              Resume &{' '}
              <span className="bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#60A5FA] bg-clip-text text-transparent">
                Credentials.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-[#6B6478] leading-relaxed">
              Targeted resume versions tailored specifically for AI/ML engineering, Full-Stack development, and UI/UX product design opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="resume-options" aria-label="Choose a resume focus">
        {profileData.resumes.map((resume, i) => (
          <article key={resume.id} className="resume-option" data-reveal>
            <FileText />
            <span className="eyebrow">RESUME / 0{i + 1}</span>
            <h2>{resume.category === 'Full-Stack' ? 'Full stack' : resume.category === 'UI/UX' ? 'UI / UX' : 'AI / ML'}</h2>
            <p>{resume.summary}</p>
            <div className="resume-actions">
              <a className="text-link" href={resume.downloadUrl} download={resume.fileName}>
                <Download /> Download PDF
              </a>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};
