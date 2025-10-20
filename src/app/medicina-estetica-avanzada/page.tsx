
'use client';

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

export default function MedicinaEsteticaAvanzadaPage() {
  const { lang } = useLanguage();

  const content = {
    es: {
      heroTitle: 'Medicina Estética Avanzada: Facial y Corporal',
      heroSubtitle: 'Nutre, hidrata y define tu piel desde adentro para prevenir los signos del envejecimiento.',
      facialTab: 'Facial Avanzado',
      corporalTab: 'Corporal Avanzado',
      facialIntroTitle: 'Guía Completa de Rejuvenecimiento: Transforma tu Piel Sin Cirugía',
      facialIntroSubtitle: 'Descubre los tratamientos más innovadores para hidratar, revitalizar, dar volumen y regenerar tu piel. Encuentra la solución perfecta para ti.',
      facialIntroP1: 'En el mundo de la medicina estética, existen muchas opciones para lucir una piel más joven, saludable y radiante sin necesidad de pasar por el quirófano.',
      facialIntroP2: 'En esta guía, te explicamos de manera sencilla los tratamientos más efectivos y demandados. Los hemos organizado en dos grandes grupos para que puedas identificar fácilmente cuál se adapta mejor a lo que buscas:',
      facialIntroBenefit1Title: 'Hidratación y Calidad de la Piel',
      facialIntroBenefit1Desc: 'Para quienes buscan luminosidad, mejorar la textura y una piel visiblemente más sana y jugosa.',
      facialIntroBenefit2Title: 'Relleno y Definición con Ácido Hialurónico',
      facialIntroBenefit2Desc: 'Para tratar arrugas, reponer volumen perdido y definir facciones como labios, pómulos o surcos faciales.',
      hydrationTitle: 'Hidratación Profunda y Calidad de la Piel',
      hydrationSubtitle: 'Estos tratamientos se enfocan en nutrir tu piel desde adentro para devolverle la vitalidad, el brillo y la suavidad que ha perdido con el tiempo.',
      mesoterapiaTitle: 'Mesoterapia',
      mesoterapiaDesc: 'La mesoterapia es una técnica que consiste en aplicar microinyecciones en la piel para administrar un cóctel de sustancias beneficiosas directamente donde se necesitan.',
      mesoterapiaIdeal: 'Ideal para: Personas que buscan una mejora general en la luminosidad, hidratación y textura de la piel.',
      skinboostersTitle: 'Skinboosters',
      skinboostersDesc: 'Los Skinboosters son un tipo de tratamiento enfocado en la hidratación profunda. Se utilizan microinyecciones de un ácido hialurónico de baja densidad que no busca dar volumen, sino captar y retener agua en las capas internas de la piel.',
      skinboostersExpect: '¿Qué puedes esperar?',
      skinboostersExpectDesc: 'Una piel visiblemente más hidratada, jugosa, elástica y con un brillo natural. Suaviza líneas finas y mejora la calidad general de la piel. Sus efectos suelen durar entre 6 y 12 meses.',
      skinboostersIdeal: 'Ideal para: Pieles deshidratadas, apagadas o que empiezan a mostrar los primeros signos de envejecimiento.',
      pdrnTitle: 'PDRN (Esperma de Salmón)',
      pdrnDesc: 'El PDRN (polideoxirribonucleótido) es un potente regenerador celular extraído del tejido gonadal del salmón. Es un fragmento de ADN purificado y seguro.',
      pdrnHow: '¿Cómo funciona?',
      pdrnHowDesc: 'Actúa a nivel celular estimulando la reparación de los tejidos, la producción de colágeno, mejorando la elasticidad y reduciendo la inflamación.',
      pdrnBenefits: 'Beneficios:',
      pdrnBenefitsDesc: 'Mejora la firmeza, reduce líneas finas, atenúa cicatrices de acné y devuelve la luminosidad a la piel.',
      pdrnIdeal: 'Ideal para: Pieles que necesitan una reparación profunda, mejorar cicatrices o un extra de rejuvenecimiento.',
      facialVideosTitle: 'Resultados que Hablan',
      facialVideosSubtitle: 'Ve cómo nuestros tratamientos faciales avanzados han rejuvenecido la piel de nuestros pacientes.',
      fillersTitle: 'Rellenos con Ácido Hialurónico – Volumen y Definición',
      fillersSubtitle: 'El ácido hialurónico es una sustancia que nuestro cuerpo produce de forma natural para mantener la piel hidratada y con volumen, pero su producción disminuye con la edad. Los rellenos dérmicos utilizan una versión en gel de esta molécula para restaurar o añadir volumen de forma segura y con resultados inmediatos.',
      fillersFaceTitle: 'Ácido Hialurónico para Rostro (Surcos, Pómulos)',
      fillersFaceDesc: 'Se utiliza para corregir arrugas estáticas (las que se ven con el rostro en reposo), reponer el volumen perdido en zonas como los pómulos o el mentón, y suavizar surcos como los nasogenianos ("líneas de la sonrisa").',
      fillersFaceResults: 'Resultados:',
      fillersFaceResultsDesc: 'El efecto es inmediato, logrando un aspecto más descansado y juvenil. La duración es variable, pero puede prolongarse varios meses.',
      fillersFaceIdeal: 'Ideal para: Quienes buscan corregir arrugas profundas, restaurar volumen en mejillas o definir el contorno facial.',
      fillersLipsTitle: 'Ácido Hialurónico en Labios',
      fillersLipsDesc: 'Es uno de los tratamientos más demandados. Permite no solo aumentar el volumen, sino también definir el contorno, corregir asimetrías e hidratar profundamente los labios para que luzcan más saludables y jóvenes.',
      fillersLipsExpect: '¿Qué puedes esperar?',
      fillersLipsExpectDesc: 'Un resultado natural y adaptado a tus facciones. El objetivo es embellecer, no transformar.',
      fillersLipsIdeal: 'Ideal para: Personas que desean labios más definidos, voluminosos o simplemente revitalizados.',
      facialDecisionTitle: 'Tu Belleza, Tu Decisión – La Importancia de una Valoración Profesional',
      facialDecisionDesc: 'Cada piel es única y cada rostro tiene sus propias necesidades. La clave para un resultado exitoso y seguro es una valoración personalizada con un médico especialista. Un profesional cualificado podrá evaluar tu piel, entender tus objetivos y recomendarte el tratamiento o la combinación de técnicas que te ofrezca los mejores resultados.',
      corporalIntroTitle: 'Cuida y Previene: La Guía Esencial de Tratamientos Corporales Avanzados',
      corporalIntroSubtitle: 'Descubre cómo los masajes reductores, la carboxiterapia y la vitamina C pueden ayudarte a mantener una figura armoniosa y una piel saludable a largo plazo.',
      corporalIntroP1: 'A menudo asociamos los tratamientos corporales con la idea de "corregir" algo que no nos gusta. Pero, ¿y si te dijéramos que la clave es la prevención? Adoptar un enfoque preventivo significa actuar antes de que los signos del tiempo, como la flacidez o la celulitis avanzada, se instalen.',
      reducingMassageTitle: 'Masajes Reductores – Moldeado Manual',
      reducingMassageHow: '¿Qué son y cómo funcionan?',
      reducingMassageDesc: 'Los masajes reductores son una técnica manual en la que se aplica una presión fuerte y un ritmo rápido sobre zonas específicas para movilizar la grasa y facilitar su eliminación natural.',
      reducingMassageBenefit1: 'Mejoran la circulación',
      reducingMassageBenefit1Desc: 'sanguínea y linfática para eliminar toxinas y líquidos retenidos.',
      reducingMassageBenefit2: 'Combaten la flacidez y la celulitis',
      reducingMassageBenefit2Desc: ', dando a la piel un aspecto más liso y firme.',
      reducingMassageBenefit3: 'Preparan el cuerpo',
      reducingMassageBenefit3Desc: 'para otros tratamientos al ablandar el tejido adiposo.',
      reducingMassageAlertTitle: 'Importante',
      reducingMassageAlertDesc: 'Los masajes reductores no son una solución mágica. Son más efectivos con una alimentación saludable y ejercicio. No se recomiendan en casos de piel sensible, hipertensión, diabetes, embarazo o lactancia.',
      carboxyTitle: 'Carboxiterapia – Oxigena y Regenera',
      carboxyHow: '¿Qué es y para qué sirve?',
      carboxyDesc: 'Es un procedimiento médico que aplica dióxido de carbono (CO₂) medicinal bajo la piel para mejorar la circulación, estimular la producción de colágeno y facilitar la eliminación de grasa.',
      carboxyUse: 'Es uno de los tratamientos más efectivos para la celulitis (PEFE), la grasa localizada, la flacidez y las estrías.',
      carboxyExpect: '¿Qué esperar?',
      carboxyExpectDesc: 'Se puede sentir un ligero ardor durante la inyección, pero es temporal. Se recomiendan de 10 a 12 sesiones (1-3 por semana). Es un procedimiento muy seguro realizado por un médico.',
      carboxyContra: 'Contraindicaciones: Insuficiencia renal/respiratoria, embarazo, infecciones activas.',
      vitaminCTitle: 'Vitamina C en Glúteos – Firmeza y Calidad para tu Piel',
      vitaminCAlertTitle: '¡Cuidado con los Mitos Peligrosos!',
      vitaminCAlertDesc: 'La vitamina C NO es un material de relleno y NO aumenta el volumen de los glúteos. Quienes lo ofrecen como tal probablemente usan biopolímeros (silicona líquida), sustancias que causan daños irreversibles.',
      vitaminCBenefitsTitle: 'Beneficios Reales y Aplicación Segura',
      vitaminCBenefitsDesc: 'La verdadera aplicación de la vitamina C inyectable en glúteos es un tratamiento preventivo que mejora la calidad de la piel.',
      vitaminCBenefit1: 'Estimula el colágeno:',
      vitaminCBenefit1Desc: 'Mejora la firmeza, tonicidad y elasticidad.',
      vitaminCBenefit2: 'Mejora la textura:',
      vitaminCBenefit2Desc: 'Ayuda a que la piel luzca más lisa y uniforme.',
      vitaminCBenefit3: 'Combate la flacidez:',
      vitaminCBenefit3Desc: 'Es una excelente herramienta preventiva.',
      vitaminCApplication: 'Aplicación y cuidados:',
      vitaminCApplicationDesc: 'Se aplica con microinyecciones. Es crucial que el producto tenga registro sanitario (como VitaCNova con Invima) y sea aplicado por un médico. Se recomienda no hacer ejercicio el mismo día, pero sí en días posteriores para potenciar el efecto.',
      corporalDecisionTitle: 'Tu Cuerpo, Tu Decisión – Elige la Prevención Inteligente',
      corporalDecisionDesc: 'Cuidar tu cuerpo es una inversión a largo plazo. Ya sea que busques moldear tu figura, mejorar la calidad de tu piel o prevenir la flacidez, estos tratamientos ofrecen soluciones seguras y efectivas cuando se realizan por profesionales.',
      ctaTitle: 'Da el Primer Paso Hacia una Piel Radiante',
      ctaSubtitle: 'Agenda una cita para una valoración personalizada y descubre cómo estos tratamientos pueden ayudarte a lograr una piel más sana, hidratata y joven.',
      ctaButton: 'Agendar por WhatsApp',
    },
    en: {
      heroTitle: 'Advanced Aesthetic Medicine: Facial and Body',
      heroSubtitle: 'Nourish, hydrate, and define your skin from within to prevent the signs of aging.',
      facialTab: 'Advanced Facial',
      corporalTab: 'Advanced Body',
      facialIntroTitle: 'Complete Rejuvenation Guide: Transform Your Skin Without Surgery',
      facialIntroSubtitle: 'Discover the most innovative treatments to hydrate, revitalize, add volume, and regenerate your skin. Find the perfect solution for you.',
      facialIntroP1: 'In the world of aesthetic medicine, there are many options to achieve younger, healthier, and more radiant skin without undergoing surgery.',
      facialIntroP2: 'In this guide, we simply explain the most effective and popular treatments. We have organized them into two main groups so you can easily identify which one best suits what you are looking for:',
      facialIntroBenefit1Title: 'Hydration and Skin Quality',
      facialIntroBenefit1Desc: 'For those looking for radiance, improved texture, and visibly healthier, plumper skin.',
      facialIntroBenefit2Title: 'Filling and Definition with Hyaluronic Acid',
      facialIntroBenefit2Desc: 'To treat wrinkles, restore lost volume, and define features like lips, cheekbones, or facial grooves.',
      hydrationTitle: 'Deep Hydration and Skin Quality',
      hydrationSubtitle: 'These treatments focus on nourishing your skin from within to restore the vitality, glow, and softness it has lost over time.',
      mesoterapiaTitle: 'Mesotherapy',
      mesoterapiaDesc: 'Mesotherapy is a technique that involves applying microinjections to the skin to deliver a cocktail of beneficial substances directly where they are needed.',
      mesoterapiaIdeal: 'Ideal for: People looking for a general improvement in skin radiance, hydration, and texture.',
      skinboostersTitle: 'Skinboosters',
      skinboostersDesc: 'Skinboosters are a type of treatment focused on deep hydration. Microinjections of a low-density hyaluronic acid are used, which does not aim to add volume but to attract and retain water in the inner layers of the skin.',
      skinboostersExpect: 'What can you expect?',
      skinboostersExpectDesc: 'Visibly more hydrated, juicy, elastic skin with a natural glow. It softens fine lines and improves overall skin quality. Its effects usually last between 6 and 12 months.',
      skinboostersIdeal: 'Ideal for: Dehydrated, dull skin or skin that is beginning to show the first signs of aging.',
      pdrnTitle: 'PDRN (Salmon DNA)',
      pdrnDesc: 'PDRN (polydeoxyribonucleotide) is a potent cell regenerator extracted from salmon gonadal tissue. It is a purified and safe DNA fragment.',
      pdrnHow: 'How does it work?',
      pdrnHowDesc: 'It acts at a cellular level, stimulating tissue repair, collagen production, improving elasticity, and reducing inflammation.',
      pdrnBenefits: 'Benefits:',
      pdrnBenefitsDesc: 'Improves firmness, reduces fine lines, diminishes acne scars, and restores radiance to the skin.',
      pdrnIdeal: 'Ideal for: Skin that needs deep repair, improvement of scars, or an extra boost of rejuvenation.',
      facialVideosTitle: 'Results that Speak',
      facialVideosSubtitle: "See how our advanced facial treatments have rejuvenated our patients' skin.",
      fillersTitle: 'Fillers with Hyaluronic Acid – Volume and Definition',
      fillersSubtitle: 'Hyaluronic acid is a substance that our body produces naturally to keep the skin hydrated and voluminous, but its production decreases with age. Dermal fillers use a gel version of this molecule to safely restore or add volume with immediate results.',
      fillersFaceTitle: 'Hyaluronic Acid for the Face (Grooves, Cheekbones)',
      fillersFaceDesc: 'It is used to correct static wrinkles (those visible when the face is at rest), replace lost volume in areas like the cheekbones or chin, and soften grooves such as nasolabial folds ("smile lines").',
      fillersFaceResults: 'Results:',
      fillersFaceResultsDesc: 'The effect is immediate, achieving a more rested and youthful appearance. The duration varies but can last for several months.',
      fillersFaceIdeal: 'Ideal for: Those looking to correct deep wrinkles, restore volume in the cheeks, or define the facial contour.',
      fillersLipsTitle: 'Hyaluronic Acid in Lips',
      fillersLipsDesc: 'This is one of the most requested treatments. It not only allows for an increase in volume but also defines the contour, corrects asymmetries, and deeply hydrates the lips to make them look healthier and younger.',
      fillersLipsExpect: 'What can you expect?',
      fillersLipsExpectDesc: 'A natural result adapted to your features. The goal is to enhance, not to transform.',
      fillersLipsIdeal: 'Ideal for: People who want more defined, voluminous, or simply revitalized lips.',
      facialDecisionTitle: 'Your Beauty, Your Decision – The Importance of a Professional Assessment',
      facialDecisionDesc: 'Every skin is unique, and every face has its own needs. The key to a successful and safe result is a personalized assessment with a medical specialist. A qualified professional will be able to evaluate your skin, understand your goals, and recommend the treatment or combination of techniques that will offer you the best results.',
      corporalIntroTitle: 'Care and Prevention: The Essential Guide to Advanced Body Treatments',
      corporalIntroSubtitle: 'Discover how reducing massages, carboxytherapy, and vitamin C can help you maintain a harmonious figure and healthy skin in the long term.',
      corporalIntroP1: "We often associate body treatments with the idea of 'correcting' something we don't like. But what if we told you that the key is prevention? Adopting a preventive approach means acting before the signs of time, such as sagging or advanced cellulite, set in.",
      reducingMassageTitle: 'Reducing Massages – Manual Contouring',
      reducingMassageHow: 'What are they and how do they work?',
      reducingMassageDesc: 'Reducing massages are a manual technique in which strong pressure and a fast rhythm are applied to specific areas to mobilize fat and facilitate its natural elimination.',
      reducingMassageBenefit1: 'Improve circulation',
      reducingMassageBenefit1Desc: 'blood and lymphatic, to eliminate toxins and retained fluids.',
      reducingMassageBenefit2: 'Combat sagging and cellulite',
      reducingMassageBenefit2Desc: ', giving the skin a smoother and firmer appearance.',
      reducingMassageBenefit3: 'Prepare the body',
      reducingMassageBenefit3Desc: 'for other treatments by softening adipose tissue.',
      reducingMassageAlertTitle: 'Important',
      reducingMassageAlertDesc: 'Reducing massages are not a magic solution. They are most effective with a healthy diet and exercise. They are not recommended for sensitive skin, hypertension, diabetes, pregnancy, or lactation.',
      carboxyTitle: 'Carboxytherapy – Oxygenate and Regenerate',
      carboxyHow: 'What is it and what is it for?',
      carboxyDesc: 'It is a medical procedure that applies medicinal carbon dioxide (CO₂) under the skin to improve circulation, stimulate collagen production, and facilitate fat elimination.',
      carboxyUse: 'It is one of the most effective treatments for cellulite (PEFE), localized fat, sagging, and stretch marks.',
      carboxyExpect: 'What to expect?',
      carboxyExpectDesc: 'A slight burning sensation may be felt during the injection, but it is temporary. 10 to 12 sessions (1-3 per week) are recommended. It is a very safe procedure performed by a doctor.',
      carboxyContra: 'Contraindications: Renal/respiratory failure, pregnancy, active infections.',
      vitaminCTitle: 'Vitamin C in Buttocks – Firmness and Quality for Your Skin',
      vitaminCAlertTitle: 'Beware of Dangerous Myths!',
      vitaminCAlertDesc: 'Vitamin C is NOT a filler and does NOT increase the volume of the buttocks. Those who offer it as such are likely using biopolymers (liquid silicone), substances that cause irreversible damage.',
      vitaminCBenefitsTitle: 'Real Benefits and Safe Application',
      vitaminCBenefitsDesc: 'The true application of injectable vitamin C in the buttocks is a preventive treatment that improves skin quality.',
      vitaminCBenefit1: 'Stimulates collagen:',
      vitaminCBenefit1Desc: 'Improves firmness, tone, and elasticity.',
      vitaminCBenefit2: 'Improves texture:',
      vitaminCBenefit2Desc: 'Helps the skin look smoother and more uniform.',
      vitaminCBenefit3: 'Combats sagging:',
      vitaminCBenefit3Desc: 'It is an excellent preventive tool.',
      vitaminCApplication: 'Application and care:',
      vitaminCApplicationDesc: 'It is applied with microinjections. It is crucial that the product has a health registration (like VitaCNova with Invima) and is applied by a doctor. It is recommended not to exercise on the same day, but on subsequent days to enhance the effect.',
      corporalDecisionTitle: 'Your Body, Your Decision – Choose Smart Prevention',
      corporalDecisionDesc: 'Taking care of your body is a long-term investment. Whether you are looking to shape your figure, improve your skin quality, or prevent sagging, these treatments offer safe and effective solutions when performed by professionals.',
      ctaTitle: 'Take the First Step Towards Radiant Skin',
      ctaSubtitle: 'Schedule a personalized assessment and discover how these treatments can help you achieve healthier, hydrated, and younger-looking skin.',
      ctaButton: 'Schedule via WhatsApp',
    },
  };

  const currentContent = content[lang];

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
              {currentContent.heroTitle}
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-slate-200 drop-shadow-md">
              {currentContent.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 sm:py-24 space-y-24">
        
        <Tabs defaultValue="facial" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-lg mx-auto h-auto">
            <TabsTrigger value="facial" className="py-2 text-base">
              {currentContent.facialTab}
            </TabsTrigger>
            <TabsTrigger value="corporal" className="py-2 text-base">
              {currentContent.corporalTab}
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
                    <span className="text-primary">
                      {currentContent.facialIntroTitle}
                    </span>
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    {currentContent.facialIntroSubtitle}
                  </p>
                  <div className="mt-8 text-lg text-muted-foreground space-y-4">
                    <p>
                      {currentContent.facialIntroP1}
                    </p>
                    <p>
                      {currentContent.facialIntroP2}
                    </p>
                  </div>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                      <div>
                        <h3 className="font-bold text-foreground">
                          {currentContent.facialIntroBenefit1Title}
                        </h3>
                        <p className="text-muted-foreground">
                          {currentContent.facialIntroBenefit1Desc}
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                      <div>
                        <h3 className="font-bold text-foreground">
                          {currentContent.facialIntroBenefit2Title}
                        </h3>
                        <p className="text-muted-foreground">
                          {currentContent.facialIntroBenefit2Desc}
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
                <Card className="shadow-none border-none text-center">
                  <CardHeader>
                    <CardTitle className="font-headline text-3xl md:text-4xl text-balance">
                      <span className="text-primary">{currentContent.hydrationTitle}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                      {currentContent.hydrationSubtitle}
                    </p>
                  </CardContent>
                </Card>

                <div className="mt-12 space-y-16">
                  {/* Mesoterapia */}
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="w-full aspect-square">
                        <Placeholder seed="mesoterapia-facial" className="rounded-xl shadow-xl" />
                    </div>
                    <div className="text-left">
                      <h3 className="flex items-center gap-3 font-headline text-2xl font-bold">
                        <Syringe className="w-7 h-7 text-primary" /> {currentContent.mesoterapiaTitle} 
                      </h3>
                      <div className="text-muted-foreground space-y-4 pt-4">
                        <p>
                          {currentContent.mesoterapiaDesc}
                        </p>
                        <p className="text-sm font-medium text-primary pt-2">
                          {currentContent.mesoterapiaIdeal}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skinboosters */}
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div className="w-full aspect-square md:order-2">
                        <Placeholder seed="skinbooster-treatment" className="rounded-xl shadow-xl"/>
                      </div>
                      <div className="text-left md:order-1">
                        <h3 className="flex items-center gap-3 font-headline text-2xl font-bold">
                          <Droplets className="w-7 h-7 text-primary" />{' '}
                          {currentContent.skinboostersTitle}
                        </h3>
                        <div className="text-muted-foreground space-y-4 pt-4">
                              <p>
                                {currentContent.skinboostersDesc}
                              </p>
                              <div>
                              <strong className="text-foreground">
                                  {currentContent.skinboostersExpect}
                              </strong>{' '}
                              <p className="mt-1">
                                  {currentContent.skinboostersExpectDesc}
                              </p>
                              </div>
                              <p className="text-sm font-medium text-primary pt-2">
                                {currentContent.skinboostersIdeal}
                              </p>
                        </div>
                      </div>
                  </div>

                  {/* PDRN */}
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="w-full aspect-square">
                      <Placeholder seed="pdrn-collagen" className="rounded-xl shadow-xl" />
                    </div>
                    <div className="text-left">
                        <h3 className="flex items-center gap-3 font-headline text-2xl font-bold">
                          <Dna className="w-7 h-7 text-primary" /> {currentContent.pdrnTitle}
                        </h3>
                        <div className="text-muted-foreground space-y-4 pt-4">
                            <p>
                              {currentContent.pdrnDesc}
                            </p>
                            <div>
                            <strong className="text-foreground">{currentContent.pdrnHow}</strong>{' '}
                            <p className="mt-1">
                                {currentContent.pdrnHowDesc}
                            </p>
                            </div>
                            <div>
                            <strong className="text-foreground">{currentContent.pdrnBenefits}</strong>{' '}
                            <p className="mt-1">
                                {currentContent.pdrnBenefitsDesc}
                            </p>
                            </div>
                            <p className="text-sm font-medium text-primary pt-2">
                              {currentContent.pdrnIdeal}
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
                    <span className="text-foreground">{currentContent.facialVideosTitle.split(' ')[0]}</span>{' '}
                    <span className="text-primary">{currentContent.facialVideosTitle.split(' ')[1]}</span>
                  </SectionTitleWithLines>
                  <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">
                    Testimonios de Pacientes
                  </h2>
                  <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    {currentContent.facialVideosSubtitle}
                  </p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
                  <div className="w-full aspect-[9/16] rounded-lg shadow-lg overflow-hidden max-w-[325px] mx-auto">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/LazyrYxAgow"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="w-full aspect-[9/16] rounded-lg shadow-lg overflow-hidden max-w-[325px] mx-auto">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/yP1JM_3sX50"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </section>

              <section id="rellenos" className="scroll-mt-20">
                <Card className="shadow-none border-none text-center">
                  <CardHeader>
                    <CardTitle className="font-headline text-3xl md:text-4xl text-balance">
                      <span className="text-primary">{currentContent.fillersTitle}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                      {currentContent.fillersSubtitle}
                    </p>
                  </CardContent>
                </Card>
                <div className="mt-12 grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <div className="w-full aspect-square">
                        <Placeholder className="rounded-xl shadow-2xl" seed="facial-filler"/>
                    </div>
                    <div className='space-y-8 text-left'>
                      <div className="p-6">
                        <h3 className="text-xl font-bold">
                          {currentContent.fillersFaceTitle}
                        </h3>
                        <div className="text-muted-foreground space-y-4 mt-4">
                          <p>
                            {currentContent.fillersFaceDesc}
                          </p>
                          <div>
                            <strong className="text-foreground">{currentContent.fillersFaceResults}</strong>
                            <p className="mt-1">
                              {currentContent.fillersFaceResultsDesc}
                            </p>
                          </div>
                           <p className="text-sm font-medium text-primary pt-2">
                            {currentContent.fillersFaceIdeal}
                          </p>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold">{currentContent.fillersLipsTitle}</h3>
                        <div className="text-muted-foreground space-y-4 mt-4">
                          <p>
                            {currentContent.fillersLipsDesc}
                          </p>
                          <div>
                            <strong className="text-foreground">
                              {currentContent.fillersLipsExpect}
                            </strong>{' '}
                            <p className="mt-1">
                              {currentContent.fillersLipsExpectDesc}
                            </p>
                          </div>
                           <p className="text-sm font-medium text-primary pt-2">
                             {currentContent.fillersLipsIdeal}
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
                      {currentContent.facialDecisionTitle}
                    </h2>
                  </div>
                  <div className="p-0 mt-4 text-muted-foreground">
                    <p>
                      {currentContent.facialDecisionDesc}
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
                    <span className="text-primary">
                      {currentContent.corporalIntroTitle}
                    </span>
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    {currentContent.corporalIntroSubtitle}
                  </p>
                   <div className='mt-8 text-lg text-muted-foreground space-y-4'>
                    <p>
                      {currentContent.corporalIntroP1}
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
                  <Card className="shadow-none border-none">
                    <CardHeader>
                      <CardTitle className="font-headline text-3xl md:text-4xl text-balance">
                        <span className="text-primary">{currentContent.reducingMassageTitle}</span>
                      </CardTitle>
                    </CardHeader>
                  </Card>
                    <div className='mt-6 p-0 md:p-6'>
                        <h3 className="flex items-center gap-3 text-xl font-bold">
                            <Hand className="w-7 h-7 text-primary" /> {currentContent.reducingMassageHow}
                        </h3>
                        <div className="text-muted-foreground space-y-3 mt-4">
                        <p>
                            {currentContent.reducingMassageDesc}
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>
                            <strong className="text-foreground">
                                {currentContent.reducingMassageBenefit1}
                            </strong>{' '}
                            {currentContent.reducingMassageBenefit1Desc}
                            </li>
                            <li>
                            <strong className="text-foreground">
                                {currentContent.reducingMassageBenefit2}
                            </strong>
                            {currentContent.reducingMassageBenefit2Desc}
                            </li>
                            <li>
                            <strong className="text-foreground">
                                {currentContent.reducingMassageBenefit3}
                            </strong>{' '}
                            {currentContent.reducingMassageBenefit3Desc}
                            </li>
                        </ul>
                        <Alert>
                            <AlertTriangle className="h-4 w-4" />
                            <AlertTitle>{currentContent.reducingMassageAlertTitle}</AlertTitle>
                            <AlertDescription>
                            {currentContent.reducingMassageAlertDesc}
                            </AlertDescription>
                        </Alert>
                        </div>
                    </div>
                </div>
              </section>

              <section id="carboxiterapia" className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="text-left">
                    <Card className="shadow-none border-none">
                      <CardHeader>
                        <CardTitle className="font-headline text-3xl md:text-4xl text-balance">
                          <span className="text-primary">{currentContent.carboxyTitle}</span>
                        </CardTitle>
                      </CardHeader>
                    </Card>
                    <div className='mt-6 p-0 md:p-6'>
                        <h3 className="flex items-center gap-3 text-xl font-bold">
                            <Wind className="w-7 h-7 text-primary" /> {currentContent.carboxyHow}
                        </h3>
                        <div className="text-muted-foreground space-y-3 mt-4">
                        <p>
                          {currentContent.carboxyDesc}
                        </p>
                        <p>
                          {currentContent.carboxyUse}
                        </p>
                        <p>
                            <strong className="text-foreground">
                            {currentContent.carboxyExpect}
                            </strong>{' '}
                            {currentContent.carboxyExpectDesc}
                        </p>
                        <Badge variant="secondary">
                            {currentContent.carboxyContra}
                        </Badge>
                        </div>
                    </div>
                 </div>
                 <div className='w-full aspect-square'>
                    <Placeholder className="rounded-xl shadow-2xl" seed="carboxytherapy-image" />
                 </div>
              </section>

              <section id="vitamina-c">
                <Card className="shadow-none border-none text-center">
                  <CardHeader>
                    <CardTitle className="font-headline text-3xl md:text-4xl text-balance">
                      <span className="text-primary">{currentContent.vitaminCTitle}</span>
                    </CardTitle>
                  </CardHeader>
                </Card>
                <div className="mt-12 space-y-8 max-w-4xl mx-auto">
                  <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle className="font-bold">
                      {currentContent.vitaminCAlertTitle}
                    </AlertTitle>
                    <AlertDescription>
                      {currentContent.vitaminCAlertDesc}
                    </AlertDescription>
                  </Alert>
                  <div className="p-6">
                    <h3 className="flex items-center gap-3 text-xl font-bold">
                      <Sparkles className="w-7 h-7 text-primary" /> {currentContent.vitaminCBenefitsTitle}
                    </h3>
                    <div className="text-muted-foreground space-y-3 mt-4">
                      <p>
                        {currentContent.vitaminCBenefitsDesc}
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          <strong className="text-foreground">
                            {currentContent.vitaminCBenefit1}
                          </strong>{' '}
                          {currentContent.vitaminCBenefit1Desc}
                        </li>
                        <li>
                          <strong className="text-foreground">
                            {currentContent.vitaminCBenefit2}
                          </strong>{' '}
                          {currentContent.vitaminCBenefit2Desc}
                        </li>
                        <li>
                          <strong className="text-foreground">
                            {currentContent.vitaminCBenefit3}
                          </strong>{' '}
                          {currentContent.vitaminCBenefit3Desc}
                        </li>
                      </ul>
                      <p>
                        <strong className="text-foreground">
                          {currentContent.vitaminCApplication}
                        </strong>{' '}
                        {currentContent.vitaminCApplicationDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section id="decision-corporal" className="scroll-mt-20 max-w-3xl mx-auto text-center">
                 <div className="p-6 md:p-8">
                  <div className="p-0">
                    <h2 className="font-headline text-2xl text-primary">
                      {currentContent.corporalDecisionTitle}
                    </h2>
                  </div>
                  <div className="p-0 mt-4 text-muted-foreground">
                     <p>
                        {currentContent.corporalDecisionDesc}
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
                {currentContent.ctaTitle}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {currentContent.ctaSubtitle}
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
