import { cn } from '@/lib/utils'

/* ═══════════════════════════════════════════════════════════════
   NAAVIK — Premium landing design system
   ═══════════════════════════════════════════════════════════════ */

export function PageContainer({
  children,
  className,
  size = 'default',
}: {
  children: React.ReactNode
  className?: string
  size?: 'default' | 'narrow' | 'wide' | 'full'
}) {
  const sizes = {
    narrow: 'max-w-[720px]',
    default: 'max-w-[1140px]',
    wide: 'max-w-[1280px]',
    full: 'max-w-[1400px]',
  }
  return (
    <div className={cn('mx-auto w-full px-5 sm:px-6 lg:px-8', sizes[size], className)}>
      {children}
    </div>
  )
}

export function Section({
  children,
  className,
  id,
  surface = 'white',
  pad = 'default',
}: {
  children: React.ReactNode
  className?: string
  id?: string
  surface?: 'white' | 'subtle' | 'purple' | 'dark' | 'ink'
  pad?: 'default' | 'hero' | 'compact' | 'none'
}) {
  const surfaces = {
    white: 'bg-white text-foreground',
    subtle: 'bg-[#F8F8FA] text-foreground',
    purple: 'bg-[linear-gradient(180deg,#FAFAFF_0%,#FFFFFF_100%)] text-foreground',
    dark: 'bg-[#08080A] text-white',
    ink: 'bg-[#06060A] text-white',
  }
  const pads = {
    none: '',
    compact: 'py-14 lg:py-20',
    default: 'py-16 lg:py-24',
    hero: 'pt-0 pb-16 lg:pb-24',
  }
  return (
    <section id={id} className={cn('relative overflow-hidden', surfaces[surface], pads[pad], className)}>
      {children}
    </section>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = 'left',
  dark = false,
  className,
}: {
  eyebrow?: React.ReactNode
  title: React.ReactNode
  lead?: React.ReactNode
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
}) {
  return (
    <header
      className={cn(
        align === 'center' && 'mx-auto max-w-3xl text-center',
        className,
      )}
    >
      {eyebrow && <div className="mb-4">{eyebrow}</div>}
      <h2
        className={cn(
          'text-[1.75rem] font-extrabold tracking-[-0.035em] text-balance sm:text-[2.25rem] lg:text-[2.75rem] lg:leading-[1.08]',
          dark ? 'text-white' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            'mt-4 text-[16px] font-medium leading-relaxed sm:text-[17px] lg:max-w-2xl lg:text-[18px]',
            dark ? 'text-gray-400' : 'text-gray-500',
            align === 'center' && 'mx-auto',
          )}
        >
          {lead}
        </p>
      )}
    </header>
  )
}

export function Eyebrow({
  children,
  className,
  tone = 'neutral',
}: {
  children: React.ReactNode
  className?: string
  tone?: 'neutral' | 'purple' | 'orange' | 'dark'
}) {
  const tones = {
    neutral: 'border-gray-200/80 bg-white text-gray-500',
    purple: 'border-[var(--purple-200)] bg-[var(--purple-50)] text-[var(--purple-700)]',
    orange: 'border-orange-200/80 bg-orange-50 text-orange-600',
    dark: 'border-white/10 bg-white/5 text-gray-400',
  }
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] sm:text-[11px]',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}

export function PrimaryButton({
  children,
  className,
  href,
  onClick,
  id,
}: {
  children: React.ReactNode
  className?: string
  href?: string
  onClick?: () => void
  id?: string
}) {
  const cls = cn(
    'naavik-btn naavik-btn-primary',
    className,
  )
  if (href) {
    return (
      <a href={href} id={id} className={cls}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" id={id} onClick={onClick} className={cls}>
      {children}
    </button>
  )
}

export function SecondaryButton({
  children,
  className,
  href,
  id,
}: {
  children: React.ReactNode
  className?: string
  href: string
  id?: string
}) {
  return (
    <a href={href} id={id} className={cn('naavik-btn naavik-btn-secondary', className)}>
      {children}
    </a>
  )
}

export function Card({
  children,
  className,
  hover = false,
  variant = 'default',
}: {
  children: React.ReactNode
  className?: string
  hover?: boolean
  variant?: 'default' | 'elevated' | 'glass' | 'dark' | 'ghost'
}) {
  const variants = {
    default: 'naavik-card',
    elevated: 'naavik-card naavik-card-elevated',
    glass: 'naavik-card naavik-card-glass',
    dark: 'naavik-card-dark',
    ghost: 'rounded-2xl border border-gray-200/60 bg-transparent',
  }
  return (
    <div className={cn(variants[variant], hover && 'naavik-card-hover', className)}>
      {children}
    </div>
  )
}

export function MeshGradient({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      <div className="absolute -right-[20%] top-[-30%] h-[70%] w-[60%] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.12)_0%,transparent_70%)]" />
      <div className="absolute -left-[10%] bottom-[-20%] h-[50%] w-[40%] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.08)_0%,transparent_70%)]" />
    </div>
  )
}

export function GridLines({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 opacity-[0.4]', className)}
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)',
      }}
    />
  )
}

export function Divider({ className }: { className?: string }) {
  return <div className={cn('h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent', className)} />
}

export function SectionBleed({
  children,
  className,
  direction = 'both',
}: {
  children: React.ReactNode
  className?: string
  direction?: 'up' | 'down' | 'both'
}) {
  return (
    <div
      className={cn(
        'relative',
        direction === 'up' && '-mt-16 lg:-mt-24',
        direction === 'down' && '-mb-16 lg:-mb-24',
        direction === 'both' && '-my-16 lg:-my-24',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function AmbientGlow({
  className,
  color = 'purple',
  position = 'top',
}: {
  className?: string
  color?: 'purple' | 'white' | 'orange'
  position?: 'top' | 'center' | 'bottom'
}) {
  const colors = {
    purple: 'rgba(124,58,237,0.22)',
    white: 'rgba(255,255,255,0.06)',
    orange: 'rgba(251,146,60,0.12)',
  }
  const positions = {
    top: 'top-[-20%]',
    center: 'top-1/2 -translate-y-1/2',
    bottom: 'bottom-[-20%]',
  }
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute left-1/2 h-[60%] w-[120%] -translate-x-1/2 rounded-full blur-3xl',
        positions[position],
        className,
      )}
      style={{ background: `radial-gradient(circle, ${colors[color]} 0%, transparent 70%)` }}
    />
  )
}

export function BentoGrid({
  children,
  className,
  cols = 12,
}: {
  children: React.ReactNode
  className?: string
  cols?: 6 | 12
}) {
  return (
    <div
      className={cn(
        'grid gap-3 sm:gap-4',
        cols === 12 && 'grid-cols-1 sm:grid-cols-6 lg:grid-cols-12',
        cols === 6 && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-6',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function BentoCell({
  children,
  className,
  span = '1',
  rowSpan,
}: {
  children: React.ReactNode
  className?: string
  span?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | 'full'
  rowSpan?: '1' | '2'
}) {
  const spans: Record<string, string> = {
    '1': 'lg:col-span-3',
    '2': 'lg:col-span-4',
    '3': 'lg:col-span-6',
    '4': 'lg:col-span-8',
    '5': 'lg:col-span-5',
    '6': 'lg:col-span-6',
    '7': 'lg:col-span-7',
    '8': 'lg:col-span-8',
    full: 'lg:col-span-12',
  }
  return (
    <div
      className={cn(
        'col-span-1 sm:col-span-3',
        spans[span],
        rowSpan === '2' && 'lg:row-span-2',
        className,
      )}
    >
      {children}
    </div>
  )
}
