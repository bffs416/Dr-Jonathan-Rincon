
'use client';

import { Facebook, Instagram, MapPin, Clock, Phone, Youtube } from 'lucide-react';
import { Logo } from './logo';
import { Button } from './ui/button';
import Link from 'next/link';
import { WhatsAppIcon } from './icons/whatsapp-icon';
import Image from 'next/image';
import { useLanguage } from '@/context/language-context';

export default function Footer() {
  const { lang } = useLanguage();

  const content = {
    es: {
      tagline: 'Especialista #1 en hilos tensores faciales y corporales en Medellín.',
      description: 'Tratamientos estéticos avanzados con tecnología de vanguardia y resultados garantizados.',
      navigation: 'Navegación',
      home: 'Inicio',
      threadLifts: 'Hilos Tensores',
      blog: 'Blog',
      aboutMe: 'Sobre Mi',
      contact: 'Contacto',
      legal: 'Legal',
      terms: 'Términos y Condiciones',
      privacy: 'Política de Privacidad',
      address: `Edificio Azor, Cra. 84 #37b - 195
Primer piso, La América
Medellín, Antioquia`,
      schedule: `Lun - Vie: 8:00 AM - 6:00 PM
Sáb: 8:00 AM - 2:00 PM`,
      copyright: `© ${new Date().getFullYear()} Dr. Jonathan Rincón. Todos los derechos reservados. Diseñado por`,
    },
    en: {
      tagline: '#1 Specialist in facial and body thread lifts in Medellín.',
      description: 'Advanced aesthetic treatments with cutting-edge technology and guaranteed results.',
      navigation: 'Navigation',
      home: 'Home',
      threadLifts: 'Thread Lifts',
      blog: 'Blog',
      aboutMe: 'About Me',
      contact: 'Contact',
      legal: 'Legal',
      terms: 'Terms & Conditions',
      privacy: 'Privacy Policy',
      address: `Azor Building, Cra. 84 #37b - 195
First floor, La América
Medellín, Antioquia`,
      schedule: `Mon - Fri: 8:00 AM - 6:00 PM
Sat: 8:00 AM - 2:00 PM`,
      copyright: `© ${new Date().getFullYear()} Dr. Jonathan Rincón. All rights reserved. Designed by`,
    },
  };

  const currentContent = content[lang];

  return (
    <footer id="contacto" className="bg-secondary text-card-foreground border-t border-primary/10 scroll-mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              <strong className="text-primary/80 font-semibold">{currentContent.tagline}</strong> {currentContent.description}
            </p>
            <div className="flex space-x-2 mt-4">
               <Button variant="ghost" size="icon" asChild>
                <a href="https://www.instagram.com/drjonathanrincon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.facebook.com/profile.php?id=100063747843041" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.tiktok.com/@drjonathanrincon" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <Image src="/images/1946552.png" alt="TikTok" width={20} height={20} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.youtube.com/@dr.jonathanrincon298" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-headline font-semibold">{currentContent.navigation}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary/80">{currentContent.home}</Link></li>
              <li><Link href="/hilos-tensores" className="text-muted-foreground hover:text-primary/80">{currentContent.threadLifts}</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary/80">{currentContent.blog}</Link></li>
              <li><Link href="/#sobre-el-doctor" className="text-muted-foreground hover:text-primary/80">{currentContent.aboutMe}</Link></li>
              <li><Link href="/contacto" className="text-muted-foreground hover:text-primary/80">{currentContent.contact}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold">{currentContent.legal}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/terminos-y-condiciones" className="text-muted-foreground hover:text-primary/80">{currentContent.terms}</Link></li>
              <li><Link href="/politica-de-privacidad" className="text-muted-foreground hover:text-primary/80">{currentContent.privacy}</Link></li>
            </ul>
          </div>
           <div>
            <h3 className="font-headline font-semibold">{currentContent.contact}</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 shrink-0 text-muted-foreground" />
                <a href="https://maps.app.goo.gl/Um7JKhc2Nhewzhm67" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary/80 whitespace-pre-line">
                  {currentContent.address}
                </a>
              </li>
              <li className="flex items-start">
                <WhatsAppIcon className="w-4 h-4 mr-2 mt-1 shrink-0 text-muted-foreground" />
                <a href="https://wa.me/573122784757" className="text-muted-foreground hover:text-primary/80" target="_blank" rel="noopener noreferrer">+57 312 278 4757</a>
              </li>
              <li className="flex items-start">
                <Clock className="w-4 h-4 mr-2 mt-1 shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground whitespace-pre-line">
                  {currentContent.schedule}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-primary/10 pt-8 text-center text-sm text-muted-foreground">
          <p>{currentContent.copyright} <a href="https://nyvara-web.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-primary/80 font-semibold">Nyvara Group</a>.</p>
        </div>
      </div>
    </footer>
  );
}
