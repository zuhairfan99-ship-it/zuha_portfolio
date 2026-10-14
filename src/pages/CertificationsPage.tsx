import { useState } from 'react';
import { certificationsData } from '../data/certifications';
import { Certification } from '../types';
import { CertificateCard } from '../components/CertificateCard';
import { CertificateModal } from '../components/CertificateModal';
import { TextReveal, useScene } from '../components/MotionSystem';
export function CertificationsPage() {
  const [active, setActive] = useState<Certification | null>(null);
  const ref = useScene();
  return <div className="shell certificates-page" ref={ref}><section className="page-hero"><span className="eyebrow">05 / CONTINUOUS LEARNING</span><h1><TextReveal>Curiosity,</TextReveal><TextReveal><em>with credentials.</em></TextReveal></h1><p>Certificates and hands-on experience across design, web development, artificial intelligence, and automation.</p></section><section className="certificate-stack section-space">{certificationsData.map((c, i) => <CertificateCard key={c.id} certificate={c} index={i} onOpenModal={setActive} />)}</section><CertificateModal certificate={active} onClose={() => setActive(null)} /></div>;
}
