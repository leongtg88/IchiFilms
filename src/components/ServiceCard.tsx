'use client';

import React from 'react';
import { Service } from '@/types';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  key?: string | number;
  service: Service;
  onQuote: (serviceTitle: string) => void;
}

export default function ServiceCard({ service, onQuote }: ServiceCardProps) {
  // Map iconName to Lucide icons
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'movie':
        return <Icons.Film className="w-8 h-8 text-black" />;
      case 'camera':
        return <Icons.Camera className="w-8 h-8 text-black" />;
      case 'scissors':
        return <Icons.Scissors className="w-8 h-8 text-black" />;
      case 'home':
        return <Icons.Home className="w-8 h-8 text-black" />;
      default:
        return <Icons.Video className="w-8 h-8 text-black" />;
    }
  };

  return (
    <div
      id={`service-${service.id}`}
      className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col justify-between hover:border-gray-300 transition-all duration-300 hover:shadow-md group"
    >
      <div>
        {/* Header Icon + Emoji */}
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-gray-200 transition-colors duration-300 text-gray-900">
            {getIcon(service.iconName)}
          </div>
          <span className="text-3xl" role="img" aria-label={service.title}>
            
          </span>
        </div>

        {/* Title */}
        <h3 className="font-sans font-bold text-lg text-gray-900 tracking-tight mb-3">
          {service.title}
        </h3>

        {/* Description */}
        <p className="font-sans text-sm text-gray-500 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Details bullets */}
        <ul className="space-y-2.5 mb-8">
          {service.details.map((detail, index) => (
            <li key={index} className="flex items-start gap-2 text-xs text-gray-600 font-sans">
              <Icons.CheckCircle2 className="w-4 h-4 text-gray-900 shrink-0 mt-0.5" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Quote Button */}
      <button
        onClick={() => onQuote(service.title)}
        className="w-full py-3.5 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:scale-[1.01] active:scale-[0.99]"
      >
        <span>Cotizar este servicio</span>
        <Icons.ChevronRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
