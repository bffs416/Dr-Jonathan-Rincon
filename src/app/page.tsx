
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

const treatments: { icon: string; title: string; href: string; size?: number }[] = [
  {
    icon: '/images/Hilos_Tensores_Icono.png',
    title: 'Hilos Tensores',
    href: '/hilos-tensores',
    size: 80,
  },
  {
    icon: '/images/Bioestimuladores.png',
    title: 'Bioestimuladores de Colágeno',
    href: '/bioestimuladores',
    size: 90,
  },
  {
    icon: '/images/botox.png',
    title: 'Toxina Botulínica',
    href: '/botox',
    size: 200,
  },
  {
    icon: '/images/Body_Estetica Corporal.png',
    title: 'Contorno Corporal',
    href: '/contorno-corporal',
    size: 700,
  },
  {
    icon: '/images/icono_Face_estetica_facial.png',
    title: 'Estetica facial Avanzada',
    href: '/medicina-preventiva',
    size: 700,
  },
];

const TreatmentCard = ({
  icon,
  title,
  href,
  size = 50
}: {
  icon: string;
  title: string;
  href: string;
  size?: number;
}) => (
  <Link href={href} className="group block">
    <div className="flex h-full flex-col items-center justify-start p-2 rounded-lg">
      <div className="mb-4 flex items-center justify-center w-24 h-24 rounded-full bg-secondary group-hover:bg-primary/10 transition-colors duration-300 transform group-hover:scale-110">
        <Image
          src={icon}
          alt={title}
          width={size}
          height={size}
          className="transition-transform duration-300"
        />
      </div>
      <h3 className="font-headline text-base font-semibold text-foreground group-hover:text-primary text-center flex-1">
        {title}
      </h3>
    </div>
  </Link>
);


export default function Home() {
  const testimonialImage1 = { src: '/images/Hilos_Tensores_Resultados Paciente.jpg', hint: 'facial procedure' };
  const testimonialImage2 = { src: '/images/Hilos Tensores_Analisis_.png', hint: 'facial injection' };
  const galleryImages = [
    { id: 'gallery-1', src: '/images/Hilos_Tensores_Lifting cuello.png', hint: 'facial procedure', title: 'Lifting de Cuello', href: '/hilos-tensores', category: 'Hilos Tensores' },
    { id: 'gallery-2', src: '/images/Rejuvenecimiento Facial.jpg', hint: 'man consultation', title: 'Rejuvenecimiento Facial', href: '/medicina-preventiva' },
    { id: 'gallery-3', src: '/images/Hilos tensores_Marcacion mandibular.png', hint: 'facial marking', title: 'Marcación Mandibular', href: '/hilos-tensores', category: 'Hilos Tensores' },
    { id: 'gallery-4', src: '/images/Rinomodelacion.png', hint: 'facial injection', title: 'Rinomodelación', href: '/hilos-tensores' },
    { id: 'gallery-5', src: '/images/Ojeras.png', hint: 'skin treatment', title: 'Tratamiento de Ojeras', href: '/medicina-preventiva' },
    { id: 'gallery-6', src: '/images/Hilos_Foxy_eyes.png', hint: 'foxy eyes procedure', title: 'Foxy Eyes', href: '/hilos-tensores', category: 'Hilos Tensores' },
    { id: 'gallery-7', src: '/images/Hilos_Tensores _Levantamiento de gluteos.png', hint: 'patient treatment', title: 'Lifting de Glúteos', href: '/hilos-tensores' },
    { id: 'gallery-8', src: '/images/Hilos_Tensores_Abdomen_1.jpg', hint: 'man profile', title: 'Marcación Abdominal', href: '/hilos-tensores', category: 'Hilos Tensores' }
  ].filter(Boolean) as any[];


  const stats = [
    {
      value: 100,
      label: 'Satisfacción',
      icon: Sparkles,
      suffix: '%',
    },
    {
      value: 500,
      label: 'Pacientes Satisfechos',
      icon: HeartHandshake,
      suffix: '+',
    },
    {
      value: 8,
      label: 'de Experiencia',
      icon: Award,
      prefix: 'años',
    },
  ];

  const testimonials = [
    {
      name: 'Ana María G.',
      title: 'Paciente de Hilos Tensores',
      avatar: 'https://i.pravatar.cc/150?img=1',
      text: '“El resultado con los hilos tensores superó mis expectativas. El Dr. Rincón es un verdadero profesional, me sentí segura en todo momento y el cambio en mi rostro es natural y rejuvenecedor. ¡Lo recomiendo a ojos cerrados!”',
      rating: 5,
    },
    {
      name: 'Sofía R.',
      title: 'Paciente de Contorno Corporal',
      avatar: 'https://i.pravatar.cc/150?img=5',
      text: '“Después de probar dietas y ejercicio sin ver resultados en mi abdomen, la hidrolipoclasia fue la solución. El procedimiento fue rápido y el Dr. Rincón y su equipo son increíbles. Estoy muy contenta con mi nueva figura.”',
      rating: 5,
    },
    {
      name: 'Luisa F.',
      title: 'Paciente de Botox',
      avatar: 'https://i.pravatar.cc/150?img=3',
      text: '“Tenía miedo de que el botox me dejara sin expresión, pero el Dr. Rincón logró un resultado súper natural. Me veo más descansada y fresca, sin que nadie note que me hice algo. ¡Es exactamente lo que quería!”',
      rating: 5,
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
              <div className="mt-12 flex items-center justify-center gap-3 text-lg text-slate-200">
                <Medal className="w-7 h-7 text-yellow-400" />
                <p>Reconocido como el experto #1 en hilos tensores PDO en Medellín y Bogotá</p>
              </div>
          </div>
        </section>

         {/* Treatments Section */}
        <section id="tratamientos" className="py-16 sm:py-24 container mx-auto px-4">
             <div className="text-center max-w-2xl mx-auto">
                <h2 className="font-headline text-4xl md:text-5xl font-bold">
                    Nuestros <span className="text-primary">Tratamientos Principales</span>
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Soluciones personalizadas para realzar tu belleza natural con las técnicas más avanzadas y seguras.
                </p>
            </div>
            <div className="mt-12 flex flex-col items-center gap-y-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-16 w-full max-w-4xl">
                {treatments.slice(0, 3).map((treatment) => (
                  <TreatmentCard key={treatment.title} {...treatment} />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-x-4 md:gap-x-16 w-full max-w-md">
                {treatments.slice(3, 5).map((treatment) => (
                  <TreatmentCard key={treatment.title} {...treatment} />
                ))}
              </div>
            </div>
        </section>

        {/* Infinite Moving Cards Section */}
        <section className="py-2 sm:py-4 [transform:translateZ(0)]">
          <InfiniteMovingCards items={galleryImages} direction="right" speed="slow" />
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
                      className="object-cover w-full h-full object-top"
                      data-ai-hint="doctor portrait"
                    />
                  </div>
              </div>
               <Button asChild size="lg" className="mt-8 md:hidden">
                <a
                  href="https://wa.me/573122784757"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar por WhatsApp <WhatsAppIcon />
                </a>
              </Button>
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
                  #1 en hilos tensores en Medellín
                </strong>
                , combinando técnicas avanzadas con un enfoque personalizado
                para cada paciente.
              </p>
              <p className="mt-4 text-lg text-muted-foreground md:text-justify">
                Mi pasión es ayudar a las personas a sentirse seguras y
                hermosas, utilizando los tratamientos más innovadores y seguros
                del mercado.
              </p>
              <Button asChild size="lg" className="mt-8 hidden md:inline-flex">
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

        {/* Testimonials Section */}
        <section id="testimonios" className="py-16 sm:py-24 text-foreground">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative w-full h-full min-h-[450px] sm:min-h-[550px] lg:min-h-full order-2 lg:order-1">
                 <div className="relative mx-auto h-full w-full max-w-md">
                    <div className="absolute -top-4 -left-4 z-20 flex flex-col items-center justify-center rounded-full bg-accent p-2 text-center shadow-lg w-24 h-24 lg:w-32 lg:h-32 lg:-rotate-12">
                      <p className="font-headline text-2xl font-bold text-accent-foreground lg:text-4xl">500+</p>
                      <p className="text-xs font-medium leading-tight text-accent-foreground lg:text-base">Pacientes Felices</p>
                    </div>
                    <div className="absolute left-1/2 top-1/2 z-10 aspect-square w-full max-w-[250px] -translate-x-1/2 -translate-y-1/2 sm:max-w-[300px] lg:h-64 lg:w-64 xl:h-80 xl:w-80">
                      {testimonialImage1 && (
                          <Image
                              src={testimonialImage1.src}
                              alt={testimonialImage1.hint}
                              width={400}
                              height={400}
                              data-ai-hint={testimonialImage1.hint}
                              className="rounded-full object-cover w-full h-full shadow-lg"
                              quality={80}
                          />
                      )}
                    </div>
                    <div className="absolute -bottom-4 -right-4 z-20 h-32 w-32 lg:h-40 lg:w-40 xl:h-64 xl:w-64">
                       {testimonialImage2 && (
                          <Image
                              src={testimonialImage2.src}
                              alt={testimonialImage2.hint}
                              width={400}
                              height={400}
                              data-ai-hint={testimonialImage2.hint}
                              className="rounded-full object-cover w-full h-full border-4 md:border-8 border-background shadow-lg"
                              quality={80}
                          />
                      )}
                    </div>
                  </div>
              </div>
              <div className="relative order-1 lg:order-2">
                 <div className="mb-8 text-center">
                    <SectionTitleWithLines className="justify-center">
                        <span className="text-primary">Testimonios</span>
                    </SectionTitleWithLines>
                    <h2 className="font-headline text-3xl md:text-5xl font-bold mt-2">
                      Qué dicen nuestros <br /> pacientes
                    </h2>
                  </div>
                <Carousel
                  opts={{ loop: true }}
                  className="w-full max-w-xl mx-auto lg:mx-0 [transform:translateZ(0)]"
                >
                  <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                      <CarouselItem key={index}>
                        <div className="px-1">
                          <Card className="bg-background/80 backdrop-blur-lg p-6 rounded-xl shadow-lg border-white/20">
                            <CardContent className="p-0">
                              <div className="flex items-center space-x-2 my-4">
                                {testimonials.map((t, i) => (
                                    <Avatar key={i} className="border-2 border-transparent data-[active=true]:border-primary" data-active={i === index}>
                                        <AvatarImage src={t.avatar} />
                                        <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                ))}
                              </div>
                              <div className="flex items-center gap-0.5 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={cn(
                                        'w-5 h-5',
                                        i < testimonial.rating
                                            ? 'text-yellow-400'
                                            : 'text-muted-foreground/30'
                                        )}
                                        fill="currentColor"
                                    />
                                    ))}
                                </div>
                              <blockquote className="text-base text-muted-foreground italic">
                                {testimonial.text}
                              </blockquote>
                              <div className="mt-4">
                                <p className="font-bold text-lg text-foreground">
                                  {testimonial.name}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {testimonial.title}
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                   <div className="mt-8 flex justify-start gap-2">
                    <CarouselPrevious className="static -translate-y-0" />
                    <CarouselNext className="static -translate-y-0" />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
