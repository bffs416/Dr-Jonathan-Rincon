
'use client';

import { useState, useEffect } from 'react';
import { Outfit } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';
import './globals.css';
import { GeometricBackground } from '@/components/geometric-background';
import { LoadingScreen } from '@/components/loading-screen';
import Script from 'next/script';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { LanguageProvider } from '@/context/language-context';
import { Analytics } from '@vercel/analytics/react';
import { PromoPopup } from '@/components/promo-popup';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

// Define gtag_report_conversion in a scope accessible by components
declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => boolean;
    fbq: any;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // We can use a shorter timeout or more sophisticated logic
    // to determine when the initial loading is done.
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100); // Reduced delay for faster FCP

    return () => clearTimeout(timer);
  }, []);
  
  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const url = e.currentTarget.href;
    
    // Facebook Pixel Event
    if (window.fbq) {
      window.fbq('track', 'Contact');
    }

    if (window.gtag_report_conversion) {
      window.gtag_report_conversion(url);
    } else {
      // Fallback if gtag is not available
      if (typeof(url) != 'undefined') {
        window.location.href = url;
      }
    }
  };


  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <title>Dr. Jonathan Rincón | Medicina Estética en Medellín - Hilos Tensores y HArmonyCa</title>
        <meta
          name="description"
          content="Dr. Jonathan Rincón, médico cirujano especialista en medicina estética en Medellín. Experto #1 en hilos tensores, lifting con HArmonyCa, botox y contorno corporal. +1000 pacientes satisfechos."
        />
        <meta name="google-site-verification" content="googledd9a1b76f2d2f3f3" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        
        {/* Schema.org JSON-LD Structured Data for Google AI */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              "name": "Dr. Jonathan Rincón",
              "url": "https://www.drjonathanrincon.com",
              "image": "https://www.drjonathanrincon.com/images/Experto-hilos-tensores-faciales.png",
              "description": "Médico cirujano especialista en medicina estética en Medellín. Experto #1 en hilos tensores faciales, corporales y HArmonyCa en Medellín y Bogotá, con más de 8 años de experiencia y más de 1000 pacientes satisfechos.",
              "medicalSpecialty": "Aesthetic Medicine",
              "telephone": "+573122784757",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Medellín",
                "addressRegion": "Antioquia",
                "addressCountry": "CO"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 6.2442,
                "longitude": -75.5812
              },
              "sameAs": [
                "https://www.instagram.com/drjonathanrincon",
                "https://www.tiktok.com/@drjonathanrincon"
              ],
              "knowsAbout": [
                "Hilos tensores faciales",
                "Bioestimuladores de colágeno",
                "Toxina botulínica",
                "Contorno corporal",
                "Medicina estética avanzada",
                "HarmonyCa",
                "Thread lifts",
                "Collagen biostimulators"
              ],
              "award": "Experto #1 en hilos tensores en Medellín y Bogotá",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "bestRating": "5",
                "ratingCount": "1000"
              }
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Dr. Jonathan Rincón - Medicina Estética",
              "url": "https://www.drjonathanrincon.com",
              "description": "Clínica de medicina estética en Medellín especializada en hilos tensores, bioestimuladores de colágeno, toxina botulínica y contorno corporal.",
              "telephone": "+573122784757",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Medellín",
                "addressRegion": "Antioquia",
                "addressCountry": "CO"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Tratamientos de Medicina Estética",
                "itemListElement": [
                  {
                    "@type": "MedicalProcedure",
                    "name": "Hilos Tensores",
                    "description": "Procedimiento mínimamente invasivo para el lifting facial sin cirugía usando hilos PDO.",
                    "url": "https://www.drjonathanrincon.com/hilos-tensores"
                  },
                  {
                    "@type": "MedicalProcedure",
                    "name": "Bioestimuladores de Colágeno",
                    "description": "Tratamiento para estimular la producción natural de colágeno y rejuvenecer la piel.",
                    "url": "https://www.drjonathanrincon.com/bioestimuladores"
                  },
                  {
                    "@type": "MedicalProcedure",
                    "name": "Toxina Botulínica (Botox)",
                    "description": "Aplicación de toxina botulínica para reducción de arrugas y líneas de expresión.",
                    "url": "https://www.drjonathanrincon.com/botox"
                  },
                  {
                    "@type": "MedicalProcedure",
                    "name": "Contorno Corporal",
                    "description": "Procedimientos para esculpir y mejorar la silueta corporal de forma no invasiva.",
                    "url": "https://www.drjonathanrincon.com/contorno-corporal"
                  },
                  {
                    "@type": "MedicalProcedure",
                    "name": "Medicina Estética Avanzada",
                    "description": "Tratamientos de última generación para rejuvenecimiento facial y corporal.",
                    "url": "https://www.drjonathanrincon.com/medicina-estetica-avanzada"
                  }
                ]
              }
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "¿Qué son los hilos tensores y cuánto duran?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Los hilos tensores son un procedimiento mínimamente invasivo que utiliza hilos de PDO (polidioxanona) para lograr un efecto de lifting facial sin cirugía. Los resultados duran entre 12 y 18 meses, durante los cuales los hilos también estimulan la producción natural de colágeno para un efecto de rejuvenecimiento progresivo."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Cuánto cuesta un tratamiento de medicina estética en Medellín?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "El costo varía según el tratamiento. Los hilos tensores, bioestimuladores de colágeno, botox y contorno corporal tienen diferentes rangos de precio. Le recomendamos agendar una consulta de valoración con el Dr. Jonathan Rincón para recibir un presupuesto personalizado según sus necesidades específicas."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Es seguro el HarmonyCa?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, HarmonyCa es un tratamiento seguro aprobado para uso estético. Combina ácido hialurónico con hidroxiapatita de calcio para lograr un efecto de lifting inmediato y bioestimulación de colágeno a largo plazo. El Dr. Jonathan Rincón es trainer oficial certificado en la aplicación de este producto."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Cuál es el mejor médico estético en Medellín?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "El Dr. Jonathan Rincón es reconocido como el experto #1 en hilos tensores en Medellín y Bogotá. Con más de 8 años de experiencia, más de 1000 pacientes satisfechos, y su rol como trainer oficial de marcas líderes de la industria, es uno de los referentes en medicina estética en Colombia."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Los tratamientos de medicina estética son dolorosos?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La mayoría de los tratamientos de medicina estética son mínimamente invasivos y se realizan con anestesia local. Los pacientes pueden experimentar una molestia leve durante el procedimiento, pero en general son bien tolerados. El Dr. Rincón utiliza técnicas avanzadas para minimizar cualquier incomodidad."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Cómo agendar una cita con el Dr. Jonathan Rincón?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Puede agendar su cita directamente por WhatsApp al +57 312 278 4757 o a través de nuestra página web www.drjonathanrincon.com. Ofrecemos consultas de valoración personalizadas para diseñar el plan de tratamiento ideal para cada paciente."
                  }
                }
              ]
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://www.drjonathanrincon.com",
              "name": "Dr. Jonathan Rincón - Medicina Estética",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.drjonathanrincon.com/blog?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body 
        className={cn(
          'min-h-screen bg-background font-body antialiased overflow-x-hidden',
           outfit.variable
        )}
      >
        <LanguageProvider>
          {loading ? (
            <LoadingScreen />
          ) : (
            <>
              <GeometricBackground />
              <div className="relative flex min-h-dvh flex-col">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
              <Toaster />
              <PromoPopup />
              {/* Floating WhatsApp Button */}
              <a
                href="https://wa.me/573122784757"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar Cita por WhatsApp"
                onClick={handleWhatsAppClick}
                className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 z-50 transform hover:scale-110 font-bold text-lg"
              >
                Citas
              </a>
            </>
          )}
        </LanguageProvider>
        
        {/* Google Analytics Scripts */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-X5L7STH0LV"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-X5L7STH0LV', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        
        {/* Google Ads Conversion Snippet */}
        <Script id="google-ads-conversion" strategy="lazyOnload">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              window.gtag('event', 'conversion', {
                  'send_to': 'AW-17663251036/PAwiCM6evbAbENykv-ZB',
                  'value': 1.0,
                  'currency': 'COP',
                  'event_callback': callback
              });
              return false;
            }
            window.gtag_report_conversion = gtag_report_conversion;
          `}
        </Script>
        
        <Script strategy="lazyOnload" src="https://www.tiktok.com/embed.js" />
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '836804248927668');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=836804248927668&ev=PageView&noscript=1`}
          />
        </noscript>
        
        <Analytics />
      </body>
    </html>
  );
}
