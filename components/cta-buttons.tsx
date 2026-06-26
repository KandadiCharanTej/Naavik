'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useWaitlist } from '@/components/waitlist-provider'
import { ADMIN_FORM_URL } from '@/lib/constants'
import { trackAdminButtonClick } from '@/lib/analytics'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { premiumEasing } from '@/components/reveal'

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
    <motion.div
      whileHover={{ scale: 1.03, y: -1, boxShadow: "0 10px 20px rgba(124, 58, 237, 0.15)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: premiumEasing }}
      className={cn('inline-flex', className?.includes('w-full') ? 'w-full' : '')}
    >
      <Button
        size={size}
        onClick={open}
        className={cn('group w-full', className)}
        id={id}
      >
        {children}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Button>
    </motion.div>
  )
}

export function AdminButton({
  className,
  size,
  id = 'admin-cta-btn',
  children = 'Become a College Admin',
  variant = 'outline',
}: {
  className?: string
  size?: 'sm' | 'default' | 'lg'
  id?: string
  children?: React.ReactNode
  variant?: 'default' | 'outline' | 'secondary' | 'ghost'
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -1, boxShadow: "0 10px 20px rgba(17, 24, 39, 0.08)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: premiumEasing }}
      className="inline-flex"
    >
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
        variant={variant}
        size={size}
        className={className}
        id={id}
      >
        {children}
      </Button>
    </motion.div>
  )
}
