import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Info,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { SectionTitleWithLines } from '@/components/section-title-with-lines';
import { findImage } from '@/lib/images';

const Placeholder = ({
  className,
  seed,
}: {
  className?: string;
  seed: string;
}) => {
  const image = findImage(seed);
  return (
    <div className={cn('relative bg-muted w-full h-full', className)}>
      {image ? (
        <Image
          src={image.src}
          alt={image.hint}
          fill
          className="object-cover"
          data-ai-hint={image.hint}
        />
      ) : (
        <div className="w-full h-full bg-secondary" />
      )}
    </div>
  );
};

export default function BotoxPage() {
  
  const treatmentZones = [
    {
      title: 'Entrecejo',
      description:
        'Para suavizar el ceño fruncido que da apariencia de enojo o preocupación.',
    },
    {
      title: 'Frente',
      description: 'Para atenuar las líneas horizontales.',
    },
    {
      title: 'Patas de gallo',
      description:
        'Para reducir las arrugas alrededor de los ojos que aparecen al sonreír.',
    },
  ];

  const faqs = [
    {
      question: '¿Para quién es este tratamiento?',
      answer:
        'Es ideal para hombres y mujeres que desean tratar las arrugas de expresión ya existentes o prevenir su aparición. Es un tratamiento que se adapta a las necesidades individuales, siempre buscando la armonía facial.',
    },
    {
      question: '¿El procedimiento duele?',
      answer:
        '¡Es un tratamiento muy bien tolerado! Se utilizan agujas extrafinas, por lo que la molestia es mínima. La mayoría de los pacientes lo describen como pequeños pinchazos que no requieren anestesia, aunque se puede usar frío local para mayor comodidad.',
    },
    {
      question: '¿Cuándo veré los resultados y cuánto duran?',
      answer:
        'Los efectos no son inmediatos. Empezarás a notar una mejoría entre 2 y 4 días después de la aplicación, alcanzando el resultado máximo en unos 7 a 10 días. La duración de este efecto rejuvenecedor es temporal, generalmente de 3 a 6 meses. Pasado este tiempo, el músculo recupera su movilidad y el tratamiento puede repetirse para mantener los resultados.',
    },
    {
      question: '¿Cómo es la recuperación?',
      answer:
        '¡No hay tiempo de recuperación! Es un procedimiento ambulatorio que te permite volver a tus actividades diarias de inmediato. Simplemente se recomienda no hacer ejercicio intenso ni masajear la zona tratada durante las primeras horas.',
    },
    {
      question: '¿Es un tratamiento seguro?',
      answer:
        'Sí, cuando es aplicado por un médico cualificado, es un procedimiento con un comportamiento muy predecible y un alto perfil de seguridad. Los efectos secundarios son raros, leves y temporales, como pequeños hematomas o un ligero dolor en el punto de inyección.',
    },
  ];


  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full bg-slate-900">
        <div className="absolute inset-0 opacity-30">
          <Placeholder seed="botox-hero"/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-4 text-white">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold !leading-tight tracking-tight drop-shadow-lg mt-2">
              Redescubre tu Juventud: El Secreto para una Apariencia Fresca y Natural
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-slate-200 drop-shadow-md">
              Dile adiós a las arrugas de expresión y luce un rostro descansado, sin cirugías ni perder tu esencia.
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
              ¿Por qué aparecen las arrugas de expresión?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Cada vez que sonríes, frunces el ceño o te sorprendes, los músculos de tu rostro se contraen. Con el paso de los años, estos movimientos repetidos van dejando marcas en la piel, conocidas como arrugas dinámicas o de expresión. En una piel joven, estas líneas desaparecen al relajar el rostro, pero con el tiempo, la piel pierde elasticidad y las arrugas se vuelven visibles incluso en reposo.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Si buscas una forma segura y eficaz de suavizar estas líneas y recuperar una apariencia más relajada y juvenil, el tratamiento con toxina botulínica es una de las mejores y más populares opciones en la medicina estética actual.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="#como-funciona">
                Descubrir cómo funciona <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
          <div className="w-full aspect-square">
            <Placeholder
              className="rounded-xl shadow-2xl"
              seed="expression-wrinkles"
            />
          </div>
        </section>

        {/* Section 2: How it works */}
        <section id="como-funciona" className="scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 w-full aspect-square">
              <Placeholder
                className="rounded-xl shadow-2xl"
                seed="botox-diagram"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">
                ¿Qué es la toxina botulínica estética y cómo funciona su "magia"?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                La toxina botulínica, conocida popularmente como "bótox", es una proteína purificada que actúa como un relajante muscular muy preciso. No es un relleno, su función es muy diferente y específica.
              </p>
               <p className="mt-4 text-lg text-muted-foreground">
                Se aplica en dosis muy pequeñas mediante microinyecciones directamente en los músculos responsables de formar esas arrugas que te preocupan. Su mecanismo de acción es bloquear temporalmente la señal nerviosa que ordena al músculo contraerse. Al relajar el músculo de forma controlada, la piel que lo recubre se alisa y las arrugas de expresión se suavizan o desaparecen.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                 El objetivo nunca es "congelar" tu rostro, sino relajar para lograr un aspecto natural. Queremos que sigas expresando tus emociones, pero de una manera más suave y fresca.
              </p>
            </div>
          </div>
          <div className="mt-20 text-center">
            <SectionTitleWithLines>
              <span className="text-foreground">Zonas más comunes</span>{' '}
              <span className="text-primary">de tratamiento</span>
            </SectionTitleWithLines>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {treatmentZones.map((zone, index) => (
                <div key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full mt-1">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{zone.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {zone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: FAQ */}
        <section id="faq" className="scroll-mt-20 max-w-4xl mx-auto">
          <div className="text-center">
            <SectionTitleWithLines>
              <span className="text-foreground">Todo lo que quieres saber</span>{' '}
              <span className="text-primary">antes de decidirte</span>
            </SectionTitleWithLines>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Es normal tener preguntas. Aquí respondemos las más importantes para que te sientas con total confianza.
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

        {/* Section: Videos */}
        <section id="videos" className="scroll-mt-20">
          <div className="text-center">
            <SectionTitleWithLines>
              <span className="text-foreground">Casos de Éxito:</span>{' '}
              <span className="text-primary">Naturalidad y Frescura</span>
            </SectionTitleWithLines>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">
              Mira los Resultados
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Descubre cómo el tratamiento con toxina botulínica puede refrescar tu apariencia de forma sutil y natural.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="w-full aspect-video rounded-lg shadow-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/rokGy0huYEA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="w-full aspect-video rounded-lg shadow-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Section 4: Safety */}
        <section id="seguridad" className="scroll-mt-20">
          <div className="p-8 md:p-12">
            <div className="text-center">
              <div className="flex justify-center">
                <ShieldCheck className="w-12 h-12 text-primary" />
              </div>
              <h2 className="font-headline text-3xl mt-2">
                La Clave del Éxito: Relajar, no Paralizar y Elegir al Profesional Adecuado
              </h2>
            </div>
            <div className="space-y-4 text-lg text-muted-foreground mt-4">
              <p>
                El secreto de un buen resultado es la naturalidad. El objetivo es relajar los músculos para suavizar las arrugas, no paralizarlos y dejar un rostro sin expresión. Un buen médico sabrá dosificar y aplicar el producto de forma estratégica para mantener la armonía de tus facciones.
              </p>
              <p>
                Por ello, es fundamental que el tratamiento sea administrado exclusivamente por médicos con la formación y experiencia adecuadas, como dermatólogos o cirujanos plásticos. Ellos conocen a la perfección la anatomía facial y la técnica de inyección para lograr los mejores resultados y minimizar cualquier riesgo.
              </p>
            </div>
          </div>
        </section>


        {/* Section 5: CTA */}
        <section id="citas" className="scroll-mt-20">
          <Card className="relative overflow-hidden shadow-xl md:grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <Badge>Consulta Personalizada</Badge>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2 text-primary">
                ¿Estás listo/a para una mirada más joven y relajada?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Si quieres reducir esas arrugas que te hacen parecer cansado/a o preocupado/a y buscas un resultado natural que te devuelva la frescura, este tratamiento es para ti.
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
              <Placeholder className="absolute inset-0" seed="cta-botox"/>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
