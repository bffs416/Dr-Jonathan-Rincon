
'use client';

import { useState } from 'react';
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
  Send,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { findImage } from '@/lib/images';
import { cn } from '@/lib/utils';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { SectionTitleWithLines } from '@/components/section-title-with-lines';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/context/language-context';

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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const { lang } = useLanguage();

  const content = {
    es: {
      heroTitle: 'Contacto',
      heroSubtitle: 'Estoy aquí para ayudarte. Agenda una cita o resuelve tus dudas.',
      formTitle: 'Envíame un Mensaje',
      formSubtitle: 'Completa el formulario y te responderé lo antes posible.',
      labelName: 'Nombre Completo',
      placeholderName: 'Tu nombre',
      labelEmail: 'Correo Electrónico',
      placeholderEmail: 'tu@correo.com',
      labelSubject: 'Asunto',
      placeholderSubject: 'Ej: Consulta sobre Hilos Tensores',
      labelMessage: 'Mensaje',
      placeholderMessage: 'Escribe tu mensaje aquí...',
      buttonSend: 'Enviar Mensaje',
      infoTitle: 'Información de Contacto',
      infoSubtitle: 'Utiliza los siguientes canales para comunicarte conmigo.',
      infoAddressTitle: 'Dirección',
      infoAddress: `Edificio Azor, Cra. 84 #37b - 195
Primer piso, La América
Medellín, Antioquia`,
      infoWhatsappTitle: 'WhatsApp',
      infoEmailTitle: 'Email',
      infoHoursTitle: 'Horario de Atención',
      infoHours: `Lun - Vie: 8:00 AM - 6:00 PM
Sáb: 8:00 AM - 2:00 PM`,
      socialTitle: 'Sígueme',
    },
    en: {
      heroTitle: 'Contact',
      heroSubtitle: 'I\'m here to help. Schedule an appointment or resolve your doubts.',
      formTitle: 'Send me a Message',
      formSubtitle: 'Complete the form and I will respond as soon as possible.',
      labelName: 'Full Name',
      placeholderName: 'Your name',
      labelEmail: 'Email Address',
      placeholderEmail: 'you@email.com',
      labelSubject: 'Subject',
      placeholderSubject: 'e.g., Inquiry about Thread Lifts',
      labelMessage: 'Message',
      placeholderMessage: 'Write your message here...',
      buttonSend: 'Send Message',
      infoTitle: 'Contact Information',
      infoSubtitle: 'Use the following channels to get in touch with me.',
      infoAddressTitle: 'Address',
      infoAddress: `Azor Building, Cra. 84 #37b - 195
First floor, La América
Medellín, Antioquia`,
      infoWhatsappTitle: 'WhatsApp',
      infoEmailTitle: 'Email',
      infoHoursTitle: 'Opening Hours',
      infoHours: `Mon - Fri: 8:00 AM - 6:00 PM
Sat: 8:00 AM - 2:00 PM`,
      socialTitle: 'Follow Me',
    },
  };
  
  const currentContent = content[lang];

  const mailtoHref = `mailto:jonathanra36@hotmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(
    `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`
  )}`;


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
              {currentContent.heroTitle}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-200 drop-shadow-md">
              {currentContent.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Form Section */}
          <div className="space-y-8">
             <div>
              <h2 className="font-headline text-3xl font-bold">
                {currentContent.formTitle}
              </h2>
              <p className="mt-2 text-muted-foreground">
                {currentContent.formSubtitle}
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{currentContent.labelName}</Label>
                  <Input id="name" placeholder={currentContent.placeholderName} value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{currentContent.labelEmail}</Label>
                  <Input id="email" type="email" placeholder={currentContent.placeholderEmail} value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">{currentContent.labelSubject}</Label>
                <Input id="subject" placeholder={currentContent.placeholderSubject} value={subject} onChange={(e) => setSubject(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">{currentContent.labelMessage}</Label>
                <Textarea id="message" placeholder={currentContent.placeholderMessage} className="min-h-[120px]" value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>
              <Button asChild size="lg" className="w-full">
                <a href={mailtoHref}>
                  {currentContent.buttonSend} <Send />
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div>
              <h2 className="font-headline text-3xl font-bold">
                {currentContent.infoTitle}
              </h2>
              <p className="mt-2 text-muted-foreground">
                {currentContent.infoSubtitle}
              </p>
            </div>
            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">{currentContent.infoAddressTitle}</h3>
                    <a
                      href="https://maps.app.goo.gl/Um7JKhc2Nhewzhm67"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {currentContent.infoAddress.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <WhatsAppIcon className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">{currentContent.infoWhatsappTitle}</h3>
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
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">{currentContent.infoEmailTitle}</h3>
                    <a
                      href="mailto:jonathanra36@hotmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      jonathanra36@hotmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">{currentContent.infoHoursTitle}</h3>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {currentContent.infoHours}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.116753170425!2d-75.6099539!3d6.2487441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44299719eb7b37%3A0x6c63fdf538466b04!2sEdificio%20Azor!5e0!3m2!1ses-419!2sco!4v1719424754859!5m2!1ses-419!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
             <div className="space-y-4">
              <SectionTitleWithLines>
                <span className='text-primary font-bold'>{currentContent.socialTitle}</span>
              </SectionTitleWithLines>
               <div className="flex justify-center space-x-2 mt-4">
               <Button variant="outline" size="icon" asChild>
                <a href="https://www.instagram.com/drjonathanrincon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.facebook.com/profile.php?id=100063747843041" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
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
        </div>
      </div>
    </div>
  );
}

    