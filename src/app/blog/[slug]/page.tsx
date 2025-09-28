import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, User } from 'lucide-react';
import Image from 'next/image';
import { findImage } from '@/lib/images';
import { notFound } from 'next/navigation';

// Placeholder for your actual blog post data fetching logic
async function getPostData(slug: string) {
  // In a real app, you would fetch this from a CMS or database
  const posts: { [key: string]: any } = {
    'hilos-tensores-revolucion': {
      title: 'Hilos Tensores: La Revolución del Lifting Sin Cirugía en Medellín',
      category: 'Hilos Tensores',
      date: '19 de enero de 2024',
      readTime: '6 min',
      author: 'Dr. Jonathan Rincón',
      image: findImage('blog-post-hero'),
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
          <img src="${findImage('blog-post-content')?.src}" alt="Beneficios hilos tensores" data-ai-hint="${findImage('blog-post-content')?.hint}"/>
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
          <p>"Los hilos tensores son mi especialidad y mi pasión. La capacidad de rejuvenecer un rostro de forma tan natural y con una técnica mínimamente invasiva es lo que me motiva cada día." - Dr. Jonathan Rincón</p>
        </blockquote>
        <h2>Resultados y Duración</h2>
        <p>Aunque el efecto tensor es visible al momento, los resultados óptimos se aprecian a partir del segundo o tercer mes, cuando la producción de nuevo colágeno está en su punto álgido. El efecto puede durar entre 12 y 18 meses, dependiendo de cada paciente.</p>
      `,
    },
    'bioestimuladores-colageno': {
      title: 'Bioestimuladores de Colágeno: Radiesse vs Sculptra vs HArmonyCa',
      category: 'Bioestimuladores',
      date: '25 de julio de 2024',
      readTime: '8 min',
      author: 'Dr. Jonathan Rincón',
      image: findImage('blog-radiesse-sculptra-hero'),
      content: `
        <p class="lead">Los bioestimuladores de colágeno son la piedra angular del rejuvenecimiento moderno, pero con tantas opciones en el mercado, ¿cuál es la mejor para ti? Analizamos a fondo los tres gigantes: Radiesse, Sculptra y el innovador HArmonyCa.</p>
        <h2>¿Qué hacen los Bioestimuladores?</h2>
        <p>Antes de comparar, recordemos su función: son sustancias inyectables que, una vez en la piel, "despiertan" a nuestras células (fibroblastos) para que produzcan colágeno nuevo y de calidad. El resultado no es un relleno inmediato, sino una mejora progresiva de la firmeza, densidad y calidad de la piel.</p>
        
        <h2>Radiesse (Hidroxiapatita de Calcio)</h2>
        <figure>
          <img src="${findImage('blog-radiesse-sculptra-content')?.src}" alt="Aplicación de Radiesse" data-ai-hint="Radiesse application"/>
          <figcaption>Radiesse ofrece un doble efecto: relleno inmediato y bioestimulación a largo plazo.</figcaption>
        </figure>
        <p>Radiesse es un veterano confiable y muy versátil. Está compuesto por microesferas de hidroxiapatita de calcio suspendidas en un gel portador.</p>
        <ul>
          <li><strong>Efecto Inmediato:</strong> Sí. El gel proporciona un ligero volumen y corrección instantánea de surcos o arrugas.</li>
          <li><strong>Mecanismo:</strong> Las microesferas actúan como un "andamio" sobre el cual el cuerpo construye nuevo colágeno.</li>
          <li><strong>Ideal para:</strong> Pacientes que desean un resultado visible desde el principio, además del efecto a largo plazo. Excelente para definir el contorno mandibular, los pómulos y tratar la flacidez facial y corporal (cuello, manos, brazos).</li>
          <li><strong>Duración:</strong> Entre 12 y 18 meses.</li>
        </ul>

        <h2>Sculptra (Ácido Poli-L-Láctico)</h2>
        <p>Sculptra es el "maratonista" de los bioestimuladores. Compuesto por ácido poli-L-láctico, su enfoque es 100% la estimulación de colágeno, sin efecto de relleno inicial.</p>
        <ul>
          <li><strong>Efecto Inmediato:</strong> No. El efecto de volumen inicial se debe al agua de la reconstitución y desaparece en unos días. Los resultados reales aparecen gradualmente en meses.</li>
          <li><strong>Mecanismo:</strong> Induce una respuesta inflamatoria controlada que desencadena una potente producción de colágeno tipo I.</li>
          <li><strong>Ideal para:</strong> Pacientes con pérdida de volumen generalizada (atrofia facial), flacidez significativa y que buscan un resultado muy progresivo y natural. Es el rey del "full face" y del tratamiento de la celulitis y lifting de glúteos.</li>
          <li><strong>Duración:</strong> Hasta 25 meses, siendo uno de los más duraderos.</li>
        </ul>

        <h2>HArmonyCa (Hidroxiapatita de Calcio + Ácido Hialurónico)</h2>
        <p>HArmonyCa es el híbrido más nuevo y emocionante. Combina lo mejor de dos mundos: la capacidad de bioestimulación de la hidroxiapatita de calcio (como Radiesse) con el poder de hidratación y efecto lifting inmediato del ácido hialurónico reticulado.</p>
        <ul>
          <li><strong>Efecto Inmediato:</strong> Sí, y muy notorio. El ácido hialurónico proporciona un lifting e hidratación instantáneos.</li>
          <li><strong>Mecanismo:</strong> Doble acción. El ácido hialurónico da soporte inmediato mientras que la hidroxiapatita de calcio construye la red de colágeno a largo plazo.</li>
          <li><strong>Ideal para:</strong> Pacientes que buscan tanto un efecto lifting inmediato como una mejora sostenida de la calidad de la piel. Es perfecto para el tercio medio e inferior del rostro, especialmente para el "lifting de la mejilla lateral".</li>
          <li><strong>Duración:</strong> Resultados sostenidos hasta por 18-24 meses.</li>
        </ul>
        
        <h2>Tabla Comparativa Rápida</h2>
        <table>
          <thead>
            <tr>
              <th>Característica</th>
              <th>Radiesse</th>
              <th>Sculptra</th>
              <th>HArmonyCa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Componente Principal</strong></td>
              <td>Hidroxiapatita de Calcio</td>
              <td>Ácido Poli-L-Láctico</td>
              <td>Hidroxiapatita + Ácido Hialurónico</td>
            </tr>
            <tr>
              <td><strong>Efecto Inmediato</strong></td>
              <td>Sí (moderado)</td>
              <td>No</td>
              <td>Sí (alto)</td>
            </tr>
            <tr>
              <td><strong>Objetivo Principal</strong></td>
              <td>Definición y bioestimulación</td>
              <td>Volumen y bioestimulación</td>
              <td>Lifting y bioestimulación</td>
            </tr>
             <tr>
              <td><strong>Mejor para...</strong></td>
              <td>Contorno mandibular, pómulos</td>
              <td>Flacidez severa, glúteos</td>
              <td>Lifting lateral, efecto dual</td>
            </tr>
            <tr>
              <td><strong>Duración</strong></td>
              <td>~18 meses</td>
              <td>~25 meses</td>
              <td>~24 meses</td>
            </tr>
          </tbody>
        </table>

        <blockquote>
          <p>"La elección del bioestimulador no se basa en cuál es 'mejor', sino en cuál es el adecuado para la anatomía, objetivos y tipo de piel de cada paciente. La personalización es la clave del éxito." - Dr. Jonathan Rincón</p>
        </blockquote>
        
        <h2>Conclusión: ¿Cuál elegir?</h2>
        <p>La decisión final siempre debe tomarse en una consulta de valoración con un médico experto.</p>
        <ul>
          <li>Si buscas <strong>definición y un resultado visible desde el día uno</strong>, <strong>Radiesse</strong> es una excelente opción.</li>
          <li>Si tu prioridad es tratar la <strong>flacidez general y no tienes prisa por ver el resultado final</strong>, <strong>Sculptra</strong> es inigualable.</li>
          <li>Si quieres lo mejor de ambos mundos, un <strong>lifting inmediato y una mejora a largo plazo</strong>, <strong>HArmonyCa</strong> es la tecnología más avanzada.</li>
        </ul>
        <p>Agenda tu cita de valoración para descubrir cuál de estos potentes tratamientos es el perfecto para devolverle la juventud y firmeza a tu piel.</p>
      `,
    },
  };

  const post = posts[slug];
  if (!post) {
    return null;
  }

  return post;
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostData(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <section className="relative h-[40vh] md:h-[50vh] w-full bg-slate-900">
        {post.image && (
          <Image
            src={post.image.src}
            alt={post.title}
            fill
            className="object-cover opacity-30"
            data-ai-hint={post.image.hint}
            priority
          />
        )}
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
            className="prose prose-lg lg:prose-xl dark:prose-invert prose-headings:font-headline prose-headings:text-primary prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-img:rounded-xl prose-img:shadow-lg prose-table:border prose-th:bg-muted prose-th:p-2 prose-td:p-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );
}

// Generate static paths for blog posts
export async function generateStaticParams() {
  const slugs = [
    'hilos-tensores-revolucion',
    'bioestimuladores-colageno',
  ];
  return slugs.map((slug) => ({
    slug,
  }));
}
