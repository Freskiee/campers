import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construir mensaje para WhatsApp con los datos del formulario
    const { name, company, email, phone, service, message } = formData;
    const text =
      `Nuevo contacto desde la web:\n` +
      `Nombre: ${name}\n` +
      `Empresa: ${company}\n` +
      `Email: ${email}\n` +
      `Teléfono: ${phone}\n` +
      `Servicio: ${service}\n` +
      `Mensaje: ${message}`;
    const url = `https://wa.me/5512999642?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      {/* Header */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800 rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0965E]"
                      placeholder={t('contact.form.name')}
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      {t('contact.form.company')}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0965E]"
                      placeholder={t('contact.form.company')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0965E]"
                      placeholder={t('contact.form.email')}
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      {t('contact.form.phone')} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0965E]"
                      placeholder={t('contact.form.phone')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    {t('contact.form.service')}
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0965E]"
                  >
                    <option value="">{t('contact.form.service')}</option>
                    <option value="campers">{t('services.campers')}</option>
                    <option value="bathrooms">{t('services.bathrooms')}</option>
                    <option value="plantasDeLuz">{t('services.plantasDeLuz')}</option>
                    <option value="staff">{t('services.staff')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0965E] resize-none"
                    placeholder={t('contact.form.message')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C0965E] hover:bg-[#D4A86E] text-black font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>{t('contact.form.submit')}</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-8">
                  {t('contact.info.title')}
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#C0965E] p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{t('contact.info.phone')}</h3>
                      <p className="text-gray-300">+52 55 1234 5678</p>
                      <p className="text-gray-300">+52 55 8765 4321</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#C0965E] p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{t('contact.info.email')}</h3>
                      <p className="text-gray-300">info@campersmexico.com</p>
                      <p className="text-gray-300">ventas@campersmexico.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#C0965E] p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Oficina Central</h3>
                      <p className="text-gray-300">Ciudad de México</p>
                      <p className="text-gray-300">Cobertura Nacional</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#C0965E] p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{t('contact.info.hours')}</h3>
                      <p className="text-gray-300">{t('contact.info.hours.value')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-gray-800 rounded-lg p-8 text-center">
                <MapPin className="h-12 w-12 text-[#C0965E] mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Ubicación</h3>
                <p className="text-gray-300">
                  Contamos con cobertura en toda la República Mexicana
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}