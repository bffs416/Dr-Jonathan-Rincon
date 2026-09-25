'use client';

import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  Play,
  Bookmark,
  UserCheck,
  ShieldCheck,
  Zap,
  Clock,
  Sparkles,
  Heart,
  Activity,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useRef } from 'react';
import { SectionTitleWithLines } from '@/components/section-title-with-lines';
import { findImage } from '@/lib/images';
import { useLanguage } from '@/context/language-context';
import { VideoFacade } from '@/components/video-facade';
import Head from 'next/head';

export default function HarmonyCaPage() {
  const { lang } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  const heroImage = findImage('harmonyca-hero');
  const science3dImage = findImage('harmonyca-3d');
  const ctaImage = findImage('harmonyca-cta') || findImage('cta-preventive');

  const content = {
    es: {
      heroTag1: '#1 en Bioestimulación',
      heroTag2: 'Rejuvenecimiento Dual',
      heroTitle: 'HArmonyCa en Medellín: Efecto Lifting + Producción de Colágeno',
      heroSubtitle: 'El tratamiento híbrido revolucionario que combina el poder de elevación del ácido hialurónico con la regeneración profunda de la hidroxiapatita de calcio.',
      
      scienceTitle: 'La Ciencia Detrás de HArmonyCa',
      scienceSubtitle: 'Arquitectura Facial Avanzada',
      scienceDescription: 'HArmonyCa no es solo un relleno; es una matriz híbrida que ofrece un lifting volumétrico inmediato seguido de una bioestimulación sostenida.',
      scienceExpert: 'Bajo la técnica experta del Dr. Jonathan Rincón, este tratamiento se personaliza para restaurar la firmeza y redefinir contornos con precisión quirúrgica sin necesidad de quirófano.',
      
      dualActionTitle: 'Doble Acción en una Sola Inyección',
      haTitle: 'Efecto Lifting Inmediato (HA)',
      haDesc: 'El ácido hialurónico proporciona una elevación instantánea, suavizando arrugas y restaurando volumen donde más se necesita.',
      cahaTitle: 'Bioestimulación a Largo Plazo (CaHA)',
      cahaDesc: 'Las microesferas de hidroxiapatita de calcio estimulan la producción natural de colágeno, redensificando la piel durante meses.',
      
      benefitsTitle: 'Beneficios Clave',
      benefitsSubtitle: '¿Por qué elegir el tratamiento HArmonyCa?',
      benefitsList: [
        { title: 'Lifting Inmediato', description: 'El AH proporciona una elevación visible al instante.', icon: Zap },
        { title: 'Más Colágeno', description: 'La hidroxiapatita estimula la regeneración natural.', icon: Activity },
        { title: 'Larga Duración', description: 'Resultados duraderos de hasta 18-24 meses.', icon: Clock },
        { title: 'Aspecto Natural', description: 'Mejora la piel sin alterar tus facciones.', icon: Heart },
        { title: 'Mínimo Invasivo', description: 'Sin cirugía ni largos tiempos de recuperación.', icon: ShieldCheck },
        { title: 'Seguridad Clínica', description: 'Materiales biocompatibles de alta seguridad.', icon: Sparkles },
      ],
      
      resultsTitle: 'Resultados Reales (Antes y Después)',
      resultsSubtitle: 'Evidencia clínica de la transformación dual: volumen y firmeza.',
      beforeAfterCases: [
        { title: 'Armonización Facial', description: 'Mejora en la flacidez y reposición de volumen.', sessions: '1 sesión', image: '/images/Antes y Despues/21.png' },
        { title: 'Rejuvenecimiento del Tercio Inferior', description: 'Restauración del contorno facial.', sessions: '1 sesión', image: '/images/Antes y Despues/22.png' },
      ],
      
      testimonialsTitle: 'Testimonios y Experiencias',
      testimonialsSubtitle: 'Lo que dicen quienes han transformado su mirada y piel.',
      
      faqTitle: 'Preguntas Frecuentes',
      faqSubtitle: 'Resolvemos tus dudas sobre HArmonyCa',
      faqList: [
        { 
          q: '¿Qué diferencia a HArmonyCa de un relleno común?', 
          a: 'A diferencia de los rellenos tradicionales de solo ácido hialurónico, HArmonyCa es un híbrido. Combina el volumen inmediato del AH con la bioestimulación a largo plazo de la hidroxiapatita de calcio, logrando una arquitectura facial más completa.' 
        },
        { 
          q: '¿Es doloroso el tratamiento?', 
          a: 'El confort del paciente es nuestra prioridad. El producto contiene lidocaína (un anestésico local) y el Dr. Rincón utiliza técnicas delicadas para que la experiencia sea muy tolerable y cómoda.' 
        },
        { 
          q: '¿Cuándo veré los resultados finales?', 
          a: 'El efecto lifting se nota al instante. Sin embargo, la mejora en la calidad, densidad y firmeza de la piel por la producción de nuevo colágeno alcanza su máximo esplendor entre los 2 y 3 meses después de la sesión.' 
        },
        { 
          q: '¿Cuánto dura el efecto de HArmonyCa?', 
          a: 'Los resultados son excepcionalmente duraderos. Dependiendo del metabolismo de cada paciente, los beneficios pueden mantenerse entre 18 y hasta 24 meses.' 
        },
        { 
          q: '¿Hay tiempo de recuperación?', 
          a: 'Es un tratamiento ambulatorio. Puedes retomar tus actividades normales casi de inmediato. Solo se recomienda evitar ejercicio intenso y saunas por las primeras 24-48 horas.' 
        }
      ],
      
      blogTitle: 'Aprende más de HArmonyCa',
      blogSubtitle: 'Artículos exclusivos del Dr. Jonathan Rincón',
      blogPosts: [
        {
          id: 'harmonyca-arquitectura-facial-3d',
          title: 'HArmonyCa: Arquitectura Facial 3D',
          image: '/images/Arquitectura Facial 3D Cómo HArmonyCa Esculpe tus Luces y Sombras Naturales .jpg',
          link: '/blog/harmonyca-arquitectura-facial-3d'
        },
        {
          id: 'harmonyca-lifting-facial-sin-cirugia',
          title: 'Lifting Facial Sin Cirugía',
          image: "/images/HArmonyCa El Efecto Lifting Híbrido que Redefine tu Rostro sin Cirugía.jpg",
          link: '/blog/harmonyca-lifting-facial-sin-cirugia'
        },
        {
          id: 'harmonyca-redefine-ovalo-facial',
          title: 'Redefinición del Óvalo Facial',
          image: '/images/HArmonyCa Redefinición del Óvalo Facial sin Cirugía.jpg',
          link: '/blog/harmonyca-redefine-ovalo-facial'
        }
      ],
      
      ctaBadge: 'Agenda tu Evaluación',
      ctaTitle: 'Descubre el Poder de HArmonyCa',
      ctaP1: 'Agenda tu valoración para que el Dr. Rincón pueda estudiar tu caso y diseñar el plan de tratamiento óptimo.',
      ctaButton: 'Consulta por WhatsApp',
    },
    en: {
      heroTag1: '#1 in Biostimulation',
      heroTag2: 'Dual Rejuvenation',
      heroTitle: 'HArmonyCa in Medellín: Lifting Effect + Collagen Production',
      heroSubtitle: 'The revolutionary hybrid treatment that combines the lifting power of hyaluronic acid with the deep regeneration of calcium hydroxyapatite.',
      
      scienceTitle: 'The Science Behind HArmonyCa',
      scienceSubtitle: 'Advanced Facial Architecture',
      scienceDescription: 'HArmonyCa is not just a filler; it is a hybrid matrix that offers immediate volumetric lifting followed by sustained biostimulation.',
      scienceExpert: 'Under the expert technique of Dr. Jonathan Rincón, this treatment is personalized to restore firmness and redefine contours with surgical precision without the need for surgery.',
      
      dualActionTitle: 'Double Action in One Injection',
      haTitle: 'Immediate Lifting Effect (HA)',
      haDesc: 'Hyaluronic acid provides instant lift, smoothing wrinkles and restoring volume where it is needed most.',
      cahaTitle: 'Long-Term Biostimulation (CaHA)',
      cahaDesc: 'Calcium hydroxyapatite microspheres stimulate natural collagen production, redensifying the skin for months.',
      
      benefitsTitle: 'Key Benefits',
      benefitsSubtitle: 'Why choose the HArmonyCa treatment?',
      benefitsList: [
        { title: 'Immediate Lifting', description: 'HA provides visible elevation instantly.', icon: Zap },
        { title: 'Collagen Boost', description: 'Hydroxyapatite stimulates natural regeneration.', icon: Activity },
        { title: 'Long Lasting', description: 'Results lasting up to 18-24 months.', icon: Clock },
        { title: 'Natural Look', description: 'Improves skin without altering your features.', icon: Heart },
        { title: 'Minimally Invasive', description: 'No surgery or long recovery times.', icon: ShieldCheck },
        { title: 'Clinical Safety', description: 'Highly safe biocompatible materials.', icon: Sparkles },
      ],
      
      resultsTitle: 'Real Results (Before and After)',
      resultsSubtitle: 'Clinical evidence of dual transformation: volume and firmness.',
      beforeAfterCases: [
        { title: 'Facial Harmonization', description: 'Improvement in sagging and volume repositioning.', sessions: '1 session', image: '/images/Antes y Despues/21.png' },
        { title: 'Lower Face Rejuvenation', description: 'Restoration of facial contour.', sessions: '1 session', image: '/images/Antes y Despues/22.png' },
      ],
      
      testimonialsTitle: 'Testimonials and Experiences',
      testimonialsSubtitle: 'What those who have transformed their look and skin say.',
      
      faqTitle: 'Frequently Asked Questions',
      faqSubtitle: 'Answering your doubts about HArmonyCa',
      faqList: [
        { 
          q: 'What makes HArmonyCa different from a common filler?', 
          a: 'Unlike traditional hyaluronic acid-only fillers, HArmonyCa is a hybrid. It combines the immediate volume of HA with the long-term biostimulation of calcium hydroxyapatite, achieving a more complete facial architecture.' 
        },
        { 
          q: 'Is the treatment painful?', 
          a: 'Patient comfort is our priority. The product contains lidocaine (a local anesthetic) and Dr. Rincón uses delicate techniques so that the experience is very tolerable and comfortable.' 
        },
        { 
          q: 'When will I see the final results?', 
          a: 'The lifting effect is noticed instantly. However, the improvement in skin quality, density, and firmness due to new collagen production reaches its peak between 2 and 3 months after the session.' 
        },
        { 
          q: 'How long does the HArmonyCa effect last?', 
          a: 'The results are exceptionally long-lasting. Depending on each patient\'s metabolism, benefits can be maintained between 18 and up to 24 months.' 
        },
        { 
          q: 'Is there any recovery time?', 
          a: 'It is an outpatient treatment. You can resume your normal activities almost immediately. It is only recommended to avoid intense exercise and saunas for the first 24-48 hours.' 
        }
      ],
      
      blogTitle: 'Learn More About HArmonyCa',
      blogSubtitle: 'Exclusive articles by Dr. Jonathan Rincón',
      blogPosts: [
        {
          id: 'harmonyca-arquitectura-facial-3d',
          title: 'HArmonyCa: 3D Facial Architecture',
          image: '/images/Arquitectura Facial 3D Cómo HArmonyCa Esculpe tus Luces y Sombras Naturales .jpg',
          link: '/blog/harmonyca-arquitectura-facial-3d'
        },
        {
          id: 'harmonyca-lifting-facial-sin-cirugia',
          title: 'Non-Surgical Facial Lifting',
          image: "/images/HArmonyCa El Efecto Lifting Híbrido que Redefine tu Rostro sin Cirugía.jpg",
          link: '/blog/harmonyca-lifting-facial-sin-cirugia'
        },
        {
          id: 'harmonyca-redefine-ovalo-facial',
          title: 'Facial Oval Redefinition',
          image: '/images/HArmonyCa Redefinición del Óvalo Facial sin Cirugía.jpg',
          link: '/blog/harmonyca-redefine-ovalo-facial'
        }
      ],
      
      ctaBadge: 'Schedule Assessment',
      ctaTitle: 'Discover the Power of HArmonyCa',
      ctaP1: 'Schedule your assessment so Dr. Rincón can study your case and design the optimal treatment plan.',
      ctaButton: 'Consult via WhatsApp',
    },
  };

  const currentContent = content[lang];

  return (
    <div className="bg-background min-h-screen">
      <Head>
        <title>{currentContent.heroTitle} | Dr. Jonathan Rincón</title>
      </Head>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[65vh] flex items-center justify-center text-center text-white overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.src}
            alt={heroImage.hint}
            fill
            className="object-cover animate-fade-in duration-1000 scale-105"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-background/40 z-10" />
        <div className="container relative z-20 px-4">
          <div className="flex flex-col items-center gap-4 animate-slide-up">
            <div className="flex flex-wrap justify-center gap-2">
              <Badge className="bg-primary px-3 py-1 text-[10px] md:text-xs uppercase tracking-widest border-none shadow-lg">
                {currentContent.heroTag1}
              </Badge>
              <Badge variant="outline" className="text-white border-white/60 bg-white/5 backdrop-blur-sm px-3 py-1 text-[10px] md:text-xs uppercase tracking-widest">
                {currentContent.heroTag2}
              </Badge>
            </div>
            <h1 className="font-headline text-3xl md:text-6xl lg:text-7xl font-black !leading-[1.1] tracking-tight drop-shadow-2xl">
              <span className="block text-white mb-1 md:mb-2">
                {currentContent.heroTitle.split(':')[0]}
              </span>
              <span className="block text-blue-200 drop-shadow-[0_4px_15px_rgba(var(--primary),0.6)]">
                {currentContent.heroTitle.split(':')[1]}
              </span>
            </h1>
            <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-base md:text-xl text-slate-100 font-light leading-relaxed drop-shadow-md opacity-95">
              {currentContent.heroSubtitle}
            </p>
            <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-full shadow-2xl hover:scale-105 transition-all px-6 py-5 md:px-8 md:py-6 text-base md:text-lg group" asChild>
                <a href="#testimonios">
                  {lang === 'es' ? 'Ver Testimonios' : 'View Testimonials'} 
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section id="testimonios" className="py-12 md:py-20 bg-slate-50 dark:bg-slate-950 border-b border-border">
        <div className="container px-4">
          <div className="text-center mb-10 md:mb-16">
             <Badge variant="outline" className="text-primary mb-3 uppercase tracking-[0.2em]">{lang === 'es' ? 'Casos' : 'Cases'}</Badge>
            <h2 className="font-headline text-3xl md:text-5xl font-bold">{currentContent.testimonialsTitle}</h2>
            <p className="mt-3 text-lg md:text-xl text-muted-foreground">{currentContent.testimonialsSubtitle}</p>
          </div>
          
          {/* Mobile Horizontal Scroll / Desktop Grid */}
          <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-10 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {[
              "https://www.youtube.com/embed/BDYZkLld91o",
              "https://www.youtube.com/embed/VNMP-RtT8qI",
              "https://www.youtube.com/embed/d7B-GRBZWno"
            ].map((url, i) => (
              <div key={i} className="min-w-[280px] md:min-w-0 flex-shrink-0 group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 aspect-[9/16] snap-center">
                <VideoFacade videoUrl={url} title={`Testimonio ${i + 1}`} />
                <div className="absolute top-4 right-4 bg-primary/90 text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-4 h-4 fill-current" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section id="ciencia" className="py-16 md:py-24 bg-background overflow-hidden relative">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative group animate-fade-in order-2 lg:order-1">
              <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] blur-2xl group-hover:bg-primary/20 transition-all duration-700" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-border bg-slate-100">
                <video 
                  ref={videoRef}
                  muted 
                  autoPlay 
                  loop
                  playsInline 
                  className="w-full aspect-video object-cover"
                >
                  <source src="/Video Harmonyca.mp4" type="video/mp4" />
                </video>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-black/80 backdrop-blur-md text-white border-none py-1 px-3">
                    Expert Technique
                  </Badge>
                </div>
              </div>
              {science3dImage && (
                <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-32 h-32 md:w-48 md:h-48 rounded-full border-4 md:border-8 border-background overflow-hidden shadow-2xl hidden sm:block animate-bounce-slow">
                  <Image 
                    src={science3dImage.src} 
                    alt="HArmonyCa 3D" 
                    fill 
                    className="object-cover"
                  />
                </div>
              )}
            </div>
            
            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
              <div>
                <Badge variant="outline" className="text-primary border-primary/30 font-bold mb-3 md:mb-4">
                  {currentContent.scienceSubtitle}
                </Badge>
                <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight">
                  {currentContent.scienceTitle}
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {currentContent.scienceDescription}
              </p>
              
              <div className="bg-primary/5 p-6 md:p-8 rounded-3xl border-l-4 border-primary shadow-inner">
                <div className="flex gap-4 mb-3 md:mb-4">
                  <UserCheck className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100">Toque Maestro</h3>
                </div>
                <p className="text-base md:text-lg italic text-slate-700 dark:text-slate-300">
                  "{currentContent.scienceExpert}"
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-white/5">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-base md:text-lg">{currentContent.haTitle}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">{currentContent.haDesc}</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-white/5">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-base md:text-lg">{currentContent.cahaTitle}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">{currentContent.cahaDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950">
        <div className="container px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-headline text-3xl md:text-5xl font-bold">{currentContent.benefitsTitle}</h2>
            <p className="mt-3 text-lg md:text-xl text-muted-foreground">{currentContent.benefitsSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {currentContent.benefitsList.map((benefit, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-card group">
                <CardContent className="p-6 md:p-8 text-center sm:text-left">
                  <div className="mx-auto sm:mx-0 mb-5 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <benefit.icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before and After Section */}
      <section id="resultados" className="py-16 md:py-24 bg-background">
        <div className="container px-4 text-center">
          <SectionTitleWithLines>
             <span className="text-primary tracking-[0.2em] font-bold uppercase text-xs md:text-sm">{lang === 'es' ? 'Evidencia' : 'Evidence'}</span>
          </SectionTitleWithLines>
          <h2 className="font-headline text-3xl md:text-6xl font-black mt-4 md:mt-6">
            {currentContent.resultsTitle}
          </h2>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {currentContent.resultsSubtitle}
          </p>
          
          <Carousel className="w-full max-w-5xl mx-auto mt-10 md:mt-16">
            <CarouselContent>
              {currentContent.beforeAfterCases.map((caseItem, index) => (
                <CarouselItem key={index}>
                  <Card className="border-none shadow-none overflow-hidden bg-transparent">
                    <CardContent className="p-0 flex flex-col items-center">
                      <div className="relative w-full aspect-[4/5] md:aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
                        <Image
                          src={caseItem.image}
                          alt={caseItem.title}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 1200px"
                        />
                      </div>
                      <div className="mt-6 md:mt-8 space-y-2">
                        <h3 className="font-headline text-2xl md:text-3xl font-bold">{caseItem.title}</h3>
                        <div className="flex justify-center gap-2 md:gap-3">
                           <Badge variant="secondary" className="px-3 md:px-4">{caseItem.sessions}</Badge>
                           <Badge variant="outline" className="border-primary/20 text-primary text-[10px] md:text-xs">{caseItem.description}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-none bg-primary text-white hover:bg-primary/90 shadow-lg" />
            <CarouselNext className="hidden md:flex -right-12 border-none bg-primary text-white hover:bg-primary/90 shadow-lg" />
          </Carousel>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950">
        <div className="container px-4 max-w-4xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-headline text-3xl md:text-5xl font-bold">{currentContent.faqTitle}</h2>
            <p className="mt-3 text-lg md:text-xl text-muted-foreground">{currentContent.faqSubtitle}</p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-3 md:space-y-4">
            {currentContent.faqList.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-xl md:rounded-2xl bg-card px-4 md:px-6 py-1 md:py-2 shadow-sm">
                <AccordionTrigger className="text-lg md:text-xl font-bold hover:no-underline text-left leading-tight py-4">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg text-muted-foreground leading-relaxed pt-2">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Blog Recommendations Section */}
      <section className="py-16 md:py-24 bg-background border-t border-border">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 text-primary mb-3 md:mb-4">
                <Bookmark className="w-5 h-5 md:w-6 md:h-6" />
                <span className="font-bold uppercase tracking-widest text-xs md:text-sm">{lang === 'es' ? 'Recurso Educativo' : 'Educational Resource'}</span>
              </div>
              <h2 className="font-headline text-3xl md:text-5xl font-bold">{currentContent.blogTitle}</h2>
              <p className="mt-3 text-lg md:text-xl text-muted-foreground">{currentContent.blogSubtitle}</p>
            </div>
            <Button variant="outline" className="rounded-full border-primary/20 text-primary hover:bg-primary/5 px-6 md:px-8 w-full md:w-auto" asChild>
              <Link href="/blog">{lang === 'es' ? 'Ver todo el blog' : 'View all blog'}</Link>
            </Button>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {currentContent.blogPosts.map((post) => (
              <Link key={post.id} href={post.link} className="group h-full">
                <Card className="h-full overflow-hidden border border-border bg-card hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-xl">
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  </div>
                  <CardHeader className="p-4 md:p-6">
                    <CardTitle className="text-xl lg:text-2xl group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardFooter className="p-4 md:p-6 pt-0">
                    <span className="text-primary flex items-center font-bold text-xs md:text-sm uppercase tracking-widest">
                      {lang === 'es' ? 'Leer Artículo' : 'Read Article'} 
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 px-4">
        <div className="container max-w-6xl">
          <Card className="relative overflow-hidden shadow-2xl rounded-[2rem] md:rounded-[3rem] border-none bg-slate-900 group">
            {ctaImage && (
              <div className="absolute inset-0 opacity-40 group-hover:scale-105 transition-transform duration-1000">
                <Image
                  src={ctaImage.src}
                  alt={ctaImage.hint}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/40 z-10" />
            <div className="relative z-20 p-8 md:p-20 flex flex-col items-center text-center text-white">
              <Badge className="bg-primary hover:bg-primary text-white px-5 py-1.5 md:px-6 md:py-2 rounded-full mb-6 md:mb-8 text-base md:text-lg">
                {currentContent.ctaBadge}
              </Badge>
              <h2 className="font-headline text-3xl md:text-7xl font-bold mb-6 md:mb-8 leading-tight">
                {currentContent.ctaTitle}
              </h2>
              <p className="max-w-2xl text-lg md:text-2xl text-slate-200 mb-8 md:mb-12 font-light leading-relaxed">
                {currentContent.ctaP1}
              </p>
              <Button
                asChild
                size="lg"
                className="rounded-full shadow-2xl hover:scale-110 transition-all px-10 py-6 md:px-12 md:py-8 text-lg md:text-xl bg-white text-slate-900 hover:bg-slate-50 w-full sm:w-auto"
              >
                <a
                  href="https://wa.me/573122784757"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {currentContent.ctaButton} <WhatsAppIcon className="ml-3 w-6 h-6 md:w-8 md:h-8" />
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
