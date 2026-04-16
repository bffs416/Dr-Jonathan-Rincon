'use client';

import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
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
import { VideoFacade } from '@/components/video-facade';
import Head from 'next/head';

export default function HarmonyCaPage() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const { lang } = useLanguage();
  
  const heroImage = findImage('harmonyca-hero') || findImage('preventive-hero');
  const whatAreTheyImage = findImage('harmonyca-what') || findImage('rejuvenation-guide');
  const ctaImage = findImage('harmonyca-cta') || findImage('cta-preventive');
  
  const content = {
    es: {
      heroTag1: '#1 en Bioestimulación',
      heroTag2: 'Rejuvenecimiento Dual',
      heroTitle: 'HArmonyCa en Medellín: Efecto Lifting + Producción de Colágeno',
      heroSubtitle: 'El tratamiento híbrido revolucionario que combina el poder de elevación del ácido hialurónico con la regeneración profunda de la hidroxiapatita de calcio.',
      introTitle: 'Restaura la Estructura de tu Piel con el Tratamiento Híbrido HArmonyCa',
      introP1: '¿Sientes que tu rostro ha perdido volumen y muestra signos de flacidez? HArmonyCa es un inyectable híbrido único en su clase. Ofrece los beneficios duales de dos potentes ingredientes en un solo tratamiento: ',
      introP1Strong: 'Ácido Hialurónico e Hidroxiapatita de Calcio',
      introP1Cont: '. Esto permite restaurar la juventud del rostro de forma segura.',
      introP2: 'El',
      introP2Strong: 'Dr. Jonathan Rincón, especialista en armonización facial',
      introP2Cont: ', te ofrece HArmonyCa para proporcionar un efecto lifting inmediato seguido de una estimulación continua de colágeno, logrando resultados extraordinarios y naturales.',
      dialogTitle: '¿Qué es y Cómo Funciona HArmonyCa?',
      dialogP1: 'HArmonyCa es un inyectable pionero que une el Ácido Hialurónico con microesferas de Hidroxiapatita de Calcio.',
      dialogP2: 'Funciona en dos fases clave:',
      dialogList1Title: 'Lifting Volumétrico Inmediato:',
      dialogList1Content: 'El gel de Ácido Hialurónico proporciona un efecto de elevación y voluminización instantáneo nada más aplicar el tratamiento.',
      dialogList2Title: 'Producción Natural de Colágeno a Largo Plazo:',
      dialogList2Content: 'Las microesferas de hidroxiapatita de calcio penetran en la dermis, generando un andamiaje para la producción constante y sostenida de colágeno.',
      videosSectionTitle1: 'Testimonios y',
      videosSectionTitle2: 'Casos Reales',
      videosTitle: 'Resultados y Experiencias',
      videosSubtitle: 'Conoce cómo nuestros pacientes han transformado su piel.',
      resultsTitle: 'Antes y Después',
      resultsSubtitle: 'Resultados reales con el tratamiento HArmonyCa. Edición profesional para que aprecies los cambios verdaderos.',
      beforeAfterCases: [
        { title: 'Armonización Facial', description: 'Mejora en la flacidez y reposición de volumen.', sessions: '1 sesión', image: '/images/Antes y Despues/21.png' },
        { title: 'Rejuvenecimiento del Tercio Inferior', description: 'Restauración del contorno facial.', sessions: '1 sesión', image: '/images/Antes y Despues/22.png' },
      ],
      benefitsSectionTitle1: 'Beneficios',
      benefitsSectionTitle2: 'Exclusivos',
      benefitsTitle: 'Transformación Dual y Duradera',
      benefitsSubtitle: 'Conoce los múltiples beneficios que hacen de HArmonyCa un tratamiento excepcional.',
      benefits: [
        { title: 'Efecto lifting de inmediato.' },
        { title: 'Estimulación a largo plazo de colágeno.' },
        { title: 'Resultados con apariencia muy natural.' },
        { title: 'Procedimiento mínimamente invasivo.' },
        { title: 'Duración prolongada de hasta 18 meses.' },
        { title: 'Mejora progresiva de la arquitectura de la piel.' },
      ],
      ctaBadge: 'Agenda tu Evaluación',
      ctaTitle: 'Descubre el Poder de HArmonyCa',
      ctaP1: 'Agenda tu valoración para que el Dr. Rincón pueda estudiar tu caso y diseñar el plan de tratamiento óptimo de bioestimulación y rejuvenecimiento.',
      ctaButton: 'Consulta por WhatsApp',
    },
    en: {
      heroTag1: '#1 in Biostimulation',
      heroTag2: 'Dual Rejuvenation',
      heroTitle: 'HArmonyCa in Medellín: Lifting Effect + Collagen Production',
      heroSubtitle: 'The revolutionary hybrid treatment that combines the lifting power of hyaluronic acid with the deep regeneration of calcium hydroxyapatite.',
      introTitle: 'Restore Your Skin Structure with HArmonyCa Hybrid Treatment',
      introP1: 'Do you feel like your face has lost volume and shows signs of sagging? HArmonyCa is a first-of-its-kind hybrid injectable. It offers the dual benefits of two powerful ingredients in a single treatment: ',
      introP1Strong: 'Hyaluronic Acid and Calcium Hydroxyapatite',
      introP1Cont: '. This safely restores the youth of the face.',
      introP2: 'Dr.',
      introP2Strong: 'Jonathan Rincón, specialist in facial harmonization',
      introP2Cont: ', offers HArmonyCa to provide an immediate lifting effect followed by continuous collagen stimulation, achieving extraordinary and natural results.',
      introButton: 'Why choose HArmonyCa?',
      dialogTitle: 'What is it and How Does HArmonyCa Work?',
      dialogP1: 'HArmonyCa is a pioneering injectable that unites Hyaluronic Acid with Calcium Hydroxyapatite microspheres.',
      dialogP2: 'It works in two key phases:',
      dialogList1Title: 'Immediate Volumetric Lifting:',
      dialogList1Content: 'The Hyaluronic Acid gel provides an instant lifting and volumizing effect immediately upon application.',
      dialogList2Title: 'Long-Term Natural Collagen Production:',
      dialogList2Content: 'The calcium hydroxyapatite microspheres penetrate the dermis, creating a scaffold for the constant and sustained production of collagen.',
      videosSectionTitle1: 'Testimonials and',
      videosSectionTitle2: 'Real Cases',
      videosTitle: 'Results and Experiences',
      videosSubtitle: 'See how our patients have transformed their skin.',
      resultsTitle: 'Before and After',
      resultsSubtitle: 'Real results with the HArmonyCa treatment. Professional editing so you can appreciate the true changes.',
      beforeAfterCases: [
        { title: 'Facial Harmonization', description: 'Improvement in sagging and volume repositioning.', sessions: '1 session', image: '/images/Antes y Despues/21.png' },
        { title: 'Lower Face Rejuvenation', description: 'Restoration of facial contour.', sessions: '1 session', image: '/images/Antes y Despues/22.png' },
      ],
      benefitsSectionTitle1: 'Exclusive',
      benefitsSectionTitle2: 'Benefits',
      benefitsTitle: 'Dual and Lasting Transformation',
      benefitsSubtitle: 'Discover the multiple benefits that make HArmonyCa an exceptional treatment.',
      benefits: [
        { title: 'Immediate lifting effect.' },
        { title: 'Long-term collagen stimulation.' },
        { title: 'Highly natural-looking results.' },
        { title: 'Minimally invasive procedure.' },
        { title: 'Prolonged duration of up to 18 months.' },
        { title: 'Progressive improvement of skin architecture.' },
      ],
      ctaBadge: 'Schedule Your Assessment',
      ctaTitle: 'Discover the Power of HArmonyCa',
      ctaP1: 'Schedule your assessment so Dr. Rincón can study your case and design the optimal biostimulation and rejuvenation treatment plan.',
      ctaButton: 'Consult via WhatsApp',
    },
  };
  
  const currentContent = content[lang];
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Tratamiento con HArmonyCa',
    alternateName: ["HArmonyCa", "Bioestimulación Híbrida", "Lifting Dual"],
    description: 'Tratamiento híbrido de Ácido Hialurónico e Hidroxiapatita de Calcio para un efecto lifting inmediato y estimulación de colágeno.',
    keywords: "harmonyca, acido hialuronico, estimulacion de colageno, rejuvenecimiento facial, lifting sin cirugia medellin",
    bodyLocation: [
      { '@type': 'BodyPart', name: 'Cara' },
      { '@type': 'BodyPart', name: 'Contorno Mandibular' },
    ],
    procedureType: {
      '@type': 'MedicalProcedureType',
      name: 'Mínimamente Invasivo'
    },
    performer: {
      '@type': 'Physician',
      name: 'Dr. Jonathan Rincón',
      url: 'https://www.drjonathanrincon.com/'
    },
    provider: {
      '@type': 'MedicalBusiness',
      name: 'Dr. Jonathan Rincón - Medicina Estética',
      telephone: '+573122784757',
      url: 'https://www.drjonathanrincon.com/'
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
          </div>
          <div>
            {whatAreTheyImage && (
              <div className="space-y-8 mt-12 md:mt-0">
                <Image
                  src={whatAreTheyImage.src}
                  alt={whatAreTheyImage.hint}
                  width={600}
                  height={600}
                  className="rounded-xl shadow-2xl w-full aspect-square object-cover animate-fade-in duration-500"
                  data-ai-hint={whatAreTheyImage.hint}
                />
                
                <div className="bg-primary/5 p-6 md:p-8 rounded-2xl border border-primary/10 animate-fade-in duration-700">
                  <h3 className="font-headline text-2xl text-primary mb-4">
                    {currentContent.dialogTitle}
                  </h3>
                  <div className="prose prose-lg dark:prose-invert text-muted-foreground space-y-4">
                    <p className="leading-relaxed">
                      {currentContent.dialogP1}
                    </p>
                    <p className="font-semibold text-foreground/80">
                      {currentContent.dialogP2}
                    </p>
                    <ul className="space-y-3 pl-1">
                      <li className="flex gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2.5 shrink-0" />
                        <span>
                          <strong className="text-primary font-bold">
                            {currentContent.dialogList1Title}
                          </strong>{' '}
                          {currentContent.dialogList1Content}
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2.5 shrink-0" />
                        <span>
                          <strong className="text-primary font-bold">
                            {currentContent.dialogList2Title}
                          </strong>{' '}
                          {currentContent.dialogList2Content}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
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
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {currentContent.benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center group">
                 <Card className="w-full shadow-lg border-t-2 border-t-primary">
                  <CardContent className="p-6 flex items-center gap-4 text-left">
                    <div className="bg-primary/10 text-primary p-3 rounded-full shrink-0">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <p className="font-semibold text-lg">{benefit.title}</p>
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
              <VideoFacade 
                videoUrl="https://www.youtube.com/embed/BDYZkLld91o" 
                title="Testimonio HArmonyCa 1"
              />
            </div>
            <div className="w-full aspect-[9/16] rounded-lg shadow-lg overflow-hidden max-w-[320px] mx-auto">
              <VideoFacade 
                videoUrl="https://www.youtube.com/embed/VNMP-RtT8qI" 
                title="Testimonio HArmonyCa 2"
              />
            </div>
            <div className="w-full aspect-[9/16] rounded-lg shadow-lg overflow-hidden max-w-[320px] mx-auto">
              <VideoFacade 
                videoUrl="https://www.youtube.com/embed/d7B-GRBZWno" 
                title="Testimonio HArmonyCa 3"
              />
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
              {currentContent.beforeAfterCases.map((caseItem: any, index: number) => (
                  <CarouselItem key={index}>
                    <Card className="shadow-xl overflow-hidden bg-card">
                      <CardContent className="p-0 flex flex-col justify-center items-center bg-muted min-h-[400px]">
                        {caseItem.image ? (
                          <div className="relative w-full aspect-square max-w-2xl mx-auto">
                            <Image
                              src={caseItem.image}
                              alt={`Antes y Después - ${caseItem.title}`}
                              fill
                              className="object-contain animate-fade-in duration-500"
                            />
                          </div>
                        ) : (
                           <p className="text-muted-foreground italic text-center p-8 bg-white/80 rounded border w-full max-w-xl shadow-inner m-6">
                              [Edición Profesional] Imagen de "Antes y Después" para: <br/> 
                              <br/><strong className="text-xl text-primary">{caseItem.title}</strong>
                           </p>
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


        {/* CTA Section */}
        <section id="citas" className="scroll-mt-20">
          <Card className="relative overflow-hidden shadow-xl md:grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12 z-20 bg-background/90 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none rounded-2xl m-4 md:m-0 h-auto">
              <Badge>{currentContent.ctaBadge}</Badge>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2 text-primary">
                {currentContent.ctaTitle}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-md">
                {currentContent.ctaP1}
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 shadow-xl hover:scale-105 transition-transform"
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
            <div className="absolute inset-0 md:relative h-full w-full z-10 md:min-h-[400px]">
              {ctaImage && (
                <Image
                  src={ctaImage.src}
                  alt={ctaImage.hint}
                  fill
                  className="object-cover animate-fade-in duration-500"
                  data-ai-hint={ctaImage.hint}
                />
              )}
               <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent md:hidden" />
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
