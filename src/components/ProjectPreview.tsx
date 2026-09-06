import React, { useEffect, useRef, useState } from 'react';
import { ProjectItem } from '../types';

interface ProjectPreviewProps {
  activeProject: ProjectItem | null;
  cursorPos: { x: number; y: number };
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  activeProject,
  cursorPos,
}) => {
  const [displayedProject, setDisplayedProject] = useState<ProjectItem | null>(null);
  const [isExiting, setIsExiting] = useState(false);
  const [imgParallax, setImgParallax] = useState({ x: 0, y: 0 });

  // Lerped position state
  const posRef = useRef({ x: 0, y: 0 });
  const [renderPos, setRenderPos] = useState({ x: 0, y: 0 });
  const animFrameRef = useRef<number | null>(null);

  // Smooth lerp following mouse with 80-120ms lag
  useEffect(() => {
    let active = true;

    const loop = () => {
      if (!active) return;

      const targetX = cursorPos.x + 28; // offset from cursor
      const targetY = cursorPos.y - 140; // centered-ish vertically

      // Lerp factor ~ 0.12 gives smooth ~90ms latency
      posRef.current.x += (targetX - posRef.current.x) * 0.12;
      posRef.current.y += (targetY - posRef.current.y) * 0.12;

      setRenderPos({
        x: Math.round(posRef.current.x * 10) / 10,
        y: Math.round(posRef.current.y * 10) / 10,
      });

      // Subtle parallax calculation for inner image (max 8-12px)
      const relX = (cursorPos.x - window.innerWidth / 2) / (window.innerWidth / 2);
      const relY = (cursorPos.y - window.innerHeight / 2) / (window.innerHeight / 2);
      setImgParallax({
        x: Math.round(relX * 10),
        y: Math.round(relY * 8),
      });

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      active = false;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [cursorPos]);

  // Project transition handling (cross-fade & continuous feel)
  useEffect(() => {
    if (activeProject) {
      setIsExiting(false);
      setDisplayedProject(activeProject);
    } else {
      // Fade out
      setIsExiting(true);
      const timeout = setTimeout(() => {
        setDisplayedProject(null);
        setIsExiting(false);
      }, 350);
      return () => clearTimeout(timeout);
    }
  }, [activeProject]);

  if (!displayedProject && !activeProject) return null;

  const isVisible = Boolean(activeProject) && !isExiting;

  return (
    <div
      id="floating-project-preview"
      className="pointer-events-none fixed z-50 hidden md:block"
      style={{
        left: 0,
        top: 0,
        transform: `translate3d(${renderPos.x}px, ${renderPos.y}px, 0)`,
        willChange: 'transform',
      }}
    >
      <div
        className="relative w-[340px] h-[220px] rounded-[8px] overflow-hidden bg-[#111111] border border-[#222222] transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(10px)',
          boxShadow: 'none', // Strict anti-slop mandate: NO DROP SHADOWS
        }}
      >
        {/* Preview image with subtle 8-12px movement and scale */}
        {displayedProject && (
          <img
            src={displayedProject.image}
            alt={displayedProject.title}
            className="w-full h-full object-cover transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: `scale(1.03) translate3d(${imgParallax.x}px, ${imgParallax.y}px, 0)`,
            }}
            referrerPolicy="no-referrer"
          />
        )}

        {/* Tiny subtle "VIEW" badge as permitted in section 15 */}
        <div className="absolute bottom-3 right-3 bg-[#010101]/85 border border-[#333333] text-[#F6F4F1] font-mono text-[10px] tracking-wider px-2 py-0.5 rounded-[4px]">
          VIEW ↗
        </div>
      </div>
    </div>
  );
};
