import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { ProjectRow } from './ProjectRow';
import { ProjectPreview } from './ProjectPreview';
import { studioProjects } from '../data/projects';
import { ProjectItem } from '../types';

export const StudioWork: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="work"
      onMouseMove={handleMouseMove}
      className="relative w-full max-w-[1147px] mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24"
    >
      {/* Floating cursor preview for desktop */}
      <ProjectPreview activeProject={activeProject} cursorPos={cursorPos} />

      {/* Section Header */}
      <SectionHeader
        id="studio-work-header"
        category="[INDEX // 01]"
        title="SELECTED STUDIO WORK"
        description="Creative development for studios, agencies and brands."
      />

      {/* Editorial Index Bar */}
      <div className="py-3 flex justify-between items-baseline border-b border-[#EEEEEE] mb-1">
        <h3 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#666666] font-mono">
          Selected Studio Work
        </h3>
        <span className="text-[11px] font-mono text-[#666666]">2024 — 2025</span>
      </div>

      {/* Editorial Project Index (NO CARD GRID) */}
      <div id="studio-projects-list" className="w-full">
        {studioProjects.map((project, index) => (
          <ProjectRow
            key={project.id}
            project={project}
            isFirst={index === 0}
            onMouseEnter={(p) => setActiveProject(p)}
            onMouseLeave={() => setActiveProject(null)}
          />
        ))}
      </div>
    </section>
  );
};
