import Image from 'next/image';
import { cn } from '@/lib/utils';

type SectionArchProps = {
  imageUrl: string;
  alt: string;
  className?: string;
  'data-ai-hint'?: string;
};

export function SectionArch({ imageUrl, alt, className, 'data-ai-hint': dataAiHint }: SectionArchProps) {
  return (
    <div className={cn("arch-container shadow-lg", className)}>
      <Image
        src={imageUrl}
        alt={alt}
        width={250}
        height={125}
        className="arch-image"
        data-ai-hint={dataAiHint}
      />
    </div>
  );
}
