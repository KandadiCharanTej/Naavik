import { Reveal } from '@/components/animations/reveal'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'center' | 'left'
  className?: string
}) {
  return (
    <Reveal
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/5 px-2.5 py-1 rounded-full">{eyebrow}</span>
      )}
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-[2.5rem] leading-[1.15] text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </Reveal>
  )
}
