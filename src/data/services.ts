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
  {
    id: 'camper-maquillaje',
    name: { es: 'Camper Maquillaje', en: 'Makeup Camper' },
    category: 'campers',
    image: '/assets/imagenesCampers/campers/Maquillaje/caja1.jpg',
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
      '/assets/imagenesCampers/campers/Maquillaje/caja1.jpg',
      '/assets/imagenesCampers/campers/Maquillaje/espejos2.jpg',
      '/assets/imagenesCampers/campers/Maquillaje/espejos.jpg',
      '/assets/imagenesCampers/campers/Maquillaje/caja3.jpg',
      '/assets/imagenesCampers/campers/Maquillaje/caja2.jpg',
      '/assets/imagenesCampers/campers/Maquillaje/banio2.jpg',
      '/assets/imagenesCampers/campers/Maquillaje/banio.jpg',
    ]
  },
  {
    id: 'camper-safari',
    name: { es: 'Motor Home Safari', en: 'Motor Home Safari' },
    category: 'campers',
    image: '/assets/imagenesCampers/campers/MotorHome-Safari/caja.jpg',
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
      '/assets/imagenesCampers/campers/MotorHome-Safari/caja.jpg',
      '/assets/imagenesCampers/campers/MotorHome-Safari/sala.jpg',
      '/assets/imagenesCampers/campers/MotorHome-Safari/interiores.jpg',
      '/assets/imagenesCampers/campers/MotorHome-Safari/cocina.jpg',
      '/assets/imagenesCampers/campers/MotorHome-Safari/banio.jpg',
    ]
  },
  {
    id: 'camper-triple',
    name: { es: 'Camper Triple', en: 'Triple Camper' },
    category: 'campers',
    image: '/assets/imagenesCampers/campers/Triple/caja.jpg',
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
      '/assets/imagenesCampers/campers/Triple/caja.jpg',
      '/assets/imagenesCampers/campers/Triple/tocador.jpg',
      '/assets/imagenesCampers/campers/Triple/cama.jpg',
      '/assets/imagenesCampers/campers/Triple/banio.jpg',
    ]
  },

  // Luxury Bathrooms
  {
    id: 'bathroom-3-services',
    name: { es: 'Baño 3-servicios', en: '3-services Bathroom' },
    category: 'bathrooms',
    image: '/assets/imagenesCampers/banos/3-servicios/caja.jpg',
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
      '/assets/imagenesCampers/banos/3-servicios/caja.jpg',
      '/assets/imagenesCampers/banos/3-servicios/caja-abierta.jpg',
      '/assets/imagenesCampers/banos/3-servicios/lavamanos.jpg',
      '/assets/imagenesCampers/banos/3-servicios/mingitorio.jpg',
      '/assets/imagenesCampers/banos/3-servicios/damas.jpg',
      '/assets/imagenesCampers/banos/3-servicios/caballeros.jpg',
      '/assets/imagenesCampers/banos/3-servicios/escaleras.jpg',
    ]
  },
  {
    id: 'bathroom-6-services',
    name: { es: 'Baño 6-servicios', en: '6-services Bathroom' },
    category: 'bathrooms',
    image: '/assets/imagenesCampers/banos/6-servicios/caja.jpg',
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
      '/assets/imagenesCampers/banos/6-servicios/caja.jpg',
      '/assets/imagenesCampers/banos/6-servicios/lavabos.jpg',
      '/assets/imagenesCampers/banos/6-servicios/cubiculos2.jpg',
      '/assets/imagenesCampers/banos/6-servicios/cubiculos.jpg',
      '/assets/imagenesCampers/banos/6-servicios/aire.jpg',
    ]
  },
  {
    id: 'bathroom-10-services',
    name: { es: 'Baño 10-servicios', en: '10-services Bathroom' },
    category: 'bathrooms',
    image: '/assets/imagenesCampers/banos/10-servicios/caja.jpg',
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
      '/assets/imagenesCampers/banos/10-servicios/caja.jpg',
      '/assets/imagenesCampers/banos/10-servicios/escalones.jpg',
      '/assets/imagenesCampers/banos/10-servicios/mingitorios.jpg',
      '/assets/imagenesCampers/banos/10-servicios/cubiculos.jpg',
    ]
  },


  // Planta de Luz
  {
    id: 'planta-de-luz',
    name: { es: 'Planta de Luz', en: 'Plant of Light' },
    category: 'plantasDeLuz',
    image: '/assets/imagenesCampers/plantasDeLuz/plantaLuz.jpg',
    dimensions: '14m x 2.8m x 3.8m',
    description: { 
      es: 'Planta de luz',
      en: 'Plant of light'
    },
    specifications: {
      es: [''],
      en: ['']
    },
    price: 'Desde $25,000 MXN/día',
    gallery: [
      '/assets/imagenesCampers/plantasDeLuz/plantaLuz.jpg',
      '/assets/imagenesCampers/plantasDeLuz/plantaLuz.jpg',
    ]
  },

  // Staff Vehicles
  {
    id: 'suv-white-luxury',
    name: { es: 'SUV de Staff Luxury', en: 'Luxury Staff SUV' },
    category: 'staff',
    image: '/assets/imagenesCampers/camionetas/suv-blanca.jpg',
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
      '/assets/imagenesCampers/camionetas/suv-blanca.jpg',
      '/assets/imagenesCampers/camionetas/interioresTraseros.jpg',
      '/assets/imagenesCampers/camionetas/interioresFrente.jpg'
    ]
  },
  {
    id: 'suv-black-luxury',
    name: { es: 'SUV de Staff Luxury', en: 'Luxury Staff SUV' },
    category: 'staff',
    image: '/assets/imagenesCampers/camionetas/suv-negra.jpg',
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
      '/assets/imagenesCampers/camionetas/suv-negra.jpg',
      '/assets/imagenesCampers/camionetas/interioresFrente.jpg',
      '/assets/imagenesCampers/camionetas/interioresTraseros.jpg',
    ]
  }
];