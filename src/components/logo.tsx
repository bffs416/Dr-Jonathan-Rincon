import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getPlaceholderImage = (id: string) => {
  return PlaceHolderImages.find(img => img.id === id);
};

export function Logo() {
  const logoImage = getPlaceholderImage('logo');

  return (
    <Link href="/" className="flex items-center space-x-2">
      {logoImage ? (
        <Image
          src={logoImage.imageUrl}
          alt={logoImage.description}
          data-ai-hint={logoImage.imageHint}
          width={150}
          height={40}
          className="h-10 w-auto"
        />
      ) : (
        <span className="font-headline text-2xl font-bold text-primary">
          Dr. Jhonathan Rincón
        </span>
      )}
    </Link>
  );
}

    