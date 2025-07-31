export interface Service {
  id: string;
  name: { es: string; en: string };
  category: string;
  image: string;
  dimensions: string;
  description: { es: string; en: string };
  specifications: { es: string[]; en: string[] };
  price: string;
  gallery: string[];
}

export const services: Service[] = [
  // Campers
  {
    id: 'camper-descanso-winderless',
    name: { es: 'Camper Descanso - Winderless', en: 'Rest Camper - Winderless' },
    category: 'campers',
    image: '/assets/imagenesCampers/campers/Descanso-Winderless/caja.jpg',
    dimensions: '12m x 2.5m x 3.5m',
    description: { 
      es: 'Camper de lujo con acabados premium, ideal para eventos corporativos y producciones de alto nivel.',
      en: 'Luxury camper with premium finishes, ideal for corporate events and high-end productions.'
    },
    specifications: {
      es: ['Aire acondicionado', 'Cocina equipada', 'Baño completo', 'Área de descanso', 'Sistema de sonido', 'Iluminación LED'],
      en: ['Air conditioning', 'Equipped kitchen', 'Full bathroom', 'Rest area', 'Sound system', 'LED lighting']
    },
    price: 'Desde $15,000 MXN/día',
    gallery: [
      '/assets/imagenesCampers/campers/Descanso-Winderless/caja.jpg',
      '/assets/imagenesCampers/campers/Descanso-Winderless/sala.jpg',
      '/assets/imagenesCampers/campers/Descanso-Winderless/banio.jpg',
      '/assets/imagenesCampers/campers/Descanso-Winderless/cocina.jpg',
    ]
  },
  {
    id: 'camper-descanso-everest',
    name: { es: 'Camper Descanso - Everest', en: 'Rest Camper - Everest' },
    category: 'campers',
    image: '/assets/imagenesCampers/campers/Descanso-Everest/caja.jpg',
    dimensions: '14m x 2.8m x 3.8m',
    description: { 
      es: 'El más lujoso de nuestra flota, con detalles dorados y equipamiento de primera clase.',
      en: 'The most luxurious in our fleet, with golden details and first-class equipment.'
    },
    specifications: {
      es: ['Climatización premium', 'Kitchen gourmet', 'Suite ejecutiva', 'Sala de juntas', 'Entretenimiento 4K', 'Detalles en oro'],
      en: ['Premium climate control', 'Gourmet kitchen', 'Executive suite', 'Meeting room', '4K entertainment', 'Gold details']
    },
    price: 'Desde $25,000 MXN/día',
    gallery: [
      '/assets/imagenesCampers/campers/Descanso-Everest/caja.jpg',
      '/assets/imagenesCampers/campers/Descanso-Everest/cama.jpg',
      '/assets/imagenesCampers/campers/Descanso-Everest/comedor.jpg',
      '/assets/imagenesCampers/campers/Descanso-Everest/closets.jpg',
    ]
  },
  {
    id: 'camper-descanso-bigcountry',
    name: { es: 'Camper Descanso - Big Country', en: 'Rest Camper - Big Country' },
    category: 'campers',
    image: '/assets/imagenesCampers/campers/Descanso-BigCountry/caja2.jpg',
    dimensions: '14m x 2.8m x 3.8m',
    description: { 
      es: 'El más lujoso de nuestra flota, con detalles dorados y equipamiento de primera clase.',
      en: 'The most luxurious in our fleet, with golden details and first-class equipment.'
    },
    specifications: {
      es: ['Climatización premium', 'Kitchen gourmet', 'Suite ejecutiva', 'Sala de juntas', 'Entretenimiento 4K', 'Detalles en oro'],
      en: ['Premium climate control', 'Gourmet kitchen', 'Executive suite', 'Meeting room', '4K entertainment', 'Gold details']
    },
    price: 'Desde $25,000 MXN/día',
    gallery: [
      '/assets/imagenesCampers/campers/Descanso-BigCountry/caja2.jpg',
      '/assets/imagenesCampers/campers/Descanso-BigCountry/cama.jpg',
      '/assets/imagenesCampers/campers/Descanso-BigCountry/banio.jpg',
      '/assets/imagenesCampers/campers/Descanso-BigCountry/sala.jpg',
      '/assets/imagenesCampers/campers/Descanso-BigCountry/cocina.jpg',
      '/assets/imagenesCampers/campers/Descanso-BigCountry/interior.jpg',
      '/assets/imagenesCampers/campers/Descanso-BigCountry/cuarto.jpg',
      '/assets/imagenesCampers/campers/Descanso-BigCountry/caja1.jpg',
      '/assets/imagenesCampers/campers/Descanso-BigCountry/caja3.jpg',
    ]
  },
  {
    id: 'camper-descanso-grand-juction',
    name: { es: 'Camper Descanso - Grand Juction', en: 'Rest Camper - Grand Juction' },
    category: 'campers',
    image: '/assets/imagenesCampers/campers/Descanso-GrandJuction/caja.jpeg',
    dimensions: '14m x 2.8m x 3.8m',
    description: { 
      es: 'El más lujoso de nuestra flota, con detalles dorados y equipamiento de primera clase.',
      en: 'The most luxurious in our fleet, with golden details and first-class equipment.'
    },
    specifications: {
      es: ['Climatización premium', 'Kitchen gourmet', 'Suite ejecutiva', 'Sala de juntas', 'Entretenimiento 4K', 'Detalles en oro'],
      en: ['Premium climate control', 'Gourmet kitchen', 'Executive suite', 'Meeting room', '4K entertainment', 'Gold details']
    },
    price: 'Desde $25,000 MXN/día',
    gallery: [
      '/assets/imagenesCampers/campers/Descanso-GrandJuction/caja.jpeg',
      '/assets/imagenesCampers/campers/Descanso-GrandJuction/cama.jpg',
      '/assets/imagenesCampers/campers/Descanso-GrandJuction/comedor.jpg',
    ]
  },
  {
    id: 'camper-doble',
    name: { es: 'Camper Doble', en: 'Dual Camper' },
    category: 'campers',
    image: '/assets/imagenesCampers/campers/Doble/caja.jpg',
    dimensions: '14m x 2.8m x 3.8m',
    description: { 
      es: 'El más lujoso de nuestra flota, con detalles dorados y equipamiento de primera clase.',
      en: 'The most luxurious in our fleet, with golden details and first-class equipment.'
    },
    specifications: {
      es: ['Climatización premium', 'Kitchen gourmet', 'Suite ejecutiva', 'Sala de juntas', 'Entretenimiento 4K', 'Detalles en oro'],
      en: ['Premium climate control', 'Gourmet kitchen', 'Executive suite', 'Meeting room', '4K entertainment', 'Gold details']
    },
    price: 'Desde $25,000 MXN/día',
    gallery: [
      '/assets/imagenesCampers/campers/Doble/caja.jpg',
      '/assets/imagenesCampers/campers/Doble/cama.jpg',
      '/assets/imagenesCampers/campers/Doble/tocador.jpg',
      '/assets/imagenesCampers/campers/Doble/banio.jpg',
    ]
  },

  // Luxury Bathrooms
  {
    id: 'bathroom-vip-suite',
    name: { es: 'Baño VIP Suite', en: 'VIP Bathroom Suite' },
    category: 'bathrooms',
    image: 'https://images.pexels.com/photos/6585607/pexels-photo-6585607.jpeg?auto=compress&cs=tinysrgb&w=800',
    dimensions: '6m x 2.5m x 3m',
    description: { 
      es: 'Baños de lujo con acabados de mármol y amenidades premium para eventos exclusivos.',
      en: 'Luxury bathrooms with marble finishes and premium amenities for exclusive events.'
    },
    specifications: {
      es: ['Acabados de mármol', 'Grifería dorada', 'Amenidades premium', 'Música ambiental', 'Iluminación LED', 'Climatización'],
      en: ['Marble finishes', 'Golden fixtures', 'Premium amenities', 'Ambient music', 'LED lighting', 'Climate control']
    },
    price: 'Desde $8,000 MXN/día',
    gallery: [
      'https://images.pexels.com/photos/6585607/pexels-photo-6585607.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1358912/pexels-photo-1358912.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6585595/pexels-photo-6585595.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 'bathroom-executive',
    name: { es: 'Baño Ejecutivo', en: 'Executive Bathroom' },
    category: 'bathrooms',
    image: 'https://images.pexels.com/photos/1358912/pexels-photo-1358912.jpeg?auto=compress&cs=tinysrgb&w=800',
    dimensions: '4m x 2m x 2.8m',
    description: { 
      es: 'Solución elegante y funcional para eventos corporativos y bodas de mediano tamaño.',
      en: 'Elegant and functional solution for corporate events and medium-sized weddings.'
    },
    specifications: {
      es: ['Diseño moderno', 'Lavamanos dobles', 'Espejo con luz LED', 'Ventilación forzada', 'Piso antiderrapante', 'Dispensadores automáticos'],
      en: ['Modern design', 'Double sinks', 'LED mirror lighting', 'Forced ventilation', 'Non-slip flooring', 'Automatic dispensers']
    },
    price: 'Desde $5,500 MXN/día',
    gallery: [
      'https://images.pexels.com/photos/1358912/pexels-photo-1358912.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6585607/pexels-photo-6585607.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6585595/pexels-photo-6585595.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },

  // Rest Areas
  {
    id: 'lounge-platinum',
    name: { es: 'Lounge Platinum', en: 'Platinum Lounge' },
    category: 'rest',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    dimensions: '10m x 3m x 3.5m',
    description: { 
      es: 'Zona de descanso premium con mobiliario de lujo y ambiente climatizado.',
      en: 'Premium rest area with luxury furniture and climate-controlled environment.'
    },
    specifications: {
      es: ['Mobiliario de diseño', 'Bar equipado', 'Sistema audiovisual', 'Iluminación ambiental', 'Aire acondicionado', 'WiFi de alta velocidad'],
      en: ['Designer furniture', 'Equipped bar', 'Audiovisual system', 'Ambient lighting', 'Air conditioning', 'High-speed WiFi']
    },
    price: 'Desde $12,000 MXN/día',
    gallery: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },

  // Makeup Trailers
  {
    id: 'makeup-studio-pro',
    name: { es: 'Estudio de Maquillaje Pro', en: 'Pro Makeup Studio' },
    category: 'makeup',
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800',
    dimensions: '8m x 2.5m x 3m',
    description: { 
      es: 'Trailer especializado para maquillaje profesional con estaciones individuales y iluminación perfecta.',
      en: 'Specialized trailer for professional makeup with individual stations and perfect lighting.'
    },
    specifications: {
      es: ['Estaciones de maquillaje', 'Iluminación profesional', 'Espejos Hollywood', 'Aire acondicionado', 'Organizadores', 'Conexiones eléctricas'],
      en: ['Makeup stations', 'Professional lighting', 'Hollywood mirrors', 'Air conditioning', 'Organizers', 'Electrical connections']
    },
    price: 'Desde $10,000 MXN/día',
    gallery: [
      'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3993434/pexels-photo-3993434.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },

  // Staff Vehicles
  {
    id: 'staff-van-luxury',
    name: { es: 'Van de Staff Luxury', en: 'Luxury Staff Van' },
    category: 'staff',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
    dimensions: '6m x 2m x 2.5m',
    description: { 
      es: 'Vehículo cómodo y elegante para el transporte de personal en eventos de alto nivel.',
      en: 'Comfortable and elegant vehicle for staff transportation at high-end events.'
    },
    specifications: {
      es: ['Capacidad 12 personas', 'Asientos de cuero', 'Climatización', 'WiFi', 'Cargadores USB', 'Ventanas tintadas'],
      en: ['12-person capacity', 'Leather seats', 'Climate control', 'WiFi', 'USB chargers', 'Tinted windows']
    },
    price: 'Desde $6,000 MXN/día',
    gallery: [
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1592389/pexels-photo-1592389.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1592388/pexels-photo-1592388.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  }
];