'use client'

import { useState } from 'react'
import { useWaitlist } from './waitlist-provider'
import { LayoutDashboard, Compass, BookOpen, Layers, User, Bell, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '@/components/logo'

interface HeroProps {
  waitlistCount?: number
}

export function Hero({ waitlistCount = 217 }: HeroProps) {
  const { open } = useWaitlist()
  const [activeTab, setActiveTab] = useState('Dashboard')

  const TABS = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: Compass, label: 'Growth' },
    { icon: BookOpen, label: 'College' },
    { icon: Layers, label: 'Projects' },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return (
          <motion.div 
            key="Dashboard"
            initial={{ opacity: 0, y: 5 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-5"
          >
            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }}
              className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm hover:shadow-md transition-all cursor-default group"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider bg-orange-500/10 px-2.5 py-1 rounded-md">Deadline Today</span>
              </div>
              <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">Frontend Intern - Remote</h3>
              <p className="text-xs font-medium text-muted-foreground leading-relaxed mb-5">Complete your application for the Tech Startup role before 11:59 PM.</p>
              <div className="h-10 rounded-xl bg-foreground flex items-center justify-center text-xs font-bold text-background shadow-sm w-32 group-hover:bg-primary transition-colors">
                Apply Now
              </div>
            </motion.div>

            <div className="rounded-2xl border border-border/60 bg-[#F9FAFB] p-6 shadow-sm opacity-70">
              <div className="flex items-center gap-2 mb-4">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider bg-emerald-500/10 px-2.5 py-1 rounded-md">College Update</span>
              </div>
              <h3 className="text-base font-bold text-foreground mb-1">DBMS Unit 4 Notes Uploaded</h3>
              <p className="text-xs font-medium text-muted-foreground leading-relaxed">By Campus Admin</p>
            </div>
          </motion.div>
        )
      case 'Growth':
        return (
          <motion.div 
            key="Growth"
            initial={{ opacity: 0, y: 5 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-5"
          >
            <div className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm hover:shadow-md transition-all cursor-default group">
              <div className="flex items-center gap-2 mb-4">
                <span className="flex h-2 w-2 rounded-full bg-blue-500" />
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider bg-blue-500/10 px-2.5 py-1 rounded-md">Hackathon</span>
              </div>
              <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">T-Hub Innovation Challenge</h3>
              <p className="text-xs font-medium text-muted-foreground leading-relaxed mb-5">Build for the future. Win up to ₹1,00,000 in prizes and fast-track incubation.</p>
              <div className="h-10 rounded-xl bg-foreground flex items-center justify-center text-xs font-bold text-background shadow-sm w-32 group-hover:bg-primary transition-colors">
                Register
              </div>
            </div>
            
            <div className="rounded-2xl border border-border/60 bg-[#F9FAFB] p-6 shadow-sm opacity-70">
              <div className="flex items-center gap-2 mb-4">
                <span className="flex h-2 w-2 rounded-full bg-purple-500" />
                <span className="text-[10px] font-bold text-purple-600 uppercase tracking-wider bg-purple-500/10 px-2.5 py-1 rounded-md">Workshop</span>
              </div>
              <h3 className="text-base font-bold text-foreground mb-1">System Design 101</h3>
              <p className="text-xs font-medium text-muted-foreground leading-relaxed">Virtual • Starts in 2 hours</p>
            </div>
          </motion.div>
        )
      case 'College':
        return (
          <motion.div 
            key="College"
            initial={{ opacity: 0, y: 5 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="rounded-2xl border border-border/60 bg-[#F9FAFB] p-5 shadow-sm text-center flex flex-col items-center justify-center min-h-[140px] hover:border-primary/30 transition-all">
              <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-3">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-foreground mb-1">Notes & PYQs</h3>
              <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">CSE • 3rd Year</p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-[#F9FAFB] p-5 shadow-sm text-center flex flex-col items-center justify-center min-h-[140px] hover:border-primary/30 transition-all">
              <div className="h-10 w-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-600 mb-3">
                <Bell className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-foreground mb-1">Updates</h3>
              <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Official Notices</p>
            </div>
            <div className="col-span-2 rounded-2xl border border-border/60 bg-white p-5 shadow-sm flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-foreground">Campus Leaderboard</h3>
                <p className="text-xs font-medium text-muted-foreground mt-0.5">You are in the Top 10%</p>
              </div>
              <div className="text-primary font-bold text-lg">🏆</div>
            </div>
          </motion.div>
        )
      case 'Projects':
        return (
          <motion.div 
            key="Projects"
            initial={{ opacity: 0, y: 5 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-5"
          >
            <div className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm hover:shadow-md transition-all cursor-default group">
              <div className="flex items-center gap-2 mb-4">
                <span className="flex h-2 w-2 rounded-full bg-primary" />
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-primary/10 px-2.5 py-1 rounded-md">Seeking Team</span>
              </div>
              <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">AI Resume Parser</h3>
              <p className="text-xs font-medium text-muted-foreground leading-relaxed mb-5">Looking for a Next.js developer to help build the frontend interface.</p>
              <div className="h-10 rounded-xl bg-secondary/20 flex items-center justify-center text-xs font-bold text-foreground shadow-sm w-full group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                Message Founder
              </div>
            </div>
          </motion.div>
        )
      default:
        return null
    }
  }

  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Left Column: Copy & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col text-center sm:text-left z-10 max-w-xl mx-auto lg:mx-0"
          >
            <h1 className="text-[1.75rem] font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.05]">
              Everything an engineering student needs.<br className="hidden sm:block" />
              <span className="text-primary"> In one place.</span>
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl leading-relaxed font-medium">
              Find internships, hackathons, notes, projects, teammates and campus updates — all in one place, personalised for your college.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center sm:justify-start">
              <button
                onClick={open}
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-2xl bg-foreground px-8 py-4 text-base font-bold text-background shadow-lg shadow-foreground/10 transition-all hover:bg-foreground/90 hover:scale-[1.02] active:scale-[0.98] min-h-[56px]"
              >
                Reserve Early Access
              </button>
              <a 
                href="#inside-naavik"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-2xl bg-secondary/10 px-8 py-4 text-base font-bold text-foreground border border-border transition-all hover:bg-secondary/20 hover:scale-[1.02] active:scale-[0.98] min-h-[56px]"
              >
                Explore Naavik
              </a>
            </div>

            {/* Trust Strip */}
            <div className="mt-8 flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-3 opacity-80">
              {['Free for Students', 'Privacy First', 'No Spam', 'Built in Telangana'].map((trust) => (
                <span key={trust} className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  {trust}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Premium Dashboard Preview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[600px] lg:max-w-none hidden sm:flex flex-col gap-4 perspective-1000"
          >
            <div className="relative rounded-[2rem] border border-border/80 bg-white shadow-2xl shadow-primary/5 overflow-hidden flex min-h-[520px]">
              {/* Sidebar */}
              <div className="w-60 shrink-0 border-r border-border/60 bg-[#FCFCFD] p-5 flex flex-col hidden sm:flex">
                <div className="flex items-center mb-10 px-2 mt-2">
                  <Logo className="h-[25px] w-auto" />
                </div>

                <nav className="flex flex-col gap-1.5 flex-1">
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-3 px-3">Your Space</div>
                  {TABS.map((item, i) => {
                    const isActive = activeTab === item.label
                    return (
                      <div 
                        key={i} 
                        onClick={() => setActiveTab(item.label)}
                        className={cn(
                          "flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer", 
                          isActive 
                            ? "bg-white text-primary shadow-sm border border-border/50" 
                            : "text-muted-foreground hover:bg-black/5 hover:text-foreground"
                        )}
                      >
                        <item.icon className={cn("h-4 w-4", isActive ? "text-primary" : "text-muted-foreground")} />
                        {item.label}
                      </div>
                    )
                  })}
                </nav>

                <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-5 px-2">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-secondary/20 flex items-center justify-center border border-border/50 shadow-sm">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-foreground">Student User</div>
                    </div>
                  </div>
                  <Bell className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
                </div>
              </div>

              {/* Main Feed Content Area */}
              <div className="flex-1 bg-white p-8 relative flex flex-col overflow-hidden">
                <div className="flex items-center justify-between mb-10">
                  <h2 className="text-2xl font-extrabold text-foreground tracking-tight">{activeTab}</h2>
                  {activeTab === 'Dashboard' && (
                    <div className="h-8 w-8 rounded-full bg-secondary/10 border border-border/50 flex items-center justify-center shadow-sm">
                      <span className="text-[10px] font-bold text-primary">3</span>
                    </div>
                  )}
                </div>

                <AnimatePresence mode="wait">
                  {renderTabContent()}
                </AnimatePresence>
                
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
