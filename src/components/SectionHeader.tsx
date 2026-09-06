import React, { useEffect, useRef, useState } from 'react';

interface SectionHeaderProps {
  id?: string;
  category?: string;
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  id,
  category,
  title,
  description,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      id={id}
      className={`mb-12 md:mb-16 ${className}`}
    >
      {category && (
        <div className="overflow-hidden mb-2">
          <p
            className="text-[13px] font-mono tracking-widest text-[#666666] uppercase transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
              opacity: isVisible ? 1 : 0,
            }}
          >
            {category}
          </p>
        </div>
      )}

      <div className="overflow-hidden">
        <h2
          className="font-display font-medium text-[28px] sm:text-[32px] md:text-[36px] tracking-tight leading-[1.2] text-[#010101] transition-all duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
            opacity: isVisible ? 1 : 0,
          }}
        >
          {title}
        </h2>
      </div>

      {description && (
        <div className="overflow-hidden mt-3 max-w-xl">
          <p
            className="text-[#666666] text-[15px] sm:text-[16px] leading-[1.5] transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
              opacity: isVisible ? 1 : 0,
            }}
          >
            {description}
          </p>
        </div>
      )}
    </div>
  );
};
