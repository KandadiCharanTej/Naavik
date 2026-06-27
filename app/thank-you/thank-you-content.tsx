'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense, useState } from 'react'
import { CheckCircle2, Copy, Send, BellRing, Mail, ShieldCheck, ArrowLeft } from 'lucide-react'
import { toast } from 'sonner'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { InstagramIcon } from '@/components/instagram-icon'
import { motion } from 'framer-motion'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://naavik.in'
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

  function copyLink() {
    navigator.clipboard?.writeText(SITE_URL)
    setCopied(true)
    toast.success('Link copied successfully.')
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-start md:justify-center bg-[#FAFAFC] relative overflow-hidden">
      {/* Background Accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 0%, rgba(109, 64, 246, 0.08), transparent 70%)',
        }}
      />

      {/* Top Navigation */}
      <div className="w-full absolute top-0 left-0 p-4 md:p-6 flex justify-between items-center z-10">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Naavik
        </Link>
      </div>

      <div className="w-full max-w-[680px] px-5 py-24 md:py-16 text-center flex flex-col items-center animate-fade-in mx-auto">
        
        {/* Header (Logo + Illustration) */}
        <div className="mb-1 flex flex-col items-center">
          <Logo />
        </div>

        {/* Heading & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-[28px] md:text-[36px] font-extrabold tracking-tight text-foreground leading-tight">
            You're officially on the list!
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground max-w-[460px]">
            Thanks for joining Naavik. You're now one of the first students helping shape our future. We'll email you as soon as Early Access opens.
          </p>
        </motion.div>

        {/* Live Waitlist Position Card (Only if available) */}
        {position && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 w-full max-w-[460px] rounded-[20px] border border-primary/20 bg-white/60 backdrop-blur-md p-6 shadow-[0_8px_30px_rgba(109,64,246,0.12)] relative overflow-hidden group"
          >
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-primary mb-2 block">
                Your Early Access Position
              </span>
              <div className="text-[48px] md:text-[56px] font-black tracking-tight text-foreground leading-none mb-1">
                #{position}
              </div>
              <p className="text-[13px] text-muted-foreground font-medium mt-2">
                You're among the first students helping build Naavik.
              </p>
            </div>
          </motion.div>
        )}

        {/* What happens next Card */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 w-full max-w-[460px] rounded-[16px] border border-border bg-white shadow-sm overflow-hidden"
        >
          <div className="p-5 flex flex-col gap-4 text-left">
            <h3 className="text-[13px] font-bold text-muted-foreground uppercase tracking-wider ml-1">What happens next</h3>
            
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-foreground">Signup confirmed</h4>
                  <p className="text-[13px] text-muted-foreground mt-0.5">You're officially on the list.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 mt-0.5">
                  <Mail className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-foreground">Launch updates</h4>
                  <p className="text-[13px] text-muted-foreground mt-0.5">We'll email you when Early Access opens.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center shrink-0 border border-purple-100 mt-0.5">
                  <BellRing className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-foreground">Campus notification</h4>
                  <p className="text-[13px] text-muted-foreground mt-0.5">You'll know exactly when your college is live.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-200 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-gray-500" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-foreground">No spam</h4>
                  <p className="text-[13px] text-muted-foreground mt-0.5">Only important updates. Unsubscribe anytime.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons Section */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10 w-full max-w-[460px] flex flex-col sm:flex-row gap-3"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex h-11 items-center justify-center rounded-[12px] bg-foreground font-bold text-[14px] text-background hover:bg-foreground/90 transition-colors shadow-sm gap-2"
          >
            <InstagramIcon className="h-4.5 w-4.5" />
            Instagram
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex h-11 items-center justify-center rounded-[12px] border border-border bg-white font-bold text-[14px] text-foreground hover:bg-gray-50 transition-colors shadow-sm gap-2"
          >
            <LinkedInIcon className="h-4.5 w-4.5" />
            LinkedIn
          </a>

          <button
            onClick={copyLink}
            className="flex-1 inline-flex h-11 items-center justify-center rounded-[12px] border border-border bg-white font-bold text-[14px] text-foreground hover:bg-gray-50 transition-colors shadow-sm gap-2"
          >
            <Copy className="h-4 w-4" />
            {copied ? 'Copied!' : 'Copy Link'}
          </button>
        </motion.div>

        {/* Contact Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-12 text-center pb-8"
        >
          <p className="text-[13px] font-medium text-muted-foreground">
            Questions? <a href="mailto:hello@naavik.in" className="text-foreground font-bold hover:underline">hello@naavik.in</a>
          </p>
        </motion.div>
        
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
