'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Reveal, premiumEasing } from '@/components/animations/reveal'
import { Home, Globe, Library, Users, Search, Bell, Pin, ChevronRight, Bookmark, Download, MessageSquare, Filter, ArrowUpRight, Flame, Clock, FileText, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

// Define interfaces for tabs
type TabId = 'dashboard' | 'opportunities' | 'notes' | 'team'

export function ProductPreview() {
  const [activeTab, setActiveTab] = useState<TabId>('dashboard')

  const tabs = [
    { id: 'dashboard', label: 'Overview', icon: Home },
    { id: 'opportunities', label: 'Opportunities', icon: Globe },
    { id: 'notes', label: 'Study Vault', icon: Library },
    { id: 'team', label: 'Team Finder', icon: Users },
  ] as const

  const tabContentVariants = {
    hidden: { opacity: 0, scale: 0.98, filter: 'blur(4px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, scale: 1.02, filter: 'blur(4px)' }
  }

  return (
    <section
      className="naavik-section-connector relative overflow-hidden bg-[#030306] pb-0 pt-20 text-white sm:pt-24 lg:pt-32"
      id="product-preview"
    >
      {/* Upward bleed from light sections */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white via-[#F8F8FA] to-transparent opacity-[0.04]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(124,58,237,0.45),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 30%, black, transparent)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8">
        {/* Editorial header — asymmetric */}
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <Reveal>
            <div className="max-w-2xl lg:pb-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--purple-400)]">
                Product
              </p>
              <h2 className="mt-4 text-[2.25rem] font-extrabold tracking-[-0.04em] text-balance sm:text-[3rem] lg:text-[3.5rem] lg:leading-[1.02]">
                This is what it looks like.
              </h2>
              <p className="mt-5 max-w-lg text-[16px] font-medium leading-relaxed text-gray-400 sm:text-[18px]">
                Designed for how engineering students actually work.
              </p>
            </div>
          </Reveal>

          {/* Desktop tab rail — floating pill */}
          <Reveal delay={60} className="hidden lg:block">
            <div className="naavik-glass-dark flex gap-1 rounded-2xl p-1.5">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabId)}
                  className={cn(
                    'flex items-center gap-2 rounded-xl px-4 py-2.5 text-[13px] font-semibold transition-all duration-300',
                    activeTab === tab.id
                      ? 'bg-white text-black shadow-lg shadow-black/20'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white',
                  )}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Mobile tab strip — dedicated layout */}
        <Reveal delay={40} className="mt-8 lg:hidden">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabId)}
                className={cn(
                  'flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-semibold transition-all',
                  activeTab === tab.id
                    ? 'bg-white text-black'
                    : 'naavik-glass-dark text-gray-400',
                )}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Cinematic stage — bleeds into next section */}
        <Reveal delay={100}>
          <div className="relative mt-10 lg:mt-14 lg:-mx-8 xl:-mx-16">
            {/* Depth layers */}
            <div
              aria-hidden
              className="absolute -left-4 top-8 hidden h-48 w-64 rounded-3xl naavik-glass-dark shadow-[var(--shadow-dark)] lg:block xl:-left-12"
            />
            <div
              aria-hidden
              className="absolute -right-2 bottom-24 hidden h-36 w-52 rounded-3xl border border-[var(--purple-500)]/25 bg-[var(--purple-600)]/15 shadow-[0_0_80px_rgba(124,58,237,0.25)] lg:block xl:-right-8"
            />
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 hidden h-[70%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.15)_0%,transparent_70%)] blur-2xl lg:block"
            />

            <div className="naavik-stage-perspective">
              <motion.div
                className="naavik-stage-tilt relative flex w-full flex-col overflow-hidden rounded-[20px] border border-white/10 bg-[#0A0A0E] shadow-[0_60px_120px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.05)] sm:rounded-[32px] h-[min(78vh,680px)] sm:h-[min(72vh,720px)] lg:h-[720px]"
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, ease: premiumEasing }}
              >
            {/* Desktop macOS Window Controls */}
            <div className="hidden sm:flex items-center gap-2 px-6 py-4 border-b border-white/10 bg-[#1A1A1A]">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/30"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/30"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/30"></div>
              </div>
              <div className="mx-auto w-[280px] h-8 bg-black/40 rounded-md border border-white/5 flex items-center justify-center text-[12px] text-gray-400 font-semibold tracking-wide shadow-inner">
                <Search className="w-3 h-3 mr-2 opacity-50" />
                naavik.in/dashboard
              </div>
            </div>

            {/* Mobile Header (Sticky) */}
            <div className="sm:hidden flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#141414]/90 backdrop-blur-xl sticky top-0 z-50">
              <div className="flex items-center gap-3 w-full">
                <div className="w-8 h-8 rounded-full bg-gray-800 border border-white/10 overflow-hidden shrink-0">
                  <Image src="/light-logo.png" alt="Naavik" width={48} height={48} className="object-contain p-1 opacity-90" />
                </div>
                <div className="flex-1 bg-white/5 h-9 rounded-full border border-white/10 flex items-center px-4">
                   <Search className="w-4 h-4 text-gray-500 mr-2" />
                   <span className="text-[13px] text-gray-500">Search...</span>
                </div>
                <button className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative shrink-0">
                  <Bell className="w-4 h-4 text-gray-300" />
                  <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                </button>
              </div>
            </div>

            {/* Inner Dashboard View */}
            <div className="relative w-full flex-1 flex overflow-hidden bg-[#141414]">
              
              {/* Desktop Sidebar */}
              <div className="w-[80px] bg-[#0A0A0A] border-r border-white/5 flex-col items-center py-6 gap-6 hidden sm:flex shrink-0 z-20">
                <div className="mb-4">
                  <Image src="/light-logo.png" alt="Naavik" width={56} height={56} className="object-contain opacity-90" />
                </div>
                
                <div className="flex flex-col gap-2 w-full px-3">
                  {tabs.map(tab => (
                    <button 
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as TabId)}
                      className={cn(
                        "p-3 rounded-xl transition-all w-full flex items-center justify-center relative group",
                        activeTab === tab.id ? "bg-white/10 text-white" : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                      )}
                    >
                      <tab.icon className="w-5 h-5 relative z-10" />
                      
                      {/* Tooltip */}
                      <div className="absolute left-full ml-4 px-2 py-1 bg-white text-black text-[12px] font-bold rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap shadow-xl transition-opacity">
                        {tab.label}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex-1"></div>
                
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 border border-white/20 shadow-inner flex items-center justify-center text-sm font-bold">
                  S
                </div>
              </div>

              {/* Dynamic Content Area (Scrollable) */}
              <div className="flex-1 overflow-y-auto scrollbar-hide pb-[90px] sm:pb-0 relative">
                <AnimatePresence mode="wait">
                  {activeTab === 'dashboard' && <OverviewTab key="dashboard" variants={tabContentVariants} />}
                  {activeTab === 'opportunities' && <OpportunitiesTab key="opportunities" variants={tabContentVariants} />}
                  {activeTab === 'notes' && <StudyVaultTab key="notes" variants={tabContentVariants} />}
                  {activeTab === 'team' && <TeamFinderTab key="team" variants={tabContentVariants} />}
                </AnimatePresence>
              </div>

            </div>

            {/* Mobile Bottom Navigation (Sticky) */}
            <div className="sm:hidden absolute bottom-0 left-0 right-0 bg-[#0A0A0A]/90 backdrop-blur-2xl border-t border-white/10 pb-safe z-50">
              <div className="flex items-center justify-between px-6 py-3">
                 {tabs.map(tab => (
                    <button 
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as TabId)}
                      className={cn(
                        "flex flex-col items-center justify-center gap-1.5 min-w-[64px]",
                        activeTab === tab.id ? "text-white" : "text-gray-500"
                      )}
                    >
                      <div className={cn("p-1.5 rounded-full transition-colors", activeTab === tab.id && "bg-white/10")}>
                        <tab.icon className={cn("w-5 h-5", activeTab === tab.id && "fill-current opacity-20")} />
                      </div>
                      <span className="text-[10px] font-medium">{tab.label}</span>
                    </button>
                  ))}
              </div>
            </div>

              </motion.div>
            </div>

            {/* Stage glow spill into next section */}
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(124,58,237,0.2),transparent)]"
            />
          </div>
        </Reveal>
      </div>

      {/* Bottom fade into light section */}
      <div
        aria-hidden
        className="pointer-events-none relative z-0 mt-8 h-24 bg-gradient-to-b from-transparent to-white sm:h-32 lg:h-40"
      />
    </section>
  )
}

/* -------------------------------------------------------------------------------------------------
 * TAB COMPONENTS (Realistic Data & Mobile-First Layouts)
 * -----------------------------------------------------------------------------------------------*/

function OverviewTab({ variants }: { variants: any }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.4, ease: premiumEasing }}
      className="p-5 sm:p-8 flex flex-col min-h-full"
    >
      <div className="mb-6 sm:mb-8">
        <h3 className="text-[22px] sm:text-[28px] font-bold text-white tracking-tight">Good morning, Student 👋</h3>
        <p className="text-[14px] text-gray-400 mt-1">B.Tech CSE &middot; 3rd Year &middot; CBIT Hyderabad</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1">
        
        {/* Main Feed Column */}
        <div className="md:col-span-8 flex flex-col gap-6">
          
          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
             <div className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-4 flex flex-col">
               <div className="flex items-center gap-2 text-orange-400 mb-2"><Flame className="w-4 h-4" /><span className="text-[12px] font-bold uppercase tracking-wider">Streak</span></div>
               <span className="text-[24px] font-extrabold text-white">12 Days</span>
             </div>
             <div className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-4 flex flex-col">
               <div className="flex items-center gap-2 text-emerald-400 mb-2"><CheckCircle2 className="w-4 h-4" /><span className="text-[12px] font-bold uppercase tracking-wider">Applied</span></div>
               <span className="text-[24px] font-extrabold text-white">4 Opps</span>
             </div>
             <div className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-4 flex flex-col hidden sm:flex">
               <div className="flex items-center gap-2 text-blue-400 mb-2"><Bookmark className="w-4 h-4" /><span className="text-[12px] font-bold uppercase tracking-wider">Saved</span></div>
               <span className="text-[24px] font-extrabold text-white">8 Notes</span>
             </div>
          </div>

          <div className="flex items-center justify-between mt-2">
            <span className="text-[16px] font-bold text-white">Recommended for you</span>
          </div>
          
          {/* Feed Item 1 */}
          <div className="bg-[#1A1A1A] border border-white/5 rounded-[20px] p-5 hover:bg-[#222] transition-colors cursor-pointer group shadow-sm hover:shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-inner shrink-0">
                <span className="text-white font-black text-xl">R</span>
              </div>
              <span className="text-[11px] font-bold text-orange-400 uppercase tracking-wider bg-orange-400/10 px-2 py-1 rounded">2 days left</span>
            </div>
            <h4 className="text-[18px] font-bold text-white mb-1 group-hover:text-[var(--purple-400)] transition-colors">Frontend Developer Intern</h4>
            <p className="text-[14px] text-gray-400 mb-4">Razorpay &middot; Remote &middot; ₹30,000/month</p>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="text-[11px] font-semibold bg-white/5 text-gray-300 px-2.5 py-1 rounded-md">React</span>
              <span className="text-[11px] font-semibold bg-white/5 text-gray-300 px-2.5 py-1 rounded-md">TypeScript</span>
            </div>
            <div className="h-px bg-white/5 mb-4"></div>
            <button className="text-[14px] font-bold text-white flex items-center w-full justify-between group/btn">
              <span>View Details</span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-colors">
                 <ArrowUpRight className="w-4 h-4" />
              </div>
            </button>
          </div>

          {/* Feed Item 2 */}
          <div className="bg-[#1A1A1A] border border-white/5 rounded-[20px] p-5 hover:bg-[#222] transition-colors cursor-pointer group shadow-sm hover:shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#222] border border-white/10 flex items-center justify-center shrink-0">
                <span className="text-[20px]">🏆</span>
              </div>
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider bg-emerald-400/10 px-2 py-1 rounded">Campus Event</span>
            </div>
            <h4 className="text-[18px] font-bold text-white mb-1 group-hover:text-[var(--purple-400)] transition-colors">T-Hub Innovation Hackathon</h4>
            <p className="text-[14px] text-gray-400">T-Hub Hyderabad &middot; Prize Pool: ₹1,000,000</p>
          </div>
        </div>

        {/* Right Sidebar Column (Hidden on mobile) */}
        <div className="hidden md:flex md:col-span-4 flex-col gap-5">
          <div className="bg-[var(--purple-900)]/20 border border-[var(--purple-500)]/30 rounded-[20px] p-5">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-[var(--purple-400)]" />
              <h4 className="text-[13px] font-bold text-[var(--purple-300)] uppercase tracking-wider">Priority Alert</h4>
            </div>
            <p className="text-[16px] font-bold text-white mb-1">DBMS Lab Internal</p>
            <p className="text-[13px] text-gray-400 mb-5">Tomorrow at 10:00 AM. 3 new PYQs have been uploaded by admins.</p>
            <button className="w-full py-2.5 bg-white text-black text-[14px] font-bold rounded-xl hover:bg-gray-200 transition shadow-md">Study Now</button>
          </div>

          <div className="bg-[#1A1A1A] border border-white/5 rounded-[20px] p-5">
             <h4 className="text-[14px] font-bold text-white mb-4">Continue Studying</h4>
             <div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-xl cursor-pointer transition">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center shrink-0"><FileText className="w-5 h-5" /></div>
                <div>
                  <p className="text-[13px] font-bold text-white">Unit 3: Normalization.pdf</p>
                  <p className="text-[11px] text-gray-500">Opened 2 hrs ago</p>
                </div>
             </div>
             <div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-xl cursor-pointer transition mt-1">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0"><FileText className="w-5 h-5" /></div>
                <div>
                  <p className="text-[13px] font-bold text-white">OS_Lab_Manual_2024.pdf</p>
                  <p className="text-[11px] text-gray-500">Opened yesterday</p>
                </div>
             </div>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

function OpportunitiesTab({ variants }: { variants: any }) {
  const chips = ['All', 'Internships', 'Hackathons', 'Scholarships', 'Remote', 'Hyderabad', 'React', 'AI/ML']
  
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.4, ease: premiumEasing }}
      className="p-5 sm:p-8 flex flex-col min-h-full"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h3 className="text-[24px] sm:text-[28px] font-bold text-white">Opportunities</h3>
        
        {/* Desktop Filters */}
        <div className="hidden sm:flex gap-2">
          <button className="px-4 py-2 bg-[#1A1A1A] border border-white/10 hover:border-white/20 rounded-xl text-[13px] font-medium flex items-center transition"><Filter className="w-3.5 h-3.5 mr-2" /> More Filters</button>
        </div>
      </div>
      
      {/* Horizontal Scrollable Chips (Mobile friendly) */}
      <div className="flex overflow-x-auto scrollbar-hide gap-2 mb-6 -mx-5 px-5 sm:mx-0 sm:px-0">
        {chips.map((chip, i) => (
          <button key={i} className={cn("px-4 py-2 rounded-full text-[13px] font-semibold whitespace-nowrap border shrink-0 transition-all", i === 1 ? "bg-white text-black border-white" : "bg-[#1A1A1A] text-gray-400 border-white/5 hover:border-white/20")}>
            {chip}
          </button>
        ))}
      </div>
      
      {/* 2 Column Grid on Desktop, 1 on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 flex-1">
        {[
          { title: "SDE Intern (Summer 2025)", company: "Amazon", loc: "Hyderabad", tag: "Hot", color: "text-red-400 bg-red-400/10", logo: "A" },
          { title: "React Native Developer", company: "Zomato", loc: "Remote", tag: "New", color: "text-blue-400 bg-blue-400/10", logo: "Z" },
          { title: "GenAI Hackathon", company: "Google", loc: "Virtual", tag: "₹5L Prize", color: "text-emerald-400 bg-emerald-400/10", logo: "G" },
          { title: "Backend Eng Intern", company: "Cred", loc: "Bangalore", tag: "3d left", color: "text-orange-400 bg-orange-400/10", logo: "C" },
        ].map((job, i) => (
          <div key={i} className="bg-[#1A1A1A] border border-white/5 rounded-[20px] p-5 flex flex-col hover:border-white/20 hover:bg-[#222] transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#2A2A2A] text-white font-black text-xl flex items-center justify-center shadow-inner shrink-0">{job.logo}</div>
              <span className={cn("text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded", job.color)}>{job.tag}</span>
            </div>
            <h4 className="text-[17px] sm:text-[18px] font-bold text-white leading-tight">{job.title}</h4>
            <p className="text-[14px] text-gray-400 mt-1 mb-4">{job.company} &middot; {job.loc}</p>
            <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
              <span className="text-[13px] font-bold text-white group-hover:text-[var(--purple-400)] transition-colors">View details &rarr;</span>
              <button className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"><Bookmark className="w-4 h-4 text-gray-400" /></button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function StudyVaultTab({ variants }: { variants: any }) {
  const chips = ['All Notes', 'CSE Semester 6', 'PYQs', 'Lab Manuals', 'Syllabus', 'Textbooks']
  
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.4, ease: premiumEasing }}
      className="p-5 sm:p-8 flex flex-col min-h-full"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h3 className="text-[24px] sm:text-[28px] font-bold text-white">Study Vault</h3>
        <div className="w-full sm:w-[300px] h-10 bg-[#1A1A1A] rounded-xl border border-white/10 flex items-center px-4 focus-within:border-[var(--purple-500)] transition-colors">
           <Search className="w-4 h-4 text-gray-500 mr-2" />
           <span className="text-[14px] text-gray-500">Search notes...</span>
        </div>
      </div>
      
      <div className="flex overflow-x-auto scrollbar-hide gap-2 mb-6 -mx-5 px-5 sm:mx-0 sm:px-0">
        {chips.map((chip, i) => (
          <button key={i} className={cn("px-4 py-2 rounded-full text-[13px] font-semibold whitespace-nowrap border shrink-0 transition-all", i === 1 ? "bg-white text-black border-white" : "bg-[#1A1A1A] text-gray-400 border-white/5 hover:border-white/20")}>
            {chip}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 flex-1">
        {[
          { title: "Compiler Design Unit 1-5", type: "PDF", size: "12 MB", uploader: "Admin Verified" },
          { title: "Web Tech 2023 PYQ Solved", type: "PDF", size: "4 MB", uploader: "Admin Verified" },
          { title: "Machine Learning Lab Manual", type: "DOCX", size: "1 MB", uploader: "Student Contrib" },
          { title: "Data Analytics Mid Exam Notes", type: "PDF", size: "8 MB", uploader: "Admin Verified" },
          { title: "Cloud Computing Cheat Sheet", type: "PNG", size: "2 MB", uploader: "Student Contrib" },
        ].map((file, i) => (
          <div key={i} className="bg-[#1A1A1A] border border-white/5 rounded-[20px] p-4 flex gap-4 items-start hover:bg-[#222] transition-colors cursor-pointer group">
            <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-inner", file.type === "PDF" ? "bg-red-500/10 text-red-400" : file.type === "DOCX" ? "bg-blue-500/10 text-blue-400" : "bg-emerald-500/10 text-emerald-400")}>
               <FileText className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
               <h4 className="text-[15px] font-bold text-white truncate group-hover:text-[var(--purple-400)] transition-colors">{file.title}</h4>
               <p className="text-[12px] text-gray-500 mt-1">{file.size} &middot; {file.type}</p>
               <div className="flex items-center mt-3 gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-[11px] font-medium text-emerald-500">{file.uploader}</span>
               </div>
            </div>
            <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-colors shrink-0">
               <Download className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function TeamFinderTab({ variants }: { variants: any }) {
  const chips = ['All Roles', 'Frontend Dev', 'Backend Dev', 'UI/UX Designer', 'AI/ML Engineer', 'App Dev']
  
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.4, ease: premiumEasing }}
      className="p-5 sm:p-8 flex flex-col min-h-full"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h3 className="text-[24px] sm:text-[28px] font-bold text-white">Find Teammates</h3>
        <button className="hidden sm:flex px-4 py-2 bg-white text-black font-bold rounded-xl text-[14px]">Create Request</button>
      </div>
      
      <div className="flex overflow-x-auto scrollbar-hide gap-2 mb-6 -mx-5 px-5 sm:mx-0 sm:px-0">
        {chips.map((chip, i) => (
          <button key={i} className={cn("px-4 py-2 rounded-full text-[13px] font-semibold whitespace-nowrap border shrink-0 transition-all", i === 0 ? "bg-white text-black border-white" : "bg-[#1A1A1A] text-gray-400 border-white/5 hover:border-white/20")}>
            {chip}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 flex-1">
        {[
          { name: "Rahul K.", role: "Full Stack Developer", clg: "VNR VJIET", searching: "Looking for UI Designer for Smart India Hackathon. Must know Figma.", skills: ["Next.js", "Node.js"] },
          { name: "Priya S.", role: "UI/UX Designer", clg: "CBIT", searching: "Need a flutter dev to build my app design for a college project.", skills: ["Figma", "Framer"] },
          { name: "Karthik M.", role: "AI Engineer", clg: "JNTUH", searching: "Building a GenAI wrapper. Need a frontend guy to make it look good.", skills: ["Python", "PyTorch"] },
          { name: "Ananya V.", role: "Frontend Dev", clg: "Vasavi", searching: "Looking for team to join Hacktoberfest open source contributions.", skills: ["React", "Tailwind"] },
        ].map((person, i) => (
          <div key={i} className="bg-[#1A1A1A] border border-white/5 rounded-[20px] p-5 flex flex-col hover:border-white/20 transition-colors group shadow-sm">
            <div className="flex gap-4 items-start mb-4">
               <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-orange-500 flex items-center justify-center shadow-inner shrink-0 text-white font-bold text-lg">{person.name.charAt(0)}</div>
               <div>
                 <h4 className="text-[17px] font-bold text-white leading-tight">{person.name}</h4>
                 <p className="text-[13px] text-[var(--purple-300)] font-medium mt-0.5">{person.role}</p>
                 <p className="text-[12px] text-gray-500 mt-0.5">{person.clg}</p>
               </div>
            </div>
            <div className="bg-[#222] rounded-xl p-3 mb-4">
               <p className="text-[13px] text-gray-300 leading-relaxed italic">"{person.searching}"</p>
            </div>
            <div className="flex flex-wrap gap-2 mb-5">
               {person.skills.map((skill, j) => (
                 <span key={j} className="text-[11px] font-semibold bg-white/5 text-gray-400 px-2.5 py-1 rounded-md border border-white/5">{skill}</span>
               ))}
            </div>
            <div className="mt-auto pt-4 border-t border-white/5 flex gap-2">
               <button className="flex-1 h-10 bg-white text-black font-bold rounded-xl text-[13px] hover:bg-gray-200 transition">Connect</button>
               <button className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 transition shrink-0"><MessageSquare className="w-4 h-4 text-white" /></button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
