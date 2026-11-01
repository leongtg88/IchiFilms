export default function AboutSection() {
  return (
    <section id="sobre-mi" className="py-24 bg-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Cover Portrait & Experience Badge */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf-1vYX08QrbghsVZV2efW8MJ4JQegT8E3BvwBYuvtoBWsisub9d9t8DdjmNBw2ZlKINrBkJfkQbLK_qhSYT5Js1vj-H-3R6EK46KiFZJS0j7rGnBIkP_bve-gjyKvwaSrcXFID1UZsJ0v1ZJf410U0OJFN8ish2LpcNZepRpqG0X26tD2trKkyAxOHUNqHSijM-oXe-AGiTjQ3Js45cS7dD5x1V_NGK6ZJdPkZ6lPeS8o7PKU87-C"
                alt="Filmmaker Profesional"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Absolute badge */}
            <div className="absolute -bottom-6 -right-6 bg-black text-white p-6 rounded-2xl shadow-xl hidden sm:block max-w-[200px] border border-neutral-800">
              <p className="font-sans font-extrabold text-3xl text-white">10+</p>
              <p className="font-sans text-[10px] tracking-widest text-neutral-400 uppercase font-bold mt-1.5 leading-snug">
                Años de experiencia integral
              </p>
            </div>
          </div>

          {/* Right Column: Bio Prose & Big Numbers */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase font-mono">
                Detrás De La Cámara
              </span>
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 tracking-tight mt-1">
                Productora Audiovisual y Creativa
              </h2>
            </div>
            
            <p className="font-sans text-base text-gray-600 leading-relaxed">
              Somos <strong className="text-gray-900">ichifilms</strong>, una productora audiovisual con más de 10 años de trayectoria activa. Ayudamos a marcas, agencias e inmobiliarias a relatar su propuesta única mediante videos y fotografías que capturan la atención desde el primer segundo.
            </p>
            
            <p className="font-sans text-base text-gray-600 leading-relaxed">
              Nuestra metodología de trabajo es altamente ágil, eliminando la burocracia técnica para ofrecer entregas puntuales, colorimetría cinematográfica y tomas dinámicas optimizadas para el mercado comercial e inmobiliario moderno.
            </p>

            {/* Quick Specs / Core metrics in large numbers as Bento Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-gray-50 border border-gray-100 p-5 rounded-2xl flex flex-col justify-center shadow-sm">
                <p className="font-sans font-extrabold text-3xl text-gray-900 tracking-tight">
                  +50
                </p>
                <p className="font-sans text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">
                  Proyectos Realizados
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-100 p-5 rounded-2xl flex flex-col justify-center shadow-sm">
                <p className="font-sans font-extrabold text-3xl text-gray-900 tracking-tight">
                  +15
                </p>
                <p className="font-sans text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">
                  Marcas Confían
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-100 p-5 rounded-2xl flex flex-col justify-center shadow-sm">
                <p className="font-sans font-extrabold text-3xl text-gray-900 tracking-tight">
                  +10
                </p>
                <p className="font-sans text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">
                  Propiedades Vendidas
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
