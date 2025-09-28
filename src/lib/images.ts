
export type SiteImage = {
  id: string;
  src: string;
  hint: string;
  title?: string;
  href?: string;
  category?: string;
};

export const IMAGES: SiteImage[] = [
  // Hilos Tensores Page
  { id: 'hilos-hero', src: '/images/Dr_Jhonathan_Rincon.jpg', hint: 'aesthetic clinic' },
  { id: 'hilos-what-are', src: '/images/mujer_rubia_primer_plano_mano_mejilla.png', hint: 'facial treatment' },
  { id: 'hilos-cta', src: '/images/doctor-consulta.png', hint: 'doctor patient consultation' },
  
  // Hilos Tensores - Thread Types
  { id: 'hilos-lisos', src: '/images/hilos-lisos.png', hint: 'smooth threads illustration' },
  { id: 'hilos-cog', src: '/images/hilos-cog.png', hint: 'cog threads illustration' },

  // Hilos Tensores - Advanced Applications & Benefits
  { id: 'rhino-shaping', src: '/images/Rinomodelacion.png', hint: 'nose shaping' },
  { id: 'fox-eyes', src: '/images/Hilos_Foxy_eyes.png', hint: 'eyebrow lift' },
  { id: 'abs-definition', src: '/images/Hilos_Tensores_Abdomen_1.jpg', hint: 'abdominal definition' },
  { id: 'arm-lift', src: '/images/diptico_marcas_preoperatorias.png', hint: 'arm lift' },
  { id: 'butt-lift', src: '/images/Hilos_Tensores _Levantamiento de gluteos _1.png', hint: 'butt lift' },
  { id: 'scar-treatment', src: '/images/Tratamiento de Cicatrices Atróficas.jpg', hint: 'scar treatment' },
  { id: 'cheek-lift', src: '/images/cheeks.png', hint: 'cheek lift' },
  { id: 'jawline-definition', src: '/images/jawline.png', hint: 'jawline definition' },
  { id: 'eyebrow-lift', src: '/images/eyebrow.png', hint: 'eyebrow lift' },
  { id: 'nasolabial-folds', src: '/images/nasolabial.png', hint: 'nasolabial folds' },
  { id: 'neck-rejuvenation', src: '/images/neck.png', hint: 'neck rejuvenation' },
  { id: 'skin-improvement', src: '/images/skin.png', hint: 'skin improvement' },

  // Hilos Tensores - Before/After
  { id: 'neck-before', src: '/images/Antes y Despues/neck-before.png', hint: 'neck lift before' },
  { id: 'neck-after', src: '/images/Antes y Despues/neck-after.png', hint: 'neck lift after' },
  { id: 'eyes-before', src: '/images/Antes y Despues/eyes-before.png', hint: 'eye rejuvenation before' },
  { id: 'eyes-after', src: '/imagesAntes y Despues//eyes-after.png', hint: 'eye rejuvenation after' },
  { id: 'jawline-before', src: '/images/Antes y Despues/jawline-before.png', hint: 'jawline before' },
  { id: 'jawline-after', src: '/images/Antes y Despues/jawline-after.png', hint: 'jawline after' },
  { id: 'foxy-before', src: '/images/Antes y Despues/foxy-before.png', hint: 'fox eyes before' },
  { id: 'foxy-after', src: '/images/Antes y Despues/Hilos_Foxy_eyes.png', hint: 'fox eyes after' },
  { id: 'rhino-before', src: '/images/Antes y Despues/rhino-before.png', hint: 'rhino before' },
  { id: 'rhino-after', src: '/images/Antes y Despues/rhino-after.png', hint: 'rhino after' },
  { id: 'marionette-before', src: '/images/Antes y Despues/marionette-before.png', hint: 'marionette lines before' },
  { id: 'marionette-after', src: '/images/Antes y Despues/marionette-after.png', hint: 'marionette lines after' },
  { id: 'glutes-before', src: '/images/Antes y Despues/glutes-before.png', hint: 'butt lift before' },
  { id: 'glutes-after', src: '/images/Antes y Despues/glutes-after.png', hint: 'butt lift after' },
  { id: 'abs-before', src: '/images/Antes y Despues/abs-before.png', hint: 'abs definition before' },
  { id: 'abs-after', src: '/images/Antes y Despues/abs-after.png', hint: 'abs definition after' },
  { id: 'arms-before', src: '/images/Antes y Despues/arms-before.png', hint: 'arm lift before' },
  { id: 'arms-after', src: '/images/Antes y Despues/arms-after.png', hint: 'arm lift after' },
  { id: 'thighs-before', src: '/images/Antes y Despues/thighs-before.png', hint: 'thigh lift before' },
  { id: 'thighs-after', src: '/images/Antes y Despues/thighs-after.png', hint: 'thigh lift after' },
  { id: 'knees-before', src: '/images/Antes y Despues/knees-before.png', hint: 'knee rejuvenation before' },
  { id: 'knees-after', src: '/images/Antes y Despues/knees-after.png', hint: 'knee rejuvenation after' },

  // Bioestimuladores Page
  { id: 'biostimulator-hero', src: '/images/biostimulator-hero.png', hint: 'aesthetic medicine' },
  { id: 'firm-skin', src: '/images/firm-skin.png', hint: 'firm aesthetic skin' },
  { id: 'biostimulator-diagram', src: '/images/biostimulator-diagram.png', hint: 'biostimulator diagram' },
  { id: 'cta-bio', src: '/images/cta-bio.png', hint: 'aesthetic medicine patient' },

  // Botox Page
  { id: 'botox-hero', src: '/images/botox-hero.png', hint: 'aesthetic medicine face' },
  { id: 'expression-wrinkles', src: '/images/expression-wrinkles.png', hint: 'expression wrinkles' },
  { id: 'botox-diagram', src: '/images/botox-diagram.png', hint: 'botox injection diagram' },
  { id: 'cta-botox', src: '/images/cta-botox.png', hint: 'aesthetic botox patient' },

  // Contorno Corporal Page
  { id: 'body-contouring-hero', src: '/images/body-contouring-hero.png', hint: 'body contouring' },
  { id: 'toned-figure', src: '/images/toned-figure.png', hint: 'toned body' },
  { id: 'hidrolipoclasia-diagram', src: '/images/hidrolipoclasia-diagram.png', hint: 'hidrolipoclasia diagram' },
  { id: 'tensamax-diagram', src: '/images/tensamax-diagram.png', hint: 'tensamax diagram' },
  { id: 'cta-body-contouring', src: '/images/cta-body-contouring.png', hint: 'happy woman figure' },

  // Medicina Preventiva Page
  { id: 'preventive-hero', src: '/images/preventive-hero.png', hint: 'preventive medicine' },
  { id: 'rejuvenation-guide', src: '/images/rejuvenation-guide.png', hint: 'facial rejuvenation' },
  { id: 'mesoterapia-facial', src: '/images/mesoterapia-facial.png', hint: 'facial mesotherapy' },
  { id: 'skinbooster-treatment', src: '/images/skinbooster-treatment.png', hint: 'skin hydration treatment' },
  { id: 'pdrn-collagen', src: '/images/pdrn-collagen.png', hint: 'collagen stimulation' },
  { id: 'facial-filler', src: '/images/facial-filler.png', hint: 'facial filler' },
  { id: 'body-treatment', src: '/images/body-treatment.png', hint: 'body treatment' },
  { id: 'reducing-massage', src: '/images/reducing-massage.png', hint: 'reducing massage' },
  { id: 'carboxytherapy-image', src: '/images/carboxytherapy-image.png', hint: 'carboxytherapy' },
  { id: 'cta-preventive', src: '/images/cta-preventive.png', hint: 'radiant skin' },

  // Blog Listing Page
  { id: 'blog-featured', src: '/images/aesthetic-medicine-main.png', hint: 'aesthetic medicine' },
  { id: 'blog-post-1', src: '/images/aesthetic-collagen.png', hint: 'collagen treatment' },
  { id: 'blog-post-2', src: '/images/aesthetic-botox.png', hint: 'botox injection' },
  { id: 'blog-post-3', src: '/images/aesthetic-bodycontour.png', hint: 'body contouring' },

  // Blog Post Page
  { id: 'blog-post-hero', src: '/images/aesthetic-medicine-clinic.png', hint: 'aesthetic medicine clinic' },
  { id: 'blog-post-content', src: '/images/happy-patient-aesthetic.png', hint: 'happy patient' },

  // Home Page
  { id: 'home-testimonial-1', src: '/images/Modelo 6.jpg', hint: 'facial procedure' },
  { id: 'home-testimonial-2', src: '/images/Modelo 9.jpg', hint: 'facial injection' },
  
  // Gallery Images (for Infinite Moving Cards)
  { id: 'gallery-1', src: '/images/Hilos_Tensores_Lifting cuello.png', hint: 'facial procedure', title: 'Lifting de Cuello', href: '/hilos-tensores', category: 'Hilos Tensores' },
  { id: 'gallery-2', src: '/images/Rejuvenecimiento Facial.jpg', hint: 'man consultation', title: 'Rejuvenecimiento Facial', href: '/medicina-preventiva' },
  { id: 'gallery-3', src: '/images/Hilos tensores_Marcacion mandibular.png', hint: 'facial marking', title: 'Marcación Mandibular', href: '/hilos-tensores', category: 'Hilos Tensores' },
  { id: 'gallery-4', src: '/images/Rinomodelacion.png', hint: 'facial injection', title: 'Rinomodelación', href: '/hilos-tensores' },
  { id: 'gallery-5', src: '/images/Ojeras.png', hint: 'skin treatment', title: 'Tratamiento de Ojeras', href: '/medicina-preventiva' },
  { id: 'gallery-6', src: '/images/Hilos_Foxy_eyes.png', hint: 'foxy eyes procedure', title: 'Foxy Eyes', href: '/hilos-tensores', category: 'Hilos Tensores' },
  { id: 'gallery-7', src: '/images/Hilos_Tensores _Levantamiento de gluteos.png', hint: 'patient treatment', title: 'Lifting de Glúteos', href: '/hilos-tensores' },
  { id: 'gallery-8', src: '/images/Hilos_Tensores_Abdomen_1.jpg', hint: 'man profile', title: 'Marcación Abdominal', href: '/hilos-tensores', category: 'Hilos Tensores' }
];

// Helper function to find an image by its ID
export function findImage(id: string): SiteImage | undefined {
  return IMAGES.find(img => img.id === id);
}
