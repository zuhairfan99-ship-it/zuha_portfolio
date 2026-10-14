import { useState } from 'react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { profileData } from '../data/profile';
import { ContactForm } from '../components/ContactForm';
import { TextReveal, useScene } from '../components/MotionSystem';
export function ContactPage() {
  const ref = useScene();
  const [copyStatus, setCopyStatus] = useState('');
  const copyEmail = async () => { try { await navigator.clipboard.writeText(profileData.contact.email); setCopyStatus('Email copied'); } catch { setCopyStatus('Please select and copy the email address.'); } };
  return <div className="shell contact-page" ref={ref}><section className="page-hero"><span className="eyebrow">07 / SAY HELLO</span><h1><TextReveal>Let's create something</TextReveal><TextReveal><em>people remember.</em></TextReveal></h1><p>A new opportunity, a thoughtful idea, or just a hello. I'd love to hear what you have in mind.</p></section>
    <section className="contact-layout section-space"><div className="contact-details"><span className="eyebrow">GOOD THINGS START HERE</span><h2>A conversation.<br /><em>A possibility.</em></h2><p>{profileData.contact.availability}</p><div className="direct-email"><a href={`mailto:${profileData.contact.email}`}>{profileData.contact.email}</a><button onClick={copyEmail} aria-label="Copy email address">{copyStatus === 'Email copied' ? <Check /> : <Copy />}</button></div><p role="status" className="copy-status">{copyStatus}</p><p><a href={`tel:${profileData.contact.phone}`}>{profileData.contact.phone}</a></p><p>{profileData.contact.location}</p><div className="contact-socials">{profileData.contact.socials.map(s => <a href={s.url} target="_blank" rel="noreferrer" key={s.platform}>{s.platform}<ArrowUpRight /></a>)}</div><span className="contact-star" aria-hidden="true">✳</span></div><ContactForm /></section></div>;
}
