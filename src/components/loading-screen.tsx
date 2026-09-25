'use client';

import { Logo } from './logo';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 300); // Reduced delay for faster FCP

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500',
        isExiting ? 'animate-fade-out' : 'opacity-100'
      )}
    >
      <div className="animate-pulse-fade-in">
        <Logo />
      </div>
    </div>
  );
}
