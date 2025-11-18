
'use client';

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
import { useLanguage } from '@/context/language-context';
import Head from 'next/head';

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

const content = {
  es: {
    heroTitle: 'Moldea tu Figura Sin Cirugía: Descubre el Poder de la Hidrolipoclasia y Tensamax',
    heroSubtitle: 'Dos tecnologías avanzadas para eliminar la grasa localizada, combatir la flacidez y conseguir el cuerpo que deseas de forma segura.',
    introTitle: '¿Sientes que la dieta y el ejercicio no son suficientes?',
    introP1: 'Te esfuerzas por mantener un estilo de vida saludable, pero esa grasa rebelde en el abdomen, las caderas o los muslos parece no desaparecer. O quizás notas que la piel ha perdido firmeza con el tiempo. Si buscas una solución efectiva que no implique pasar por el quirófano, estás en el lugar correcto.',
    introP2: 'Hoy en día, existen tratamientos no invasivos y mínimamente invasivos que te ayudan a alcanzar tus objetivos corporales de manera segura y sin interrumpir tu rutina. Dos de las opciones más populares y efectivas son la Hidrolipoclasia Ultrasónica y la radiofrecuencia con Tensamax. Aunque son diferentes, ambos se enfocan en un mismo objetivo: ayudarte a sentirte increíble en tu propia piel.',
    introButton: 'Agenda tu Valoración',
    hidroTitle: 'Hidrolipoclasia – La "Liposucción sin Cirugía"',
    hidroWhatIsTitle: '¿Qué es la Hidrolipoclasia y cómo elimina la grasa localizada?',
    hidroP1: 'La hidrolipoclasia es un procedimiento estético mínimamente invasivo, conocido como la "liposucción sin cirugía" por sus excelentes resultados para eliminar depósitos de grasa localizada. Es ideal para tratar zonas específicas como el abdomen, las caderas, los muslos ("cartucheras") o brazos.',
    hidroP2: 'Su funcionamento es una combinación inteligente de dos pasos:',
    hidroStep1: 'Infiltración de una solución: Primero, se inyecta una solución isotónica (suero fisiológico) en la zona donde se acumula la grasa. Esta solución ablanda y prepara las células grasas (adipocitos).',
    hidroStep2: 'Aplicación de ultrasonido: Inmediatamente después, se aplica un ultrasonido de alta potencia sobre la zona. Las ondas ultrasónicas generan microburbujas que vibran y provocan que la membrana de las células grasas se rompa, liberando la grasa de su interior.',
    hidroP3: 'Una vez liberada, esa grasa es eliminada de forma natural por el cuerpo a través del sistema linfático.',
    hidroBenefitsTitle: 'Beneficios clave de la Hidrolipoclasia',
    hidrolipoclasiaBenefits: [
      'Resultados similares a una liposucción tradicional, pero de manera menos invasiva.',
      'Procedimiento rápido y ambulatorio, realizado en el consultorio.',
      'Resultados efectivos y visibles, especialmente cuando se combina con un estilo de vida saludable.',
    ],
    hidroFaqTitle: 'Lo que a un paciente le importa sobre la Hidrolipoclasia',
    hidrolipoclasiaFaqs: [
      { question: '¿Este tratamiento duele?', answer: 'El procedimiento puede generar una molestia por las inyecciones, pero es un dolor totalmente soportable. Para mayor comodidad, se puede aplicar un anestésico local.' },
      { question: '¿Cuántas sesiones se necesitan?', answer: 'El número de sesiones varía según cada persona y la cantidad de grasa a tratar. En muchos casos, los cambios son notorios desde las primeras semanas. Tu médico especialista diseñará un plan personalizado para ti.' },
      { question: '¿Cómo es la recuperación? ¿Necesitaré incapacidad?', answer: 'La recuperación es rápida y no requiere incapacidad prolongada. Sin embargo, es crucial seguir algunos cuidados: descansar y evitar actividad física intensa durante los primeros dos días, utilizar prendas de compresión (fajas), mantenerse bien hidratado, evitar la exposición al sol y asistir a las citas de seguimiento.' },
      { question: '¿Pueden aparecer moretones o hinchazón?', answer: 'Sí, es común que aparezcan hinchazón y hematomas leves en la zona tratada. Estos efectos son temporales y se pueden controlar con compresas frías.' },
    ],
    tensaTitle: 'Tensamax – Reafirma tu Piel y Moldea tu Cuerpo',
    tensaWhatIsTitle: '¿Qué es Tensamax y cómo combate la flacidez?',
    tensaP1: 'Tensamax es una tecnología de vanguardia que utiliza radiofrecuencia monopolar para transformar la piel desde sus capas más profundas. Es un tratamiento no invasivo, ideal para quienes buscan reafirmar, tonificar y modelar tanto el rostro como el cuerpo.',
    tensaP2: 'Su mecanismo se basa en generar un calor controlado y profundo en los tejidos, lo que provoca dos efectos maravillosos:',
    tensaStep1: 'Estimulación de colágeno y elastina: El calor activa las células de tu piel para que produzcan nuevo colágeno, la proteína que le da firmeza y elasticidad.',
    tensaStep2: 'Mejora de la circulación: El calor tiene un efecto vasodilatador que aumenta el flujo sanguíneo, nutriendo las células, ayudando a eliminar toxinas y a reducir la grasa superficial.',
    tensaBenefitsTitle: 'Beneficios clave de Tensamax',
    tensamaxBenefits: [
      'Resultados visibles desde la primera sesión.',
      'Procedimiento sin dolor, cómodo y relajante, a menudo descrito como un "masaje cálido".',
      'No requiere tiempo de recuperación, puedes volver a tu rutina de inmediato.',
      'Tratamiento versátil: Perfecto para levantar glúteos, tonificar abdomen, brazos y piernas, y reducir flacidez en rostro y cuello.',
      'Excelente para combatir la celulitis y mejorar la textura de la piel.',
    ],
    tensaFaqTitle: 'Lo que a un paciente le importa sobre Tensamax',
    tensamaxFaqs: [
      { question: '¿Para quién es este tratamiento?', answer: 'Es ideal para personas que notan flacidez en la piel, desean modelar su contorno corporal, reducir celulitis o buscan una recuperación más rápida después de una cirugía, como una liposucción.' },
      { question: '¿Cómo es una sesión?', answer: 'Es muy sencilla y agradable. Te recostarás cómodamente mientras el especialista desliza un cabezal sobre la zona a tratar, aplicando un gel conductor. Sentirás un calor controlado y confortable. La sesión dura entre 30 y 60 minutos.' },
      { question: '¿Cuántas sesiones necesitaré?', answer: 'Para obtener resultados óptimos, generalmente se recomiendan entre 5 y 10 sesiones. El plan de tratamiento será definido por el especialista en tu cita de valoración.' },
      { question: '¿Es un tratamiento seguro?', answer: 'Sí, es muy seguro cuando lo realiza un profesional cualificado. Sin embargo, tiene algunas contraindicaciones que deben ser evaluadas por un médico, como el embarazo, la lactancia, o la presencia de marcapasos o implantes metálicos en la zona a tratar.' },
    ],
    videosSectionTitle1: 'Transformaciones',
    videosSectionTitle2: 'Reales',
    videosTitle: 'Resultados de Contorno Corporal',
    videosSubtitle: 'Observa cómo nuestros tratamientos de contorno corporal han ayudado a los pacientes a lograr sus metas.',
    comparisonTitle: '¿Cuál es la mejor opción para ti: Hidrolipoclasia o Tensamax?',
    hidroResultTitle: 'Resultados Hidrolipoclasia',
    tensaResultTitle: 'Resultados Tensamax',
    comparisonP1: 'Aunque ambos tratamientos ayudan a mejorar la figura, están diseñados para objetivos diferentes. La elección dependerá de tus necesidades específicas.',
    chooseHidroTitle: 'Elige Hidrolipoclasia si...',
    chooseHidroP: '...tu principal problema es la grasa localizada y acumulada que no logras eliminar con dieta o ejercicio.',
    chooseTensaTitle: 'Elige Tensamax si...',
    chooseTensaP: '...tu preocupación es la flacidez, la celulitis y la falta de tonicidad en la piel, o si buscas modelar el contorno de forma no invasiva.',
    comboTitle: 'La Combinación Perfecta',
    comboP1: 'En muchos casos, la mejor estrategia es combinar ambos tratamientos. Un profesional puede diseñar un plan donde primero se reduce el volumen de grasa con hidrolipoclasia y luego se reafirma y tensa la piel con Tensamax para un resultado espectacular.',
    comboP2: 'La consulta médica es clave para crear un plan de tratamiento individualizado y seguro para ti.',
    ctaBadge: 'Consulta Personalizada',
    ctaTitle: 'Da el Siguiente Paso Hacia la Figura que Sueñas',
    ctaP1: 'No tienes que conformarte con esa grasa rebelde o la piel flácida. Con la tecnología adecuada y la guía de expertos, puedes lograr una transformación real y duradera.',
    ctaButton: 'Agendar por WhatsApp',
  },
  en: {
    heroTitle: 'Shape Your Figure Without Surgery: Discover the Power of Hydrolipoclasy and Tensamax',
    heroSubtitle: 'Two advanced technologies to eliminate localized fat, combat sagging, and achieve the body you desire safely.',
    introTitle: 'Do you feel that diet and exercise are not enough?',
    introP1: 'You strive to maintain a healthy lifestyle, but that stubborn fat on your abdomen, hips, or thighs just doesn\'t seem to go away. Or maybe you notice that your skin has lost firmness over time. If you are looking for an effective solution that doesn\'t involve surgery, you are in the right place.',
    introP2: 'Nowadays, there are non-invasive and minimally invasive treatments that help you achieve your body goals safely and without interrupting your routine. Two of the most popular and effective options are Ultrasonic Hydrolipoclasy and radiofrequency with Tensamax. Although they are different, both focus on the same goal: helping you feel amazing in your own skin.',
    introButton: 'Schedule Your Assessment',
    hidroTitle: 'Hydrolipoclasy – The "Liposuction without Surgery"',
    hidroWhatIsTitle: 'What is Hydrolipoclasy and how does it eliminate localized fat?',
    hidroP1: 'Hydrolipoclasy is a minimally invasive aesthetic procedure, known as "liposuction without surgery" for its excellent results in eliminating localized fat deposits. It is ideal for treating specific areas such as the abdomen, hips, thighs ("saddlebags"), or arms.',
    hidroP2: 'Its operation is a smart combination of two steps:',
    hidroStep1: 'Infiltration of a solution: First, an isotonic solution (saline) is injected into the area where fat accumulates. This solution softens and prepares the fat cells (adipocytes).',
    hidroStep2: 'Application of ultrasound: Immediately after, high-power ultrasound is applied to the area. The ultrasonic waves generate microbubbles that vibrate and cause the membrane of the fat cells to break, releasing the fat from inside.',
    hidroP3: 'Once released, that fat is naturally eliminated by the body through the lymphatic system.',
    hidroBenefitsTitle: 'Key benefits of Hydrolipoclasy',
    hidrolipoclasiaBenefits: [
      'Results similar to traditional liposuction, but less invasively.',
      'Quick and outpatient procedure, performed in the office.',
      'Effective and visible results, especially when combined with a healthy lifestyle.',
    ],
    hidroFaqTitle: 'What a patient cares about regarding Hydrolipoclasy',
    hidrolipoclasiaFaqs: [
      { question: 'Does this treatment hurt?', answer: 'The procedure can cause some discomfort from the injections, but it is a completely bearable pain. For greater comfort, a local anesthetic can be applied.' },
      { question: 'How many sessions are needed?', answer: 'The number of sessions varies depending on each person and the amount of fat to be treated. In many cases, the changes are noticeable from the first few weeks. Your specialist doctor will design a personalized plan for you.' },
      { question: 'What is recovery like? Will I need time off?', answer: 'Recovery is quick and does not require prolonged time off. However, it is crucial to follow some care instructions: rest and avoid intense physical activity for the first two days, use compression garments (girdles), stay well hydrated, avoid sun exposure, and attend follow-up appointments.' },
      { question: 'Can bruises or swelling appear?', answer: 'Yes, it is common for swelling and mild bruises to appear in the treated area. These effects are temporary and can be managed with cold packs.' },
    ],
    tensaTitle: 'Tensamax – Firm Your Skin and Shape Your Body',
    tensaWhatIsTitle: 'What is Tensamax and how does it combat sagging?',
    tensaP1: 'Tensamax is a cutting-edge technology that uses monopolar radiofrequency to transform the skin from its deepest layers. It is a non-invasive treatment, ideal for those looking to firm, tone, and shape both the face and body.',
    tensaP2: 'Its mechanism is based on generating controlled, deep heat in the tissues, which causes two wonderful effects:',
    tensaStep1: 'Stimulation of collagen and elastin: The heat activates your skin cells to produce new collagen, the protein that gives it firmness and elasticity.',
    tensaStep2: 'Improved circulation: The heat has a vasodilatory effect that increases blood flow, nourishing the cells, helping to eliminate toxins, and reducing superficial fat.',
    tensaBenefitsTitle: 'Key benefits of Tensamax',
    tensamaxBenefits: [
      'Visible results from the first session.',
      'Painless, comfortable, and relaxing procedure, often described as a "warm massage".',
      'No recovery time required, you can return to your routine immediately.',
      'Versatile treatment: Perfect for lifting buttocks, toning abdomen, arms, and legs, and reducing sagging in the face and neck.',
      'Excellent for combating cellulite and improving skin texture.',
    ],
    tensaFaqTitle: 'What a patient cares about regarding Tensamax',
    tensamaxFaqs: [
      { question: 'Who is this treatment for?', answer: 'It is ideal for people who notice skin sagging, want to shape their body contour, reduce cellulite, or are looking for a faster recovery after surgery, such as liposuction.' },
      { question: 'What is a session like?', answer: 'It is very simple and pleasant. You will lie down comfortably while the specialist glides a handpiece over the area to be treated, applying a conductive gel. You will feel a controlled and comfortable warmth. The session lasts between 30 and 60 minutes.' },
      { question: 'How many sessions will I need?', answer: 'To obtain optimal results, 5 to 10 sessions are generally recommended. The treatment plan will be defined by the specialist at your assessment appointment.' },
      { question: 'Is it a safe treatment?', answer: 'Yes, it is very safe when performed by a qualified professional. However, it has some contraindications that must be evaluated by a doctor, such as pregnancy, breastfeeding, or the presence of pacemakers or metal implants in the area to be treated.' },
    ],
    videosSectionTitle1: 'Real',
    videosSectionTitle2: 'Transformations',
    videosTitle: 'Body Contouring Results',
    videosSubtitle: 'See how our body contouring treatments have helped patients achieve their goals.',
    comparisonTitle: 'What is the best option for you: Hydrolipoclasy or Tensamax?',
    hidroResultTitle: 'Hydrolipoclasy Results',
    tensaResultTitle: 'Tensamax Results',
    comparisonP1: 'Although both treatments help improve the figure, they are designed for different goals. The choice will depend on your specific needs.',
    chooseHidroTitle: 'Choose Hydrolipoclasy if...',
    chooseHidroP: '...your main problem is localized and accumulated fat that you can\'t get rid of with diet or exercise.',
    chooseTensaTitle: 'Choose Tensamax if...',
    chooseTensaP: '...your concern is sagging, cellulite, and lack of skin tone, or if you are looking to shape your contour non-invasively.',
    comboTitle: 'The Perfect Combination',
    comboP1: 'In many cases, the best strategy is to combine both treatments. A professional can design a plan where fat volume is first reduced with hydrolipoclasy and then the skin is firmed and tightened with Tensamax for a spectacular result.',
    comboP2: 'A medical consultation is key to creating a safe and individualized treatment plan for you.',
    ctaBadge: 'Personalized Consultation',
    ctaTitle: 'Take the Next Step Towards the Figure of Your Dreams',
    ctaP1: 'You don\'t have to settle for stubborn fat or sagging skin. With the right technology and expert guidance, you can achieve a real and lasting transformation.',
    ctaButton: 'Schedule via WhatsApp',
  },
};

function ContornoCorporalContent() {
  const { lang } = useLanguage();
  const currentContent = content[lang];
  const hidrolipoclasiaResultImage = findImage('hidrolipoclasia-result');
  const tensamaxResultImage = findImage('tensamax-result');
  
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Contorno Corporal (Hidrolipoclasia y Tensamax)',
    alternateName: ["Liposucción sin cirugía", "Hidrolipoclasia", "Tensamax"],
    description: 'Tratamientos no invasivos para eliminar grasa localizada y combatir la flacidez. Hidrolipoclasia para reducir grasa y Tensamax para reafirmar la piel.',
    keywords: "hidrolipoclasia medellín, tensamax, contorno corporal sin cirugía, eliminar grasa localizada, tratamiento para flacidez corporal",
    bodyLocation: [
      { '@type': 'BodyPart', name: 'Abdomen' },
      { '@type': 'BodyPart', name: 'Caderas' },
      { '@type': 'BodyPart', name: 'Muslos' },
      { '@type': 'BodyPart', name: 'Brazos' },
      { '@type': 'BodyPart', name: 'Glúteos' },
    ],
    procedureType: {
      '@type': 'MedicalProcedureType',
      name: 'Mínimamente Invasivo'
    },
    indication: [
      { '@type': 'MedicalIndication', name: 'Grasa localizada' },
      { '@type': 'MedicalIndication', name: 'Flacidez de la piel' },
      { '@type': 'MedicalIndication', name: 'Celulitis' },
    ],
    performer: {
      '@type': 'Physician',
      name: 'Dr. Jonathan Rincón',
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
        addressCountry: 'CO'
      },
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
      <section className="relative h-[50vh] md:h-[60vh] w-full bg-slate-900">
        <div className="absolute inset-0 opacity-30">
          <Placeholder seed="body-contouring-hero" />
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
              seed="toned-figure"
            />
          </div>
        </section>

        {/* Hidrolipoclasia */}
        <div className='space-y-24'>
            <SectionTitleWithLines>
                <span className='text-primary font-bold'>{currentContent.hidroTitle}</span>
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
                    {currentContent.hidroWhatIsTitle}
                  </h2>
                  <p className="mt-6 text-lg text-muted-foreground">
                   {currentContent.hidroP1}
                  </p>
                  <p className="mt-4 text-muted-foreground">{currentContent.hidroP2}</p>
                  <ol className="mt-4 space-y-3 text-muted-foreground list-decimal pl-5">
                    <li>{currentContent.hidroStep1}</li>
                    <li>{currentContent.hidroStep2}</li>
                  </ol>
                  <p className="mt-4 text-muted-foreground">{currentContent.hidroP3}</p>
                </div>
              </div>

               <div className="mt-20 text-center">
                    <h3 className="font-headline text-2xl md:text-3xl font-bold">{currentContent.hidroBenefitsTitle}</h3>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {currentContent.hidrolipoclasiaBenefits.map((benefit, index) => (
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
                  {currentContent.hidroFaqTitle}
                </h2>
              </div>
              <Accordion type="single" collapsible className="w-full mt-12">
                {currentContent.hidrolipoclasiaFaqs.map((faq, index) => (
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
                <span className='text-primary font-bold'>{currentContent.tensaTitle}</span>
            </SectionTitleWithLines>
            <section id="tensamax" className="scroll-mt-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-headline text-3xl md:text-4xl font-bold">
                    {currentContent.tensaWhatIsTitle}
                  </h2>
                  <p className="mt-6 text-lg text-muted-foreground">
                    {currentContent.tensaP1}
                  </p>
                  <p className="mt-4 text-muted-foreground">{currentContent.tensaP2}</p>
                  <ol className="mt-4 space-y-3 text-muted-foreground list-decimal pl-5">
                    <li>{currentContent.tensaStep1}</li>
                    <li>{currentContent.tensaStep2}</li>
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
                    <h3 className="font-headline text-2xl md:text-3xl font-bold">{currentContent.tensaBenefitsTitle}</h3>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {currentContent.tensamaxBenefits.map((benefit, index) => (
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
                  {currentContent.tensaFaqTitle}
                </h2>
              </div>
              <Accordion type="single" collapsible className="w-full mt-12">
                {currentContent.tensamaxFaqs.map((faq, index) => (
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
            <div className="w-full aspect-[16/9] rounded-lg shadow-lg overflow-hidden max-w-[450px] mx-auto">
               <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/I2VYteGaCto"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
              ></iframe>
            </div>
             <div className="w-full aspect-[16/9] rounded-lg shadow-lg overflow-hidden max-w-[450px] mx-auto">
               <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/mNFlBwGm8h4"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section id="comparacion" className="scroll-mt-20">
          <div className="p-8 md:p-12">
            <div className="text-center p-0 pb-8">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">{currentContent.comparisonTitle}</h2>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center max-w-lg mx-auto">
                <div className="text-center">
                    {hidrolipoclasiaResultImage && (
                        <div className="relative w-60 h-60 mx-auto rounded-full overflow-hidden shadow-lg">
                            <Image src={hidrolipoclasiaResultImage.src} alt={hidrolipoclasiaResultImage.hint} fill className="object-cover animate-fade-in duration-500" data-ai-hint={hidrolipoclasiaResultImage.hint} />
                        </div>
                    )}
                    <h3 className="mt-4 font-bold text-lg">{currentContent.hidroResultTitle}</h3>
                </div>
                <div className="text-center">
                    {tensamaxResultImage && (
                        <div className="relative w-60 h-60 mx-auto rounded-full overflow-hidden shadow-lg">
                            <Image src={tensamaxResultImage.src} alt={tensamaxResultImage.hint} fill className="object-cover animate-fade-in duration-500" data-ai-hint={tensamaxResultImage.hint} />
                        </div>
                    )}
                    <h3 className="mt-4 font-bold text-lg">{currentContent.tensaResultTitle}</h3>
                </div>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground mt-12">
                <p>{currentContent.comparisonP1}</p>
                <div className='grid md:grid-cols-2 gap-8 items-start'>
                    <div className='bg-muted/50 p-6 rounded-lg'>
                        <h4 className='font-bold text-xl text-foreground mb-2'>{currentContent.chooseHidroTitle}</h4>
                        <p>...{currentContent.chooseHidroP}</p>
                    </div>
                     <div className='bg-muted/50 p-6 rounded-lg'>
                        <h4 className='font-bold text-xl text-foreground mb-2'>{currentContent.chooseTensaTitle}</h4>
                        <p>...{currentContent.chooseTensaP}</p>
                    </div>
                </div>
                <div className='text-center pt-6 max-w-4xl mx-auto'>
                    <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-lg shadow-lg text-left">
                        <h4 className='font-headline text-2xl font-bold text-primary flex items-center gap-2'>
                          <PlusCircle className="w-6 h-6" />
                          {currentContent.comboTitle}
                        </h4>
                        <p className='mt-4'>{currentContent.comboP1}</p>
                        <p className='mt-4 font-semibold'>{currentContent.comboP2}</p>
                    </div>
                </div>
            </div>
          </div>
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
                  onClick={handleWhatsAppClick}
                >
                  <WhatsAppIcon /> {currentContent.ctaButton}
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


export default function ContornoCorporalPage() {
  return <ContornoCorporalContent />;
}
