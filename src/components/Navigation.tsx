import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/officers', label: 'Officers' },
    { path: '/events', label: 'Events' },
    { path: '/join', label: 'Join Us' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass shadow-glass'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center space-x-2 text-xl font-bold text-primary hover:text-accent transition-all duration-300 group"
          >
            <div className="relative">
              <span className="bg-gradient-accent bg-clip-text text-transparent font-extrabold tracking-tight">
                MHHS SkillsUSA
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent transition-all duration-300 group-hover:w-full"></div>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative py-2 px-1 text-sm font-medium transition-all duration-300 hover:text-accent group ${
                    isActive
                      ? 'text-accent'
                      : isScrolled
                      ? 'text-foreground'
                      : 'text-white'
                  }`
                }
              >
                {item.label}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent transition-all duration-300 group-hover:w-full"></div>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent transition-all duration-300 group-hover:w-full opacity-50 blur-sm"></div>
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden relative overflow-hidden btn-modern"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={`transition-all duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4'
        } overflow-hidden`}>
          <div className="glass rounded-lg mt-4 p-6 space-y-4 shadow-glass max-h-80 overflow-y-auto">
            {navItems.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block py-3 px-4 text-lg font-medium rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    isActive
                      ? 'bg-gradient-accent text-accent-foreground shadow-glow'
                      : 'text-foreground hover:bg-accent/10 hover:text-accent'
                  }`
                }
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;