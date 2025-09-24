import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Dna,
  Droplets,
  Syringe,
  Hand,
  Wind,
  Sparkles,
  AlertTriangle,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { cn } from '@/lib/utils';
import { SectionTitleWithLines } from '@/components/section-title-with-lines';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

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
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full bg-slate-900">
        <Placeholder className="absolute inset-0 opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-4 text-white">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold !leading-tight tracking-tight drop-shadow-lg mt-2">
              Medicina Preventiva: Facial y Corporal
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-slate-200 drop-shadow-md">
              Nutre, hidrata y define tu piel desde adentro para prevenir los
              signos del envejecimiento.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 sm:py-24 space-y-24">
        <Tabs defaultValue="facial" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-lg mx-auto h-auto">
            <TabsTrigger value="facial" className="py-2 text-base">
              Preventiva Facial
            </TabsTrigger>
            <TabsTrigger value="corporal" className="py-2 text-base">
              Preventiva Corporal
            </TabsTrigger>
          </TabsList>
          <TabsContent value="facial" className="mt-12">
            <div className="space-y-24">
              <section id="intro-facial">
                <div className="text-center max-w-3xl mx-auto">
                  <h2 className="font-headline text-4xl md:text-5xl font-bold">
                    Guía Completa de Rejuvenecimiento:{' '}
                    <span className="text-primary">
                      Transforma tu Piel Sin Cirugía
                    </span>
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Descubre los tratamientos más innovadores para hidratar,
                    revitalizar, dar volumen y regenerar tu piel. Encuentra la
                    solución perfecta para ti.
                  </p>
                  <p className="mt-6 text-muted-foreground">
                    En el mundo de la medicina estética, existen muchas opciones
                    para lucir una piel más joven, saludable y radiante sin
                    necesidad de pasar por el quirófano. Desde tratamientos
                    que hidratan en profundidad hasta aquellos que reponen el
                    volumen perdido, hay una solución para cada necesidad.
                  </p>
                  <p className="mt-4 text-muted-foreground">
                    En esta guía, te explicamos de manera sencilla los
                    tratamientos más efectivos y demandados, organizados en dos
                    grandes grupos para que identifiques fácilmente cuál se
                    adapta a lo que buscas:
                  </p>
                   <ul className="mt-4 text-left space-y-2 inline-block">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0"/>
                            <span><strong className="text-foreground">Hidratación y Calidad de la Piel:</strong> Para quienes buscan luminosidad, mejorar la textura y una piel visiblemente más sana y jugosa.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0"/>
                            <span><strong className="text-foreground">Relleno y Definición con Ácido Hialurónico:</strong> Para tratar arrugas, reponer volumen perdido y definir facciones como labios, pómulos o surcos faciales.</span>
                        </li>
                    </ul>
                </div>
              </section>

              <section id="hidratacion-calidad" className="scroll-mt-20">
                <SectionTitleWithLines>
                  <span className="text-foreground">Hidratación Profunda y</span>{' '}
                  <span className="text-primary">Calidad de la Piel</span>
                </SectionTitleWithLines>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground text-center">
                  Estos tratamientos se enfocan en nutrir tu piel desde adentro
                  para devolverle la vitalidad, el brillo y la suavidad que ha
                  perdido con el tiempo.
                </p>
                <div className="mt-12 space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Syringe className="w-7 h-7 text-primary" /> Mesoterapia
                        y Técnicas de Aplicación (Microneedling)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      <p>
                        La mesoterapia es una técnica que consiste en aplicar
                        microinyecciones en la piel para administrar un cóctel de
                        sustancias beneficiosas directamente donde se necesitan.
                        Estos cócteles pueden incluir vitaminas, minerales,
                        aminoácidos y ácido hialurónico, diseñados para
                        revitalizar e hidratar.
                      </p>
                      <p className="mt-2">
                        <strong className="text-foreground">
                          Microneedling (o Micropunción):
                        </strong>{' '}
                        Es una técnica que utiliza un dispositivo con microagujas
                        muy finas para crear canales microscópicos en la piel.
                        Esto no solo estimula la producción natural de colágeno,
                        sino que también permite que los productos aplicados (como
                        el PDRN o vitaminas) penetren mucho más profundo y sean más
                        efectivos.
                      </p>
                      <Badge variant="secondary" className="mt-4">
                        Ideal para: Personas que buscan una mejora general en la
                        luminosidad, hidratación y textura de la piel.
                      </Badge>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Droplets className="w-7 h-7 text-primary" />{' '}
                        Skinboosters (Hidratación Intensa con Ácido Hialurónico)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      <p>
                        Los Skinboosters son un tipo de tratamiento enfocado en la
                        hidratación profunda. Se utilizan microinyecciones de un
                        ácido hialurónico de baja densidad que no busca dar
                        volumen, sino captar y retener agua en las capas internas
                        de la piel.
                      </p>
                      <p className="mt-2">
                        <strong className="text-foreground">
                          ¿Qué puedes esperar?
                        </strong>{' '}
                        Una piel visiblemente más hidratada, jugosa, elástica y con
                        un brillo natural. Suaviza líneas finas y mejora la
                        calidad general de la piel en rostro, cuello, escote y
                        manos. Sus efectos suelen durar entre 6 y 12 meses.
                      </p>
                      <Badge variant="secondary" className="mt-4">
                        Ideal para: Pieles deshidratadas, apagadas o que empiezan
                        a mostrar los primeros signos de envejecimiento.
                      </Badge>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Dna className="w-7 h-7 text-primary" /> PDRN (Conocido
                        como "Esperma de Salmón")
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      <p>
                        El PDRN (polideoxirribonucleótido) es un potente
                        regenerador celular extraído del tejido gonadal del salmón.
                        Aunque su apodo popular es "esperma de salmón", el producto
                        utilizado en medicina estética es un fragmento de ADN
                        purificado y seguro.
                      </p>
                      <p className="mt-2">
                        <strong className="text-foreground">¿Cómo funciona?</strong>{' '}
                        Actúa a nivel celular estimulando la reparación de los
                        tejidos, la producción de colágeno, mejorando la
                        elasticidad y reduciendo la inflamación.
                      </p>
                      <p className="mt-2">
                        <strong className="text-foreground">Beneficios:</strong>{' '}
                        Mejora la firmeza, reduce líneas finas, atenúa cicatrices
                        de acné y devuelve la luminosidad a la piel. Se aplica
                        mediante mesoterapia o microneedling para potenciar su
                        efecto.
                      </p>
                      <Badge variant="secondary" className="mt-4">
                        Ideal para: Pieles que necesitan una reparación profunda,
                        mejorar cicatrices o un extra de rejuvenecimiento.
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section id="rellenos" className="scroll-mt-20">
                <SectionTitleWithLines>
                  <span className="text-foreground">
                    Rellenos con Ácido Hialurónico –
                  </span>{' '}
                  <span className="text-primary">Volumen y Definición</span>
                </SectionTitleWithLines>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground text-center">
                  El ácido hialurónico es una sustancia que nuestro cuerpo produce
                  de forma natural para mantener la piel hidratada y con volumen,
                  pero su producción disminuye con la edad. Los rellenos dérmicos
                  utilizan una versión en gel de esta molécula para restaurar o
                  añadir volumen de forma segura y con resultados inmediatos.
                </p>
                <div className="mt-12 grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Ácido Hialurónico para Rostro (Surcos, Pómulos)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      <p>
                        Se utiliza para corregir arrugas estáticas (las que se ven
                        con el rostro en reposo), reponer el volumen perdido en
                        zonas como los pómulos o el mentón, y suavizar surcos como
                        los nasogenianos ("líneas de la sonrisa").
                      </p>
                      <p className="mt-2">
                        <strong className="text-foreground">Resultados:</strong> El
                        efecto es inmediato, logrando un aspecto más descansado y
                        juvenil. La duración es variable, pero puede prolongarse
                        varios meses.
                      </p>
                      <Badge variant="secondary" className="mt-4">
                        Ideal para: Quienes buscan corregir arrugas profundas,
                        restaurar volumen en mejillas o definir el contorno
                        facial.
                      </Badge>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Ácido Hialurónico en Labios</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      <p>
                        Es uno de los tratamientos más demandados. Permite no solo
                        aumentar el volumen, sino también definir el contorno,
                        corregir asimetrías e hidratar profundamente los labios
                        para que luzcan más saludables y jóvenes.
                      </p>
                      <p className="mt-2">
                        <strong className="text-foreground">
                          ¿Qué puedes esperar?
                        </strong>{' '}
                        Un resultado natural y adaptado a tus facciones. El
                        objetivo es embellecer, no transformar.
                      </p>
                      <Badge variant="secondary" className="mt-4">
                        Ideal para: Personas que desean labios más definidos,
                        voluminosos o simplemente revitalizados.
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              </section>

               <section id="decision" className="scroll-mt-20 max-w-3xl mx-auto">
                    <Card className="p-6 md:p-8 text-center shadow-lg border-primary/20">
                        <CardHeader className="p-0">
                            <CardTitle className="font-headline text-2xl text-primary">Tu Belleza, Tu Decisión – La Importancia de una Valoración Profesional</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 mt-4 text-muted-foreground">
                            <p>Cada piel es única y cada rostro tiene sus propias necesidades. La clave para un resultado exitoso y seguro es una valoración personalizada con un médico especialista. Un profesional cualificado podrá evaluar tu piel, entender tus objetivos y recomendarte el tratamiento o la combinación de técnicas que te ofrezca los mejores resultados.</p>
                        </CardContent>
                    </Card>
                </section>

            </div>
          </TabsContent>
          <TabsContent value="corporal" className="mt-12">
            <div className="space-y-24">
              <section id="intro-corporal">
                <div className="text-center max-w-3xl mx-auto">
                  <h2 className="font-headline text-4xl md:text-5xl font-bold">
                    Cuida y Previene: La Guía Esencial de{' '}
                    <span className="text-primary">
                      Tratamientos Corporales Sin Cirugía
                    </span>
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Descubre cómo los masajes reductores, la carboxiterapia y la
                    vitamina C pueden ayudarte a mantener una figura armoniosa y
                    una piel saludable a largo plazo.
                  </p>
                  <p className="mt-6 text-muted-foreground">
                    A menudo asociamos los tratamientos corporales con la idea de "corregir" algo que no nos gusta. Pero, ¿y si te dijéramos que la clave es la prevención? Adoptar un enfoque preventivo significa actuar antes de que los signos del tiempo, como la flacidez o la celulitis avanzada, se instalen.
                  </p>
                </div>
              </section>

              <section id="masajes-reductores">
                <SectionTitleWithLines>
                  <span className="text-foreground">
                    Masajes Reductores – El Poder del
                  </span>{' '}
                  <span className="text-primary">Moldeado Manual</span>
                </SectionTitleWithLines>
                <div className="mt-12 space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Hand className="w-7 h-7 text-primary" /> ¿Qué son y cómo
                        funcionan?
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground space-y-3">
                      <p>
                        Los masajes reductores son una técnica manual en la que se
                        aplica una presión fuerte y un ritmo rápido sobre zonas
                        específicas para movilizar la grasa y facilitar su
                        eliminación natural.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          <strong className="text-foreground">
                            Mejoran la circulación
                          </strong>{' '}
                          sanguínea y linfática para eliminar toxinas y líquidos
                          retenidos.
                        </li>
                        <li>
                          <strong className="text-foreground">
                            Combaten la flacidez y la celulitis
                          </strong>
                          , dando a la piel un aspecto más liso y firme.
                        </li>
                        <li>
                          <strong className="text-foreground">
                            Preparan el cuerpo
                          </strong>{' '}
                          para otros tratamientos al ablandar el tejido adiposo.
                        </li>
                      </ul>
                      <Alert>
                        <AlertTriangle className="h-4 w-4" />
                        <AlertTitle>Importante</AlertTitle>
                        <AlertDescription>
                          Los masajes reductores no son una solución mágica. Son más efectivos con una alimentación
                          saludable y ejercicio. No se recomiendan en casos de
                          piel sensible, hipertensión, diabetes, embarazo o
                          lactancia.
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section id="carboxiterapia">
                <SectionTitleWithLines>
                  <span className="text-foreground">
                    Carboxiterapia – Oxigena y
                  </span>{' '}
                  <span className="text-primary">Regenera tus Tejidos</span>
                </SectionTitleWithLines>
                <div className="mt-12 space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Wind className="w-7 h-7 text-primary" /> ¿Qué es y para
                        qué sirve?
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground space-y-3">
                      <p>
                        Es un procedimiento médico que aplica dióxido de carbono
                        (CO₂) medicinal bajo la piel para mejorar la circulación,
                        estimular la producción de colágeno y facilitar la
                        eliminación de grasa.
                      </p>
                      <p>
                        Es uno de los tratamientos más efectivos para la
                        celulitis (PEFE), la grasa localizada, la flacidez y las
                        estrías.
                      </p>
                      <p>
                        <strong className="text-foreground">
                          ¿Qué esperar?
                        </strong>{' '}
                        Se puede sentir un ligero ardor durante la inyección, pero
                        es temporal. Se recomiendan de 10 a 12 sesiones (1-3 por
                        semana). Es un procedimiento muy seguro realizado por un
                        médico.
                      </p>
                      <Badge variant="secondary">
                        Contraindicaciones: Insuficiencia renal/respiratoria,
                        embarazo, infecciones activas.
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section id="vitamina-c">
                <SectionTitleWithLines>
                  <span className="text-foreground">
                    Vitamina C en Glúteos – Firmeza y
                  </span>{' '}
                  <span className="text-primary">Calidad para tu Piel</span>
                </SectionTitleWithLines>
                <div className="mt-12 space-y-8">
                  <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle className="font-bold">
                      ¡Cuidado con los Mitos Peligrosos!
                    </AlertTitle>
                    <AlertDescription>
                      La vitamina C NO es un material de relleno y NO aumenta el
                      volumen de los glúteos. Quienes lo ofrecen como tal
                      probablemente usan biopolímeros (silicona líquida),
                      sustancias que causan daños irreversibles.
                    </AlertDescription>
                  </Alert>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Sparkles className="w-7 h-7 text-primary" /> Beneficios
                        Reales y Aplicación Segura
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground space-y-3">
                      <p>
                        La verdadera aplicación de la vitamina C inyectable en
                        glúteos es un tratamiento preventivo que mejora la
                        calidad de la piel.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          <strong className="text-foreground">
                            Estimula el colágeno:
                          </strong>{' '}
                          Mejora la firmeza, tonicidad y elasticidad.
                        </li>
<li>
                          <strong className="text-foreground">
                            Mejora la textura:
                          </strong>{' '}
                          Ayuda a que la piel luzca más lisa y uniforme.
                        </li>
                        <li>
                          <strong className="text-foreground">
                            Combate la flacidez:
                          </strong>{' '}
                          Es una excelente herramienta preventiva.
                        </li>
                      </ul>
                      <p>
                        <strong className="text-foreground">
                          Aplicación y cuidados:
                        </strong>{' '}
                        Se aplica con microinyecciones. Es crucial que el
                        producto tenga registro sanitario (como VitaCNova con
                        Invima) y sea aplicado por un médico. Se recomienda no
                        hacer ejercicio el mismo día, pero sí en días posteriores
                        para potenciar el efecto.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <section id="citas" className="scroll-mt-20">
          <Card className="relative overflow-hidden shadow-xl md:grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <Badge>Consulta Personalizada</Badge>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2 text-primary">
                Da el Primer Paso Hacia una Piel Radiante
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Agenda una cita para una valoración personalizada y descubre
                cómo estos tratamientos pueden ayudarte a lograr una piel más
                sana, hidratada y joven.
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
              <Placeholder
                className="absolute inset-0"
                text="Imagen de piel radiante y saludable"
              />
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
