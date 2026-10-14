import { useEffect, type ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { motionEase } from './MotionSystem';
function Page({ children }: { children: ReactNode }) {
  useEffect(() => {
    window.dispatchEvent(new Event('portfolio:page-ready'));
    const heading = document.querySelector<HTMLElement>('main h1');
    if (heading) { heading.tabIndex = -1; heading.focus({ preventScroll: true }); document.title = `${heading.textContent?.replace('✦', '')} | Zuha Irfan`; }
  }, []);
  return <>{children}</>;
}
export function PageTransition({ children, pageKey, className = '' }: { children: ReactNode; pageKey?: string; className?: string }) {
  const reduce = useReducedMotion();
  return <AnimatePresence mode="wait" initial={false}>
    <motion.div key={pageKey} className={`page-transition ${className}`} initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: reduce ? 1 : .3, transition: { duration: reduce ? 0 : .25 } }}>
      {!reduce && <motion.div className="page-curtain" aria-hidden="true" initial={{ scaleY: 1 }} animate={{ scaleY: 0, transition: { duration: .65, ease: motionEase } }} exit={{ scaleY: 1, transition: { duration: .25, ease: motionEase } }} />}
      <Page>{children}</Page>
    </motion.div>
  </AnimatePresence>;
}
