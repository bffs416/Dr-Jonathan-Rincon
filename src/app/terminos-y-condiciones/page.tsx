import { SectionTitleWithLines } from '@/components/section-title-with-lines';

export default function TerminosYCondicionesPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Términos y <span className="text-primary">Condiciones</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <article className="prose prose-lg lg:prose-xl dark:prose-invert mx-auto mt-12 prose-headings:font-headline prose-headings:text-primary">
          <h2>1. Aceptación de los Términos</h2>
          <p>
            Al acceder y utilizar este sitio web, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro sitio web.
          </p>

          <h2>2. Uso del Sitio Web</h2>
          <p>
            Este sitio web y su contenido son para su información general y uso personal. El contenido está sujeto a cambios sin previo aviso. La información proporcionada aquí no pretende ser un sustituto del consejo, diagnóstico o tratamiento médico profesional. Siempre busque el consejo de su médico u otro proveedor de salud calificado con cualquier pregunta que pueda tener sobre una condición médica.
          </p>

          <h2>3. Propiedad Intelectual</h2>
          <p>
            El contenido, diseño, logos, gráficos y otros materiales de este sitio web son propiedad del Dr. Jonathan Rincón y están protegidos por las leyes de derechos de autor y propiedad intelectual. No se permite la reproducción, distribución o transmisión de ninguna parte del sitio sin nuestro permiso previo por escrito.
          </p>

          <h2>4. Exclusión de Garantías</h2>
          <p>
            Si bien nos esforzamos por mantener la información actualizada y correcta, no ofrecemos garantías de ningún tipo, expresas o implícitas, sobre la integridad, precisión, fiabilidad, idoneidad o disponibilidad con respecto al sitio web o la información, productos, servicios o gráficos relacionados contenidos en el sitio para cualquier propósito.
          </p>

          <h2>5. Limitación de Responsabilidad</h2>
          <p>
            En ningún caso el Dr. Jonathan Rincón será responsable de ninguna pérdida o daño, incluyendo, entre otros, pérdidas o daños indirectos o consecuentes, o cualquier pérdida o daño que surja de la pérdida de datos o ganancias que surjan del uso de este sitio web.
          </p>

          <h2>6. Enlaces a Terceros</h2>
          <p>
            Este sitio web puede contener enlaces a otros sitios web que no están bajo nuestro control. No tenemos control sobre la naturaleza, el contenido y la disponibilidad de esos sitios. La inclusión de cualquier enlace no implica necesariamente una recomendación ni respalda las opiniones expresadas en ellos.
          </p>

          <h2>7. Ley Aplicable</h2>
          <p>
            El uso de este sitio web y cualquier disputa que surja de dicho uso están sujetos a las leyes de Colombia.
          </p>

          <h2>8. Modificaciones de los Términos</h2>
          <p>
            Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Se recomienda revisar esta página periódicamente para estar al tanto de cualquier cambio.
          </p>
        </article>
      </div>
    </div>
  );
}
