import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// This is a placeholder for your actual blog post data fetching logic
async function getPostData(slug: string) {
  // In a real app, you would fetch this from a CMS or database
  return {
    title: 'Hilos Tensores: La Revolución del Lifting Sin Cirugía en Medellín',
    category: 'Hilos Tensores',
    date: '19 de enero de 2024',
    readTime: '6 min',
    author: 'Dr. Jhonathan Rincón',
    image: 'https://picsum.photos/seed/aesthetic-medicine-clinic/1280/853',
    imageHint: 'aesthetic medicine clinic',
    content: `
      <p class="lead">Descubre por qué los hilos tensores PDO se han convertido en el tratamiento #1 para el rejuvenecimiento facial sin cirugía. En este artículo, exploraremos en detalle los diferentes tipos de hilos, sus beneficios, el procedimiento y los resultados que puedes esperar.</p>
      <h2>¿Qué son los Hilos Tensores?</h2>
      <p>Los hilos tensores, también conocidos como hilos mágicos, son hebras finas de material biocompatible y reabsorbible, como la polidioxanona (PDO), que se insertan en el tejido subcutáneo para crear un efecto de lifting sin necesidad de cirugía. Este material es el mismo que se utiliza en las suturas cardíacas, lo que garantiza su seguridad.</p>
      <h3>Tipos de Hilos PDO</h3>
      <p>Existen varios tipos de hilos, cada uno con un propósito específico:</p>
      <ul>
        <li><strong>Hilos Monofilamento:</strong> Ideales para mejorar la textura de la piel y crear un efecto de "malla" que redensifica la zona.</li>
        <li><strong>Hilos Espiculados o de Tracción:</strong> Cuentan con pequeñas espículas que se anclan al tejido, permitiendo reposicionar y levantar las zonas con flacidez.</li>
        <li><strong>Hilos Tornillo o Screw:</strong> Aportan volumen en áreas específicas y son excelentes para tratar arrugas profundas.</li>
      </ul>
      <h2>Beneficios del Tratamiento</h2>
      <figure>
        <img src="https://picsum.photos/seed/happy-patient-aesthetic/800/500" alt="Beneficios hilos tensores" data-ai-hint="happy patient"/>
        <figcaption>Resultados naturales y una piel visiblemente más joven.</figcaption>
      </figure>
      <p>El principal beneficio es el <strong>efecto lifting inmediato</strong>. Sin embargo, la magia real ocurre a largo plazo. La presencia de los hilos estimula a los fibroblastos a producir colágeno y elastina de forma natural. Esto se traduce en:</p>
      <ul>
        <li>Mejora de la firmeza y elasticidad de la piel.</li>
        <li>Redefinición del óvalo facial.</li>
        <li>Atenuación de arrugas y surcos.</li>
        <li>Una piel más luminosa y de mejor calidad.</li>
      </ul>
      <h2>El Procedimiento: Rápido y Seguro</h2>
      <p>El tratamiento se realiza en consulta bajo anestesia local. Dura aproximadamente entre 30 y 60 minutos. El Dr. Rincón marca las zonas a tratar y, mediante una fina cánula, introduce los hilos en el plano correcto de la piel. El paciente puede retomar sus actividades casi de inmediato, siguiendo unas sencillas pautas de cuidado.</p>
      <blockquote>
        <p>"Los hilos tensores son mi especialidad y mi pasión. La capacidad de rejuvenecer un rostro de forma tan natural y con una técnica mínimamente invasiva es lo que me motiva cada día." - Dr. Jhonathan Rincón</p>
      </blockquote>
      <h2>Resultados y Duración</h2>
      <p>Aunque el efecto tensor es visible al momento, los resultados óptimos se aprecian a partir del segundo o tercer mes, cuando la producción de nuevo colágeno está en su punto álgido. El efecto puede durar entre 12 y 18 meses, dependiendo de cada paciente.</p>
    `,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostData(params.slug);

  return (
    <div>
      <section className="relative h-[40vh] md:h-[50vh] w-full bg-slate-900">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-30"
          data-ai-hint={post.imageHint}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-4 py-8 md:py-12 text-white">
            <Badge variant="secondary">{post.category}</Badge>
            <h1 className="mt-4 font-headline text-3xl md:text-5xl font-bold !leading-tight tracking-tight drop-shadow-lg">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <article
            className="prose prose-lg lg:prose-xl dark:prose-invert prose-headings:font-headline prose-headings:text-primary prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-img:rounded-xl prose-img:shadow-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );
}
