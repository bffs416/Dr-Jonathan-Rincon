import Link from 'next/link';
import {
  ArrowRight,
  HeartHandshake,
  Stethoscope,
  Sparkles,
  Award,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import Image from 'next/image';
import { PlaceHolderImagesHome } from '@/lib/placeholder-images-home';

export default function Home() {
  const specializations = [
    {
      name: 'Hilos Tensores PDO',
      href: '/hilos-tensores',
      image: 'https://picsum.photos/seed/aesthetic-threads/600/800',
      hint: 'facial threads',
    },
    {
      name: 'Contorno Corporal',
      href: '/contorno-corporal',
      image: 'https://picsum.photos/seed/aesthetic-body/600/400',
      hint: 'body contouring',
    },
    {
      name: 'Medicina Preventiva',
      href: '/medicina-preventiva',
      image: 'https://picsum.photos/seed/aesthetic-preventive/600/400',
      hint: 'preventive medicine',
    },
  ];

  const stats = [
    {
      value: '100%',
      label: 'Satisfacción',
      icon: Sparkles,
    },
    {
      value: '500+',
      label: 'Pacientes Satisfechos',
      icon: HeartHandshake,
    },
    {
      value: '8 años',
      label: 'de Experiencia',
      icon: Award,
    },
  ];

  const beforeAfterImages = [
    {
      before: PlaceHolderImagesHome.find(img => img.id === 'home-before-1'),
      after: PlaceHolderImagesHome.find(img => img.id === 'home-after-1'),
    },
     {
      before: PlaceHolderImagesHome.find(img => img.id === 'home-before-2'),
      after: PlaceHolderImagesHome.find(img => img.id === 'home-after-2'),
    },
     {
      before: PlaceHolderImagesHome.find(img => img.id === 'home-before-3'),
      after: PlaceHolderImagesHome.find(img => img.id === 'home-after-3'),
    },
  ];

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
          >
            <source src="/Dr_Jonathan_Rincon.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
          <div className="container relative z-20 px-4">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">
              Dr. Jonathan Rincón
            </h1>
            <p className="mt-2 font-headline text-2xl md:text-3xl">
              Procedimientos en Medicina Estética
            </p>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-200">
              Bienvenido al sitio web del Dr. Jonathan Rincón, uno de los
              mejores médicos estéticos en Medellín, Colombia. Especialista en
              medicina estética, con una extensa preparación en estética facial y
              corporal, tanto quirúrgica como no quirúrgica.
            </p>
          </div>
        </section>

        {/* Stats and Services Section */}
        <section id="servicios" className="py-16 sm:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Specializations collage */}
              <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[550px]">
                  <Card
                    key={specializations[0].name}
                    className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 col-span-1 row-span-2"
                  >
                    <Image
                      src={specializations[0].image}
                      alt={specializations[0].name}
                      fill
                      data-ai-hint={specializations[0].hint}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="relative h-full flex flex-col justify-end p-6 text-white">
                      <h3 className="font-headline text-2xl font-bold">
                        {specializations[0].name}
                      </h3>
                       <Button asChild variant="link" className="text-primary hover:text-primary/80 !p-0 !h-auto !justify-start !gap-2 mt-4 text-sm font-semibold uppercase tracking-widest">
                        <Link href={specializations[0].href}>
                          <span>Conocer más</span> <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                  <Card
                    key={specializations[1].name}
                    className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 col-span-1 row-span-1"
                  >
                    <Image
                      src={specializations[1].image}
                      alt={specializations[1].name}
                      fill
                      data-ai-hint={specializations[1].hint}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="relative h-full flex flex-col justify-end p-6 text-white">
                      <h3 className="font-headline text-2xl font-bold">
                        {specializations[1].name}
                      </h3>
                      <Button asChild variant="link" className="text-primary hover:text-primary/80 !p-0 !h-auto !justify-start !gap-2 mt-4 text-sm font-semibold uppercase tracking-widest">
                        <Link href={specializations[1].href}>
                          <span>Conocer más</span> <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                   <Card
                    key={specializations[2].name}
                    className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 col-span-1 row-span-1"
                  >
                    <Image
                      src={specializations[2].image}
                      alt={specializations[2].name}
                      fill
                      data-ai-hint={specializations[2].hint}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="relative h-full flex flex-col justify-end p-6 text-white">
                      <h3 className="font-headline text-2xl font-bold">
                        {specializations[2].name}
                      </h3>
                      <Button asChild variant="link" className="text-primary hover:text-primary/80 !p-0 !h-auto !justify-start !gap-2 mt-4 text-sm font-semibold uppercase tracking-widest">
                        <Link href={specializations[2].href}>
                          <span>Conocer más</span> <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
              </div>

               {/* Stats column */}
              <div className="flex flex-col gap-8">
                <div className="text-left">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold">Resultados y <span className="text-primary">Confianza</span></h2>
                    <p className="mt-4 text-lg text-muted-foreground">Mi compromiso es con tu bienestar y satisfacción, respaldado por años de experiencia y cientos de pacientes felices.</p>
                </div>
                <div className="space-y-8 mt-4">
                    {stats.map((stat) => (
                      <div key={stat.label} className="flex items-start gap-6">
                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary shrink-0">
                           <stat.icon className="w-8 h-8" />
                        </div>
                        <div>
                          <p className="text-3xl font-bold text-foreground">
                            {stat.value}
                          </p>
                          <p className="text-lg text-muted-foreground mt-1">
                            {stat.label}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* About Doctor Section */}
        <section
          id="sobre-el-doctor"
          className="scroll-mt-20 container mx-auto px-4 py-16 sm:py-24"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
               <svg
                className="absolute -top-8 -left-8 w-full h-full text-primary/10 transform -rotate-6 z-0"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M 50,0 L 100,25 V 75 L 50,100 L 0,75 V 25 Z" />
                <path d="M 50,50 L 100,25" />
                <path d="M 50,50 L 50,100" />
                <path d="M 50,50 L 0,25" />
                <path d="M 0,75 L 50,50" />
                <path d="M 100,75 L 50,50" />
              </svg>
              <Image
                src="/images/Experto-hilos-tensores-faciales.png"
                alt="Dr. Jonathan Rincón, experto en medicina estética"
                width={500}
                height={625}
                className="relative rounded-xl shadow-2xl w-full aspect-[4/5] object-cover object-top z-10"
                data-ai-hint="doctor portrait"
              />
            </div>
            <div>
              <h2 className="font-headline text-4xl md:text-5xl font-bold">
                Conoce al{' '}
                <span className="text-primary">Dr. Jonathan Rincón</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Especialista en medicina estética con más de 8 años de
                experiencia. Reconocido como el{' '}
                <strong className="text-primary font-bold">
                  #1 en hilos tensores en Medellín
                </strong>
                , combinando técnicas avanzadas con un enfoque personalizado
                para cada paciente.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Mi pasión es ayudar a las personas a sentirse seguras y
                hermosas, utilizando los tratamientos más innovadores y seguros
                del mercado.
              </p>
              <Button asChild size="lg" className="mt-8">
                <a
                  href="https://wa.me/573122784757"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar por WhatsApp <WhatsAppIcon />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Before and After Section */}
        <section id="resultados" className="py-16 sm:py-24 bg-secondary text-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl md:text-5xl font-bold">
                Resultados que <span className="text-primary">Inspiran Confianza</span>
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Descubre las transformaciones reales de nuestros pacientes. La naturalidad y la excelencia son nuestro sello.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {beforeAfterImages.map((item, index) => (
                <Card key={index} className="overflow-hidden shadow-lg bg-card">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-2">
                      {item.before && (
                        <div className="relative aspect-square">
                          <Image
                            src={item.before.imageUrl}
                            alt={item.before.description}
                            fill
                            data-ai-hint={item.before.imageHint}
                            className="object-cover"
                          />
                          <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">ANTES</div>
                        </div>
                      )}
                      {item.after && (
                        <div className="relative aspect-square">
                          <Image
                            src={item.after.imageUrl}
                            alt={item.after.description}
                            fill
                            data-ai-hint={item.after.imageHint}
                            className="object-cover"
                          />
                          <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">DESPUÉS</div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
