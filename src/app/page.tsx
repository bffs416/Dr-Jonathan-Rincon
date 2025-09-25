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
      image: 'https://picsum.photos/seed/facial-1/600/800',
      hint: 'facial threads',
    },
    {
      name: 'Contorno Corporal',
      href: '/contorno-corporal',
      image: 'https://picsum.photos/seed/corporal-1/600/800',
      hint: 'body contouring',
    },
    {
      name: 'Medicina Preventiva',
      href: '/medicina-preventiva',
      image: 'https://picsum.photos/seed/nosurgery-1/600/800',
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
      value: '10 años',
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
            className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
            src="/placeholder-video.mp4"
          >
            {/* You can add <source> tags here for different video formats */}
          </video>
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="container relative z-20">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">
              Dr. Jhonathan Rincón
            </h1>
            <p className="mt-2 font-headline text-2xl md:text-3xl">
              Procedimientos en Medicina Estética
            </p>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-200">
              Bienvenido al sitio web del Dr. Jhonathan Rincón, uno de los
              mejores médicos estéticos en Medellín, Colombia. Especialista en
              medicina estética, con una extensa preparación en estética facial y
              corporal, tanto quirúrgica como no quirúrgica.
            </p>
          </div>
        </section>

        {/* Stats and Services Section */}
        <section id="servicios" className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Stats Column */}
              <div className="lg:col-span-1 flex flex-col gap-8">
                {stats.map((stat) => (
                  <Card
                    key={stat.label}
                    className="flex flex-col items-center justify-center p-8 text-center shadow-lg bg-card"
                  >
                    <stat.icon className="w-12 h-12 text-primary mb-4" />
                    <p className="text-5xl font-bold text-primary">
                      {stat.value}
                    </p>
                    <p className="text-lg text-muted-foreground mt-2">
                      {stat.label}
                    </p>
                  </Card>
                ))}
              </div>

              {/* Services Column */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {specializations.map((spec) => (
                  <Card
                    key={spec.name}
                    className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                  >
                    <Image
                      src={spec.image}
                      alt={spec.name}
                      width={600}
                      height={800}
                      data-ai-hint={spec.hint}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="relative h-full flex flex-col justify-end p-6 text-white">
                      <h3 className="font-headline text-2xl font-bold">
                        {spec.name}
                      </h3>
                      <Link
                        href={spec.href}
                        className="mt-4 inline-flex items-center text-sm font-semibold text-primary-foreground hover:text-primary-foreground/80"
                      >
                        Conocer más <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </Card>
                ))}
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
              <Image
                src="/images/Experto-hilos-tensores-faciales.png"
                alt="Dr. Jhonathan Rincón, experto en hilos tensores faciales"
                width={500}
                height={625}
                className="rounded-xl shadow-2xl w-full aspect-[4/5] object-cover object-top"
              />
            </div>
            <div>
              <h2 className="font-headline text-4xl md:text-5xl font-bold">
                Conoce al{' '}
                <span className="text-primary">Dr. Jhonathan Rincón</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Especialista en medicina estética con más de 5 años de
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
                  <WhatsAppIcon className="w-5 h-5 mr-2" /> Agendar por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Before and After Section */}
        <section id="resultados" className="py-16 sm:py-24 bg-muted/30">
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
                <Card key={index} className="overflow-hidden shadow-lg">
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
                          <div className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">DESPUÉS</div>
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
