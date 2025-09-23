import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="flex items-center justify-center bg-muted/50 border border-dashed w-10 h-10 rounded-full text-muted-foreground text-xs text-center p-1">
        Pon tu logo
      </div>
      <span className="font-headline text-2xl font-bold text-primary">
        Dr. Jhonathan Rincón
      </span>
    </Link>
  );
}
