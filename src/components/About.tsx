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

          {/* Paragraph 2: Specialization */}
          <div className="overflow-hidden">
            <p
              className="text-[15px] sm:text-[17px] leading-[1.65] text-[#222222] font-normal transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: isInView ? 'translateY(0)' : 'translateY(100%)',
                opacity: isInView ? 1 : 0,
                transitionDelay: '400ms',
              }}
            >
              I specialize in Shopify and e-commerce development for brands that need more than a template. Whether it&apos;s a custom Shopify Plus build, theme optimization, or ongoing development support, I work as a technical partner — not just a contractor. Past clients include luxury fashion, skincare, and sportswear brands.
            </p>
          </div>

          {/* Paragraph 3 */}
          <div className="overflow-hidden">
            <p
              className="text-[14px] sm:text-[16px] leading-[1.6] text-[#666666] transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: isInView ? 'translateY(0)' : 'translateY(100%)',
                opacity: isInView ? 1 : 0,
                transitionDelay: '500ms',
              }}
            >
              From Figma to production, I work across Webflow, Shopify, WordPress, JavaScript, React and GSAP.
            </p>
          </div>

          {/* Shopify & E-Commerce Capabilities */}
          <div
            className="pt-6 border-t border-[#EEEEEE] transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: isInView ? 'translateY(0)' : 'translateY(20px)',
              opacity: isInView ? 1 : 0,
              transitionDelay: '600ms',
            }}
          >
            <h3 className="font-display font-bold text-[18px] sm:text-[20px] text-[#010101] tracking-tight uppercase mb-4">
              Shopify &amp; E-Commerce Capabilities
            </h3>
            <ul className="space-y-2.5 text-[13px] sm:text-[14px] font-mono text-[#444444] leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="text-[#999999] select-none font-bold">—</span>
                <span>Shopify theme development &amp; customization (Liquid, JSON templates)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#999999] select-none font-bold">—</span>
                <span>Shopify Plus builds and checkout extensions</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#999999] select-none font-bold">—</span>
                <span>Custom sections, product templates &amp; metafields</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#999999] select-none font-bold">—</span>
                <span>App integrations (Klaviyo, ReCharge, Judge.me, custom apps)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#999999] select-none font-bold">—</span>
                <span>Store performance &amp; speed optimization</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#999999] select-none font-bold">—</span>
                <span>Headless Shopify &amp; Hydrogen</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#999999] select-none font-bold">—</span>
                <span>Webflow, WordPress &amp; custom CMS development</span>
              </li>
            </ul>
          </div>

          {/* Editorial Specs / Provenance note & Availability */}
          <div className="overflow-hidden pt-4">
            <div
              className="border-t border-[#EEEEEE] pt-4 flex flex-wrap items-center justify-between gap-3 text-[12px] sm:text-[13px] font-mono text-[#666666] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: isInView ? 'translateY(0)' : 'translateY(100%)',
                opacity: isInView ? 1 : 0,
                transitionDelay: '700ms',
              }}
            >
              <span>BASED IN LONDON &amp; GLOBAL</span>
              <span className="text-[#010101] font-semibold">AVAILABLE FOR PROJECTS — Q3/Q4 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
