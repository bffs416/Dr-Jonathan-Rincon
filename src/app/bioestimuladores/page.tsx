
'use client';

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
import { findImage } from '@/lib/images';
import { useLanguage } from '@/context/language-context';

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
          className="object-cover animate-fade-in duration-500"
          data-ai-hint={image.hint}
        />
      ) : (
        <div className="w-full h-full bg-secondary" />
      )}
    </div>
  );
};

export default function BioestimuladoresPage() {
  const { lang } = useLanguage();

  const content = {
    es: {
      heroTitle: 'Descubre el Secreto de una Piel Joven y Natural: Bioestimuladores de Colágeno',
      heroSubtitle: 'Rejuvenece desde adentro hacia afuera, sin cirugías ni resultados artificiales.',
      introTitle: '¿Sientes que tu piel ha perdido firmeza?',
      introP1: 'Con el paso de los años, es natural notar que la piel pierde elasticidad, aparecen las primeras líneas de expresión y el rostro ya no luce tan firme como antes. Esto se debe a que, a partir de los 25 o 30 años, nuestro cuerpo empieza a producir menos colágeno, la proteína encargada de darle soporte y estructura a la piel.',
      introP2: 'Si buscas una solución que vaya más allá de las cremas superficiales, pero no quieres recurrir a procedimientos invasivos, los bioestimuladores de colágeno son la respuesta que estabas buscando.',
      introButton: 'Quiero una valoración',
      whatAreTitle: '¿Qué son exactamente los bioestimuladores y cómo funcionan?',
      whatAreP1: 'Imagina que pudieras "despertar" a las células de tu piel para que vuelvan a trabajar como lo hacían en su juventud. Eso es exactamente lo que hacen los bioestimuladores.',
      whatAreP2: 'Son sustancias seguras y biocompatibles que se aplican mediante microinyecciones en áreas específicas. Una vez dentro de la piel, su función principal no es rellenar, sino activar a unas células llamadas fibroblastos, que son las "fábricas" naturales de colágeno y elastina de tu cuerpo.',
      whatAreP3: 'Al reactivar esta producción, tu propia piel comienza un proceso de regeneración desde el interior, reconstruyendo la estructura que le da firmeza y elasticidad.',
      benefitsTitle: 'Beneficios clave que te encantarán',
      benefitsSectionTitle1: 'Beneficios',
      benefitsSectionTitle2: 'Clave',
      benefits: [
        'Resultados 100% naturales y progresivos: El cambio no es brusco ni artificial. Tu piel mejora gradualmente, luciendo más fresca, firme y descansada.',
        'Mejora integral de la piel: No solo combate la flacidez, sino que también mejora la textura, restaura el volumen perdido y suaviza arrugas y líneas finas.',
        'Efectos duraderos: A diferencia de otros tratamientos, los resultados pueden durar hasta dos años, ya que tu cuerpo sigue produciendo colágeno de forma natural.',
        'Tratamiento versátil: Funciona de maravilla en rostro, cuello, escote, manos e incluso en zonas corporales como brazos, abdomen o glúteos.',
      ],
      faqTitle: 'Antes, Durante y Después del Tratamiento',
      faqSubtitle: 'Tu tranquilidad y seguridad son lo más importante. Por eso, aquí resolvemos las dudas más frecuentes de nuestros pacientes.',
      faqSectionTitle1: 'Lo que debes',
      faqSectionTitle2: 'Saber',
      faqs: [
        {
          question: '¿Para quién es este tratamiento?',
          answer: 'Es ideal para hombres y mujeres, generalmente a partir de los 30 años, que notan los primeros signos de flacidez o envejecimiento y buscan una alternativa natural y preventiva. También es excelente para quienes ya tienen signos más avanzados y desean una mejora integral sin cirugía.',
        },
        {
          question: '¿El procedimiento duele?',
          answer: 'Es un tratamiento muy bien tolerado. Se utiliza anestesia tópica (en crema) para asegurar que la molestia durante las microinyecciones sea mínima. La mayoría de los pacientes lo describen como un procedimiento cómodo.',
        },
        {
          question: '¿Necesitaré tiempo de recuperación?',
          answer: '¡No! Esta es una de las grandes ventajas. Puedes retomar tus actividades diarias inmediatamente después de la sesión. Podrías experimentar un leve enrojecimiento o algún pequeño hematoma en la zona de aplicación, pero estos efectos desaparecen en pocos días.',
        },
        {
          question: '¿Cuándo veré los resultados?',
          answer: 'Los bioestimuladores trabajan al ritmo de tu cuerpo. Aunque algunos productos ofrecen un leve efecto inicial, los verdaderos resultados comienzan a ser visibles entre la tercera y cuarta semana, con mejoras continuas durante los siguientes meses a medida que el nuevo colágeno se forma. El resultado final se aprecia completamente después de unos meses, ¡y es un cambio que te encantará por su naturalidad!',
        },
        {
          question: '¿Cuántas sesiones necesito?',
          answer: 'Dependerá de tu tipo de piel, edad y los objetivos que busques. Generalmente, se recomiendan entre una y tres sesiones iniciales, seguidas de un mantenimiento anual o cada dos años para prolongar los efectos.',
        },
      ],
      videosTitle: 'Pacientes Reales, Historias Reales',
      videosSubtitle: 'Mira cómo los bioestimuladores de colágeno han ayudado a nuestros pacientes a lograr una piel más firme y joven.',
      videosSectionTitle1: 'Resultados que',
      videosSectionTitle2: 'Inspiran',
      safetyTitle: 'Seguridad Ante Todo: Elige Siempre a un Profesional Cualificado',
      safetyP1: 'El éxito y la seguridad de tu tratamiento dependen directamente de la experiencia del profesional. Asegúrate siempre de acudir a un médico especializado con experiencia certificada en la aplicación de bioestimuladores.',
      safetyP2: 'Un profesional cualificado no solo garantizará una técnica de inyección correcta para evitar complicaciones, sino que también utilizará productos de marcas líderes, aprobados por entidades como el Invima, asegurando que lo que se te aplica es seguro y efectivo.',
      safetyWarningTitle: '¡Cuidado con las ofertas engañosas!',
      safetyWarning: 'Desconfía de precios excesivamente bajos o de centros no médicos que ofrecen estos tratamientos, ya que podrían usar productos no certificados o ser aplicados por personal no cualificado, poniendo en riesgo tu salud.',
      ctaBadge: 'Consulta Personalizada',
      ctaTitle: '¿Listo/a para devolverle la juventud a tu piel?',
      ctaP1: 'Si buscas un rejuvenecimiento real, que respete tus facciones y te haga lucir una versión más fresca y radiante de ti mismo/a, los bioestimuladores de colágeno son tu mejor aliado.',
      ctaButton: 'Agendar por WhatsApp',
    },
    en: {
      heroTitle: 'Discover the Secret to Young, Natural Skin: Collagen Biostimulators',
      heroSubtitle: 'Rejuvenate from the inside out, without surgery or artificial results.',
      introTitle: 'Do you feel your skin has lost its firmness?',
      introP1: 'Over the years, it\'s natural to notice that the skin loses elasticity, the first expression lines appear, and the face no longer looks as firm as it used to. This is because, from the age of 25 or 30, our body begins to produce less collagen, the protein responsible for giving the skin support and structure.',
      introP2: 'If you are looking for a solution that goes beyond superficial creams but do not want to resort to invasive procedures, collagen biostimulators are the answer you have been looking for.',
      introButton: 'I want an assessment',
      whatAreTitle: 'What exactly are biostimulators and how do they work?',
      whatAreP1: 'Imagine if you could "wake up" your skin cells to work as they did in their youth. That is exactly what biostimulators do.',
      whatAreP2: 'They are safe and biocompatible substances that are applied through microinjections in specific areas. Once inside the skin, their main function is not to fill, but to activate cells called fibroblasts, which are your body\'s natural "factories" of collagen and elastin.',
      whatAreP3: 'By reactivating this production, your own skin begins a process of regeneration from within, rebuilding the structure that gives it firmness and elasticity.',
      benefitsTitle: 'Key benefits you will love',
      benefitsSectionTitle1: 'Key',
      benefitsSectionTitle2: 'Benefits',
      benefits: [
        '100% natural and progressive results: The change is not abrupt or artificial. Your skin improves gradually, looking fresher, firmer, and more rested.',
        'Comprehensive skin improvement: Not only does it combat sagging, but it also improves texture, restores lost volume, and smoothes wrinkles and fine lines.',
        'Long-lasting effects: Unlike other treatments, the results can last up to two years, as your body continues to produce collagen naturally.',
        'Versatile treatment: It works wonderfully on the face, neck, décolleté, hands, and even on body areas such as arms, abdomen, or buttocks.',
      ],
      faqTitle: 'Before, During, and After the Treatment',
      faqSubtitle: 'Your peace of mind and safety are the most important thing. That is why we answer our patients\' most frequent questions here.',
      faqSectionTitle1: 'What you should',
      faqSectionTitle2: 'Know',
      faqs: [
        {
          question: 'Who is this treatment for?',
          answer: 'It is ideal for men and women, generally from the age of 30, who notice the first signs of sagging or aging and are looking for a natural and preventive alternative. It is also excellent for those who already have more advanced signs and want a comprehensive improvement without surgery.',
        },
        {
          question: 'Does the procedure hurt?',
          answer: 'It is a very well-tolerated treatment. A topical anesthetic (cream) is used to ensure that the discomfort during the microinjections is minimal. Most patients describe it as a comfortable procedure.',
        },
        {
          question: 'Will I need recovery time?',
          answer: 'No! This is one of the great advantages. You can resume your daily activities immediately after the session. You may experience slight redness or a small bruise in the application area, but these effects disappear in a few days.',
        },
        {
          question: 'When will I see the results?',
          answer: 'Biostimulators work at your body\'s pace. Although some products offer a slight initial effect, the real results begin to be visible between the third and fourth week, with continuous improvements over the following months as new collagen is formed. The final result is fully appreciated after a few months, and it is a change you will love for its naturalness!',
        },
        {
          question: 'How many sessions do I need?',
          answer: 'It will depend on your skin type, age, and the goals you are looking for. Generally, one to three initial sessions are recommended, followed by annual or biennial maintenance to prolong the effects.',
        },
      ],
      videosTitle: 'Real Patients, Real Stories',
      videosSubtitle: 'See how collagen biostimulators have helped our patients achieve firmer, younger skin.',
      videosSectionTitle1: 'Results that',
      videosSectionTitle2: 'Inspire',
      safetyTitle: 'Safety First: Always Choose a Qualified Professional',
      safetyP1: 'The success and safety of your treatment depend directly on the professional\'s experience. Always make sure to go to a specialized doctor with certified experience in the application of biostimulators.',
      safetyP2: 'A qualified professional will not only ensure a correct injection technique to avoid complications, but will also use products from leading brands, approved by entities such as Invima, ensuring that what is applied to you is safe and effective.',
      safetyWarningTitle: 'Beware of misleading offers!',
      safetyWarning: 'Be wary of excessively low prices or non-medical centers that offer these treatments, as they may use uncertified products or be applied by unqualified personnel, putting your health at risk.',
      ctaBadge: 'Personalized Consultation',
      ctaTitle: 'Ready to bring youth back to your skin?',
      ctaP1: 'If you are looking for a real rejuvenation that respects your features and makes you look like a fresher, more radiant version of yourself, collagen biostimulators are your best ally.',
      ctaButton: 'Schedule via WhatsApp',
    },
  };

  const currentContent = content[lang];
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full bg-slate-900">
        <div className="absolute inset-0 opacity-30">
          <Placeholder seed="biostimulator-hero" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-4 text-white">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold !leading-tight tracking-tight drop-shadow-lg mt-2">
              {currentContent.heroTitle}
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-slate-200 drop-shadow-md">
              {currentContent.heroSubtitle}
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
              {currentContent.introTitle}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              {currentContent.introP1}
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              {currentContent.introP2}
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="#citas">
                {currentContent.introButton} <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="w-full aspect-square">
            <Placeholder
              className="rounded-xl shadow-2xl"
              seed="firm-skin"
            />
          </div>
        </section>

        {/* Section 2: What they are & Benefits */}
        <section id="que-son" className="scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 w-full aspect-square">
              <Placeholder
                className="rounded-xl shadow-2xl"
                seed="biostimulator-diagram"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">
                {currentContent.whatAreTitle}
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                {currentContent.whatAreP1}
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                {currentContent.whatAreP2}
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                {currentContent.whatAreP3}
              </p>
            </div>
          </div>
          <div className="mt-20 text-center">
            <SectionTitleWithLines>
              <span className="text-foreground">{currentContent.benefitsSectionTitle1}</span>{' '}
              <span className="text-primary">{currentContent.benefitsSectionTitle2}</span>
            </SectionTitleWithLines>
            <h3 className="font-headline text-3xl md:text-4xl font-bold mt-2">
              {currentContent.benefitsTitle}
            </h3>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {currentContent.benefits.map((benefit, index) => (
                <div key={index} className="p-6 flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-full mt-1">
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
        
        {/* Section 3: FAQ */}
        <section id="faq" className="scroll-mt-20 max-w-4xl mx-auto">
          <div className="text-center">
            <SectionTitleWithLines>
              <span className="text-foreground">{currentContent.faqSectionTitle1}</span>{' '}
              <span className="text-primary">{currentContent.faqSectionTitle2}</span>
            </SectionTitleWithLines>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">
              {currentContent.faqTitle}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              {currentContent.faqSubtitle}
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full mt-12">
            {currentContent.faqs.map((faq, index) => (
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
              <span className="text-foreground">{currentContent.videosSectionTitle1}</span>{' '}
              <span className="text-primary">{currentContent.videosSectionTitle2}</span>
            </SectionTitleWithLines>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">
              {currentContent.videosTitle}
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              {currentContent.videosSubtitle}
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
             <div className="w-full aspect-[9/16] rounded-lg shadow-lg overflow-hidden max-w-[325px] mx-auto">
               <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Vesbkoh8oPQ?autoplay=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
              ></iframe>
            </div>
            <div className="w-full aspect-[9/16] rounded-lg shadow-lg overflow-hidden max-w-[325px] mx-auto">
               <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/2ibpjBt7pXc?autoplay=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
                {currentContent.safetyTitle}
              </h2>
            </div>
            <div className="space-y-4 text-lg text-muted-foreground mt-4">
              <p>
                {currentContent.safetyP1}
              </p>
              <p>
                {currentContent.safetyP2}
              </p>
              <div className="mt-6 p-4 bg-destructive/10 border-l-4 border-destructive rounded-r-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-destructive" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-destructive">
                      <strong className="font-bold">
                        {currentContent.safetyWarningTitle}
                      </strong>{' '}
                      {currentContent.safetyWarning}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: CTA */}
        <section id="citas" className="scroll-mt-20">
          <Card className="relative overflow-hidden shadow-xl md:grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <Badge>{currentContent.ctaBadge}</Badge>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2 text-primary">
                {currentContent.ctaTitle}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {currentContent.ctaP1}
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
                  {currentContent.ctaButton} <WhatsAppIcon />
                </a>
              </Button>
            </div>
            <div className="relative h-64 md:h-full w-full">
              <Placeholder className="absolute inset-0" seed="cta-bio" />
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}

    