
'use client';

import { useState, useEffect } from 'react';
import type { Metadata } from 'next';
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
import { MessageCircle } from 'lucide-react';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

// export const metadata: Metadata = {
//   title: 'Dr. Jonathan Rincón',
//   description:
//     'Medicina estética en Medellín, especialista en hilos tensores. Agenda tu cita con el Dr. Jonathan Rincón.',
// };

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
              className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 z-50 transform hover:scale-110 font-bold text-lg"
            >
              Citas
            </a>
          </>
        )}
        <Script async src="https://www.tiktok.com/embed.js" />
      </body>
    </html>
  );
}
