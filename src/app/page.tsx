import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Calendar,
  Facebook,
  HeartPulse,
  Instagram,
  MapPin,
  Sparkles,
  Star,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { Separator } from '@/components/ui/separator';

const getPlaceholderImage = (id: string) => {
  return PlaceHolderImages.find((img) => img.id === id);
};

export default function Home() {
  const heroImage = getPlaceholderImage('hero');
  const doctorImage = getPlaceholderImage('doctor-rincon');
  const beforeAfter1 = getPlaceholderImage('before-after-1');
  const beforeAfter2 = getPlaceholderImage('before-after-2');
  const beforeAfter3 = getPlaceholderImage('before-after-3');
  const blog1 = getPlaceholderImage('blog-1');
  const blog2 = getPlaceholderImage('blog-2');
  const blog3 = getPlaceholderImage('blog-3');
  const mapImage = getPlaceholderImage('map');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover object-center"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-4 text-white">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold !leading-tight tracking-tight drop-shadow-lg">
              Redefine tu Belleza Natural
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-200 drop-shadow-md">
              Descubre tratamientos de medicina estética de vanguardia con el Dr. Jhonathan Rincón, tu experto en hilos tensores en Medellín.
            </p>
            <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg">
              <Link href="#citas">
                Agenda tu Cita <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 sm:py-24 space-y-24">
        {/* About Doctor Section */}
        <section id="sobre-el-doctor" className="scroll-mt-20">
          <Card className="overflow-hidden shadow-xl md:grid md:grid-cols-3 md:gap-8">
            <div className="md:col-span-1">
              {doctorImage && (
                <Image
                  src={doctorImage.imageUrl}
                  alt={doctorImage.description}
                  data-ai-hint={doctorImage.imageHint}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover object-top"
                />
              )}
            </div>
            <div className="md:col-span-2 p-8">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Dr. Jhonathan Rincón</h2>
              <p className="mt-2 text-lg text-muted-foreground">Medicina Estética Avanzada</p>
              <Separator className="my-6" />
              <div className="space-y-4 text-base leading-relaxed">
                <p>
                  El Dr. Jhonathan Rincón es un apasionado médico estético con una trayectoria destacada en la aplicación de técnicas innovadoras para el rejuvenecimiento facial y corporal. Con años de experiencia y una formación continua en los últimos avances, el Dr. Rincón se ha consolidado como un referente en Medellín.
                </p>
                <p>
                  Su filosofía se basa en realzar la belleza inherente de cada paciente, utilizando procedimientos mínimamente invasivos que garantizan resultados naturales y armoniosos. Es especialmente reconocido por su maestría en la técnica de hilos tensores, ofreciendo una alternativa segura y eficaz al lifting quirúrgico.
                </p>
                <p>
                  Comprometido con la excelencia y el bienestar de sus pacientes, el Dr. Rincón dedica tiempo a cada consulta para entender las expectativas individuales y diseñar un plan de tratamiento personalizado.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Procedures Section */}
        <section id="procedimientos" className="scroll-mt-20 text-center">
          <Badge variant="secondary" className="text-sm">Nuestros Servicios</Badge>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">Procedimientos Destacados</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Especializados en Hilos Tensores y los tratamientos más innovadores para un rejuvenecimiento visible y natural.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { image: beforeAfter1, title: 'Hilos Tensores Faciales', icon: Sparkles, href: "/hilos-tensores" },
              { image: beforeAfter2, title: 'Rinomodelación sin Cirugía', icon: HeartPulse, href: "#" },
              { image: beforeAfter3, title: 'Armonización de Labios', icon: Sparkles, href: "#" },
            ].map((item, index) => (
              <Card key={index} className="group overflow-hidden text-left transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <CardHeader className="p-0">
                  {item.image && (
                    <Image
                      src={item.image.imageUrl}
                      alt={item.image.description}
                      data-ai-hint={item.image.imageHint}
                      width={600}
                      height={400}
                      className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 text-primary p-2 rounded-full">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="font-headline text-xl font-semibold">{item.title}</CardTitle>
                  </div>
                  <p className="mt-4 text-muted-foreground">Resultados que combinan arte y ciencia para un look fresco y rejuvenecido. Vea la transformación.</p>
                </CardContent>
                <CardFooter>
                   <Button variant="link" asChild className="p-0 text-primary">
                    <Link href={item.href}>
                      Ver más <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonios" className="scroll-mt-20">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-2">
              <Badge variant="secondary" className="text-sm">Opiniones</Badge>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">Lo que dicen nuestros pacientes</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                La confianza y satisfacción de nuestros pacientes es nuestro mayor orgullo. Sus resultados hablan por sí mismos.
              </p>
            </div>
            <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
              {[
                { name: 'Valentina G.', text: '¡Increíble! Los hilos tensores me devolvieron la frescura que había perdido. El Dr. Rincón es un verdadero artista.', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
                { name: 'Andrés M.', text: 'El profesionalismo y la atención al detalle son inmejorables. Me sentí seguro durante todo el proceso. ¡Totalmente recomendado!', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026703d' },
              ].map((testimonial) => (
                <Card key={testimonial.name} className="bg-card shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                    <div className="flex items-center mt-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <p className="ml-4 font-bold">{testimonial.name}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Appointment Section */}
        <section id="citas" className="scroll-mt-20">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
            <Calendar className="mx-auto h-12 w-12 text-primary-foreground/80 mb-4" />
            <h2 className="font-headline text-3xl md:text-4xl font-bold">¿Lista para tu Transformación?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/90">
              Da el primer paso hacia la versión más radiante de ti misma. Agenda una consulta de valoración personalizada con el Dr. Rincón.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-8 font-bold text-lg bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-5 h-5 mr-2" /> Agendar por WhatsApp
              </a>
            </Button>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="scroll-mt-20 text-center">
          <Badge variant="secondary" className="text-sm">Blog Informativo</Badge>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">Mantente Informada</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Artículos y consejos del Dr. Rincón sobre las últimas tendencias en medicina estética y cuidado personal.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { image: blog1, title: 'Todo sobre Hilos Tensores', category: 'Facial' },
              { image: blog2, title: 'Mitos y Verdades del Bótox', category: 'Rejuvenecimiento' },
              { image: blog3, title: 'Cuidado Post-Tratamiento', category: 'Consejos' },
            ].map((post, index) => (
              <Card key={index} className="group overflow-hidden text-left transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <CardHeader className="p-0 relative">
                  {post.image && (
                    <Image
                      src={post.image.imageUrl}
                      alt={post.image.description}
                      data-ai-hint={post.image.imageHint}
                      width={600}
                      height={400}
                      className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                  <Badge className="absolute top-4 right-4">{post.category}</Badge>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-xl font-semibold leading-snug">{post.title}</CardTitle>
                </CardContent>
                <CardFooter>
                   <Button variant="link" asChild className="p-0 text-primary">
                      <Link href="#">
                        Leer artículo <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                   </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
           <Button asChild variant="outline" size="lg" className="mt-12">
            <Link href="/blog-topic-generator">Ir al Generador de Temas de Blog</Link>
          </Button>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <Badge variant="secondary" className="text-sm">Contacto</Badge>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">Estamos para Ayudarte</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Ponte en contacto con nosotros para resolver tus dudas o para agendar tu próxima cita.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Ubicación</h3>
                    <p className="text-muted-foreground">Edificio Azor, Medellín, Antioquia</p>
                    <p className="text-muted-foreground">Consultorio 123</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <WhatsAppIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">WhatsApp</h3>
                    <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      +57 300 123 4567
                    </a>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <div className="flex gap-2">
                       <Instagram className="w-6 h-6" />
                       <Facebook className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Redes Sociales</h3>
                    <div className="flex gap-4">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">@drjhonrincon</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <div className="rounded-lg overflow-hidden h-64 md:h-full w-full">
               {mapImage && (
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  <Image
                    src={mapImage.imageUrl}
                    alt={mapImage.description}
                    data-ai-hint={mapImage.imageHint}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </a>
               )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
