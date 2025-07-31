import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// Listado generado automáticamente de imágenes locales
const importedImages = [
  // Campers
  { url: '/assets/imagenesCampers/campers/Descanso-GrandJuction/caja.jpeg', category: 'campers', title: 'Descanso Grand Juction' },
  { url: '/assets/imagenesCampers/campers/Descanso-Everest/caja.jpg', category: 'campers', title: 'Descanso Everest' },
  { url: '/assets/imagenesCampers/campers/Descanso-Winderless/caja.jpg', category: 'campers', title: 'Descanso Winderless' },
  { url: '/assets/imagenesCampers/campers/Descanso-BigCountry/caja2.jpg', category: 'campers', title: 'Descanso BigCountry' },
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
          <div ref={filterBarRef} className="flex gap-4 mb-12 scroll-x-mobile w-full px-6 md:flex-wrap md:justify-center md:overflow-visible md:gap-4 md:w-auto md:px-0">
            {filters.map((filter) => (
              <button
                key={filter.id}
                ref={el => filterRefs.current[filter.id] = el}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-[#C0965E] text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, idx) => (
              <div
                key={image.url + idx}
                className="relative overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className={`w-full h-64 transition-transform duration-300 group-hover:scale-110 ${image.url.includes('Descanso-BigCountry/caja2.jpg') ? 'object-contain bg-black' : 'object-cover'}`}
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
          <div className="relative max-w-4xl max-h-screen p-4">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full max-h-[80vh] object-contain rounded-lg bg-black mx-auto block"
              style={{ boxShadow: '0 2px 24px #000a' }}
              onClick={e => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-[#C0965E] text-3xl"
            >
              ×
            </button>
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-white text-lg font-semibold bg-black/60 rounded-lg py-2 px-4">
                {selectedImage.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}