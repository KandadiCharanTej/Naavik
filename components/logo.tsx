import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * Naavik wordmark.
 * - Renders the exact uploaded brand logo asset images.
 */
export function Logo({
  className,
  showWordmark = true,
  theme = 'light',
}: {
  className?: string
  showWordmark?: boolean
  theme?: 'light' | 'dark'
}) {
  if (!showWordmark) {
    return <NavMark className={className} />
  }

  // Use the exact uploaded logo images:
  // On light backgrounds, we use the dark text version (/logos/naviko-dark.png).
  // On dark backgrounds, we use the light text version (/logos/naviko-light.png).
  const logoSrc = theme === 'light' ? '/logos/naviko-dark.png' : '/logos/naviko-light.png'

  return (
    <Image
      src={logoSrc}
      alt="Naavik"
      width={180}
      height={68}
      priority
      className={cn('h-17 w-auto object-contain shrink-0', className)}
    />
  )
}

/**
 * The standalone "N + arrow" mark used for the favicon / icon lockups.
 */
export function NavMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="8 7 26 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-7 w-7 shrink-0', className)}
      aria-hidden="true"
    >
      <path d="M 10 32 V 12 H 14 L 23 26 V 12 H 27 V 32 H 23 L 14 18 V 32 H 10 Z" fill="currentColor" />
      <path d="M 23 18 L 29 12 H 25 V 9 H 32 V 16 H 29 V 12 Z" fill="#5B4CFF" />
    </svg>
  )
}
