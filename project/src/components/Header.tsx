import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Types
interface NavItem {
  label: string;
  href: string;
}

// Constants
const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '/contact' }
];

const BRAND_COLOR = '#34bfbd';

const Header: React.FC = () => {
  // State
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Effects
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handlers
  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  // Render
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-20">

          {/* Logo */}
          <div className="flex items-center shrink-0">
            <img
              src="/public/images/noorifyLogo.png"
              alt="Noorify Logo"
              className="h-44 w-44 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}

            <button
              className="px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
              style={{
                background: BRAND_COLOR,
                boxShadow: `0 4px 14px 0 rgba(52, 191, 189, 0.25)`
              }}
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4 mt-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}

              <button
                className="px-6 py-2 rounded-full w-fit"
                style={{ background: BRAND_COLOR }}
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;