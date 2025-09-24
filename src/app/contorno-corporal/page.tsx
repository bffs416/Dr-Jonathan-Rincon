import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { cn } from '@/lib/utils';
import { SectionTitleWithLines } from '@/components/section-title-with-lines';
import Image from 'next/image';

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

export default function ContornoCorporalPage() {
  const benefits = [
    {
      title: 'Resultados visibles desde la primera sesión',
      description: 'Aunque los beneficios son progresivos, muchos notan una mejora desde el primer día.',
    },
    {
      title: 'Procedimiento sin dolor y sin incapacidad',
      description: 'Es un tratamiento cómodo, descrito por muchos como un masaje cálido y relajante. No requiere anestesia y puedes volver a tus actividades diarias inmediatamente.',
    },
    {
      title: 'Tratamiento completo (facial y corporal)',
      description: 'Ideal para tratar la flacidez en rostro, cuello y papada, así como para modelar abdomen, levantar glúteos, y tonificar brazos y piernas.',
    },
    {
      title: 'Combate la celulitis y la grasa localizada',
      description: 'Mejora la textura de la piel, reduce la apariencia de "piel de naranja" y ayuda a disminuir esos depósitos de grasa difíciles de eliminar.',
    },
     {
      title: 'Ideal para recuperación postquirúrgica',
      description: 'Tensamax es un gran aliado después de una cirugía, ya que acelera la regeneración de los tejidos, favorece el drenaje y previene la fibrosis.',
    },
  ];

  const faqs = [
    {
      question: '¿Para quién es este tratamiento?',
      answer:
        'Es perfecto para personas que buscan mejorar la firmeza de su piel, reducir grasa localizada o celulitis, y desean hacerlo sin recurrir a un procedimiento quirúrgico. Es una excelente opción tanto para quienes notan los primeros signos de flacidez como para quienes desean modelar áreas específicas de su cuerpo.',
    },
    {
      question: '¿Cómo es una sesión de Tensamax?',
      answer:
        'Es un proceso sencillo y relajante. Después de una evaluación para definir tus objetivos, te recostarás cómodamente mientras el especialista desliza el cabezal del equipo sobre la zona a tratar. Sentirás un calor agradable y controlado. Cada sesión dura entre 30 y 60 minutos, dependiendo del área.',
    },
    {
      question: '¿Cuántas sesiones necesitaré?',
      answer:
        'El número de sesiones varía según tus necesidades y objetivos. Generalmente, se recomienda un plan de 5 a 10 sesiones para lograr resultados óptimos y duraderos.',
    },
     {
      question: '¿Existen contraindicaciones?',
      answer:
        'Sí. Aunque es muy seguro, no se recomienda en mujeres embarazadas o en periodo de lactancia. Tampoco es adecuado para personas con marcapasos, prótesis metálicas en la zona a tratar, infecciones activas en la piel o ciertas enfermedades autoinmunes. Por eso es fundamental una valoración profesional previa.',
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
              Descubre Tensamax: La Tecnología que Transforma y Reafirma tu Piel Sin Cirugía
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-slate-200 drop-shadow-md">
              Moldea tu cuerpo, combate la flacidez y luce una piel más firme y joven de manera segura y sin dolor.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 sm:py-24 space-y-24">
        {/* Section 1: Intro */}
        <section
          id="intro"
          className="scroll-mt-20 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
             ¿Sientes que tu piel ha perdido firmeza o luchas contra grasa localizada?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
             Con el tiempo, es normal que la piel del rostro y del cuerpo pierda tonicidad, aparezca la flacidez o se acumule grasa en zonas difíciles de eliminar con ejercicio. Si buscas una solución efectiva que te ayude a recuperar un contorno definido y una piel más firme sin tener que pasar por el quirófano, Tensamax es la respuesta que estabas esperando.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Este tratamiento no invasivo ha revolucionado la estética corporal y facial, ofreciendo resultados visibles desde las primeras sesiones y sin interrumpir tu rutina diaria.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="#citas">
                Agenda tu Valoración <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
          <div>
            <Placeholder
              className="rounded-xl shadow-2xl w-full aspect-square"
              text="Imagen de Tensamax en acción"
            />
          </div>
        </section>

        {/* Section 2: What it is */}
        <section id="que-es" className="scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Placeholder
                className="rounded-xl shadow-2xl w-full aspect-square"
                text="Diagrama de funcionamiento de Tensamax"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">
                ¿Qué es Tensamax y cómo funciona esta tecnología innovadora?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Tensamax es un tratamiento de vanguardia que utiliza tecnología de radiofrecuencia monopolar para transformar la piel desde sus capas más profundas. Funciona de una manera muy inteligente:
              </p>
              <ol className="mt-4 space-y-3 text-muted-foreground list-decimal pl-5">
                <li><strong>Genera un calor controlado:</strong> El equipo eleva la temperatura de manera uniforme en los tejidos de la piel.</li>
                <li><strong>Activa los procesos naturales del cuerpo:</strong> Este calor estimula a tus células para que produzcan nuevo colágeno y elastina, las proteínas responsables de la firmeza y elasticidad de la piel.</li>
                <li><strong>Doble acción:</strong> No solo reafirma la piel, sino que también tiene un efecto vasodilatador que mejora la circulación sanguínea. Esto nutre las células, ayuda a eliminar toxinas y reduce la grasa localizada.</li>
              </ol>
               <p className="mt-4 text-lg text-muted-foreground">
                El resultado es una piel visiblemente más tensa, un contorno corporal más definido y una apariencia más radiante y saludable.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="beneficios" className="scroll-mt-20 text-center">
          <SectionTitleWithLines><span className='text-foreground'>Los Beneficios</span> <span className='text-primary'>que Más te Importarán</span></SectionTitleWithLines>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-2 rounded-full mt-1">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="scroll-mt-20 max-w-4xl mx-auto">
           <div className="text-center">
             <SectionTitleWithLines><span className='text-foreground'>Lo que Debes Saber</span> <span className='text-primary'>Sobre el Tratamiento</span></SectionTitleWithLines>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">
              Lo que debes saber sobre el tratamiento Tensamax
            </h2>
            <p className='mt-4 max-w-2xl mx-auto text-lg text-muted-foreground'>
                Queremos que te sientas seguro/a y bien informado/a. Aquí resolvemos las preguntas más comunes.
            </p>
          </div>
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
                Transforma tu figura con seguridad y confianza
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Si buscas una alternativa real a la cirugía para reafirmar, tonificar y modelar tu piel, Tensamax es la solución que combina tecnología avanzada con resultados naturales y visibles.
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
              <Placeholder className="absolute inset-0" />
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
