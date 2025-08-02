import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Listado generado automáticamente de imágenes locales
const importedImages = [
  // Campers
  { url: '/assets/imagenesCampers/campers/Descanso-GrandJuction/caja.jpeg', category: 'campers', title: 'Descanso Grand Juction' },
  { url: '/assets/imagenesCampers/campers/Descanso-Everest/caja.jpg', category: 'campers', title: 'Descanso Everest' },
  { url: '/assets/imagenesCampers/campers/Descanso-Winderless/caja.jpg', category: 'campers', title: 'Descanso Winderless' },
  { url: '/assets/imagenesCampers/campers/Descanso-BigCountry/caja2.jpg', category: 'campers', title: 'Descanso BigCountry' },
  { url: '/assets/imagenesCampers/campers/Doble/caja.jpg', category: 'campers', title: 'Doble' },
  { url: '/assets/imagenesCampers/campers/Maquillaje/espejos2.jpg', category: 'campers', title: 'Maquillaje' },
  { url: '/assets/imagenesCampers/campers/MotorHome-Safari/caja.jpg', category: 'campers', title: 'MotorHome Safari' },
  { url: '/assets/imagenesCampers/campers/Triple/caja.jpg', category: 'campers', title: 'Triple' },
  // Camionetas
  { url: '/assets/imagenesCampers/camionetas/suv-blanca.jpg', category: 'camionetas', title: 'SUV blanca' },
  { url: '/assets/imagenesCampers/camionetas/suv-negra.jpg', category: 'camionetas', title: 'SUV negra' },
  // Plantas de luz
  { url: '/assets/imagenesCampers/plantasDeLuz/plantaLuz.jpg', category: 'plantasDeLuz', title: 'Planta de luz' },
  // Baños 10-servicios
  { url: '/assets/imagenesCampers/banos/10-servicios/caja.jpg', category: 'banos', title: 'Baño 10-servicios' },
  // Baños 3-servicios
  { url: '/assets/imagenesCampers/banos/3-servicios/caja.jpg', category: 'banos', title: 'Baño 3-servicios' },
  // Baños 6-servicios
  { url: '/assets/imagenesCampers/banos/6-servicios/caja.jpg', category: 'banos', title: 'Baño 6-servicios' },
];

type GalleryImage = { url: string; category: string; title: string };

export default function Gallery() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filters = [
    { id: 'all', name: 'Todos' },
    { id: 'campers', name: 'Campers' },
    { id: 'banos', name: 'Baños' },
    { id: 'camionetas', name: 'Camionetas' },
    { id: 'plantasDeLuz', name: 'Plantas de Luz' },
  ];

  const filteredImages = activeFilter === 'all'
    ? importedImages
    : importedImages.filter(img => img.category === activeFilter);

  // refs para scroll automático en filtros
  const filterRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const filterBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const bar = filterBarRef.current;
    const btn = filterRefs.current[activeFilter];
    if (bar && btn) {
      const offset = btn.offsetLeft - bar.offsetLeft - (bar.clientWidth / 2) + (btn.clientWidth / 2);
      bar.scrollTo({ left: offset, behavior: 'smooth' });
    }
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      {/* Header */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('gallery.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={filterBarRef}
            className="scroll-x-mobile flex-nowrap flex gap-2 md:gap-4 mb-12 w-full px-2 md:flex-wrap md:justify-center md:overflow-visible md:w-auto md:px-0"
            aria-label="Filtros de galería"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                ref={el => filterRefs.current[filter.id] = el}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex-shrink-0 px-5 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#C0965E] focus:z-10 active:scale-95 hover:scale-105 hover:shadow-md ${
                  activeFilter === filter.id
                    ? 'bg-[#C0965E] text-black shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
                aria-label={filter.name}
              >
                {filter.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
            {filteredImages.map((image, idx) => (
              <div
                key={image.url + idx}
                className="relative overflow-hidden rounded-lg cursor-pointer group animate-fade-in"
                onClick={() => setSelectedImage(image)}
                tabIndex={0}
                aria-label={image.title}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-center px-4 font-semibold">
                    {image.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-screen p-4 flex items-center justify-center w-full">
            {/* Flecha anterior */}
            {filteredImages.length > 1 && (
              <button
                onClick={e => {
                  e.stopPropagation();
                  const idx = filteredImages.findIndex(img => img.url === selectedImage.url);
                  const prevIdx = (idx - 1 + filteredImages.length) % filteredImages.length;
                  setSelectedImage(filteredImages[prevIdx]);
                }}
                className="absolute left-8 top-1/2 -translate-y-1/2 text-white hover:text-[#C0965E] text-4xl z-10"
                aria-label="Anterior"
              >
                <ChevronLeft size={40} />
              </button>
            )}
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full max-h-[80vh] object-contain rounded-lg bg-black mx-auto block"
              style={{ boxShadow: '0 2px 24px #000a' }}
              onClick={e => e.stopPropagation()}
            />
            <div className="absolute left-0 bottom-6 md:bottom-10 w-full flex justify-center pointer-events-none z-30">
              <span className="text-white bg-black/80 px-4 py-2 md:px-8 md:py-3 rounded-lg text-sm md:text-lg font-semibold pointer-events-auto max-w-[90vw] md:max-w-[80vw] break-words text-center shadow-lg">
                {selectedImage.title}
              </span>
            </div>
            {/* Flecha siguiente */}
            {filteredImages.length > 1 && (
              <button
                onClick={e => {
                  e.stopPropagation();
                  const idx = filteredImages.findIndex(img => img.url === selectedImage.url);
                  const nextIdx = (idx + 1) % filteredImages.length;
                  setSelectedImage(filteredImages[nextIdx]);
                }}
                className="absolute right-8 top-1/2 -translate-y-1/2 text-white hover:text-[#C0965E] text-4xl z-10"
                aria-label="Siguiente"
              >
                <ChevronRight size={40} />
              </button>
            )}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-[#C0965E] text-3xl"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}