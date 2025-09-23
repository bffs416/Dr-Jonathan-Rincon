import Link from 'next/link';
import {
  ArrowRight,
  Award,
  Calendar,
  HeartHandshake,
  Quote,
  Star,
  Clock,
  Briefcase,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const Placeholder = ({
  className,
  width,
  height,
  text = 'Pon tu imagen aquí',
}: {
  className?: string;
  width?: number | string;
  height?: number | string;
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
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    },
    {
      name: 'Ana Rodríguez',
      age: 42,
      treatment: 'Bioestimuladores + Botox',
      text: 'Excelente atención y resultados naturales. El tratamiento con Sculptra me devolvió la firmeza que había perdido. Totalmente recomendado.',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026703d',
    },
    {
      name: 'Carmen López',
      age: 38,
      treatment: 'Contorno Corporal',
      text: 'El Dr. Rincón transformó mi figura con hidrolipoclasia. Proceso cómodo, resultados espectaculares. El mejor especialista de Medellín.',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d',
    },
    {
      name: 'Sofía Martínez',
      age: 29,
      treatment: 'NCTF + Esperma de Salmón',
      text: 'Mi piel nunca había lucido tan radiante. El tratamiento facial me dio una luminosidad increíble. Definitivamente volveré.',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d',
    },
  ];

  const stats = [
    { value: '500+', label: 'Pacientes Satisfechos', icon: HeartHandshake },
    { value: '5+', label: 'Años de Experiencia', icon: Briefcase },
    { value: '1000+', label: 'Procedimientos Realizados', icon: Clock },
  ];

  const specializations = [
    'Hilos Tensores PDO',
    'Botox Terapéutico',
    'Rejuvenecimiento Facial',
    'Bioestimuladores',
    'Contorno Corporal',
    'Medicina Preventiva',
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
              <Placeholder className="rounded-xl shadow-2xl w-full aspect-[4/5] object-cover" />
              <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3 shadow-md">
                <Award className="w-8 h-8 text-primary" />
                <div>
                  <p className="font-bold">Certificado</p>
                  <p className="text-sm text-muted-foreground">
                    Medicina Estética
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-headline text-4xl md:text-5xl font-bold">
                Conoce al{' '}
                <span className="text-primary">Dr. Jhonathan Rincón</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Especialista en medicina estética con más de 5 años de
                experiencia. Reconocido como el #1 en hilos tensores en
                Medellín, combinando técnicas avanzadas con un enfoque
                personalizado para cada paciente.
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
                  {specializations.map((spec, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      <span className="text-muted-foreground">{spec}</span>
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
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.name}
                  className="flex flex-col text-left shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                >
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <Quote
                      className="w-8 h-8 text-primary/50 -ml-2 mb-4"
                      fill="hsl(var(--primary) / 0.1)"
                    />
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm flex-1">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start p-6 pt-4 bg-muted/50">
                    <div className="flex items-center w-full">
                      <Avatar className="h-12 w-12 border-2 border-primary">
                        <Placeholder
                          className="rounded-full w-full h-full"
                          text=""
                        />
                      </Avatar>
                      <div className="ml-4">
                        <p className="font-bold text-base">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.age} años
                        </p>
                      </div>
                    </div>
                    <Separator className="my-4" />
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
        className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <WhatsAppIcon className="w-8 h-8" />
      </a>
    </div>
  );
}