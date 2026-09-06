import React, { useEffect, useRef, useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { ecommerceProjects } from '../data/projects';
import { ProjectItem } from '../types';

interface AsymmetricCardProps {
  project: ProjectItem;
  size?: 'large' | 'medium' | 'tall';
  className?: string;
  delayOffset?: number;
}

const AsymmetricProjectItem: React.FC<AsymmetricCardProps> = ({
  project,
  size = 'medium',
  className = '',
  delayOffset = 0,
}) => {
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

  const heightClasses = {
    large: 'h-[360px] sm:h-[480px] md:h-[560px]',
    medium: 'h-[280px] sm:h-[380px] md:h-[440px]',
    tall: 'h-[340px] sm:h-[440px] md:h-[500px]',
  }[size];

  return (
    <div
      ref={containerRef}
      id={`ecom-${project.id}`}
      className={`group flex flex-col ${className}`}
    >
      {/* Media Container with 8-12px radius, NO shadow, overflow hidden */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative w-full ${heightClasses} rounded-[10px] overflow-hidden bg-[#111111] border border-[#222222] cursor-pointer block`}
      >
        {/* Entrance motion: scale 1.05, opacity 0.75 -> scale 1, opacity 1 (0.8s) */}
        <div
          className="w-full h-full transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transform: isInView ? 'scale(1)' : 'scale(1.05)',
            opacity: isInView ? 1 : 0.75,
            transitionDelay: `${delayOffset}ms`,
          }}
        >
          {/* Hover motion: scale 1 -> 1.04 (0.6s) */}
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
        </div>

        {/* Subtle hover badge */}
        <div className="absolute top-4 right-4 bg-[#010101]/80 text-[#F6F4F1] font-mono text-[11px] px-2.5 py-1 rounded-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          VISIT STORE ↗
        </div>
      </a>

      {/* Editorial typography below image, reveals slightly after */}
      <div
        className="pt-4 flex flex-col transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          transform: isInView ? 'translateY(0)' : 'translateY(12px)',
          opacity: isInView ? 1 : 0,
          transitionDelay: `${delayOffset + 150}ms`,
        }}
      >
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display font-bold text-[20px] sm:text-[24px] tracking-tight text-[#010101]">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link"
            >
              {project.title}
            </a>
          </h3>
          <span className="font-mono text-[12px] sm:text-[13px] text-[#666666]">
            {project.year}
          </span>
        </div>

        <div className="flex items-center justify-between mt-1 text-[13px] font-mono text-[#666666]">
          <span>{project.category}</span>
          <span className="text-[12px] text-[#222222]">{project.role}</span>
        </div>
      </div>
    </div>
  );
};

export const EcommerceWork: React.FC = () => {
  const [p1, p2, p3, p4, p5] = ecommerceProjects;

  return (
    <section
      id="ecommerce"
      className="w-full max-w-[1147px] mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24"
    >
      <SectionHeader
        id="ecommerce-header"
        category="[COMMERCE // 02]"
        title="SELECTED E-COMMERCE"
        description="High-velocity storefronts, custom checkout architectures, and headless drops for fashion and design brands."
      />

      {/* Asymmetric composition: Large + Asymmetric Pair + Asymmetric Pair */}
      <div className="space-y-12 md:space-y-20">
        {/* Row 1: Large Featured Flagship (MOWALOLA) */}
        {p1 && (
          <div className="w-full">
            <AsymmetricProjectItem
              project={p1}
              size="large"
              delayOffset={0}
            />
          </div>
        )}

        {/* Row 2: Asymmetric Grid (IDA SHOP: 5 cols, ILIXA SKIN: 7 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {p2 && (
            <div className="md:col-span-5">
              <AsymmetricProjectItem
                project={p2}
                size="medium"
                delayOffset={100}
              />
            </div>
          )}
          {p3 && (
            <div className="md:col-span-7 md:mt-12">
              <AsymmetricProjectItem
                project={p3}
                size="tall"
                delayOffset={200}
              />
            </div>
          )}
        </div>

        {/* Row 3: Inverted Asymmetric Grid (CHIARA FAIRFAX: 7 cols, DAISY FACE: 5 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {p4 && (
            <div className="md:col-span-7">
              <AsymmetricProjectItem
                project={p4}
                size="tall"
                delayOffset={100}
              />
            </div>
          )}
          {p5 && (
            <div className="md:col-span-5 md:mt-8">
              <AsymmetricProjectItem
                project={p5}
                size="medium"
                delayOffset={200}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
