'use client'

import { useState } from 'react'
import { Briefcase, Megaphone, BookOpen, Trophy, ArrowRight, CheckCircle2, ChevronRight, FileText, ExternalLink } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { WaitlistButton } from '@/components/cta-buttons'

const demoTabs = [
  { id: 'opportunities', label: 'Opportunities Hub', icon: Briefcase },
  { id: 'feed', label: 'Campus Feed', icon: Megaphone },
  { id: 'vault', label: 'Study Vault', icon: BookOpen },
  { id: 'leaderboard', label: 'Leaderboards', icon: Trophy },
]

export function ProductDemo() {
  const [activeTab, setActiveTab] = useState('opportunities')

  return (
    <section id="demo" className="scroll-mt-20 border-t border-border py-20 sm:py-28 bg-[#FAFAFC]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Interactive Demo"
          title={
            <>
              Explore the{' '}
              <span className="text-primary">student operating system.</span>
            </>
          }
          description="Click through the core interfaces of the Naviko app to see how it organizes student life."
        />

        {/* Tab switcher */}
        <div className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {demoTabs.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-primary text-white shadow-xs'
                    : 'bg-white border border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Mock browser card */}
        <Reveal delay={150} className="mt-10 overflow-hidden rounded-3xl border border-border bg-white shadow-xl max-w-4xl mx-auto">
          {/* Browser header */}
          <div className="flex items-center justify-between border-b border-border bg-[#FAFAFC] px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <div className="ml-4 flex h-6 w-48 sm:w-64 items-center justify-center rounded-md bg-white border border-border text-[10px] text-muted-foreground">
                app.naviko.com/{activeTab}
              </div>
            </div>
            <span className="text-[10px] font-bold text-primary bg-primary/5 px-2 py-0.5 rounded-full">
              Demo Instance
            </span>
          </div>

          {/* Interactive display area */}
          <div className="p-6 sm:p-8 min-h-[360px] flex flex-col justify-between bg-white">
            
            {activeTab === 'opportunities' && (
              <div className="space-y-5 text-left">
                <div>
                  <h4 className="text-sm font-bold text-foreground">Opportunities Hub</h4>
                  <p className="text-xs text-muted-foreground">Curated internships, hackathons, and jobs matching your branch.</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border border-border bg-[#FAFAFC]">
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">Internship</span>
                      <h5 className="text-sm font-bold text-foreground mt-1">Frontend Engineering Intern</h5>
                      <p className="text-xs text-muted-foreground mt-0.5">Razorpay • Remote • CSE / IT / ECE • ₹35,000/mo</p>
                    </div>
                    <button className="self-start sm:self-auto rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-white hover:bg-primary/95 cursor-pointer">Apply</button>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border border-border bg-[#FAFAFC]">
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Hackathon</span>
                      <h5 className="text-sm font-bold text-foreground mt-1">Smart Andhra Pradesh Hackfest</h5>
                      <p className="text-xs text-muted-foreground mt-0.5">AP Govt • Hyderabad • All Branches • ₹2L Prize Pool</p>
                    </div>
                    <button className="self-start sm:self-auto rounded-lg border border-border bg-white hover:bg-muted text-foreground px-3 py-1.5 text-xs font-bold cursor-pointer">Find Teammates</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'feed' && (
              <div className="space-y-5 text-left">
                <div>
                  <h4 className="text-sm font-bold text-foreground">CBIT Campus Feed</h4>
                  <p className="text-xs text-muted-foreground">Spam-free alerts published directly by verified student admins.</p>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl border border-border bg-[#FAFAFC]">
                    <div className="flex items-center gap-2">
                      <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">SK</span>
                      <div>
                        <p className="text-xs font-bold text-foreground">Sai Kumar <span className="text-[10px] font-medium text-primary bg-primary/5 px-1.5 py-0.5 rounded ml-1">Admin</span></p>
                        <p className="text-[9px] text-muted-foreground">CSE • Pinned 2 hours ago</p>
                      </div>
                    </div>
                    <h5 className="text-xs font-bold text-foreground mt-3">Phoenix Technical Club Recruitments Open</h5>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Applications are open for core development and public relations roles. Join the info session in Seminar Hall 1 tomorrow.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'vault' && (
              <div className="space-y-5 text-left">
                <div>
                  <h4 className="text-sm font-bold text-foreground">Semester Study Vault</h4>
                  <p className="text-xs text-muted-foreground">Previous year question papers, notes, and lab files organized by branch.</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-[#FAFAFC]">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-red-600">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <h5 className="text-xs font-bold text-foreground truncate">DBMS End-Sem paper (2024)</h5>
                        <p className="text-[10px] text-muted-foreground">PDF • CSE • Sem 4</p>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-[#FAFAFC]">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <h5 className="text-xs font-bold text-foreground truncate">OS Lecture notes Unit 1-4</h5>
                        <p className="text-[10px] text-muted-foreground">PDF • CSE • Sem 4</p>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'leaderboard' && (
              <div className="space-y-5 text-left">
                <div>
                  <h4 className="text-sm font-bold text-foreground">Top Contributors Board</h4>
                  <p className="text-xs text-muted-foreground">Students recognized for uploading helpful files and answering peer queries.</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between py-2.5 px-4 rounded-lg border border-border bg-[#FAFAFC]">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-primary w-4">1</span>
                      <span className="h-6 w-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-[10px] font-bold">R</span>
                      <span className="text-xs font-bold text-foreground">Rahul S. (CSE)</span>
                    </div>
                    <span className="text-xs font-bold text-primary">540 pts</span>
                  </div>
                  <div className="flex items-center justify-between py-2.5 px-4 rounded-lg border border-border bg-[#FAFAFC]">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-muted-foreground/60 w-4">2</span>
                      <span className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-[10px] font-bold">A</span>
                      <span className="text-xs font-bold text-foreground">Ananya K. (ECE)</span>
                    </div>
                    <span className="text-xs font-bold text-primary">480 pts</span>
                  </div>
                  <div className="flex items-center justify-between py-2.5 px-4 rounded-lg border border-border bg-[#FAFAFC]">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-muted-foreground/60 w-4">3</span>
                      <span className="h-6 w-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px] font-bold">S</span>
                      <span className="text-xs font-bold text-foreground">Sai Kumar (CSE)</span>
                    </div>
                    <span className="text-xs font-bold text-primary">410 pts</span>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom invite CTA */}
            <div className="mt-8 pt-4 border-t border-border flex items-center justify-between flex-col sm:flex-row gap-3">
              <p className="text-xs text-muted-foreground text-center sm:text-left">
                Get early access to claim your college workspace.
              </p>
              <WaitlistButton size="sm" id="demo-section-waitlist-btn">
                Reserve My Access
              </WaitlistButton>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  )
}
