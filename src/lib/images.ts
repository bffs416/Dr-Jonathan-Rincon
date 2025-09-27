
export type SiteImage = {
  id: string;
  src: string;
  hint: string;
};

export const IMAGES: SiteImage[] = [
  // Hilos Tensores Page
  { id: 'hilos-hero', src: '/images/gallery/lifting-cuello.png', hint: 'aesthetic clinic' },
  { id: 'hilos-what-are', src: '/images/gallery/rejuvenecimiento-facial.png', hint: 'facial treatment' },
  { id: 'hilos-cta', src: '/images/gallery/doctor-consulta.png', hint: 'doctor patient consultation' },
  
  // Hilos Tensores - Thread Types
  { id: 'hilos-lisos', src: '/images/placeholders/hilos-lisos.png', hint: 'smooth threads illustration' },
  { id: 'hilos-cog', src: '/images/placeholders/hilos-cog.png', hint: 'cog threads illustration' },

  // Hilos Tensores - Advanced Applications & Benefits
  { id: 'rhino-shaping', src: '/images/placeholders/rhino.png', hint: 'nose shaping' },
  { id: 'fox-eyes', src: '/images/Hilos_Foxy_eyes.png', hint: 'eyebrow lift' },
  { id: 'abs-definition', src: '/images/placeholders/abs.png', hint: 'abdominal definition' },
  { id: 'arm-lift', src: '/images/placeholders/arms.png', hint: 'arm lift' },
  { id: 'butt-lift', src: '/images/placeholders/glutes.png', hint: 'butt lift' },
  { id: 'scar-treatment', src: '/images/placeholders/scars.png', hint: 'scar treatment' },
  { id: 'cheek-lift', src: '/images/placeholders/cheeks.png', hint: 'cheek lift' },
  { id: 'jawline-definition', src: '/images/placeholders/jawline.png', hint: 'jawline definition' },
  { id: 'eyebrow-lift', src: '/images/placeholders/eyebrow.png', hint: 'eyebrow lift' },
  { id: 'nasolabial-folds', src: '/images/placeholders/nasolabial.png', hint: 'nasolabial folds' },
  { id: 'neck-rejuvenation', src: '/images/placeholders/neck.png', hint: 'neck rejuvenation' },
  { id: 'skin-improvement', src: '/images/placeholders/skin.png', hint: 'skin improvement' },

  // Hilos Tensores - Before/After
  { id: 'neck-before', src: '/images/placeholders/neck-before.png', hint: 'neck lift before' },
  { id: 'neck-after', src: '/images/placeholders/neck-after.png', hint: 'neck lift after' },
  { id: 'eyes-before', src: '/images/placeholders/eyes-before.png', hint: 'eye rejuvenation before' },
  { id: 'eyes-after', src: '/images/placeholders/eyes-after.png', hint: 'eye rejuvenation after' },
  { id: 'jawline-before', src: '/images/placeholders/jawline-before.png', hint: 'jawline before' },
  { id: 'jawline-after', src: '/images/placeholders/jawline-after.png', hint: 'jawline after' },
  { id: 'foxy-before', src: '/images/placeholders/foxy-before.png', hint: 'fox eyes before' },
  { id: 'foxy-after', src: '/images/Hilos_Foxy_eyes.png', hint: 'fox eyes after' },
  { id: 'rhino-before', src: '/images/placeholders/rhino-before.png', hint: 'rhino before' },
  { id: 'rhino-after', src: '/images/placeholders/rhino-after.png', hint: 'rhino after' },
  { id: 'marionette-before', src: '/images/placeholders/marionette-before.png', hint: 'marionette lines before' },
  { id: 'marionette-after', src: '/images/placeholders/marionette-after.png', hint: 'marionette lines after' },
  { id: 'glutes-before', src: '/images/placeholders/glutes-before.png', hint: 'butt lift before' },
  { id: 'glutes-after', src: '/images/placeholders/glutes-after.png', hint: 'butt lift after' },
  { id: 'abs-before', src: '/images/placeholders/abs-before.png', hint: 'abs definition before' },
  { id: 'abs-after', src: '/images/placeholders/abs-after.png', hint: 'abs definition after' },
  { id: 'arms-before', src: '/images/placeholders/arms-before.png', hint: 'arm lift before' },
  { id: 'arms-after', src: '/images/placeholders/arms-after.png', hint: 'arm lift after' },
  { id: 'thighs-before', src: '/images/placeholders/thighs-before.png', hint: 'thigh lift before' },
  { id: 'thighs-after', src: '/images/placeholders/thighs-after.png', hint: 'thigh lift after' },
  { id: 'knees-before', src: '/images/placeholders/knees-before.png', hint: 'knee rejuvenation before' },
  { id: 'knees-after', src: '/images/placeholders/knees-after.png', hint: 'knee rejuvenation after' },

  // Bioestimuladores Page
  { id: 'biostimulator-hero', src: '/images/placeholders/biostimulator-hero.png', hint: 'aesthetic medicine' },
  { id: 'firm-skin', src: '/images/placeholders/firm-skin.png', hint: 'firm aesthetic skin' },
  { id: 'biostimulator-diagram', src: '/images/placeholders/biostimulator-diagram.png', hint: 'biostimulator diagram' },
  { id: 'cta-bio', src: '/images/placeholders/cta-bio.png', hint: 'aesthetic medicine patient' },

  // Botox Page
  { id: 'botox-hero', src: '/images/placeholders/botox-hero.png', hint: 'aesthetic medicine face' },
  { id: 'expression-wrinkles', src: '/images/placeholders/expression-wrinkles.png', hint: 'expression wrinkles' },
  { id: 'botox-diagram', src: '/images/placeholders/botox-diagram.png', hint: 'botox injection diagram' },
  { id: 'cta-botox', src: '/images/placeholders/cta-botox.png', hint: 'aesthetic botox patient' },

  // Contorno Corporal Page
  { id: 'body-contouring-hero', src: '/images/placeholders/body-contouring-hero.png', hint: 'body contouring' },
  { id: 'toned-figure', src: '/images/placeholders/toned-figure.png', hint: 'toned body' },
  { id: 'hidrolipoclasia-diagram', src: '/images/placeholders/hidrolipoclasia-diagram.png', hint: 'hidrolipoclasia diagram' },
  { id: 'tensamax-diagram', src: '/images/placeholders/tensamax-diagram.png', hint: 'tensamax diagram' },
  { id: 'cta-body-contouring', src: '/images/placeholders/cta-body-contouring.png', hint: 'happy woman figure' },

  // Medicina Preventiva Page
  { id: 'preventive-hero', src: '/images/placeholders/preventive-hero.png', hint: 'preventive medicine' },
  { id: 'rejuvenation-guide', src: '/images/placeholders/rejuvenation-guide.png', hint: 'facial rejuvenation' },
  { id: 'mesoterapia-facial', src: '/images/placeholders/mesoterapia-facial.png', hint: 'facial mesotherapy' },
  { id: 'skinbooster-treatment', src: '/images/placeholders/skinbooster-treatment.png', hint: 'skin hydration treatment' },
  { id: 'pdrn-collagen', src: '/images/placeholders/pdrn-collagen.png', hint: 'collagen stimulation' },
  { id: 'facial-filler', src: '/images/placeholders/facial-filler.png', hint: 'facial filler' },
  { id: 'body-treatment', src: '/images/placeholders/body-treatment.png', hint: 'body treatment' },
  { id: 'reducing-massage', src: '/images/placeholders/reducing-massage.png', hint: 'reducing massage' },
  { id: 'carboxytherapy-image', src: '/images/placeholders/carboxytherapy-image.png', hint: 'carboxytherapy' },
  { id: 'cta-preventive', src: '/images/placeholders/cta-preventive.png', hint: 'radiant skin' },

  // Blog Listing Page
  { id: 'blog-featured', src: '/images/placeholders/aesthetic-medicine-main.png', hint: 'aesthetic medicine' },
  { id: 'blog-post-1', src: '/images/placeholders/aesthetic-collagen.png', hint: 'collagen treatment' },
  { id: 'blog-post-2', src: '/images/placeholders/aesthetic-botox.png', hint: 'botox injection' },
  { id: 'blog-post-3', src: '/images/placeholders/aesthetic-bodycontour.png', hint: 'body contouring' },

  // Blog Post Page
  { id: 'blog-post-hero', src: '/images/placeholders/aesthetic-medicine-clinic.png', hint: 'aesthetic medicine clinic' },
  { id: 'blog-post-content', src: '/images/placeholders/happy-patient-aesthetic.png', hint: 'happy patient' },

  // Home Page
  { id: 'home-testimonial-1', src: '/images/placeholders/face-procedure-1.png', hint: 'facial procedure' },
  { id: 'home-testimonial-2', src: '/images/placeholders/facial-injection.png', hint: 'facial injection' },
  
  // Gallery Images (for Infinite Moving Cards)
  { id: 'gallery-1', src: '/images/gallery/lifting-cuello.png', hint: 'facial procedure', title: 'Lifting de Cuello', href: '/hilos-tensores', category: 'Hilos Tensores' },
  { id: 'gallery-2', src: '/images/gallery/rejuvenecimiento-facial.png', hint: 'man consultation', title: 'Rejuvenecimiento Facial', href: '/medicina-preventiva' },
  { id: 'gallery-3', src: '/images/gallery/marcacion-mandibular.png', hint: 'facial marking', title: 'Marcación Mandibular', href: '/hilos-tensores', category: 'Hilos Tensores' },
  { id: 'gallery-4', src: '/images/gallery/rinomodelacion.png', hint: 'facial injection', title: 'Rinomodelación', href: '/hilos-tensores' },
  { id: 'gallery-5', src: '/images/gallery/tratamiento-ojeras.png', hint: 'skin treatment', title: 'Tratamiento de Ojeras', href: '/medicina-preventiva' },
  { id: 'gallery-6', src: '/images/Hilos_Foxy_eyes.png', hint: 'foxy eyes procedure', title: 'Foxy Eyes', href: '/hilos-tensores', category: 'Hilos Tensores' },
  { id: 'gallery-7', src: '/images/gallery/lifting-gluteos.png', hint: 'patient treatment', title: 'Lifting de Glúteos', href: '/hilos-tensores' },
  { id: 'gallery-8', src: '/images/gallery/marcacion-abdominal.png', hint: 'man profile', title: 'Marcación Abdominal', href: '/hilos-tensores', category: 'Hilos Tensores' }
];

// Helper function to find an image by its ID
export function findImage(id: string): SiteImage | undefined {
  return IMAGES.find(img => img.id === id);
}
