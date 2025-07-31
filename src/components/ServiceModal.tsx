import React, { useState } from 'react';
import { X, MessageCircle, Ruler, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';
import { Service } from '../data/services';
import { useLanguage } from '../contexts/LanguageContext';

interface ServiceModalProps {
  service: Service;
  isOpen: boolean;
  onClose: () => void;
}

export default function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  const { language, t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!isOpen) return null;

  const handleWhatsApp = () => {
    const serviceName = service.name[language];
    const message = encodeURIComponent(`${t('whatsapp.service')} ${serviceName}, ${t('whatsapp.service.details')}`);
    window.open(`https://wa.me/5512999642?text=${message}`, '_blank');
  };

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % service.gallery.length);
  };
  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + service.gallery.length) % service.gallery.length);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-black/75" onClick={onClose}></div>
        </div>

        <div className="inline-block align-bottom bg-gray-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <div className="bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">{service.name[language]}</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Gallery */}
              <div className="space-y-4">
                <img
                  src={service.image}
                  alt={service.name[language]}
                  className="w-full max-h-[60vh] object-contain rounded-lg bg-black mx-auto cursor-pointer"
                  onClick={() => openLightbox(0)}
                />
                <div className="grid grid-cols-3 gap-2">
                  {service.gallery.slice(1).map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${service.name[language]} ${index + 2}`}
                      className="w-full max-h-20 object-contain rounded-lg bg-black mx-auto cursor-pointer"
                      onClick={() => openLightbox(index + 1)}
                    />
                  ))}
                </div>
              </div>

              {/* Lightbox/carrousel */}
              {lightboxOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={closeLightbox}>
                  <button
                    onClick={closeLightbox}
                    className="absolute top-6 right-8 text-white hover:text-[#C0965E] text-4xl z-10"
                    aria-label="Cerrar"
                  >
                    <X size={36} />
                  </button>
                  <button
                    onClick={prevImage}
                    className="absolute left-8 top-1/2 -translate-y-1/2 text-white hover:text-[#C0965E] text-4xl z-10"
                    aria-label="Anterior"
                  >
                    <ChevronLeft size={40} />
                  </button>
                  <img
                    src={service.gallery[lightboxIndex]}
                    alt={`Imagen ${lightboxIndex + 1}`}
                    className="max-w-[90vw] max-h-[80vh] w-auto h-auto object-contain mx-auto block rounded-lg bg-black"
                    onClick={e => e.stopPropagation()}
                  />
                  <button
                    onClick={nextImage}
                    className="absolute right-8 top-1/2 -translate-y-1/2 text-white hover:text-[#C0965E] text-4xl z-10"
                    aria-label="Siguiente"
                  >
                    <ChevronRight size={40} />
                  </button>
                  <div className="absolute bottom-8 left-0 right-0 text-center">
                    <span className="text-white bg-black/60 px-4 py-2 rounded-lg text-lg font-semibold">
                      {service.name[language]} ({lightboxIndex + 1}/{service.gallery.length})
                    </span>
                  </div>
                </div>
              )}

              {/* Details */}
              <div className="space-y-6">
                <p className="text-gray-300">{service.description[language]}</p>

                <div className="flex items-center space-x-2">
                  <Ruler className="h-5 w-5 text-[#C0965E]" />
                  <span className="text-white font-semibold">{t('services.dimensions')}:</span>
                  <span className="text-gray-300">{service.dimensions}</span>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <span className="mr-2">{t('services.specifications')}</span>
                  </h4>
                  <ul className="space-y-2">
                    {service.specifications[language].map((spec, index) => (
                      <li key={index} className="text-gray-300 flex items-center">
                        <div className="w-2 h-2 bg-[#C0965E] rounded-full mr-3"></div>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-[#C0965E]" />
                  <span className="text-white font-semibold">{t('services.estimated.price')}:</span>
                  <span className="text-[#C0965E] font-bold">{service.price}</span>
                </div>

                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-[#C0965E] hover:bg-[#D4A86E] text-black font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={20} />
                  <span>{t('services.whatsapp.cta')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}