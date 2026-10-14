import { useState, type FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';
import { Magnetic } from './MotionSystem';
type Fields = { name: string; email: string; subject: string; message: string };
export function ContactForm() {
  const [fields, setFields] = useState<Fields>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('');
    const next: Partial<Fields> = {};
    for (const key of Object.keys(fields) as (keyof Fields)[]) if (!fields[key].trim()) next[key] = 'Please complete this field.';
    if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) next.email = 'Enter a valid email address.';
    if (fields.message.trim().length < 10) next.message = 'Please include at least 10 characters.';
    setErrors(next);
    if (Object.keys(next).length) { document.getElementById(Object.keys(next)[0])?.focus(); return; }
    setIsSending(true);
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(profileData.contact.email)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: fields.name.trim(),
          email: fields.email.trim(),
          _replyto: fields.email.trim(),
          _subject: `Portfolio contact: ${fields.subject.trim()}`,
          _template: 'table',
          subject: fields.subject.trim(),
          message: fields.message.trim(),
        }),
      });
      if (!response.ok) {
        throw new Error(`Email service returned ${response.status}.`);
      }
      const result: { success?: boolean | string; message?: string } = await response.json();
      if (result.success !== true && result.success !== 'true') {
        throw new Error(result.message || 'The email service did not accept the message.');
      }
      setStatus('Your message was sent. Thank you for getting in touch!');
      setFields({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Contact form submission failed:', error);
      setStatus('Your message could not be sent. Please try again or email me directly.');
    } finally {
      setIsSending(false);
    }
  };
  return <form id="contact-form" className="contact-form" onSubmit={submit} noValidate><span className="eyebrow">TELL ME ABOUT YOUR IDEA</span><div className="form-grid">{(['name', 'email', 'subject', 'message'] as const).map((key, i) => <div className={`form-field field-${key}`} key={key}><span className="field-number">0{i + 1}</span>{key === 'message' ? <textarea id={key} name={key} rows={4} required minLength={10} placeholder=" " value={fields[key]} onChange={e => setFields({ ...fields, [key]: e.target.value })} aria-invalid={!!errors[key]} aria-describedby={errors[key] ? `${key}-error` : undefined} /> : <input id={key} name={key} type={key === 'email' ? 'email' : 'text'} autoComplete={key === 'name' || key === 'email' ? key : undefined} required placeholder=" " value={fields[key]} onChange={e => setFields({ ...fields, [key]: e.target.value })} aria-invalid={!!errors[key]} aria-describedby={errors[key] ? `${key}-error` : undefined} />}<label htmlFor={key}>{key === 'name' ? 'Your name' : key === 'email' ? 'Email address' : key === 'subject' ? 'What is it about?' : 'Your message'} *</label>{errors[key] && <p id={`${key}-error`} className="form-error">{errors[key]}</p>}</div>)}</div><Magnetic><button className="button primary" type="submit" disabled={isSending}>{isSending ? 'Sending…' : 'Send message'} {!isSending && <ArrowUpRight />}</button></Magnetic><p className="form-note">Messages send directly to my inbox. The first submission may require email verification.</p><p role="status" className="form-status">{status}</p></form>;
}
