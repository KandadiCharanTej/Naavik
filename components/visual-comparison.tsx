'use client'

import { XCircle, CheckCircle2, MessageSquare, AlertCircle, Link2, Calendar } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

export function VisualComparison() {
  return (
    <section id="why-naviko" className="scroll-mt-20 border-t border-border py-20 sm:py-28 bg-[#FAFAFC]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="The Contrast"
          title={
            <>
              Why we are building{' '}
              <span className="text-primary">Naviko.</span>
            </>
          }
          description="Standard college life is scattered across a dozen apps. Naviko consolidates it all into a single, clean workspace."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Left: The Broken Present */}
          <Reveal delay={100} className="relative overflow-hidden rounded-3xl border border-red-100 bg-[#FFFDFD] p-8 sm:p-10 shadow-xs">
            <div className="flex items-center gap-2 text-red-600">
              <XCircle className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wider">The Broken Present</span>
            </div>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground">
              A disorganized maze of feeds
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Updates are buried, resources are lost, and opportunities are missed.
            </p>

            <div className="mt-8 space-y-3.5">
              {/* WhatsApp Card */}
              <div className="flex items-center gap-3.5 rounded-xl border border-red-50 bg-white p-3.5 shadow-[0_2px_8px_rgba(239,68,68,0.02)]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <p className="text-xs font-bold text-foreground truncate">WhatsApp Group (Sec B)</p>
                  <p className="text-[11px] text-muted-foreground truncate">Important PDF sent 4 days ago is buried in class banter.</p>
                </div>
                <span className="text-[10px] font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full whitespace-nowrap">
                  99+ messages
                </span>
              </div>

              {/* Google Drive Link */}
              <div className="flex items-center gap-3.5 rounded-xl border border-red-50 bg-white p-3.5 shadow-[0_2px_8px_rgba(239,68,68,0.02)]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
                  <Link2 className="h-4 w-4" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <p className="text-xs font-bold text-foreground truncate">Google Drive Notes Link</p>
                  <p className="text-[11px] text-muted-foreground truncate">Permission denied. You get blocked the night before finals.</p>
                </div>
                <span className="text-[10px] font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full whitespace-nowrap">
                  Access Denied
                </span>
              </div>

              {/* Missed Event */}
              <div className="flex items-center gap-3.5 rounded-xl border border-red-50 bg-white p-3.5 shadow-[0_2px_8px_rgba(239,68,68,0.02)]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
                  <Calendar className="h-4 w-4" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <p className="text-xs font-bold text-foreground truncate">National Hackathon Registry</p>
                  <p className="text-[11px] text-muted-foreground truncate">Closed yesterday. No one posted it in your class group.</p>
                </div>
                <span className="text-[10px] font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full whitespace-nowrap">
                  Missed Registry
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right: The Naviko Way */}
          <Reveal delay={200} className="relative overflow-hidden rounded-3xl border border-primary/20 bg-white p-8 sm:p-10 shadow-sm">
            <div className="absolute top-0 right-0 h-40 w-40 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="flex items-center gap-2 text-primary">
              <CheckCircle2 className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wider">The Naviko Future</span>
            </div>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground">
              A focused, structured workspace
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Everything in one curated space designed specifically for your branch.
            </p>

            <div className="mt-8 space-y-3.5">
              {/* Unified Vault */}
              <div className="flex items-center gap-3.5 rounded-xl border border-primary/10 bg-primary/[0.02] p-3.5 shadow-[0_2px_8px_rgba(109,40,217,0.01)]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <p className="text-xs font-bold text-foreground">Study Vault</p>
                  <p className="text-[11px] text-muted-foreground">Exam papers, unit notes, and lab manuals sorted by semester & branch.</p>
                </div>
                <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  Verified Notes
                </span>
              </div>

              {/* Unified Events */}
              <div className="flex items-center gap-3.5 rounded-xl border border-primary/10 bg-primary/[0.02] p-3.5 shadow-[0_2px_8px_rgba(109,40,217,0.01)]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <p className="text-xs font-bold text-foreground">Filtered Feed</p>
                  <p className="text-[11px] text-muted-foreground">Only opportunities that match your specific year, branch, and interests.</p>
                </div>
                <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  Zero Spam
                </span>
              </div>

              {/* Verified Workspace */}
              <div className="flex items-center gap-3.5 rounded-xl border border-primary/10 bg-primary/[0.02] p-3.5 shadow-[0_2px_8px_rgba(109,40,217,0.01)]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <p className="text-xs font-bold text-foreground">Global Student network</p>
                  <p className="text-[11px] text-muted-foreground">Opportunities and connections spanning colleges across Telangana & AP.</p>
                </div>
                <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  Statewide
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
