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
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/images/Logo Dr Jhonathan.png"
        alt="Logo Dr. Jhonathan Rincón"
        width={40}
        height={40}
        className="rounded-full"
      />
    </Link>
  );
}
