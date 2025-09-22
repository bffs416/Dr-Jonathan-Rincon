import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <span className="font-headline text-2xl font-bold text-primary">
        Rincón Estética
      </span>
    </Link>
  );
}
