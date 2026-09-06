import React, { useState } from 'react';
import { ProjectItem } from '../types';

interface ProjectRowProps {
  project: ProjectItem;
  isFirst?: boolean;
  onMouseEnter: (project: ProjectItem) => void;
  onMouseLeave: () => void;
}

export const ProjectRow: React.FC<ProjectRowProps> = ({
  project,
  isFirst = false,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isExpandedMobile, setIsExpandedMobile] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    // Check if on touch/mobile device
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      // Toggle expansion on mobile
      setIsExpandedMobile(!isExpandedMobile);
      return;
    }

    // On desktop: brief press scale 1 -> 0.98 -> 1 then open URL
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
      window.open(project.url, '_blank', 'noopener,noreferrer');
    }, 120);
  };

  return (
    <div
      id={`project-row-${project.id}`}
      className={`relative w-full border-b border-[#EEEEEE] ${
        isFirst ? 'border-t' : ''
      }`}
    >
      <div
        onClick={handleClick}
        onMouseEnter={() => {
          setIsHovered(true);
          onMouseEnter(project);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          onMouseLeave();
        }}
        className={`project-row group relative w-full px-2 sm:px-4 py-5 sm:py-7 md:py-8 rounded-[6px] cursor-pointer select-none transition-all duration-500 hover:bg-[#EAE8E5]/70 ${
          isPressed ? 'scale-[0.98]' : 'scale-100'
        }`}
      >
        <div className="grid grid-cols-12 items-baseline gap-2 sm:gap-4 md:gap-8">
          {/* Project Number (Section 16: slightly changes position on hover) */}
          <div className="col-span-2 sm:col-span-1">
            <span
              className={`project-num font-mono text-[11px] sm:text-[12px] font-light text-[#666666] tracking-wider transition-all duration-500 inline-block ${
                isHovered ? 'translate-x-1 text-[#010101]' : 'translate-x-0'
              }`}
            >
              {project.number}
            </span>
          </div>

          {/* Project Title & Category */}
          <div className="col-span-8 sm:col-span-9 md:col-span-8 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            {/* Title */}
            <h3
              className={`project-title font-display font-medium text-[24px] sm:text-[34px] md:text-[42px] lg:text-[48px] tracking-tight leading-none text-[#010101] transition-transform duration-500 origin-left ${
                isHovered ? 'scale-[1.02]' : 'scale-100'
              }`}
            >
              {project.title}
            </h3>

            {/* Category */}
            <span
              className={`text-[12px] font-mono uppercase tracking-widest text-[#666666] transition-all duration-500 ${
                isHovered ? 'translate-x-2 text-[#010101]' : 'translate-x-0'
              }`}
            >
              {project.category}
            </span>
          </div>

          {/* Year & Live Arrow */}
          <div className="col-span-2 sm:col-span-2 md:col-span-3 text-right flex items-center justify-end gap-3">
            <span
              className={`font-mono text-[12px] font-medium tracking-wider text-[#666666] transition-opacity duration-500 ${
                isHovered ? 'opacity-100 text-[#010101]' : 'opacity-70'
              }`}
            >
              {project.year}
            </span>
            <span
              className={`hidden sm:inline-block text-[#010101] text-[15px] transition-all duration-500 ${
                isHovered ? 'translate-x-1 opacity-100' : 'opacity-0'
              }`}
            >
              ↗
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Accordion Expansion (Section 21: Mobile tap reveals preview & link) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isExpandedMobile ? 'max-h-[380px] pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
        }`}
      >
        <div className="pt-2">
          <div className="w-full h-[200px] rounded-[8px] overflow-hidden bg-[#111111] border border-[#222222] mb-3">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <p className="text-[13px] text-[#666666] font-mono">
              {project.role || 'CREATIVE DEVELOPMENT'}
            </p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#010101] underline underline-offset-4"
            >
              <span>VISIT LIVE SITE</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
