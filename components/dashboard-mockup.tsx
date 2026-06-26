'use client'

import { motion } from 'framer-motion'
import {
  BookOpen,
  Briefcase,
  Compass,
  FolderGit2,
  Users,
  Search,
  Bell,
  Heart
} from 'lucide-react'
import { Logo } from '@/components/logo'

const navItems = [
  { icon: Compass, label: 'Discover', active: true },
  { icon: Briefcase, label: 'Opportunities' },
  { icon: FolderGit2, label: 'Projects' },
  { icon: BookOpen, label: 'Resources' },
  { icon: Users, label: 'Connect' },
]

export function DashboardMockup() {
  return (
    <div className="relative w-full max-w-[800px] aspect-[16/10] sm:aspect-[16/11]">
      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--purple-600)]/20 to-blue-500/20 rounded-[24px] blur-3xl" />
      <div className="relative w-full h-full rounded-[20px] sm:rounded-[24px] border border-white/40 bg-white/70 backdrop-blue2xl shadow-[0_24px_80px_rgba(0,0,0,0.07),0_0_0_1px_rgba(255,255,255,0.5)] overflow-hidden flex flex-col group">
        
        <div className="h-12 w-full border-b border-white/40 bg-white/40 flex items-center px-4 shrink-0 justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400/80 shadow-inner" />
            <div className="w-3 h-3 rounded-full bg-amber-400/80 shadow-inner" />
            <div className="w-3 h-3 rounded-full bg-emerald-400/80 shadow-inner" />
          </div>
          <div className="flex-1 max-w-[300px] mx-4">
            <div className="w-full h-7 rounded-md bg-white/50 border border-white/60 flex items-center justify-center px-3 text-[11px] font-medium text-gray-500 shadow-sm">
              app.naavik.in
            </div>
          </div>
          <div className="w-[52px]" />
        </div>

        <div className="flex flex-1 overflow-hidden">
          <div className="w-[180px] hidden sm:flex flex-col border-r border-white/40 bg-white/30 p-4">
            <div className="mb-6 px-2">
              <Logo className="h-15 w-auto" />
            </div>
            <div className="flex flex-col gap-1.5">
              {navItems.map((item, i) => (
                <div key={i} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${item.active ? 'bg-white shadow-sm text-[var(--purple-600)]' : 'text-gray-500 hover:bg-white/50 hover:text-gray-900'}`}>
                  <item.icon size={16} className={item.active ? 'text-[var(--purple-600)]' : 'text-gray-400'} />
                  {item.label}
                </div>
              ))}
            </div>
            
            <div className="mt-auto pt-4 border-t border-white/40 flex items-center gap-3 px-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[var(--purple-500)] to-blue-500 p-[2px]">
                <div className="w-full h-full rounded-full border-2 border-white overflow-hidden bg-white">
                  <img src="https://i.pravatar.cc/100?img=11" alt="Avatar" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] font-semibold text-gray-900 leading-tight">Student</span>
                <span className="text-[10px] text-gray-500 leading-tight">JNTUH</span>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-gradient-to-br from-gray-50/30 to-white/10 p-4 sm:p-6 flex flex-col gap-5 overflow-hidden">
            <div className="flex items-center justify-between shrink-0">
              <div className="w-full max-w-[240px] h-9 rounded-full bg-white border border-gray-100 shadow-sm flex items-center px-3">
                <Search size={14} className="text-gray-400 mr-2" />
                <span className="text-[12px] text-gray-400 font-medium">Search internships...</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-400 relative">
                  <Bell size={16} />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                </div>
              </div>
            </div>
            <div className="flex flex-1 gap-5 overflow-hidden relative">
              <div className="flex-1 flex flex-col gap-4">
                <motion.div 
                  className="bg-white rounded-[16px] p-4 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col gap-3 group-hover:-translate-y-1 transition-transform duration-500"
                  initial={false}
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-[var(--purple-50)] text-[var(--purple-600)] text-[10px] font-bold tracking-wider uppercase">Internship</span>
                    <Heart size={14} className="text-gray-300" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-gray-900 leading-tight">Frontend Developer Intern</h4>
                    <p className="text-[12px] text-gray-500 mt-1">TechCorp India • Hyderabad</p>
                  </div>
                  <div className="flex gap-2 mt-1 flex-wrap">
                    <span className="px-2 py-1 bg-gray-50 rounded text-[11px] font-medium text-gray-600 border border-gray-100">React</span>
                    <span className="px-2 py-1 bg-gray-50 rounded text-[11px] font-medium text-gray-600 border border-gray-100">Next.js</span>
                    <span className="px-2 py-1 bg-gray-50 rounded text-[11px] font-medium text-gray-600 border border-gray-100">₹15kmo</span>
                  </div>
                </motion.div>
                <motion.div 
                  className="bg-white rounded-[16px] p-4 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex items-start gap-3 group-hover:-translate-y-0.5 transition-transform duration-500 delay-75"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                    <BookOpen size={18} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[13px] font-bold text-gray-900">Data Structures & Algorithms</h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">Complete handwritten notes</p>
                    <div className="mt-2 h-1.5 w-24 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-400 w-[60%]" />
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="w-[180px] hidden lg:flex flex-col gap-4">
                <div className="bg-white rounded-[16px] p-4 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
                  <h5 className="text-[12px] font-bold text-gray-900 mb-3">Looking for Teammates</h5>
                  <div className="flex flex-col gap-3">
                    {[1, 2].map((i) => (
                      <div key={i} className="flex items-center gap-2">
                        <img src={`Https://i.pravatar.cc/100?img=${i+4}`} className="w-7 h-7 rounded-full bg-gray-200" alt="" />
                        <div className="flex flex-col">
                          <span className="text-[11px] font-semibold text-gray-800">Hackathon</span>
                          <span className="text-[9px] text-gray-500">Needs UI/UX</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
