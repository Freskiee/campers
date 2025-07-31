import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { services } from '../data/services';
import { useLanguage } from '../contexts/LanguageContext';
import ServiceModal from '../components/ServiceModal';
import { Service } from '../data/services';

export default function Services() {
  const { language, t } = useLanguage();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('campers');

  useEffect(() => {
    const category = searchParams.get('category');
    const validCategories = ['campers', 'bathrooms', 'rest', 'makeup', 'staff'];
    if (category && validCategories.includes(category)) {
      setActiveCategory(category);
    }
    // Scroll al top al cambiar de ruta/categoría
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [searchParams, location]);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const categories = [
    { id: 'campers', name: t('services.campers') },
    { id: 'bathrooms', name: t('services.bathrooms') },
    { id: 'rest', name: t('services.rest') },
    { id: 'makeup', name: t('services.makeup') },
    { id: 'staff', name: t('services.staff') },
  ];

  const filteredServices = services.filter(service => service.category === activeCategory);

  // refs para scroll automático en filtros
  const filterRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const filterBarRef = useRef<HTMLDivElement | null>(null);

  // Scroll manual centrado usando scrollLeft sobre el contenedor
  useEffect(() => {
    const bar = filterBarRef.current;
    const btn = filterRefs.current[activeCategory];
    if (bar && btn) {
      const offset = btn.offsetLeft - bar.offsetLeft - (bar.clientWidth / 2) + (btn.clientWidth / 2);
      bar.scrollTo({ left: offset, behavior: 'smooth' });
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      {/* Header */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={filterBarRef} className="flex gap-4 mb-12 scroll-x-mobile w-full px-6 md:flex-wrap md:justify-center md:overflow-visible md:gap-4 md:w-auto md:px-0">
            {categories.map((category) => (
              <button
                key={category.id}
                ref={el => filterRefs.current[category.id] = el}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-[#C0965E] text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300 cursor-pointer flex flex-col"
                onClick={() => setSelectedService(service)}
              >
                <img
                  src={service.image}
                  alt={service.name[language]}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="flex-1 flex flex-col p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
                    {service.name[language]}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">
                    {service.dimensions}
                  </p>
                  <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-1 sm:line-clamp-2">
                    {service.description[language]}
                  </p>
                  <div className="flex justify-between items-center mt-auto pt-2">
                    <span className="text-[#C0965E] font-semibold text-base sm:text-lg">
                      {service.price}
                    </span>
                    <button className="text-[#C0965E] hover:text-[#D4A86E] font-semibold border border-[#C0965E] rounded-md px-3 py-1 text-xs sm:text-sm transition-colors">
                      {t('common.view.more')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}