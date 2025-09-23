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


export default function MedicinaPreventivaPage() {
  const benefits = [
    'Beneficio 1',
    'Beneficio 2',
    'Beneficio 3',
    'Beneficio 4',
    'Beneficio 5',
    'Beneficio 6',
  ];

  const faqs = [
    {
      question: '¿Pregunta frecuente 1?',
      answer:
        'Respuesta a la pregunta frecuente 1.',
    },
    {
      question: '¿Pregunta frecuente 2?',
      answer:
        'Respuesta a la pregunta frecuente 2.',
    },
    {
      question: '¿Pregunta frecuente 3?',
      answer:
        'Respuesta a la pregunta frecuente 3.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full bg-slate-900">
        <Placeholder className="absolute inset-0 opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-4 text-white">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold !leading-tight tracking-tight drop-shadow-lg mt-2">
              Medicina Preventiva
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-200 drop-shadow-md">
              Descripción corta sobre la Medicina Preventiva.
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
              Título Descriptivo sobre Medicina Preventiva
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Explicación detallada sobre qué es la Medicina Preventiva, cómo funciona y para quién es recomendada.
            </p>
             <Button asChild size="lg" className="mt-8">
                <Link href="#citas">
                  Agenda tu Valoración <ArrowRight className="ml-2" />
                </Link>
            </Button>
          </div>
          <div>
            <Placeholder className="rounded-xl shadow-2xl w-full aspect-square" />
          </div>
        </section>

        {/* Benefits Section */}
        <section id="beneficios" className="scroll-mt-20 text-center">
          <Badge variant="secondary">Beneficios</Badge>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">
            ¿Por qué elegir Medicina Preventiva?
          </h2>
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
          <Carousel
            className="w-full max-w-4xl mx-auto mt-12"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {[1, 2, 3].map(
                (item, index) =>
                  (
                    <CarouselItem key={index}>
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <Placeholder className="w-full h-auto aspect-[3/2]" />
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
                Agenda una cita para una valoración personalizada y descubre cómo la Medicina Preventiva puede ayudarte.
              </p>
              <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="https://wa.me/573122784757" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-5 h-5 mr-2" /> Agendar por WhatsApp
              </a>
            </Button>
            </div>
            <div className="relative h-64 md:h-full w-full">
              <Placeholder className="absolute inset-0" />
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
