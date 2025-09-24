import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  CheckCircle,
  Stethoscope,
  Eye,
  Wind,
  Droplets,
  Brain,
  Bone,
  ShieldAlert,
  Info,
  X,
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

export default function BotoxTerapeuticoPage() {
  const safetyPoints = [
    {
      title: 'Acción local y precisa',
      description:
        'El efecto se concentra únicamente en el músculo tratado, sin afectar otras áreas del cuerpo.',
    },
    {
      title: 'No es un daño permanente',
      description:
        'No causa ninguna lesión física a los nervios ni a los músculos. Su efecto es temporal y dura varios meses.',
    },
    {
      title: 'Tratamiento seguro',
      description:
        'Cuando es administrado por un médico con experiencia, es un procedimiento con un comportamiento predecible y muy pocos efectos secundarios.',
    },
  ];

  const conditions = [
    {
      icon: Eye,
      title: 'Espasmos musculares involuntarios',
      description:
        'Como el blefaroespasmo (contracción persistente de los párpados) o el espasmo hemifacial (movimientos en un lado del rostro).',
    },
    {
      icon: Wind,
      title: 'Distonía cervical (tortícolis espasmódica)',
      description:
        'Ayuda a relajar los músculos del cuello que provocan posturas dolorosas y anormales.',
    },
    {
      icon: Stethoscope,
      title: 'Espasticidad',
      description:
        'Reduce la rigidez muscular severa en brazos, manos o piernas, a menudo causada por parálisis cerebral en niños o como secuela de un accidente cerebrovascular (ACV) en adultos.',
    },
    {
      icon: Droplets,
      title: 'Hiperhidrosis (sudoración excesiva)',
      description:
        'Solución muy eficaz para la sudoración severa en axilas, manos y pies. La toxina relaja la actividad de las glándulas sudoríparas, reduciendo drásticamente la producción de sudor.',
    },
    {
      icon: Brain,
      title: 'Migrañas crónicas',
      description:
        'Aplicación reconocida para prevenir y reducir la frecuencia e intensidad de los dolores de cabeza crónicos.',
    },
    {
      icon: Bone,
      title: 'Dolores musculares crónicos',
      description:
        'Se utiliza en algias vertebrales (dolores de espalda y cuello) causadas por contracturas que no responden a otros tratamientos.',
    },
  ];

  const faqs = [
    {
      question: '¿Quién puede administrar el tratamiento?',
      answer:
        'Esto es fundamental: la toxina botulínica terapéutica debe ser administrada exclusivamente por médicos con experiencia y formación específica en su aplicación, como neurólogos, traumatólogos, oftalmólogos o especialistas en medicina física y rehabilitación.',
    },
    {
      question: '¿Cómo es una sesión?',
      answer:
        'El médico identificará mediante palpación los músculos que necesitan ser tratados. Se aplicarán pequeñas inyecciones directamente en los músculos seleccionados. El procedimiento es rápido y se realiza en el consultorio. En la mayoría de los casos no se necesita anestesia, aunque se puede usar frío local para minimizar la molestia.',
    },
    {
      question: '¿Cuándo veré los resultados y cuánto duran?',
      answer:
        'El beneficio clínico suele empezar a notarse durante la primera semana, alcanzando su efecto máximo entre los 7 y 10 días posteriores. Los efectos duran generalmente de 3 a 6 meses, dependiendo de la condición tratada y de cada paciente. Pasado este tiempo, el tratamiento puede repetirse para mantener los beneficios.',
    },
    {
      question: '¿Cuáles son los efectos secundarios?',
      answer:
        'Es un tratamiento muy seguro y bien tolerado. El efecto adverso más común es una debilidad excesiva pero temporal en el músculo inyectado o en músculos cercanos. Otros efectos leves pueden ser dolor en el punto de inyección o algún pequeño hematoma, que desaparecen en pocos días. Las complicaciones graves son extremadamente raras cuando el procedimiento es realizado por un experto.',
    },
  ];

  const contraindications = [
    'Embarazo o periodo de lactancia.',
    'Personas con enfermedades neuromusculares como miastenia gravis o esclerosis lateral amiotrófica (ELA).',
    'Alergia conocida a la albúmina (proteína del huevo) o a alguno de los componentes de la fórmula.',
    'Infecciones activas en la zona a tratar.',
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
              Más Allá de la Belleza: Cómo la Toxina Botulínica Puede Mejorar tu
              Calidad de Vida
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-slate-200 drop-shadow-md">
              Descubre los usos terapéuticos de un tratamiento seguro y eficaz
              para aliviar condiciones médicas que afectan tu día a día.
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
              ¿Sabías que el "Botox" es también un medicamento?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Cuando escuchas "toxina botulínica", probablemente piensas en el
              tratamiento de arrugas y rejuvenecimiento facial. Si bien es
              mundialmente famoso por sus aplicaciones estéticas, su capacidad
              para relajar músculos de forma controlada lo convierte en una
              poderosa herramienta médica para tratar diversas condiciones de
              salud que pueden ser dolorosas o limitantes.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Este tratamiento, administrado por médicos especialistas, va más
              allá de la superficie, ofreciendo alivio y una mejora
              significativa en la calidad de vida de miles de personas.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="#condiciones">
                Ver Condiciones Tratables <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
          <div>
            <Placeholder
              className="rounded-xl shadow-2xl w-full aspect-square"
              text="Imagen de médico preparando tratamiento"
            />
          </div>
        </section>

        {/* Section 2: How it works */}
        <section id="como-funciona" className="scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Placeholder
                className="rounded-xl shadow-2xl w-full aspect-square"
                text="Diagrama de acción de la toxina botulínica"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">
                ¿Cómo funciona la toxina botulínica en tratamientos
                terapéuticos?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                La toxina botulínica es una neurotoxina purificada que, aplicada
                en dosis muy pequeñas y controladas, actúa directamente en la
                unión entre los nervios y los músculos. Su mecanismo es simple
                pero muy efectivo: bloquea de forma temporal la liberación de
                acetilcolina, la sustancia que transmite la orden de contracción
                desde el nervio al músculo. Al interrumpir esta señal, el
                músculo que está hiperactivo o causando un problema se relaja de
                manera segura.
              </p>
            </div>
          </div>
          <div className="mt-20 text-center">
            <SectionTitleWithLines>
              <span className="text-foreground">Puntos clave</span>{' '}
              <span className="text-primary">para tu tranquilidad</span>
            </SectionTitleWithLines>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {safetyPoints.map((point, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full mt-1">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{point.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Conditions */}
        <section id="condiciones" className="scroll-mt-20 text-center">
          <SectionTitleWithLines>
            <span className="text-foreground">Aplicaciones</span>{' '}
            <span className="text-primary">Terapéuticas</span>
          </SectionTitleWithLines>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">
            ¿Qué condiciones médicas se pueden tratar?
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Gracias a su capacidad para relajar la musculatura de forma
            controlada, la toxina botulínica se ha convertido en un tratamiento
            de primera línea para diversas patologías.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {conditions.map((condition, index) => (
              <Card key={index} className="p-6 flex flex-col items-start">
                <div className="bg-primary/10 text-primary p-3 rounded-full mb-4">
                  <condition.icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-xl">{condition.title}</h3>
                <p className="text-muted-foreground mt-2 flex-1">
                  {condition.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Section 4: FAQ */}
        <section id="faq" className="scroll-mt-20 max-w-4xl mx-auto">
          <div className="text-center">
            <SectionTitleWithLines>
              <span className="text-foreground">Lo que debes</span>{' '}
              <span className="text-primary">Saber</span>
            </SectionTitleWithLines>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">
              Sobre el Procedimiento
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Entendemos que someterse a un tratamiento médico puede generar
              dudas. Aquí resolvemos lo que a nuestros pacientes más les
              importa.
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

        {/* Section 5: Safety */}
        <section id="seguridad" className="scroll-mt-20">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <div className="flex justify-center">
                <ShieldAlert className="w-12 h-12 text-destructive" />
              </div>
              <CardTitle className="font-headline text-3xl mt-2">
                ¿Eres Candidato? Consideraciones Importantes
              </CardTitle>
              <p className="text-muted-foreground pt-2">
                Aunque es un procedimiento seguro, no es para todos. Tu médico
                evaluará tu historial clínico para confirmar que eres un buen
                candidato.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-semibold text-lg">
                El tratamiento está contraindicado en los siguientes casos:
              </h4>
              <ul className="space-y-2">
                {contraindications.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <X className="w-4 h-4 mr-2 mt-1 shrink-0 text-destructive" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>¡Recuerda!</AlertTitle>
                <AlertDescription>
                  Siempre informa a tu médico sobre cualquier medicamento que
                  estés tomando, especialmente antibióticos, relajantes
                  musculares o anticoagulantes.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section>

        {/* Section 6: CTA */}
        <section id="citas" className="scroll-mt-20">
          <Card className="relative overflow-hidden shadow-xl md:grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <Badge>Consulta Especializada</Badge>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2 text-primary">
                Da el Primer Paso Hacia tu Bienestar
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Si sufres de alguna de estas condiciones, la toxina botulínica
                terapéutica podría ser la solución que te devuelva la comodidad
                y la confianza. No tienes que resignarte a vivir con dolor o
                limitaciones.
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
