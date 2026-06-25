'use client'

import { useState } from 'react'
import { MessageSquare, Link2, Briefcase, FileCode2, BookOpen, AlertCircle, ArrowRight, Zap, Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const scatteredApps = [
  { name: 'WhatsApp Groups', detail: 'Class updates & links', icon: MessageSquare, color: 'text-emerald-500 border-emerald-100 bg-emerald-50/50', pos: 'top-2 left-4 sm:left-12' },
  { name: 'Google Drive', detail: 'Syllabus & lecture notes', icon: Link2, color: 'text-blue-500 border-blue-100 bg-blue-50/50', pos: 'top-10 right-4 sm:right-16' },
  { name: 'LinkedIn / Unstop', detail: 'Jobs, internships & fests', icon: Briefcase, color: 'text-indigo-500 border-indigo-100 bg-indigo-50/50', pos: 'bottom-20 left-2 sm:left-8' },
  { name: 'GitHub', detail: 'Project source codes', icon: FileCode2, color: 'text-zinc-600 border-zinc-200 bg-zinc-50/50', pos: 'bottom-8 right-6 sm:right-20' },
  { name: 'College ERP Portal', detail: 'Grades & attendance keys', icon: BookOpen, color: 'text-amber-500 border-amber-100 bg-amber-50/50', pos: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' },
]

export function StudentReality() {
  const [isUnified, setIsUnified] = useState(false)

  return (
    <section id="reality" className="scroll-mt-20 py-16 sm:py-28 lg:py-36 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(109,40,217,0.015),transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6">
        
        {/* Keynote Header - 40px */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/5 px-2.5 py-1 rounded-full">
            The Student Reality
          </span>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem]">
            College is chaotic.{' '}
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Your tools shouldn&apos;t be.
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Every day, engineering students waste hours jumping between fragmented platforms. Watch what happens when they unify.
          </p>
        </div>

        {/* Interactive Sandbox Container - Cleaned up borders */}
        <div className="mt-16 bg-[#FAFAFC] border border-border/80 rounded-3xl p-6 sm:p-12 relative min-h-[480px] flex flex-col justify-between shadow-xs">
          
          {/* Action Trigger Banner */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-border/50 pb-6 mb-8">
            <div className="text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">Interactive Reality Demo</span>
              <p className="text-sm text-foreground font-bold mt-1">See how Naavik OS consolidates the student workspace.</p>
            </div>
            <button
              onClick={() => setIsUnified(!isUnified)}
              className="flex items-center gap-2 rounded-full bg-primary text-white font-bold text-xs px-5 py-3 shadow-md hover:bg-primary/95 transition-all duration-200 cursor-pointer active:scale-95"
            >
              <Zap className="h-3.5 w-3.5" />
              {isUnified ? 'Separate Into Apps' : 'Unify Into Naavik'}
            </button>
          </div>

          {/* Interactive Screen Canvas */}
          <div className="relative flex-1 flex flex-col lg:flex-row items-center justify-center gap-12 min-h-[300px]">
            
            {/* Chaotic Scattered Screen */}
            <div className={`w-full lg:w-1/2 relative min-h-[260px] transition-all duration-500 ${isUnified ? 'opacity-20 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
              <p className="absolute -top-6 left-0 text-[10px] font-bold uppercase tracking-wider text-red-500 flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" /> Scattered Present
              </p>
              
              {scatteredApps.map((app) => (
                <div
                  key={app.name}
                  className={`absolute p-3 rounded-xl border bg-white shadow-xs flex items-center gap-2.5 max-w-[200px] sm:max-w-[240px] transition-all duration-500 ${app.pos} ${
                    isUnified ? 'scale-0 opacity-0' : 'scale-100 opacity-100 hover:border-red-200'
                  }`}
                >
                  <div className={`h-8 w-8 rounded-lg flex items-center justify-center border ${app.color}`}>
                    <app.icon className="h-4 w-4" />
                  </div>
                  <div className="text-left min-w-0">
                    <p className="text-xs font-bold text-foreground truncate">{app.name}</p>
                    <p className="text-[9px] text-muted-foreground truncate">{app.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Connecting Visual Element */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-border shadow-xs">
                <ArrowRight className={`h-5 w-5 text-muted-foreground transition-transform duration-500 ${isUnified ? 'rotate-0 text-primary' : 'rotate-0'}`} />
              </div>
            </div>

            {/* Naavik Unified Space Screen */}
            <div className={`w-full lg:w-1/2 relative transition-all duration-500 ${isUnified ? 'scale-100 opacity-100' : 'scale-95 opacity-30'}`}>
              <p className="absolute -top-6 left-0 text-[10px] font-bold uppercase tracking-wider text-primary flex items-center gap-1">
                <Check className="h-3.5 w-3.5" /> Unified Naavik OS
              </p>

              <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-lg text-left">
                {/* Header bar */}
                <div className="flex items-center justify-between border-b border-border bg-[#FAFAFC] px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[9px] text-muted-foreground">naavik.os</span>
                </div>

                {/* Dashboard feed preview */}
                <div className="p-4 space-y-3">
                  <div className={`p-2.5 rounded-lg border transition-all duration-500 bg-white ${isUnified ? 'border-primary/20 bg-primary/[0.01]' : 'border-border'}`}>
                    <p className="text-[8px] font-bold uppercase text-primary">Opportunities & Fests</p>
                    <p className="text-xs font-bold text-foreground mt-0.5">Hackathon Registration</p>
                    <p className="text-[9px] text-muted-foreground mt-0.5">Registration deadline placeholder</p>
                  </div>
                  <div className={`p-2.5 rounded-lg border transition-all duration-500 bg-white ${isUnified ? 'border-primary/20 bg-primary/[0.01]' : 'border-border'}`}>
                    <p className="text-[8px] font-bold uppercase text-indigo-600">Lecture Vault</p>
                    <p className="text-xs font-bold text-foreground mt-0.5">Study Notes</p>
                    <p className="text-[9px] text-muted-foreground mt-0.5">Uploaded by verified student admins</p>
                  </div>
                </div>
              </div>

              {/* Float overlays to represent dynamic loading */}
              {isUnified && (
                <div className="absolute -bottom-4 -right-4 bg-primary text-white rounded-full p-2.5 text-xs font-bold shadow-md animate-bounce">
                  All unified!
                </div>
              )}
            </div>

          </div>

          {/* Keynote Quote */}
          <div className="mt-8 text-center max-w-xl mx-auto border-t border-border/50 pt-6">
            <p className="text-sm font-bold text-foreground">
              &quot;We replace fragmented tabs with a single keyboard-driven workspace.&quot;
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Naavik OS groups information contextually based on your branch and year.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
