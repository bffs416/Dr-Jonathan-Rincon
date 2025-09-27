'use client';

import { useState, useEffect } from 'react';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';
import './globals.css';
import { GeometricBackground } from '@/components/geometric-background';
import { MessageCircle } from 'lucide-react';
import { LoadingScreen } from '@/components/loading-screen';

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
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
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
              aria-label="Contactar por mensaje"
              className="fixed bottom-6 right-6 bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all duration-300 z-50 transform hover:scale-110"
            >
              <MessageCircle className="w-8 h-8" />
            </a>
          </>
        )}
      </body>
    </html>
  );
}
