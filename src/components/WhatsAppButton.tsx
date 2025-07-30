import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function WhatsAppButton() {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    const message = encodeURIComponent(t('whatsapp.general'));
    window.open(`https://wa.me/5215512345678?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20B954] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40"
      aria-label="WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
}