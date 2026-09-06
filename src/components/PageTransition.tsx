import React from 'react';

interface PageTransitionProps {
  isTransitioning: boolean;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ isTransitioning }) => {
  return (
    <div
      id="page-transition-overlay"
      aria-hidden="true"
      className={`fixed inset-0 z-50 pointer-events-none transition-transform duration-[550ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isTransitioning ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{
        backgroundColor: '#010101',
      }}
    >
      <div className="w-full h-full flex items-center justify-center">
        <span className="text-[#F6F4F1] font-mono text-[12px] tracking-widest uppercase opacity-70">
          JANSHER ALI // REDIRECT
        </span>
      </div>
    </div>
  );
};
