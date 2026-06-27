'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

type WaitlistModalPortalProps = {
  open: boolean
  onClose: () => void
  children: ReactNode
  className?: string
  preventClose?: boolean
}

export function WaitlistModalPortal({
  open,
  onClose,
  children,
  className,
  preventClose = false,
}: WaitlistModalPortalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !preventClose) {
        onClose()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose, preventClose])

  if (!mounted || !open) return null

  return createPortal(
    <>
      <div
        aria-hidden
        className="fixed inset-0 z-[200] bg-[rgba(0,0,0,0.45)] backdrop-blur-[8px] max-md:animate-in max-md:fade-in-0 max-md:duration-300"
        onClick={() => {
          if (!preventClose) onClose()
        }}
      />
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          'fixed z-[201] flex flex-col overflow-hidden bg-white outline-none',
          'top-1/2 left-1/2 max-h-[90dvh] w-[95vw] -translate-x-1/2 -translate-y-1/2',
          'max-md:inset-x-0 max-md:bottom-0 max-md:top-auto max-md:h-[100dvh] max-md:max-h-[100dvh] max-md:w-full max-md:translate-x-0 max-md:translate-y-0',
          'max-md:animate-in max-md:slide-in-from-bottom max-md:duration-300 max-md:ease-out',
          className,
        )}
        onClick={(event) => event.stopPropagation()}
      >
        {!preventClose ? (
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 z-10 hidden h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 md:flex"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        ) : null}
        {children}
      </div>
    </>,
    document.body,
  )
}
