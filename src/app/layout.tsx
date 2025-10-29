
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

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

// Define gtag_report_conversion in a scope accessible by components
declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => boolean;
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
    }, 500); // Reduced delay

    return () => clearTimeout(timer);
  }, []);
  
  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const url = e.currentTarget.href;
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
        <title>Dr. Jonathan Rincón</title>
        <meta
          name="description"
          content="Medicina estética en Medellín, especialista en hilos tensores. Agenda tu cita con el Dr. Jonathan Rincón."
        />
      </head>
      <body 
        className={cn(
          'min-h-screen bg-background font-body antialiased',
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
        <Script id="google-ads-conversion" strategy="afterInteractive">
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
        
        <Script async src="https://www.tiktok.com/embed.js" />
        <Analytics />
      </body>
    </html>
  );
}
