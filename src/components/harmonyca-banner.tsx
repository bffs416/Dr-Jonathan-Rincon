
'use client';

import Image from 'next/image';
import { MessageCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import { cn } from '@/lib/utils';

export function HarmonycaBanner() {
  const { lang } = useLanguage();

  const content = {
    es: {
      tag: 'Promoción Especial',
      title: 'HArmonyCa',
      subtitle: 'Efecto Lifting Híbrido',
      description: 'Transforma tu rostro con la tecnología más avanzada de bioestimulación. Resultados naturales, inmediatos y duraderos.',
      highlight: '30%',
      secondary: 'de descuento',
      label: 'Cupos Limitados',
      cta: 'Agendar Ahora',
    },
    en: {
      tag: 'Special Promotion',
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
    <section className="py-12 md:py-20 bg-secondary/50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-full translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-primary/5 blur-3xl rounded-full -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="bg-white dark:bg-slate-950 rounded-[2.5rem] overflow-hidden shadow-2xl border border-primary/10 relative z-10">
          <div className="flex flex-col md:flex-row items-stretch">
            
            {/* Image Column */}
            <div className="w-full md:w-2/5 relative min-h-[300px] md:min-h-auto overflow-hidden group">
              <Image
                src="/images/harmonyca.jpg"
                alt="HArmonyCa Procedure"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r" />
              <div className="absolute bottom-6 left-6 flex flex-col gap-2">
                <span className="bg-primary px-4 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest animate-pulse">
                  {t.label}
                </span>
                <div className="flex items-center gap-2 text-white">
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                    <span className="font-headline font-bold text-lg">{t.subtitle}</span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="w-full md:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-[2px] w-10 bg-primary/60" />
                  <span className="text-primary text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
                    {t.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-4xl md:text-6xl font-headline font-bold text-slate-900 dark:text-white leading-none">
                    {t.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-primary/80 font-medium font-headline">
                    {t.subtitle}
                  </p>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-xl">
                  {t.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-8 pt-2">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-primary text-white rounded-2xl shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                    <span className="text-3xl md:text-4xl font-bold font-headline leading-none">{t.highlight}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-80 mt-[-2px]">OFF</span>
                  </div>
                  <div>
                    <span className="block text-sm md:text-base text-slate-500 font-semibold uppercase tracking-wider">
                      {t.secondary}
                    </span>
                    <span className="block text-xs text-primary font-bold uppercase tracking-widest mt-1">
                      {lang === 'es' ? 'Válido esta semana' : 'Valid this week'}
                    </span>
                  </div>
                </div>

                <Button 
                    asChild 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-white rounded-2xl px-8 h-16 text-base font-bold uppercase tracking-widest shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <a
                    href="https://wa.me/573122784757"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    {t.cta}
                  </a>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
