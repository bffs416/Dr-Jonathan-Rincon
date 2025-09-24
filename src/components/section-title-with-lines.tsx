import { cn } from '@/lib/utils';

type SectionTitleWithLinesProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionTitleWithLines({
  children,
  className,
}: SectionTitleWithLinesProps) {
  return (
    <div className={cn('flex items-center gap-4 text-center', className)}>
      <div className="flex-1 border-t border-border" />
      <div className="flex-shrink-0 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        {children}
      </div>
      <div className="flex-1 border-t border-border" />
    </div>
  );
}
