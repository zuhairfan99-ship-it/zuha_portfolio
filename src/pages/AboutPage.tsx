import { ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';
import { Link } from '../context/RouterContext';
import portrait from '../images/profile_picture/WhatsApp Image 2026-10-13 at 7.21.05 PM.jpeg';
import { TextReveal, useScene } from '../components/MotionSystem';
export function AboutPage() {
  const ref = useScene();
  return <div ref={ref} className="shell about-page">
    <section className="page-hero about-hero"><div><span className="eyebrow">01 / A LITTLE ABOUT ME</span><h1><TextReveal>Curious mind.</TextReveal><TextReveal><em>Thoughtful maker.</em></TextReveal></h1><p>I'm Zuha. A software engineering student who sees the human story behind every interface and the possibilities behind every line of code.</p><span className="location-label"><i className="status-dot" /> RAWALPINDI, PAKISTAN · OPEN TO REMOTE WORK</span></div><figure className="about-portrait"><img src={portrait} alt="Portrait of Zuha Irfan" /><figcaption>Zuha Irfan · Software Engineering student</figcaption></figure></section>
    <section className="story-section section-space"><div><span className="eyebrow">THE STORY SO FAR</span><h2>More than<br /><em>code & pixels.</em></h2></div><div>{profileData.bioStory.map((p, i) => <p key={i} data-reveal>{p}</p>)}</div></section>
    <section className="section-space"><div className="section-top"><div><span className="eyebrow">WHAT GUIDES MY WORK</span><h2>Small principles.<br /><em>Lasting impact.</em></h2></div></div><div className="values-list">{profileData.pillars.map((p, i) => <article key={p.title} data-reveal><span>0{i + 1}</span><h3>{p.title}</h3><p>{p.description}</p><ArrowUpRight /></article>)}</div></section>
    <section className="education-section section-space"><div><span className="eyebrow">ALWAYS A STUDENT</span><h2>A foundation<br />for <em>what's next.</em></h2></div><div className="education-timeline">{profileData.education.map(e => <article key={e.degree} data-reveal><span className="eyebrow">{e.dates} / {e.status}</span><h3>{e.degree}</h3><p>{e.institution} · {e.location}</p>{e.details?.map(d => <p key={d}>{d}</p>)}</article>)}</div></section>
    <section className="personal-philosophy"><span className="eyebrow">{profileData.designPhilosophy.title}</span><blockquote>“{profileData.designPhilosophy.quote}”</blockquote><p>{profileData.designPhilosophy.description}</p><Link to="/contact" className="text-link">Let's build something meaningful <ArrowUpRight /></Link></section>
  </div>;
}
