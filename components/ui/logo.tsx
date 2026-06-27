import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  theme = 'light',
}: {
  className?: string
  theme?: 'light' | 'dark'
}) {
  const logoSrc = theme === 'dark' ? '/light-logo.png' : '/dark-logo.png'

  return (
    <div className={cn("flex items-center gap-2.5 transition-transform duration-300 hover:scale-[1.02]", className)}>
      <Image
        src={logoSrc}
        alt="Naavik Logo"
        width={400}
        height={120}
        priority
        className="h-16 md:h-20 lg:h-24 w-auto object-contain shrink-0"
      />
    </div>
  )
}
