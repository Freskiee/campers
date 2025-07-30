import React from 'react';
import { X, MessageCircle, Ruler, DollarSign } from 'lucide-react';
import { Service } from '../data/services';
import { useLanguage } from '../contexts/LanguageContext';

interface ServiceModalProps {
  service: Service;
  isOpen: boolean;
  onClose: () => void;
}

export default function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  const { language, t } = useLanguage();

  if (!isOpen) return null;

  const handleWhatsApp = () => {
    const serviceName = service.name[language];
    const message = encodeURIComponent(`${t('whatsapp.service')} ${serviceName}, ${t('whatsapp.service.details')}`);
    window.open(`https://wa.me/5215512345678?text=${message}`, '_blank');
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
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="grid grid-cols-3 gap-2">
                  {service.gallery.slice(1).map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${service.name[language]} ${index + 2}`}
                      className="w-full h-20 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>

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