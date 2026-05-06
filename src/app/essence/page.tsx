'use client';

import { useEffect, useState, useRef, useMemo, Fragment } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValue } from 'framer-motion';
import { 
  Sparkles, 
  Droplets, 
  ShieldCheck, 
  Zap, 
  ChevronDown, 
  ArrowRight,
  Star,
  Award,
  Clock,
  Heart,
  ZapIcon,
  Sun,
  Layers,
  Truck,
  Lock,
  Shield,
  Layout,
  CheckCircle2,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import { cn } from '@/lib/utils';

// --- Components ---

const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('button, a, .interactive')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-primary/30 border border-primary/50 pointer-events-none z-[9999] mix-blend-multiply hidden lg:block"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
        scale: isHovering ? 2.5 : 1,
      }}
    >
      <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
    </motion.div>
  );
};

const MagneticButton = ({ children, className, ...props }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set((e.clientX - centerX) * 0.4);
      mouseY.set((e.clientY - centerY) * 0.4);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const springX = useSpring(mouseX);
  const springY = useSpring(mouseY);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={cn("relative z-10", className)}
    >
      {children}
    </motion.div>
  );
};

// --- Data ---

const ingredients = [
  {
    icon: Layers,
    name: 'Colágeno Hidrolizado',
    name_en: 'Hydrolyzed Collagen',
    description: 'Proteína de alta pureza que restaura la estructura de la piel, articulaciones y tejidos desde el núcleo celular.',
    description_en: 'High-purity protein that restores skin, joints, and tissue structure from the cellular core.',
    image: '/images/essence/ing_collagen.png'
  },
  {
    icon: Zap,
    name: 'Biotina (Vitamina B8)',
    name_en: 'Biotin (Vitamin B8)',
    description: 'El secreto detrás de un cabello fuerte y uñas resistentes, potenciando el brillo natural.',
    description_en: 'The secret behind strong hair and resilient nails, boosting natural shine.',
    image: '/images/essence/ing_biotin.png'
  },
  {
    icon: Heart,
    name: 'Resveratrol + Inulina',
    name_en: 'Resveratrol + Inulin',
    description: 'Poderosa combinación antioxidante y prebiótica que protege tus células y optimiza tu digestión.',
    description_en: 'Powerful antioxidant and prebiotic combination that protects your cells and optimizes digestion.',
    image: '/images/essence/ing_resveratrol.png'
  },
  {
    icon: Sparkles,
    name: 'Vitaminas C, E y A',
    name_en: 'Vitamins C, E and A',
    description: 'Sinergia vitamínica que refuerza el sistema inmune y combate el estrés oxidativo.',
    description_en: 'Vitamin synergy that strengthens the immune system and fights oxidative stress.',
    image: '/images/essence/ing_vitamins.png'
  }
];

export default function EssencePage() {
  const { lang } = useLanguage();
  const containerRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('essence-popup-seen');
      if (!hasSeenPopup) {
        setShowPopup(true);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    sessionStorage.setItem('essence-popup-seen', 'true');
  };
  
  // Hero Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const handleHeroMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / 30;
    const moveY = (clientY - window.innerHeight / 2) / 30;
    mouseX.set(moveX);
    mouseY.set(moveY);
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.1]);
  
  // Horizontal Scroll Section - Master Formula
  const horizontalRef = useRef(null);
  const { scrollYProgress: horizontalScroll } = useScroll({
    target: horizontalRef,
    offset: ["start start", "end end"] // Pin from start to end
  });
  
  // We calculate the horizontal movement based on the container size
  // 450vh allows for a more "forced" feeling of scrolling
  const xTranslate = useTransform(horizontalScroll, [0, 1], ["0%", "-75%"]);
  const progressBarWidth = useSpring(horizontalScroll, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className="bg-[#FFF5F8] text-[#333] selection:bg-primary/20 min-h-screen font-sans">
      <CustomCursor />
      
      {/* Hero Section */}
      <section 
        className="relative h-[110vh] flex items-center justify-center overflow-hidden"
      >
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-[#FFF5F8] z-10" />
          
          <motion.div 
            className="absolute inset-0 transition-transform duration-500 ease-out"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            >
              <source src="/images/essence/hero_video.mp4" type="video/mp4" />
            </video>
          </motion.div>


        </motion.div>

        <div className="relative z-30 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-6"
          >
             <span className="inline-block px-6 py-2 rounded-full border border-primary/20 bg-white/50 backdrop-blur-xl text-[10px] font-bold tracking-[0.4em] uppercase text-primary shadow-sm">
              {lang === 'es' ? 'Tu nuevo aliado de bienestar diario' : 'Your new daily wellness ally'}
            </span>
          </motion.div>
          
          <h1 className="text-[10vw] font-headline font-bold tracking-tighter mb-4 leading-[0.8] text-[#D81B60]">
            <motion.span
              initial={{ opacity: 0, letterSpacing: "1em" }}
              animate={{ opacity: 1, letterSpacing: "-0.05em" }}
              transition={{ duration: 1.5, ease: "circOut" }}
              className="block"
            >
              ESSENCE
            </motion.span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
          >
            <p className="text-lg md:text-2xl text-[#444] font-light max-w-2xl mx-auto leading-relaxed mb-10">
              {lang === 'es' 
                ? 'Una fórmula pensada para cuidar tu cuerpo desde adentro.' 
                : 'A formula designed to care for your body from within.'}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                asChild
                size="lg" 
                className="bg-primary text-white hover:bg-primary/90 rounded-full px-12 h-16 text-lg font-bold uppercase tracking-widest shadow-xl shadow-primary/20 group cursor-pointer"
              >
                <a 
                  href="https://wa.me/573122784757?text=Hola%20Dr.%20Jonathan,%20estoy%20interesado/a%20en%20el%20nuevo%20producto%20Essence." 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {lang === 'es' ? 'Explorar Essence Ahora' : 'Explore Essence Now'}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 text-primary"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 bg-white border-y border-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            {[
              { icon: ShieldCheck, text: lang === 'es' ? 'Grado Médico' : 'Medical Grade' },
              { icon: Zap, text: lang === 'es' ? 'Bio-disponible' : 'Bio-available' },
              { icon: Sun, text: lang === 'es' ? 'Sin Azúcar' : 'Sugar Free' },
              { icon: Award, text: lang === 'es' ? 'Certificado' : 'Certified' }
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-3">
                <badge.icon className="w-5 h-5 text-primary" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#333]">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Experience - Master Formula */}
      <section ref={horizontalRef} className="relative h-[800vh] bg-white z-[20]">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden bg-white">
          {/* Progress Indicator */}
          <div className="absolute bottom-12 left-[10vw] right-[10vw] h-px bg-primary/10 z-50">
             <motion.div 
                style={{ scaleX: progressBarWidth }}
                className="absolute inset-0 bg-primary origin-left h-[2px]"
             />
             <div className="absolute -top-6 left-0 text-[10px] font-bold tracking-widest text-primary/40 uppercase">
                {lang === 'es' ? 'Descubre la esencia' : 'Discover the essence'}
             </div>
          </div>

          <motion.div 
            style={{ x: xTranslate }}
            className="flex flex-nowrap gap-32 px-[10vw] items-center w-max"
          >
            <div className="min-w-[50vw] flex flex-col justify-center">
               <h2 className="text-7xl md:text-9xl font-headline font-bold mb-8 leading-tight text-[#E91E63]">
                {lang === 'es' ? 'Fórmula\nMaestra' : 'Master\nFormula'}
              </h2>
              <p className="text-xl text-[#555] max-w-md leading-relaxed">
                {lang === 'es' 
                  ? 'Ingredientes seleccionados con precisión médica para una regeneración profunda y bienestar total.' 
                  : 'Medical-precision selected ingredients for deep regeneration and total wellness.'}
              </p>
            </div>

            {ingredients.map((ing, i) => (
              <div key={i} className="min-w-[80vw] md:min-w-[40vw] h-[70vh] relative group rounded-[4rem] overflow-hidden border border-primary/5 bg-[#FFF5F8] shadow-2xl shadow-primary/5 transition-transform duration-700 hover:scale-[1.02]">
                <Image
                  src={ing.image}
                  alt={ing.name}
                  fill
                  className="object-cover opacity-10 group-hover:opacity-40 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                <div className="absolute bottom-16 left-16 right-16">
                   <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-lg border border-primary/10">
                      <ing.icon className="w-8 h-8 text-primary" />
                   </div>
                   <h3 className="text-5xl font-headline font-bold mb-6 text-[#333]">{lang === 'es' ? ing.name : ing.name_en}</h3>
                   <p className="text-[#555] text-xl leading-relaxed">{lang === 'es' ? ing.description : ing.description_en}</p>
                </div>
              </div>
            ))}

            <div className="min-w-[40vw] flex items-center justify-center">
               <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="rounded-full border-2 border-primary/20 p-12 text-center"
               >
                  <span className="text-primary font-bold uppercase tracking-widest block mb-4">
                    {lang === 'es' ? 'Siguiente Nivel' : 'Next Level'}
                  </span>
                  <ChevronDown className="w-10 h-10 text-primary mx-auto animate-bounce" />
               </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Details Section - Alternating Layout */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          {[
            {
              title: lang === 'es' ? 'Pureza Regenerativa' : 'Regenerative Purity',
              desc: lang === 'es' 
                ? 'Cada dosis de Essence está diseñada para trabajar en sinergia con tu biología natural, estimulando la producción de colágeno y restaurando la luminosidad perdida.' 
                : 'Each dose of Essence is designed to work in synergy with your natural biology, stimulating collagen production and restoring lost luminosity.',
              img: '/images/essence/detail_purity.png',
              reversed: false
            },
            {
              title: lang === 'es' ? 'Precisión Nutricional' : 'Nutritional Precision',
              desc: lang === 'es' 
                ? 'Una porción de 20g aporta un complejo vitamínico completo (A, C, E, Niacina, Zinc, Biotina) diseñado para una absorción celular del 98%.' 
                : 'A 20g serving provides a complete vitamin complex (A, C, E, Niacin, Zinc, Biotin) designed for 98% cellular absorption.',
              img: '/images/essence/detail_precision.png',
              reversed: true
            },
            {
              title: lang === 'es' ? 'Rutina de Bienestar' : 'Wellness Ritual',
              desc: lang === 'es' 
                ? 'Con un contenido neto de 700g, Essence te acompaña durante 35 días de transformación real. Su fórmula con Inulina mejora tu salud digestiva mientras te embellece.' 
                : 'With a net content of 700g, Essence accompanies you through 35 days of real transformation. Its Inulin formula improves your digestive health while beautifying you.',
              img: '/images/essence/detail_ritual.png',
              reversed: false
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={cn(
                "flex flex-col md:flex-row items-center gap-16 md:gap-32 mb-40 last:mb-0",
                feature.reversed && "md:flex-row-reverse"
              )}
            >
              <div className="flex-1 w-full relative">
                <div className="aspect-[4/5] relative rounded-[3rem] overflow-hidden bg-[#FFF5F8] group shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                  <Image
                    src={feature.img}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
                </div>
              </div>
              <div className="flex-1 space-y-8">
                <div className="inline-block px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-bold tracking-[0.3em] uppercase text-primary">
                  {lang === 'es' ? 'Detalle de Producto' : 'Product Detail'}
                </div>
                <h3 className="text-5xl md:text-7xl font-headline font-bold text-[#333] leading-tight">
                  {feature.title}
                </h3>
                <p className="text-xl md:text-2xl text-[#555] font-light leading-relaxed">
                  {feature.desc}
                </p>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="inline-flex items-center gap-4 text-primary font-bold uppercase tracking-widest cursor-pointer"
                >
                  {lang === 'es' ? 'Saber más' : 'Learn more'}
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison Section - The Advantage */}
      <section className="py-40 bg-[#FFF5F8]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-headline font-bold mb-6 text-[#333]">
              {lang === 'es' ? '¿Por qué Essence?' : 'Why Essence?'}
            </h2>
            <p className="text-xl text-[#555] max-w-2xl mx-auto">
              {lang === 'es' 
                ? 'No todos los suplementos son iguales. Compara la ciencia detrás de nuestra fórmula.' 
                : 'Not all supplements are created equal. Compare the science behind our formula.'}
            </p>
          </div>

          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-primary/5">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="hidden md:block"></div>
              <div className="text-center pb-8 border-b-2 border-primary/20">
                <span className="text-primary font-bold uppercase tracking-widest text-sm">ESSENCE</span>
              </div>
              <div className="text-center pb-8 border-b border-gray-100">
                <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">
                  {lang === 'es' ? 'Genéricos' : 'Generics'}
                </span>
              </div>

              {[
                { label: lang === 'es' ? 'Pureza Médica' : 'Medical Purity', essence: true, others: false },
                { label: lang === 'es' ? 'Sabor Vainilla' : 'Vanilla Flavor', essence: true, others: false },
                { label: lang === 'es' ? 'Pureza Médica' : 'Medical Purity', essence: true, others: false },
                { label: lang === 'es' ? 'Sabor Vainilla' : 'Vanilla Flavor', essence: true, others: false },
                { label: lang === 'es' ? 'Bio-absorción' : 'Bio-absorption', essence: '98%', others: '45%' },
                { label: lang === 'es' ? 'Sin Azúcar' : 'Sugar Free', essence: true, others: 'Variado' },
                { label: lang === 'es' ? 'Resultados' : 'Results', essence: lang === 'es' ? 'Tiempo Récord' : 'Record Time', others: lang === 'es' ? 'Lento' : 'Slow' }
              ].map((row, i) => (
                <Fragment key={i}>
                  <div className="flex items-center text-sm font-bold uppercase tracking-wider text-[#777]">
                    {row.label}
                  </div>
                  <div className="flex items-center justify-center p-4 bg-primary/5 rounded-2xl text-primary font-bold">
                    {typeof row.essence === 'boolean' ? <ShieldCheck className="w-5 h-5" /> : row.essence}
                  </div>
                  <div className="flex items-center justify-center p-4 text-gray-300">
                    {typeof row.others === 'boolean' ? row.others && <ShieldCheck className="w-5 h-5" /> : row.others}
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Usage Ritual - How to use */}
      <section className="py-40 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-headline font-bold mb-24 text-center text-[#333]">
            {lang === 'es' ? 'Tu Ritual Essence' : 'Your Essence Ritual'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { 
                step: '01', 
                title: lang === 'es' ? 'Prepara' : 'Prepare', 
                desc: lang === 'es' ? 'Disuelve un scoop (incluido) en 200-250ml de agua fría, leche vegetal o tu batido matutino.' : 'Dissolve one scoop (included) in 200-250ml of cold water, vegetable milk, or your morning smoothie.',
                img: '/images/essence/ritual_prep.png'
              },
              { 
                step: '02', 
                title: lang === 'es' ? 'Fusiona' : 'Merge', 
                desc: lang === 'es' ? 'Mezcla suavemente hasta que el polvo se integre totalmente. Disfruta su sutil aroma y sabor a vainilla premium.' : 'Mix gently until the powder is fully integrated. Enjoy its subtle aroma and premium vanilla flavor.',
                img: '/images/essence/ritual_mix.png'
              },
              { 
                step: '03', 
                title: lang === 'es' ? 'Potencia' : 'Power Up', 
                desc: lang === 'es' ? 'Tómalo preferiblemente en ayunas o antes de dormir para maximizar la regeneración celular durante el descanso.' : 'Take it preferably on an empty stomach or before sleeping to maximize cellular regeneration during rest.',
                img: '/images/essence/ritual_drink.png'
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group"
              >
                <div className="relative aspect-square rounded-[3rem] overflow-hidden mb-12 shadow-2xl border border-primary/5">
                  <Image
                    src={step.img}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  <div className="absolute top-8 left-8 w-16 h-16 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center font-headline font-bold text-2xl text-primary shadow-lg">
                    {step.step}
                  </div>
                </div>
                <div className="relative z-10 text-center">
                  <h4 className="text-3xl font-headline font-bold mb-4 text-[#333] uppercase tracking-tighter">
                    {step.title}
                  </h4>
                  <p className="text-lg text-[#666] leading-relaxed max-w-[250px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-60 bg-[#FFF5F8] relative">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-headline italic mb-16 text-[#E91E63] leading-tight"
          >
            "{lang === 'es' 
              ? 'La belleza interior es el reflejo de cómo cuidas tu cuerpo cada día.' 
              : 'Inner beauty is the reflection of how you care for your body every day.'}"
          </motion.p>
          <div className="flex items-center justify-center gap-6">
             <div className="w-16 h-px bg-primary/20" />
             <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm">Dr. Jonathan Rincón</span>
             <div className="w-16 h-px bg-primary/20" />
          </div>
        </div>
      </section>

      {/* Clinical Benefits - The 3 Pillars */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: lang === 'es' ? 'Luminosidad Cutánea' : 'Skin Radiance', 
                desc: lang === 'es' ? 'El colágeno hidrolizado restaura la densidad de la dermis, reduciendo líneas finas.' : 'Hydrolyzed collagen restores dermal density, reducing fine lines.',
                icon: Sun
              },
              { 
                title: lang === 'es' ? 'Fortaleza Estructural' : 'Structural Strength', 
                desc: lang === 'es' ? 'La Biotina potencia el crecimiento de cabello y uñas desde la matriz.' : 'Biotin boosts hair and nail growth from the matrix.',
                icon: Zap
              },
              { 
                title: lang === 'es' ? 'Protección Celular' : 'Cellular Protection', 
                desc: lang === 'es' ? 'El Resveratrol combate los radicales libres, retrasando el envejecimiento.' : 'Resveratrol fights free radicals, delaying aging.',
                icon: ShieldCheck
              }
            ].map((pillar, i) => (
              <div key={i} className="p-12 rounded-[3rem] bg-[#FFF5F8] border border-primary/5 text-center group hover:bg-primary transition-all duration-700">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform">
                  <pillar.icon className="w-10 h-10 text-primary" />
                </div>
                <h4 className="text-2xl font-headline font-bold mb-4 group-hover:text-white transition-colors">{pillar.title}</h4>
                <p className="text-[#666] group-hover:text-white/80 transition-colors">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-40 bg-[#FFF5F8]">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-5xl font-headline font-bold mb-16 text-center text-[#333]">
            {lang === 'es' ? 'Preguntas Frecuentes' : 'Common Questions'}
          </h2>
          <div className="space-y-6">
            {[
              { 
                q: lang === 'es' ? '¿Cómo se debe tomar Essence?' : 'How should I take Essence?', 
                a: lang === 'es' ? 'Se recomienda diluir una cucharada (20g) en 200ml de agua o tu bebida favorita, preferiblemente en ayunas o antes de dormir.' : 'It is recommended to dilute one scoop (20g) in 200ml of water or your favorite drink, preferably on an empty stomach or before sleeping.'
              },
              { 
                q: lang === 'es' ? '¿Cuándo empezaré a ver resultados?' : 'When will I see results?', 
                a: lang === 'es' ? 'Los beneficios en la piel suelen ser visibles tras 4 semanas de uso constante, mientras que el fortalecimiento de uñas y cabello se nota a partir del segundo mes.' : 'Skin benefits are usually visible after 4 weeks of consistent use, while hair and nail strengthening is noticed from the second month.'
              },
              { 
                q: lang === 'es' ? '¿Es apto para hombres?' : 'Is it suitable for men?', 
                a: lang === 'es' ? '¡Absolutamente! La regeneración de colágeno y la protección antioxidante son fundamentales para la salud de ambos sexos.' : 'Absolutely! Collagen regeneration and antioxidant protection are essential for the health of both sexes.'
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-3xl p-8 shadow-sm border border-primary/5 cursor-pointer">
                <summary className="list-none flex justify-between items-center font-bold text-lg text-[#333]">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-primary group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-6 text-[#666] leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Floating CTA */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 md:hidden w-[90%]">
        <Button className="w-full h-16 bg-primary text-white rounded-full shadow-2xl font-bold uppercase tracking-widest text-lg">
          {lang === 'es' ? 'Explorar Essence Ahora' : 'Explore Essence Now'}
        </Button>
      </div>

      {/* Science & Credentials Section */}
      <section className="py-20 bg-[#FFF5F8] border-t border-primary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl bg-white shadow-xl border border-primary/5">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary/60">Registro Sanitario Oficial</span>
            <div className="text-2xl md:text-3xl font-headline font-bold text-[#333]">
              INVIMA PSA-1093-2025
            </div>
            <p className="text-sm text-[#888] max-w-xs italic">
              {lang === 'es' 
                ? 'Garantía de calidad y seguridad para tu consumo diario.' 
                : 'Quality and safety guarantee for your daily consumption.'}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Link Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="p-12 md:p-16 rounded-[4rem] bg-slate-50 border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl transition-all duration-1000 group-hover:bg-primary/10" />
            <span className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8">
              {lang === 'es' ? 'Especialidad Médica' : 'Medical Specialty'}
            </span>
            <h3 className="text-3xl md:text-5xl font-headline font-bold mb-8 text-[#333]">
              {lang === 'es' 
                ? '¿Por qué no todos los colágenos son iguales?' 
                : 'Why not all collagens are the same?'}
            </h3>
            <p className="text-xl text-[#666] mb-12 leading-relaxed">
              {lang === 'es' 
                ? 'Descubre la ciencia detrás de la hidrólisis enzimática y cómo Essence transforma tu vitalidad desde el interior en nuestro blog especializado.' 
                : 'Discover the science behind enzymatic hydrolysis and how Essence transforms your vitality from within in our specialized blog.'}
            </p>
            <Button 
              variant="outline" 
              className="h-14 px-10 rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-500 font-bold uppercase tracking-widest"
              onClick={() => window.location.href = '/blog/essence-el-secreto-del-colageno-hidrolizado'}
            >
              {lang === 'es' ? 'Leer Artículo Completo' : 'Read Full Article'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="h-screen relative flex items-center justify-center bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
           <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-10"
           >
              <source src="/videos/essence_final.mp4" type="video/mp4" />
           </video>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-4xl font-headline font-bold text-[#333] mb-8"
          >
            {lang === 'es' ? '¿Lista para transformar tu salud celular?' : 'Ready to transform your cellular health?'}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-7xl md:text-[12vw] font-headline font-bold text-primary mb-16 tracking-tighter"
          >
            VIVE ESSENCE
          </motion.h2>
          <Button 
            asChild
            size="lg" 
            className="bg-primary text-white hover:bg-primary/90 rounded-full px-20 h-24 text-2xl font-bold uppercase tracking-widest shadow-2xl shadow-primary/30 cursor-pointer"
          >
            <a 
              href="https://wa.me/573122784757?text=Hola%20Dr.%20Jonathan,%20estoy%20interesado/a%20en%20el%20nuevo%20producto%20Essence." 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {lang === 'es' ? 'Explorar Essence Ahora' : 'Explore Essence Now'}
              <ArrowRight className="ml-4 w-8 h-8" />
            </a>
          </Button>
        </div>
      </section>

      {/* Entry Popup */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePopup}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-primary/10"
            >
              <button 
                onClick={closePopup}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64 bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -ml-16 -mt-16"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mb-16"></div>
                </div>
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="relative w-48 h-48"
                >
                  <Image
                    src="/images/essence/bottle_pink.png"
                    alt="Essence"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </motion.div>
              </div>

              <div className="p-10 text-center space-y-6">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary mb-2 block">Lanzamiento Exclusivo</span>
                  <h3 className="text-3xl font-headline font-bold text-slate-900 leading-tight">
                    {lang === 'es' ? 'Tu piel merece el estándar médico' : 'Your skin deserves the medical standard'}
                  </h3>
                  <p className="mt-4 text-slate-600 leading-relaxed">
                    {lang === 'es' 
                      ? 'Descubre Essence: El secreto de la regeneración celular diseñado por el Dr. Jonathan Rincón.' 
                      : 'Discover Essence: The secret of cellular regeneration designed by Dr. Jonathan Rincón.'}
                  </p>
                </div>

                <div className="pt-4 flex flex-col gap-3">
                  <Button 
                    asChild
                    size="lg" 
                    className="w-full bg-primary text-white hover:bg-primary/90 rounded-full h-14 text-sm font-bold uppercase tracking-widest shadow-lg shadow-primary/20 cursor-pointer"
                  >
                    <a 
                      href="https://wa.me/573122784757?text=Hola%20Dr.%20Jonathan,%20estoy%20interesado/a%20en%20el%20nuevo%20producto%20Essence." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={closePopup}
                    >
                      {lang === 'es' ? 'Descubrir Essence Ahora' : 'Discover Essence Now'}
                    </a>
                  </Button>
                  <button 
                    onClick={closePopup}
                    className="text-xs text-slate-400 hover:text-primary transition-colors font-medium underline underline-offset-4"
                  >
                    {lang === 'es' ? 'Quizás más tarde' : 'Maybe later'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        :root {
          --primary: 233 30 99;
        }
        .font-headline {
          font-family: var(--font-outfit), sans-serif;
        }
        body {
          background-color: #FFF5F8;
          overflow-x: hidden !important;
          width: 100%;
        }
        .bg-primary {
          background-color: #E91E63;
        }
        .text-primary {
          color: #E91E63;
        }
      `}</style>
    </div>
  );
}
