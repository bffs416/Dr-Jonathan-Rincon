
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
import { cn } from '@/lib/utils';
import { SectionTitleWithLines } from '@/components/section-title-with-lines';
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

export default function ContornoCorporalPage() {
  const hidrolipoclasiaBenefits = [
    'Resultados similares a una liposucción tradicional, pero de manera menos invasiva.',
    'Procedimiento rápido y ambulatorio, realizado en el consultorio.',
    'Resultados efectivos y visibles, especialmente cuando se combina con un estilo de vida saludable.',
  ];

  const tensamaxBenefits = [
    'Resultados visibles desde la primera sesión.',
    'Procedimiento sin dolor, cómodo y relajante, a menudo descrito como un "masaje cálido".',
    'No requiere tiempo de recuperación, puedes volver a tu rutina de inmediato.',
    'Tratamiento versátil: Perfecto para levantar glúteos, tonificar abdomen, brazos y piernas, y reducir flacidez en rostro y cuello.',
    'Excelente para combatir la celulitis y mejorar la textura de la piel.',
  ];

  const hidrolipoclasiaFaqs = [
    {
      question: '¿Este tratamiento duele?',
      answer:
        'El procedimiento puede generar una molestia por las inyecciones, pero es un dolor totalmente soportable. Para mayor comodidad, se puede aplicar un anestésico local.',
    },
    {
      question: '¿Cuántas sesiones se necesitan?',
      answer:
        'El número de sesiones varía según cada persona y la cantidad de grasa a tratar. En muchos casos, los cambios son notorios desde las primeras semanas. Tu médico especialista diseñará un plan personalizado para ti.',
    },
    {
      question: '¿Cómo es la recuperación? ¿Necesitaré incapacidad?',
      answer:
        'La recuperación es rápida y no requiere incapacidad prolongada. Sin embargo, es crucial seguir algunos cuidados: descansar y evitar actividad física intensa durante los primeros dos días, utilizar prendas de compresión (fajas), mantenerse bien hidratado, evitar la exposición al sol y asistir a las citas de seguimiento.',
    },
    {
      question: '¿Pueden aparecer moretones o hinchazón?',
      answer:
        'Sí, es común que aparezcan hinchazón y hematomas leves en la zona tratada. Estos efectos son temporales y se pueden controlar con compresas frías.',
    },
  ];
  
  const tensamaxFaqs = [
      {
      question: '¿Para quién es este tratamiento?',
      answer:
        'Es ideal para personas que notan flacidez en la piel, desean modelar su contorno corporal, reducir celulitis o buscan una recuperación más rápida después de una cirugía, como una liposucción.',
    },
    {
      question: '¿Cómo es una sesión?',
      answer:
        'Es muy sencilla y agradable. Te recostarás cómodamente mientras el especialista desliza un cabezal sobre la zona a tratar, aplicando un gel conductor. Sentirás un calor controlado y confortable. La sesión dura entre 30 y 60 minutos.',
    },
    {
      question: '¿Cuántas sesiones necesitaré?',
      answer:
        'Para obtener resultados óptimos, generalmente se recomiendan entre 5 y 10 sesiones. El plan de tratamiento será definido por el especialista en tu cita de valoración.',
    },
     {
      question: '¿Es un tratamiento seguro?',
      answer:
        'Sí, es muy seguro cuando lo realiza un profesional cualificado. Sin embargo, tiene algunas contraindicaciones que deben ser evaluadas por un médico, como el embarazo, la lactancia, o la presencia de marcapasos o implantes metálicos en la zona a tratar.',
    },
  ];

  const hidrolipoclasiaResultImage = findImage('hidrolipoclasia-result');
  const tensamaxResultImage = findImage('tensamax-result');

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full bg-slate-900">
        <div className="absolute inset-0 opacity-30">
          <Placeholder seed="body-contouring-hero" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-4 text-white">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold !leading-tight tracking-tight drop-shadow-lg mt-2">
              Moldea tu Figura Sin Cirugía: Descubre el Poder de la Hidrolipoclasia y Tensamax
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-slate-200 drop-shadow-md">
              Dos tecnologías avanzadas para eliminar la grasa localizada, combatir la flacidez y conseguir el cuerpo que deseas de forma segura.
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
             ¿Sientes que la dieta y el ejercicio no son suficientes?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
             Te esfuerzas por mantener un estilo de vida saludable, pero esa grasa rebelde en el abdomen, las caderas o los muslos parece no desaparecer. O quizás notas que la piel ha perdido firmeza con el tiempo. Si buscas una solución efectiva que no implique pasar por el quirófano, estás en el lugar correcto.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Hoy en día, existen tratamientos no invasivos y mínimamente invasivos que te ayudan a alcanzar tus objetivos corporales de manera segura y sin interrumpir tu rutina. Dos de las opciones más populares y efectivas son la Hidrolipoclasia Ultrasónica y la radiofrecuencia con Tensamax. Aunque son diferentes, ambos se enfocan en un mismo objetivo: ayudarte a sentirte increíble en tu propia piel.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="#citas">
                Agenda tu Valoración <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="w-full aspect-square">
            <Placeholder
              className="rounded-xl shadow-2xl"
              seed="toned-figure"
            />
          </div>
        </section>

        {/* Hidrolipoclasia */}
        <div className='space-y-24'>
            <SectionTitleWithLines>
                <span className='text-primary font-bold'>Hidrolipoclasia – La "Liposucción sin Cirugía"</span>
            </SectionTitleWithLines>

            <section id="hidrolipoclasia" className="scroll-mt-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="order-2 md:order-1 w-full aspect-square">
                  <Placeholder
                    className="rounded-xl shadow-2xl"
                    seed="hidrolipoclasia-diagram"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="font-headline text-3xl md:text-4xl font-bold">
                    ¿Qué es la Hidrolipoclasia y cómo elimina la grasa localizada?
                  </h2>
                  <p className="mt-6 text-lg text-muted-foreground">
                   La hidrolipoclasia es un procedimiento estético mínimamente invasivo, conocido como la "liposucción sin cirugía" por sus excelentes resultados para eliminar depósitos de grasa localizada. Es ideal para tratar zonas específicas como el abdomen, las caderas, los muslos ("cartucheras") o brazos.
                  </p>
                  <p className="mt-4 text-muted-foreground">Su funcionamento es una combinación inteligente de dos pasos:</p>
                  <ol className="mt-4 space-y-3 text-muted-foreground list-decimal pl-5">
                    <li><strong>Infiltración de una solución:</strong> Primero, se inyecta una solución isotónica (suero fisiológico) en la zona donde se acumula la grasa. Esta solución ablanda y prepara las células grasas (adipocitos).</li>
                    <li><strong>Aplicación de ultrasonido:</strong> Inmediatamente después, se aplica un ultrasonido de alta potencia sobre la zona. Las ondas ultrasónicas generan microburbujas que vibran y provocan que la membrana de las células grasas se rompa, liberando la grasa de su interior.</li>
                  </ol>
                  <p className="mt-4 text-muted-foreground">Una vez liberada, esa grasa es eliminada de forma natural por el cuerpo a través del sistema linfático.</p>
                </div>
              </div>

               <div className="mt-20 text-center">
                    <h3 className="font-headline text-2xl md:text-3xl font-bold">Beneficios clave de la Hidrolipoclasia</h3>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {hidrolipoclasiaBenefits.map((benefit, index) => (
                        <div key={index} className="p-6 flex items-start gap-4">
                            <div className="bg-primary/10 text-primary p-2 rounded-full mt-1">
                            <CheckCircle className="w-6 h-6" />
                            </div>
                            <div>
                            <p className="text-base text-muted-foreground">
                                {benefit}
                            </p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

             <section id="faq-hidrolipoclasia" className="scroll-mt-20 max-w-4xl mx-auto">
               <div className="text-center">
                <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">
                  Lo que a un paciente le importa sobre la Hidrolipoclasia
                </h2>
              </div>
              <Accordion type="single" collapsible className="w-full mt-12">
                {hidrolipoclasiaFaqs.map((faq, index) => (
                  <AccordionItem value={`item-hidro-${index}`} key={index}>
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
        </div>


        {/* Tensamax */}
        <div className='space-y-24'>
            <SectionTitleWithLines>
                <span className='text-primary font-bold'>Tensamax – Reafirma tu Piel y Moldea tu Cuerpo</span>
            </SectionTitleWithLines>
            <section id="tensamax" className="scroll-mt-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-headline text-3xl md:text-4xl font-bold">
                    ¿Qué es Tensamax y cómo combate la flacidez?
                  </h2>
                  <p className="mt-6 text-lg text-muted-foreground">
                    Tensamax es una tecnología de vanguardia que utiliza radiofrecuencia monopolar para transformar la piel desde sus capas más profundas. Es un tratamiento no invasivo, ideal para quienes buscan reafirmar, tonificar y modelar tanto el rostro como el cuerpo.
                  </p>
                  <p className="mt-4 text-muted-foreground">Su mecanismo se basa en generar un calor controlado y profundo en los tejidos, lo que provoca dos efectos maravillosos:</p>
                  <ol className="mt-4 space-y-3 text-muted-foreground list-decimal pl-5">
                    <li><strong>Estimulación de colágeno y elastina:</strong> El calor activa las células de tu piel para que produzcan nuevo colágeno, la proteína que le da firmeza y elasticidad.</li>
                    <li><strong>Mejora de la circulación:</strong> El calor tiene un efecto vasodilatador que aumenta el flujo sanguíneo, nutriendo las células, ayudando a eliminar toxinas y a reducir la grasa superficial.</li>
                  </ol>
                </div>
                 <div className='w-full aspect-square'>
                  <Placeholder
                    className="rounded-xl shadow-2xl"
                    seed="tensamax-diagram"
                  />
                </div>
              </div>
              <div className="mt-20 text-center">
                    <h3 className="font-headline text-2xl md:text-3xl font-bold">Beneficios clave de Tensamax</h3>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {tensamaxBenefits.map((benefit, index) => (
                        <div key={index} className="p-6 flex items-start gap-4">
                            <div className="bg-primary/10 text-primary p-2 rounded-full mt-1">
                            <CheckCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-base text-muted-foreground">
                                    {benefit}
                                </p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section id="faq-tensamax" className="scroll-mt-20 max-w-4xl mx-auto">
               <div className="text-center">
                <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">
                  Lo que a un paciente le importa sobre Tensamax
                </h2>
              </div>
              <Accordion type="single" collapsible className="w-full mt-12">
                {tensamaxFaqs.map((faq, index) => (
                  <AccordionItem value={`item-tensa-${index}`} key={index}>
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
        </div>
        
        {/* Section: Videos */}
        <section id="videos" className="scroll-mt-20">
          <div className="text-center">
            <SectionTitleWithLines>
              <span className="text-foreground">Transformaciones</span>{' '}
              <span className="text-primary">Reales</span>
            </SectionTitleWithLines>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">
              Resultados de Contorno Corporal
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Observa cómo nuestros tratamientos de contorno corporal han ayudado a los pacientes a lograr sus metas.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="w-full aspect-[9/16] rounded-lg shadow-lg overflow-hidden max-w-[325px] mx-auto">
               <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/I2VYteGaCto"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
              ></iframe>
            </div>
             <div className="w-full aspect-[9/16] rounded-lg shadow-lg overflow-hidden max-w-[325px] mx-auto">
               <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/mNFlBwGm8h4"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section id="comparacion" className="scroll-mt-20">
          <div className="p-8 md:p-12">
            <div className="text-center p-0 pb-8">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">¿Cuál es la mejor opción para ti: Hidrolipoclasia o Tensamax?</h2>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center max-w-lg mx-auto">
                <div className="text-center">
                    {hidrolipoclasiaResultImage && (
                        <div className="relative w-60 h-60 mx-auto rounded-full overflow-hidden shadow-lg">
                            <Image src={hidrolipoclasiaResultImage.src} alt={hidrolipoclasiaResultImage.hint} fill className="object-cover" data-ai-hint={hidrolipoclasiaResultImage.hint} />
                        </div>
                    )}
                    <h3 className="mt-4 font-bold text-lg">Resultados Hidrolipoclasia</h3>
                </div>
                <div className="text-center">
                    {tensamaxResultImage && (
                        <div className="relative w-60 h-60 mx-auto rounded-full overflow-hidden shadow-lg">
                            <Image src={tensamaxResultImage.src} alt={tensamaxResultImage.hint} fill className="object-cover" data-ai-hint={tensamaxResultImage.hint} />
                        </div>
                    )}
                    <h3 className="mt-4 font-bold text-lg">Resultados Tensamax</h3>
                </div>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground mt-12">
                <p>Aunque ambos tratamientos ayudan a mejorar la figura, están diseñados para objetivos diferentes. La elección dependerá de tus necesidades específicas.</p>
                <div className='grid md:grid-cols-2 gap-8 items-start'>
                    <div className='bg-muted/50 p-6 rounded-lg'>
                        <h4 className='font-bold text-xl text-foreground mb-2'>Elige Hidrolipoclasia si...</h4>
                        <p>...tu principal problema es la <strong className='text-primary'>grasa localizada y acumulada</strong> que no logras eliminar con dieta o ejercicio.</p>
                    </div>
                     <div className='bg-muted/50 p-6 rounded-lg'>
                        <h4 className='font-bold text-xl text-foreground mb-2'>Elige Tensamax si...</h4>
                        <p>...tu preocupación es la <strong className='text-primary'>flacidez, la celulitis y la falta de tonicidad</strong> en la piel, o si buscas modelar el contorno de forma no invasiva.</p>
                    </div>
                </div>
                <div className='text-center pt-6 max-w-4xl mx-auto'>
                    <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-lg shadow-lg text-left">
                        <h4 className='font-headline text-2xl font-bold text-primary flex items-center gap-2'>
                          <PlusCircle className="w-6 h-6" />
                          La Combinación Perfecta
                        </h4>
                        <p className='mt-4'>En muchos casos, la mejor estrategia es combinar ambos tratamientos. Un profesional puede diseñar un plan donde primero se reduce el volumen de grasa con hidrolipoclasia y luego se reafirma y tensa la piel con Tensamax para un resultado espectacular.</p>
                        <p className='mt-4 font-semibold'>La consulta médica es clave para crear un plan de tratamiento individualizado y seguro para ti.</p>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="citas" className="scroll-mt-20">
          <Card className="relative overflow-hidden shadow-xl md:grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <Badge>Consulta Personalizada</Badge>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2 text-primary">
                Da el Siguiente Paso Hacia la Figura que Sueñas
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                No tienes que conformarte con esa grasa rebelde o la piel flácida. Con la tecnología adecuada y la guía de expertos, puedes lograr una transformación real y duradera.
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
                  <WhatsAppIcon /> Agendar por WhatsApp
                </a>
              </Button>
            </div>
            <div className="relative h-64 md:h-full w-full">
              <Placeholder className="absolute inset-0" seed="cta-body-contouring"/>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
