import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-[#C0965E] mb-4">Campers México</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              {t('home.subtitle')}
            </p>
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-[#C0965E]">
                C
              </div>
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-[#C0965E]">
                M
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('contact.info.title')}</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-3 text-[#C0965E]" />
                <span>+52 55 1234 5678</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-3 text-[#C0965E]" />
                <span>info@campersmexico.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-3 text-[#C0965E]" />
                <span>Ciudad de México</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Clock className="h-5 w-5 mr-3 text-[#C0965E]" />
                <span>{t('contact.info.hours.value')}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Servicios</h4>
            <div className="space-y-2">
              <p className="text-gray-400 hover:text-[#C0965E] cursor-pointer transition-colors">
                {t('services.campers')}
              </p>
              <p className="text-gray-400 hover:text-[#C0965E] cursor-pointer transition-colors">
                {t('services.bathrooms')}
              </p>
              <p className="text-gray-400 hover:text-[#C0965E] cursor-pointer transition-colors">
                {t('services.rest')}
              </p>
              <p className="text-gray-400 hover:text-[#C0965E] cursor-pointer transition-colors">
                {t('services.makeup')}
              </p>
              <p className="text-gray-400 hover:text-[#C0965E] cursor-pointer transition-colors">
                {t('services.staff')}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 Campers México. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}