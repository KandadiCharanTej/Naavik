'use client'

import { useWaitlist } from './waitlist-provider'
import { LayoutDashboard, Compass, BookOpen, Layers, User, Bell, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Logo } from '@/components/logo'

interface HeroProps {
  waitlistCount?: number
}

export function Hero({ waitlistCount = 217 }: HeroProps) {
  const { open } = useWaitlist()

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
            <h1 className="text-[2rem] font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-[1.05]">
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
            className="relative mx-auto w-full max-w-[600px] lg:max-w-none flex flex-col gap-4 perspective-1000"
          >
            {/* Clean Floating Wordmark Animation */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-6 lg:-right-10 z-20 hidden sm:flex h-[72px] items-center justify-center rounded-2xl border border-border/50 bg-white/80 backdrop-blur-xl px-8 shadow-2xl shadow-primary/10"
            >
              <Logo className="h-7 w-auto" />
            </motion.div>

            <div className="relative rounded-[2rem] border border-border/80 bg-white shadow-2xl shadow-primary/5 overflow-hidden flex min-h-[520px]">
              {/* Sidebar */}
              <div className="w-60 shrink-0 border-r border-border/60 bg-[#FCFCFD] p-5 flex flex-col hidden sm:flex">
                <div className="flex items-center gap-3 mb-10 px-2 mt-2">
                  <div className="h-8 w-8 rounded-xl bg-primary flex items-center justify-center text-white text-sm font-extrabold shadow-md shadow-primary/20">N</div>
                  <span className="text-lg font-extrabold text-foreground tracking-tight">Naavik</span>
                </div>

                <nav className="flex flex-col gap-1.5 flex-1">
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-3 px-3">Your Space</div>
                  {[
                    { icon: LayoutDashboard, label: 'Dashboard', active: true },
                    { icon: Compass, label: 'Growth', active: false },
                    { icon: BookOpen, label: 'College', active: false },
                    { icon: Layers, label: 'Projects', active: false },
                  ].map((item, i) => (
                    <div key={i} className={cn("flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold transition-all cursor-default", item.active ? "bg-white text-primary shadow-sm border border-border/50" : "text-muted-foreground hover:bg-black/5 hover:text-foreground")}>
                      <item.icon className={cn("h-4 w-4", item.active ? "text-primary" : "text-muted-foreground")} />
                      {item.label}
                    </div>
                  ))}
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
              <div className="flex-1 bg-white p-8 relative flex flex-col">
                <div className="flex items-center justify-between mb-10">
                  <h2 className="text-2xl font-extrabold text-foreground tracking-tight">Dashboard</h2>
                  <div className="h-8 w-8 rounded-full bg-secondary/10 border border-border/50 flex items-center justify-center shadow-sm">
                    <span className="text-[10px] font-bold text-primary">3</span>
                  </div>
                </div>

                <div className="flex flex-col gap-5">
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
                    <p className="text-xs font-medium text-muted-foreground leading-relaxed">By Prof. Sharma</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
