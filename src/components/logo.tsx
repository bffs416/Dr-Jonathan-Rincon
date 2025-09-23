import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/images/Logo Dr Jhonathan.png"
        alt="Logo Dr. Jhonathan Rincón"
        width={40}
        height={40}
        className="rounded-full"
      />
      <span className="font-headline text-2xl font-bold text-primary">
        Dr. Jhonathan Rincón
      </span>
    </Link>
  );
}
