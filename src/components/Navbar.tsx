import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (targetId: string) => void;
  theme?: 'light' | 'dark';
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigate,
  theme = 'light',
  onToggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompressed, setIsCompressed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Compress when scrolling down past 120px, expand when scrolling up
      if (currentScrollY > 120 && currentScrollY > lastScrollY) {
        setIsCompressed(true);
      } else {
        setIsCompressed(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(targetId);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled
          ? 'bg-[#F6F4F1]/95 backdrop-blur-[2px] border-b border-[#EEEEEE]'
          : 'bg-transparent border-b border-transparent'
      } ${isCompressed ? 'py-3 sm:py-4 -translate-y-1' : 'py-5 sm:py-7 translate-y-0'}`}
    >
      <div className="max-w-[1147px] mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Brand Name */}
        <a
          id="nav-brand"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-2 text-[#010101] font-geist font-bold tracking-tight text-[14px] uppercase"
        >
          <span>JANSHER ALI</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#010101] opacity-70 group-hover:scale-125 transition-transform duration-300" />
        </a>

        {/* Desktop Navigation */}
        <nav id="nav-desktop-links" className="hidden md:flex items-center gap-7 text-[12px] uppercase tracking-widest font-geist font-bold">
          <a
            id="nav-link-work"
            href="#work"
            onClick={(e) => handleLinkClick(e, 'work')}
            className="editorial-link text-[#010101] hover:text-[#000000] transition-colors duration-200"
          >
            WORK
          </a>
          <a
            id="nav-link-about"
            href="#about"
            onClick={(e) => handleLinkClick(e, 'about')}
            className="editorial-link text-[#010101] hover:text-[#000000] transition-colors duration-200"
          >
            ABOUT
          </a>
          <a
            id="nav-link-contact"
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="editorial-link text-[#010101] hover:text-[#000000] transition-colors duration-200"
          >
            CONTACT
          </a>

          {/* Light and Dark Theme Toggle Button */}
          <button
            id="theme-toggle-btn"
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-current text-[11px] font-mono tracking-widest text-[#010101] hover:opacity-75 transition-all duration-300 cursor-pointer select-none"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-3.5 h-3.5" />
                <span>LIGHT</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5" />
                <span>DARK</span>
              </>
            )}
          </button>
        </nav>

        {/* Mobile Header: Quick Theme Toggle & Menu Toggle */}
        <div className="md:hidden flex items-center gap-2.5">
          <button
            id="mobile-header-theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="flex items-center justify-center w-8 h-8 rounded-full border border-current text-[#010101] focus:outline-none"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            id="nav-mobile-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col justify-center items-center w-8 h-8 gap-1.5 text-[#010101] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <span
              className={`w-5 h-[1.5px] bg-[#010101] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                mobileMenuOpen ? 'rotate-45 translate-y-[3.75px]' : ''
              }`}
            />
            <span
              className={`w-5 h-[1.5px] bg-[#010101] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                mobileMenuOpen ? '-rotate-45 -translate-y-[3.75px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="nav-mobile-drawer"
        className={`md:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] bg-[#F6F4F1] border-b border-[#EEEEEE] ${
          mobileMenuOpen ? 'max-h-80 opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="max-w-[1147px] mx-auto px-6 flex flex-col gap-4 text-[15px] font-geist font-bold tracking-wider uppercase">
          <a
            id="mobile-link-work"
            href="#work"
            onClick={(e) => handleLinkClick(e, 'work')}
            className="text-[#010101] py-1 hover:pl-2 transition-all duration-200"
          >
            WORK
          </a>
          <a
            id="mobile-link-about"
            href="#about"
            onClick={(e) => handleLinkClick(e, 'about')}
            className="text-[#010101] py-1 hover:pl-2 transition-all duration-200"
          >
            ABOUT
          </a>
          <a
            id="mobile-link-contact"
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="text-[#010101] py-1 hover:pl-2 transition-all duration-200"
          >
            CONTACT
          </a>

          {/* Theme Row inside drawer */}
          <div className="pt-3 mt-1 border-t border-[#EEEEEE] flex items-center justify-between">
            <span className="text-[12px] font-mono tracking-widest text-[#666666]">THEME</span>
            <button
              id="drawer-theme-toggle-btn"
              type="button"
              onClick={onToggleTheme}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-current text-[#010101] text-[11px] font-mono tracking-widest"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5" />
                  <span>LIGHT THEME</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5" />
                  <span>DARK THEME</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
