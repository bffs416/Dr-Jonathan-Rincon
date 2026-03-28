
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-context';

export function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showSoonBanner, setShowSoonBanner] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenPromoPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setIsAnimating(true);
        document.body.style.overflow = 'hidden';
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePromo = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsOpen(false);
      document.body.style.overflow = '';
      sessionStorage.setItem('hasSeenPromoPopup', 'true');
      
      // Mostrar el banner de "Próximamente" después de cerrar el popup
      setShowSoonBanner(true);
    }, 400);
  };

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
      soonTitle: 'Próximamente...',
      soonSubtitle: 'Nuevo Producto',
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
      soonTitle: 'Coming Soon...',
      soonSubtitle: 'New Product',
    }
  };

  const t = content[lang];

  return (
    <>
      {/* ─── Popup Principal ─────────────────────────────────────── */}
      {(isOpen || isAnimating) && (
        <div
          className={cn(
            "fixed inset-0 z-[2000] flex items-end md:items-center justify-center",
            "bg-black/75 backdrop-blur-md transition-all duration-500",
            "p-0 md:p-6",
            isAnimating ? "opacity-100 visible" : "opacity-0 invisible"
          )}
          onClick={(e) => e.target === e.currentTarget && closePromo()}
        >
          <div
            className={cn(
              "promo-glass w-full md:max-w-5xl",
              "rounded-t-[2rem] md:rounded-[2.5rem]",
              "overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] transform transition-all duration-700",
              isAnimating
                ? "translate-y-0 opacity-100 md:scale-100"
                : "translate-y-[100%] opacity-0 md:translate-y-0 md:scale-105"
            )}
          >
            {/* Handle móvil */}
            <div className="flex justify-center pt-4 pb-2 md:hidden">
              <div className="w-12 h-1.5 rounded-full bg-slate-300/40" />
            </div>

            <div className="relative flex flex-col md:flex-row max-h-[92vh] md:max-h-none overflow-y-auto md:overflow-visible bg-white dark:bg-slate-950">
              
              {/* Cerrar */}
              <button
                onClick={closePromo}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-40 p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-xl transition-all hover:rotate-90"
              >
                <X className="w-5 h-5" />
              </button>

              {/* ── Columna Imágenes (Izq) ────────────────────────── */}
              <div className="w-full md:w-[480px] shrink-0 flex flex-col overflow-hidden bg-slate-100 dark:bg-slate-900 border-r border-slate-200/20">
                
                {/* Imagen 1: Principal */}
                <div className="relative aspect-[4/3] w-full overflow-hidden group">
                  <Image
                    src="/images/harmonyca.jpg"
                    alt="HArmonyCa Principal"
                    fill
                    className="object-cover transition-all duration-[10s] group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Badge sobre imagen 1 */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary/95 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full shadow-2xl backdrop-blur-md">
                      {t.label}
                    </span>
                  </div>
                </div>

                {/* Imagen 2: Secundaria */}
                <div className="relative aspect-[4/2] w-full overflow-hidden group border-t border-white/10">
                  <Image
                    src="/images/harmonyca-ovalo.png"
                    alt="Redefinición Facial"
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-50" />
                </div>
              </div>

              {/* ── Columna Contenido (Der) ────────────────────────── */}
              <div className="flex-grow p-6 md:p-12 flex flex-col justify-center gap-4 md:gap-7 relative overflow-hidden">
                {/* Decoración fondo */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10 space-y-4 md:space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-[2px] w-8 bg-primary/60" />
                    <span className="text-primary text-[11px] md:text-sm font-bold tracking-[0.25em] uppercase">
                      {t.tag}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-3xl md:text-6xl font-headline font-bold text-slate-900 dark:text-white leading-[1.05] tracking-tight">
                      {t.title}
                    </h3>
                    <p className="text-xl md:text-2xl italic text-primary/80 font-light font-headline">
                      {t.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-lg text-base md:text-lg">
                    {t.description}
                  </p>

                  <div className="flex items-center gap-5 pt-2">
                    <div className="flex flex-col items-center justify-center p-4 bg-primary text-white rounded-2xl shadow-xl min-w-[100px]">
                      <span className="text-4xl md:text-5xl font-bold font-headline">{t.highlight}</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-80 mt-[-4px]">OFF</span>
                    </div>
                    <div>
                      <span className="block text-sm md:text-base text-slate-500 font-medium uppercase tracking-[0.1em]">
                        {t.secondary}
                      </span>
                      <span className="block text-xs text-primary font-bold uppercase tracking-widest mt-1">
                        Válido esta semana
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col space-y-4">
                    <a
                      href="https://wa.me/573122784757"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden bg-primary text-white text-center py-4 md:py-5 rounded-2xl text-sm md:text-base font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-[0_12px_32px_-8px_rgba(13,44,72,0.4)] hover:shadow-[0_20px_48px_-12px_rgba(13,44,72,0.5)] hover:-translate-y-1"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                        {t.cta}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[1200ms] cubic-bezier(0.4, 0, 0.2, 1)" />
                    </a>
                    
                    <button
                      onClick={closePromo}
                      className="text-[10px] md:text-xs text-slate-400 hover:text-primary transition-colors uppercase tracking-widest font-semibold text-center"
                    >
                      Quizás en otro momento
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── Banner "Próximamente" ───────────────────────────────── */}
      {showSoonBanner && (
        <div className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-[2000] w-[calc(100%-3rem)] max-w-[320px] md:px-0">
          <div className="animate-slide-up bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden shadow-primary/20 relative">
            {/* Botón cerrar – zona táctil amplia para móvil */}
            <button 
              onClick={(e) => { e.stopPropagation(); setShowSoonBanner(false); }}
              className="absolute top-2 right-2 z-10 flex items-center justify-center w-8 h-8 min-w-[44px] min-h-[44px] rounded-full bg-white/10 hover:bg-white/25 active:bg-white/30 text-white/60 hover:text-white transition-all duration-200"
              aria-label="Cerrar banner"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-4 p-4 pr-14">
              <div className="relative w-16 h-16 shrink-0 rounded-xl overflow-hidden border border-white/10">
                <Image
                  src="/images/Experto_Hilos_tensores.png"
                  alt="Dr. Jonathan Rincón"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="flex-grow">
                <span className="text-[10px] text-primary font-bold uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded-md inline-block">
                  NEW EXPERTISE
                </span>
                <h4 className="text-white font-headline font-bold text-sm mt-1">
                  {t.soonTitle}
                </h4>
                <p className="text-white/60 text-[11px] leading-tight mt-0.5">
                  {t.soonSubtitle}
                </p>
              </div>
            </div>
            
            {/* Barra de progreso decorativa */}
            <div className="h-1 w-full bg-white/5">
              <div className="h-full w-2/3 bg-primary animate-pulse" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
