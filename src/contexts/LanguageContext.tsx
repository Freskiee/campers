import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Translations {
  [key: string]: {
    es: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': { es: 'Inicio', en: 'Home' },
  'nav.services': { es: 'Servicios', en: 'Services' },
  'nav.gallery': { es: 'Galería', en: 'Gallery' },
  'nav.about': { es: 'Nosotros', en: 'About Us' },
  'nav.contact': { es: 'Contacto', en: 'Contact' },

  // Home Page
  'home.title': { es: 'Campers México', en: 'Campers México' },
  'home.subtitle': { es: 'Soluciones móviles de lujo para eventos de alto nivel', en: 'Luxury mobile solutions for high-end events' },
  'home.cta': { es: 'Ver Servicios', en: 'View Services' },
  'home.features.title': { es: 'Excelencia en Cada Detalle', en: 'Excellence in Every Detail' },
  'home.features.luxury': { es: 'Unidades de Lujo', en: 'Luxury Units' },
  'home.features.luxury.desc': { es: 'Equipamiento premium y acabados de primera clase', en: 'Premium equipment and first-class finishes' },
  'home.features.service': { es: 'Servicio 24/7', en: '24/7 Service' },
  'home.features.service.desc': { es: 'Atención personalizada durante todo su evento', en: 'Personalized attention throughout your event' },
  'home.features.reliability': { es: 'Confiabilidad', en: 'Reliability' },
  'home.features.reliability.desc': { es: 'Puntualidad y limpieza garantizada', en: 'Guaranteed punctuality and cleanliness' },

  // Services Page
  'services.title': { es: 'Nuestros Servicios', en: 'Our Services' },
  'services.subtitle': { es: 'Unidades móviles de lujo para cada necesidad', en: 'Luxury mobile units for every need' },
  'services.campers': { es: 'Campers', en: 'Campers' },
  'services.bathrooms': { es: 'Baños de Lujo', en: 'Luxury Bathrooms' },
  'services.rest': { es: 'Zonas de Descanso', en: 'Rest Areas' },
  'services.makeup': { es: 'Trailers de Maquillaje', en: 'Makeup Trailers' },
  'services.staff': { es: 'Vehículos para Staff', en: 'Staff Vehicles' },
  'services.dimensions': { es: 'Dimensiones', en: 'Dimensions' },
  'services.specifications': { es: 'Especificaciones', en: 'Specifications' },
  'services.estimated.price': { es: 'Precio Estimado', en: 'Estimated Price' },
  'services.whatsapp.cta': { es: 'Solicitar Información', en: 'Request Information' },

  // Gallery Page
  'gallery.title': { es: 'Galería', en: 'Gallery' },
  'gallery.subtitle': { es: 'Nuestro trabajo en eventos de alto nivel', en: 'Our work at high-end events' },
  'gallery.filter.all': { es: 'Todos', en: 'All' },
  'gallery.filter.campers': { es: 'Campers', en: 'Campers' },
  'gallery.filter.bathrooms': { es: 'Baños', en: 'Bathrooms' },
  'gallery.filter.events': { es: 'Eventos', en: 'Events' },

  // About Page
  'about.title': { es: 'Nosotros', en: 'About Us' },
  'about.subtitle': { es: 'Líder en soluciones móviles de lujo', en: 'Leader in luxury mobile solutions' },
  'about.story.title': { es: 'Nuestra Historia', en: 'Our Story' },
  'about.story.content': { es: 'Con más de 10 años de experiencia, Campers México se ha consolidado como la empresa líder en renta de unidades móviles de lujo para eventos corporativos, bodas, festivales y producciones audiovisuales de alto nivel.', en: 'With over 10 years of experience, Campers México has established itself as the leading company in luxury mobile unit rentals for corporate events, weddings, festivals, and high-end audiovisual productions.' },
  'about.mission.title': { es: 'Nuestra Misión', en: 'Our Mission' },
  'about.mission.content': { es: 'Brindar soluciones móviles de la más alta calidad, superando las expectativas de nuestros clientes en cada evento, con un servicio excepcional y atención personalizada.', en: 'To provide the highest quality mobile solutions, exceeding our clients\' expectations at every event, with exceptional service and personalized attention.' },
  'about.vision.title': { es: 'Nuestra Visión', en: 'Our Vision' },
  'about.vision.content': { es: 'Ser la empresa de referencia en América Latina para eventos de lujo, reconocida por nuestra innovación, calidad y compromiso con la excelencia.', en: 'To be the reference company in Latin America for luxury events, recognized for our innovation, quality, and commitment to excellence.' },

  // Contact Page
  'contact.title': { es: 'Contacto', en: 'Contact' },
  'contact.subtitle': { es: 'Hagamos realidad su evento', en: 'Let\'s make your event a reality' },
  'contact.form.name': { es: 'Nombre', en: 'Name' },
  'contact.form.company': { es: 'Empresa (opcional)', en: 'Company (optional)' },
  'contact.form.email': { es: 'Correo Electrónico', en: 'Email' },
  'contact.form.phone': { es: 'Teléfono', en: 'Phone' },
  'contact.form.service': { es: 'Tipo de Unidad de Interés', en: 'Type of Unit of Interest' },
  'contact.form.message': { es: 'Mensaje', en: 'Message' },
  'contact.form.submit': { es: 'Enviar Mensaje', en: 'Send Message' },
  'contact.info.title': { es: 'Información de Contacto', en: 'Contact Information' },
  'contact.info.phone': { es: 'Teléfono', en: 'Phone' },
  'contact.info.email': { es: 'Correo', en: 'Email' },
  'contact.info.hours': { es: 'Horario de Atención', en: 'Business Hours' },
  'contact.info.hours.value': { es: 'Lunes a Domingo, 24 horas', en: 'Monday to Sunday, 24 hours' },

  // WhatsApp Messages
  'whatsapp.general': { es: 'Hola, me interesa obtener información sobre sus servicios de unidades móviles de lujo.', en: 'Hello, I\'m interested in getting information about your luxury mobile unit services.' },
  'whatsapp.service': { es: 'Hola, me interesa el modelo', en: 'Hello, I\'m interested in the model' },
  'whatsapp.service.details': { es: '¿puedes darme más detalles?', en: 'can you give me more details?' },

  // Common
  'common.close': { es: 'Cerrar', en: 'Close' },
  'common.view.more': { es: 'Ver Más', en: 'View More' },
  'common.learn.more': { es: 'Conocer Más', en: 'Learn More' },
};

interface LanguageContextType {
  language: 'es' | 'en';
  setLanguage: (lang: 'es' | 'en') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}