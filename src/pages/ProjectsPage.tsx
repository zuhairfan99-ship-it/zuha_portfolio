import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { ProjectCategory } from '../types';
import { ProjectCard } from '../components/ProjectCard';
import { Badge } from '../components/Badge';
import { Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useScene } from '../components/MotionSystem';

const filterCategories: ProjectCategory[] = [
  'All',
  'UI/UX',
  'Web Development',
  'AI / ML',
  'Automation',
  'Software Engineering'
];

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const scene = useScene(selectedCategory);

  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === 'All') return true;
    if (project.category === selectedCategory) return true;
    if (project.secondaryCategory === selectedCategory) return true;
    return false;
  });

  return (
    <div ref={scene} className="shell projects-page space-y-12 sm:space-y-16">
      {/* 1. HERO HEADER */}
      <section className="page-hero space-y-6">
        <Badge variant="lavender" size="md" icon={<Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />}>
          Portfolio Gallery
        </Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1F1B2D] leading-[1.15] max-w-4xl">
          Selected{' '}
          <span className="bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#60A5FA] bg-clip-text text-transparent">
            Work.
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-[#6B6478] leading-relaxed max-w-3xl">
          A showcase of academic and practical engineering projects spanning machine learning prediction pipelines, software engineering architectures, automation workflows, and comprehensive UI/UX case studies.
        </p>
      </section>

      {/* 2. CLIENT-SIDE FILTER TABS */}
      <section className="flex flex-wrap items-center gap-2 border-b border-[#8B5CF6]/15 pb-6">
        {filterCategories.map((category) => {
          const isSelected = selectedCategory === category;
          const count = category === 'All' 
            ? projectsData.length 
            : projectsData.filter(p => p.category === category || p.secondaryCategory === category).length;

          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              aria-pressed={isSelected}
              className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] ${
                isSelected
                  ? 'text-white bg-[#8B5CF6] shadow-sm shadow-[#8B5CF6]/25 font-semibold'
                  : 'text-[#6B6478] bg-white border border-[#8B5CF6]/15 hover:border-[#8B5CF6]/30 hover:bg-[#F6F1FF] hover:text-[#1F1B2D]'
              }`}
            >
              <span>{category}</span>
              <span className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full ${
                isSelected ? 'bg-white/20 text-white' : 'bg-[#FAF8FF] text-[#8B5CF6]'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </section>

      {/* 3. PROJECTS GRID */}
      <section>
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#8B5CF6]/15 p-8">
            <p className="text-base text-[#6B6478]">
              No projects found in this category. Select another filter or choose &ldquo;All&rdquo;.
            </p>
          </div>
        ) : (
          <div className="project-list" aria-live="polite">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>
    </div>
  );
};
