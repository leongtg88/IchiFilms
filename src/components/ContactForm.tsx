import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Mail, Phone, MessageSquare, Check, Send } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactFormProps {
  preselectedService: string;
}

export default function ContactForm({ preselectedService }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    email: '',
    telefono: '',
    servicio: 'Video Comercial',
    mensaje: '',
    newsletter: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, servicio: preselectedService }));
      // Scroll to contact form smoothly
      const element = document.getElementById('contacto');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [preselectedService]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form (except if they need it)
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      servicio: 'Video Comercial',
      mensaje: '',
      newsletter: true
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contacto" className="py-24 bg-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title / Intro */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase font-mono">
            Comencemos Hoy
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 tracking-tight mt-1">
            ¿Tienes un proyecto en mente? Hablemos.
          </h2>
          <p className="text-gray-500 font-sans text-sm mt-3 leading-relaxed">
            Escríbeme tus ideas y te responderé con un presupuesto aproximado y propuesta creativa en menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Panel: Alternative Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 space-y-8 shadow-sm">
              <h3 className="font-sans font-bold text-lg text-gray-900 tracking-tight">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                {/* Email item */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-black/5 text-black rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">
                      Correo Electrónico
                    </p>
                    <a
                      href="mailto:leongtg88@gmail.com"
                      className="text-sm font-semibold text-gray-800 hover:text-black transition-colors"
                    >
                      leongtg88@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp Item */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">
                      WhatsApp Directo
                    </p>
                    <a
                      href="https://wa.me/34600000000?text=Hola!%20Me%20gustaría%20cotizar%20un%20proyecto%20audiovisual."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-gray-800 hover:text-emerald-600 transition-colors"
                    >
                      +34 600 000 000
                    </a>
                  </div>
                </div>

                {/* Office/Response speed */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-amber-55 bg-amber-50 text-amber-700 rounded-xl shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">
                      Tiempo de Respuesta
                    </p>
                    <p className="text-sm font-medium text-gray-600">
                      Generalmente en menos de 2 horas en días laborables.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Aesthetic quote/motto block */}
            <div className="border-l-2 border-gray-950 pl-6 py-2 italic text-gray-500 text-sm font-sans leading-relaxed">
              "Una toma vale más que mil presupuestos. Definamos el estilo de tu marca y construyamos algo inolvidable."
            </div>
          </div>

          {/* Right Panel: Interactive Form as Black Bento Card */}
          <div className="lg:col-span-7 bg-black text-white rounded-2xl border border-neutral-900 p-8 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-6 animate-fade-in">
                <div className="w-16 h-16 bg-white/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-sm border border-neutral-800">
                  <Check className="w-8 h-8 stroke-[3px]" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-xl text-white tracking-tight">
                    ¡Mensaje recibido con éxito!
                  </h3>
                  <p className="text-neutral-400 font-sans text-sm max-w-md mx-auto leading-relaxed">
                    Muchas gracias por contactarme, <span className="font-semibold text-white">{formData.nombre}</span>. He recibido tu solicitud para <span className="font-semibold text-neutral-200">{formData.servicio}</span> y me pondré a revisar los detalles de inmediato.
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 border border-neutral-800 text-neutral-300 hover:bg-neutral-900 text-xs font-bold uppercase tracking-widest rounded-xl transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider font-mono">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre y apellido"
                      className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-sm font-sans focus:outline-none focus:border-neutral-500 focus:bg-neutral-850 transition-all text-white placeholder-neutral-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider font-mono">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="ejemplo@correo.com"
                      className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-sm font-sans focus:outline-none focus:border-neutral-500 focus:bg-neutral-850 transition-all text-white placeholder-neutral-500"
                    />
                  </div>
                </div>

                {/* Row 2: Phone and Service dropdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider font-mono">
                      Teléfono <span className="text-neutral-500 lowercase font-normal">(opcional)</span>
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+34 600 000 000"
                      className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-sm font-sans focus:outline-none focus:border-neutral-500 focus:bg-neutral-850 transition-all text-white placeholder-neutral-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider font-mono">
                      ¿Qué servicio necesitas?
                    </label>
                    <select
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-sm font-sans focus:outline-none focus:border-neutral-500 transition-all text-white"
                    >
                      <option className="bg-neutral-950 text-white" value="Video Comercial">Video Comercial</option>
                      <option className="bg-neutral-950 text-white" value="Fotografía Profesional">Fotografía Profesional</option>
                      <option className="bg-neutral-950 text-white" value="Edición y Post-producción">Edición y Post-producción</option>
                      <option className="bg-neutral-950 text-white" value="Bienes Raíces">Bienes Raíces</option>
                      <option className="bg-neutral-950 text-white" value="Otro">Otro proyecto audiovisual</option>
                    </select>
                  </div>
                </div>

                {/* Message TextArea */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider font-mono">
                    Háblame de tu proyecto
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Describe brevemente tus objetivos, plazos esperados, ideas clave..."
                    className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-sm font-sans focus:outline-none focus:border-neutral-500 focus:bg-neutral-850 transition-all text-white placeholder-neutral-500 resize-none"
                  />
                </div>

                {/* Action Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-white hover:bg-neutral-100 text-black text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-sm disabled:bg-neutral-850 disabled:text-neutral-500"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Enviando solicitud...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar mensaje</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/34600000000?text=Hola!%20Me%20gustaría%20cotizar%20un%20proyecto%20audiovisual."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
        title="Contactar por WhatsApp"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-current"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </section>
  );
}
