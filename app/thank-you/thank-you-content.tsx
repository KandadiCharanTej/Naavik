'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { Suspense, useEffect } from 'react'
import {
  Check,
  Copy,
  ExternalLink,
  Hash,
} from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import { InstagramIcon } from '@/components/instagram-icon'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://naviko.app'
const INSTAGRAM_URL =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/naviko.app'

function ThankYouInner() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const position = searchParams.get('position')
  const name = searchParams.get('name') || 'there'

  useEffect(() => {
    if (!position) {
      router.replace('/')
    }
  }, [position, router])

  if (!position) {
    return null
  }

  const shareText = `I just joined the Naviko early access waitlist (#${position})! It's a student ecosystem being built for engineering students in Telangana & AP. Join too: ${SITE_URL}`

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`

  function copyLink() {
    navigator.clipboard?.writeText(SITE_URL)
    toast.success('Link copied!')
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-5 py-16">
      {/* Background accent */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 30%, oklch(0.54 0.24 293 / 0.08), transparent 55%)',
        }}
      />

      <div className="w-full max-w-md text-center">
        {/* Logo */}
        <a href="/" className="inline-flex items-center" aria-label="Back to home">
          <Logo />
        </a>

        {/* Success icon */}
        <div className="mx-auto mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-primary/12 text-primary">
          <Check className="h-8 w-8" strokeWidth={2.5} />
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
          You&apos;re in, {name}!
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground text-pretty">
          Thank you for joining the Naviko early access list. We&apos;ll email
          you as soon as there&apos;s something to try.
        </p>

        {/* Position badge */}
        <div className="mx-auto mt-8 inline-flex items-center gap-2 rounded-2xl border border-primary/30 bg-primary/[0.06] px-6 py-4">
          <Hash className="h-5 w-5 text-primary" />
          <span className="text-sm text-muted-foreground">Your waitlist position</span>
          <span className="text-3xl font-bold tracking-tight text-primary">
            {position}
          </span>
        </div>

        {/* Action buttons */}
        <div className="mt-8 flex flex-col gap-3">
          <Button
            size="lg"
            className="w-full bg-[#25D366] text-white hover:bg-[#20bd5a]"
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Share on WhatsApp
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full"
            onClick={copyLink}
          >
            <Copy className="h-4 w-4" />
            Copy Link
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full"
            onClick={() => window.open(INSTAGRAM_URL, '_blank')}
          >
            <InstagramIcon className="h-4 w-4" />
            Follow on Instagram
            <ExternalLink className="h-3 w-3 opacity-50" />
          </Button>
        </div>

        {/* Back home */}
        <a
          href="/"
          className="mt-8 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to home
        </a>
      </div>
    </div>
  )
}

/** Wrap in Suspense for useSearchParams */
export function ThankYouContent() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      }
    >
      <ThankYouInner />
    </Suspense>
  )
}
