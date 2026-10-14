import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { Link } from '../context/RouterContext';
import { ProjectMockup } from './ProjectMockup';
import { Tilt } from './MotionSystem';
export function ProjectCard({ project, index = 0, featured = false }: { project: Project; index?: number; featured?: boolean }) {
  return <article className={`project-showcase project-tone-${index % 4} ${featured ? 'featured' : ''}`}>
    <Link to={`/projects/${project.slug}`} className="project-visual" data-cursor="view" aria-label={`View ${project.title}`} data-image-reveal>
      <span className="project-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      <Tilt className="project-device"><div className="device-chrome"><i /><i /><i /><span>{project.category} / {project.year}</span></div><ProjectMockup slug={project.slug} variant="hero" /></Tilt>
      <span className="visual-caption">ILLUSTRATIVE INTERFACE / {project.year}</span><span className="project-open"><ArrowUpRight size={23} /></span>
    </Link>
    <div className="project-copy" data-reveal><span className="eyebrow">{project.category} <span> / {project.year}</span></span><h3><Link to={`/projects/${project.slug}`}>{project.title}</Link></h3><p>{project.description}</p><div className="tag-list">{project.technologies.slice(0, 4).map(t => <span key={t}>{t}</span>)}</div><Link className="text-link" to={`/projects/${project.slug}`}>Explore case study <ArrowUpRight size={20} /></Link></div>
  </article>;
}
