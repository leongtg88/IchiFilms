import { TESTIMONIALS_DATA } from '../data';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase font-mono">
          Garantía De Confianza
        </span>
        <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 tracking-tight mt-1 mb-16">
          Lo que dicen mis clientes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl border border-gray-100 p-8 text-left shadow-sm relative flex flex-col justify-between hover:border-gray-200 transition-colors"
            >
              <div>
                <Quote className="w-8 h-8 text-neutral-100 absolute top-6 right-6" />
                <p className="font-sans text-gray-600 italic text-sm md:text-base leading-relaxed mb-6 pt-2 relative z-10">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="border-t border-gray-100 pt-4 mt-2">
                <p className="font-sans font-bold text-sm text-gray-900">
                  {testimonial.author}
                </p>
                <p className="font-sans text-xs text-gray-500 mt-0.5">
                  {testimonial.role} — <strong className="text-gray-700 font-semibold">{testimonial.company}</strong>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
