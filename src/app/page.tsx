import Link from 'next/link';
import {
  ArrowRight,
  Award,
  HeartHandshake,
  Star,
  Clock,
  Briefcase,
  MessageCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Placeholder = ({
  className,
  width,
  height,
  text = 'Pon tu imagen aquí',
}: {
  className?: string;
  width?: number;
  height?: number;
  text?: string;
}) => (
  <div
    className={cn(
      'flex items-center justify-center bg-muted/50 border border-dashed text-muted-foreground text-sm',
      className
    )}
    style={{
      width: width ? `${width}px` : '100%',
      height: height ? `${height}px` : '100%',
    }}
  >
    {text}
  </div>
);

export default function Home() {
  const testimonials = [
    {
      name: 'María González',
      age: 35,
      treatment: 'Hilos Tensores Faciales',
      text: '¡Increíble resultado con los hilos tensores! El Dr. Rincón es muy profesional y los resultados fueron inmediatos. Me siento 10 años más joven.',
      avatar: '/images/placeholder-woman-1.jpg',
    },
    {
      name: 'Ana Rodríguez',
      age: 42,
      treatment: 'Bioestimuladores + Botox',
      text: 'Excelente atención y resultados naturales. El tratamiento con Sculptra me devolvió la firmeza que había perdido. Totalmente recomendado.',
      avatar: '/images/placeholder-woman-2.jpg',
    },
    {
      name: 'Carmen López',
      age: 38,
      treatment: 'Contorno Corporal',
      text: 'El Dr. Rincón transformó mi figura con hidrolipoclasia. Proceso cómodo, resultados espectaculares. El mejor especialista de Medellín.',
      avatar: '/images/placeholder-woman-3.jpg',
    },
    {
      name: 'Sofía Martínez',
      age: 29,
      treatment: 'NCTF + Esperma de Salmón',
      text: 'Mi piel nunca había lucido tan radiante. El tratamiento facial me dio una luminosidad increíble. Definitivamente volveré.',
      avatar: '/images/placeholder-woman-4.jpg',
    },
  ];

  const stats = [
    { value: '500+', label: 'Pacientes Satisfechos', icon: HeartHandshake },
    { value: '5+', label: 'Años de Experiencia', icon: Briefcase },
    { value: '1000+', label: 'Procedimientos Realizados', icon: Clock },
  ];

  const specializations = [
    { name: 'Hilos Tensores PDO', href: '/hilos-tensores' },
    { name: 'Botox Terapéutico', href: '/botox-terapeutico' },
    { name: 'Rejuvenecimiento Facial', href: '/rejuvenecimiento-facial' },
    { name: 'Bioestimuladores', href: '/bioestimuladores' },
    { name: 'Contorno Corporal', href: '/contorno-corporal' },
    { name: 'Medicina Preventiva', href: '/medicina-preventiva' },
  ];
  const beforeAfterCases = [
    {
      title: 'Levantamiento de Glúteos',
      description: 'Tensamax para glúteos firmes y levantados',
      sessions: '2 sesiones',
    },
    {
      title: 'Rejuvenecimiento Facial',
      description: 'Combinación de hilos y bioestimuladores',
      sessions: '1 sesión',
    },
    {
      title: 'Marcación Abdominal',
      description: 'Técnica avanzada para definición muscular',
      sessions: '3 sesiones',
    },
  ];

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
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
              <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3 shadow-md">
                <Award className="w-8 h-8 text-primary" />
                <div>
                  <p className="font-bold">Certificado</p>
                  <p className="text-sm text-muted-foreground">
                    Medicina Estética
                  </p>
                </div>
              </div>
               <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm rounded-lg p-3 text-center shadow-md">
                  <p className="text-2xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">
                    Pacientes Satisfechos
                  </p>
              </div>
            </div>
            <div>
              <h1 className="font-headline text-4xl md:text-5xl font-bold">
                Conoce al{' '}
                <span className="text-primary">Dr. Jhonathan Rincón</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Especialista en medicina estética con más de 5 años de
                experiencia. Reconocido como el{' '}
                <strong className="text-primary font-bold">#1 en hilos tensores en Medellín</strong>,
                combinando técnicas avanzadas con un enfoque personalizado para
                cada paciente.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Mi pasión es ayudar a las personas a sentirse seguras y
                hermosas, utilizando los tratamientos más innovadores y seguros
                del mercado.
              </p>

              <div className="mt-10 bg-muted/50 rounded-lg p-6">
                <h3 className="font-headline text-xl font-semibold mb-4">
                  Especializaciones
                </h3>
                <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
                  {specializations.map((spec) => (
                    <li key={spec.name} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      <Link
                        href={spec.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {spec.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <Button asChild size="lg" className="mt-8">
                <Link href="/hilos-tensores">
                  Conocer Más <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Before and After Section */}
        <section
          id="antes-y-despues"
          className="scroll-mt-20 py-16 sm:py-24"
        >
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-headline text-4xl md:text-5xl font-bold">
                Antes y <span className="text-primary">Después</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Resultados reales de nuestros tratamientos. Transformaciones que
                hablan por sí solas.
              </p>
            </div>
            <Carousel
              className="w-full max-w-5xl mx-auto mt-12"
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                {beforeAfterCases.map((caseItem, index) => (
                  <CarouselItem key={index}>
                    <Card className="shadow-xl overflow-hidden">
                      <CardContent className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6">
                        {/* Before */}
                        <div className="space-y-2">
                          <h3 className="font-semibold text-center md:text-left">
                            Antes
                          </h3>
                          <Placeholder className="rounded-lg aspect-[4/3]" />
                        </div>

                        {/* Details */}
                        <div className="text-center order-first md:order-none">
                          <h4 className="text-xl font-headline font-bold">
                            {caseItem.title}
                          </h4>
                          <p className="text-muted-foreground text-sm mt-1">
                            {caseItem.description}
                          </p>
                          <Badge
                            variant="secondary"
                            className="mt-3 font-normal"
                          >
                            {caseItem.sessions}
                          </Badge>
                        </div>

                        {/* After */}
                        <div className="space-y-2">
                          <h3 className="font-semibold text-center md:text-left">
                            Después
                          </h3>
                          <div className="relative">
                            <Placeholder className="rounded-lg aspect-[4/3]" />
                            <Badge className="absolute top-2 right-2 bg-green-500 text-white">
                              Resultado
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 md:-left-10" />
              <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 md:-right-10" />
            </Carousel>
            <div className="text-center mt-8">
              <p className="text-xs text-muted-foreground">
                *Los resultados pueden variar según cada paciente. Consulta
                personalizada requerida.
              </p>
              <Button asChild size="lg" className="mt-4">
                <Link href="#">Ver Más Casos de Éxito</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonios"
          className="scroll-mt-20 bg-muted/30 py-16 sm:py-24"
        >
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-headline text-4xl md:text-5xl font-bold">
                Testimonios de{' '}
                <span className="text-primary">Pacientes Felices</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Conoce las experiencias reales de nuestros pacientes y sus
                transformaciones. La satisfacción de ellos es nuestra mayor
                recompensa.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.name}
                  className="flex flex-col text-left shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                >
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-16 w-16 border-2 border-primary">
                        <Placeholder
                          className="w-full h-full"
                          text="foto"
                        />
                      </Avatar>
                      <div className="ml-4">
                        <p className="font-bold text-lg">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.age} años
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-base flex-1">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 bg-muted/50 border-t">
                    <p className="text-xs text-primary font-semibold uppercase tracking-wider">
                      {testimonial.treatment}
                    </p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 bg-card rounded-xl shadow-lg"
                >
                  <stat.icon className="w-10 h-10 text-primary mb-3" />
                  <p className="text-4xl font-bold">{stat.value}</p>
                  <p className="text-lg text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/573122784757"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar por WhatsApp"
        className="fixed bottom-6 right-6 bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all duration-300 z-50 transform hover:scale-110"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
