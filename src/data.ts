import { Project, Service, Testimonial } from './types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'residencia-calma',
    title: 'Pacific View Residence',
    category: 'Inmobiliario',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAK5npq0AeafZkwBbjh_IUokbjD1EmTK0l_RdeOPr7CEztomDhiOBO2jP-nFtWinkHHxQKhfgXRjjN0--_b1HPR3Vf-TvyFGQScUhgdYjcNJTn4MriRqIt4zkIoifaGXD4Vl6ylUuxk2Ac6PKFELmKJRB2AQjjw-bUsJAA_7O33ZvVFdKguPdTnHW4b4gWmAToKBMCAGF1_DgWe1jQA890EWvC1tmKqAvKoYbhi3WSPg10nujSk7CiT',
    duration: '1:45',
    client: 'Malibu Coastal Living',
    year: '2026',
    role: 'Director / Drone Operator / Editor',
    description: 'Recorrido cinematográfico de una espectacular villa moderna sobre los acantilados de Malibu. Destaca por su iluminación natural, tomas aéreas a 4K y transiciones fluidas que guían la mirada por cada espacio de diseño.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-with-sea-view-41712-large.mp4',
    aspect: 'video'
  },
  {
    id: 'espresso-culture',
    title: 'Espresso Culture',
    category: 'Comercial',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD48_tETNjI8dCGtfshtuD2BXP39IC13EfWSunUcsZzGH7255MS4AvGcWXuTs7erHaPPsMi3vFvUtybEzKziIlhpHZN17J4GiB9CUkR1A7qsfQjhhBQAHGSjkIaUQ2KGNvgCCPUieWn8W9nGcC_8nOxsUulxnm_oT2avODqvmLyFNjpR-kAy6AaKn4xRJ74RBlFXybCcFfwPnhna2KTQcZKFWzEnpvoZDEh__dVAtRGoPYIYUBxo8ls',
    duration: '0:45',
    client: 'Caffè Nero',
    year: '2025',
    role: 'Cinematographer / Color Grading',
    description: 'Anuncio publicitario sensorial que captura el proceso artesanal del café de alta gama. Grabado con lentes macro para enfatizar texturas, vapor y la precisión del barismo contemporáneo.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-pouring-hot-coffee-into-a-cup-42410-large.mp4',
    aspect: 'square'
  },
  {
    id: 'aura-training',
    title: 'Aura Fitness Training',
    category: 'Comercial',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI8H08dEXQ4Mr7T4iAyNfEVGVhar1pvf2TEzOjp6CahSSLDBLBor1kDxdBuwImGsjUDAKizevBcHGim3sD_v_Q5Z0FF--cKhZkVgkw2Nd-T2S5NlpH5fAJu7GmKNqFVLdjFQEZbv_WyR3PYoNiijs-JDvxJGITbVwn8L-MG7769LahuY6wWJaQB5dwcNFLfU7enp8bhtU98XHs7zEwYsijhSENwsQExxduFHseo5G1brxrkFUu8X7e',
    duration: '1:00',
    client: 'Aura Gym',
    year: '2026',
    role: 'Director / Editor',
    description: 'Campaña motivacional de alta intensidad con enfoque de iluminación contrastada (Chiaroscuro). Se aplicó un diseño sonoro rítmico y edición acelerada para proyectar energía y disciplina.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-training-with-ropes-in-gym-41584-large.mp4',
    aspect: 'square'
  },
  {
    id: 'e-drive-expedition',
    title: 'E-Drive Expedition',
    category: 'Corporativo',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB86uYVvG6GWJ4380B6kp7DyOaY9G0joDzc-XagyL8gQdOSi4ksmrtqZGAa38LOlJOFo5GgR2B2zSkx5bWHEbWYqLRhodPqpJmDt9PCa7eY35urs6a3GQ5T-q9ly7Jq1NLgISHIZWhgUYSPdsOAtAADQcgHWHtpVAXNNI8nWDWIEIgXP1Xd7RvIrK46P6d71LlDTPmqoLs4XHKof_Qq9PCWipMetgB2TLN7TufvsqYp2xKCBVyB7KQE',
    duration: '2:15',
    client: 'Apex Automotive',
    year: '2025',
    role: 'Lead Cinematographer / Drone Pilot',
    description: 'Lanzamiento internacional de un SUV eléctrico atravesando pasos de montaña al atardecer. Trabajo técnico de seguimiento con coche cámara y estabilización de alta velocidad.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-car-driving-on-a-road-surrounded-by-forest-34351-large.mp4',
    aspect: 'video'
  },
  {
    id: 'urban-layers',
    title: 'Urban Layers',
    category: 'Fotografía',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIdzdatd6p0hVG_YhlMMRihZ9YxWtjAVMvUADxsBIphQkxCfTAzinXVxfruUXJxEimIPJJJBUegdxLMs8tjSTTVV9Pf2wO64U3ra0DMK_1t3CWv5TTNA1p00OcmDnVIkbos7pQ9BCOgs783-zUJHkfWDRHQR2RLAEgZrq2oCDJoTuaKkcYUCQhOyQuTQNSGyhlZSXldR9zzUYN0jd012_M5OPnP6DPaDt2aXHlPwOMeZ0bwW_cvbns',
    duration: '0:30',
    client: 'Moda Vanguardia',
    year: '2026',
    role: 'Creative Director / Photographer',
    description: 'Sesión de retrato y lookbook urbano en terrazas metropolitanas al anochecer. Enfoque editorial que aprovecha las luces desenfocadas de la gran ciudad (bokeh) y vestuarios de alto contraste.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-posing-on-a-rooftop-41697-large.mp4',
    aspect: 'square'
  },
  {
    id: 'lumina-jewels',
    title: 'Lumina Jewels',
    category: 'Edición',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCG74jg2aItcRMnQQYTG3BSBlcSB-JO5_YNbBSX18FWkRC_Jrc06erHvz5QkNGFVaXTlowK0ElCUDwnTJsgdniHLqOz3cGjVvRoxhuOCwE-ic5N0xOg0X_XEjT9Y_AIXj74KfUj7WHlzncZYwzi4gpFapN8p1eys73fNbyGplLYOVf-QdAkjpiWBLy1RsIC-cDQZqE8QhYoB8h_ywqIEVIHuFV9_UJmJpIPBHhh5a2-IC8-QdtPa72G',
    duration: '0:50',
    client: 'Lumina Fine Art',
    year: '2025',
    role: 'Colorist / VFX Supervisor',
    description: 'Spot de macrofotografía de alta precisión para joyería de lujo. Un minucioso trabajo de corrección de color y remoción de microimperfecciones en post-producción digital.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-luxury-gold-ring-details-42287-large.mp4',
    aspect: 'square'
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'comercial',
    title: 'Video Comercial',
    iconName: 'Movie',
    emoji: '🎬',
    description: 'Spots publicitarios dinámicos para televisión, plataformas de streaming y campañas integrales de redes sociales.',
    details: [
      'Storytelling de marca personalizado',
      'Formatos optimizados para Reels, TikTok y YouTube',
      'Dirección de actores y locución profesional',
      'Diseño sonoro y bandas sonoras licenciadas'
    ]
  },
  {
    id: 'fotografia',
    title: 'Fotografía Profesional',
    iconName: 'Camera',
    emoji: '📸',
    description: 'Fotografía editorial, de producto y corporativa con alta definición y postprocesado meticuloso.',
    details: [
      'Sesiones de producto y e-commerce',
      'Retratos corporativos y de equipo',
      'Fotografía arquitectónica y de interiores',
      'Equipos de iluminación de estudio móviles'
    ]
  },
  {
    id: 'edicion',
    title: 'Edición y Post-producción',
    iconName: 'Scissors',
    emoji: '✂️',
    description: 'Montaje de video, corrección de color profesional (color grading) y efectos visuales integrados.',
    details: [
      'Flujo de trabajo nativo en DaVinci Resolve',
      'Corrección cromática y estilización de color',
      'Animación de títulos y gráficos móviles (Motion Graphics)',
      'Optimización de audio y mezcla estéreo'
    ]
  },
  {
    id: 'inmobiliario',
    title: 'Bienes Raíces',
    iconName: 'Home',
    emoji: '🏠',
    description: 'Producción especializada para venta de propiedades exclusivas, tours virtuales y tomas aéreas con dron.',
    details: [
      'Tomas aéreas con piloto de dron con licencia',
      'Video-recorridos fluidos con estabilizador de mano',
      'Fotografía HDR de interiores y exteriores',
      'Edición rápida para entrega en menos de 48 horas'
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    quote: 'La calidad del video superó con creces nuestras expectativas de marca. Logró capturar exactamente la esencia sofisticada y el mensaje que queríamos transmitir a nuestra audiencia.',
    author: 'Sofía Valenzuela',
    role: 'Directora de Marketing',
    company: 'TechCorp España'
  },
  {
    id: 't2',
    quote: 'Excelente profesional. Los recorridos inmobiliarios que ha realizado para nuestras propiedades de lujo han incrementado el flujo de clientes interesados en más de un 200%.',
    author: 'Carlos Mendoza',
    role: 'CEO & Fundador',
    company: 'RealEstate Elite'
  },
  {
    id: 't3',
    quote: 'Su capacidad para contar historias memorables a través de la edición y el color es simplemente impresionante. Es un socio creativo estratégico para todos nuestros proyectos publicitarios.',
    author: 'Elena Rostova',
    role: 'Directora Creativa',
    company: 'Bloom Agency'
  }
];
