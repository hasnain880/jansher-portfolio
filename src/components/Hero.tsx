import React, { useEffect, useState } from 'react';

interface HeroProps {
  onNavigate?: (targetId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Choreographed entrance sequence using cubic-bezier(0.16, 1, 0.3, 1)
    const timers = [
      setTimeout(() => setStage(1), 80),   // 1. Background transition & Name reveal
      setTimeout(() => setStage(2), 400),  // 2. Headline line 1: CREATIVE DEVELOPER
      setTimeout(() => setStage(3), 600),  // 3. Headline line 2: & DEVELOPMENT PARTNER
      setTimeout(() => setStage(4), 850),  // 4. Supporting text
      setTimeout(() => setStage(5), 1100), // 5. Technology line
      setTimeout(() => setStage(6), 1350), // 6. CTA buttons
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const handleAction = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(targetId);
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nameChars = 'JANSHER ALI'.split('');

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-between pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
    >
      <div className="w-full max-w-[1147px] mx-auto px-4 sm:px-6 md:px-8 flex-1 flex flex-col justify-center">
        {/* Editorial Sub-Header / Name reveal character by character */}
        <div className="overflow-hidden mb-6 sm:mb-8">
          <div className="flex items-center gap-1.5 text-[13px] sm:text-[14px] font-mono tracking-widest text-[#666666] uppercase">
            <span className="inline-block w-2 h-2 rounded-full bg-[#010101] mr-1" />
            <div className="inline-flex">
              {nameChars.map((char, index) => (
                <span
                  key={index}
                  className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: stage >= 1 ? 'translateY(0)' : 'translateY(120%)',
                    opacity: stage >= 1 ? 1 : 0,
                    transitionDelay: `${index * 25}ms`,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Section 12-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-end">
          {/* Left Column (8 cols): Large Name Display, Title, and Editorial Statement */}
          <div className="md:col-span-8">
            {/* Primary Name Display */}
            <div className="overflow-hidden">
              <h1
                className="font-geist text-[60px] sm:text-[80px] md:text-[96px] font-bold leading-[0.9] tracking-tighter text-[#010101] uppercase transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transform: stage >= 1 ? 'translateY(0)' : 'translateY(100%)',
                  opacity: stage >= 1 ? 1 : 0,
                }}
              >
                JANSHER ALI
              </h1>
            </div>

            {/* Subheading & Editorial Description */}
            <div className="mt-6 max-w-xl">
              <div className="overflow-hidden">
                <h2
                  className="font-display text-[26px] sm:text-[34px] md:text-[38px] font-bold leading-[1.1] text-[#010101] uppercase tracking-tight transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: stage >= 2 ? 'translateY(0)' : 'translateY(100%)',
                    opacity: stage >= 2 ? 1 : 0,
                  }}
                >
                  SHOPIFY &amp; E-COMMERCE DEVELOPER
                </h2>
              </div>

              <div className="overflow-hidden mt-1.5">
                <p
                  className="font-display text-[17px] sm:text-[20px] md:text-[22px] font-normal text-[#222222] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: stage >= 3 ? 'translateY(0)' : 'translateY(100%)',
                    opacity: stage >= 3 ? 1 : 0,
                  }}
                >
                  Creative Development Partner for Brands &amp; Agencies
                </p>
              </div>

              <div className="overflow-hidden mt-4">
                <p
                  className="text-[#666666] text-[15px] sm:text-[16px] leading-relaxed transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: stage >= 4 ? 'translateY(0)' : 'translateY(100%)',
                    opacity: stage >= 4 ? 1 : 0,
                  }}
                >
                  I build and optimize Shopify stores for e-commerce brands and creative agencies. From custom theme development to Shopify Plus engineering, I handle the technical execution so you can focus on growth.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (4 cols): Core Technologies and Action Buttons */}
          <div className="md:col-span-4 flex flex-col md:items-end gap-8 md:gap-12 md:text-right">
            {/* Technologies */}
            <div className="overflow-hidden">
              <div
                className="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transform: stage >= 5 ? 'translateY(0)' : 'translateY(100%)',
                  opacity: stage >= 5 ? 1 : 0,
                }}
              >
                <p className="text-[10px] uppercase tracking-widest text-[#666666] mb-2 font-mono">
                  Core Technologies
                </p>
                <p className="text-[12px] font-medium tracking-tight text-[#010101]">
                  SHOPIFY · SHOPIFY PLUS · LIQUID · REACT · WEBFLOW
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="overflow-hidden">
              <div
                className="flex items-center gap-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transform: stage >= 6 ? 'translateY(0)' : 'translateY(100%)',
                  opacity: stage >= 6 ? 1 : 0,
                }}
              >
                <a
                  id="hero-cta-work"
                  href="#work"
                  onClick={(e) => handleAction(e, 'work')}
                  className="bg-[#010101] text-[#F6F4F1] px-6 py-3 rounded-[8px] text-[13px] font-medium hover:bg-[#222222] transition-colors"
                >
                  VIEW WORK
                </a>
                <a
                  id="hero-cta-contact"
                  href="#contact"
                  onClick={(e) => handleAction(e, 'contact')}
                  className="border border-[#010101] text-[#010101] px-6 py-3 rounded-[8px] text-[13px] font-medium hover:bg-[#EAE8E5] transition-colors"
                >
                  GET IN TOUCH
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
