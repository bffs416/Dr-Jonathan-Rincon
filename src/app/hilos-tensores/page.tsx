import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HilosTensoresPage() {
  const benefits = [
    'Efecto lifting inmediato y sin cirugía.',
    'Estimula la producción natural de colágeno.',
    'Redefine el óvalo facial y mejora la flacidez.',
    'Resultados naturales y progresivos.',
    'Procedimiento rápido y con mínima incapacidad.',
    'Mejora la textura y calidad de la piel.',
  ];

  const faqs = [
    {
      question: '¿El procedimiento es doloroso?',
      answer:
        'Se utiliza anestesia local para minimizar cualquier molestia. La mayoría de los pacientes reportan una sensación de presión leve, pero no dolor significativo.',
    },
    {
      question: '¿Cuánto dura el efecto de los hilos tensores?',
      answer:
        'Los resultados pueden durar entre 12 y 18 meses, dependiendo del tipo de hilo utilizado, la edad del paciente y su tipo de piel. La producción de colágeno inducida prolonga los beneficios.',
    },
    {
      question: '¿Cuándo veré los resultados finales?',
      answer:
        'Aunque hay un efecto tensor inmediato, el resultado final se aprecia mejor después de 2-3 meses, una vez que el nuevo colágeno se ha formado alrededor de los hilos.',
    },
    {
      question: '¿Qué cuidados debo tener después del tratamiento?',
      answer:
        'Se recomienda evitar gesticular exageradamente, masajear la zona tratada y realizar ejercicio intenso durante los primeros días. El Dr. Rincón te dará una pauta completa de cuidados post-tratamiento.',
    },
    {
      question: '¿Soy un buen candidato para los hilos tensores?',
      answer:
        'Los hilos tensores son ideales para personas que presentan flacidez leve a moderada y desean un rejuvenecimiento facial sin pasar por el quirófano. La mejor manera de saberlo es agendando una cita de valoración.',
    },
  ];
  
  const heroImage = PlaceHolderImages.find(img => img.id === 'hilos-hero');
  const whatAreTheyImage = PlaceHolderImages.find(img => img.id === 'hilos-what-are');
  const beforeAfterImages = PlaceHolderImages.filter(img => img.id.startsWith('hilos-results-'));
  const ctaImage = PlaceHolderImages.find(img => img.id === 'hilos-cta');


  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full bg-slate-900">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover opacity-30"
                data-ai-hint={heroImage.imageHint}
                priority
            />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-4 text-white">
            <Badge>La especialidad de la casa</Badge>
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold !leading-tight tracking-tight drop-shadow-lg mt-2">
              Rejuvenecimiento Facial y Corporal con Hilos Tensores
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-200 drop-shadow-md">
              Rejuvenecimiento facial sin cirugía para un lifting natural y
              duradero.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 sm:py-24 space-y-24">
        {/* What are they? Section */}
        <section
          id="que-son"
          className="scroll-mt-20 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              El Secreto de una Piel Firme y Joven
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Los hilos tensores, también conocidos como hilos mágicos, son una
              técnica revolucionaria en medicina estética. Consisten en la
              inserción de finos hilos biocompatibles en el tejido subcutáneo
              para reposicionar los tejidos y combatir la flacidez.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Este tratamiento no solo proporciona un efecto lifting inmediato,
              sino que también estimula al cuerpo a producir colágeno de forma
              natural, mejorando la calidad y elasticidad de la piel a largo
              plazo. Es la opción perfecta para quienes buscan resultados
              visibles sin los riesgos y el tiempo de recuperación de una
              cirugía.
            </p>
             <Button asChild size="lg" className="mt-8">
                <Link href="#citas">
                  Agenda tu Valoración <ArrowRight className="ml-2" />
                </Link>
            </Button>
          </div>
          <div>
            {whatAreTheyImage && (
                <Image
                    src={whatAreTheyImage.imageUrl}
                    alt={whatAreTheyImage.description}
                    width={600}
                    height={600}
                    className="rounded-xl shadow-2xl w-full aspect-square object-cover"
                    data-ai-hint={whatAreTheyImage.imageHint}
                />
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section id="beneficios" className="scroll-mt-20 text-center">
          <Badge variant="secondary">Beneficios</Badge>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">
            ¿Por qué elegir Hilos Tensores?
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Descubre las múltiples ventajas de este tratamiento innovador para
            devolverle la juventud a tu rostro.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-2 rounded-full mt-1">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-lg">{benefit}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Before and After Section */}
        <section id="resultados" className="scroll-mt-20 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Resultados que Inspiran Confianza
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Imágenes reales de pacientes que han transformado su apariencia
            gracias a la maestría del Dr. Rincón con los hilos tensores.
          </p>
          <Carousel
            className="w-full max-w-4xl mx-auto mt-12"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {beforeAfterImages.map(
                (image, index) =>
                  (
                    <CarouselItem key={index}>
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            width={1200}
                            height={800}
                            className="w-full h-auto aspect-[3/2] object-cover"
                            data-ai-hint={image.imageHint}
                          />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  )
              )}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-12" />
            <CarouselNext className="-right-4 md:-right-12" />
          </Carousel>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="scroll-mt-20 max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground text-center">
            Resolvemos tus dudas más comunes sobre el tratamiento con hilos
            tensores.
          </p>
          <Accordion type="single" collapsible className="w-full mt-12">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* CTA Section */}
        <section id="citas" className="scroll-mt-20">
          <Card className="relative overflow-hidden shadow-xl md:grid md:grid-cols-2 items-center">
             <div className="p-8 md:p-12">
              <Badge>Consulta Personalizada</Badge>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2 text-primary">
                Da el Primer Paso
              </h2>
               <p className="mt-4 text-lg text-muted-foreground">
                ¿Sientes que los hilos tensores son para ti? El Dr. Rincón evaluará tu caso de forma personalizada para diseñar un tratamiento a tu medida que cumpla tus expectativas.
              </p>
              <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="https://wa.me/573122784757" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-5 h-5 mr-2" /> Agendar por WhatsApp
              </a>
            </Button>
            </div>
            <div className="relative h-64 md:h-full w-full">
              {ctaImage && (
                <Image
                    src={ctaImage.imageUrl}
                    alt={ctaImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={ctaImage.imageHint}
                />
              )}
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
