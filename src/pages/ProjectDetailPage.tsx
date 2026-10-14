import React from 'react';
import { useRouter } from '../context/RouterContext';
import { projectsData } from '../data/projects';
import { ProjectMockup } from '../components/ProjectMockup';
import { ProjectGalleryVisual } from '../components/ProjectGalleryVisual';
import { Badge } from '../components/Badge';
import { SectionHeading } from '../components/SectionHeading';
import { useScene } from '../components/MotionSystem';
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  User, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Github, 
  Target, 
  HelpCircle, 
  Briefcase,
  Smile,
  Compass,
  Type,
  Palette as PaletteIcon
} from 'lucide-react';

interface ProjectDetailPageProps {
  slug: string;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ slug }) => {
  const { navigate } = useRouter();
  const scene = useScene(slug);

  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[currentIndex];

  // Calculate next project
  const nextProjectIndex = (currentIndex + 1) % projectsData.length;
  const nextProject = projectsData[nextProjectIndex];

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <h1 className="text-3xl font-bold text-[#1F1B2D]">Project Not Found</h1>
        <p className="text-[#6B6478]">The requested project case study could not be located.</p>
        <button
          onClick={() => navigate('/projects')}
          className="px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#8B5CF6]"
        >
          Return to Projects
        </button>
      </div>
    );
  }

  return (
    <div ref={scene} className="shell case-study space-y-20 sm:space-y-28">
      {/* 1. BACK NAVIGATION & BREADCRUMB */}
      <div>
        <button
          onClick={() => navigate('/projects')}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#6B6478] hover:text-[#8B5CF6] transition-colors group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to All Projects</span>
        </button>
      </div>

      {/* 2. PROJECT HERO */}
      <section className="case-hero space-y-8">
        <div className="space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="lavender" size="md">
              {project.category}
            </Badge>
            {project.secondaryCategory && (
              <Badge variant="blue" size="md">
                {project.secondaryCategory}
              </Badge>
            )}
            <span className="flex items-center gap-1 text-xs text-[#6B6478] font-medium ml-2">
              <Calendar className="w-3.5 h-3.5 text-[#8B5CF6]" />
              {project.year}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1F1B2D] leading-[1.12]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#6B6478] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Project Meta Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-3xl bg-white border border-[#8B5CF6]/15 shadow-xs">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8B5CF6]">Role</span>
            <p className="text-sm font-bold text-[#1F1B2D] flex items-center gap-1.5">
              <User className="w-4 h-4 text-[#8B5CF6]" />
              {project.role}
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8B5CF6]">Discipline</span>
            <p className="text-sm font-bold text-[#1F1B2D]">
              {project.processType === 'design' ? 'UI/UX Product Design' : 'Software & Machine Learning'}
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8B5CF6]">Timeline</span>
            <p className="text-sm font-bold text-[#1F1B2D]">{project.year} (Completed)</p>
          </div>
        </div>

        {/* Full-Width Large Preview Mockup */}
        <div className="case-hero-visual" data-image-reveal>
          <span className="eyebrow">INTERFACE CONCEPT / {project.year}</span>
          <div data-parallax="35">
          <ProjectMockup slug={project.slug} variant="hero" />
          </div>
        </div>
      </section>

      {/* 3. OVERVIEW / PROBLEM / GOAL / MY ROLE */}
      <section className="case-overview grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12" data-reveal>
        {/* Left: Problem & Goal */}
        <div className="lg:col-span-7 space-y-8">
          <div className="rounded-3xl bg-white border border-[#8B5CF6]/15 p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 text-[#8B5CF6]">
              <HelpCircle className="w-5 h-5" />
              <h2 className="text-xl font-bold tracking-tight text-[#1F1B2D]">The Problem</h2>
            </div>
            <p className="text-base text-[#6B6478] leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-[#8B5CF6]/15 p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 text-emerald-600">
              <Target className="w-5 h-5" />
              <h2 className="text-xl font-bold tracking-tight text-[#1F1B2D]">The Objective & Goal</h2>
            </div>
            <p className="text-base text-[#6B6478] leading-relaxed">
              {project.goal}
            </p>
          </div>
        </div>

        {/* Right: My Role & Tech Stack */}
        <div className="lg:col-span-5 space-y-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#FAF8FF] to-[#EDE9FE] border border-[#8B5CF6]/25 p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 text-[#8B5CF6]">
              <Briefcase className="w-5 h-5" />
              <h2 className="text-xl font-bold tracking-tight text-[#1F1B2D]">My Role & Focus</h2>
            </div>
            <p className="text-sm sm:text-base text-[#1F1B2D] leading-relaxed font-medium">
              {project.myRole}
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-[#8B5CF6]/15 p-8 shadow-xs space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#8B5CF6]">
              Technologies & Methodologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs sm:text-sm px-3 py-1.5 rounded-full bg-[#FAF8FF] text-[#1F1B2D] border border-[#8B5CF6]/20 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. UI/UX SPECIFIC CASE STUDY SECTION (Section 16) */}
      {project.isUiUxCaseStudy && project.persona && (
        <section className="space-y-12">
          <SectionHeading
            badgeText="Human-Centered Design"
            title="UI/UX Research &"
            highlightWords="Design Artifacts"
            description="Deep-dive into student user research, emotional journey mapping, typographic systems, and accessibility tokens."
          />

          {/* User Persona Card */}
          <div className="rounded-3xl bg-white border border-[#8B5CF6]/20 p-8 sm:p-12 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#8B5CF6]/15 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#EDE9FE] text-[#8B5CF6] flex items-center justify-center font-bold text-xl">
                  {project.persona.name.charAt(0)}
                </div>
                <div>
                  <Badge variant="lavender" size="sm">Primary Persona</Badge>
                  <h3 className="text-2xl font-bold text-[#1F1B2D] mt-1">{project.persona.name}</h3>
                  <p className="text-xs text-[#6B6478]">{project.persona.role}</p>
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#6B6478] leading-relaxed italic">
              &ldquo;{project.persona.bio}&rdquo;
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-[#FAF8FF] border border-[#8B5CF6]/15 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700">Core Goals</h4>
                <ul className="space-y-1.5 text-xs text-[#6B6478]">
                  {project.persona.goals.map((g, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF8FF] border border-[#8B5CF6]/15 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-700">Pain Points</h4>
                <ul className="space-y-1.5 text-xs text-[#6B6478]">
                  {project.persona.painPoints.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* User Journey Map */}
          {project.userJourney && (
            <div className="rounded-3xl bg-white border border-[#8B5CF6]/15 p-8 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#8B5CF6]" />
                <h3 className="text-xl font-bold text-[#1F1B2D]">End-to-End User Journey</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {project.userJourney.map((step, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-[#FAF8FF] border border-[#8B5CF6]/15 space-y-2">
                    <span className="text-[11px] font-bold text-[#8B5CF6] uppercase tracking-wider block">
                      Stage {idx + 1}: {step.stage}
                    </span>
                    <p className="text-xs font-semibold text-[#1F1B2D]">{step.userAction}</p>
                    <p className="text-[11px] text-[#6B6478]">Touchpoint: {step.touchpoint}</p>
                    <div className="pt-2 flex items-center gap-1.5 text-[11px] text-[#8B5CF6] font-medium">
                      <Smile className="w-3.5 h-3.5" />
                      <span>{step.emotion}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Design System Tokens: Color & Typography */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Color Palette */}
            {project.colorPalette && (
              <div className="rounded-3xl bg-white border border-[#8B5CF6]/15 p-8 shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <PaletteIcon className="w-5 h-5 text-[#8B5CF6]" />
                  <h3 className="text-lg font-bold text-[#1F1B2D]">Color System</h3>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {project.colorPalette.map((color) => (
                    <div key={color.name} className="space-y-1">
                      <div
                        style={{ backgroundColor: color.hex }}
                        className="w-full h-12 rounded-xl border border-black/10 shadow-2xs"
                      />
                      <p className="text-[11px] font-semibold text-[#1F1B2D] truncate">{color.name}</p>
                      <p className="text-[10px] font-mono text-[#6B6478]">{color.hex}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Typography Spec */}
            {project.typographySpec && (
              <div className="rounded-3xl bg-white border border-[#8B5CF6]/15 p-8 shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <Type className="w-5 h-5 text-[#8B5CF6]" />
                  <h3 className="text-lg font-bold text-[#1F1B2D]">Typography Hierarchy</h3>
                </div>
                <div className="space-y-2.5">
                  {project.typographySpec.map((spec) => (
                    <div key={spec.role} className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8FF] text-xs">
                      <span className="font-semibold text-[#1F1B2D]">{spec.role}</span>
                      <span className="text-[#6B6478]">{spec.family} ({spec.weight})</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 5. PROCESS SECTION (Dynamic based on Design vs Engineering) */}
      <section className="space-y-10">
        <SectionHeading
          badgeText="Methodology"
          title={project.processType === 'design' ? 'Design Thinking &' : 'System Architecture &'}
          highlightWords={project.processType === 'design' ? 'Prototyping Process' : 'Engineering Process'}
          description="Detailed execution steps followed during the development of this project."
        />

        <div className="process-list">
          {project.process.map((step, idx) => (
            <div
              key={step.title}
              className="process-step" data-reveal
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-bold tracking-tight text-[#1F1B2D]">
                  {step.title}
                </h3>
                <span className="text-xs font-mono font-semibold text-[#8B5CF6] bg-[#EDE9FE] px-3 py-1 rounded-full shrink-0">
                  Stage 0{idx + 1}
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#6B6478] leading-relaxed mb-4">
                {step.description}
              </p>
              {step.deliverables && (
                <div className="pt-3 border-t border-[#8B5CF6]/10 flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-semibold text-[#1F1B2D]">Key Deliverables:</span>
                  {step.deliverables.map((d, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-[#FAF8FF] text-[#6B6478] border border-[#8B5CF6]/15">
                      {d}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 6. SCREENS / GALLERY */}
      <section className="space-y-10">
        <SectionHeading
          badgeText="Visual Interface"
          title="Project Screens &"
          highlightWords="Interface Artifacts"
          description="Illustrative interface concepts based on the project's workflows and design direction."
        />

        <div className="case-gallery">
          {project.gallery.map((screen, idx) => (
            <div
              key={idx}
              className={`gallery-panel gallery-${screen.type || 'desktop'} space-y-4`} data-image-reveal
            >
              <div className="rounded-2xl overflow-hidden bg-[#FAF8FF]">
                <ProjectGalleryVisual project={project} index={idx} />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1F1B2D]">{screen.title}</h4>
                <p className="text-xs text-[#6B6478] mt-1">{screen.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. OUTCOME & LEARNINGS */}
      <section className="case-outcome space-y-6" data-reveal>
        <Badge variant="lavender" size="sm">
          Impact & Takeaways
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight text-[#1F1B2D]">
          Project Outcome & Key Learnings
        </h2>
        <p className="text-base sm:text-lg text-[#6B6478] leading-relaxed">
          {project.outcome}
        </p>

        {project.keyLearnings && (
          <div className="space-y-3 pt-4 border-t border-[#8B5CF6]/15">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1F1B2D]">
              Reflections & Future Iterations:
            </h3>
            <ul className="space-y-2">
              {project.keyLearnings.map((learning, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#6B6478]">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* 8. NEXT PROJECT NAVIGATION */}
      <section className="next-project">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8B5CF6] block mb-1">
            Up Next
          </span>
          <h3 className="text-2xl font-bold text-[#1F1B2D]">{nextProject.title}</h3>
          <p className="text-xs text-[#6B6478] mt-0.5">{nextProject.category} • {nextProject.year}</p>
        </div>

        <button
          onClick={() => navigate(`/projects/${nextProject.slug}`)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#8B5CF6] hover:bg-[#7C3AED] shadow-sm transition-colors shrink-0 cursor-pointer"
        >
          <span>View Next Case Study</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};
