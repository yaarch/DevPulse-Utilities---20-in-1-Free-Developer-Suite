import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ToastContainer } from './components/layout/ToastContainer';
import { GlobalSearchModal } from './components/layout/GlobalSearchModal';
import { Hero } from './components/home/Hero';
import { ToolGrid } from './components/home/ToolGrid';
import { ToolView } from './components/tools/ToolView';
import { CloudflareDeployGuide } from './components/deployment/CloudflareDeployGuide';
import { StaticPages } from './components/static/StaticPages';

const MainApp: React.FC = () => {
  const { activePage } = useApp();

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const renderActiveView = () => {
    switch (activePage.type) {
      case 'home':
        return (
          <>
            <Hero />
            <ToolGrid />
          </>
        );

      case 'tool':
        return <ToolView toolId={activePage.toolId} />;

      case 'deploy':
        return <CloudflareDeployGuide />;

      case 'about':
      case 'privacy':
      case 'terms':
      case 'contact':
        return <StaticPages pageType={activePage.type} />;

      default:
        return (
          <>
            <Hero />
            <ToolGrid />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-500 selection:text-white transition-colors duration-200">
      <Header />
      <main className="flex-1 w-full pb-16">
        {renderActiveView()}
      </main>
      <Footer />
      <ToastContainer />
      <GlobalSearchModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
}
