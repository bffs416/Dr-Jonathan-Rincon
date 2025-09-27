export default function PoliticaDePrivacidadPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Política de <span className="text-primary">Privacidad</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <article className="prose prose-lg lg:prose-xl dark:prose-invert mx-auto mt-12 prose-headings:font-headline prose-headings:text-primary">
          <h2>1. Introducción</h2>
          <p>
            La presente Política de Privacidad describe cómo el Dr. Jonathan Rincón recopila, utiliza y protege la información personal que usted proporciona al utilizar nuestro sitio web. Nos comprometemos a garantizar que su privacidad esté protegida.
          </p>

          <h2>2. Información que Recopilamos</h2>
          <p>
            Podemos recopilar la siguiente información:
          </p>
          <ul>
            <li>Nombre y datos de contacto, incluyendo dirección de correo electrónico y número de teléfono, cuando nos contacta a través de formularios o WhatsApp.</li>
            <li>Información demográfica como preferencias e intereses.</li>
            <li>Información técnica como la dirección IP, tipo de navegador y sistema operativo para análisis del sitio web.</li>
          </ul>

          <h2>3. Uso de la Información</h2>
          <p>
            Utilizamos la información recopilada para los siguientes propósitos:
          </p>
          <ul>
            <li>Para contactarlo en respuesta a sus consultas y agendar citas.</li>
            <li>Para mejorar nuestros productos y servicios.</li>
            <li>Para análisis internos y mantenimiento de registros.</li>
            <li>Ocasionalmente, podemos enviarle correos electrónicos promocionales sobre nuevos tratamientos, ofertas especiales u otra información que creemos que puede resultarle interesante, siempre que hayamos obtenido su consentimiento para hacerlo.</li>
          </ul>

          <h2>4. Seguridad de los Datos</h2>
          <p>
            Estamos comprometidos a garantizar que su información esté segura. Para evitar el acceso o la divulgación no autorizados, hemos implementado procedimientos físicos, electrónicos y administrativos adecuados para salvaguardar y proteger la información que recopilamos en línea.
          </p>

          <h2>5. Uso de Cookies</h2>
          <p>
            Nuestro sitio web puede utilizar cookies para mejorar su experiencia de usuario. Una cookie es un pequeño archivo que pide permiso para ser colocado en el disco duro de su computadora. Las cookies nos permiten responderle como individuo y adaptar nuestras operaciones a sus necesidades, gustos y disgustos al recopilar y recordar información sobre sus preferencias. Puede optar por aceptar o rechazar las cookies.
          </p>

          <h2>6. Control de su Información Personal</h2>
          <p>
            Usted puede optar por restringir la recopilación o el uso de su información personal. No venderemos, distribuiremos ni cederemos su información personal a terceros a menos que tengamos su permiso o la ley nos exija hacerlo.
          </p>
          <p>
            Usted tiene derecho a solicitar detalles de la información personal que tenemos sobre usted. Si cree que cualquier información que tenemos sobre usted es incorrecta o está incompleta, por favor contáctenos lo antes posible para que podamos corregirla.
          </p>

          <h2>7. Enlaces a Otros Sitios Web</h2>
          <p>
            Nuestro sitio web puede contener enlaces a otros sitios de interés. Sin embargo, una vez que haya utilizado estos enlaces para salir de nuestro sitio, debe tener en cuenta que no tenemos ningún control sobre ese otro sitio web. Por lo tanto, no podemos ser responsables de la protección y privacidad de cualquier información que proporcione mientras visita dichos sitios.
          </p>

          <h2>8. Cambios a esta Política</h2>
          <p>
            Podemos cambiar esta política de vez en cuando actualizando esta página. Debe consultar esta página de vez en cuando para asegurarse de que está satisfecho con los cambios.
          </p>
        </article>
      </div>
    </div>
  );
}
