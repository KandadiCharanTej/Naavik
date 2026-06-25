'use client'

import { XCircle, CheckCircle2, MessageSquare, AlertCircle, Link2, Calendar } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

export function VisualComparison() {
  return (
    <section id="why-naavik" className="scroll-mt-20 border-t border-border py-20 sm:py-28 bg-[#FAFAFC]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="THE CONTRAST"
          title="Why we are building Naavik."
          description="Standard college life is scattered across a dozen apps. Naavik consolidates it all into a single, clean workspace."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Left: The Broken Present */}
          <Reveal delay={100} className="relative overflow-hidden rounded-3xl border border-red-100 bg-[#FFFDFD] p-8 sm:p-10 shadow-xs">
            <div className="flex items-center gap-2 text-red-600">
              <span className="text-xs font-bold uppercase tracking-wider">🔴 THE BROKEN PRESENT</span>
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
                  <p className="text-[11px] text-muted-foreground truncate">That important PDF from 4 days ago? Buried under 200 memes.</p>
                </div>
                <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full whitespace-nowrap">
                  99+ unread
                </span>
              </div>

              {/* Google Drive Link */}
              <div className="flex items-center gap-3.5 rounded-xl border border-red-50 bg-white p-3.5 shadow-[0_2px_8px_rgba(239,68,68,0.02)]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
                  <Link2 className="h-4 w-4" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <p className="text-xs font-bold text-foreground truncate">Google Drive Notes Link</p>
                  <p className="text-[11px] text-muted-foreground truncate">&quot;Access Denied.&quot; You find out the night before your final exam.</p>
                </div>
                <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full whitespace-nowrap">
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
                  <p className="text-[11px] text-muted-foreground truncate">Registration closed yesterday. Nobody posted it in your group.</p>
                </div>
                <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full whitespace-nowrap">
                  Missed
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right: The Naavik Way */}
          <Reveal delay={200} className="relative overflow-hidden rounded-3xl border border-primary/20 bg-white p-8 sm:p-10 shadow-sm">
            <div className="absolute top-0 right-0 h-40 w-40 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="flex items-center gap-2 text-emerald-600">
              <span className="text-xs font-bold uppercase tracking-wider">🟢 THE NAAVIK FUTURE</span>
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
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <p className="text-xs font-bold text-foreground">Study Vault</p>
                  <p className="text-[11px] text-muted-foreground">Exam papers, unit notes, and lab manuals sorted by semester & branch.</p>
                </div>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  Verified
                </span>
              </div>

              {/* Unified Events */}
              <div className="flex items-center gap-3.5 rounded-xl border border-primary/10 bg-primary/[0.02] p-3.5 shadow-[0_2px_8px_rgba(109,40,217,0.01)]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <p className="text-xs font-bold text-foreground">Filtered Feed</p>
                  <p className="text-[11px] text-muted-foreground">Only opportunities that match your year, branch, and interests.</p>
                </div>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  Zero Spam
                </span>
              </div>

              {/* Verified Workspace */}
              <div className="flex items-center gap-3.5 rounded-xl border border-primary/10 bg-primary/[0.02] p-3.5 shadow-[0_2px_8px_rgba(109,40,217,0.01)]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <p className="text-xs font-bold text-foreground">Cross-Campus Network</p>
                  <p className="text-[11px] text-muted-foreground">Connections and opportunities across colleges in Telangana & AP.</p>
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
