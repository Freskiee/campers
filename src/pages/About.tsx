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
    <div className="min-h-screen bg-black pt-16">
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
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-[#232c3b] rounded-xl shadow-xl p-10 mb-12">
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

      {/* Flip-Box Section */}
      <section className="py-10 bg-black relative mb-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            {(() => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [hasFlipped, setHasFlipped] = React.useState(false);
  return (
    <div className="flip-box-container w-full max-w-2xl focus:outline-none" tabIndex={0}>
      <div className={`flip-box-inner transition-transform duration-700 ${isFlipped ? 'flipped' : ''}`}
        style={{ cursor: 'pointer', boxShadow: isFlipped ? '0 8px 32px #0004' : '0 4px 16px #0002', minHeight: 360 }}
      >
        {/* Cara frontal */}
        <div className="flip-box-front bg-white rounded-2xl shadow-2xl p-10 flex flex-col items-center justify-center min-h-[360px] transition-colors duration-300 relative">
          <div className="flex flex-col items-center mb-6">
            <Award className="h-10 w-10 text-[#C0965E] mb-2" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Misión</h2>
            <p className="text-gray-700 text-base mb-6 text-center">Brindar soluciones innovadoras que impacten positivamente en nuestros clientes.</p>
            <Users className="h-10 w-10 text-[#C0965E] mb-2" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Visión</h2>
            <p className="text-gray-700 text-base text-center">Ser referentes en nuestra industria por excelencia, innovación y compromiso.</p>
          </div>
        </div>
        {/* Cara trasera */}
        <div className="flip-box-back bg-white rounded-2xl shadow-2xl p-10 flex flex-col items-center justify-center min-h-[360px] transition-colors duration-300 relative">
          <Shield className="h-10 w-10 text-[#C0965E] mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestros Logros</h2>
          <ul className="text-gray-700 text-base space-y-2 text-center mb-8">
            <li>+100 proyectos exitosos</li>
            <li>Clientes en 5 países</li>
            <li>Reconocimientos en innovación</li>
          </ul>
        </div>
      </div>
    </div>
  );
})()}

          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 bg-black/80 rounded-xl shadow-xl py-8 px-4">

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

      <style>{`
        .flip-box-container {
          perspective: 1200px;
        }
        .flip-box-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.7s cubic-bezier(.4,2,.3,1), box-shadow 0.3s;
          transform-style: preserve-3d;
        }
        .flip-box-container:focus .flip-box-inner,
        .flip-box-container:active .flip-box-inner,
        .flip-box-container:hover .flip-box-inner,
        .flip-box-inner.flipped {
          transform: rotateY(180deg);
        }
        .flip-box-front,
        .flip-box-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }
        .flip-box-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}