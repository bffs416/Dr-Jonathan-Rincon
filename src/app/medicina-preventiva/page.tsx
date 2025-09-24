import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Dna, Droplets, Syringe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
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
              Medicina Preventiva y Calidad de la Piel
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-slate-200 drop-shadow-md">
              Nutre, hidrata y define tu piel desde adentro para prevenir los
              signos del envejecimiento.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 sm:py-24 space-y-24">
        {/* Section: Hydration and Skin Quality */}
        <section id="hidratacion-calidad" className="scroll-mt-20">
          <SectionTitleWithLines>
            <span className="text-foreground">Hidratación Profunda y</span>{' '}
            <span className="text-primary">Calidad de la Piel</span>
          </SectionTitleWithLines>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground text-center">
            Estos tratamientos se enfocan en nutrir tu piel desde adentro para
            devolverle la vitalidad, el brillo y la suavidad que ha perdido con
            el tiempo.
          </p>
          <div className="mt-12 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Syringe className="w-7 h-7 text-primary" /> Mesoterapia y
                  Técnicas de Aplicación
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  La mesoterapia es una técnica que consiste en aplicar
                  microinyecciones superficiales para administrar un cóctel de
                  sustancias beneficiosas directamente en la piel. Estos
                  cócteles pueden incluir vitaminas, aminoácidos, minerales y
                  ácido hialurónico, diseñados para revitalizar e hidratar.
                </p>
                <p className="mt-2">
                  <strong className="text-foreground">
                    Microneedling (o Micropunción):
                  </strong>{' '}
                  Es una técnica que utiliza un dispositivo con microagujas muy
                  finas para crear canales microscópicos en la piel. Esto no
                  solo estimula la producción natural de colágeno, sino que
                  también permite que los productos aplicados (como el PDRN o
                  vitaminas) penetren mucho más profundo y sean más efectivos.
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
                  <Droplets className="w-7 h-7 text-primary" /> Skinboosters
                  (Hidratación Intensa)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Los Skinboosters son un tipo de mesoterapia enfocada en la
                  hidratación profunda. Se utilizan microinyecciones de un ácido
                  hialurónico de baja densidad que no busca dar volumen, sino
                  captar y retener agua en las capas internas de la piel.
                </p>
                <p className="mt-2">
                  <strong className="text-foreground">
                    ¿Qué puedes esperar?
                  </strong>{' '}
                  Una piel visiblemente más hidratada, jugosa, elástica y con un
                  brillo natural. Suaviza líneas finas y mejora la calidad
                  general de la piel en rostro, cuello, escote y manos. Los
                  efectos pueden durar entre 6 y 12 meses.
                </p>
                <Badge variant="secondary" className="mt-4">
                  Ideal para: Pieles deshidratadas, apagadas o que empiezan a
                  mostrar los primeros signos de envejecimiento.
                </Badge>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Dna className="w-7 h-7 text-primary" /> PDRN (Conocido como
                  "Esperma de Salmón")
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  El PDRN (polideoxirribonucleótido) es un potente regenerador
                  celular extraído del tejido gonadal del salmón. Aunque su
                  apodo popular es "esperma de salmón", el producto utilizado en
                  medicina estética es un fragmento de ADN purificado y seguro.
                </p>
                <p className="mt-2">
                  <strong className="text-foreground">¿Cómo funciona?</strong>{' '}
                  Actúa a nivel celular estimulando la reparación de los
                  tejidos, la producción de colágeno y elastina, y reduciendo la
                  inflamación.
                </p>
                <p className="mt-2">
                  <strong className="text-foreground">Beneficios:</strong>{' '}
                  Mejora la firmeza, reduce líneas finas, atenúa cicatrices de
                  acné y devuelve la luminosidad a la piel. Se aplica mediante
                  mesoterapia o microneedling para potenciar su efecto.
                </p>
                <Badge variant="secondary" className="mt-4">
                  Ideal para: Pieles que necesitan una reparación profunda,
                  mejorar cicatrices o un extra de rejuvenecimiento.
                </Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section: Fillers */}
        <section id="rellenos" className="scroll-mt-20">
          <SectionTitleWithLines>
            <span className="text-foreground">
              Rellenos con Ácido Hialurónico –
            </span>{' '}
            <span className="text-primary">Volumen y Definición</span>
          </SectionTitleWithLines>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground text-center">
            El ácido hialurónico es una sustancia que nuestro cuerpo produce de
            forma natural para mantener la piel hidratada y con volumen, pero su
            producción disminuye con la edad. Los rellenos dérmicos utilizan una
            versión en gel de esta molécula para restaurar o añadir volumen de
            forma segura y con resultados inmediatos.
          </p>
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Ácido Hialurónico para Rostro</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Se utiliza para corregir arrugas estáticas (las que se ven con
                  el rostro en reposo), reponer el volumen perdido en zonas como
                  los pómulos o el mentón, y suavizar surcos como los
                  nasogenianos ("líneas de la sonrisa").
                </p>
                <p className="mt-2">
                  <strong className="text-foreground">Resultados:</strong> El
                  efecto es inmediato, logrando un aspecto más descansado y
                  juvenil. La duración varía entre 9 y 18 meses, dependiendo
                  del producto y la zona.
                </p>
                <Badge variant="secondary" className="mt-4">
                  Ideal para: Quienes buscan corregir arrugas profundas,
                  restaurar volumen en mejillas o definir el contorno facial.
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
                  corregir asimetrías e hidratar profundamente los labios para
                  que luzcan más saludables y jóvenes.
                </p>
                <p className="mt-2">
                  <strong className="text-foreground">
                    ¿Qué puedes esperar?
                  </strong>{' '}
                  Un resultado natural y adaptado a tus facciones. El objetivo
                  es embellecer, no transformar.
                </p>
                <Badge variant="secondary" className="mt-4">
                  Ideal para: Personas que desean labios más definidos,
                  voluminosos o simplemente revitalizados.
                </Badge>
              </CardContent>
            </Card>
          </div>
        </section>

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
              <Placeholder className="absolute inset-0" text="Imagen de piel radiante y saludable" />
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
