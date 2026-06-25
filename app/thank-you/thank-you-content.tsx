'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense, useState } from 'react'
import { Check, Copy, ExternalLink, ShieldCheck, Share2, Compass, MessageSquare } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import { InstagramIcon } from '@/components/instagram-icon'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://naviko.app'
const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/'
const LINKEDIN_URL = 'https://linkedin.com/'

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function ThankYouInner() {
  const searchParams = useSearchParams()
  const position = searchParams.get('position')
  const [copied, setCopied] = useState(false)

  const shareText = `I just reserved early access to Naviko! It's one place for everything engineering students need — opportunities, notes, and projects. Join the waitlist here: ${SITE_URL}`
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SITE_URL)}`

  function copyLink() {
    navigator.clipboard?.writeText(SITE_URL)
    setCopied(true)
    toast.success('Link copied successfully.')
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAFAFC] px-5 py-16 relative overflow-hidden">
      {/* Background Accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 10%, rgba(109, 64, 246, 0.08), transparent 60%)',
        }}
      />

      <div className="w-full max-w-lg text-center flex flex-col items-center animate-fade-in">
        {/* Centered Logo */}
        <div className="mb-10">
          <Logo />
        </div>

        {/* Heading & Subtitle */}
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl leading-tight">
          🎉 You're on the Early Access List!
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground max-w-md">
          Thanks for joining Naviko. You're now one of the first students helping shape the future of Naviko. We'll email you as soon as Early Access opens.
        </p>

        {/* Live Waitlist Position Card (Only if available) */}
        {position && (
          <div className="mt-8 w-full max-w-sm rounded-2xl border border-primary/20 bg-primary/[0.02] p-5 shadow-xs relative overflow-hidden">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary">
              Early Access Position
            </span>
            <div className="mt-1 text-4xl font-black tracking-tight text-primary">
              #{position}
            </div>
          </div>
        )}

        {/* What happens next Card */}
        <div className="mt-8 w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-xs text-left">
          <h3 className="text-sm font-bold text-foreground mb-4">What happens next?</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5 text-xs text-muted-foreground">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span>Your signup has been confirmed.</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs text-muted-foreground">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span>We'll email you when Early Access is ready.</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs text-muted-foreground">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span>We'll occasionally share important updates.</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs text-muted-foreground">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span>No spam. You can unsubscribe anytime.</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons Section */}
        <div className="mt-8 w-full max-w-md flex flex-col gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex h-11 items-center justify-center rounded-lg bg-primary font-bold text-sm text-white hover:bg-primary/95 transition-colors cursor-pointer shadow-xs gap-2"
          >
            <InstagramIcon className="h-4.5 w-4.5" />
            Follow Naavik on Instagram
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex h-11 items-center justify-center rounded-lg border border-border bg-white font-bold text-sm text-foreground hover:bg-muted/50 transition-colors cursor-pointer shadow-2xs gap-2"
          >
            <LinkedInIcon className="h-4.5 w-4.5" />
            Connect on LinkedIn
          </a>

          <button
            onClick={copyLink}
            className="w-full inline-flex h-11 items-center justify-center rounded-lg border border-border bg-white font-bold text-sm text-foreground hover:bg-muted/50 transition-colors cursor-pointer shadow-2xs gap-2"
          >
            <Copy className="h-4 w-4" />
            {copied ? 'Link copied successfully.' : 'Copy Website Link'}
          </button>
        </div>

        {/* Help another student discover Naavik sharing widget */}
        <div className="mt-10 pt-8 border-t border-border w-full max-w-md">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
            Help another student discover Naavik
          </p>
          <div className="grid grid-cols-3 gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-lg border border-border bg-white text-xs font-semibold hover:bg-muted/50 transition-colors gap-1.5 cursor-pointer"
            >
              <MessageSquare className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={linkedinShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-lg border border-border bg-white text-xs font-semibold hover:bg-muted/50 transition-colors gap-1.5 cursor-pointer"
            >
              <Share2 className="h-4 w-4" />
              LinkedIn
            </a>
            <button
              onClick={copyLink}
              className="inline-flex h-10 items-center justify-center rounded-lg border border-border bg-white text-xs font-semibold hover:bg-muted/50 transition-colors gap-1.5 cursor-pointer"
            >
              <Copy className="h-4 w-4" />
              Copy Link
            </button>
          </div>
        </div>

        {/* Premium footer details */}
        <footer className="mt-16 text-[10px] font-semibold text-muted-foreground/60 space-y-1">
          <p>Built by engineering students.</p>
          <p>Focused on Telangana & Andhra Pradesh.</p>
          <p>Always free for students · Privacy first.</p>
        </footer>
      </div>
    </div>
  )
}

export function ThankYouContent() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#FAFAFC]">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      }
    >
      <ThankYouInner />
    </Suspense>
  )
}
