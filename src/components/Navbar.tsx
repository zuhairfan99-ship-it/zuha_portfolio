import { trapDialogFocus } from './dialogFocus';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Link, useRouter } from '../context/RouterContext';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Magnetic } from './MotionSystem';
import { profileData } from '../data/profile';
export const navItems = [['Home', '/'], ['About', '/about'], ['Experience', '/experience'], ['Projects', '/projects'], ['Skills', '/skills'], ['Certifications', '/certifications'], ['Resume', '/resume'], ['Contact', '/contact']];
export function Navbar() {
  const [scrolled, setScrolled] = useState(false), [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const { currentPath } = useRouter();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 35);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, [currentPath]);
  useEffect(() => {
    if (open) dialog.current?.showModal(); else dialog.current?.close();
    const old = document.body.style.overflow;
    if (open) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = old; };
  }, [open]);
  useEffect(() => {
    const query = matchMedia('(min-width: 1100px)');
    const close = () => { if (query.matches) setOpen(false); };
    query.addEventListener('change', close); return () => query.removeEventListener('change', close);
  }, []);
  return <>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="wordmark" aria-label="Zuha Irfan, home"><span className="wordmark-name">{profileData.name.toUpperCase().split(' ').map(part => <span key={part}>{part}</span>)}</span><span className="wordmark-dot">.</span><sup>®</sup></Link>
      <nav aria-label="Main navigation" className="desktop-nav">{navItems.slice(0, 7).map(([label, path]) => <Link key={path} to={path} activeClassName="active">{label}</Link>)}</nav>
      <Magnetic className="desktop-cta"><Link to="/contact" className="button primary small">Let's talk <ArrowUpRight size={16} /></Link></Magnetic>
      <button className="menu-toggle" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}><Menu /></button>
    </header>
    <dialog onKeyDown={trapDialogFocus} ref={dialog} className="mobile-menu" onCancel={() => setOpen(false)} aria-label="Site navigation" data-lenis-prevent>
      <div className="menu-top"><span className="wordmark"><span className="wordmark-name">{profileData.name.toUpperCase().split(' ').map(part => <span key={part}>{part}</span>)}</span><span className="wordmark-dot">.</span></span><button autoFocus onClick={() => setOpen(false)} aria-label="Close menu"><X /></button></div>
      <nav aria-label="Mobile navigation">{navItems.map(([label, path], i) => <Link key={path} to={path} onClick={() => setOpen(false)} style={{ '--i': i } as CSSProperties}><small>0{i + 1}</small>{label}<ArrowUpRight /></Link>)}</nav>
      <div className="menu-socials">{profileData.contact.socials.map(s => <a key={s.platform} href={s.url} target="_blank" rel="noreferrer">{s.platform} ↗</a>)}</div>
    </dialog>
  </>;
}
