import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
gsap.registerPlugin(ScrollTrigger);
export const motionEase = [0.22, 1, 0.36, 1] as const;

export function MotionRuntime() {
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference) and (min-width: 1024px) and (pointer: fine)', () => {
      const lenis = new Lenis({ duration: 1.05, anchors: true, prevent: node => !!node.closest('dialog') });
      const tick = (time: number) => lenis.raf(time * 1000);
      const reset = () => lenis.scrollTo(window.scrollY, { immediate: true, force: true });
      lenis.on('scroll', ScrollTrigger.update); gsap.ticker.add(tick); gsap.ticker.lagSmoothing(0);
      window.addEventListener('portfolio:scroll', reset);
      return () => { window.removeEventListener('portfolio:scroll', reset); gsap.ticker.remove(tick); lenis.destroy(); };
    });
    return () => media.revert();
  }, []);
  return <CustomCursor />;
}

/** Route-local timelines revert on unmount, filter changes and motion preference changes. */
export function useScene(dependency?: unknown) {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const root = ref.current;
      if (!root) return;
      const introDelay = document.querySelector('.intro') ? 1.7 : .1;
      if (root.querySelector('.hero')) {
        const entrance = gsap.timeline({ delay: introDelay });
        entrance.from(root.querySelector('.hero-eyebrow'), { x: -25, opacity: 0, duration: .6, ease: 'power3.out' })
          .from(root.querySelector('.hero-art-enter'), { y: 45, scale: .88, rotation: 7, opacity: 0, duration: 1.2, ease: 'power4.out' }, .3)
          .from(root.querySelector('.hero-description'), { y: 30, opacity: 0, duration: .7 }, .45)
          .from(root.querySelectorAll('.hero-actions > *'), { y: 35, opacity: 0, stagger: .1, duration: .8, ease: 'back.out(1.4)' }, .6)
          .from(root.querySelector('.hero-socials'), { opacity: 0, duration: .6 }, .9)
          .from(root.querySelectorAll('.art-window, .code-note, .pointer-note'), { clipPath: 'inset(0 0 100% 0)', opacity: 0, stagger: .18, duration: .8, ease: 'power3.out' }, .5);
      }
      root.querySelectorAll('h1:not(:has([data-line]))').forEach(el => gsap.from(el, { clipPath: 'inset(0 0 100% 0)', y: 30, duration: 1, ease: 'power4.out' }));
      root.querySelectorAll('[data-reveal]').forEach(el => gsap.from(el, { y: 55, opacity: 0, duration: .95, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 94%', once: true } }));
      root.querySelectorAll('[data-image-reveal]').forEach(el => gsap.fromTo(el, { clipPath: 'inset(0 100% 0 0 round 28px)' }, { clipPath: 'inset(0 0% 0 0 round 28px)', duration: 1.15, ease: 'power4.out', scrollTrigger: { trigger: el, start: 'top 92%', once: true } }));
      root.querySelectorAll('[data-line]').forEach((el, i) => gsap.from(el.children, { yPercent: 115, rotate: 3, duration: 1.05, delay: el.closest('.hero') ? (document.querySelector('.intro') ? 1.7 : .15) + i * .12 : 0, ease: 'power4.out', scrollTrigger: { trigger: el, start: 'top 96%', once: true } }));
      root.querySelectorAll('[data-progress]').forEach(el => gsap.fromTo(el, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top center', end: 'bottom center', scrub: true } }));
      root.querySelectorAll('[data-timeline-card]').forEach(el => ScrollTrigger.create({ trigger: el, start: 'top 65%', end: 'bottom 35%', toggleClass: 'is-current' }));
    }, ref);
    media.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
      ref.current?.querySelectorAll<HTMLElement>('[data-parallax]').forEach(el => gsap.fromTo(el, { y: -Number(el.dataset.parallax) }, { y: Number(el.dataset.parallax), ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: 1 } }));
    }, ref);
    const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => { cancelAnimationFrame(frame); media.revert(); };
  }, [dependency]);
  return ref;
}
export function TextReveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <span className={`text-mask ${className}`} data-line><span>{children}</span></span>;
}
export function Magnetic({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  const x = useSpring(0, { stiffness: 180, damping: 18 }), y = useSpring(0, { stiffness: 180, damping: 18 });
  return <motion.span className={`magnetic ${className}`} style={{ x, y }} onPointerMove={e => {
    if (reduce || e.pointerType !== 'mouse' || window.innerWidth < 1024) return;
    const box = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - box.left - box.width / 2) * .15); y.set((e.clientY - box.top - box.height / 2) * .15);
  }} onPointerLeave={() => { x.set(0); y.set(0); }}>{children}</motion.span>;
}
export function Tilt({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  const rx = useSpring(0, { stiffness: 120, damping: 20 }), ry = useSpring(0, { stiffness: 120, damping: 20 });
  return <motion.div className={`tilt ${className}`} style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }} onPointerMove={e => {
    if (reduce || e.pointerType !== 'mouse' || window.innerWidth < 1024) return;
    const b = e.currentTarget.getBoundingClientRect(); rx.set(-(e.clientY - b.top - b.height / 2) / b.height * 7); ry.set((e.clientX - b.left - b.width / 2) / b.width * 7);
    e.currentTarget.style.setProperty('--pointer-x', `${(e.clientX - b.left) / b.width * 100}%`); e.currentTarget.style.setProperty('--pointer-y', `${(e.clientY - b.top) / b.height * 100}%`);
  }} onPointerLeave={() => { rx.set(0); ry.set(0); }}>{children}</motion.div>;
}
export function Marquee({ text = 'UI/UX DESIGN ✦ DEVELOPMENT ✦ AI ✦ AUTOMATION ✦ CREATIVE TECHNOLOGY ✦', reverse = false }: { text?: string; reverse?: boolean }) {
  return <div className={`marquee ${reverse ? 'reverse' : ''}`}><span className="sr-only">{text}</span><div aria-hidden="true" className="marquee-track">{[0, 1, 2, 3].map(i => <span key={i}>{text} </span>)}</div></div>;
}
function CustomCursor() {
  const [enabled, setEnabled] = useState(false), [label, setLabel] = useState(''), [visible, setVisible] = useState(false);
  const mx = useMotionValue(-100), my = useMotionValue(-100);
  const x = useSpring(mx, { stiffness: 400, damping: 32 }), y = useSpring(my, { stiffness: 400, damping: 32 });
  useEffect(() => {
    const query = matchMedia('(pointer: fine) and (min-width: 1024px) and (prefers-reduced-motion: no-preference)');
    const update = () => setEnabled(query.matches); update(); query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    if (!enabled) return;
    const move = (e: PointerEvent) => { mx.set(e.clientX); my.set(e.clientY); setVisible(true); const target = e.target as HTMLElement; setLabel(target.closest('[data-cursor="view"]') ? 'VIEW' : target.closest('a, button') ? '↗' : ''); };
    const leave = () => setVisible(false);
    window.addEventListener('pointermove', move); document.addEventListener('pointerleave', leave);
    return () => { window.removeEventListener('pointermove', move); document.removeEventListener('pointerleave', leave); };
  }, [enabled, mx, my]);
  return enabled ? <motion.div aria-hidden="true" className={`custom-cursor ${label ? 'expanded' : ''}`} style={{ left: x, top: y, opacity: visible ? 1 : 0 }}>{label}</motion.div> : null;
}
export function Intro() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(() => { if (matchMedia('(prefers-reduced-motion: reduce)').matches) return false; try { return !sessionStorage.getItem('zuha-intro'); } catch { return false; } });
  useEffect(() => { if (!show) return; try { sessionStorage.setItem('zuha-intro', 'seen'); } catch {} const timer = setTimeout(() => setShow(false), 2100); return () => clearTimeout(timer); }, [show]);
  if (!show || reduce) return null;
  return <div className="intro" aria-hidden="true"><div className="intro-word">{'ZUHA'.split('').map((c, i) => <span key={c} style={{ animationDelay: `${i * .09}s` }}>{c}</span>)}<i>®</i></div><p>DESIGN <span>·</span> CODE <span>·</span> INTELLIGENCE</p><div className="intro-line" /></div>;
}
