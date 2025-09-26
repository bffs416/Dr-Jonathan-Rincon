
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
import { Card, CardContent } from '@/components/ui/card';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import Image from 'next/image';
import { PlaceHolderImagesHome } from '@/lib/placeholder-images-home';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { GalleryImages } from '@/lib/placeholder-images-gallery';
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

const treatments = [
  {
    icon: StretchHorizontal,
    title: 'Hilos Tensores',
    href: '/hilos-tensores',
  },
  {
    icon: Droplets,
    title: 'Bioestimuladores de Colágeno',
    href: '/bioestimuladores',
  },
  {
    icon: Bot,
    title: 'Toxina Botulínica',
    href: '/botox',
  },
   {
    icon: Wind,
    title: 'Contorno Corporal',
    href: '/contorno-corporal',
  },
   {
    icon: ShieldCheck,
    title: 'Medicina Preventiva Facial',
    href: '/medicina-preventiva',
  },
  {
    icon: HelpingHand,
    title: 'Medicina Preventiva Corporal',
    href: '/medicina-preventiva',
  },
];

const TreatmentCard = ({ icon: Icon, title, href }: {icon: React.ElementType, title: string, href: string}) => (
    <Link href={href} className="group block">
        <div className="flex flex-col items-center justify-center p-1 transition-all duration-300 ease-in-out hover:bg-secondary/50 rounded-lg">
            <div className="mb-2 flex items-center justify-center w-12 h-12 rounded-full bg-secondary group-hover:bg-primary/10 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-headline text-base font-semibold text-foreground group-hover:text-primary text-center">{title}</h3>
        </div>
    </Link>
);


export default function Home() {

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
          <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden">
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

          <div className="relative z-10 text-white">
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
        <section id="tratamientos" className="py-16 sm:py-24 container mx-auto">
             <div className="text-center max-w-2xl mx-auto">
                <h2 className="font-headline text-4xl md:text-5xl font-bold">
                    Nuestros <span className="text-primary">Tratamientos Principales</span>
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Soluciones personalizadas para realzar tu belleza natural con las técnicas más avanzadas y seguras.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4">
                {treatments.map((treatment) => (
                    <TreatmentCard key={treatment.title} {...treatment} />
                ))}
            </div>
        </section>

        {/* Infinite Moving Cards Section */}
        <section className="py-2 sm:py-4">
          <InfiniteMovingCards items={GalleryImages} direction="right" speed="slow" />
        </section>

        {/* About Doctor Section */}
        <section
          id="sobre-el-doctor"
          className="scroll-mt-20 container mx-auto px-4 py-16 sm:py-24"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
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
            <div className="relative flex justify-center items-center">
              <div className="relative w-[450px] h-[450px]">
                  <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl">
                    <Image
                      src="/images/Logo Dr Johnathan.png"
                      alt="Dr. Jonathan Rincón, experto en medicina estética"
                      width={450}
                      height={450}
                      className="object-cover w-full h-full object-top"
                      data-ai-hint="doctor portrait"
                    />
                  </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonios" className="py-16 sm:py-24 text-foreground">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative flex items-center justify-center min-h-[450px]">
                <div className="relative w-80 h-80">
                  <Image
                    src="https://picsum.photos/seed/face-procedure-1/400/400"
                    alt="Procedimiento facial estético"
                    width={400}
                    height={400}
                    data-ai-hint="facial procedure"
                    className="rounded-full object-cover w-full h-full shadow-lg"
                  />
                </div>
                <div className="absolute -bottom-8 -right-4 w-64 h-64">
                   <Image
                    src="https://picsum.photos/seed/facial-injection/400/400"
                    alt="Aplicación de inyección facial"
                    width={400}
                    height={400}
                    data-ai-hint="facial injection"
                    className="rounded-full object-cover w-full h-full border-8 border-background shadow-lg"
                  />
                </div>
                 <div className="absolute -top-8 -left-4 w-48 h-48 bg-accent rounded-full flex flex-col items-center justify-center text-center p-4 shadow-lg transform -rotate-12">
                    <p className="font-headline text-4xl font-bold text-accent-foreground">500+</p>
                    <p className="text-lg font-medium text-accent-foreground leading-tight">Pacientes Felices</p>
                </div>
              </div>
              <div className="relative">
                <Carousel
                  opts={{ loop: true }}
                  className="w-full max-w-xl mx-auto"
                >
                  <div className="pl-4">
                    <SectionTitleWithLines className="!justify-start">
                        <span className="text-primary">Testimonios</span>
                    </SectionTitleWithLines>
                    <h2 className="font-headline text-4xl md:text-5xl font-bold mt-2">
                      Qué dicen nuestros <br /> pacientes
                    </h2>
                  </div>

                  <CarouselContent className="mt-8">
                    {testimonials.map((testimonial, index) => (
                      <CarouselItem key={index}>
                        <div className="pl-4 pr-4">
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
                          <blockquote className="text-lg text-muted-foreground italic">
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
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="absolute -bottom-12 right-0 flex items-center gap-2">
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

    