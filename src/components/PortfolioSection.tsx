'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Project } from '@/types';
import { PROJECTS_DATA } from '@/data';
import { Film, Play } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProject: (project: Project) => void;
}

export default function PortfolioSection({ onSelectProject }: PortfolioSectionProps) {
  const [filter, setFilter] = useState<string>('Todos');

  const categories = ['Todos', 'Comercial', 'Inmobiliario', 'Fotografía', 'Edición'];

  const filteredProjects = filter === 'Todos'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category.toLowerCase() === filter.toLowerCase());

  return (
    <section id="portafolio" className="py-24 bg-gray-50 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase font-mono">
              Trabajos Recientes
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 tracking-tight mt-1">
              Portafolio
            </h2>
            <p className="text-gray-500 font-sans text-sm mt-1.5">
              Historias contadas cuadro por cuadro. Explora mis últimos proyectos.
            </p>
          </div>

          {/* Filter Navigation */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  filter === cat
                    ? 'bg-black text-white shadow-sm'
                    : 'bg-white text-gray-500 hover:text-black hover:bg-gray-100 border border-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Bento/Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className={`bg-white rounded-2xl border border-gray-100 overflow-hidden cursor-pointer group shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 flex flex-col ${
                project.aspect === 'video' ? 'lg:col-span-2' : 'lg:col-span-1'
              }`}
            >
              {/* Image Thumbnail Container */}
              <div className={`relative overflow-hidden bg-gray-100 ${
                project.aspect === 'video' ? 'aspect-[21/9]' : 'aspect-square'
              }`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-300">
                    <Play className="w-5 h-5 text-black fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Left Badge (duration) */}
                <span className="absolute bottom-3 left-3 bg-black/85 text-white text-[9px] font-mono tracking-widest px-2.5 py-1 rounded-md font-bold">
                  {project.duration} MIN
                </span>
              </div>

              {/* Text Info */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Film className="w-3.5 h-3.5 text-black" />
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-mono">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-sans font-extrabold text-lg text-gray-900 tracking-tight line-clamp-1 group-hover:text-black transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 font-sans text-xs mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technical Meta Footer */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-6 text-[9px] text-gray-400 font-mono font-bold tracking-wider">
                  <span>CLIENTE: {project.client.toUpperCase()}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if category has no projects */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white border border-dashed border-gray-200 rounded-xl">
            <p className="text-gray-400 font-sans text-sm">No hay proyectos disponibles en esta categoría.</p>
          </div>
        )}
      </div>
    </section>
  );
}
