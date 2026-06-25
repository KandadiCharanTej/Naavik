'use client'

import { useState } from 'react'
import { Briefcase, Megaphone, BookOpen, Trophy, FileText, ChevronRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { WaitlistButton } from '@/components/cta-buttons'

const views = [
  { id: 'opportunities', label: 'Opportunities Directory', icon: Briefcase },
  { id: 'vault', label: 'Study Vault', icon: BookOpen },
  { id: 'feed', label: 'College Workspace', icon: Megaphone },
  { id: 'leaderboard', label: 'Campus Leaderboard', icon: Trophy },
]

export function ProductWalkthrough() {
  const [currentView, setCurrentView] = useState('opportunities')

  return (
    <section id="walkthrough" className="scroll-mt-20 py-16 sm:py-28 lg:py-36 bg-white relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="INTERACTIVE DEMO"
          title={
            <>
              Explore the{' '}
              <span className="text-primary">Naavik Workspace.</span>
            </>
          }
          description="Click through the panels to see how Naavik organises your opportunities, resources, and community."
        />

        {/* Dynamic explore block */}
        <div className="mt-16 grid gap-10 lg:grid-cols-12 max-w-5xl mx-auto items-stretch">
          
          {/* Left panel: List items controller */}
          <div className="lg:col-span-4 flex flex-col justify-center gap-2">
            <p className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground mb-2 text-left">Click to switch panels</p>
            {views.map((v) => {
              const isActive = currentView === v.id
              return (
                <button
                  key={v.id}
                  onClick={() => setCurrentView(v.id)}
                  className={`w-full flex items-center gap-3.5 p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'border-primary bg-primary/5 text-primary font-bold shadow-xs'
                      : 'border-border bg-white text-muted-foreground hover:text-foreground hover:border-border-hover'
                  }`}
                >
                  <div className={`h-8 w-8 rounded-lg flex items-center justify-center border ${isActive ? 'bg-primary/10 border-primary/20 text-primary' : 'bg-muted border-transparent text-muted-foreground'}`}>
                    <v.icon className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-sm font-semibold">{v.label}</span>
                </button>
              )
            })}
          </div>

          {/* Right panel: Premium mockup content */}
          <div className="lg:col-span-8 flex flex-col items-stretch">
            <Reveal key={currentView} delay={50} className="flex-1 flex flex-col bg-white border border-border rounded-3xl overflow-hidden shadow-lg min-h-[380px]">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border bg-[#FAFAFC] px-5 py-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  <span className="ml-3 text-[10px] text-muted-foreground font-semibold uppercase tracking-wider bg-muted/60 px-2 py-0.5 rounded select-none">
                    workspace_preview
                  </span>
                </div>
                <div className="h-5 w-5 rounded-full bg-primary/20" />
              </div>

              {/* View Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between text-left">
                
                {currentView === 'opportunities' && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-base font-bold text-foreground">Opportunities Directory</h4>
                      <p className="text-xs text-muted-foreground">National internships, state-level hackathons, and regional events.</p>
                    </div>

                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-[#FAFAFC]">
                        <div>
                          <span className="text-[8px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded-sm">Internship</span>
                          <h5 className="text-xs font-bold text-foreground mt-1">Full-Stack Developer Intern</h5>
                          <p className="text-[10px] text-muted-foreground mt-0.5">Razorpay • Remote • Stipend: ₹35,000/mo</p>
                        </div>
                        <button className="rounded-lg bg-primary px-3 py-1.5 text-[10px] font-bold text-white cursor-pointer select-none">Apply</button>
                      </div>
                      <div className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-[#FAFAFC]">
                        <div>
                          <span className="text-[8px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-sm">Hackathon</span>
                          <h5 className="text-xs font-bold text-foreground mt-1">Smart India Hackathon 2026</h5>
                          <p className="text-[10px] text-muted-foreground mt-0.5">National Govt • ₹2 Lakh Prize • Hyderabad Center</p>
                        </div>
                        <button className="rounded-lg border border-border bg-white text-foreground hover:bg-muted px-3 py-1.5 text-[10px] font-bold cursor-pointer select-none">Register</button>
                      </div>
                    </div>
                  </div>
                )}

                {currentView === 'vault' && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-base font-bold text-foreground">Semester Study Vault</h4>
                      <p className="text-xs text-muted-foreground">Previous year question papers, notes, and lab material uploaded by admins.</p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-[#FAFAFC]">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
                            <FileText className="h-5 w-5" />
                          </div>
                          <div className="min-w-0">
                            <h5 className="text-xs font-bold text-foreground truncate">DBMS Sem-4 PYQ (2024)</h5>
                            <p className="text-[9px] text-muted-foreground">PDF • CBIT • CSE • Semester 4</p>
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                      </div>
                      <div className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-[#FAFAFC]">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                            <FileText className="h-5 w-5" />
                          </div>
                          <div className="min-w-0">
                            <h5 className="text-xs font-bold text-foreground truncate">OS Lecture notes (Unit 3)</h5>
                            <p className="text-[9px] text-muted-foreground">PDF • JNTUH • CSE • Semester 4</p>
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                      </div>
                    </div>
                  </div>
                )}

                {currentView === 'feed' && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-base font-bold text-foreground">College Workspace Feed</h4>
                      <p className="text-xs text-muted-foreground">Official notifications and student club announcements.</p>
                    </div>

                    <div className="p-4 rounded-xl border border-border bg-[#FAFAFC]">
                      <div className="flex items-center gap-2">
                        <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary select-none">SM</span>
                        <div>
                          <p className="text-xs font-bold text-foreground">Srinivas M. <span className="text-[9px] font-bold text-primary bg-primary/5 px-1.5 py-0.5 rounded ml-1">Admin</span></p>
                          <p className="text-[9px] text-muted-foreground">CBIT Workspace • Pinned 2 hours ago</p>
                        </div>
                      </div>
                      <h5 className="text-xs font-bold text-foreground mt-3">Convergence Hackathon Registrations Open</h5>
                      <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">Convergence 2026 registrations are live. Registrations close in 3 days. Find your hackathon team in the Team Finder channel.</p>
                    </div>
                  </div>
                )}

                {currentView === 'leaderboard' && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-base font-bold text-foreground">Campus Leaderboard</h4>
                      <p className="text-xs text-muted-foreground">Points earned for uploading notes and sharing verified resources.</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-[#FAFAFC] text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-extrabold text-primary w-3">1</span>
                          <span className="h-5 w-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-[9px] font-bold select-none">R</span>
                          <span className="font-bold text-foreground">Rahul K. (CBIT)</span>
                        </div>
                        <span className="font-bold text-primary">540 pts</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-[#FAFAFC] text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-extrabold text-muted-foreground/60 w-3">2</span>
                          <span className="h-5 w-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-[9px] font-bold select-none">S</span>
                          <span className="font-bold text-foreground">Srinivas M. (CBIT)</span>
                        </div>
                        <span className="font-bold text-primary">480 pts</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer waitlist inside demo box */}
                <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
                  <p>All campus resources are uploaded and verified by student admins.</p>
                  <WaitlistButton size="sm" id="walkthrough-waitlist-btn">
                    Get Early Access
                  </WaitlistButton>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}
