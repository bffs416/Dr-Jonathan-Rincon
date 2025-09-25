import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  AlertTriangle,
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
import { cn } from '@/lib/utils';
import { SectionTitleWithLines } from '@/components/section-title-with-lines';

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

export default function BioestimuladoresPage() {
  const benefits = [
    'Resultados 100% naturales y progresivos: El cambio no es brusco ni artificial. Tu piel mejora gradualmente, luciendo más fresca, firme y descansada.',
    'Mejora integral de la piel: No solo combate la flacidez, sino que también mejora la textura, restaura el volumen perdido y suaviza arrugas y líneas finas.',
    'Efectos duraderos: A diferencia de otros tratamientos, los resultados pueden durar hasta dos años, ya que tu cuerpo sigue produciendo colágeno de forma natural.',
    'Tratamiento versátil: Funciona de maravilla en rostro, cuello, escote, manos e incluso en zonas corporales como brazos, abdomen o glúteos.',
  ];

  const faqs = [
    {
      question: '¿Para quién es este tratamiento?',
      answer:
        'Es ideal para hombres y mujeres, generalmente a partir de los 30 años, que notan los primeros signos de flacidez o envejecimiento y buscan una alternativa natural y preventiva. También es excelente para quienes ya tienen signos más avanzados y desean una mejora integral sin cirugía.',
    },
    {
      question: '¿El procedimiento duele?',
      answer:
        'Es un tratamiento muy bien tolerado. Se utiliza anestesia tópica (en crema) para asegurar que la molestia durante las microinyecciones sea mínima. La mayoría de los pacientes lo describen como un procedimiento cómodo.',
    },
    {
      question: '¿Necesitaré tiempo de recuperación?',
      answer:
        '¡No! Esta es una de las grandes ventajas. Puedes retomar tus actividades diarias inmediatamente después de la sesión. Podrías experimentar un leve enrojecimiento o algún pequeño hematoma en la zona de aplicación, pero estos efectos desaparecen en pocos días.',
    },
    {
      question: '¿Cuándo veré los resultados?',
      answer:
        'Los bioestimuladores trabajan al ritmo de tu cuerpo. Aunque algunos productos ofrecen un leve efecto inicial, los verdaderos resultados comienzan a ser visibles entre la tercera y cuarta semana, con mejoras continuas durante los siguientes meses a medida que el nuevo colágeno se forma. El resultado final se aprecia completamente después de unos meses, ¡y es un cambio que te encantará por su naturalidad!',
    },
    {
      question: '¿Cuántas sesiones necesito?',
      answer:
        'Dependerá de tu tipo de piel, edad y los objetivos que busques. Generalmente, se recomiendan entre una y tres sesiones iniciales, seguidas de un mantenimiento anual o cada dos años para prolongar los efectos.',
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
              Descubre el Secreto de una Piel Joven y Natural: Bioestimuladores
              de Colágeno
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-slate-200 drop-shadow-md">
              Rejuvenece desde adentro hacia afuera, sin cirugías ni resultados
              artificiales.
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
              ¿Sientes que tu piel ha perdido firmeza?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Con el paso de los años, es natural notar que la piel pierde
              elasticidad, aparecen las primeras líneas de expresión y el rostro
              ya no luce tan firme como antes. Esto se debe a que, a partir de
              los 25 o 30 años, nuestro cuerpo empieza a producir menos
              colágeno, la proteína encargada de darle soporte y estructura a la
              piel.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Si buscas una solución que vaya más allá de las cremas
              superficiales, pero no quieres recurrir a procedimientos
              invasivos, los bioestimuladores de colágeno son la respuesta que
              estabas buscando.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="#citas">
                Quiero una valoración <ArrowRight />
              </Link>
            </Button>
          </div>
          <div>
            <Placeholder
              className="rounded-xl shadow-2xl w-full aspect-square"
              text="Imagen de piel joven y firme"
            />
          </div>
        </section>

        {/* Section 2: What they are & Benefits */}
        <section id="que-son" className="scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Placeholder
                className="rounded-xl shadow-2xl w-full aspect-square"
                text="Diagrama del funcionamiento de bioestimuladores"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">
                ¿Qué son exactamente los bioestimuladores y cómo funcionan?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Imagina que pudieras "despertar" a las células de tu piel para
                que vuelvan a trabajar como lo hacían en su juventud. Eso es
                exactamente lo que hacen los bioestimuladores.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Son sustancias seguras y biocompatibles que se aplican mediante
                microinyecciones en áreas específicas. Una vez dentro de la
                piel, su función principal no es rellenar, sino activar a unas
                células llamadas fibroblastos, que son las "fábricas" naturales
                de colágeno y elastina de tu cuerpo.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Al reactivar esta producción, tu propia piel comienza un proceso
                de regeneración desde el interior, reconstruyendo la estructura
                que le da firmeza y elasticidad.
              </p>
            </div>
          </div>
          <div className="mt-20 text-center">
            <SectionTitleWithLines>
              <span className="text-foreground">Beneficios</span>{' '}
              <span className="text-primary">Clave</span>
            </SectionTitleWithLines>
            <h3 className="font-headline text-3xl md:text-4xl font-bold mt-2">
              Beneficios clave que te encantarán
            </h3>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-full mt-1">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-base text-muted-foreground">
                      {benefit}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Section 3: FAQ */}
        <section id="faq" className="scroll-mt-20 max-w-4xl mx-auto">
          <div className="text-center">
            <SectionTitleWithLines>
              <span className="text-foreground">Lo que debes</span>{' '}
              <span className="text-primary">Saber</span>
            </SectionTitleWithLines>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">
              Antes, Durante y Después del Tratamiento
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Tu tranquilidad y seguridad son lo más importante. Por eso, aquí
              resolvemos las dudas más frecuentes de nuestros pacientes.
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

        {/* Section 4: Safety */}
        <section id="seguridad" className="scroll-mt-20">
          <Card className="border-yellow-500/50 shadow-xl">
            <CardHeader className="text-center">
              <div className="flex justify-center">
                <ShieldCheck className="w-12 h-12 text-primary" />
              </div>
              <CardTitle className="font-headline text-3xl mt-2">
                Seguridad Ante Todo: Elige Siempre a un Profesional Cualificado
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg text-muted-foreground">
              <p>
                El éxito y la seguridad de tu tratamiento dependen directamente
                de la experiencia del profesional. Asegúrate siempre de acudir
                a un médico especializado con experiencia certificada en la
                aplicación de bioestimuladores.
              </p>
              <p>
                Un profesional cualificado no solo garantizará una técnica de
                inyección correcta para evitar complicaciones, sino que también
                utilizará productos de marcas líderes, aprobados por entidades
                como el Invima, asegurando que lo que se te aplica es seguro y
                efectivo.
              </p>
              <div className="mt-6 p-4 bg-destructive/10 border-l-4 border-destructive rounded-r-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-destructive" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-destructive">
                      <strong className="font-bold">
                        ¡Cuidado con las ofertas engañosas!
                      </strong>{' '}
                      Desconfía de precios excesivamente bajos o de centros no
                      médicos que ofrecen estos tratamientos, ya que podrían
                      usar productos no certificados o ser aplicados por
                      personal no cualificado, poniendo en riesgo tu salud.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section 5: CTA */}
        <section id="citas" className="scroll-mt-20">
          <Card className="relative overflow-hidden shadow-xl md:grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <Badge>Consulta Personalizada</Badge>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2 text-primary">
                ¿Listo/a para devolverle la juventud a tu piel?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Si buscas un rejuvenecimiento real, que respete tus facciones y
                te haga lucir una versión más fresca y radiante de ti mismo/a,
                los bioestimuladores de colágeno son tu mejor aliado.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8"
              >
                <a
                  href="https://wa.me/573122784757"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar por WhatsApp <WhatsAppIcon />
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
