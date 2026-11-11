'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { WhatsAppIcon } from './icons/whatsapp-icon';
import { Clock, Phone, MapPin, Sparkles, ShieldCheck } from 'lucide-react';

interface MaintenanceScreenProps {
  /**
   * Internal time when the screen automatically disappears and restores the site.
   * Default: Tomorrow at 10:00 AM Colombia time (2026-11-10T10:00:00-05:00)
   */
  autoUnlockTime?: string;
  /**
   * Visual target time shown to the public for the countdown.
   * Default: Tomorrow 12:00 AM (midnight next day)
   */
  displayEndTime?: string;
  displayText?: string;
}

export function MaintenanceScreen({
  autoUnlockTime = '2026-11-10T10:00:00-05:00',
  displayEndTime = '2026-11-11T00:00:00-05:00',
  displayText = 'Mañana a las 12:00 AM',
}: MaintenanceScreenProps) {
  const [isActive, setIsActive] = useState<boolean>(true);
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const unlockTarget = new Date(autoUnlockTime).getTime();
    const visualTarget = new Date(displayEndTime).getTime();

    const checkStatus = () => {
      const now = new Date().getTime();

      // Internal automation: unlocks website at 10:00 AM sharp
      if (now >= unlockTarget) {
        setIsActive(false);
        return;
      }

      // Visual countdown towards the public end time (12 AM next day)
      const visualDiff = visualTarget - now;
      if (visualDiff > 0) {
        const hours = Math.floor(visualDiff / (1000 * 60 * 60));
        const minutes = Math.floor((visualDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((visualDiff % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds });
      } else {
        setIsActive(false);
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 1000);

    return () => clearInterval(interval);
  }, [autoUnlockTime, displayEndTime]);

  if (!isActive) {
    return null;
  }

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined') {
      const win = window as any;
      if (win.fbq) {
        win.fbq('track', 'Contact');
      }
      if (win.gtag_report_conversion) {
        win.gtag_report_conversion('https://wa.me/573122784757');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white px-4 py-8 overflow-y-auto selection:bg-emerald-500 selection:text-white">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl w-full mx-auto text-center flex flex-col items-center">
        {/* Logo */}
        <div className="mb-6 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-primary rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500" />
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-900 flex items-center justify-center">
            <Image
              src="/images/Logo Dr Johnathan.png"
              alt="Dr. Jonathan Rincón"
              width={96}
              height={96}
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Doctor Name & Specialty */}
        <h2 className="text-2xl font-bold tracking-tight text-white mb-1">
          Dr. Jonathan Rincón
        </h2>
        <p className="text-sm font-medium text-emerald-400 tracking-widest uppercase mb-6 flex items-center gap-1.5 justify-center">
          <Sparkles className="w-3.5 h-3.5" />
          Medicina Estética & Longevidad
          <Sparkles className="w-3.5 h-3.5" />
        </p>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-slate-200 text-xs sm:text-sm font-medium mb-6">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          Actualización y Optimización del Sitio Web
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
          Estamos mejorando para ti
        </h1>

        {/* Subtitle / Description */}
        <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto mb-8 font-light leading-relaxed">
          Estamos realizando labores de mantenimiento y optimización para brindarte una experiencia digital más completa y exclusiva.
        </p>

        {/* Return Notice Card */}
        <div className="w-full bg-white/[0.04] border border-white/10 rounded-2xl p-6 backdrop-blur-xl mb-8 shadow-2xl">
          <div className="flex items-center justify-center gap-2 text-slate-200 text-sm font-medium mb-3">
            <Clock className="w-4 h-4 text-emerald-400" />
            <span>Retorno estimado:</span>
            <strong className="text-white font-semibold">{displayText}</strong>
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-xl py-3 px-2">
              <span className="block text-2xl sm:text-3xl font-bold text-emerald-400 font-mono">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider">Horas</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl py-3 px-2">
              <span className="block text-2xl sm:text-3xl font-bold text-emerald-400 font-mono">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider">Min</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl py-3 px-2">
              <span className="block text-2xl sm:text-3xl font-bold text-emerald-400 font-mono">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider">Seg</span>
            </div>
          </div>
        </div>

        {/* Direct Contact Notice & WhatsApp CTA */}
        <div className="w-full flex flex-col items-center">
          <p className="text-xs sm:text-sm text-slate-300 mb-3 font-medium flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 inline" />
            Nuestra atención por WhatsApp continúa activa con total normalidad:
          </p>

          <a
            href="https://wa.me/573122784757?text=Hola%20Dr.%20Jonathan%20Rinc%C3%B3n%2C%20quisiera%20agendar%20una%20cita%20o%20solicitar%20informaci%C3%B3n."
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-full shadow-lg shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <WhatsAppIcon className="w-6 h-6 fill-current" />
            <span>Agendar Cita o Consulta por WhatsApp</span>
          </a>

          {/* Quick info footer */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              +57 312 278 4757
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              Medellín • Bogotá • Cali, Colombia
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
