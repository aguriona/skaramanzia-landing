export interface Testimonial {
  name: string;
  position: string;
  content: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ana Martínez",
    position: "CEO, TechVision",
    content: "La implementación de las soluciones de IA ha transformado completamente nuestra operación. Nuestros clientes están más satisfechos que nunca.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Carlos Ruiz",
    position: "Director de Marketing, InnovaSoft",
    content: "El equipo demostró un profundo conocimiento en marketing digital y automatización. Los resultados superaron nuestras expectativas más optimistas.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Laura Sánchez",
    position: "CTO, DataFlow",
    content: "La integración de sus soluciones de IA con nuestros sistemas existentes fue impecable. El soporte técnico y la atención al cliente son excepcionales.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  }
];