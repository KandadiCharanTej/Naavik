'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Reveal, premiumEasing } from '@/components/reveal'
import { Home, Globe, Library, Users, FolderKanban, Search, Bell, Pin, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

export function ProductPreview() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'opportunities' | 'notes' | 'team'>('dashboard')

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
    <section className="bg-[#0A0A0A] text-white py-[96px] lg:py-[140px] relative overflow-hidden" id="product-preview">
      {/* Dark mode mesh gradient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--purple-600)] rounded-full blur-[180px] opacity-20 pointer-events-none"></div>

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 relative z-10">
        
        {/* Apple Style Header */}
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-[36px] md:text-[56px] font-extrabold tracking-tight leading-[1.1] md:leading-[1.05] text-white">
              This is what it looks like.
            </h2>
            <p className="mt-5 text-[18px] text-gray-400 max-w-[600px] mx-auto font-medium">
              Designed for how engineering students actually work.
            </p>
          </div>
        </Reveal>

        {/* Interactive Selector (Pill format) */}
        <Reveal delay={100} className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative flex items-center gap-2 px-5 py-2.5 md:py-2 rounded-full text-[14px] font-semibold transition-colors z-10",
                  activeTab === tab.id 
                    ? "text-black"
                    : "text-gray-400 hover:text-white"
                )}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white rounded-full shadow-md -z-10"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                <tab.icon className="w-4 h-4" />
                <span className="hidden md:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Massive Apple-Style Window */}
        <Reveal delay={200}>
          <motion.div 
            className="w-full max-w-[1200px] mx-auto rounded-[24px] overflow-hidden border border-white/20 bg-[#0F0F0F] shadow-[0_40px_100px_rgba(0,0,0,0.5)] ring-1 ring-white/10"
            animate={{ scale: [0.98, 1], y: [20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.8, ease: premiumEasing }}
          >
            {/* macOS Window Controls */}
            <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10 bg-[#1A1A1A]">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/30"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/30"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/30"></div>
              </div>
              <div className="mx-auto w-[240px] h-7 bg-black/40 rounded-md border border-white/5 flex items-center justify-center text-[12px] text-gray-400 font-semibold tracking-wide">
                <Search className="w-3 h-3 mr-2 opacity-50" />
                naavik.in/workspace
              </div>
            </div>

            {/* Inner Dashboard View */}
            <div className="relative w-full aspect-[16/10] md:aspect-[16/9] bg-[#0F0F0F] flex overflow-hidden">
              
              {/* Sidebar */}
              <div className="w-[72px] bg-[#0A0A0A] border-r border-white/5 flex-col items-center py-6 gap-6 hidden sm:flex shrink-0">
                <div className="mb-4">
                  <Image src="/dark-logo.png" alt="Naavik" width={28} height={28} className="object-contain opacity-90" />
                </div>
                <button className={`p-2.5 rounded-xl transition-all ${activeTab === 'dashboard' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}><Home className="w-5 h-5" /></button>
                <button className={`p-2.5 rounded-xl transition-all ${activeTab === 'opportunities' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}><Globe className="w-5 h-5" /></button>
                <button className={`p-2.5 rounded-xl transition-all ${activeTab === 'notes' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}><Library className="w-5 h-5" /></button>
                <button className={`p-2.5 rounded-xl transition-all ${activeTab === 'team' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}><Users className="w-5 h-5" /></button>
                <div className="flex-1"></div>
                <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700"></div>
              </div>

              {/* Dynamic Content Area */}
              <div className="flex-1 bg-[#141414] relative overflow-hidden">
                <AnimatePresence mode="wait">
                  
                  {activeTab === 'dashboard' && (
                    <motion.div
                      key="dashboard"
                      variants={tabContentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.4, ease: premiumEasing }}
                      className="absolute inset-0 p-6 md:p-8 flex flex-col"
                    >
                      <h3 className="text-[24px] font-bold text-white mb-6">Good morning, Student</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
                        
                        {/* Feed Column */}
                        <div className="md:col-span-2 flex flex-col gap-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[14px] font-semibold text-gray-400">Your Feed</span>
                            <span className="text-[12px] bg-white/10 px-2 py-1 rounded text-white cursor-pointer hover:bg-white/20 transition">Filter</span>
                          </div>
                          
                          {/* Feed Item 1 */}
                          <div className="bg-[#1A1A1A] border border-white/5 rounded-[16px] p-5 hover:bg-[#222] transition-colors cursor-pointer group">
                            <div className="flex justify-between items-center mb-3">
                              <span className="text-[11px] font-bold text-orange-400 uppercase tracking-wider bg-orange-400/10 px-2 py-1 rounded">2 days left</span>
                            </div>
                            <h4 className="text-[18px] font-semibold text-white mb-2 group-hover:text-[var(--purple-400)] transition-colors">Razorpay Full-Stack Intern</h4>
                            <p className="text-[14px] text-gray-400 mb-4">Remote &middot; ₹35,000/month</p>
                            <div className="h-px bg-white/5 mb-4"></div>
                            <button className="text-[13px] font-semibold text-white flex items-center">Apply Now <ChevronRight className="w-4 h-4 ml-1" /></button>
                          </div>

                          {/* Feed Item 2 */}
                          <div className="bg-[#1A1A1A] border border-white/5 rounded-[16px] p-5 hover:bg-[#222] transition-colors cursor-pointer group">
                            <div className="flex justify-between items-center mb-3">
                              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider bg-emerald-400/10 px-2 py-1 rounded">Campus Event</span>
                            </div>
                            <h4 className="text-[18px] font-semibold text-white mb-2 group-hover:text-[var(--purple-400)] transition-colors">IEEE Convergence Fest Registration</h4>
                            <p className="text-[14px] text-gray-400">March 15-18 &middot; Prize Pool: ₹30,000</p>
                          </div>
                        </div>

                        {/* Right Sidebar Column */}
                        <div className="hidden md:flex flex-col gap-6">
                          <div className="bg-[var(--purple-900)]/30 border border-[var(--purple-500)]/30 rounded-[16px] p-5">
                            <h4 className="text-[14px] font-bold text-[var(--purple-300)] uppercase tracking-wider mb-3">Priority</h4>
                            <p className="text-[15px] font-medium text-white mb-2">DBMS Exam in 3 days</p>
                            <p className="text-[13px] text-[var(--purple-200)] mb-4">PYQs have been updated.</p>
                            <button className="w-full py-2 bg-white text-black text-[13px] font-bold rounded-lg hover:bg-gray-200 transition">View Material</button>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'opportunities' && (
                    <motion.div
                      key="opportunities"
                      variants={tabContentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.4, ease: premiumEasing }}
                      className="absolute inset-0 p-6 md:p-8 flex flex-col"
                    >
                      <div className="flex justify-between items-center mb-8">
                        <h3 className="text-[24px] font-bold text-white">Global Opportunities</h3>
                        <div className="flex gap-2">
                          <span className="px-3 py-1.5 bg-[#222] border border-white/10 rounded-lg text-[13px]">Branch: CSE</span>
                          <span className="px-3 py-1.5 bg-[#222] border border-white/10 rounded-lg text-[13px]">Type: Internships</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 flex-1">
                        {[1, 2, 3, 4].map(i => (
                          <div key={i} className="bg-[#1A1A1A] border border-white/5 rounded-[16px] p-5 flex flex-col hover:border-white/20 transition-colors">
                            <div className="w-10 h-10 rounded-lg bg-[#333] mb-4"></div>
                            <h4 className="text-[16px] font-bold text-white">Software Engineer Intern</h4>
                            <p className="text-[13px] text-gray-400 mt-1">Tech Company &middot; Remote</p>
                            <div className="mt-auto pt-4 flex justify-between items-center">
                              <span className="text-[12px] bg-white/10 px-2 py-1 rounded text-white">Apply</span>
                              <span className="text-[11px] text-gray-500">2d left</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Fallback for Notes/Team to keep code clean */}
                  {(activeTab === 'notes' || activeTab === 'team') && (
                    <motion.div
                      key="other"
                      variants={tabContentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.4, ease: premiumEasing }}
                      className="absolute inset-0 p-6 md:p-8 flex items-center justify-center"
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4 border border-white/10">
                          {activeTab === 'notes' ? <Library className="w-8 h-8 text-gray-400" /> : <Users className="w-8 h-8 text-gray-400" />}
                        </div>
                        <h3 className="text-[20px] font-bold text-white mb-2">
                          {activeTab === 'notes' ? 'Semester-Sorted Vault' : 'Find Your Next Co-founder'}
                        </h3>
                        <p className="text-[14px] text-gray-400 max-w-[300px] mx-auto">
                          Select the tab to experience the smooth transition and premium layout styling.
                        </p>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </Reveal>

      </div>
    </section>
  )
}
