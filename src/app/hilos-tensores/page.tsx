
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, PlusCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';

export default function HilosTensoresPage() {
  const benefits = [
    'Lifting de mejillas y pómulos.',
    'Definición del contorno mandibular (adiós al "jowl").',
    'Atenuación de surcos nasogenianos.',
    'Disminución de líneas de marioneta.',
    'Mejora general de la firmeza y calidad de la piel.',
    'Resultados naturales y progresivos sin cirugía.',
  ];

  const threadTypes = [
    {
      name: 'Hilos Lisos (Monofilamento)',
      description: 'Ideales para crear una malla de soporte que redensifica la piel. Estimulan el colágeno para mejorar la textura y dar un aspecto más turgente.',
      icon: '/icons/hilo-liso.svg', 
    },
    {
      name: 'Hilos de Tornillo (Screw)',
      description: 'Diseñados para aportar un ligero volumen y tratar arrugas más profundas. Su forma en espiral permite un mayor estímulo de colágeno en áreas localizadas.',
       icon: '/icons/hilo-tornillo.svg',
    },
    {
      name: 'Hilos Espiculados (COG)',
      description: 'Son los protagonistas del efecto lifting. Cuentan con pequeñas espículas (dientes) que se anclan al tejido, permitiendo traccionar y reposicionar la piel de forma inmediata.',
       icon: '/icons/hilo-espiculado.svg',
    },
  ];

  const advancedApplications = [
    { title: "Rinomodelación", description: "Alternativa no quirúrgica para elevar la punta y rectificar el dorso nasal." },
    { title: "Lifting de Cejas (Fox Eyes)", description: "Eleva la cola de la ceja para una mirada más abierta y juvenil." },
    { title: "Marcación Abdominal", description: "Define los rectos abdominales y combate la flacidez." },
    { title: "Lifting de Brazos y Piernas", description: "Solución eficaz para la flacidez en cara interna de brazos y muslos." },
    { title: "Levantamiento de Glúteos", description: "Mejora la ptosis leve a moderada y redefine el contorno." },
    { title: "Tratamiento de Cicatrices", description: "Estimula colágeno para rellenar y mejorar la textura de cicatrices atróficas." },
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
            <div className='flex flex-col items-center gap-2'>
              <Badge variant="secondary">#1 en Medellín</Badge>
              <Badge>La especialidad de la casa</Badge>
            </div>
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold !leading-tight tracking-tight drop-shadow-lg mt-4">
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
        {/* Intro Section */}
        <section
          id="intro"
          className="scroll-mt-20 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Recupera la Firmeza y Juventud de tu Piel
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              ¿Sientes que tu rostro ha perdido firmeza y luce más cansado? ¿La flacidez en tu abdomen, brazos o glúteos te impide sentirte con total confianza? Imagina poder retroceder el tiempo, recuperar la firmeza y redefinir tus contornos de una manera natural, segura y sin pasar por el quirófano. Hoy, gracias a los <strong className="text-primary font-bold">hilos tensores de última generación MINT</strong>, ese deseo es una realidad.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
             <strong className="text-primary font-bold">El Dr. Jhonathan Rincón, reconocido como el experto #1 en hilos tensores de Medellín</strong>, te ofrece una solución innovadora y mínimamente invasiva para revitalizar tu apariencia facial y corporal, con resultados que te encantarán.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="mt-8">
                  ¿Cómo funcionan los Hilos Tensores? <ArrowRight className="ml-2" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle className='font-headline text-2xl text-primary'>¿Qué Son Exactamente los Hilos Tensores y Cómo Funcionan?</DialogTitle>
                </DialogHeader>
                <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground">
                    <p>Piensa en los hilos tensores como un "andamio" inteligente y reabsorbible para tu piel. Son suturas finísimas hechas de Polidioxanona (PDO), un material 100% biocompatible y seguro que se ha utilizado por décadas en cirugías complejas, incluso en el corazón. Esto garantiza que tu cuerpo los aceptará sin problemas y los reabsorberá de forma natural con el tiempo.</p>
                    <p>El tratamiento tiene una doble acción revolucionaria:</p>
                    <ol>
                      <li><strong className="text-primary">Efecto Lifting Inmediato:</strong> Desde el momento en que el Dr. Rincón coloca los hilos espiculados (con pequeñas anclas microscópicas), estos se fijan en el tejido subcutáneo para tensar y reposicionar la piel al instante. Verás un levantamiento visible en zonas como las mejillas, la línea mandibular o las cejas desde el primer día.</li>
                      <li><strong className="text-primary">Bioestimulación Regenerativa a Largo Plazo:</strong> ¡Aquí ocurre la verdadera magia! La presencia de los hilos activa los fibroblastos, las células "fábrica" de tu piel, para que produzcan colágeno y elastina nuevos y de alta calidad. Este nuevo colágeno crea una red de soporte interna que mantiene tu piel firme, densa y elástica, incluso meses después de que los hilos se hayan reabsorbido por completo. El resultado es una mejora progresiva y duradera en la calidad de tu piel.</li>
                    </ol>
                </div>
              </DialogContent>
            </Dialog>
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

        {/* What are they Section - This content is now in the dialog */}
        

        {/* Benefits Section */}
        <section id="beneficios" className="scroll-mt-20 text-center">
          <Badge variant="secondary">Beneficios Clave</Badge>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">
            Resultados que Transforman
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Descubre los múltiples beneficios de este tratamiento innovador para devolverle la juventud a tu rostro y cuerpo.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 flex items-start gap-4 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
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

        {/* Thread Types Section */}
        <section id="tipos-hilos" className="scroll-mt-20">
          <div className='text-center'>
            <Badge variant="secondary">Herramientas de Precisión</Badge>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">
              Cada Hilo tiene su Propósito
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Utilizo diferentes tipos de hilos para personalizar tu tratamiento y lograr los mejores resultados según tus necesidades.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {threadTypes.map((type) => (
              <Card key={type.name} className="text-center p-8">
                <CardHeader className="p-0 items-center">
                   {/* Placeholder for actual icons */}
                   <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4'>
                    <span className='text-3xl text-primary'>✧</span>
                   </div>
                  <CardTitle className="font-headline text-xl">{type.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-4">
                  <p className="text-muted-foreground">{type.description}</p>
                </CardContent>
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
        
        {/* Advanced Applications Section */}
        <section id="aplicaciones" className="scroll-mt-20 text-center">
          <Badge variant="secondary">Más Allá del Rostro</Badge>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">
            Aplicaciones Corporales y Específicas
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            La versatilidad de los hilos tensores permite tratar diversas áreas del cuerpo con resultados espectaculares.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {advancedApplications.map((app, index) => (
              <Card key={index} className="p-6 flex items-start gap-4">
                <div className="text-primary mt-1">
                  <PlusCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-lg">{app.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{app.description}</p>
                </div>
              </Card>
            ))}
          </div>
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

    