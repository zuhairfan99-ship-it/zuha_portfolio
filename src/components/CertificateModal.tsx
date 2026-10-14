import { trapDialogFocus } from './dialogFocus';
import { useEffect, useRef } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { Certification } from '../types';
export function CertificateModal({ certificate: c, onClose }: { certificate: Certification | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const closeRef = useRef(onClose); closeRef.current = onClose;
  useEffect(() => {
    if (!c) return;
    const previous = document.activeElement as HTMLElement;
    const old = document.body.style.overflow;
    ref.current?.showModal(); document.body.style.overflow = 'hidden';
    return () => { ref.current?.close(); document.body.style.overflow = old; previous?.focus(); };
  }, [c]);
  return <dialog onKeyDown={trapDialogFocus} ref={ref} className="certificate-dialog" aria-labelledby="certificate-title" onCancel={() => closeRef.current()} onClick={e => { if (e.target === e.currentTarget) closeRef.current(); }} data-lenis-prevent>{c && <div className="certificate-dialog-content"><button autoFocus className="dialog-close" onClick={onClose} aria-label="Close certificate modal"><X /></button><img className="certificate-dialog-image" src={c.image} alt={`${c.title} certificate`} /><span className="eyebrow">PROGRAM DETAILS / {c.issuer}</span><h2 id="certificate-title">{c.title}</h2><p>{c.roleOrSpecialization}</p><strong className="certificate-recipient">Zuha Irfan</strong><p>{c.description}</p><div className="tag-list">{c.skillsLearned.map(s => <span key={s}>{s}</span>)}</div><div className="credential-meta"><span>{c.date}</span>{c.verificationId && <span>{c.verificationId}</span>}</div>{c.credentialUrl && c.credentialUrl !== '#' && <a className="button primary" href={c.credentialUrl} target="_blank" rel="noreferrer">View original credential <ArrowUpRight /></a>}</div>}</dialog>;
}
