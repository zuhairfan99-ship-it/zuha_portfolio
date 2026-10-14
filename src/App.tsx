/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { lazy, Suspense } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PageTransition } from './components/PageTransition';

// Page Components
import { HomePage } from './pages/HomePage';
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage').then(m => ({ default: m.ExperiencePage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage').then(m => ({ default: m.ProjectDetailPage })));
const SkillsPage = lazy(() => import('./pages/SkillsPage').then(m => ({ default: m.SkillsPage })));
const CertificationsPage = lazy(() => import('./pages/CertificationsPage').then(m => ({ default: m.CertificationsPage })));
const ResumePage = lazy(() => import('./pages/ResumePage').then(m => ({ default: m.ResumePage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
import { ArrowLeft } from 'lucide-react';
import { MotionConfig } from 'motion/react';
import { Intro, MotionRuntime } from './components/MotionSystem';

const AppContent: React.FC = () => {
  const { currentPath, matchRoute, navigate } = useRouter();

  // Route matching logic
  const renderCurrentPage = () => {
    // 1. Home
    if (currentPath === '/' || currentPath === '') {
      return <HomePage />;
    }

    // 2. About
    if (currentPath === '/about') {
      return <AboutPage />;
    }

    // 3. Experience
    if (currentPath === '/experience') {
      return <ExperiencePage />;
    }

    // 4. Projects Listing
    if (currentPath === '/projects') {
      return <ProjectsPage />;
    }

    // 5. Dynamic Project Case Study Route: /projects/:slug
    const projectMatch = matchRoute('/projects/:slug');
    if (projectMatch && projectMatch.params.slug) {
      return <ProjectDetailPage slug={projectMatch.params.slug} />;
    }

    // 6. Skills
    if (currentPath === '/skills') {
      return <SkillsPage />;
    }

    // 7. Certifications
    if (currentPath === '/certifications') {
      return <CertificationsPage />;
    }

    // 8. Resume
    if (currentPath === '/resume') {
      return <ResumePage />;
    }

    // 9. Contact
    if (currentPath === '/contact') {
      return <ContactPage />;
    }

    // Fallback 404
    return (
      <div className="max-w-xl mx-auto py-24 px-4 text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-[#F6F1FF] text-[#8B5CF6] border border-[#8B5CF6]/20 font-mono text-xl font-bold">
          404
        </div>
        <h1 className="text-3xl font-extrabold text-[#1F1B2D]">Page Not Found</h1>
        <p className="text-[#6B6478]">
          The page you are looking for at <code className="text-[#8B5CF6] font-mono text-sm bg-[#FAF8FF] px-2 py-1 rounded">{currentPath}</code> does not exist or has been moved.
        </p>
        <div>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#8B5CF6] hover:bg-[#7C3AED] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio Home</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8FF] text-[#1F1B2D] selection:bg-[#DDD6FE] selection:text-[#7C3AED]">
      {/* Sticky Blurred Navbar */}
      <MotionRuntime />
      <Intro />
      <Navbar />

      {/* Main Content Area with Page Transitions */}
      <main id="main-content" className="site-main grow" tabIndex={-1}>
        <Suspense fallback={<div className="shell page-hero" role="status">Opening the next chapter…</div>}><PageTransition pageKey={currentPath}>
          {renderCurrentPage()}
        </PageTransition></Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <MotionConfig reducedMotion="user"><RouterProvider>
      <AppContent />
    </RouterProvider></MotionConfig>
  );
}
