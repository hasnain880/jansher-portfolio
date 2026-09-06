import React, { useEffect, useRef, useState } from 'react';

interface SectionDividerProps {
  className?: string;
  id?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ className = '', id }) => {
  const dividerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = dividerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={dividerRef}
      id={id}
      className={`w-full max-w-[1147px] mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 ${className}`}
    >
      <div className="w-full h-[1px] bg-[#EEEEEE] overflow-hidden">
        <div
          className="h-full bg-[#EEEEEE] w-full transition-transform ease-[cubic-bezier(0.16,1,0.3,1)] duration-700"
          style={{
            transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left',
          }}
        />
      </div>
    </div>
  );
};
