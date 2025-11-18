
'use client';

import Link from 'next/link';
import {
  HeartHandshake,
  Stethoscope,
  Sparkles,
  Award,
  ChevronRight,
  Wind,
  Droplets,
  Bot,
  StretchHorizontal,
  HelpingHand,
  ShieldCheck,
  Star,
  Medal,
  MessageCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import Image from 'next/image';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SectionTitleWithLines } from '@/components/section-title-with-lines';
import { cn } from '@/lib/utils';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { TestimonialsSection } from '@/components/testimonials-section';
import { findImage, GALLERY_IMAGES_DATA } from '@/lib/images';
import { useLanguage } from '@/context/language-context';

const treatments: { icon: string; title: string; title_en: string; href: string; size?: number }[] = [
  {
    icon: '/images/Hilos_Tensores_Icono.png',
    title: 'Hilos Tensores',
    title_en: 'Thread Lifts',
    href: '/hilos-tensores',
  },
  {
    icon: '/images/Bioestimuladores.png',
    title: 'Bioestimuladores de Colágeno',
    title_en: 'Collagen Biostimulators',
    href: '/bioestimuladores',
  },
  {
    icon: '/images/botox.png',
    title: 'Toxina Botulínica',
    title_en: 'Botulinum Toxin',
    href: '/botox',
  },
  {
    icon: '/images/Body_Estetica Corporal.png',
    title: 'Contorno Corporal',
    title_en: 'Body Contouring',
    href: '/contorno-corporal',
  },
  {
    icon: '/images/icono_Face_estetica_facial.png',
    title: 'Medicina Estética Avanzada',
    title_en: 'Advanced Aesthetic Medicine',
    href: '/medicina-estetica-avanzada',
  },
];

const TreatmentCard = ({
  icon,
  title,
  href,
}: {
  icon: string;
  title: string;
  href: string;
  size?: number;
}) => (
  <Link href={href} className="group block">
    <div className="flex h-full flex-col items-center justify-start p-2 rounded-lg">
      <div className="relative mb-4 flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-secondary group-hover:bg-primary/10 transition-colors duration-300 transform group-hover:scale-110">
        <Image
          src={icon}
          alt={title}
          fill
          className="object-contain transition-transform duration-300 p-2"
        />
      </div>
      <h3 className="font-headline text-sm sm:text-base font-semibold text-foreground group-hover:text-primary text-center flex-1 text-wrap">
        {title}
      </h3>
    </div>
  </Link>
);


export default function Home() {
  const { lang } = useLanguage();
  
  const content = {
    es: {
      heroTitle: 'Resultados y Confianza',
      heroSubtitle: 'Mi compromiso es con tu bienestar y satisfacción, respaldado por años de experiencia y cientos de pacientes felices.',
      stat1: 'Pacientes Satisfechos',
      stat2: 'Satisfacción',
      stat3: 'de Experiencia',
      recognition: 'Reconocido como el experto #1 en hilos tensores en Medellín y Bogotá',
      videoTitle: 'Testimonios en Video',
      videoSubtitle: 'Pacientes reales comparten sus experiencias y resultados.',
      treatmentsTitle: 'Nuestros Tratamientos Principales',
      treatmentsSubtitle: 'Soluciones personalizadas para realzar tu belleza natural con las técnicas más avanzadas y seguras.',
      aboutTitle: 'Conoce al Dr. Jonathan Rincón',
      aboutP1: 'Médico Cirujano especialista en Medicina Estética, con más de 8 años de experiencia. Reconocido como el',
      aboutP1Strong: '#1 en hilos tensores en Medellín y Bogotá',
      aboutP1Cont: ', combino mi práctica clínica con una profunda pasión por la anatomía y las técnicas avanzadas para ofrecer resultados seguros, naturales y armoniosos.',
      aboutP2: 'Mi dedicación a la excelencia va más allá de la consulta. Como',
      aboutP2Strong1: 'trainer oficial para marcas líderes en la industria',
      aboutP2Cont: ', tengo la misión de elevar el estándar de la medicina estética. Ofrezco',
      aboutP2Strong2: 'capacitaciones avanzadas y personalizadas para médicos',
      aboutP2Cont2: ' que buscan perfeccionar sus técnicas, dominar los procedimientos más innovadores y ofrecer resultados excepcionales a sus propios pacientes.',
      ctaButton1: 'Agendar Cita',
      ctaButton2: 'Capacítate Conmigo',
      resultsTitle: 'Resultados que Inspiran',
      resultsSubtitle: 'Transformaciones reales que reflejan mi compromiso con la excelencia y la naturalidad.',
      beforeAfter1: 'Capacitacion a mis pacientes',
      beforeAfter2: 'Excelentes productos',
      beforeAfter3: 'Pacientes Felices',
      viewAllButton: 'Ver Todos los Tratamientos',
    },
    en: {
      heroTitle: 'Results and Trust',
      heroSubtitle: 'My commitment is to your well-being and satisfaction, backed by years of experience and hundreds of happy patients.',
      stat1: 'Satisfied Patients',
      stat2: 'Satisfaction',
      stat3: 'of Experience',
      recognition: 'Recognized as the #1 expert in PDO threads in Medellín and Bogotá',
      videoTitle: 'Video Testimonials',
      videoSubtitle: 'Real patients share their experiences and results.',
      treatmentsTitle: 'Our Main Treatments',
      treatmentsSubtitle: 'Customized solutions to enhance your natural beauty with the most advanced and safe techniques.',
      aboutTitle: 'Meet Dr. Jonathan Rincón',
      aboutP1: 'Aesthetic Medicine Specialist Surgeon, with over 8 years of experience. Recognized as the',
      aboutP1Strong: '#1 expert in thread lifts in Medellín and Bogotá',
      aboutP1Cont: ', I combine my clinical practice with a deep passion for anatomy and advanced techniques to offer safe, natural, and harmonious results.',
      aboutP2: 'My dedication to excellence goes beyond the consultation. As an',
      aboutP2Strong1: 'official trainer for leading industry brands',
      aboutP2Cont: ', my mission is to raise the standard of aesthetic medicine. I offer',
      aboutP2Strong2: 'advanced and personalized training for doctors',
      aboutP2Cont2: ' seeking to perfect their techniques, master the most innovative procedures, and deliver exceptional results to their own patients.',
      ctaButton1: 'Schedule Appointment',
      ctaButton2: 'Train With Me',
      resultsTitle: 'Inspiring Results',
      resultsSubtitle: 'Real transformations that reflect my commitment to excellence and naturalness.',
      beforeAfter1: 'Training my patients',
      beforeAfter2: 'Excellent products',
      beforeAfter3: 'Happy Patients',
      viewAllButton: 'View All Treatments',
    },
  };

  const currentContent = content[lang];
  
  const testimonialImage1 = { src: '/images/Modelo 6.jpg', hint: 'facial procedure' };
  const testimonialImage2 = { src: '/images/Modelo 9.jpg', hint: 'facial injection' };
  
  const galleryImages = GALLERY_IMAGES_DATA.map(img => ({
    ...img,
    title: lang === 'es' ? img.title_es : img.title_en,
  }));


  const stats = [
    {
      value: 1000,
      label: currentContent.stat1,
      icon: HeartHandshake,
      suffix: '+',
    },
    {
      value: 100,
      label: currentContent.stat2,
      icon: Sparkles,
      suffix: '%',
    },
    {
      value: 8,
      label: lang === 'es' ? 'Años' : 'Years of',
      icon: Award,
      suffix: lang === 'es' ? 'de Experiencia' : 'Experience',
    },
  ];

  const beforeAfterCases = [
    {
      title: currentContent.beforeAfter1,
      image: findImage('home-before-after-1'),
    },
    {
      title: currentContent.beforeAfter2,
      image: findImage('home-before-after-2'),
    },
    {
      title: currentContent.beforeAfter3,
      image: findImage('home-before-after-3'),
    },
  ];

  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const url = e.currentTarget.href;
    if (window.gtag_report_conversion) {
      window.gtag_report_conversion(url);
    } else {
      // Fallback if gtag is not available
      if (typeof(url) != 'undefined') {
        window.location.href = url;
      }
    }
  };

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 text-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]">
              <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute z-0 w-full h-full object-cover"
              >
                  <source src="/Dr_Jonathan.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          </div>

          <div className="relative z-10 text-white container mx-auto px-4">
              <h2 className="font-headline text-4xl md:text-5xl font-bold">{currentContent.heroTitle}</h2>
              <p className="mt-4 text-lg text-slate-200 mx-auto max-w-2xl">{currentContent.heroSubtitle}</p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col items-center gap-2">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 text-white">
                         <stat.icon className="w-8 h-8" />
                      </div>
                      <div>
                          <p className="text-3xl font-bold text-white">
                              {lang === 'es' ? (
                                <>
                                  <AnimatedCounter targetValue={stat.value} />{stat.suffix === '%' || stat.suffix === '+' ? stat.suffix : ''}
                                </>
                              ) : (
                                <>
                                  <AnimatedCounter targetValue={stat.value} />{stat.suffix}
                                </>
                              )}
                          </p>
                        <p className="text-lg text-slate-200">
                          {stat.label} {lang === 'es' && stat.suffix && stat.suffix !== '%' && stat.suffix !== '+' ? stat.suffix : ''}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-slate-200">
                <Medal className="w-10 h-10 md:w-12 md:h-12 text-yellow-300" />
                <p className="font-semibold text-lg md:text-xl text-center">{currentContent.recognition}</p>
              </div>
          </div>
        </section>

        {/* Video Testimonials Section */}
        <section id="videos-home" className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">
              {currentContent.videoTitle}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              {currentContent.videoSubtitle}
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
              <div className="w-full aspect-[9/16] rounded-lg shadow-lg overflow-hidden max-w-[325px] mx-auto">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/f7z-cWbd-PE"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-full aspect-[9/16] rounded-lg shadow-lg overflow-hidden max-w-[325px] mx-auto">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/vlBIojuoo3Y"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-full aspect-[9/16] rounded-lg shadow-lg overflow-hidden max-w-[325px] mx-auto">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/_jQTyBUkhwY"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        
        {/* Infinite Moving Cards Section */}
        <section className="py-2 sm:py-4 [transform:translateZ(0)]">
          <InfiniteMovingCards items={galleryImages} direction="right" speed="slow" />
        </section>

         {/* Treatments Section */}
        <section id="tratamientos" className="py-16 sm:py-24 container mx-auto px-4 scroll-mt-20">
             <div className="text-center max-w-2xl mx-auto">
                <h2 className="font-headline text-4xl md:text-5xl font-bold">
                    <span className="text-primary">{currentContent.treatmentsTitle}</span>
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    {currentContent.treatmentsSubtitle}
                </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-y-8 sm:grid-cols-3 md:grid-cols-5 md:gap-8 w-full max-w-6xl mx-auto">
                {treatments.map((treatment) => (
                  <TreatmentCard key={treatment.title} {...treatment} title={lang === 'es' ? treatment.title : treatment.title_en} />
                ))}
            </div>
        </section>

        {/* About Doctor Section */}
        <section
          id="sobre-el-doctor"
          className="scroll-mt-20 container mx-auto px-4 py-16 sm:py-24"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-center text-center md:order-2">
              <div className="relative w-full aspect-square max-w-[300px] md:max-w-[450px]">
                  <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl">
                    <Image
                      src="/images/Experto-hilos-tensores-faciales.png"
                      alt="Dr. Jonathan Rincón, experto en medicina estética"
                      width={450}
                      height={450}
                      className="object-cover w-full h-full object-top animate-fade-in duration-500"
                      data-ai-hint="doctor portrait"
                    />
                  </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 md:hidden">
                <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
                  <a
                    href="https://wa.me/573122784757"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsAppClick}
                  >
                    {currentContent.ctaButton1} <MessageCircle />
                  </a>
                </Button>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                   <a
                    href="https://wa.me/573122784757"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsAppClick}
                  >
                    {currentContent.ctaButton2} <MessageCircle />
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex flex-col text-center items-center md:text-left md:items-start md:order-1">
              <h2 className="font-headline text-4xl md:text-5xl font-bold">
                {currentContent.aboutTitle}
              </h2>
              <p className="mt-6 text-lg text-muted-foreground md:text-justify">
                {currentContent.aboutP1}{' '}
                <strong className="text-primary font-bold">
                  {currentContent.aboutP1Strong}
                </strong>
                {currentContent.aboutP1Cont}
              </p>
              <p className="mt-4 text-lg text-muted-foreground md:text-justify">
                {currentContent.aboutP2} <strong className="text-primary font-bold">{currentContent.aboutP2Strong1}</strong>{currentContent.aboutP2Cont} <strong className="text-primary font-bold">{currentContent.aboutP2Strong2}</strong>{currentContent.aboutP2Cont2}
              </p>
              <div className="mt-8 hidden md:flex items-center gap-4">
                <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
                  <a
                    href="https://wa.me/573122784757"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsAppClick}
                  >
                    {currentContent.ctaButton1} <MessageCircle />
                  </a>
                </Button>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                   <a
                    href="https://wa.me/573122784757"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsAppClick}
                  >
                    {currentContent.ctaButton2} <MessageCircle />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Before and After Section */}
        <section id="resultados-home" className="py-16 sm:py-24 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">
              {currentContent.resultsTitle}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              {currentContent.resultsSubtitle}
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {beforeAfterCases.map((caseItem, index) => (
                <Card key={index} className="overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  {caseItem.image && (
                    <div className="aspect-square relative">
                      <Image
                        src={caseItem.image.src}
                        alt={`Antes y Después - ${caseItem.title}`}
                        fill
                        className="object-cover animate-fade-in duration-500"
                        data-ai-hint={caseItem.image.hint}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-lg font-headline">{caseItem.title}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <Button asChild size="lg" className="mt-12">
              <Link href="#tratamientos">{currentContent.viewAllButton}</Link>
            </Button>
          </div>
        </section>


        {/* Testimonials Section */}
        <TestimonialsSection />

      </main>
    </div>
  );
}

    