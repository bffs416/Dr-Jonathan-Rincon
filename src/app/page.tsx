
import Link from 'next/link';
import {
  HeartHandshake,
  Stethoscope,
  Sparkles,
  Award,
  ChevronRight,
  Wind,
  Droplets,
  Bot,
  StretchHorizontal,
  HelpingHand,
  ShieldCheck,
  Star,
  Medal,
  MessageCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import Image from 'next/image';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SectionTitleWithLines } from '@/components/section-title-with-lines';
import { cn } from '@/lib/utils';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { TestimonialsSection } from '@/components/testimonials-section';
import { findImage } from '@/lib/images';

const treatments: { icon: string; title: string; href: string; size?: number }[] = [
  {
    icon: '/images/Hilos_Tensores_Icono.png',
    title: 'Hilos Tensores',
    href: '/hilos-tensores',
  },
  {
    icon: '/images/Bioestimuladores.png',
    title: 'Bioestimuladores de Colágeno',
    href: '/bioestimuladores',
  },
  {
    icon: '/images/botox.png',
    title: 'Toxina Botulínica',
    href: '/botox',
  },
  {
    icon: '/images/Body_Estetica Corporal.png',
    title: 'Contorno Corporal',
    href: '/contorno-corporal',
  },
  {
    icon: '/images/icono_Face_estetica_facial.png',
    title: 'Medicina Estética Avanzada',
    href: '/medicina-estetica-avanzada',
  },
];

const TreatmentCard = ({
  icon,
  title,
  href,
}: {
  icon: string;
  title: string;
  href: string;
  size?: number;
}) => (
  <Link href={href} className="group block">
    <div className="flex h-full flex-col items-center justify-start p-2 rounded-lg">
      <div className="relative mb-4 flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-secondary group-hover:bg-primary/10 transition-colors duration-300 transform group-hover:scale-110">
        <Image
          src={icon}
          alt={title}
          fill
          className="object-contain transition-transform duration-300 p-2"
        />
      </div>
      <h3 className="font-headline text-sm sm:text-base font-semibold text-foreground group-hover:text-primary text-center flex-1 text-wrap">
        {title}
      </h3>
    </div>
  </Link>
);


export default function Home() {
  const testimonialImage1 = { src: '/images/Modelo 6.jpg', hint: 'facial procedure' };
  const testimonialImage2 = { src: '/images/Modelo 9.jpg', hint: 'facial injection' };
  const galleryImages = [
    { id: 'gallery-1', src: '/images/Hilos_Tensores_Lifting cuello.png', hint: 'facial procedure', title: 'Lifting de Cuello', href: '/hilos-tensores', category: 'Hilos Tensores' },
    { id: 'gallery-2', src: '/images/Rejuvenecimiento Facial.jpg', hint: 'man consultation', title: 'Rejuvenecimiento Facial', href: '/medicina-estetica-avanzada' },
    { id: 'gallery-3', src: '/images/Hilos tensores_Marcacion mandibular.png', hint: 'facial marking', title: 'Marcación Mandibular', href: '/hilos-tensores', category: 'Hilos Tensores' },
    { id: 'gallery-4', src: '/images/Rinomodelacion.png', hint: 'facial injection', title: 'Rinomodelación', href: '/hilos-tensores' },
    { id: 'gallery-5', src: '/images/Ojeras.png', hint: 'skin treatment', title: 'Tratamiento de Ojeras', href: '/medicina-estetica-avanzada' },
    { id: 'gallery-6', src: '/images/Hilos_Foxy_eyes.png', hint: 'foxy eyes procedure', title: 'Foxy Eyes', href: '/hilos-tensores', category: 'Hilos Tensores' },
    { id: 'gallery-7', src: '/images/Hilos_Tensores _Levantamiento de gluteos.png', hint: 'patient treatment', title: 'Lifting de Glúteos', href: '/hilos-tensores' },
    { id: 'gallery-8', src: '/images/Hilos_Tensores_Abdomen_1.jpg', hint: 'man profile', title: 'Marcación Abdominal', href: '/hilos-tensores', category: 'Hilos Tensores' }
  ].filter(Boolean) as any[];


  const stats = [
    {
      value: 1000,
      label: 'Pacientes Satisfechos',
      icon: HeartHandshake,
      suffix: '+',
    },
    {
      value: 100,
      label: 'Satisfacción',
      icon: Sparkles,
      suffix: '%',
    },
    {
      value: 8,
      label: 'de Experiencia',
      icon: Award,
      prefix: 'años',
    },
  ];

  const beforeAfterCases = [
    {
      title: 'Capacitacion a mis pacientes',
      image: findImage('home-before-after-1'),
    },
    {
      title: 'Excelentes productos',
      image: findImage('home-before-after-2'),
    },
    {
      title: 'Pacientes Felices',
      image: findImage('home-before-after-3'),
    },
  ];

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 text-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]">
              <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute z-0 w-full h-full object-cover"
              >
                  <source src="/Dr_Jonathan.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          </div>

          <div className="relative z-10 text-white container mx-auto px-4">
              <h2 className="font-headline text-4xl md:text-5xl font-bold">Resultados y <span className="text-primary-foreground">Confianza</span></h2>
              <p className="mt-4 text-lg text-slate-200 mx-auto max-w-2xl">Mi compromiso es con tu bienestar y satisfacción, respaldado por años de experiencia y cientos de pacientes felices.</p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col items-center gap-2">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 text-white">
                         <stat.icon className="w-8 h-8" />
                      </div>
                      <div>
                          <p className="text-3xl font-bold text-white">
                              {stat.prefix ? (
                                  <>
                                      <AnimatedCounter targetValue={stat.value} /> {stat.prefix}
                                  </>
                              ) : (
                                  <>
                                      <AnimatedCounter targetValue={stat.value} />{stat.suffix}
                                  </>
                              )}
                          </p>
                        <p className="text-lg text-slate-200">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-slate-200">
                <Medal className="w-10 h-10 md:w-12 md:h-12 text-yellow-300" />
                <p className="font-semibold text-lg md:text-xl text-center">Reconocido como el experto #1 en hilos tensores PDO en Medellín y Bogotá</p>
              </div>
          </div>
        </section>

        {/* Video Testimonials Section */}
        <section id="videos-home" className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">
              Testimonios en <span className="text-primary">Video</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Pacientes reales comparten sus experiencias y resultados.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
              <div className="w-full aspect-[9/16] rounded-lg shadow-lg overflow-hidden max-w-[325px] mx-auto">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/f7z-cWbd-PE"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-full aspect-[9/16] rounded-lg shadow-lg overflow-hidden max-w-[325px] mx-auto">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/vlBIojuoo3Y?autoplay=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-full aspect-[9/16] rounded-lg shadow-lg overflow-hidden max-w-[325px] mx-auto">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/_jQTyBUkhwY?autoplay=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        
        {/* Infinite Moving Cards Section */}
        <section className="py-2 sm:py-4 [transform:translateZ(0)]">
          <InfiniteMovingCards items={galleryImages} direction="right" speed="slow" />
        </section>

         {/* Treatments Section */}
        <section id="tratamientos" className="py-16 sm:py-24 container mx-auto px-4 scroll-mt-20">
             <div className="text-center max-w-2xl mx-auto">
                <h2 className="font-headline text-4xl md:text-5xl font-bold">
                    Nuestros <span className="text-primary">Tratamientos Principales</span>
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Soluciones personalizadas para realzar tu belleza natural con las técnicas más avanzadas y seguras.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-y-8 sm:grid-cols-3 md:grid-cols-5 md:gap-8 w-full max-w-6xl mx-auto">
                {treatments.map((treatment) => (
                  <TreatmentCard key={treatment.title} {...treatment} />
                ))}
            </div>
        </section>

        {/* About Doctor Section */}
        <section
          id="sobre-el-doctor"
          className="scroll-mt-20 container mx-auto px-4 py-16 sm:py-24"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-center text-center md:order-2">
              <div className="relative w-full aspect-square max-w-[300px] md:max-w-[450px]">
                  <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl">
                    <Image
                      src="/images/Experto-hilos-tensores-faciales.png"
                      alt="Dr. Jonathan Rincón, experto en medicina estética"
                      width={450}
                      height={450}
                      className="object-cover w-full h-full object-top animate-fade-in duration-500"
                      data-ai-hint="doctor portrait"
                    />
                  </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 md:hidden">
                <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
                  <a
                    href="https://wa.me/573122784757"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agendar Cita <MessageCircle />
                  </a>
                </Button>
                <Button asChild size="lg">
                   <a
                    href="https://wa.me/573122784757"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Capacítate Conmigo <MessageCircle />
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex flex-col text-center items-center md:text-left md:items-start md:order-1">
              <h2 className="font-headline text-4xl md:text-5xl font-bold">
                Conoce al{' '}
                <span className="text-primary">Dr. Jonathan Rincón</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground md:text-justify">
                Especialista en medicina estética con más de 8 años de
                experiencia. Reconocido como el{' '}
                <strong className="text-primary font-bold">
                  #1 en hilos tensores en Medellín y Bogotá
                </strong>
                , combinando técnicas avanzadas con un enfoque personalizado
                para cada paciente.
              </p>
              <p className="mt-4 text-lg text-muted-foreground md:text-justify">
                Además de mi práctica clínica, soy un apasionado educador y{' '}
                <strong className="text-primary font-bold">
                  trainer para marcas líderes en la industria, capacitando a médicos estéticos
                </strong>
                y compartiendo mi conocimiento sobre técnicas avanzadas de rejuvenecimiento facial y
                corporal.
              </p>
              <p className="mt-4 text-lg text-muted-foreground md:text-justify">
                Mi pasión es ayudar a las personas a sentirse seguras y
                hermosas, utilizando los tratamientos más innovadores y seguros
                del mercado.
              </p>
              <div className="mt-8 hidden md:flex items-center gap-4">
                <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
                  <a
                    href="https://wa.me/573122784757"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agendar Cita <MessageCircle />
                  </a>
                </Button>
                <Button asChild size="lg">
                   <a
                    href="https://wa.me/573122784757"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Capacítate Conmigo <MessageCircle />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Before and After Section */}
        <section id="resultados-home" className="py-16 sm:py-24 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">
              Resultados que <span className="text-primary">Inspiran</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Transformaciones reales que reflejan mi compromiso con la excelencia y la naturalidad.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {beforeAfterCases.map((caseItem, index) => (
                <Card key={index} className="overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  {caseItem.image && (
                    <div className="aspect-square relative">
                      <Image
                        src={caseItem.image.src}
                        alt={`Antes y Después - ${caseItem.title}`}
                        fill
                        className="object-cover animate-fade-in duration-500"
                        data-ai-hint={caseItem.image.hint}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-lg font-headline">{caseItem.title}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <Button asChild size="lg" className="mt-12">
              <Link href="#tratamientos">Ver Todos los Tratamientos</Link>
            </Button>
          </div>
        </section>


        {/* Testimonials Section */}
        <TestimonialsSection />

      </main>
    </div>
  );
}
