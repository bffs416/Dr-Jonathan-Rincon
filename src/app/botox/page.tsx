
'use client';

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

export default function BotoxPage() {
  const { lang } = useLanguage();

  const content = {
    es: {
      heroTitle: 'Redescubre tu Juventud: El Secreto para una Apariencia Fresca y Natural',
      heroSubtitle: 'Dile adiós a las arrugas de expresión y luce un rostro descansado, sin cirugías ni perder tu esencia.',
      introTitle: '¿Por qué aparecen las arrugas de expresión?',
      introP1: 'Cada vez que sonríes, frunces el ceño o te sorprendes, los músculos de tu rostro se contraen. Con el paso de los años, estos movimientos repetidos van dejando marcas en la piel, conocidas como arrugas dinámicas o de expresión. En una piel joven, estas líneas desaparecen al relajar el rostro, pero con el tiempo, la piel pierde elasticidad y las arrugas se vuelven visibles incluso en reposo.',
      introP2: 'Si buscas una forma segura y eficaz de suavizar estas líneas y recuperar una apariencia más relajada y juvenil, el tratamiento con toxina botulínica es una de las mejores y más populares opciones en la medicina estética actual.',
      introButton: 'Descubrir cómo funciona',
      howItWorksTitle: '¿Qué es la toxina botulínica estética y cómo funciona su "magia"?',
      howItWorksP1: 'La toxina botulínica, conocida popularmente como "bótox", es una proteína purificada que actúa como un relajante muscular muy preciso. No es un relleno, su función es muy diferente y específica.',
      howItWorksP2: 'Se aplica en dosis muy pequeñas mediante microinyecciones directamente en los músculos responsables de formar esas arrugas que te preocupan. Su mecanismo de acción es bloquear temporalmente la señal nerviosa que ordena al músculo contraerse. Al relajar el músculo de forma controlada, la piel que lo recubre se alisa y las arrugas de expresión se suavizan o desaparecen.',
      howItWorksP3: 'El objetivo nunca es "congelar" tu rostro, sino relajar para lograr un aspecto natural. Queremos que sigas expresando tus emociones, pero de una manera más suave y fresca.',
      zonesSectionTitle1: 'Zonas más comunes',
      zonesSectionTitle2: 'de tratamiento',
      treatmentZones: [
        { title: 'Entrecejo', description: 'Para suavizar el ceño fruncido que da apariencia de enojo o preocupación.' },
        { title: 'Frente', description: 'Para atenuar las líneas horizontales.' },
        { title: 'Patas de gallo', description: 'Para reducir las arrugas alrededor de los ojos que aparecen al sonreír.' },
      ],
      faqSectionTitle1: 'Todo lo que quieres saber',
      faqSectionTitle2: 'antes de decidirte',
      faqSubtitle: 'Es normal tener preguntas. Aquí respondemos las más importantes para que te sientas con total confianza.',
      faqs: [
        { question: '¿Para quién es este tratamiento?', answer: 'Es ideal para hombres y mujeres que desean tratar las arrugas de expresión ya existentes o prevenir su aparición. Es un tratamiento que se adapta a las necesidades individuales, siempre buscando la armonía facial.' },
        { question: '¿El procedimiento duele?', answer: '¡Es un tratamiento muy bien tolerado! Se utilizan agujas extrafinas, por lo que la molestia es mínima. La mayoría de los pacientes lo describen como pequeños pinchazos que no requieren anestesia, aunque se puede usar frío local para mayor comodidad.' },
        { question: '¿Cuándo veré los resultados y cuánto duran?', answer: 'Los efectos no son inmediatos. Empezarás a notar una mejoría entre 2 y 4 días después de la aplicación, alcanzando el resultado máximo en unos 7 a 10 días. La duración de este efecto rejuvenecedor es temporal, generalmente de 3 a 6 meses. Pasado este tiempo, el músculo recupera su movilidad y el tratamiento puede repetirse para mantener los resultados.' },
        { question: '¿Cómo es la recuperación?', answer: '¡No hay tiempo de recuperación! Es un procedimiento ambulatorio que te permite volver a tus actividades diarias de inmediato. Simplemente se recomienda no hacer ejercicio intenso ni masajear la zona tratada durante las primeras horas.' },
        { question: '¿Es un tratamiento seguro?', answer: 'Sí, cuando es aplicado por un médico cualificado, es un procedimiento con un comportamiento muy predecible y un alto perfil de seguridad. Los efectos secundarios son raros, leves y temporales, como pequeños hematomas o un ligero dolor en el punto de inyección.' },
      ],
      videosSectionTitle1: 'Casos de Éxito:',
      videosSectionTitle2: 'Naturalidad y Frescura',
      videosTitle: 'Mira los Resultados',
      videosSubtitle: 'Descubre cómo el tratamiento con toxina botulínica puede refrescar tu apariencia de forma sutil y natural.',
      safetyTitle: 'La Clave del Éxito: Relajar, no Paralizar y Elegir al Profesional Adecuado',
      safetyP1: 'El secreto de un buen resultado es la naturalidad. El objetivo es relajar los músculos para suavizar las arrugas, no paralizarlos y dejar un rostro sin expresión. Un buen médico sabrá dosificar y aplicar el producto de forma estratégica para mantener la armonía de tus facciones.',
      safetyP2: 'Por ello, es fundamental que el tratamiento sea administrado exclusivamente por médicos con la formación y experiencia adecuadas, como dermatólogos o cirujanos plásticos. Ellos conocen a la perfección la anatomía facial y la técnica de inyección para lograr los mejores resultados y minimizar cualquier riesgo.',
      ctaBadge: 'Consulta Personalizada',
      ctaTitle: '¿Estás listo/a para una mirada más joven y relajada?',
      ctaP1: 'Si quieres reducir esas arrugas que te hacen parecer cansado/a o preocupado/a y buscas un resultado natural que te devuelva la frescura, este tratamiento es para ti.',
      ctaButton: 'Agendar por WhatsApp',
    },
    en: {
      heroTitle: 'Rediscover Your Youth: The Secret to a Fresh and Natural Look',
      heroSubtitle: 'Say goodbye to expression lines and enjoy a rested face, without surgery or losing your essence.',
      introTitle: 'Why do expression lines appear?',
      introP1: 'Every time you smile, frown, or are surprised, the muscles in your face contract. Over the years, these repeated movements leave marks on the skin, known as dynamic or expression wrinkles. In young skin, these lines disappear when the face relaxes, but over time, the skin loses elasticity and the wrinkles become visible even at rest.',
      introP2: 'If you are looking for a safe and effective way to soften these lines and regain a more relaxed and youthful appearance, botulinum toxin treatment is one of the best and most popular options in aesthetic medicine today.',
      introButton: 'Discover how it works',
      howItWorksTitle: 'What is aesthetic botulinum toxin and how does its "magic" work?',
      howItWorksP1: 'Botulinum toxin, popularly known as "Botox", is a purified protein that acts as a very precise muscle relaxant. It is not a filler; its function is very different and specific.',
      howItWorksP2: 'It is applied in very small doses through microinjections directly into the muscles responsible for forming the wrinkles that concern you. Its mechanism of action is to temporarily block the nerve signal that orders the muscle to contract. By relaxing the muscle in a controlled way, the overlying skin smoothes out, and expression lines soften or disappear.',
      howItWorksP3: 'The goal is never to "freeze" your face, but to relax it to achieve a natural look. We want you to continue expressing your emotions, but in a smoother and fresher way.',
      zonesSectionTitle1: 'Most Common',
      zonesSectionTitle2: 'Treatment Areas',
      treatmentZones: [
        { title: 'Frown lines', description: 'To soften the frown that gives an appearance of anger or worry.' },
        { title: 'Forehead', description: 'To reduce horizontal lines.' },
        { title: 'Crow\'s feet', description: 'To reduce the wrinkles around the eyes that appear when smiling.' },
      ],
      faqSectionTitle1: 'Everything you want to know',
      faqSectionTitle2: 'before deciding',
      faqSubtitle: 'It\'s normal to have questions. Here we answer the most important ones so you can feel completely confident.',
      faqs: [
        { question: 'Who is this treatment for?', answer: 'It is ideal for men and women who want to treat existing expression lines or prevent their appearance. It is a treatment that adapts to individual needs, always seeking facial harmony.' },
        { question: 'Does the procedure hurt?', answer: 'It is a very well-tolerated treatment! Extra-fine needles are used, so the discomfort is minimal. Most patients describe it as small pricks that do not require anesthesia, although local cold can be used for greater comfort.' },
        { question: 'When will I see the results and how long do they last?', answer: 'The effects are not immediate. You will begin to notice an improvement 2 to 4 days after the application, reaching the maximum result in about 7 to 10 days. The duration of this rejuvenating effect is temporary, usually 3 to 6 months. After this time, the muscle regains its mobility and the treatment can be repeated to maintain the results.' },
        { question: 'What is recovery like?', answer: 'There is no recovery time! It is an outpatient procedure that allows you to return to your daily activities immediately. It is simply recommended not to do intense exercise or massage the treated area for the first few hours.' },
        { question: 'Is it a safe treatment?', answer: 'Yes, when applied by a qualified doctor, it is a procedure with very predictable behavior and a high safety profile. Side effects are rare, mild, and temporary, such as small bruises or slight pain at the injection site.' },
      ],
      videosSectionTitle1: 'Success Stories:',
      videosSectionTitle2: 'Naturalness and Freshness',
      videosTitle: 'See the Results',
      videosSubtitle: 'Discover how botulinum toxin treatment can subtly and naturally refresh your appearance.',
      safetyTitle: 'The Key to Success: Relax, Don\'t Paralyze, and Choose the Right Professional',
      safetyP1: 'The secret to a good result is naturalness. The goal is to relax the muscles to soften wrinkles, not to paralyze them and leave an expressionless face. A good doctor will know how to dose and apply the product strategically to maintain the harmony of your features.',
      safetyP2: 'Therefore, it is essential that the treatment be administered exclusively by doctors with the appropriate training and experience, such as dermatologists or plastic surgeons. They have a perfect knowledge of facial anatomy and injection technique to achieve the best results and minimize any risk.',
      ctaBadge: 'Personalized Consultation',
      ctaTitle: 'Are you ready for a younger, more relaxed look?',
      ctaP1: 'If you want to reduce those wrinkles that make you look tired or worried and are looking for a natural result that restores your freshness, this treatment is for you.',
      ctaButton: 'Schedule via WhatsApp',
    },
  };
  
  const currentContent = content[lang];

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
              <Link href="#como-funciona">
                {currentContent.introButton} <ArrowRight />
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
                {currentContent.howItWorksTitle}
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                {currentContent.howItWorksP1}
              </p>
               <p className="mt-4 text-lg text-muted-foreground">
                {currentContent.howItWorksP2}
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                 {currentContent.howItWorksP3}
              </p>
            </div>
          </div>
          <div className="mt-20 text-center">
            <SectionTitleWithLines>
              <span className="text-foreground">{currentContent.zonesSectionTitle1}</span>{' '}
              <span className="text-primary">{currentContent.zonesSectionTitle2}</span>
            </SectionTitleWithLines>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {currentContent.treatmentZones.map((zone, index) => (
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
              <span className="text-foreground">{currentContent.faqSectionTitle1}</span>{' '}
              <span className="text-primary">{currentContent.faqSectionTitle2}</span>
            </SectionTitleWithLines>
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
                src="https://www.youtube.com/embed/VIK35mnWmqQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="w-full aspect-[9/16] rounded-lg shadow-lg overflow-hidden max-w-[325px] mx-auto">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VxXR_aDzS1w"
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
                  <WhatsAppIcon /> {currentContent.ctaButton}
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

    