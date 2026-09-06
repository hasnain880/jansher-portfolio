import React, { useEffect, useRef, useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { digitalProjects } from '../data/projects';
import { ProjectItem } from '../types';

interface GalleryItemProps {
  project: ProjectItem;
  aspectClass?: string;
  delayOffset?: number;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  project,
  aspectClass = 'aspect-[16/10]',
  delayOffset = 0,
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = itemRef.current;
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
    <div
      ref={itemRef}
      id={`digital-${project.id}`}
      className="group flex flex-col"
    >
      {/* Media frame with 8-10px radius, no shadow */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative w-full ${aspectClass} rounded-[8px] overflow-hidden bg-[#111111] border border-[#222222] block cursor-pointer`}
      >
        <div
          className="w-full h-full transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transform: isInView ? 'scale(1)' : 'scale(1.05)',
            opacity: isInView ? 1 : 0.75,
            transitionDelay: `${delayOffset}ms`,
          }}
        >
          {/* Hover scale 1 -> 1.04, 0.6s */}
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
        </div>

        {/* Live link indicator */}
        <div className="absolute bottom-3 right-3 bg-[#010101]/85 text-[#F6F4F1] font-mono text-[10px] tracking-wider px-2 py-0.5 rounded-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          EXPLORE ↗
        </div>
      </a>

      {/* Metadata */}
      <div
        className="pt-3.5 flex flex-col transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          transform: isInView ? 'translateY(0)' : 'translateY(12px)',
          opacity: isInView ? 1 : 0,
          transitionDelay: `${delayOffset + 120}ms`,
        }}
      >
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display font-bold text-[19px] sm:text-[22px] tracking-tight text-[#010101]">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link"
            >
              {project.title}
            </a>
          </h3>
          <span className="font-mono text-[12px] text-[#666666]">{project.year}</span>
        </div>

        <div className="flex items-center justify-between mt-1 text-[12px] font-mono text-[#666666]">
          <span>{project.category}</span>
          <span className="hidden sm:inline text-[#222222]">{project.role}</span>
        </div>
      </div>
    </div>
  );
};

export const DigitalWork: React.FC = () => {
  const [b1, b2, b3, b4, b5, b6] = digitalProjects;

  return (
    <section
      id="digital"
      className="w-full max-w-[1147px] mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24"
    >
      <SectionHeader
        id="digital-work-header"
        category="[EXPERIENCES // 03]"
        title="SELECTED DIGITAL EXPERIENCES"
        description="Interactive narratives, brand platforms, and technical showcases crafted for forward-thinking organizations."
      />

      {/* Editorial gallery (NOT a standard 3-column grid) */}
      <div className="space-y-12 md:space-y-16">
        {/* Pair 1: 7-column + 5-column Asymmetry */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end">
          {b1 && (
            <div className="md:col-span-7">
              <GalleryItem project={b1} aspectClass="aspect-[16/10]" delayOffset={0} />
            </div>
          )}
          {b2 && (
            <div className="md:col-span-5">
              <GalleryItem project={b2} aspectClass="aspect-[4/3]" delayOffset={100} />
            </div>
          )}
        </div>

        {/* Pair 2: 5-column + 7-column Inverted Asymmetry */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
          {b3 && (
            <div className="md:col-span-5 md:mt-6">
              <GalleryItem project={b3} aspectClass="aspect-[4/3]" delayOffset={150} />
            </div>
          )}
          {b4 && (
            <div className="md:col-span-7">
              <GalleryItem project={b4} aspectClass="aspect-[16/10]" delayOffset={50} />
            </div>
          )}
        </div>

        {/* Pair 3: 8-column + 4-column Technical Alignment */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end">
          {b5 && (
            <div className="md:col-span-8">
              <GalleryItem project={b5} aspectClass="aspect-[16/9]" delayOffset={50} />
            </div>
          )}
          {b6 && (
            <div className="md:col-span-4">
              <GalleryItem project={b6} aspectClass="aspect-[1/1]" delayOffset={150} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
