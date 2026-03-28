
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-context';

export function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenPromoPopup');
    if (!hasSeenPopup) {
      // Pequeño delay para que no interrumpa la carga inicial
      const timer = setTimeout(() => {
        setIsOpen(true);
        setIsAnimating(true);
        document.body.style.overflow = 'hidden';
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePromo = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsOpen(false);
      document.body.style.overflow = '';
      sessionStorage.setItem('hasSeenPromoPopup', 'true');
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
    }
  };

  const t = content[lang];

  return (
    <>
      {/* ─── Popup Principal ─────────────────────────────────────── */}
      {(isOpen || isAnimating) && (
        <div
          className={cn(
            // Fondo: en móvil alinea al fondo (bottom sheet), en desktop centra
            "fixed inset-0 z-[2000] flex items-end md:items-center justify-center",
            "bg-black/70 backdrop-blur-sm transition-all duration-400",
            // Sin padding lateral en móvil para que ocupe todo el ancho
            "p-0 md:p-6",
            isAnimating ? "opacity-100 visible" : "opacity-0 invisible"
          )}
          onClick={(e) => e.target === e.currentTarget && closePromo()}
        >
          <div
            className={cn(
              "promo-glass w-full md:max-w-5xl",
              // En móvil: esquinas arriba redondeadas (bottom sheet)
              "rounded-t-[1.5rem] md:rounded-[2rem]",
              "overflow-hidden shadow-2xl transform transition-all duration-500",
              // Animación: sube desde abajo en móvil, escala en desktop
              isAnimating
                ? "translate-y-0 opacity-100 md:scale-100"
                : "translate-y-full opacity-0 md:translate-y-0 md:scale-110"
            )}
          >
            {/* ── Drag Handle (solo móvil) ── */}
            <div className="flex justify-center pt-3 pb-1 md:hidden">
              <div className="w-10 h-1 rounded-full bg-slate-300/60" />
            </div>

            <div className="relative flex flex-col md:flex-row max-h-[88vh] md:max-h-[88vh] overflow-y-auto md:overflow-visible">

              {/* ── Botón cerrar ── */}
              <button
                onClick={closePromo}
                className="absolute top-3 right-3 md:top-5 md:right-5 z-30 p-2 md:p-3 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-all hover:rotate-90"
                aria-label="Cerrar"
              >
                <X className="w-4 h-4 md:w-5 md:h-5" />
              </button>

              {/* ── Imagen ─────────────────────────────────────────── */}
              {/* Móvil: landscape 16:9 | Desktop: columna fija 450px */}
              <div className="w-full md:w-[450px] shrink-0 relative overflow-hidden bg-slate-100 group">
                {/* Wrapper de aspecto: 16/9 en móvil, cuadrado-alto en desktop */}
                <div className="relative aspect-[16/9] md:aspect-auto md:h-full min-h-0 md:min-h-[420px]">
                  <Image
                    src="/images/harmonyca.jpg"
                    alt="HArmonyCa - Promoción 30% Descuento"
                    fill
                    className="object-cover transition-transform duration-[15s] group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Badge flotante sobre la imagen */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                    <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-lg">
                      {t.label}
                    </span>
                  </div>
                </div>
              </div>

              {/* ── Contenido ──────────────────────────────────────── */}
              <div className="flex-grow p-5 md:p-10 flex flex-col justify-center gap-3 md:gap-5 bg-white/5">

                {/* Tag */}
                <div className="flex items-center gap-2">
                  <div className="h-px w-5 bg-primary" />
                  <span className="text-primary text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                    {t.tag}
                  </span>
                </div>

                {/* Título */}
                <h3 className="text-2xl md:text-5xl font-medium text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                  {t.title}{' '}
                  <span className="italic text-primary font-light">{t.subtitle}</span>
                </h3>

                {/* Descripción — oculta en móvil para no saturar */}
                <p className="hidden md:block text-base md:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-md">
                  {t.description}
                </p>

                {/* Descuento */}
                <div className="flex items-center gap-3">
                  <span className="text-4xl md:text-5xl font-bold text-primary leading-none">
                    {t.highlight}
                  </span>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-slate-500 font-light">
                      {t.secondary}
                    </span>
                    <span className="block text-[10px] uppercase tracking-widest text-primary font-bold">
                      {t.label}
                    </span>
                  </div>
                </div>

                {/* Descripción móvil (versión compacta) */}
                <p className="md:hidden text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  Bioestimulación avanzada. Resultados naturales e inmediatos.
                </p>

                {/* CTA */}
                <a
                  href="https://wa.me/573122784757"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-primary text-white text-center py-3.5 md:py-4 rounded-xl text-sm font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] transition-all duration-500 shadow-lg hover:bg-primary/90 hover:-translate-y-0.5 mt-1"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    {t.cta}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </a>

                {/* Skip link */}
                <button
                  onClick={closePromo}
                  className="text-xs text-slate-400 hover:text-slate-600 transition-colors text-center mt-1"
                >
                  No, gracias
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
}
