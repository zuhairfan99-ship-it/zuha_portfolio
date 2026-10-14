import { ArrowUpRight } from 'lucide-react';
import { Certification } from '../types';
export function CertificateCard({ certificate: c, onOpenModal, index = 0 }: { certificate: Certification; onOpenModal: (c: Certification) => void; index?: number }) {
  return <button className="certificate-sheet" onClick={() => onOpenModal(c)} aria-label={`View certificate details: ${c.title}`}><div className="certificate-preview"><img src={c.image} alt={`${c.title} certificate`} loading="lazy" /></div><div className="certificate-sheet-content"><div className="certificate-sheet-top"><span>LEARNING ARCHIVE / {String(index + 1).padStart(2, '0')}</span><ArrowUpRight /></div><span className="eyebrow">{c.issuer}</span><h2>{c.title}</h2><p>{c.roleOrSpecialization}</p><div className="certificate-sheet-bottom"><span>{c.date}</span><span>View details ↗</span></div></div></button>;
}
