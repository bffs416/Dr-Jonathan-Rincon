'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function Logo() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Link href="/" className="flex items-center space-x-3">
      <div className="relative">
        <Image
          src="/images/Logo Dr Jhonathan.png"
          alt="Logo Dr. Jhonathan Rincón"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full" />
      </div>
      <div className="flex flex-col">
        <span
          className={cn(
            'font-headline font-bold text-xl leading-tight',
            'text-foreground'
          )}
        >
          Dr. Jhonathan Rincón
        </span>
        <span
          className={cn(
            'text-sm leading-tight',
            'text-muted-foreground'
          )}
        >
          Medicina Estética
        </span>
      </div>
    </Link>
  );
}
