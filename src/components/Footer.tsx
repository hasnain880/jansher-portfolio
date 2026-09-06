import React, { useEffect, useState } from 'react';

export const Footer: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-GB', {
          timeZone: 'Europe/London',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' GMT'
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-[#EEEEEE] bg-[#F6F4F1] py-8 sm:py-10 text-[11px] sm:text-[12px] font-mono text-[#666666]">
      <div className="max-w-[1147px] mx-auto px-4 sm:px-6 md:px-8 space-y-6">
        {/* Top bar: Technical capabilities ticker */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EEEEEE] pb-6">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-bold text-[#010101]">
              DEVELOPMENT PARTNER
            </span>
            <span className="text-[10px] text-[#999999]">•</span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#666666]">
              WEBFLOW
            </span>
            <span className="text-[10px] text-[#999999]">•</span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#666666]">
              SHOPIFY
            </span>
            <span className="text-[10px] text-[#999999]">•</span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#666666]">
              REACT
            </span>
            <span className="text-[10px] text-[#999999]">•</span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#666666]">
              GSAP
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono">
            <span>LDN:</span>
            <span className="text-[#010101] font-medium">{time || '00:00:00 GMT'}</span>
          </div>
        </div>

        {/* Bottom bar: Copyright & Back to top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#010101]" />
            <span className="text-[#010101] font-semibold text-[10px] uppercase tracking-widest">
              © 2025 JANSHER ALI
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#999999]">
              · ALL RIGHTS RESERVED
            </span>
          </div>

          <div>
            <button
              onClick={scrollToTop}
              className="editorial-link text-[#010101] hover:text-[#000000] font-medium text-[11px] uppercase tracking-widest"
            >
              BACK TO TOP ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
