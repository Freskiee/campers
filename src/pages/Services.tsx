import React, { useState } from 'react';
import { services } from '../data/services';
import { useLanguage } from '../contexts/LanguageContext';
import ServiceModal from '../components/ServiceModal';

export default function Services() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('campers');
  const [selectedService, setSelectedService] = useState(null);

  const categories = [
    { id: 'campers', name: t('services.campers') },
    { id: 'bathrooms', name: t('services.bathrooms') },
    { id: 'rest', name: t('services.rest') },
    { id: 'makeup', name: t('services.makeup') },
    { id: 'staff', name: t('services.staff') },
  ];

  const filteredServices = services.filter(service => service.category === activeCategory);

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
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <img
                  src={service.image}
                  alt={service.name[language]}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.name[language]}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {service.dimensions}
                  </p>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {service.description[language]}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#C0965E] font-semibold">
                      {service.price}
                    </span>
                    <button className="text-[#C0965E] hover:text-[#D4A86E] font-semibold">
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