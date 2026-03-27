
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-context';

export function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showSoon, setShowSoon] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenPromoPopup');
    if (!hasSeenPopup) {
      setIsOpen(true);
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const closePromo = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsOpen(false);
      document.body.style.overflow = '';
      sessionStorage.setItem('hasSeenPromoPopup', 'true');
      // Mostrar "Próximamente" después de cerrar el popup principal
      setShowSoon(true);
    }, 500);
  };

  if (!isOpen) return null;

  const content = {
    es: {
      tag: 'Promoción Exclusiva',
      title: 'HArmonyCa',
      subtitle: 'Efecto Lifting Híbrido',
      description: 'Transforma tu rostro con la tecnología más avanzada de bioestimulación. Resultados naturales, inmediatos y duraderos.',
      highlight: '30%',
      secondary: 'de descuento',
      label: 'Cupos Limitados',
      cta: 'Agendar Ahora',
      soonTag: 'Próximamente',
      soonTitle: 'Nuevo Tratamiento',
      soonSubtitle: 'Innovación en Medicina Estética',
    },
    en: {
      tag: 'Exclusive Promotion',
      title: 'HArmonyCa',
      subtitle: 'Hybrid Lifting Effect',
      description: 'Transform your face with the most advanced biostimulation technology. Natural, immediate, and long-lasting results.',
      highlight: '30%',
      secondary: 'discount',
      label: 'Limited Spots',
      cta: 'Book Now',
      soonTag: 'Coming Soon',
      soonTitle: 'New Treatment',
      soonSubtitle: 'Aesthetic Medicine Innovation',
    }
  };

  const t = content[lang];

  return (
    <>
      {/* Popup Principal - Descuento */}
      <div 
        className={cn(
          "fixed inset-0 z-[2000] flex items-center justify-center p-0 md:p-6 bg-black/70 backdrop-blur-lg transition-all duration-500",
          isAnimating ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={(e) => e.target === e.currentTarget && closePromo()}
      >
        <div 
          className={cn(
            "promo-glass max-w-6xl w-full h-full md:h-auto md:max-h-[90vh] md:rounded-[2rem] overflow-y-auto md:overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] transform transition-all duration-700",
            isAnimating ? "scale-100 opacity-100" : "scale-110 opacity-0"
          )}
        >
          <div className="relative h-full flex flex-col md:flex-row">
            {/* Close Button */}
            <button 
              onClick={closePromo}
              className="absolute top-6 right-6 z-30 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-all hover:rotate-90"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Side: Two stacked images */}
            <div className="w-full md:w-[520px] shrink-0 flex flex-col bg-slate-100 overflow-hidden">

              {/* Imagen 1: Banner Principal */}
              <div className="relative w-full overflow-hidden group" style={{ aspectRatio: '4/3' }}>
                <Image 
                  src="/images/harmonyca.jpg"
                  alt="HArmonyCa - Promoción 30% Descuento"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Imagen 2: Imagen inferior independiente */}
              <div className="relative w-full overflow-hidden group border-t border-white/20" style={{ aspectRatio: '4/2' }}>
                <Image 
                  src="/images/Sin título.jpg"
                  alt="Nuevo Tratamiento - Más Información"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-3 left-3 bg-black/50 text-white text-[10px] px-3 py-1 rounded-full tracking-widest uppercase backdrop-blur-sm">
                  Más Información
                </div>
              </div>

            </div>

            {/* Right Side: Content */}
            <div className="flex-grow p-8 md:p-12 flex flex-col justify-center gap-5 md:gap-6 relative bg-white/5">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-px w-6 bg-primary"></div>
                  <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">{t.tag}</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-medium text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                  {t.title} <br/>
                  <span className="italic text-primary dark:text-primary font-light">{t.subtitle}</span>
                </h3>
              </div>

              <div className="space-y-5">
                <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-md">
                  {t.description}
                </p>
                
                <div className="flex items-center gap-3">
                  <span className="text-3xl md:text-5xl font-bold text-primary dark:text-primary leading-none">{t.highlight}</span>
                  <div className="space-y-0">
                    <span className="block text-xs md:text-sm uppercase tracking-widest text-slate-500 font-light">{t.secondary}</span>
                    <span className="block text-[10px] md:text-xs uppercase tracking-widest text-primary font-bold">{t.label}</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col gap-4 mt-2">
                <a 
                  href="https://wa.me/573122784757" 
                  target="_blank"
                  className="group relative overflow-hidden bg-primary text-white text-center py-4 rounded-xl text-sm font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-lg hover:bg-primary/90 transform hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    {t.cta}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Secundario - Próximamente */}
      {showSoon && (
        <div className="fixed bottom-0 left-0 right-0 z-[2001] p-4 md:p-6 flex justify-center transition-all duration-700 ease-out translate-y-0 opacity-100">
          <div className="relative w-full max-w-2xl aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
            <Image 
              src="/images/Sin título.jpg"
              alt="Próximamente - Nuevo Tratamiento"
              fill
              className="object-cover transition-transform duration-[15s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-3">
                  {t.soonTag}
                </span>
                <h3 className="text-2xl md:text-4xl font-medium text-white leading-tight tracking-tight">
                  {t.soonTitle} <br/>
                  <span className="italic font-light opacity-90">{t.soonSubtitle}</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
