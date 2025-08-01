import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/assets/logo-campers.png")',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {t('home.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            {t('home.subtitle')}
          </p>
          <Link
            to="/services"
            className="inline-flex items-center bg-[#C0965E] hover:bg-[#D4A86E] text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 space-x-2"
          >
            <span>{t('home.cta')}</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              {t('home.features.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C0965E] transition-colors">
                <Star className="h-8 w-8 text-[#C0965E] group-hover:text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {t('home.features.luxury')}
              </h3>
              <p className="text-gray-400">
                {t('home.features.luxury.desc')}
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C0965E] transition-colors">
                <Clock className="h-8 w-8 text-[#C0965E] group-hover:text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {t('home.features.service')}
              </h3>
              <p className="text-gray-400">
                {t('home.features.service.desc')}
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C0965E] transition-colors">
                <Shield className="h-8 w-8 text-[#C0965E] group-hover:text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {t('home.features.reliability')}
              </h3>
              <p className="text-gray-400">
                {t('home.features.reliability.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para tu próximo evento?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contacta con nosotros y descubre cómo podemos hacer de tu evento una experiencia inolvidable.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-[#C0965E] hover:bg-[#D4A86E] text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 space-x-2"
          >
            <span>Contactar Ahora</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}