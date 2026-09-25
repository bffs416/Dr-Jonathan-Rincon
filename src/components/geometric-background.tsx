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
      <div className="absolute bottom-[5%] left-[10%] w-32 h-32 animate-float animation-delay-1000 opacity-20">
        <Cube className="animate-rotate [animation-duration:40s]" />
      </div>
      <div className="absolute top-[40%] left-[30%] w-64 h-64 animate-float animation-delay-4000 opacity-10">
        <Cube className="animate-rotate [animation-duration:25s]" />
      </div>
       <div className="absolute bottom-[15%] right-[35%] w-24 h-24 animate-float animation-delay-8000 opacity-25">
        <Cube className="animate-rotate [animation-duration:35s]" />
      </div>
       <div className="absolute top-[5%] right-[40%] w-40 h-40 animate-float animation-delay-2000 opacity-15">
        <Cube className="animate-rotate [animation-duration:45s]" />
      </div>
    </div>
  );
}
