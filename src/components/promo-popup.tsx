
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-context';


export function PromoPopup() {
  const [showSoonBanner, setShowSoonBanner] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    const hasSeenSoonBanner = sessionStorage.getItem('hasSeenSoonBanner');
    if (!hasSeenSoonBanner) {
      const timer = setTimeout(() => {
        setShowSoonBanner(true);
      }, 3000); // Show after 3 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const closeSoonBanner = () => {
    setShowSoonBanner(false);
    sessionStorage.setItem('hasSeenSoonBanner', 'true');
  };

  const content = {
    es: {
      soonTitle: 'Próximamente...',
      soonSubtitle: 'Nuevo Producto',
    },
    en: {
      soonTitle: 'Coming Soon...',
      soonSubtitle: 'New Product',
    }
  };

  const t = content[lang];

  return (
    <>
      {/* ─── Banner "Próximamente" ───────────────────────────────── */}
      {showSoonBanner && (
        <div className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-[2000] w-[calc(100%-3rem)] max-w-[320px] md:px-0">
          <div className="animate-slide-up bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden shadow-primary/20 relative">
            {/* Botón cerrar – zona táctil amplia para móvil */}
            <button 
              onClick={closeSoonBanner}
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
