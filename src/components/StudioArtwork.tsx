import { ArrowUpRight, Code2, Sparkles, MousePointer2 } from 'lucide-react';
import { Tilt } from './MotionSystem';
import portrait from '../images/profile_picture/WhatsApp Image 2026-10-13 at 7.21.05 PM.jpeg';

export function HomePortraitArtwork() {
  return <Tilt className="portrait-art">
    <figure className="portrait-frame">
      <img src={portrait} alt="Zuha Irfan in her office, holding a laptop" />
    </figure>
    <div className="portrait-interface art-window float-slow" aria-hidden="true">
      <div className="portrait-interface-top"><i /><i /><i /><span>portfolio / home</span></div>
      <div className="portrait-interface-body">
        <span className="portrait-interface-kicker" />
        <span className="portrait-interface-title" />
        <span className="portrait-interface-title short" />
        <div className="portrait-interface-layout"><i /><span><b /><b /><b /></span></div>
      </div>
    </div>
    <div className="portrait-code-note code-note float-reverse">
      <Code2 size={19} />
      <span>Design meets<br /><b>clean code.</b></span>
      <span className="status-dot" />
    </div>
    <div className="portrait-caption"><i className="status-dot" /> UI / UX DESIGN · SOFTWARE ENGINEERING</div>
  </Tilt>;
}

export function StudioArtwork({ personal = false }: { personal?: boolean }) {
  return <Tilt className={`studio-art ${personal ? 'personal-art' : ''}`}>
    <div className="art-grid" aria-hidden="true" /><div className="art-orbit orbit-one" aria-hidden="true" /><div className="art-orbit orbit-two" aria-hidden="true" />
    <div className="art-label">{personal ? 'THE PERSON BEHIND THE PIXELS' : 'A LITTLE DESIGN. A LOT OF POSSIBILITY.'}</div>
    <div className="art-monogram" aria-hidden="true">z<span>i</span><i>✦</i></div>
    <div className="art-window float-slow"><div className="window-chrome"><span /><span /><span /><small>ideas → interfaces</small></div><div className="window-content"><div className="window-icon"><Sparkles size={20} /></div><small>THOUGHTFULLY CRAFTED</small><strong>Human at heart.<br />Digital by design.</strong><div className="swatches"><i /><i /><i /><i /><ArrowUpRight size={20} /></div></div></div>
    <div className="code-note float-reverse"><Code2 size={19} /><span>Design meets<br /><b>clean code.</b></span><span className="status-dot" /></div>
    <div className="pointer-note"><MousePointer2 size={24} fill="currentColor" /><span>Zuha's creative space</span></div>
    <div className="art-bottom"><span>UI / UX</span><span>DEVELOPMENT</span><span>AI</span></div>
  </Tilt>;
}
