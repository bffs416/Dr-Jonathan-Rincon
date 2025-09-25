'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Facebook, Instagram, Menu, X, Award, Search, Moon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from './logo';
import { WhatsAppIcon } from './icons/whatsapp-icon';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

const navLinks = [
    { 
        name: 'Tratamientos', 
        dropdown: [
            { name: 'Hilos Tensores', href: '/hilos-tensores', highlight: true },
            { name: 'Bioestimuladores', href: '/bioestimuladores' },
            { name: 'Botox Terapéutico', href: '/botox-terapeutico' },
            { name: 'Contorno Corporal', href: '/contorno-corporal' },
            { name: 'Medicina Preventiva', href: '/medicina-preventiva' },
        ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Sobre Mi', href: '/#sobre-el-doctor' },
    { name: 'Contacto', href: '#' },
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
    handleScroll(); // Set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);
  
  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = pathname === href;
    return (
      <Link href={href} className={cn("text-sm font-medium transition-colors hover:text-primary/80", isActive ? "text-primary font-semibold" : "text-foreground")}>
        {children}
      </Link>
    );
  };
  
  const NavDropdown = ({ name, items }: { name: string; items: { name: string; href: string, highlight?: boolean }[] }) => {
     const isActive = items.some(item => pathname.startsWith(item.href));
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className={cn("text-sm font-medium hover:text-primary/80 px-3 data-[state=open]:text-primary/80", isActive ? "text-primary font-semibold" : "text-foreground")}>
            {name} <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {items.map(item => (
            <DropdownMenuItem key={item.href} asChild>
              <Link href={item.href} className={cn(item.highlight && "font-bold text-primary/80")}>
                {item.highlight && <Award className="mr-2 h-4 w-4" />}
                {item.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };


  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 border-b border-primary/10',
        isScrolled
          ? 'bg-background/90 backdrop-blur-lg'
          : 'bg-background'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Logo />

        <nav className="hidden lg:flex items-center gap-2">
            <NavLink href="/">Inicio</NavLink>
            {navLinks.map(link => link.dropdown 
                ? <NavDropdown key={link.name} name={link.name} items={link.dropdown} />
                : <NavLink key={link.name} href={link.href || '#'}>{link.name}</NavLink>
            )}
        </nav>

        <div className="hidden lg:flex items-center space-x-1">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
             <a href="https://wa.me/573122784757" target="_blank" rel="noopener noreferrer">
                Agendar Cita
             </a>
          </Button>
        </div>

        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className={cn("hover:text-primary/80", 'text-foreground')}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm bg-background p-0 flex flex-col">
              <div className="flex justify-between items-center p-4 border-b">
                 <Logo />
                 <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Cerrar menú</span>
                 </Button>
              </div>

            <nav className="flex-1 p-6">
              <ul className="space-y-4">
                  <li>
                     <Link href="/" className="text-lg hover:text-primary/80 transition-colors block">Inicio</Link>
                  </li>
                {navLinks.map(link => (
                  <li key={link.name}>
                    {link.dropdown ? (
                       <div>
                        <h3 className="text-muted-foreground font-semibold mb-2">{link.name}</h3>
                        <ul className="pl-4 space-y-3 border-l">
                          {link.dropdown.map(item => (
                            <li key={item.href}>
                              <Link href={item.href} className={cn("hover:text-primary/80 transition-colors block", item.highlight && "font-bold text-primary/80 flex items-center")}>
                                {item.highlight && <Award className="mr-2 h-4 w-4" />}
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                       </div>
                    ) : (
                      <Link href={link.href || '#'} className="text-lg hover:text-primary/80 transition-colors block">{link.name}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

              <div className="p-6 border-t mt-auto">
                 <Button asChild className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                    <a href="https://wa.me/573122784757" target="_blank" rel="noopener noreferrer">
                        <WhatsAppIcon className="h-5 w-5 mr-2" /> Agendar Cita
                    </a>
                </Button>
              </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
