'use client'

import { useWaitlist } from './waitlist-provider'
import { LayoutDashboard, Compass, BookOpen, Layers, Users, User, Bell } from 'lucide-react'
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
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12 items-center">
          
          {/* Left Column: Copy & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col text-center sm:text-left z-10"
          >
            <div className="mb-6 inline-flex items-center justify-center sm:justify-start">
              <span className="flex items-center gap-2 rounded-full border border-border bg-secondary/20 px-3 py-1 text-xs font-semibold text-muted-foreground backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Early Access Open
              </span>
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-[1.1]">
              The OS for<br />
              <span className="text-primary">engineering</span><br />
              students.
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-lg mx-auto sm:mx-0 leading-relaxed font-medium">
              Discover opportunities, access college resources, and build projects. Replace WhatsApp chaos with one beautiful platform.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center sm:justify-start">
              <button
                onClick={open}
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-2xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] min-h-[56px]"
              >
                Reserve Early Access
              </button>
              <a 
                href="#product-preview"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-2xl bg-secondary/10 px-8 py-4 text-base font-bold text-foreground border border-border transition-all hover:bg-secondary/20 min-h-[56px]"
              >
                Explore Platform
              </a>
            </div>
          </motion.div>

          {/* Right Column: Premium Dashboard Preview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[600px] lg:max-w-none flex flex-col gap-4 perspective-1000"
          >
            {/* Clean Floating Wordmark Animation replacing random cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-4 sm:-right-10 z-20 hidden sm:flex h-20 items-center justify-center rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl px-8 shadow-2xl"
            >
              <Logo className="h-8 w-auto" />
            </motion.div>

            <div className="relative rounded-3xl border border-border bg-[#F9FAFB] shadow-2xl shadow-primary/5 overflow-hidden flex min-h-[500px]">
              {/* Sidebar */}
              <div className="w-56 shrink-0 border-r border-border bg-white p-4 flex flex-col hidden sm:flex">
                <div className="flex items-center gap-2 mb-8 px-2 mt-2">
                  <div className="h-7 w-7 rounded-lg bg-primary flex items-center justify-center text-white text-sm font-bold shadow-sm">N</div>
                  <span className="text-lg font-extrabold text-foreground tracking-tight">Naavik</span>
                </div>

                <nav className="flex flex-col gap-1.5 flex-1">
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2 px-2 mt-2">Space</div>
                  {[
                    { icon: LayoutDashboard, label: 'Dashboard', active: true },
                    { icon: Compass, label: 'Growth', active: false },
                    { icon: BookOpen, label: 'College Space', active: false },
                    { icon: Layers, label: 'Projects', active: false },
                  ].map((item, i) => (
                    <div key={i} className={cn("flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold transition-colors cursor-default", item.active ? "bg-primary text-white shadow-sm" : "text-muted-foreground hover:bg-secondary/10 hover:text-foreground")}>
                      <item.icon className={cn("h-4 w-4", item.active ? "text-white" : "text-muted-foreground")} />
                      {item.label}
                    </div>
                  ))}
                </nav>

                <div className="mt-auto flex items-center justify-between border-t border-border pt-4 px-2">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center border border-border">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-foreground">Sai Kumar</div>
                    </div>
                  </div>
                  <Bell className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              {/* Main Feed Content Area */}
              <div className="flex-1 bg-[#F9FAFB] p-6 relative flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-extrabold text-foreground">Dashboard</h2>
                  <div className="h-8 w-8 rounded-full bg-white border border-border flex items-center justify-center shadow-sm">
                    <span className="text-xs font-bold text-primary">3</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="rounded-2xl border border-border bg-white p-5 shadow-sm transition-all cursor-default"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                      <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider bg-orange-500/10 px-2 py-0.5 rounded-md">Deadline Today</span>
                    </div>
                    <h3 className="text-sm font-bold text-foreground mb-1">Frontend Intern - Remote</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">Complete your application for the Tech Startup role.</p>
                    <div className="h-9 rounded-xl bg-primary flex items-center justify-center text-xs font-bold text-white shadow-sm w-32 hover:bg-primary/90">
                      Apply Now
                    </div>
                  </motion.div>

                  <div className="rounded-2xl border border-border bg-white p-5 shadow-sm opacity-60">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                      <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded-md">College Update</span>
                    </div>
                    <h3 className="text-sm font-bold text-foreground mb-1">DBMS Unit 4 Notes Uploaded</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">By Prof. Sharma</p>
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
