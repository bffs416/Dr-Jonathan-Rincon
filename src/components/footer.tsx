import { Facebook, Instagram, MapPin, Clock, Phone, Youtube } from 'lucide-react';
import { Logo } from './logo';
import { Button } from './ui/button';
import Link from 'next/link';
import { WhatsAppIcon } from './icons/whatsapp-icon';
import { TikTokIcon } from './icons/tiktok-icon';

export default function Footer() {
  return (
    <footer className="bg-secondary text-card-foreground border-t border-primary/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              <strong className="text-primary/80 font-semibold">Especialista #1 en hilos tensores faciales y corporales en Medellín.</strong> Tratamientos estéticos avanzados con tecnología de vanguardia y resultados garantizados.
            </p>
            <div className="flex space-x-2 mt-4">
               <Button variant="ghost" size="icon" asChild>
                <a href="https://www.instagram.com/drjonathanrincon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.facebook.com/profile.php?id=100063747843041&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.tiktok.com/@drjonathanrincon" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <TikTokIcon className="h-5 w-5" />
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
            <h3 className="font-headline font-semibold">Navegación</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary/80">Inicio</Link></li>
              <li><Link href="/hilos-tensores" className="text-muted-foreground hover:text-primary/80">Hilos Tensores</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary/80">Blog</Link></li>
              <li><Link href="/#sobre-el-doctor" className="text-muted-foreground hover:text-primary/80">Sobre Mi</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary/80">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/terminos-y-condiciones" className="text-muted-foreground hover:text-primary/80">Términos y Condiciones</Link></li>
              <li><Link href="/politica-de-privacidad" className="text-muted-foreground hover:text-primary/80">Política de Privacidad</Link></li>
            </ul>
          </div>
           <div>
            <h3 className="font-headline font-semibold">Contacto</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 shrink-0 text-muted-foreground" />
                <a href="https://maps.app.goo.gl/Um7JKhc2Nhewzhm67" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary/80">
                  Edificio Azor, Cra. 84 #37b - 195 <br />
                  Primer piso, La América <br/>
                  Medellín, Antioquia
                </a>
              </li>
              <li className="flex items-start">
                <WhatsAppIcon className="w-4 h-4 mr-2 mt-1 shrink-0 text-muted-foreground" />
                <a href="https://wa.me/573122784757" className="text-muted-foreground hover:text-primary/80" target="_blank" rel="noopener noreferrer">+57 312 278 4757</a>
              </li>
              <li className="flex items-start">
                <Clock className="w-4 h-4 mr-2 mt-1 shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Lun - Vie: 8:00 AM - 6:00 PM <br/>
                  Sáb: 8:00 AM - 2:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-primary/10 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dr. Jonathan Rincón. Todos los derechos reservados. Diseñado por <a href="https://nyvara-web.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-primary/80 font-semibold">Nyvara Group</a>.</p>
        </div>
      </div>
    </footer>
  );
}