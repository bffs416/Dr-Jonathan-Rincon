'use client';

import { cn } from '@/lib/utils';

const Cube = ({ className }: { className?: string }) => (
  <svg
    className={cn('w-full h-full', className)}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="hsl(var(--primary) / 0.1)"
    strokeWidth="1"
  >
    <path d="M 50,0 L 100,25 V 75 L 50,100 L 0,75 V 25 Z" />
    <path d="M 50,50 L 100,25" />
    <path d="M 50,50 L 50,100" />
    <path d="M 50,50 L 0,25" />
    <path d="M 0,75 L 50,50" />
    <path d="M 100,75 L 50,50" />
  </svg>
);

export function GeometricBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute top-[-20%] left-[-20%] w-96 h-96 animate-float opacity-50">
        <Cube className="animate-rotate" />
      </div>
      <div className="absolute bottom-[-25%] right-[-15%] w-[40rem] h-[40rem] animate-float animation-delay-3000 opacity-30">
        <Cube className="animate-rotate" />
      </div>
       <div className="absolute top-[10%] right-[5%] w-48 h-48 animate-float animation-delay-6000 opacity-40">
        <Cube className="animate-rotate [animation-duration:30s]" />
      </div>
    </div>
  );
}
