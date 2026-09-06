import React, { useEffect, useRef, useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { capabilitiesList } from '../data/projects';

export const Capabilities: React.FC = () => {
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
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="capabilities"
      ref={containerRef}
      className="w-full max-w-[1147px] mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24"
    >
      <SectionHeader
        id="capabilities-header"
        category="[EXPERTISE // 04]"
        title="CAPABILITIES"
        description="Engineering execution across leading modern platforms and custom front-end stacks."
      />

      {/* Typography-driven list: NO cards, NO progress bars, NO percentage indicators */}
      <div className="border-t border-[#EEEEEE]">
        {capabilitiesList.map((capability, index) => (
          <div
            key={capability}
            id={`capability-${index}`}
            className="group relative border-b border-[#EEEEEE] py-5 sm:py-7 cursor-default"
          >
            <div
              className="flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: isInView ? 'translateY(0)' : 'translateY(24px)',
                opacity: isInView ? 1 : 0,
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {/* Capability Name: On hover, text slightly shifts horizontally */}
              <div className="flex items-center gap-4 sm:gap-6 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3">
                <span className="font-mono text-[12px] sm:text-[13px] text-[#666666]">
                  0{index + 1}
                </span>
                <span className="font-display font-bold text-[22px] sm:text-[32px] md:text-[38px] tracking-tight text-[#010101] group-hover:text-[#000000]">
                  {capability}
                </span>
              </div>

              {/* Arrow appears only on hover (Keep it subtle) */}
              <div className="flex items-center gap-2">
                <span className="text-[20px] sm:text-[24px] text-[#010101] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
