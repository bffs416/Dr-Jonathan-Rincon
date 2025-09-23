'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Facebook, Instagram, Menu, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from './logo';
import { WhatsAppIcon } from './icons/whatsapp-icon';

const navLinks = [
  { href: '/hilos-tensores', label: 'Hilos Tensores' },
  { href: '/#procedimientos', label: 'Procedimientos' },
  { href: '/#sobre-el-doctor', label: 'Sobre el Doctor' },
  { href: '/#testimonios', label: 'Testimonios' },
  { href: '/#blog', label: 'Blog' },
  { href: '/#contacto', label: 'Contacto' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      if (pathname !== '/') {
        // If we are not on the homepage, we can't do smooth scroll.
        // Let's navigate to the homepage with the hash.
        // The browser will handle scrolling to the element.
        return;
      }
      e.preventDefault();
      const targetId = href.substring(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };


  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-background/80 shadow-md backdrop-blur-lg'
          : 'bg-transparent',
        pathname === '/' && !isScrolled ? 'bg-transparent text-white' : ''
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Logo />

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                 pathname === '/' && !isScrolled ? 'text-white/80 hover:text-white' : 'text-foreground/80 hover:text-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={cn("hover:text-primary", pathname === '/' && !isScrolled ? 'text-white' : 'text-foreground')}>
              <Instagram className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={cn("hover:text-primary", pathname === '/' && !isScrolled ? 'text-white' : 'text-foreground')}>
              <Facebook className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
             <a href="https://wa.me/573122784757" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-5 w-5 mr-2" /> Agendar Cita
             </a>
          </Button>
        </div>

        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className={cn("hover:text-primary", pathname === '/' && !isScrolled ? 'text-white' : 'text-foreground')}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-0">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b">
                 <Logo />
                 <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                 </Button>
              </div>

              <nav className="flex-1 flex flex-col items-start space-y-4 p-4 mt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="p-4 border-t">
                 <Button asChild className="w-full bg-accent hover:bg-accent/90 text-lg py-6">
                    <a href="https://wa.me/573122784757" target="_blank" rel="noopener noreferrer">
                        <WhatsAppIcon className="h-5 w-5 mr-2" /> Agendar Cita
                    </a>
                </Button>
                <div className="flex justify-center items-center space-x-4 mt-4">
                  <Button variant="ghost" size="icon" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <Instagram className="h-6 w-6" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <Facebook className="h-6 w-6" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
