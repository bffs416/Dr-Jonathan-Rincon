import { Facebook, Instagram, MapPin, Clock, Phone } from 'lucide-react';
import { Logo } from './logo';
import { Button } from './ui/button';
import Link from 'next/link';
import { WhatsAppIcon } from './icons/whatsapp-icon';

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Especialista #1 en hilos tensores faciales y corporales en Medellín. Tratamientos estéticos avanzados con tecnología de vanguardia y resultados garantizados.
            </p>
            <div className="flex space-x-2 mt-4">
               <Button variant="ghost" size="icon" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-headline font-semibold">Navegación</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/hilos-tensores" className="text-muted-foreground hover:text-primary">Hilos Tensores</Link></li>
              <li><Link href="/blog-topic-generator" className="text-muted-foreground hover:text-primary">Generador de Temas</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Términos y Condiciones</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Política de Privacidad</a></li>
            </ul>
          </div>
           <div>
            <h3 className="font-headline font-semibold">Contacto</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Edificio Azor, Cra. 84 #37b - 195 <br />
                  Primer piso, La América <br/>
                  Medellín, Antioquia
                </span>
              </li>
              <li className="flex items-start">
                <WhatsAppIcon className="w-4 h-4 mr-2 mt-1 shrink-0 text-muted-foreground" />
                <a href="https://wa.me/573122784757" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">+57 312 278 4757</a>
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
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dr. Jhonathan Rincón. Todos los derechos reservados. Diseñado por un experto en UX.</p>
        </div>
      </div>
    </footer>
  );
}
