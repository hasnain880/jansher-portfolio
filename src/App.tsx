import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StudioWork } from './components/StudioWork';
import { EcommerceWork } from './components/EcommerceWork';
import { DigitalWork } from './components/DigitalWork';
import { Capabilities } from './components/Capabilities';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SectionDivider } from './components/SectionDivider';
import { PageTransition } from './components/PageTransition';

export default function App() {
  const [bgLoaded, setBgLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    // Section 8 Hero Entrance: Background begins slightly darker, then transitions into primary background
    const t = setTimeout(() => {
      setBgLoaded(true);
    }, 50);
    return () => clearTimeout(t);
  }, []);

  const handleNavigate = (targetId: string) => {
    setIsTransitioning(true);

    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'auto' });
      }
    }, 280);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        theme === 'dark'
          ? 'bg-[#0E0E0E] text-[#F3F1EC]'
          : bgLoaded
          ? 'bg-[#F6F4F1] text-[#010101]'
          : 'bg-[#EAE8E5] text-[#010101]'
      }`}
    >
      {/* Viewport Transition Overlay (Section 34) */}
      <PageTransition isTransitioning={isTransitioning} />

      {/* Sticky Editorial Navigation with Light/Dark Theme Switcher */}
      <Navbar
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Flow */}
      <main className="w-full">
        <Hero onNavigate={handleNavigate} />

        <SectionDivider id="divider-work" />

        <StudioWork />

        <SectionDivider id="divider-ecom" />

        <EcommerceWork />

        <SectionDivider id="divider-digital" />

        <DigitalWork />

        <SectionDivider id="divider-capabilities" />

        <Capabilities />

        <SectionDivider id="divider-about" />

        <About />

        <SectionDivider id="divider-contact" />

        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
