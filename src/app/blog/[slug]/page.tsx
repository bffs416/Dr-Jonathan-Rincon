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
    'botox-mitos-y-verdades': {
      title: 'Botox: Mitos y Verdades sobre la Toxina Botulínica',
      category: 'Facial',
      date: '16 de enero de 2024',
      readTime: '6 min',
      author: 'Dr. Jonathan Rincón',
      image: findImage('blog-post-2'),
      content: `
        <p class="lead">La toxina botulínica, popularmente conocida como "Botox", es uno de los tratamientos de rejuvenecimiento facial más demandados y, a la vez, uno de los más rodeados de mitos. Desde el miedo a quedar "sin expresión" hasta dudas sobre su seguridad, es hora de aclarar qué es ciencia y qué es ficción. Basado en evidencia científica, te explicamos de forma sencilla cómo funciona realmente este tratamiento y cuáles son sus verdaderos beneficios.</p>
        
        <h2>Verdad: No es un relleno, es un relajante muscular</h2>
        <p>A diferencia del ácido hialurónico, que se utiliza para rellenar surcos o dar volumen, la toxina botulínica no añade nada. Su mecanismo de acción es mucho más sofisticado.</p>
        <ul>
            <li><strong>¿Cómo funciona científicamente?</strong> La toxina botulínica es una neurotoxina producida por la bacteria Clostridium botulinum. Al inyectarla en dosis muy pequeñas y controladas en un músculo específico, bloquea de forma temporal la liberación de acetilcolina, un neurotransmisor que ordena al músculo contraerse.</li>
            <li><strong>El resultado:</strong> El músculo se relaja, lo que impide que se formen las llamadas "arrugas hiperdinámicas" o de expresión, como las del entrecejo, la frente o las "patas de gallo".</li>
        </ul>

        <h2>Mito 1: "Te deja la cara congelada y sin expresión"</h2>
        <p>Esta es quizás la creencia más extendida. Un tratamiento bien realizado no busca paralizar, sino relajar los músculos de manera estratégica. El objetivo es suavizar las arrugas de expresión manteniendo la naturalidad del rostro. Un profesional experto conoce la anatomía facial a la perfección y sabe exactamente dónde y cuánto inyectar para lograr un resultado fresco y descansado, sin afectar tu capacidad de expresar emociones. Un rostro inexpresivo no es sinónimo de belleza y no es el objetivo de un buen tratamiento.</p>

        <h2>Verdad: Es un tratamiento seguro y con múltiples aplicaciones médicas</h2>
        <p>Aunque su uso estético es el más famoso, la toxina botulínica tiene una larga historia en la medicina para tratar diversas condiciones neurológicas y musculares.</p>
        <ul>
            <li><strong>Aplicaciones terapéuticas:</strong> Se utiliza con éxito para tratar espasmos musculares (como el espasmo hemifacial o el blefaroespasmo), distonía cervical (tortícolis), migraña crónica, sudoración excesiva (hiperhidrosis) y espasticidad por lesiones cerebrales.</li>
            <li><strong>Seguridad:</strong> Su uso es muy seguro cuando lo administra un médico cualificado. La dosis utilizada en estética es extremadamente pequeña y no representa un riesgo de intoxicación. Los efectos secundarios suelen ser leves, localizados y temporales, como pequeños hematomas o dolor en el sitio de la inyección.</li>
        </ul>
        
        <h2>Mito 2: "El efecto es inmediato y permanente"</h2>
        <p>Ni lo uno ni lo otro.</p>
        <ul>
            <li><strong>Resultados graduales:</strong> El efecto no es instantáneo. La debilidad muscular comienza a notarse entre 2 y 4 días después de la inyección, alcanzando su efecto máximo entre los 7 y 10 días.</li>
            <li><strong>Efecto temporal:</strong> La relajación muscular es reversible. El cuerpo crea nuevas terminaciones nerviosas para restablecer la comunicación con el músculo. Por eso, el efecto suele durar entre 3 y 6 meses. Para mantener los resultados, el tratamiento debe repetirse periódicamente.</li>
        </ul>

        <h2>Verdad: La calidad y la técnica de aplicación son clave</h2>
        <p>Los resultados del tratamiento dependen directamente de dos factores: la calidad del producto y, sobre todo, la experiencia del médico que lo aplica.</p>
        <ul>
            <li><strong>Marcas autorizadas:</strong> Es fundamental asegurarse de que el producto utilizado sea auténtico, aprobado por las autoridades sanitarias (como Invima en Colombia) y esté debidamente conservado.</li>
            <li><strong>Profesionales cualificados:</strong> Solo los médicos con formación específica y un conocimiento profundo de la anatomía facial pueden garantizar una aplicación segura y resultados armoniosos. La aplicación de toxina botulínica es un procedimiento médico.</li>
        </ul>

        <h2>Mito 3: "Es un tratamiento solo para personas mayores"</h2>
        <p>No necesariamente. Si bien es muy eficaz para tratar arrugas ya existentes, cada vez más personas jóvenes lo utilizan de forma preventiva. Al relajar los músculos que causan las líneas de expresión, se evita que estas arrugas se marquen de forma permanente en la piel con el paso del tiempo.</p>

        <h2>Conclusión</h2>
        <p>La toxina botulínica es una herramienta científica segura y eficaz para el rejuvenecimiento facial cuando se utiliza correctamente. La clave del éxito está en acudir a un médico especialista que realice un diagnóstico personalizado, utilice productos de calidad y aplique la técnica adecuada para lograr un resultado natural y satisfactorio.</p>
      `,
    },
    'contorno-corporal-hidrolipoclasia': {
      title: 'Contorno Corporal: Hidrolipoclasia vs. Métodos Tradicionales',
      category: 'Corporal',
      date: '11 de enero de 2024',
      readTime: '7 min',
      author: 'Dr. Jonathan Rincón',
      image: findImage('blog-post-3'),
      content: `
        <p class="lead">En la búsqueda de un cuerpo moldeado y saludable, cada vez más personas recurren a tratamientos estéticos para eliminar la grasa localizada que no desaparece con dieta ni ejercicio. Aunque la liposucción ha sido durante mucho tiempo una opción popular, hoy existen alternativas no quirúrgicas que ofrecen excelentes resultados con menos riesgos.</p>
        <p>Dos de los métodos más comentados son la hidrolipoclasia ultrasónica (conocida como "liposucción sin cirugía") y la carboxiterapia. Analicemos sus bases científicas para que entiendas cuál podría ser la mejor opción para ti.</p>

        <h2>1. Hidrolipoclasia Ultrasónica: Ciencia y Procedimiento</h2>
        <p>La hidrolipoclasia no aspirativa es una técnica estética poco invasiva que se basa en un principio físico simple pero efectivo para reducir la grasa localizada.</p>
        <h3>¿Cómo funciona científicamente?</h3>
        <ol>
          <li><strong>Infiltración:</strong> Se inyecta una solución isotónica (suero fisiológico al 0.9%) directamente en el tejido adiposo de la zona a tratar (abdomen, caderas, muslos, etc.). Esta solución hincha los adipocitos (células de grasa), haciendo que su membrana sea más susceptible a romperse.</li>
          <li><strong>Ultrasonido:</strong> A continuación, se aplica un ultrasonido de alta potencia sobre la zona. Las ondas ultrasónicas generan un fenómeno llamado cavitación: se forman microburbujas en el líquido inyectado que vibran e implosionan (estallan). Esta implosión rompe la membrana de los adipocitos de forma selectiva.</li>
          <li><strong>Eliminación:</strong> La grasa liberada (triglicéridos) es luego metabolizada y eliminada de forma natural por el organismo, principalmente a través del sistema linfático y la orina.</li>
        </ol>
        <h3>Resultados y Sesiones:</h3>
        <ul>
            <li>Los resultados son visibles y se pueden medir en centímetros. Estudios han demostrado una reducción significativa de la circunferencia abdominal tras el tratamiento.</li>
            <li>Aunque algunos pacientes notan cambios desde la primera sesión, generalmente se recomiendan varias sesiones para alcanzar el objetivo deseado.</li>
            <li>Una paciente reporta que los cambios son "súper rápidos y efectivos", notándolos desde la primera semana.</li>
        </ul>
        <h3>Ventajas sobre la Liposucción Tradicional:</h3>
        <ul>
            <li>No requiere cirugía ni hospitalización.</li>
            <li>Es un procedimiento rápido (30-60 minutos) y ambulatorio.</li>
            <li>Menos doloroso y con menos riesgos que una intervención quirúrgica.</li>
            <li>Menor costo en comparación con la cirugía.</li>
        </ul>

        <h2>2. Carboxiterapia: Oxigenación para Reducir Grasa</h2>
        <p>La carboxiterapia es un procedimiento que utiliza la inyección de dióxido de carbono (CO₂) medicinal con fines terapéuticos y estéticos. Aunque también busca reducir grasa, su mecanismo de acción es completamente diferente.</p>
        <h3>¿Cómo funciona científicamente?</h3>
        <ol>
            <li><strong>Inyección de CO₂:</strong> Se inyecta dióxido de carbono de alta pureza (99.9%) en el tejido subcutáneo.</li>
            <li><strong>Efecto Bohr y Vasodilatación:</strong> El CO₂ provoca un aumento inmediato del flujo sanguíneo en la zona (vasodilatación). Esto desencadena el Efecto Bohr: la hemoglobina de los glóbulos rojos libera más oxígeno en el tejido para compensar el exceso de CO₂, mejorando la oxigenación celular.</li>
            <li><strong>Efecto Lipolítico:</strong> Se ha demostrado que el CO₂ estimula los receptores beta-adrenérgicos de los adipocitos, activando la lipólisis (destrucción de grasa). La mejora en la circulación también ayuda a eliminar toxinas y líquidos acumulados.</li>
        </ol>
        <h3>Resultados y Sesiones:</h3>
        <ul>
            <li>Es muy eficaz para tratar la celulitis (PEFE), ya que mejora la microcirculación, uno de los factores clave en su desarrollo.</li>
            <li>También se usa para grasa localizada, flacidez y estrías, ya que la mejor oxigenación estimula a los fibroblastos para que produzcan más colágeno.</li>
            <li>Se necesitan entre 10 y 12 sesiones para obtener efectos duraderos, como la formación de nuevos vasos sanguíneos.</li>
        </ul>
        
        <h2>Tabla Comparativa y Elección del Tratamiento</h2>
        <p>La decisión depende de tus objetivos y las características de la grasa a tratar.</p>
        <table>
          <thead>
            <tr>
              <th>Característica</th>
              <th>Hidrolipoclasia Ultrasónica</th>
              <th>Carboxiterapia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Mecanismo Principal</strong></td>
              <td>Ruptura mecánica de la célula de grasa (adipocito) mediante ultrasonido y cavitación.</td>
              <td>Efecto fisiológico y metabólico que mejora la circulación, oxigenación y activa la lipólisis.</td>
            </tr>
            <tr>
              <td><strong>Indicación Principal</strong></td>
              <td>Grasa localizada y compacta en áreas como abdomen, caderas y muslos.</td>
              <td>Celulitis (PEFE), flacidez y grasa localizada, especialmente cuando hay mala circulación asociada.</td>
            </tr>
            <tr>
              <td><strong>Resultados</strong></td>
              <td>Reducción de volumen y centímetros desde las primeras sesiones.</td>
              <td>Mejora de la textura de la piel ("piel de naranja"), elasticidad y contorno corporal de forma progresiva.</td>
            </tr>
             <tr>
              <td><strong>Sensación</strong></td>
              <td>Puede generar una molestia por los pinchazos, pero el dolor es considerado soportable.</td>
              <td>Dolor o sensación de ardor durante la inyección del gas, que suele ser leve y transitorio.</td>
            </tr>
            <tr>
              <td><strong>Nº de Sesiones</strong></td>
              <td>Variable, pero los efectos son notables rápidamente.</td>
              <td>Se requieren múltiples sesiones (10-12) para resultados óptimos y duraderos.</td>
            </tr>
             <tr>
              <td><strong>Asociación de Técnicas</strong></td>
              <td>A menudo se combina con drenaje linfático para ayudar a eliminar la grasa liberada.</td>
              <td>Puede asociarse con hidrolipoclasia para potenciar resultados.</td>
            </tr>
          </tbody>
        </table>
        
        <h2>Cuidados Post-Tratamiento (Hidrolipoclasia)</h2>
        <p>Para asegurar una recuperación exitosa y optimizar los resultados, es crucial seguir ciertas indicaciones:</p>
        <ul>
          <li><strong>Utiliza prendas de compresión:</strong> Ayudan a reducir la hinchazón y a que la piel se adapte al nuevo contorno.</li>
          <li><strong>Descanso relativo:</strong> Evita actividades físicas intensas durante los primeros 2 días.</li>
          <li><strong>Hidratación y dieta saludable:</strong> Beber suficiente agua ayuda a eliminar toxinas y una buena alimentación prolonga los resultados.</li>
          <li><strong>Masajes de drenaje linfático:</strong> Son fundamentales para ayudar al cuerpo a eliminar la grasa liberada y reducir la inflamación.</li>
          <li><strong>Evita la exposición solar directa</strong> en la zona tratada durante la primera semana.</li>
        </ul>

        <blockquote>
          <p>Conclusión: La hidrolipoclasia es una opción ideal si tu objetivo principal es destruir depósitos de grasa localizada de forma rápida y visible. Por otro lado, la carboxiterapia es excelente si, además de reducir grasa, buscas mejorar la celulitis y la calidad general de la piel gracias a su efecto sobre la circulación y la oxigenación.</p>
          <p>Ambos son procedimientos médicos y deben ser realizados por profesionales capacitados para garantizar tu seguridad y obtener los mejores resultados.</p>
        </blockquote>
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
    'botox-mitos-y-verdades',
    'contorno-corporal-hidrolipoclasia',
  ];
  return slugs.map((slug) => ({
    slug,
  }));
}
