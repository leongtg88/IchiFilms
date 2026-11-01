import { useState, useEffect } from 'react';
import { Menu, X, Film } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '#inicio', id: 'inicio' },
    { label: 'Servicios', href: '#servicios', id: 'servicios' },
    { label: 'Portafolio', href: '#portafolio', id: 'portafolio' },
    { label: 'Contacto', href: '#contacto', id: 'contacto' }
  ];

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <svg
            viewBox="0 0 100 70"
            className={`w-9 h-6 transition-transform duration-300 group-hover:scale-[1.05] ${
              scrolled ? 'text-black' : 'text-white'
            }`}
            fill="currentColor"
          >
            {/* Top bold bent stroke */}
            <path d="M 22,18 L 54,18 L 78,42 L 66,42 L 50,26 L 22,26 Z" />
            {/* Lower parallel stroke */}
            <path d="M 34,46 L 58,22 L 70,22 L 46,46 Z" />
            {/* Small accent rectangle */}
            <path d="M 54,42 L 74,42 L 78,46 L 58,46 Z" />
          </svg>
          <span className={`font-sans font-black text-xl tracking-tighter lowercase transition-colors duration-300 ${
            scrolled ? 'text-gray-950' : 'text-white'
          }`}>
            ichifilms
          </span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex gap-10 items-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`font-sans font-medium text-sm tracking-wide relative py-1 transition-colors duration-300 ${
                  isActive
                    ? scrolled
                      ? 'text-gray-900 font-semibold'
                      : 'text-white font-semibold'
                    : scrolled
                    ? 'text-gray-500 hover:text-gray-900'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] transition-transform duration-300 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  } ${scrolled ? 'bg-gray-900' : 'bg-white'}`}
                />
              </a>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors duration-300 focus:outline-none ${
            scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle Menu"
          id="mobile-menu-toggle"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <div
        id="mobile-navigation-drawer"
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 transition-all duration-300 shadow-xl overflow-hidden ${
          isOpen ? 'max-h-72 opacity-100 py-4' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-6 gap-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`font-sans font-medium text-base py-2 border-b border-gray-50 last:border-0 ${
                activeSection === item.id
                  ? 'text-gray-900 font-bold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
