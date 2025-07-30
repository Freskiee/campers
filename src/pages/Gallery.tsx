import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Gallery() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { 
      id: 1, 
      url: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800', 
      category: 'campers',
      title: 'Camper Executive en evento corporativo'
    },
    { 
      id: 2, 
      url: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800', 
      category: 'campers',
      title: 'Camper Premium Gold'
    },
    { 
      id: 3, 
      url: 'https://images.pexels.com/photos/6585607/pexels-photo-6585607.jpeg?auto=compress&cs=tinysrgb&w=800', 
      category: 'bathrooms',
      title: 'Baño VIP Suite'
    },
    { 
      id: 4, 
      url: 'https://images.pexels.com/photos/1358912/pexels-photo-1358912.jpeg?auto=compress&cs=tinysrgb&w=800', 
      category: 'bathrooms',
      title: 'Baño Ejecutivo'
    },
    { 
      id: 5, 
      url: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800', 
      category: 'events',
      title: 'Evento de gala'
    },
    { 
      id: 6, 
      url: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800', 
      category: 'events',
      title: 'Boda de lujo'
    },
    { 
      id: 7, 
      url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800', 
      category: 'campers',
      title: 'Lounge Platinum'
    },
    { 
      id: 8, 
      url: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800', 
      category: 'campers',
      title: 'Estudio de maquillaje'
    },
    { 
      id: 9, 
      url: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=800', 
      category: 'events',
      title: 'Festival de música'
    },
    { 
      id: 10, 
      url: 'https://images.pexels.com/photos/6585595/pexels-photo-6585595.jpeg?auto=compress&cs=tinysrgb&w=800', 
      category: 'bathrooms',
      title: 'Instalaciones de lujo'
    },
    { 
      id: 11, 
      url: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800', 
      category: 'campers',
      title: 'Van de staff luxury'
    },
    { 
      id: 12, 
      url: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800', 
      category: 'events',
      title: 'Evento corporativo'
    }
  ];

  const filters = [
    { id: 'all', name: t('gallery.filter.all') },
    { id: 'campers', name: t('gallery.filter.campers') },
    { id: 'bathrooms', name: t('gallery.filter.bathrooms') },
    { id: 'events', name: t('gallery.filter.events') },
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

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
          <div className="flex gap-4 mb-12 scroll-x-mobile w-full px-6 md:flex-wrap md:justify-center md:overflow-visible md:gap-4 md:w-auto md:px-0">
            {filters.map((filter) => (
              <button
                key={filter.id}
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
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
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
              className="max-w-full max-h-full object-contain"
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