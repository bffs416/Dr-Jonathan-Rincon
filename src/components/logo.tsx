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
      <div className="relative flex items-center justify-center w-[50px] h-[50px]">
        <div className="absolute inset-0 bg-primary rounded-full" />
        <Image
          src="/images/Logo Dr Johnathan.png"
          alt="Logo Dr. Jonathan Rincón"
          width={50}
          height={50}
          className="rounded-full relative z-10"
        />
      </div>
      <div className="flex flex-col">
        <span
          className={cn(
            'font-headline font-bold text-xl leading-tight',
            'text-foreground'
          )}
        >
          Dr. Jonathan Rincón
        </span>
        <span
          className={cn(
            'text-sm leading-tight',
            'text-primary'
          )}
        >
          Medicina Estética
        </span>
      </div>
    </Link>
  );
}
