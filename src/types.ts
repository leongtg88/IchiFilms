export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  duration: string;
  client: string;
  year: string;
  role: string;
  description: string;
  videoUrl: string;
  aspect: 'video' | 'square';
}

export interface Service {
  id: string;
  title: string;
  iconName: string;
  description: string;
  emoji: string;
  details: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export interface ContactFormData {
  nombre: string;
  email: string;
  telefono: string;
  servicio: string;
  mensaje: string;
  newsletter?: boolean;
}
