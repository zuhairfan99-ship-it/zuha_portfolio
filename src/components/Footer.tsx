import { ArrowUpRight } from 'lucide-react';
import { Link } from '../context/RouterContext';
import { profileData } from '../data/profile';
import { Magnetic, useScene } from './MotionSystem';
import { navItems } from './Navbar';
export function Footer() {
  const ref = useScene();
  return <footer className="site-footer" ref={ref}>
    <div className="shell"><div className="footer-top"><div><span className="eyebrow">HAVE SOMETHING IN MIND?</span><h2>Let's make<br /><em>something matter.</em></h2></div><Magnetic><Link to="/contact" className="round-link" aria-label="Start a conversation"><ArrowUpRight /></Link></Magnetic></div>
    <div className="footer-links"><p>Thoughtful design.<br />Purposeful engineering.<br /><span>Rawalpindi, Pakistan ↗</span></p><nav aria-label="Footer navigation">{navItems.slice(1).map(([label, path]) => <Link key={path} to={path}>{label}</Link>)}</nav><div>{profileData.contact.socials.map(s => <a key={s.platform} href={s.url} target="_blank" rel="noreferrer">{s.platform} ↗</a>)}</div></div>
    <div className="footer-name" aria-hidden="true" data-parallax="18">ZUHA IRFAN<span>✦</span></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Zuha Irfan</span><span>Made with intention. Designed to feel alive.</span><a href="#main-content">Back to top ↑</a></div></div>
  </footer>;
}
