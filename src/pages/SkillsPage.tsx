import { ArrowUpRight } from 'lucide-react';
import { skillsData } from '../data/skills';
import { SkillCard } from '../components/SkillCard';
import { TextReveal, Marquee, useScene } from '../components/MotionSystem';
import { Link } from '../context/RouterContext';
export function SkillsPage() {
  const ref = useScene();
  return <div ref={ref} className="skills-page"><div className="shell"><section className="page-hero skills-hero"><div><span className="eyebrow">04 / MY TOOLKIT</span><h1><TextReveal>Creative thinking.</TextReveal><TextReveal><em>Technical doing.</em></TextReveal></h1><p>From an initial sketch to a working system. The tools, languages, and methods I bring to the process.</p></div><div className="skill-orbit" aria-hidden="true"><span>CREATIVE<br /><b>TECHNOLOGIST</b></span><div><i>UI/UX</i><i>Python</i><i>AI</i><i>Web</i></div></div></section><section className="skill-bento section-space">{skillsData.map((c, i) => <SkillCard key={c.title} category={c} index={i} />)}</section></div>
    <Marquee text="RESEARCH ✦ DESIGN ✦ BUILD ✦ TEST ✦ LEARN ✦ REPEAT ✦" reverse />
    <section className="shell section-space story-section"><h2>Human first.<br /><em>System second.</em></h2><div><p>I approach technical problems by first understanding the human experience: who needs this system, what friction they encounter, and how clear information hierarchy can help.</p><p>From user flows and wireframes to relational databases and PyTorch experiments, each skill is part of the same process: making technology feel useful and intuitive.</p><Link to="/projects" className="text-link">See these skills in practice <ArrowUpRight /></Link></div></section>
  </div>;
}
