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
  CheckCircle,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { cn } from '@/lib/utils';
import { SectionTitleWithLines } from '@/components/section-title-with-lines';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Image from 'next/image';
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

export default function MedicinaEsteticaAvanzadaPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full bg-slate-900">
        <div className="absolute inset-0 opacity-30">
          <Placeholder seed="preventive-hero" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-4 text-white">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold !leading-tight tracking-tight drop-shadow-lg mt-2">
              Medicina Estética Avanzada: Facial y Corporal
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
              Facial Avanzado
            </TabsTrigger>
            <TabsTrigger value="corporal" className="py-2 text-base">
              Corporal Avanzado
            </TabsTrigger>
          </TabsList>
          <TabsContent value="facial" className="mt-12">
            <div className="space-y-24">
              <section
                id="intro-facial"
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className="text-left">
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
                  <div className="mt-8 text-lg text-muted-foreground space-y-4">
                    <p>
                      En el mundo de la medicina estética, existen muchas opciones
                      para lucir una piel más joven, saludable y radiante sin
                      necesidad de pasar por el quirófano.
                    </p>
                    <p>
                      En esta guía, te explicamos de manera sencilla los
                      tratamientos más efectivos y demandados. Los hemos organizado en
                      dos grandes grupos para que puedas identificar fácilmente
                      cuál se adapta mejor a lo que buscas:
                    </p>
                  </div>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                      <div>
                        <h3 className="font-bold text-foreground">
                          Hidratación y Calidad de la Piel
                        </h3>
                        <p className="text-muted-foreground">
                          Para quienes buscan luminosidad, mejorar la textura y una
                          piel visiblemente más sana y jugosa.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                      <div>
                        <h3 className="font-bold text-foreground">
                          Relleno y Definición con Ácido Hialurónico
                        </h3>
                        <p className="text-muted-foreground">
                          Para tratar arrugas, reponer volumen perdido y definir
                          facciones como labios, pómulos o surcos faciales.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="w-full aspect-[4/5] object-cover">
                  <Placeholder className="rounded-xl shadow-2xl" seed="rejuvenation-guide" />
                </div>
              </section>

              <section id="hidratacion-calidad" className="scroll-mt-20">
                <SectionTitleWithLines>
                  <h2 className="text-foreground font-headline text-3xl font-bold text-center">Hidratación Profunda y{' '}
                  <span className="text-primary">Calidad de la Piel</span></h2>
                </SectionTitleWithLines>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground text-center">
                  Estos tratamientos se enfocan en nutrir tu piel desde adentro
                  para devolverle la vitalidad, el brillo y la suavidad que ha
                  perdido con el tiempo.
                </p>
                <div className="mt-12 space-y-16">
                  
                  {/* Mesoterapia */}
                   <div className="relative pt-16">
                    <div className="hidden md:block absolute top-0 left-0 h-[320px] w-[320px] z-10">
                      <Placeholder seed="mesoterapia-facial" className="rounded-full !w-full !h-full" />
                    </div>
                    <div className="p-6 md:pl-[180px] text-left md:ml-[160px]">
                      <h3 className="flex items-center gap-3 font-headline text-2xl font-bold">
                        <Syringe className="w-7 h-7 text-primary" /> Mesoterapia y Microneedling
                      </h3>
                      <div className="text-muted-foreground space-y-4 pt-4">
                        <p>
                        La mesoterapia es una técnica que consiste en aplicar
                        microinyecciones en la piel para administrar un cóctel de
                        sustancias beneficiosas directamente donde se necesitan.
                        </p>
                        <div>
                        <strong className="text-foreground">
                            Microneedling (o Micropunción):
                        </strong>{' '}
                        <p className="mt-1">
                            Es una técnica que utiliza un dispositivo con microagujas
                            muy finas para crear canales microscópicos en la piel.
                            Esto no solo estimula la producción natural de colágeno,
                            sino que también permite que los productos aplicados penetren mucho más profundo.
                        </p>
                        </div>
                        <p className="text-sm font-medium text-primary pt-2">
                        Ideal para: Personas que buscan una mejora general en la
                        luminosidad, hidratación y textura de la piel.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skinboosters */}
                  <div className="relative pt-16">
                      <div className="hidden md:block absolute top-0 right-0 h-[320px] w-[320px] z-10">
                        <Placeholder seed="skinbooster-treatment" className="rounded-full !w-full !h-full"/>
                      </div>
                      <div className="p-6 md:pr-[180px] text-left md:mr-[160px]">
                        <h3 className="flex items-center gap-3 font-headline text-2xl font-bold">
                          <Droplets className="w-7 h-7 text-primary" />{' '}
                          Skinboosters
                        </h3>
                        <div className="text-muted-foreground space-y-4 pt-4">
                              <p>
                              Los Skinboosters son un tipo de tratamiento enfocado en la
                              hidratación profunda. Se utilizan microinyecciones de un
                              ácido hialurónico de baja densidad que no busca dar
                              volumen, sino captar y retener agua en las capas internas
                              de la piel.
                              </p>
                              <div>
                              <strong className="text-foreground">
                                  ¿Qué puedes esperar?
                              </strong>{' '}
                              <p className="mt-1">
                                  Una piel visiblemente más hidratada, jugosa, elástica y con
                                  un brillo natural. Suaviza líneas finas y mejora la
                                  calidad general de la piel. Sus efectos suelen durar entre 6 y 12 meses.
                              </p>
                              </div>
                              <p className="text-sm font-medium text-primary pt-2">
                              Ideal para: Pieles deshidratadas, apagadas o que empiezan
                              a mostrar los primeros signos de envejecimiento.
                              </p>
                        </div>
                      </div>
                  </div>

                  {/* PDRN */}
                   <div className="relative pt-16">
                    <div className="hidden md:block absolute top-0 left-0 h-[320px] w-[320px] z-10">
                      <Placeholder seed="pdrn-collagen" className="rounded-full !w-full !h-full" />
                    </div>
                    <div className="p-6 md:pl-[180px] text-left md:ml-[160px]">
                        <h3 className="flex items-center gap-3 font-headline text-2xl font-bold">
                          <Dna className="w-7 h-7 text-primary" /> PDRN (Esperma de Salmón)
                        </h3>
                        <div className="text-muted-foreground space-y-4 pt-4">
                            <p>
                            El PDRN (polideoxirribonucleótido) es un potente
                            regenerador celular extraído del tejido gonadal del salmón.
                            Es un fragmento de ADN purificado y seguro.
                            </p>
                            <div>
                            <strong className="text-foreground">¿Cómo funciona?</strong>{' '}
                            <p className="mt-1">
                                Actúa a nivel celular estimulando la reparación de los
                                tejidos, la producción de colágeno, mejorando la
                                elasticidad y reduciendo la inflamación.
                            </p>
                            </div>
                            <div>
                            <strong className="text-foreground">Beneficios:</strong>{' '}
                            <p className="mt-1">
                                Mejora la firmeza, reduce líneas finas, atenúa cicatrices
                                de acné y devuelve la luminosidad a la piel.
                            </p>
                            </div>
                            <p className="text-sm font-medium text-primary pt-2">
                            Ideal para: Pieles que necesitan una reparación profunda,
                            mejorar cicatrices o un extra de rejuvenecimiento.
                            </p>
                        </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section: Videos */}
              <section id="videos-facial" className="scroll-mt-20">
                <div className="text-center">
                  <SectionTitleWithLines>
                    <span className="text-foreground">Resultados que</span>{' '}
                    <span className="text-primary">Hablan</span>
                  </SectionTitleWithLines>
                  <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">
                    Testimonios de Pacientes
                  </h2>
                  <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    Ve cómo nuestros tratamientos faciales avanzados han rejuvenecido la piel de nuestros pacientes.
                  </p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                  <div className="w-full aspect-video rounded-lg shadow-lg overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/LXb3EKWsInQ"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </section>

              <section id="rellenos" className="scroll-mt-20">
                <SectionTitleWithLines>
                  <h2 className="text-foreground font-headline text-3xl font-bold text-center">
                    Rellenos con Ácido Hialurónico –{' '}
                  <span className="text-primary">Volumen y Definición</span></h2>
                </SectionTitleWithLines>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground text-center">
                  El ácido hialurónico es una sustancia que nuestro cuerpo produce
                  de forma natural para mantener la piel hidratada y con volumen,
                  pero su producción disminuye con la edad. Los rellenos dérmicos
                  utilizan una versión en gel de esta molécula para restaurar o
                  añadir volumen de forma segura y con resultados inmediatos.
                </p>
                <div className="mt-12 grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <div className="w-full aspect-square">
                        <Placeholder className="rounded-xl shadow-2xl" seed="facial-filler"/>
                    </div>
                    <div className='space-y-8 text-left'>
                      <div className="p-6">
                        <h3 className="text-xl font-bold">
                          Ácido Hialurónico para Rostro (Surcos, Pómulos)
                        </h3>
                        <div className="text-muted-foreground space-y-4 mt-4">
                          <p>
                            Se utiliza para corregir arrugas estáticas (las que se ven
                            con el rostro en reposo), reponer el volumen perdido en
                            zonas como los pómulos o el mentón, y suavizar surcos como
                            los nasogenianos ("líneas de la sonrisa").
                          </p>
                          <div>
                            <strong className="text-foreground">Resultados:</strong>
                            <p className="mt-1">
                              El efecto es inmediato, logrando un aspecto más descansado y
                              juvenil. La duración es variable, pero puede prolongarse
                              varios meses.
                            </p>
                          </div>
                           <p className="text-sm font-medium text-primary pt-2">
                            Ideal para: Quienes buscan corregir arrugas profundas,
                            restaurar volumen en mejillas o definir el contorno
                            facial.
                          </p>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold">Ácido Hialurónico en Labios</h3>
                        <div className="text-muted-foreground space-y-4 mt-4">
                          <p>
                            Es uno de los tratamientos más demandados. Permite no solo
                            aumentar el volumen, sino también definir el contorno,
                            corregir asimetrías e hidratar profundamente los labios
                            para que luzcan más saludables y jóvenes.
                          </p>
                          <div>
                            <strong className="text-foreground">
                              ¿Qué puedes esperar?
                            </strong>{' '}
                            <p className="mt-1">
                              Un resultado natural y adaptado a tus facciones. El
                              objetivo es embellecer, no transformar.
                            </p>
                          </div>
                           <p className="text-sm font-medium text-primary pt-2">
                            Ideal para: Personas que desean labios más definidos,
                            voluminosos o simplemente revitalizados.
                          </p>
                        </div>
                      </div>
                    </div>
                </div>
              </section>

              <section id="decision-facial" className="scroll-mt-20 max-w-3xl mx-auto text-center">
                <div className="p-6 md:p-8">
                  <div className="p-0">
                    <h2 className="font-headline text-2xl text-primary">
                      Tu Belleza, Tu Decisión – La Importancia de una Valoración
                      Profesional
                    </h2>
                  </div>
                  <div className="p-0 mt-4 text-muted-foreground">
                    <p>
                      Cada piel es única y cada rostro tiene sus propias
                      necesidades. La clave para un resultado exitoso y seguro es
                      una valoración personalizada con un médico especialista. Un
                      profesional cualificado podrá evaluar tu piel, entender tus
                      objetivos y recomendarte el tratamiento o la combinación de
                      técnicas que te ofrezca los mejores resultados.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </TabsContent>
          <TabsContent value="corporal" className="mt-12">
            <div className="space-y-24">
              <section id="intro-corporal" className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <h2 className="font-headline text-4xl md:text-5xl font-bold">
                    Cuida y Previene: La Guía Esencial de{' '}
                    <span className="text-primary">
                      Tratamientos Corporales Avanzados
                    </span>
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Descubre cómo los masajes reductores, la carboxiterapia y la
                    vitamina C pueden ayudarte a mantener una figura armoniosa y
                    una piel saludable a largo plazo.
                  </p>
                   <div className='mt-8 text-lg text-muted-foreground space-y-4'>
                    <p>
                        A menudo asociamos los tratamientos corporales con la idea de "corregir" algo que no nos gusta. Pero, ¿y si te dijéramos que la clave es la prevención? Adoptar un enfoque preventivo significa actuar antes de que los signos del tiempo, como la flacidez o la celulitis avanzada, se instalen.
                    </p>
                </div>
                </div>
                 <div className="w-full aspect-square">
                  <Placeholder className="rounded-xl shadow-2xl" seed="body-treatment" />
                 </div>
              </section>

              <section id="masajes-reductores" className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="order-2 md:order-1 w-full aspect-square">
                  <Placeholder className="rounded-xl shadow-2xl" seed="reducing-massage" />
                </div>
                <div className="order-1 md:order-2 text-left">
                 <SectionTitleWithLines>
                  <h2 className="text-foreground font-headline text-3xl font-bold">
                    Masajes Reductores –{' '}
                  <span className="text-primary">Moldeado Manual</span></h2>
                </SectionTitleWithLines>
                    <div className='mt-12 p-6'>
                        <h3 className="flex items-center gap-3 text-xl font-bold">
                            <Hand className="w-7 h-7 text-primary" /> ¿Qué son y cómo
                            funcionan?
                        </h3>
                        <div className="text-muted-foreground space-y-3 mt-4">
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
                        </div>
                    </div>
                </div>
              </section>

              <section id="carboxiterapia" className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="text-left">
                    <SectionTitleWithLines>
                        <h2 className="text-foreground font-headline text-3xl font-bold">
                            Carboxiterapia –{' '}
                        <span className="text-primary">Oxigena y Regenera</span></h2>
                    </SectionTitleWithLines>
                    <div className='mt-12 p-6'>
                        <h3 className="flex items-center gap-3 text-xl font-bold">
                            <Wind className="w-7 h-7 text-primary" /> ¿Qué es y para
                            qué sirve?
                        </h3>
                        <div className="text-muted-foreground space-y-3 mt-4">
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
                        </div>
                    </div>
                 </div>
                 <div className='w-full aspect-square'>
                    <Placeholder className="rounded-full shadow-2xl" seed="carboxytherapy-image" />
                 </div>
              </section>

              <section id="vitamina-c">
                <SectionTitleWithLines>
                  <h2 className="text-foreground font-headline text-3xl font-bold text-center">
                    Vitamina C en Glúteos – Firmeza y{' '}
                  <span className="text-primary">Calidad para tu Piel</span></h2>
                </SectionTitleWithLines>
                <div className="mt-12 space-y-8 max-w-4xl mx-auto">
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
                  <div className="p-6">
                    <h3 className="flex items-center gap-3 text-xl font-bold">
                      <Sparkles className="w-7 h-7 text-primary" /> Beneficios
                      Reales y Aplicación Segura
                    </h3>
                    <div className="text-muted-foreground space-y-3 mt-4">
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
                    </div>
                  </div>
                </div>
              </section>
              <section id="decision-corporal" className="scroll-mt-20 max-w-3xl mx-auto text-center">
                 <div className="p-6 md:p-8">
                  <div className="p-0">
                    <h2 className="font-headline text-2xl text-primary">
                      Tu Cuerpo, Tu Decisión – Elige la Prevención Inteligente
                    </h2>
                  </div>
                  <div className="p-0 mt-4 text-muted-foreground">
                     <p>
                        Cuidar tu cuerpo es una inversión a largo plazo. Ya sea que busques moldear tu figura, mejorar la calidad de tu piel o prevenir la flacidez, estos tratamientos ofrecen soluciones seguras y efectivas cuando se realizan por profesionales.
                    </p>
                  </div>
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
                sana, hidratata y joven.
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
                seed="cta-preventive"
              />
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
