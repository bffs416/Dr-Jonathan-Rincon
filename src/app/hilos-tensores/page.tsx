

'use client';

import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  PlusCircle,
  RefreshCw,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { SectionArch } from '@/components/section-arch';
import { SectionTitleWithLines } from '@/components/section-title-with-lines';
import { findImage } from '@/lib/images';
import { useLanguage } from '@/context/language-context';
import Head from 'next/head';


export default function HilosTensoresPage() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const { lang } = useLanguage();
  
  const heroImage = findImage('hilos-hero');
  const whatAreTheyImage = findImage('hilos-what-are');
  const ctaImage = findImage('hilos-cta');
  
  const threadTypeImages = {
    lisos: findImage('hilos-lisos'),
    cog: findImage('hilos-cog'),
  };
  
  const appImages = {
    rhino: findImage('rhino-shaping'),
    fox: findImage('fox-eyes'),
    abs: findImage('abs-definition'),
    arms: findImage('arm-lift'),
    glutes: findImage('butt-lift'),
    scars: findImage('scar-treatment'),
  };
  
  const benefitImages = {
    cheeks: findImage('cheek-lift'),
    jawline: findImage('jawline-definition'),
    eyebrow: findImage('eyebrow-lift'),
    nasolabial: findImage('nasolabial-folds'),
    neck: findImage('neck-rejuvenation'),
    skin: findImage('skin-improvement'),
  };

  const content = {
    es: {
      heroTag1: '#1 en Medellín',
      heroTag2: 'La especialidad de la casa',
      heroTitle: 'Hilos Tensores en Medellín: Lifting y Rejuvenecimiento Facial sin Cirugía',
      heroSubtitle: 'Rejuvenecimiento facial sin cirugía para un lifting natural y duradero.',
      introTitle: 'Recupera la Firmeza y Juventud de tu Piel con Hilos Tensores',
      introP1: '¿Sientes que tu rostro ha perdido firmeza y luce más cansado? ¿La flacidez en tu abdomen, brazos o glúteos te impide sentirte con total confianza? Imagina poder retroceder el tiempo, recuperar la firmeza y redefinir tus contornos de una manera natural, segura y sin pasar por el quirófano. Hoy, gracias a los',
      introP1Strong: 'hilos tensores de última generación MINT',
      introP1Cont: ', ese deseo es una realidad en Medellín.',
      introP2: 'El',
      introP2Strong: 'Dr. Jonathan Rincón, reconocido como el experto #1 en hilos tensores en Medellín y Bogotá',
      introP2Cont: ', te ofrece una solución innovadora y mínimamente invasiva para revitalizar tu apariencia facial y corporal, con resultados que te encantarán.',
      introButton: '¿Cuál es el efecto de los Hilos Tensores?',
      dialogTitle: '¿Qué Son y Cuál es el Efecto de los Hilos Tensores?',
      dialogP1: 'Piensa en los hilos tensores como un "andamio" inteligente y reabsorbible para tu piel. Son suturas finísimas hechas de Polidioxanona (PDO), un material 100% biocompatible y seguro que se ha utilizado por décadas en cirugías complejas, incluso en el corazón. Esto garantiza que tu cuerpo los aceptará sin problemas y los reabsorberá de forma natural con el tiempo.',
      dialogP2: 'El tratamiento tiene una doble acción revolucionaria:',
      dialogList1Title: 'Efecto Lifting Inmediato:',
      dialogList1Content: 'Desde el momento en que el Dr. Rincón coloca los hilos espiculados (con pequeñas anclas), estos se fijan en el tejido subcutáneo para tensar y reposicionar la piel al instante. Verás un levantamiento visible en zonas como las mejillas, la línea mandibular o las cejas desde el primer día.',
      dialogList2Title: 'Bioestimulación Regenerativa a Largo Plazo (Neocolagénesis):',
      dialogList2Content: '¡Aquí ocurre la verdadera magia! La presencia de los hilos activa los fibroblastos, las células "fábrica" de tu piel, para que produzcan colágeno y elastina nuevos y de alta calidad. Este nuevo colágeno crea una red de soporte interna que mantiene tu piel firme, densa y elástica, incluso meses después de que los hilos se hayan reabsorbido por completo. El resultado es una mejora progresiva y duradera en la calidad de tu piel.',
      appsSectionTitle1: 'Aplicaciones',
      appsSectionTitle2: 'Específicas',
      appsTitle: 'Más Allá del Rostro: Aplicaciones Corporales y Faciales',
      appsSubtitle: 'La versatilidad de los hilos tensores permite tratar diversas áreas del cuerpo y rostro con resultados espectaculares.',
      advancedApplications: [
        { title: 'Rinomodelación con Hilos', description: 'Alternativa no quirúrgica para elevar la punta y rectificar el dorso nasal.' },
        { title: 'Lifting de Cejas (Fox Eyes)', description: 'Eleva la cola de la ceja para una mirada más abierta y juvenil.' },
        { title: 'Marcación Abdominal', description: 'Define los rectos abdominales y combate la flacidez.' },
        { title: 'Lifting de Brazos y Piernas', description: 'Solución eficaz para la flacidez en cara interna de brazos y muslos.' },
        { title: 'Levantamiento de Glúteos', description: 'Mejora la ptosis leve a moderada y redefine el contorno.' },
        { title: 'Tratamiento de Cicatrices Atróficas', description: 'Estimula colágeno para rellenar y mejorar la textura de cicatrices.' },
      ],
      videosSectionTitle1: 'Testimonios y',
      videosSectionTitle2: 'Casos de Éxito',
      videosTitle: 'Resultados que Hablan por Sí Mismos',
      videosSubtitle: 'Mira cómo los hilos tensores han transformado la vida de nuestros pacientes.',
      resultsTitle: 'Antes y Después',
      resultsSubtitle: 'Resultados reales de nuestros tratamientos con hilos tensores. Transformaciones que hablan por sí solas.',
      beforeAfterCases: [
        { title: 'Definición Mandibular', description: 'Técnica para un óvalo facial más definido y joven.', sessions: '1 sesión' },
        { title: 'Lifting de Cuello (Papada)', description: 'Hilos espiculados para tensado submentoniano.', sessions: '1 sesión' },
        { title: 'Rejuvenecimiento Periorbital', description: 'Hilos lisos para patas de gallo, ojeras y el ovalo facial.', sessions: '1 sesiones' },
        { title: 'Lifting de Cejas', description: 'Elevación de la cola de la ceja con hilos espiculados.', sessions: '1 sesión' },
        { title: 'Rinomodelación no quirúrgica', description: 'Elevación de punta y rectificación de dorso nasal.', sessions: '1 sesión' },
        { title: 'Líneas de Marioneta', description: 'Suavizado de los pliegues de las comisuras de los labios.', sessions: '1 sesión' },
        { title: 'Levantamiento de Glúteos', description: 'Hilos espiculados para mejorar la ptosis glútea leve.', sessions: '1 sesiones' },
        { title: 'Marcación Abdominal', description: 'Red de hilos para estimular colágeno y definir.', sessions: '2 sesiones' },
        { title: 'Rinomodelación', description: 'Rectificación de dorso nasal.', sessions: '1 sesiones' },
        { title: 'Correccion de ombligo triste', description: 'lifting para mejorar el aspecto del ombligo triste.', sessions: '1 sesiones' },
        { title: 'Hilos en surcos nasogenianos', description: 'Relleno con hilos en los surcos para disminuir las lineas de marioneta .', sessions: '1 sesiones' },
      ],
      typesSectionTitle1: 'Herramientas de',
      typesSectionTitle2: 'Precisión',
      typesTitle: 'Cada Hilo tiene su Propósito',
      typesSubtitle: 'Utilizo diferentes tipos de hilos (lisos, espiculados) para personalizar tu tratamiento de lifting facial y lograr los mejores resultados según tus necesidades de tracción o redensificación en Medellín.',
      threadTypes: [
        { name: 'Hilos Lisos (Monofilamento)', description: 'Ideales para crear una malla de soporte que redensifica la piel. Estimulan el colágeno para mejorar la textura y dar un aspecto más turgente en zonas con flacidez fina.' },
        { name: 'Hilos Espiculados (COG)', description: 'Son los protagonistas del efecto lifting. Cuentan con pequeñas anclas que se anclan al tejido, permitiendo traccionar y reposicionar la piel de forma inmediata y efectiva.' },
      ],
      cardFlipCta: '(Haz clic para ver más)',
      benefitsSectionTitle1: 'Beneficios',
      benefitsSectionTitle2: 'Clave',
      benefitsTitle: 'Resultados que Transforman con el Lifting No Quirúrgico',
      benefitsSubtitle: 'Descubre los múltiples beneficios de este tratamiento innovador para devolverle la juventud a tu rostro y cuerpo.',
      benefits: [
        { title: 'Lifting de mejillas y pómulos.' },
        { title: 'Redefinición del óvalo facial.' },
        { title: 'Elevación de cejas caídas.' },
        { title: 'Corrección de surcos nasogenianos.' },
        { title: 'Rejuvenecimiento del cuello.' },
        { title: 'Mejora general de la piel.' },
      ],
      faqSectionTitle1: 'Preguntas',
      faqSectionTitle2: 'Frecuentes',
      faqTitle: 'Preguntas Frecuentes de los Pacientes',
      faqSubtitle: 'Tus dudas más comunes sobre el tratamiento con hilos tensores en nuestra clínica de Medellín.',
      faqs: [
        { question: '¿Duelen mucho los hilos tensores durante la colocación?', answer: 'Esta es una de las preguntas más frecuentes. Para asegurar tu confort, se utiliza anestesia local para minimizar cualquier molestia. La mayoría de los pacientes en Medellín reportan una sensación de presión leve, pero no dolor significativo.' },
        { question: '¿Cuánto tiempo duran los hilos tensores?', answer: 'Los resultados de los hilos tensores pueden durar entre 12 y 18 meses. Esto depende del tipo de hilo, la edad del paciente y su tipo de piel. La producción de colágeno inducida prolonga los beneficios del lifting facial mucho después de que el hilo se haya reabsorbido.' },
        { question: '¿Cuándo se nota el efecto de los hilos tensores?', answer: 'Aunque hay un efecto tensor inmediato, el resultado final del rejuvenecimiento facial se aprecia mejor después de 2-3 meses. Para este tiempo, el nuevo colágeno se ha formado completamente alrededor de los hilos, maximizando la firmeza y mejorando la calidad de la piel.' },
        { question: '¿Cada cuánto tiempo debo hacerme el tratamiento de hilos tensores?', answer: 'No hay una respuesta única, ya que depende de tu proceso de envejecimiento individual y tus objetivos. Generalmente, se recomienda una sesión de mantenimiento cada 12 a 18 meses para prolongar y potenciar los resultados.' },
        { question: '¿Qué cuidados debo tener después del tratamiento?', answer: 'Se recomienda evitar gesticular exageradamente, masajear la zona tratada y realizar ejercicio intenso durante los primeros días. El Dr. Rincón te dará una pauta completa de cuidados post-tratamiento para asegurar los mejores resultados.' },
        { question: '¿Soy un buen candidato para los hilos tensores en Medellín?', answer: 'Los hilos tensores son ideales para personas que presentan flacidez facial o corporal de leve a moderada y desean un rejuvenecimiento sin cirugía. La mejor manera de saberlo es agendando una cita de valoración personalizada con el Dr. Rincón.' },
      ],
      ctaBadge: 'Consulta Personalizada',
      ctaTitle: 'Agenda tu Valoración de Hilos Tensores',
      ctaP1: '¿Sientes que los hilos tensores son para ti? El Dr. Rincón evaluará tu caso de forma personalizada para diseñar un tratamiento a tu medida que cumpla tus expectativas de rejuvenecimiento.',
      ctaButton: 'Agendar por WhatsApp',
    },
    en: {
      heroTag1: '#1 in Medellín',
      heroTag2: 'The house specialty',
      heroTitle: 'Thread Lifts in Medellín: Non-Surgical Facial and Body Lifting & Rejuvenation',
      heroSubtitle: 'Non-surgical facial rejuvenation for a natural and long-lasting lift.',
      introTitle: 'Restore the Firmness and Youth of Your Skin with Thread Lifts',
      introP1: 'Do you feel that your face has lost firmness and looks more tired? Does sagging in your abdomen, arms, or buttocks prevent you from feeling completely confident? Imagine being able to turn back time, regain firmness, and redefine your contours in a natural, safe way without surgery. Today, thanks to',
      introP1Strong: 'latest generation MINT thread lifts',
      introP1Cont: ', that desire is a reality in Medellín.',
      introP2: 'Dr.',
      introP2Strong: 'Jonathan Rincón, recognized as the #1 expert in thread lifts in Medellín and Bogotá',
      introP2Cont: ', offers you an innovative and minimally invasive solution to revitalize your facial and body appearance, with results you will love.',
      introButton: 'What is the effect of Thread Lifts?',
      dialogTitle: 'What Exactly Are Thread Lifts and What is Their Effect?',
      dialogP1: 'Think of thread lifts as an intelligent, absorbable "scaffolding" for your skin. They are very fine sutures made of Polydioxanone (PDO), a 100% biocompatible and safe material that has been used for decades in complex surgeries, including heart surgery. This ensures that your body will accept them without problems and reabsorb them naturally over time.',
      dialogP2: 'The treatment has a revolutionary dual action:',
      dialogList1Title: 'Immediate Lifting Effect:',
      dialogList1Content: 'From the moment Dr. Rincón places the barbed threads (with small anchors), they attach to the subcutaneous tissue to instantly tighten and reposition the skin. You will see a visible lift in areas like the cheeks, jawline, or eyebrows from day one.',
      dialogList2Title: 'Long-Term Regenerative Biostimulation (Neocollagenesis):',
      dialogList2Content: 'This is where the real magic happens! The presence of the threads activates fibroblasts, your skin\'s "factory" cells, to produce new, high-quality collagen and elastin. This new collagen creates an internal support network that keeps your skin firm, dense, and elastic, even months after the threads have been completely reabsorbed. The result is a progressive and lasting improvement in the quality of your skin.',
      appsSectionTitle1: 'Specific',
      appsSectionTitle2: 'Applications',
      appsTitle: 'Beyond the Face: Body and Facial Applications',
      appsSubtitle: 'The versatility of thread lifts allows for treating various areas of the body and face with spectacular results.',
      advancedApplications: [
        { title: 'Rhinomodeling with Threads', description: 'A non-surgical alternative to lift the tip and straighten the nasal dorsum.' },
        { title: 'Eyebrow Lift (Fox Eyes)', description: 'Lifts the tail of the eyebrow for a more open and youthful look.' },
        { title: 'Abdominal Definition', description: 'Defines the rectus abdominis muscles and combats sagging.' },
        { title: 'Arm and Leg Lift', description: 'An effective solution for sagging on the inner arms and thighs.' },
        { title: 'Buttock Lift', description: 'Improves mild to moderate ptosis and redefines the contour.' },
        { title: 'Treatment of Atrophic Scars', description: 'Stimulates collagen to fill and improve the texture of scars.' },
      ],
      videosSectionTitle1: 'Testimonials and',
      videosSectionTitle2: 'Success Stories',
      videosTitle: 'Results that Speak for Themselves',
      videosSubtitle: 'See how thread lifts have transformed our patients\' lives.',
      resultsTitle: 'Before and After',
      resultsSubtitle: 'Real results from our thread lift treatments. Transformations that speak for themselves.',
      beforeAfterCases: [
        { title: 'Jawline Definition', description: 'Technique for a more defined and youthful facial oval.', sessions: '1 session' },
        { title: 'Neck Lift (Double Chin)', description: 'Barbed threads for submental tightening.', sessions: '1 session' },
        { title: 'Periorbital Rejuvenation', description: 'Smooth threads for crow\'s feet, dark circles, and the facial oval.', sessions: '1 sessions' },
        { title: 'Eyebrow Lift', description: 'Lifting the tail of the eyebrow with barbed threads.', sessions: '1 session' },
        { title: 'Non-surgical Rhinomodeling', description: 'Lifting the tip and straightening the nasal dorsum.', sessions: '1 session' },
        { title: 'Marionette Lines', description: 'Smoothing the folds at the corners of the lips.', sessions: '1 session' },
        { title: 'Buttock Lift', description: 'Barbed threads to improve mild gluteal ptosis.', sessions: '1 sessions' },
        { title: 'Abdominal Definition', description: 'A network of threads to stimulate collagen and define.', sessions: '2 sessions' },
        { title: 'Rhinomodeling', description: 'Straightening the nasal dorsum.', sessions: '1 sessions' },
        { title: 'Sad belly button correction', description: 'lifting to improve the appearance of a sad belly button.', sessions: '1 sessions' },
        { title: 'Threads in nasolabial folds', description: 'Filling the folds with threads to reduce marionette lines.', sessions: '1 sessions' },
      ],
      typesSectionTitle1: 'Tools of',
      typesSectionTitle2: 'Precision',
      typesTitle: 'Each Thread Has Its Purpose',
      typesSubtitle: 'I use different types of threads (smooth, barbed) to customize your facial lift treatment and achieve the best results according to your needs for traction or redensification in Medellín.',
      threadTypes: [
        { name: 'Smooth Threads (Monofilament)', description: 'Ideal for creating a support mesh that redensifies the skin. They stimulate collagen to improve texture and give a more turgid appearance in areas with fine sagging.' },
        { name: 'Barbed Threads (COG)', description: 'They are the protagonists of the lifting effect. They have small anchors that attach to the tissue, allowing for immediate and effective traction and repositioning of the skin.' },
      ],
      cardFlipCta: '(Click to see more)',
      benefitsSectionTitle1: 'Key',
      benefitsSectionTitle2: 'Benefits',
      benefitsTitle: 'Transformative Results with Non-Surgical Lifting',
      benefitsSubtitle: 'Discover the multiple benefits of this innovative treatment to restore youth to your face and body.',
      benefits: [
        { title: 'Lifting of cheeks and cheekbones.' },
        { title: 'Redefinition of the facial oval.' },
        { title: 'Lifting of droopy eyebrows.' },
        { title: 'Correction of nasolabial folds.' },
        { title: 'Rejuvenation of the neck.' },
        { title: 'Overall skin improvement.' },
      ],
      faqSectionTitle1: 'Frequently',
      faqSectionTitle2: 'Asked Questions',
      faqTitle: 'Frequent Patient Questions',
      faqSubtitle: 'Your most common questions about thread lift treatment at our Medellín clinic.',
      faqs: [
        { question: 'Do thread lifts hurt a lot during placement?', answer: 'This is one of the most frequent questions. To ensure your comfort, local anesthesia is used to minimize any discomfort. Most patients in Medellín report a slight pressure sensation, but no significant pain.' },
        { question: 'How long do thread lifts last?', answer: 'The results of thread lifts can last between 12 and 18 months. This depends on the type of thread, the patient\'s age, and their skin type. The induced collagen production prolongs the benefits of the facial lift long after the thread has been reabsorbed.' },
        { question: 'When is the effect of the threads noticeable?', answer: 'Although there is an immediate tightening effect, the final result of the facial rejuvenation is best appreciated after 2-3 months. By this time, the new collagen has completely formed around the threads, maximizing firmness and improving skin quality.' },
        { question: 'How often should I get thread lift treatments?', answer: 'There is no single answer, as it depends on your individual aging process and your goals. Generally, a maintenance session is recommended every 12 to 18 months to prolong and enhance the results.' },
        { question: 'What care should I take after the treatment?', answer: 'It is recommended to avoid exaggerated gestures, massaging the treated area, and intense exercise for the first few days. Dr. Rincón will give you a complete post-treatment care guide to ensure the best results.' },
        { question: 'Am I a good candidate for thread lifts in Medellín?', answer: 'Thread lifts are ideal for people with mild to moderate facial or body sagging who want a non-surgical rejuvenation. The best way to find out is by scheduling a personalized assessment appointment with Dr. Rincón.' },
      ],
      ctaBadge: 'Personalized Consultation',
      ctaTitle: 'Schedule Your Thread Lift Assessment',
      ctaP1: 'Do you feel that thread lifts are for you? Dr. Rincón will evaluate your case personally to design a customized treatment that meets your rejuvenation expectations.',
      ctaButton: 'Schedule via WhatsApp',
    },
  };
  
  const currentContent = content[lang];
  
  const handleCardFlip = (index: number) => {
    if (flippedCard === index) {
      setFlippedCard(null);
    } else {
      setFlippedCard(index);
    }
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Lifting con Hilos Tensores',
    alternateName: ["Hilos Mágicos", "Lifting sin Cirugía", "Rejuvenecimiento Facial con Hilos"],
    description: 'Tratamiento de rejuvenecimiento facial y corporal sin cirugía para un lifting natural y duradero mediante hilos de Polidioxanona (PDO).',
    keywords: "cuanto duran los hilos tensores, hilos tensores medellín, hilos pdo, lifting facial sin cirugía, rejuvenecimiento facial, duelen los hilos tensores, surcos nasogenianos, experto en hilos, promoción hilos tensores, hilos tensores bogotá, hilos tensores colombia",
    bodyLocation: [
      { '@type': 'BodyPart', name: 'Cara' },
      { '@type': 'BodyPart', name: 'Cuello' },
      { '@type': 'BodyPart', name: 'Brazos' },
      { '@type': 'BodyPart', name: 'Abdomen' },
      { '@type': 'BodyPart', name: 'Glúteos' },
      { '@type': 'BodyPart', name: 'Surcos Nasogenianos' },
    ],
    procedureType: {
      '@type': 'MedicalProcedureType',
      name: 'Mínimamente Invasivo'
    },
    indication: [
      { '@type': 'MedicalIndication', name: 'Flacidez cutánea' },
      { '@type': 'MedicalIndication', name: 'Arrugas faciales' },
      { '@type': 'MedicalIndication', name: 'Pérdida de definición del óvalo facial' },
      { '@type': 'MedicalIndication', name: 'Surcos nasogenianos' },
    ],
    performer: {
      '@type': 'Physician',
      name: 'Dr. Jonathan Rincón',
      image: 'https://www.drjonathanrincon.com/images/Logo%20Dr%20Johnathan.png',
      jobTitle: 'Médico Cirujano especialista en Medicina Estética',
      url: 'https://www.drjonathanrincon.com/'
    },
    provider: {
      '@type': 'MedicalBusiness',
      name: 'Dr. Jonathan Rincón - Medicina Estética',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Edificio Azor, Cra. 84 #37b - 195, Primer piso, La América',
        addressLocality: 'Medellín',
        addressRegion: 'Antioquia',
        postalCode: '050032',
        addressCountry: 'CO'
      },
      areaServed: [
        { '@type': 'Country', name: 'Colombia' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Spain' },
        { '@type': 'Continent', name: 'Europe' }
      ],
      telephone: '+573122784757',
      url: 'https://www.drjonathanrincon.com/',
      image: 'https://www.drjonathanrincon.com/images/Logo Dr Johnathan.png'
    }
  };

  return (
    <div>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.src}
            alt={heroImage.hint}
            fill
            className="object-cover animate-fade-in duration-500"
            data-ai-hint={heroImage.hint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="container relative z-20 px-4">
            <div className="flex flex-col items-center gap-4">
              <p className="bg-secondary/20 text-white font-bold text-2xl md:text-4xl py-2 px-6 rounded-full backdrop-blur-sm">{currentContent.heroTag1}</p>
              <p className="bg-primary font-bold text-white text-base py-1 px-3 rounded-full">{currentContent.heroTag2}</p>
            </div>
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold !leading-tight tracking-tight drop-shadow-lg mt-4">
              {currentContent.heroTitle}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-200 drop-shadow-md">
              {currentContent.heroSubtitle}
            </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 sm:py-24 space-y-24">
        {/* Intro Section */}
        <section
          id="intro"
          className="scroll-mt-20 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              {currentContent.introTitle}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              {currentContent.introP1}{' '}
              <strong className="text-primary font-bold">
                {currentContent.introP1Strong}
              </strong>
              {currentContent.introP1Cont}
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              {currentContent.introP2}{' '}
              <strong className="text-primary font-bold">
                {currentContent.introP2Strong}
              </strong>
              {currentContent.introP2Cont}
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="mt-8">
                  {currentContent.introButton}{' '}
                  <ArrowRight />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] rounded-2xl shadow-xl border">
                <DialogHeader>
                  <DialogTitle className="font-headline text-2xl text-primary">
                    {currentContent.dialogTitle}
                  </DialogTitle>
                </DialogHeader>
                <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground">
                  <p>
                    {currentContent.dialogP1}
                  </p>
                  <p>{currentContent.dialogP2}</p>
                  <ol>
                    <li>
                      <strong className="text-primary font-bold">
                        {currentContent.dialogList1Title}
                      </strong>{' '}
                      {currentContent.dialogList1Content}
                    </li>
                    <li>
                      <strong className="text-primary font-bold">
                        {currentContent.dialogList2Title}
                      </strong>{' '}
                      {currentContent.dialogList2Content}
                    </li>
                  </ol>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div>
            {whatAreTheyImage && (
              <Image
                src={whatAreTheyImage.src}
                alt={whatAreTheyImage.hint}
                width={600}
                height={600}
                className="rounded-xl shadow-2xl w-full aspect-square object-cover animate-fade-in duration-500"
                data-ai-hint={whatAreTheyImage.hint}
              />
            )}
          </div>
        </section>

         {/* Advanced Applications Section */}
        <section id="aplicaciones" className="scroll-mt-20 text-center">
          <SectionTitleWithLines><span className="text-foreground">{currentContent.appsSectionTitle1}</span>{' '}<span className="text-primary">{currentContent.appsSectionTitle2}</span></SectionTitleWithLines>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">
            {currentContent.appsTitle}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            {currentContent.appsSubtitle}
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {currentContent.advancedApplications.map((app, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {appImages[Object.keys(appImages)[index] as keyof typeof appImages] && (
                  <SectionArch
                    imageUrl={appImages[Object.keys(appImages)[index] as keyof typeof appImages]!.src}
                    alt={app.title}
                    data-ai-hint={appImages[Object.keys(appImages)[index] as keyof typeof appImages]!.hint}
                  />
                )}
                <Card className="w-full -mt-[60px] pt-20 pb-6 px-6 shadow-lg flex flex-col flex-1">
                  <CardContent className="p-0 flex-1">
                    <p className="font-headline font-semibold text-xl">{app.title}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {app.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* YouTube Videos Section */}
        <section id="videos" className="scroll-mt-20 text-center">
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
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
            <div className="w-full aspect-[9/16] rounded-lg shadow-lg overflow-hidden max-w-[320px] mx-auto">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/8_jxKjCNLTA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="w-full aspect-[9/16] rounded-lg shadow-lg overflow-hidden max-w-[320px] mx-auto">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/4HyDiDdty3c"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="w-full aspect-[9/16] rounded-lg shadow-lg overflow-hidden max-w-[320px] mx-auto">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/ynRpDfgLCno"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Before and After Section */}
        <section id="resultados" className="scroll-mt-20 text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">
                {currentContent.resultsTitle}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                {currentContent.resultsSubtitle}
            </p>
          <Carousel
            className="w-full max-w-5xl mx-auto mt-12"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent className="[transform:translateZ(0)]">
              {currentContent.beforeAfterCases.map((caseItem, index) => (
                  <CarouselItem key={index}>
                    <Card className="shadow-xl overflow-hidden bg-card">
                      <CardContent className="p-4 sm:p-6">
                        {findImage(['hilos-jawline-combined', 'neck-combined', 'eyes-combined', 'foxy-combined', 'rhino-combined', 'marionette-combined', 'glutes-combined', 'abs-combined', 'arms-combined', 'thighs-combined', 'knees-combined'][index]) && (
                          <Image
                            src={findImage(['hilos-jawline-combined', 'neck-combined', 'eyes-combined', 'foxy-combined', 'rhino-combined', 'marionette-combined', 'glutes-combined', 'abs-combined', 'arms-combined', 'thighs-combined', 'knees-combined'][index])!.src}
                            alt={`Antes y Después - ${caseItem.title}`}
                            width={800}
                            height={800}
                            className="rounded-lg aspect-square object-contain mx-auto animate-fade-in duration-500"
                            data-ai-hint={findImage(['hilos-jawline-combined', 'neck-combined', 'eyes-combined', 'foxy-combined', 'rhino-combined', 'marionette-combined', 'glutes-combined', 'abs-combined', 'arms-combined', 'thighs-combined', 'knees-combined'][index])!.hint}
                            quality={90}
                          />
                        )}
                      </CardContent>
                      <CardFooter className="flex flex-col items-center text-center p-4 sm:p-6 pt-0">
                          <CardTitle className="font-headline text-2xl">{caseItem.title}</CardTitle>
                          <p className="text-muted-foreground text-sm mt-1">{caseItem.description}</p>
                          <Badge variant="secondary" className="mx-auto mt-2">{caseItem.sessions}</Badge>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 md:-left-10" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 md:-right-10" />
          </Carousel>
        </section>

        {/* Thread Types Section */}
        <section id="tipos-hilos" className="scroll-mt-20 text-center">
           <SectionTitleWithLines>
             <span className="text-foreground">{currentContent.typesSectionTitle1}</span>{' '}
             <span className="text-primary">{currentContent.typesSectionTitle2}</span>
           </SectionTitleWithLines>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">
            {currentContent.typesTitle}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            {currentContent.typesSubtitle}
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {currentContent.threadTypes.map((type, index) => (
              <div
                key={type.name}
                className={cn('flip-card', { flipped: flippedCard === index })}
                onClick={() => handleCardFlip(index)}
              >
                <div className="flip-card-inner cursor-pointer" style={{height: "320px"}}>
                  <div className="flip-card-front">
                    <Card className="text-center p-8 h-full flex flex-col justify-center shadow-lg">
                      <CardHeader className="p-0 items-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                          <span className="text-3xl text-primary">✧</span>
                        </div>
                        <CardTitle className="font-headline text-xl">
                          {type.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 mt-4">
                        <p className="text-muted-foreground">{type.description}</p>
                      </CardContent>
                      <p className="text-xs text-muted-foreground italic mt-4">
                        {currentContent.cardFlipCta}
                      </p>
                    </Card>
                  </div>
                  <div className="flip-card-back">
                    <Card className="h-full shadow-lg overflow-hidden relative">
                      {threadTypeImages[Object.keys(threadTypeImages)[index] as keyof typeof threadTypeImages] && (
                        <Image
                          src={threadTypeImages[Object.keys(threadTypeImages)[index] as keyof typeof threadTypeImages]!.src}
                          alt={`Imagen de ${type.name}`}
                          fill
                          className="object-cover animate-fade-in duration-500"
                          data-ai-hint={threadTypeImages[Object.keys(threadTypeImages)[index] as keyof typeof threadTypeImages]!.hint}
                        />
                      )}
                       <div className="absolute inset-0 bg-black/30" />
                       <div className="absolute top-2 right-2 bg-background/80 p-1 rounded-full text-foreground">
                          <RefreshCw className="w-4 h-4" />
                       </div>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
         {/* Benefits Section */}
        <section id="beneficios" className="scroll-mt-20 text-center">
          <SectionTitleWithLines>
            <span className="text-foreground">{currentContent.benefitsSectionTitle1}</span>{' '}
            <span className="text-primary">{currentContent.benefitsSectionTitle2}</span>
          </SectionTitleWithLines>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">
            {currentContent.benefitsTitle}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            {currentContent.benefitsSubtitle}
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {currentContent.benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                {benefitImages[Object.keys(benefitImages)[index] as keyof typeof benefitImages] && (
                  <div className="relative w-40 h-40 md:w-48 md:h-48 mb-4">
                    <Image
                      src={benefitImages[Object.keys(benefitImages)[index] as keyof typeof benefitImages]!.src}
                      alt={benefit.title}
                      width={200}
                      height={200}
                      className="rounded-xl shadow-lg w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 aspect-square animate-fade-in duration-500"
                      data-ai-hint={benefitImages[Object.keys(benefitImages)[index] as keyof typeof benefitImages]!.hint}
                    />
                  </div>
                )}
                <Card className="w-full shadow-lg">
                  <CardContent className="p-4 flex items-center justify-center gap-4">
                    <div className="bg-primary/10 text-primary p-2 rounded-full shrink-0">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <p className="font-semibold text-base md:text-lg flex-1 text-left">{benefit.title}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="scroll-mt-20 max-w-4xl mx-auto text-center">
           <SectionTitleWithLines>
             <span className="text-foreground">{currentContent.faqSectionTitle1}</span>{' '}
             <span className="text-primary">{currentContent.faqSectionTitle2}</span>
           </SectionTitleWithLines>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mt-2">
            {currentContent.faqTitle}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground text-center">
            {currentContent.faqSubtitle}
          </p>
          <Accordion type="single" collapsible className="w-full mt-12 text-left">
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

        {/* CTA Section */}
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
              {ctaImage && (
                <Image
                  src={ctaImage.src}
                  alt={ctaImage.hint}
                  fill
                  className="object-cover animate-fade-in duration-500"
                  data-ai-hint={ctaImage.hint}
                />
              )}
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
