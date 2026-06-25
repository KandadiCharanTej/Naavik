'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useWaitlist } from '@/components/waitlist-provider'
import { ADMIN_FORM_URL } from '@/lib/constants'
import { trackAdminButtonClick } from '@/lib/analytics'
import { cn } from '@/lib/utils'

export function WaitlistButton({
  className,
  size,
  id = 'waitlist-cta-btn',
  children = 'Join Early Access',
}: {
  className?: string
  size?: 'sm' | 'default' | 'lg'
  id?: string
  children?: React.ReactNode
}) {
  const { open } = useWaitlist()
  return (
    <Button
      size={size}
      onClick={open}
      className={cn('group', className)}
      id={id}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Button>
  )
}

export function AdminButton({
  className,
  size,
  id = 'admin-cta-btn',
  children = 'Become a College Admin',
}: {
  className?: string
  size?: 'sm' | 'default' | 'lg'
  id?: string
  children?: React.ReactNode
}) {
  return (
    <Button
      nativeButton={false}
      render={
        <a
          href={ADMIN_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackAdminButtonClick}
        />
      }
      variant="outline"
      size={size}
      className={className}
      id={id}
    >
      {children}
    </Button>
  )
}
