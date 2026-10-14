import { Check, ArrowRight, Clock, Layers } from 'lucide-react';
import type { Project } from '../types';
import { ProjectMockup } from './ProjectMockup';

/** Interface illustrations, deliberately separated from measured project outcomes. */
export function ProjectGalleryVisual({ project, index }: { project: Project; index: number }) {
  const screen = project.gallery[index];
  if (screen.type === 'chart') return <div className="gallery-chart">
    <div className="gallery-ui-top"><span>ANALYTICAL VIEW</span><span>Concept</span></div>
    <h3>{screen.title}</h3>
    <div className="chart-key"><span>Observed pattern</span><span>Model pattern</span></div>
    <svg viewBox="0 0 560 260" role="img" aria-label="Illustrative comparison of observed and model patterns; not measured results">
      {[40, 90, 140, 190, 240].map(y => <path key={y} d={`M20 ${y} H540`} stroke="#ffffff15" fill="none" />)}
      <path d="M20 215 C60 205 70 150 110 165 S170 90 210 120 S290 190 340 95 S430 100 470 60 S510 90 540 30" fill="none" stroke="#b99ce9" strokeWidth="4" />
      <path d="M20 220 C60 185 90 180 120 150 S180 120 210 135 S300 140 340 110 S430 90 470 75 S510 75 540 50" fill="none" stroke="#7dd3fc" strokeWidth="3" strokeDasharray="8 8" />
    </svg><small>Illustrative visualization · no measured performance values</small>
  </div>;
  if (screen.type === 'system' || project.category === 'Automation') return <div className="gallery-system"><div className="gallery-ui-top"><span>SYSTEM OVERVIEW</span><Layers size={16} /></div><h3>From input to insight.</h3><div className="system-nodes">{['Collect', 'Process', 'Evaluate', 'Present'].map((label, i) => <div key={label}><span>0{i + 1}</span><strong>{label}</strong><ArrowRight /></div>)}</div><div className="tag-list">{project.technologies.slice(0, 4).map(t => <span key={t}>{t}</span>)}</div></div>;
  if (screen.type === 'mobile') return <div className="gallery-phone"><div className="phone-notch" /><div className="gallery-ui-top"><span>9:41</span><span>•••</span></div><small>YOUR SPACE TO FOCUS</small><h3>A little progress.<br />Every day.</h3><div className="focus-clock"><Clock /><strong>45:00</strong><span>STUDY SPRINT</span></div><div className="phone-task"><Check size={16} /><span>Review course notes</span></div><div className="phone-task"><span className="task-circle" /><span>Prepare for the next lab</span></div><div className="phone-action">Stay in the flow →</div></div>;
  if (index > 0 && screen.type === 'desktop') return <div className="gallery-workspace"><div className="gallery-ui-top"><span>{project.isUiUxCaseStudy ? 'SHARED STUDY SPACE' : 'RESOURCE WORKSPACE'}</span><Layers size={16} /></div><h3>{screen.title}</h3><div className="workspace-columns">{['To explore', 'In progress', 'Ready to review'].map((label, i) => <div key={label}><small>{label}</small>{project.process.slice(i, i + 2).map(step => <div key={step.title}><span className="workspace-dot" /><p>{step.deliverables?.[0] || step.title}</p><span>○ ○ ○</span></div>)}</div>)}</div></div>;
  return <ProjectMockup slug={project.slug} variant="hero" />;
}
