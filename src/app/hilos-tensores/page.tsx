'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  CheckCircle,
  PlusCircle,
  RefreshCw,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { SectionArch } from '@/components/section-arch';
import { SectionTitleWithLines } from '@/components/section-title-with-lines';


export default function HilosTensoresPage() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const benefits = [
    {
      title: 'Lifting de mejillas y pómulos.',
      image: {
        url: 'https://picsum.photos/seed/cheeks/250/125',
        hint: 'cheek lift',
      },
    },
    {
      title: 'Redefinición del óvalo facial.',
      image: {
        url: 'https://picsum.photos/seed/jawline/250/125',
        hint: 'jawline definition',
      },
    },
    {
      title: 'Elevación de cejas caídas.',
      image: {
        url: 'https://picsum.photos/seed/eyebrow/250/125',
        hint: 'eyebrow lift',
      },
    },
    {
      title: 'Corrección de surcos nasogenianos.',
      image: {
        url: 'https://picsum.photos/seed/nasolabial/250/125',
        hint: 'nasolabial folds',
      },
    },
    {
      title: 'Rejuvenecimiento del cuello.',
      image: {
        url: 'https://picsum.photos/seed/neck/250/125',
        hint: 'neck rejuvenation',
      },
    },
    {
      title: 'Mejora general de la piel.',
      image: {
        url: 'https://picsum.photos/seed/skin/250/125',
        hint: 'skin improvement',
      },
    },
  ];

  const threadTypes = [
    {
      name: 'Hilos Lisos (Monofilamento)',
      description:
        'Ideales para crear una malla de soporte que redensifica la piel. Estimulan el colágeno para mejorar la textura y dar un aspecto más turgente en zonas con flacidez fina.',
      image: 'https://picsum.photos/seed/hilos-lisos/400/300',
      imageHint: 'smooth threads illustration',
    },
    {
      name: 'Hilos Espiculados (COG)',
      description:
        'Son los protagonistas del efecto lifting. Cuentan con pequeñas anclas que se anclan al tejido, permitiendo traccionar y reposicionar la piel de forma inmediata y efectiva.',
      image: 'https://picsum.photos/seed/hilos-cog/400/300',
      imageHint: 'cog threads illustration',
    },
  ];

  const advancedApplications = [
    {
      title: 'Rinomodelación con Hilos',
      description:
        'Alternativa no quirúrgica para elevar la punta y rectificar el dorso nasal.',
      image: {
        url: 'https://picsum.photos/seed/rhino/250/125',
        hint: 'nose shaping',
      }
    },
    {
      title: 'Lifting de Cejas (Fox Eyes)',
      description:
        'Eleva la cola de la ceja para una mirada más abierta y juvenil.',
      image: {
        url: 'https://picsum.photos/seed/foxeyes/250/125',
        hint: 'eyebrow lift',
      }
    },
    {
      title: 'Marcación Abdominal',
      description: 'Define los rectos abdominales y combate la flacidez.',
       image: {
        url: 'https://picsum.photos/seed/abs/250/125',
        hint: 'abdominal definition',
      }
    },
    {
      title: 'Lifting de Brazos y Piernas',
      description:
        'Solución eficaz para la flacidez en cara interna de brazos y muslos.',
       image: {
        url: 'https://picsum.photos/seed/arms/250/125',
        hint: 'arm lift',
      }
    },
    {
      title: 'Levantamiento de Glúteos',
      description: 'Mejora la ptosis leve a moderada y redefine el contorno.',
       image: {
        url: 'https://picsum.photos/seed/glutes/250/125',
        hint: 'butt lift',
      }
    },
    {
      title: 'Tratamiento de Cicatrices Atróficas',
      description:
        'Estimula colágeno para rellenar y mejorar la textura de cicatrices.',
       image: {
        url: 'https://picsum.photos/seed/scars/250/125',
        hint: 'scar treatment',
      }
    },
  ];

  const faqs = [
    {
      question: '¿El procedimiento con hilos tensores es doloroso?',
      answer:
        'Se utiliza anestesia local para minimizar cualquier molestia. La mayoría de los pacientes en Medellín reportan una sensación de presión leve, pero no dolor significativo durante el tratamiento de hilos tensores.',
    },
    {
      question: '¿Cuánto dura el efecto de los hilos tensores?',
      answer:
        'Los resultados de los hilos PDO pueden durar entre 12 y 18 meses. Esto depende del tipo de hilo, la edad del paciente y su tipo de piel. La producción de colágeno inducida prolonga los beneficios del lifting facial.',
    },
    {
      question: '¿Cuándo veré los resultados finales del lifting sin cirugía?',
      answer:
        'Aunque hay un efecto tensor inmediato, el resultado final se aprecia mejor después de 2-3 meses. Para este tiempo, el nuevo colágeno se ha formado completamente alrededor de los hilos, maximizando la firmeza.',
    },
    {
      question: '¿Qué cuidados debo tener después del tratamiento?',
      answer:
        'Se recomienda evitar gesticular exageradamente, masajear la zona tratada y realizar ejercicio intenso durante los primeros días. El Dr. Rincón te dará una pauta completa de cuidados post-tratamiento para asegurar los mejores resultados.',
    },
    {
      question: '¿Soy un buen candidato para los hilos tensores en Medellín?',
      answer:
        'Los hilos tensores son ideales para personas que presentan flacidez facial o corporal de leve a moderada y desean un rejuvenecimiento sin cirugía. La mejor manera de saberlo es agendando una cita de valoración personalizada con el Dr. Rincón.',
    },
  ];

  const heroImage = PlaceHolderImages.find((img) => img.id === 'hilos-hero');
  const whatAreTheyImage = PlaceHolderImages.find(
    (img) => img.id === 'hilos-what-are'
  );
   const beforeAfterCases = [
    {
      title: 'Lifting de Cuello',
      description: 'Hilos espiculados para tensado de papada.',
      sessions: '1 sesión',
      beforeImage: PlaceHolderImages.find(
        (img) => img.id === 'hilos-results-1'
      ),
      afterImage: PlaceHolderImages.find(
        (img) => img.id === 'hilos-results-2'
      ),
    },
    {
      title: 'Rejuvenecimiento Facial',
      description: 'Combinación de hilos lisos y espiculados.',
      sessions: '1 sesión',
      beforeImage: PlaceHolderImages.find(
        (img) => img.id === 'hilos-results-2'
      ),
      afterImage: PlaceHolderImages.find(
        (img) => img.id === 'hilos-results-3'
      ),
    },
    {
      title: 'Definición Mandibular',
      description: 'Técnica para un óvalo facial definido.',
      sessions: '1 sesión',
      beforeImage: PlaceHolderImages.find(
        (img) => img.id === 'hilos-results-3'
      ),
      afterImage: PlaceHolderImages.find(
        (img) => img.id === 'hilos-results-1'
      ),
    },
  ];
  const ctaImage = PlaceHolderImages.find((img) => img.id === 'hilos-cta');

  const handleCardFlip = (index: number) => {
    if (flippedCard === index) {
      setFlippedCard(null);
    } else {
      setFlippedCard(index);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full bg-slate-900">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Mujer con piel radiante tras tratamiento con hilos tensores en Medellín."
            fill
            className="object-cover opacity-30"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-4 text-white">
            <div className="flex flex-col items-center gap-2">
              <Badge variant="secondary">#1 en Medellín</Badge>
              <Badge>La especialidad de la casa</Badge>
            </div>
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold !leading-tight tracking-tight drop-shadow-lg mt-4">
              Hilos Tensores en Medellín: Lifting Facial y Corporal sin Cirugía
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-200 drop-shadow-md">
              Rejuvenecimiento facial sin cirugía para un lifting natural y
              duradero.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 sm:py-24 space-y-24">
        {/* Intro Section */}
        <section
          id="intro"
          className="scroll-mt-20 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Recupera la Firmeza y Juventud de tu Piel con Hilos Tensores PDO
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              ¿Sientes que tu rostro ha perdido firmeza y luce más cansado? ¿La
              flacidez en tu abdomen, brazos o glúteos te impide sentirte con
              total confianza? Imagina poder retroceder el tiempo, recuperar la
              firmeza y redefinir tus contornos de una manera natural, segura y
              sin pasar por el quirófano. Hoy, gracias a los{' '}
              <strong className="text-primary font-bold">
                hilos tensores de última generación MINT
              </strong>
              , ese deseo es una realidad en Medellín.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              El{' '}
              <strong className="text-primary font-bold">
                Dr. Jhonathan Rincón, reconocido como el experto #1 en hilos
                tensores PDO en Medellín
              </strong>
              , te ofrece una solución innovadora y mínimamente invasiva para
              revitalizar tu apariencia facial y corporal, con resultados que te
              encantarán.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="mt-8">
                  ¿Cómo funcionan los Hilos Tensores?{' '}
                  <ArrowRight className="ml-2" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle className="font-headline text-2xl text-primary">
                    ¿Qué Son Exactamente los Hilos Tensores y Cómo Funcionan?
                  </DialogTitle>
                </DialogHeader>
                <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground">
                  <p>
                    Piensa en los hilos tensores como un "andamio" inteligente y
                    reabsorbible para tu piel. Son suturas finísimas hechas de
                    Polidioxanona (PDO), un material 100% biocompatible y seguro
                    que se ha utilizado por décadas en cirugías complejas,
                    incluso en el corazón. Esto garantiza que tu cuerpo los
                    aceptará sin problemas y los reabsorberá de forma natural
                    con el tiempo.
                  </p>
                  <p>El tratamiento tiene una doble acción revolucionaria:</p>
                  <ol>
                    <li>
                      <strong className="text-primary font-bold">
                        Efecto Lifting Inmediato:
                      </strong>{' '}
                      Desde el momento en que el Dr. Rincón coloca los hilos
                      espiculados (con pequeñas anclas), estos se fijan en el
                      tejido subcutáneo para tensar y reposicionar la piel al
                      instante. Verás un levantamiento visible en zonas como las
                      mejillas, la línea mandibular o las cejas desde el primer
                      día.
                    </li>
                    <li>
                      <strong className="text-primary font-bold">
                        Bioestimulación Regenerativa a Largo Plazo:
                      </strong>{' '}
                      ¡Aquí ocurre la verdadera magia! La presencia de los hilos
                      activa los fibroblastos, las células "fábrica" de tu piel,
                      para que produzcan colágeno y elastina nuevos y de alta
                      calidad. Este nuevo colágeno crea una red de soporte
                      interna que mantiene tu piel firme, densa y elástica,
                      incluso meses después de que los hilos se hayan
                      reabsorbido por completo. El resultado es una mejora
                      progresiva y duradera en la calidad de tu piel.
                    </li>
                  </ol>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div>
            {whatAreTheyImage && (
              <Image
                src={whatAreTheyImage.imageUrl}
                alt="Diagrama explicativo del funcionamiento de los hilos tensores en la piel."
                width={600}
                height={600}
                className="rounded-xl shadow-2xl w-full aspect-square object-cover"
                data-ai-hint={whatAreTheyImage.imageHint}
              />
            )}
          </div>
        </section>

         {/* Advanced Applications Section */}
        <section id="aplicaciones" className="scroll-mt-20 text-center">
          <SectionTitleWithLines>Aplicaciones Específicas</SectionTitleWithLines>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">
            Más Allá del Rostro: Aplicaciones Corporales y Faciales
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            La versatilidad de los hilos tensores permite tratar diversas áreas
            del cuerpo y rostro con resultados espectaculares.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {advancedApplications.map((app, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <SectionArch
                  imageUrl={app.image.url}
                  alt={app.title}
                  data-ai-hint={app.image.hint}
                />
                <Card className="w-full -mt-8 pt-12 pb-6 px-6 shadow-lg flex flex-col flex-1">
                  <CardContent className="p-0 flex-1">
                    <p className="font-headline font-semibold text-xl">{app.title}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {app.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>


        {/* Before and After Section */}
        <section id="resultados" className="scroll-mt-20 text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">
                Antes y <span className="text-primary">Después</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Resultados reales de nuestros tratamientos con hilos tensores. Transformaciones que hablan por sí solas.
            </p>
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
                          {caseItem.beforeImage && (
                            <Image
                              src={caseItem.beforeImage.imageUrl}
                              alt={`Antes - ${caseItem.title}`}
                              width={600}
                              height={400}
                              className="rounded-lg aspect-[4/3] object-cover"
                              data-ai-hint={caseItem.beforeImage.imageHint}
                            />
                          )}
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
                            {caseItem.afterImage && (
                              <Image
                                src={caseItem.afterImage.imageUrl}
                                alt={`Después - ${caseItem.title}`}
                                width={600}
                                height={400}
                                className="rounded-lg aspect-[4/3] object-cover"
                                data-ai-hint={caseItem.afterImage.imageHint}
                              />
                            )}
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
        </section>

        {/* Thread Types Section */}
        <section id="tipos-hilos" className="scroll-mt-20 text-center">
           <SectionTitleWithLines>
             <span className="text-foreground">Herramientas de</span>{' '}
             <span className="text-primary">Precisión</span>
           </SectionTitleWithLines>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">
            Cada Hilo tiene su Propósito
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Utilizo diferentes tipos de hilos (lisos, espiculados) para
            personalizar tu tratamiento de lifting facial y lograr los mejores
            resultados según tus necesidades de tracción o redensificación en
            Medellín.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {threadTypes.map((type, index) => (
              <div
                key={type.name}
                className={cn('flip-card', { flipped: flippedCard === index })}
                onClick={() => handleCardFlip(index)}
              >
                <div className="flip-card-inner cursor-pointer" style={{height: "320px"}}>
                  <div className="flip-card-front">
                    <Card className="text-center p-8 h-full flex flex-col justify-center shadow-lg">
                      <CardHeader className="p-0 items-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                          <span className="text-3xl text-primary">✧</span>
                        </div>
                        <CardTitle className="font-headline text-xl">
                          {type.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 mt-4">
                        <p className="text-muted-foreground">{type.description}</p>
                      </CardContent>
                      <p className="text-xs text-muted-foreground italic mt-4">
                        (Haz clic para ver más)
                      </p>
                    </Card>
                  </div>
                  <div className="flip-card-back">
                    <Card className="h-full shadow-lg overflow-hidden relative">
                      <Image
                        src={type.image}
                        alt={`Imagen de ${type.name}`}
                        fill
                        className="object-cover"
                        data-ai-hint={type.imageHint}
                      />
                       <div className="absolute inset-0 bg-black/30" />
                       <div className="absolute top-2 right-2 bg-background/80 p-1 rounded-full text-foreground">
                          <RefreshCw className="w-4 h-4" />
                       </div>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
         {/* Benefits Section */}
        <section id="beneficios" className="scroll-mt-20 text-center">
           <SectionTitleWithLines>
             <span className="text-foreground">Beneficios</span>{' '}
             <span className="text-primary">Clave</span>
           </SectionTitleWithLines>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">
            Resultados que Transforman con el Lifting No Quirúrgico
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Descubre los múltiples beneficios de este tratamiento innovador para
            devolverle la juventud a tu rostro y cuerpo.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <SectionArch
                  imageUrl={benefit.image.url}
                  alt={benefit.title}
                  data-ai-hint={benefit.image.hint}
                />
                <Card className="w-full -mt-8 pt-12 pb-4 px-4 shadow-lg">
                  <CardContent className="p-0 flex items-center justify-center gap-4">
                     <div className="bg-primary/10 text-primary p-2 rounded-full">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                    <p className="font-semibold text-lg">{benefit.title}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="scroll-mt-20 max-w-4xl mx-auto text-center">
           <SectionTitleWithLines>
             <span className="text-foreground">Preguntas</span>{' '}
             <span className="text-primary">Frecuentes</span>
           </SectionTitleWithLines>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mt-2">
            Resolvemos tus dudas
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground text-center">
            Tus dudas más comunes sobre el tratamiento con hilos
            tensores en nuestra clínica de Medellín.
          </p>
          <Accordion type="single" collapsible className="w-full mt-12 text-left">
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
                Agenda tu Valoración de Hilos Tensores
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                ¿Sientes que los hilos tensores son para ti? El Dr. Rincón
                evaluará tu caso de forma personalizada para diseñar un
                tratamiento a tu medida que cumpla tus expectativas de
                rejuvenecimiento.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a
                  href="https://wa.me/573122784757"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="w-5 h-5 mr-2" /> Agendar por WhatsApp
                </a>
              </Button>
            </div>
            <div className="relative h-64 md:h-full w-full">
              {ctaImage && (
                <Image
                  src={ctaImage.imageUrl}
                  alt="Dr. Jhonathan Rincón realizando un procedimiento de hilos tensores en su clínica."
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
