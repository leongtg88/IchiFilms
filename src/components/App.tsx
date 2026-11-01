'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ServiceCard from '@/components/ServiceCard';
import PortfolioSection from '@/components/PortfolioSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactForm from '@/components/ContactForm';
import ProjectModal from '@/components/ProjectModal';
import { SERVICES_DATA } from '@/data';
import { Project } from '@/types';
import { ArrowDown, Instagram, Linkedin, Youtube, Film } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [preselectedService, setPreselectedService] = useState('');

  // Intersection Observer to highlight the active menu item in header on scroll
  useEffect(() => {
    const sections = ['inicio', 'servicios', 'portafolio', 'contacto'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuoteService = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    // Reset preselection after setting so subsequent triggers work
    setTimeout(() => setPreselectedService(''), 100);
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen text-gray-800 antialiased selection:bg-black selection:text-white">
      {/* Header & Nav */}
      <Navbar activeSection={activeSection} />

      {/* Hero / Inicio Section */}
      <section
        id="inicio"
        className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black text-white"
      >
        {/* Dynamic Video Loop Background with Poster fallback */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="https://lh3.googleusercontent.com/aida-public/AB6AXuBm64XIKf9eVHEp0ZNFdLsuqfOSaFg6p60l_LjRXkgYLeXjNQN-AEqIUVhhlhxkiRpqgMfj6fEbSiyp0fwfFeEkuWKfK8c8NwlInAwOfq62ujy38N-Sutpjuo-lzOQMrf6gnnQVa8TibaUvlRG0ziqKoxxTkvx9DHtcGN6-WsCvRjCsx4ohgg7lPiN6Duc-qciStm38pAEyJPCqGL6zKB05rInYVHYvhzcnzBDlzUXFoVP0tlnOlGH9"
            className="w-full h-full object-cover opacity-45"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-photographer-holding-camera-with-gimbal-41618-large.mp4"
              type="video/mp4"
            />
            Su navegador no soporta videos HTML5.
          </video>
          {/* Fallback overlay gradient to ensure clean readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-[#F8F9FA]" />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-8 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase font-mono">
            <Film className="w-3.5 h-3.5 text-white" />
            <span>Integral Filmmaker & Photographer</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold tracking-tight leading-[1.1] text-white">
            Producción audiovisual para marcas, propiedades y comerciales.
          </h1>

          <p className="text-gray-300 font-sans text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Historias narradas en movimiento con colorimetría editorial y tomas fluidas de alto impacto para potenciar tus ventas y presencia digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="#portafolio"
              className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 hover:bg-neutral-100 font-sans font-bold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Ver mi trabajo</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
            <a
              href="#contacto"
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10 font-sans font-bold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Contacto Directo
            </a>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-24 bg-white scroll-mt-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Header Title */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase font-mono">
              Áreas de Especialización
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 tracking-tight mt-1">
              Servicios Profesionales
            </h2>
            <p className="text-gray-500 font-sans text-sm mt-3 leading-relaxed">
              Soluciones audiovisuales integrales desde el guion técnico hasta la corrección de color final en DaVinci Resolve.
            </p>
          </div>

          {/* Service grid: 2 cols on tablet/desktop, 1 col on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES_DATA.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onQuote={handleQuoteService}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Portafolio Section */}
      <PortfolioSection onSelectProject={setSelectedProject} />

      {/* Sobre Mi Section */}
      <AboutSection />

      {/* Testimonios Section */}
      <TestimonialsSection />

      {/* Contacto Form Section */}
      <ContactForm preselectedService={preselectedService} />

      {/* Project Video Player Modal popup */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Footer */}
      <footer className="bg-black text-neutral-400 py-16 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <svg
              viewBox="0 0 100 70"
              className="w-8 h-5.5 text-white"
              fill="currentColor"
            >
              <path d="M 22,18 L 54,18 L 78,42 L 66,42 L 50,26 L 22,26 Z" />
              <path d="M 34,46 L 58,22 L 70,22 L 46,46 Z" />
              <path d="M 54,42 L 74,42 L 78,46 L 58,46 Z" />
            </svg>
            <span className="font-sans font-black text-lg tracking-tighter text-white lowercase">
              ichifilms
            </span>
          </div>

          <p className="text-xs font-sans text-neutral-500">
            © 2026 ichifilms - Productora Audiovisual. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Sigueme en Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Sigueme en LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Sigueme en YouTube/Vimeo"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
