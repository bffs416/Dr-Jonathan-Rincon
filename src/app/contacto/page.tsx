
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { findImage } from '@/lib/images';
import { cn } from '@/lib/utils';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { SectionTitleWithLines } from '@/components/section-title-with-lines';

const Placeholder = ({
  className,
  seed,
}: {
  className?: string;
  seed: string;
}) => {
  const image = findImage(seed);
  return (
    <div className={cn('relative bg-muted w-full h-full', className)}>
      {image ? (
        <Image
          src={image.src}
          alt={image.hint}
          fill
          className="object-cover animate-fade-in duration-500"
          data-ai-hint={image.hint}
        />
      ) : (
        <div className="w-full h-full bg-secondary" />
      )}
    </div>
  );
};

export default function ContactoPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full bg-slate-900">
        <div className="absolute inset-0 opacity-30">
          <Placeholder seed="cta-bio" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-4 text-white">
            <h1 className="font-headline text-4xl md:text-6xl font-bold !leading-tight tracking-tight drop-shadow-lg">
              Contacto
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-200 drop-shadow-md">
              Estoy aquí para ayudarte. Agenda una cita o resuelve tus dudas.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-headline text-3xl font-bold">
                Información de Contacto
              </h2>
              <p className="mt-2 text-muted-foreground">
                Utiliza los siguientes canales para comunicarte conmigo.
              </p>
            </div>
            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Dirección</h3>
                    <a
                      href="https://maps.app.goo.gl/Um7JKhc2Nhewzhm67"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Edificio Azor, Cra. 84 #37b - 195 <br />
                      Primer piso, La América <br />
                      Medellín, Antioquia
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <WhatsAppIcon className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">WhatsApp</h3>
                    <a
                      href="https://wa.me/573122784757"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +57 312 278 4757
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Horario de Atención</h3>
                    <p className="text-muted-foreground">
                      Lun - Vie: 8:00 AM - 6:00 PM <br />
                      Sáb: 8:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-4">
              <SectionTitleWithLines>
                <span className='text-primary font-bold'>Sígueme</span>
              </SectionTitleWithLines>
               <div className="flex justify-center space-x-2 mt-4">
               <Button variant="outline" size="icon" asChild>
                <a href="https://www.instagram.com/drjonathanrincon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.facebook.com/profile.php?id=100063747843041&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.tiktok.com/@drjonathanrincon" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <Image src="/images/1946552.png" alt="TikTok" width={20} height={20} />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.youtube.com/@dr.jonathanrincon298" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </a>
              </Button>
            </div>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-8">
            <div>
              <h2 className="font-headline text-3xl font-bold">Ubicación</h2>
              <p className="mt-2 text-muted-foreground">
                Encuéntrame en el corazón de La América, Medellín.
              </p>
            </div>
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.116749910408!2d-75.60995392523219!3d6.248744093740263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44299719eb7b37%3A0x6c63fdf538466b04!2sEdificio%20Azor%2C%20Cra.%2084%20%2337b-195%2C%20La%20Am%C3%A9rica%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses-419!2sco!4v1709239562473!5m2!1ses-419!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
