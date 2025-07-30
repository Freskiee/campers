import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const clients = [
    'Televisa', 'TV Azteca', 'Netflix México', 'Amazon Studios',
    'Grupo Modelo', 'Coca-Cola FEMSA', 'BBVA México', 'American Express'
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      {/* Header */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                {t('about.story.title')}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {t('about.story.content')}
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Nuestro compromiso con la calidad y la innovación nos ha permitido trabajar con las marcas más prestigiosas del país, consolidándonos como el socio estratégico ideal para eventos que requieren el más alto nivel de servicio.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Campers México"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#C0965E] text-black p-6 rounded-lg">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm font-semibold">Años de experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-[#C0965E]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t('about.mission.title')}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t('about.mission.content')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-[#C0965E]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t('about.vision.title')}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t('about.vision.content')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Nuestros Logros
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-[#C0965E]" />
              </div>
              <div className="text-3xl font-bold text-[#C0965E] mb-2">500+</div>
              <div className="text-gray-300">Eventos exitosos</div>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#C0965E]" />
              </div>
              <div className="text-3xl font-bold text-[#C0965E] mb-2">200+</div>
              <div className="text-gray-300">Clientes satisfechos</div>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-[#C0965E]" />
              </div>
              <div className="text-3xl font-bold text-[#C0965E] mb-2">24/7</div>
              <div className="text-gray-300">Disponibilidad</div>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-[#C0965E]" />
              </div>
              <div className="text-3xl font-bold text-[#C0965E] mb-2">100%</div>
              <div className="text-gray-300">Confiabilidad</div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Clientes que Confían en Nosotros
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors"
              >
                <div className="text-[#C0965E] font-bold text-lg">
                  {client}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}