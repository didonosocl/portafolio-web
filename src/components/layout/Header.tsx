'use client';

import React, { useState, useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { NavigationItem } from '@/types';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/theme-provider';

interface HeaderProps {
  navigation: NavigationItem[];
  logo?: {
    text: string;
    image?: string;
  };
}

/**
 * Componente Header con navegación responsive
 * Incluye navegación principal, toggle de tema y menú móvil
 */
export const Header: React.FC<HeaderProps> = ({ 
  navigation, 
  logo = { text: 'Diego' } 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm' 
        : 'bg-transparent'
      }
    `}>
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {logo.image && (
              <img 
                src={logo.image} 
                alt={logo.text}
                className="h-8 w-8 rounded-full"
              />
            )}
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {logo.text}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "text-gray-700 hover:text-blue-600 dark:text-gray-300",
                  "dark:hover:text-blue-400 transition-colors duration-200",
                  "font-medium text-sm"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
              }}
              className={cn(
                "p-2 rounded-lg text-gray-700 hover:text-blue-600",
                "dark:text-gray-300 dark:hover:text-blue-400",
                "hover:bg-gray-100 dark:hover:bg-gray-800",
                "transition-colors duration-200"
              )}
              aria-label="Toggle theme"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
                />
              </svg>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "md:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600",
                "dark:text-gray-300 dark:hover:text-blue-400",
                "hover:bg-gray-100 dark:hover:bg-gray-800",
                "transition-colors duration-200"
              )}
              aria-label="Toggle menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white dark:bg-gray-900 border-t 
                        border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 
                           dark:text-gray-300 dark:hover:text-blue-400 
                           hover:bg-gray-100 dark:hover:bg-gray-800
                           transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;