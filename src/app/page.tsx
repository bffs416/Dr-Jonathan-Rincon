import Link from 'next/link';
import {
  ArrowRight,
  HeartHandshake,
  Stethoscope,
  Sparkles,
  Award,
  ArrowLeft,
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

  const testimonials = [
    {
      name: 'Ana María G.',
      title: 'Paciente de Hilos Tensores',
      avatar: 'https://i.pravatar.cc/150?img=1',
      text: '“El resultado con los hilos tensores superó mis expectativas. El Dr. Rincón es un verdadero profesional, me sentí segura en todo momento y el cambio en mi rostro es natural y rejuvenecedor. ¡Lo recomiendo a ojos cerrados!”',
    },
    {
      name: 'Carlos V.',
      title: 'Paciente de Contorno Corporal',
      avatar: 'https://i.pravatar.cc/150?img=2',
      text: '“Después de probar dietas y ejercicio sin ver resultados en mi abdomen, la hidrolipoclasia fue la solución. El procedimiento fue rápido y el Dr. Rincón y su equipo son increíbles. Estoy muy contento con mi nueva figura.”',
    },
    {
      name: 'Luisa F.',
      title: 'Paciente de Botox',
      avatar: 'https://i.pravatar.cc/150?img=3',
      text: '“Tenía miedo de que el botox me dejara sin expresión, pero el Dr. Rincón logró un resultado súper natural. Me veo más descansada y fresca, sin que nadie note que me hice algo. ¡Es exactamente lo que quería!”',
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
        <section id="servicios" className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Specializations collage */}
              <div className="grid grid-cols-2 gap-4 h-auto">
                  <Card
                    key={specializations[0].name}
                    className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 col-span-1 row-span-2 h-[450px]"
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
                    className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 col-span-1 row-span-1 h-[215px]"
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
                    className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 col-span-1 row-span-1 h-[215px]"
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

        {/* Infinite Moving Cards Section */}
        <section className="py-16 sm:py-24">
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
                  <div className="absolute inset-0 rounded-full overflow-hidden">
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
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonios" className="py-16 sm:py-24 text-foreground">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative flex items-center justify-center min-h-[450px]">
                <div className="relative w-72 h-72">
                  <Image
                    src="https://picsum.photos/seed/face-procedure-1/400/400"
                    alt="Procedimiento facial estético"
                    width={400}
                    height={400}
                    data-ai-hint="facial procedure"
                    className="rounded-full object-cover w-full h-full absolute top-0 left-0"
                  />
                </div>
                <div className="relative w-56 h-56 -ml-24 mt-32">
                   <Image
                    src="https://picsum.photos/seed/facial-injection/400/400"
                    alt="Aplicación de inyección facial"
                    width={400}
                    height={400}
                    data-ai-hint="facial injection"
                    className="rounded-full object-cover w-full h-full absolute top-0 left-0 border-4 border-background"
                  />
                </div>
                 <div className="absolute top-1/2 -translate-y-1/2 -ml-32 w-48 h-48 bg-accent rounded-full flex flex-col items-center justify-center text-center p-4 shadow-lg">
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
                          <div className="flex space-x-2 my-4">
                            {testimonials.map((t, i) => (
                                <Avatar key={i} className="border-2 border-transparent data-[active=true]:border-primary" data-active={i === index}>
                                    <AvatarImage src={t.avatar} />
                                    <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                                </Avatar>
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
