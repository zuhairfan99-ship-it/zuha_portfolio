import { ArrowDown, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { Link } from '../context/RouterContext';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';
import { experienceData } from '../data/experience';
import { skillsData } from '../data/skills';
import { ProjectCard } from '../components/ProjectCard';
import { SkillCard } from '../components/SkillCard';
import { HomePortraitArtwork } from '../components/StudioArtwork';
import { Magnetic, Marquee, TextReveal, useScene } from '../components/MotionSystem';
export function HomePage() {
  const ref = useScene();
  const featured = [projectsData[5], projectsData[0], projectsData[3], projectsData[2]];
  return <div ref={ref} className="home-page">
    <section className="hero shell">
      <div className="hero-copy">
        <span className="eyebrow hero-eyebrow"><i className="status-dot" /> SOFTWARE ENGINEERING × CREATIVE TECHNOLOGY</span>
        <h1><TextReveal>Designing digital</TextReveal><TextReveal>experiences</TextReveal><TextReveal>that <em>feel alive.</em><span className="heading-star">✦</span></TextReveal></h1>
        <p className="hero-description">Hi, I'm <strong>Zuha Irfan.</strong> A UI/UX designer and software engineering student connecting thoughtful design with intelligent technology.</p>
        <div className="hero-actions"><Magnetic><Link to="/projects" className="button primary">Explore my work <ArrowUpRight size={19} /></Link></Magnetic><Link to="/about" className="text-link">A little about me <ArrowUpRight size={17} /></Link></div>
        <div className="hero-socials">{profileData.contact.socials.map(s => <Magnetic key={s.platform}><a href={s.url} target="_blank" rel="noreferrer">{s.platform === 'GitHub' ? <Github size={16} /> : <Linkedin size={16} />}{s.platform}<ArrowUpRight size={12} /></a></Magnetic>)}</div>
      </div>
      <div className="hero-art-enter"><HomePortraitArtwork /></div>
      <div className="hero-bottom"><a href="#selected-work" className="scroll-cue"><span><ArrowDown size={15} /></span> SCROLL TO EXPLORE</a><p>BASED IN PAKISTAN · CREATING EVERYWHERE</p><span>DESIGN + CODE + CURIOSITY</span></div>
    </section>
    <Marquee />
    <section className="shell editorial-intro section-space">
      <div className="section-index" aria-hidden="true" data-parallax="35">01</div>
      <div><span className="eyebrow">A DESIGN MIND. AN ENGINEERING HEART.</span><h2><TextReveal>I turn ideas into</TextReveal><TextReveal><em>interfaces, systems</em></TextReveal><TextReveal>& experiences.</TextReveal></h2></div>
      <div className="intro-aside" data-reveal><span className="asterisk">✳</span><p>{profileData.aboutIntro}</p><Link className="text-link" to="/about">The story so far <ArrowUpRight size={18} /></Link><small>BS SOFTWARE ENGINEERING · FJWU · 2023–2027</small></div>
    </section>
    <section id="selected-work" className="shell section-space">
      <div className="section-top"><div><span className="eyebrow">02 / SELECTED WORK</span><h2><TextReveal>Ideas made <em>real.</em></TextReveal></h2></div><Link to="/projects" className="text-link">All projects ({projectsData.length.toString().padStart(2, '0')}) <ArrowUpRight size={19} /></Link></div>
      <div className="project-list">{featured.map((project, i) => <ProjectCard key={project.slug} project={project} index={i} featured />)}</div>
    </section>
    <section className="philosophy-band"><div className="shell"><span className="eyebrow">THE WAY I THINK</span><p data-reveal>“Aesthetics attract,<br />but <em>clarity & purpose</em><br />endure.”</p><div><span className="outline-star" aria-hidden="true">✳</span><span>DESIGNED FOR PEOPLE.<br />BUILT WITH PURPOSE.</span></div></div></section>
    <section className="shell section-space"><div className="section-top"><div><span className="eyebrow">03 / MY CREATIVE TOOLKIT</span><h2><TextReveal>Many skills.<br /><em>One curious mind.</em></TextReveal></h2></div><Link to="/skills" className="text-link">Explore my toolkit <ArrowUpRight size={19} /></Link></div><div className="skill-bento">{skillsData.map((category, i) => <SkillCard key={category.title} category={category} index={i} />)}</div></section>
    <section className="shell section-space home-experience"><div><span className="eyebrow">04 / LEARNING BY DOING</span><h2>From curiosity<br />to <em>experience.</em></h2><Link to="/experience" className="text-link">My full journey <ArrowUpRight size={18} /></Link></div><div>{experienceData.slice(0, 3).map((item, i) => <Link to="/experience" key={item.id} className="experience-row" data-reveal><span>0{i + 1}</span><div><small>{item.company}</small><h3>{item.role}</h3><p>{item.dates}</p></div><ArrowUpRight /></Link>)}</div></section>
  </div>;
}
