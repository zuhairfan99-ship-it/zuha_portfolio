import { ArrowUpRight } from 'lucide-react';
import { experienceData } from '../data/experience';
import { Link } from '../context/RouterContext';
import { TextReveal, useScene } from '../components/MotionSystem';
export function ExperiencePage() {
  const ref = useScene();
  return <div ref={ref} className="shell experience-page"><section className="page-hero"><span className="eyebrow">02 / THE JOURNEY</span><h1><TextReveal>Learning. Making.</TextReveal><TextReveal><em>Moving forward.</em></TextReveal></h1><p>Hands-on experience at the intersection of user research, full-stack engineering, machine learning, and automation.</p><Link to="/resume" className="text-link">Explore my resume <ArrowUpRight /></Link></section>
    <section className="experience-layout section-space"><aside><span className="eyebrow">DESIGN × TECHNOLOGY</span><h2>Experience<br />that <em>connects.</em></h2><p>Different disciplines.<br />A shared focus on meaningful work.</p><span className="big-asterisk" aria-hidden="true">✳</span></aside><div className="experience-timeline"><div className="timeline-progress" data-progress />{experienceData.map((e, i) => <article key={e.id} className="timeline-card" data-timeline-card><span className="timeline-dot" /><div className="timeline-meta"><span>{e.dates}</span><span>{e.location}</span></div><span className="eyebrow">{e.company}</span><h3>{e.role}</h3><p>{e.description}</p><ul>{e.responsibilities.map(r => <li key={r}>{r}</li>)}</ul><div className="tag-list">{e.skills.map(s => <span key={s}>{s}</span>)}</div><span className="timeline-number" aria-hidden="true">0{i + 1}</span></article>)}</div></section>
    <section className="personal-philosophy"><span className="eyebrow">THE NEXT CHAPTER</span><h2>Good work starts<br />with <em>a conversation.</em></h2><p>Open to internship and junior opportunities in UI/UX, frontend and full-stack engineering, and AI/ML development.</p><Link to="/contact" className="button primary">Let's connect <ArrowUpRight /></Link></section>
  </div>;
}
