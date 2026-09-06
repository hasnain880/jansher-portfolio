import React, { useEffect, useRef, useState } from 'react';

export const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [copied, setCopied] = useState(false);

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

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('jansherkaka111@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="w-full max-w-[1147px] mx-auto px-4 sm:px-6 md:px-8 pt-20 pb-32 md:pt-32 md:pb-48"
    >
      {/* Editorial Meta */}
      <div className="overflow-hidden mb-6">
        <p
          className="text-[13px] font-mono tracking-widest text-[#666666] uppercase transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transform: isInView ? 'translateY(0)' : 'translateY(100%)',
            opacity: isInView ? 1 : 0,
          }}
        >
          [INITIATE // 06]
        </p>
      </div>

      {/* Large Negative Space Typography Container */}
      <div className="space-y-1 sm:space-y-2 mb-12 md:mb-20">
        {/* Line 1: HAVE A PROJECT (reveals first) */}
        <div className="overflow-hidden">
          <h2
            className="font-display font-bold text-[42px] sm:text-[64px] md:text-[84px] lg:text-[96px] leading-[0.96] tracking-[-0.03em] text-[#010101] uppercase transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: isInView ? 'translateY(0)' : 'translateY(100%)',
              opacity: isInView ? 1 : 0,
              transitionDelay: '50ms',
            }}
          >
            HAVE A PROJECT
          </h2>
        </div>

        {/* Line 2: IN MIND? (reveals second) */}
        <div className="overflow-hidden">
          <h2
            className="font-display font-bold text-[42px] sm:text-[64px] md:text-[84px] lg:text-[96px] leading-[0.96] tracking-[-0.03em] text-[#010101] uppercase transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: isInView ? 'translateY(0)' : 'translateY(100%)',
              opacity: isInView ? 1 : 0,
              transitionDelay: '200ms',
            }}
          >
            IN MIND?
          </h2>
        </div>

        {/* Line 3: LET'S TALK. (reveals third) */}
        <div className="overflow-hidden pt-4 sm:pt-6">
          <a
            id="contact-email-link"
            href="mailto:jansherkaka111@gmail.com"
            className="group inline-block font-display font-bold text-[36px] sm:text-[54px] md:text-[72px] lg:text-[84px] leading-[1] tracking-[-0.02em] text-[#222222] hover:text-[#010101] transition-colors duration-300"
          >
            <span
              className="inline-block transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: isInView ? 'translateY(0)' : 'translateY(100%)',
                opacity: isInView ? 1 : 0,
                transitionDelay: '380ms',
              }}
            >
              LET&apos;S TALK. ↗
            </span>
            {/* Animated Underline */}
            <span className="block w-full h-[3px] md:h-[4px] bg-[#010101] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] mt-1" />
          </a>
        </div>
      </div>

      {/* Editorial Contact Details with Animated Underlines */}
      <div
        className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-10 pt-10 border-t border-[#EEEEEE] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          transform: isInView ? 'translateY(0)' : 'translateY(20px)',
          opacity: isInView ? 1 : 0,
          transitionDelay: '500ms',
        }}
      >
        {/* Direct Email */}
        <div className="sm:col-span-6 space-y-1">
          <span className="text-[12px] font-mono text-[#666666] tracking-wider uppercase block">
            DIRECT INQUIRY
          </span>
          <div className="flex items-center gap-3">
            <a
              href="mailto:jansherkaka111@gmail.com"
              className="editorial-link font-display text-[17px] sm:text-[19px] font-semibold text-[#010101]"
            >
              jansherkaka111@gmail.com
            </a>
            <button
              onClick={handleCopyEmail}
              className="font-mono text-[11px] px-2 py-0.5 rounded-[4px] border border-[#EEEEEE] hover:border-[#010101] text-[#666666] hover:text-[#010101] transition-colors"
            >
              {copied ? 'COPIED ✓' : 'COPY'}
            </button>
          </div>
        </div>

        {/* LinkedIn Profile */}
        <div className="sm:col-span-6 space-y-1 sm:text-right">
          <span className="text-[12px] font-mono text-[#666666] tracking-wider uppercase block">
            PROFESSIONAL NETWORK
          </span>
          <div>
            <a
              id="contact-linkedin-link"
              href="https://www.linkedin.com/in/jansher-ali-27476717a"
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link font-display text-[17px] sm:text-[19px] font-semibold text-[#010101]"
            >
              linkedin.com/in/jansher-ali ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
