import React, { useEffect, useRef, useState } from 'react';

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="w-full max-w-[1147px] mx-auto px-4 sm:px-6 md:px-8 py-20 md:py-32"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
        {/* Left Column: Heading (Masked line reveal) */}
        <div className="md:col-span-6 space-y-2">
          <div className="overflow-hidden">
            <p
              className="text-[13px] font-mono tracking-widest text-[#666666] uppercase transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: isInView ? 'translateY(0)' : 'translateY(100%)',
                opacity: isInView ? 1 : 0,
              }}
            >
              [PHILOSOPHY // 05]
            </p>
          </div>

          <div className="overflow-hidden pt-2">
            <h2
              className="font-display font-bold text-[32px] sm:text-[42px] md:text-[48px] leading-[1.08] tracking-tight text-[#010101] uppercase transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: isInView ? 'translateY(0)' : 'translateY(100%)',
                opacity: isInView ? 1 : 0,
                transitionDelay: '100ms',
              }}
            >
              DEVELOPMENT PARTNER,
            </h2>
          </div>

          <div className="overflow-hidden">
            <h2
              className="font-display font-bold text-[32px] sm:text-[42px] md:text-[48px] leading-[1.08] tracking-tight text-[#222222] uppercase transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: isInView ? 'translateY(0)' : 'translateY(100%)',
                opacity: isInView ? 1 : 0,
                transitionDelay: '200ms',
              }}
            >
              NOT JUST A DEVELOPER.
            </h2>
          </div>
        </div>

        {/* Right Column: Editorial Statements (Line-by-line reveal upward from masked container) */}
        <div className="md:col-span-6 space-y-6 pt-2">
          {/* Paragraph 1 */}
          <div className="overflow-hidden">
            <p
              className="text-[18px] sm:text-[22px] md:text-[24px] leading-[1.4] text-[#010101] font-medium transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: isInView ? 'translateY(0)' : 'translateY(100%)',
                opacity: isInView ? 1 : 0,
                transitionDelay: '300ms',
              }}
            >
              &ldquo;I build and ship custom websites and stores for design studios, agencies and brands that need reliable development execution.&rdquo;
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="overflow-hidden">
            <p
              className="text-[16px] sm:text-[18px] leading-[1.6] text-[#666666] transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: isInView ? 'translateY(0)' : 'translateY(100%)',
                opacity: isInView ? 1 : 0,
                transitionDelay: '450ms',
              }}
            >
              From Figma to production, I work across Webflow, Shopify, WordPress, JavaScript, React and GSAP.
            </p>
          </div>

          {/* Editorial Specs / Provenance note */}
          <div className="overflow-hidden pt-4">
            <div
              className="border-t border-[#EEEEEE] pt-4 flex items-center justify-between text-[13px] font-mono text-[#666666] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: isInView ? 'translateY(0)' : 'translateY(100%)',
                opacity: isInView ? 1 : 0,
                transitionDelay: '600ms',
              }}
            >
              <span>BASED IN LONDON &amp; GLOBAL</span>
              <span>AVAILABLE Q2/Q3 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
