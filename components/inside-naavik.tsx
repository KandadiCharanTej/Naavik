'use client'

import { useState } from 'react'
import { Reveal, premiumEasing } from '@/components/reveal'
import { ADMIN_FORM_URL } from '@/lib/constants'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, BookOpen, Users, Trophy, Code, Calendar, FileText, Globe } from 'lucide-react'

export function InsideNaavik() {
  const [activeTab, setActiveTab] = useState<'growth' | 'college'>('growth')

  const growthFeatures = [
    {
      title: "Internships & Jobs",
      desc: "Verified opportunities from top startups and tech companies.",
      icon: Briefcase,
      tag: "2 days left",
      tagColor: "text-orange-500",
      previewContent: (
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-start">
            <span className="font-bold text-[14px] sm:text-[15px] text-gray-900">Frontend Developer Intern</span>
            <span className="text-[11px] sm:text-[12px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded shrink-0 ml-2">₹30k/mo</span>
          </div>
          <div className="text-[12px] text-gray-500 flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
            <span className="font-medium text-gray-700">Razorpay</span>
            <span>•</span>
            <span>Remote</span>
            <span>•</span>
            <span className="text-orange-600">Ends Mar 12</span>
          </div>
          <div className="flex gap-1.5 mt-1">
            <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">React</span>
            <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">TypeScript</span>
          </div>
        </div>
      )
    },
    {
      title: "Hackathons",
      desc: "Compete, build, and win prizes across TG & AP.",
      icon: Trophy,
      tag: "Open now",
      tagColor: "text-emerald-500",
      previewContent: (
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-start">
            <span className="font-bold text-[14px] sm:text-[15px] text-gray-900">T-Hub Innovation Hackathon</span>
            <span className="text-[11px] sm:text-[12px] font-semibold text-[var(--purple-600)] bg-[var(--purple-50)] px-1.5 py-0.5 rounded shrink-0 ml-2">₹1L Prize</span>
          </div>
          <div className="text-[12px] text-gray-500 flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
            <span className="font-medium text-gray-700">T-Hub Hyderabad</span>
            <span>•</span>
            <span>Team of 2-4</span>
          </div>
          <div className="flex gap-1.5 mt-1">
            <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">AI/ML</span>
            <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">FinTech</span>
          </div>
        </div>
      )
    },
    {
      title: "Team Finder",
      desc: "Find the perfect co-founders or teammates.",
      icon: Users,
      tag: "Trending",
      tagColor: "text-blue-500",
      previewContent: (
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-start">
            <span className="font-bold text-[14px] sm:text-[15px] text-gray-900">Rahul K.</span>
            <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100 shrink-0 ml-2">Looking for Dev</span>
          </div>
          <div className="text-[12px] text-gray-500 flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
            <span className="font-medium text-gray-700">CBIT, Hyderabad</span>
            <span>•</span>
            <span>3rd Year CSE</span>
          </div>
          <div className="text-[11px] text-gray-600 mt-0.5 line-clamp-1">
            Building an AI study planner for Smart India Hackathon. Need someone strong in Node.js and Postgres.
          </div>
        </div>
      )
    }
  ]

  const collegeFeatures = [
    {
      title: "DBMS Previous Year Paper 2024",
      desc: "Notes, PYQs, and lab manuals sorted by semester.",
      icon: BookOpen,
      tag: "📁 STUDY RESOURCE",
      tagColor: "text-[#065F46] bg-[#D1FAE5] border-[#6EE7B7]",
      previewContent: (
        <div className="flex flex-col gap-2">
          <div className="text-[13px] text-gray-500 font-medium">
            CSE · Semester 4<br />
            Uploaded by Senior Admin
          </div>
          <button className="w-full mt-1 bg-gray-900 text-white font-medium text-[13px] py-2 rounded-lg hover:bg-gray-800 transition-colors">
            Download PDF
          </button>
        </div>
      )
    },
    {
      title: "Convergence Tech Fest 2026",
      desc: "No more spam. Only verified announcements.",
      icon: Calendar,
      tag: "📢 CAMPUS UPDATE",
      tagColor: "text-blue-700 bg-blue-50 border-blue-200",
      previewContent: (
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start text-[13px] text-gray-500 font-medium">
            <div>
              IEEE Student Branch<br />
              Prize Pool: ₹30,000
            </div>
            <div className="text-right text-gray-900 font-semibold">
              March 15–18
            </div>
          </div>
          <button className="w-full mt-1 bg-gray-900 text-white font-medium text-[13px] py-2 rounded-lg hover:bg-gray-800 transition-colors">
            View Details
          </button>
        </div>
      )
    },
    {
      title: "Leaderboards",
      desc: "Earn points by contributing resources.",
      icon: Trophy,
      tag: "🏆 TOP CONTRIBUTORS — This Month",
      tagColor: "text-amber-700 bg-amber-50 border-amber-200",
      previewContent: (
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center text-[14px] font-medium text-gray-700 py-1 border-b border-gray-100">
            <span>E. Sai</span>
            <div className="flex items-center gap-2"><span className="font-bold text-gray-900">490 pts</span> 🥇</div>
          </div>
          <div className="flex justify-between items-center text-[14px] font-medium text-gray-700 py-1 mb-1">
            <span>V. Keerthi</span>
            <div className="flex items-center gap-2"><span className="font-bold text-gray-900">430 pts</span> 🥈</div>
          </div>
          <button className="w-full mt-1 bg-gray-50 text-gray-700 border border-gray-200 font-medium text-[13px] py-2 rounded-lg hover:bg-gray-100 transition-colors">
            See Full Board
          </button>
        </div>
      )
    }
  ]

  const activeFeatures = activeTab === 'growth' ? growthFeatures : collegeFeatures

  return (
    <section className="bg-[var(--bg-gray)] py-[64px] lg:py-[112px] relative border-t border-[var(--border)]" id="inside-naavik">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full border border-[var(--purple-200)] bg-[var(--purple-50)] px-3 py-1 text-[12px] font-semibold tracking-wide text-[var(--purple-700)] shadow-sm mb-6 uppercase">
              Inside Naavik
            </span>
            <h2 className="text-[36px] md:text-[56px] font-extrabold tracking-tight leading-[1.1] md:leading-[1.05] text-foreground max-w-[800px] mx-auto">
              Two spaces. <br className="md:hidden" />Everything you <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--purple-600)] to-[#A855F7]">need.</span>
            </h2>
            <p className="mt-6 text-[18px] text-muted-foreground leading-relaxed max-w-[640px] mx-auto font-medium">
              Two connected spaces — one for your growth, one for your college. Everything outside your classroom and everything inside your campus, together in one app.
            </p>
          </div>
        </Reveal>

        {/* Premium Interactive Tabs Interface */}
        <Reveal delay={100} className="w-full max-w-[1000px] mx-auto">
          <div className="bg-white border border-[var(--border)] rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden">
            
            {/* Tab Controls */}
            <div className="flex p-2 md:p-3 border-b border-[var(--border)] bg-gray-50/50">
              <div className="flex w-full md:w-auto bg-gray-100/80 p-1.5 rounded-[16px] border border-gray-200 gap-1 mx-auto md:mx-0">
                <button 
                  onClick={() => setActiveTab('growth')}
                  className={`relative flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 rounded-[12px] text-[14px] md:text-[15px] font-bold transition-all duration-300 flex-1 md:flex-none ${activeTab === 'growth' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  {activeTab === 'growth' && (
                    <motion.div layoutId="tab-bg" className="absolute inset-0 bg-white rounded-[12px] shadow-sm border border-gray-200" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
                  )}
                  <Globe className="w-4 h-4 relative z-10 shrink-0" />
                  <span className="relative z-10 truncate">Growth</span>
                </button>
                <button 
                  onClick={() => setActiveTab('college')}
                  className={`relative flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 rounded-[12px] text-[14px] md:text-[15px] font-bold transition-all duration-300 flex-1 md:flex-none ${activeTab === 'college' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  {activeTab === 'college' && (
                    <motion.div layoutId="tab-bg" className="absolute inset-0 bg-white rounded-[12px] shadow-sm border border-gray-200" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
                  )}
                  <BookOpen className="w-4 h-4 relative z-10 shrink-0" />
                  <span className="relative z-10 truncate">College</span>
                </button>
              </div>
            </div>

            {/* Tab Content Area */}
            <div className="p-6 md:p-10 relative min-h-[400px] bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: premiumEasing }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12"
                >
                  {/* Left: Description */}
                  <div className="md:col-span-5 flex flex-col justify-center">
                    {activeTab === 'growth' ? (
                      <>
                        <h3 className="text-[28px] font-extrabold text-foreground leading-tight mb-4">
                          Everything beyond your college.
                        </h3>
                        <p className="text-[16px] text-muted-foreground leading-relaxed mb-6 font-medium">
                          Find opportunities, build teams, and connect with peers from engineering campuses across Telangana & Andhra Pradesh.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {['100+ Opportunities Monthly', 'Project Showcase', 'Team Finder', 'Public Student Feed', 'Student Communities', 'Hackathons', 'Internships', 'Workshops', 'Startup Opportunities'].map((feature, i) => (
                            <span key={i} className="chip-growth">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[20px]">🏫</span>
                            <span className="eyebrow-label !mb-0">COLLEGE</span>
                          </div>
                          <h3 className="text-[28px] font-extrabold text-foreground leading-tight">
                            Everything inside your college.
                          </h3>
                        </div>
                        <p className="text-[16px] text-muted-foreground leading-relaxed mb-4 font-medium">
                          Notes, events, and resources — verified and organised.
                        </p>
                        <div className="mb-6">
                          <span className="inline-flex items-center px-3 py-1 bg-[#D1FAE5] text-[#065F46] border border-[#6EE7B7] rounded-full text-[12px] font-semibold">
                            Activated by a verified student admin
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {['📁 Notes', '📄 PYQs', '🧪 Lab Manuals', '📢 Announcements', '🎪 Clubs', '📅 Events', '🎓 Seniors', '🏆 Leaderboard', '📚 Resources'].map((feature, i) => (
                            <span key={i} className="chip-college">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Right: Rich Preview Cards (Bento style) */}
                  <div className="md:col-span-7 flex flex-col gap-4">
                    {activeFeatures.map((feature, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + (idx * 0.1), duration: 0.5, ease: premiumEasing }}
                        className="group flex gap-4 p-4 rounded-[16px] border border-[var(--border)] bg-gray-50/50 hover:bg-white hover:border-[var(--purple-300)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.08)] transition-all cursor-default"
                      >
                        <div className="w-12 h-12 rounded-[12px] bg-white border border-gray-200 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                          <feature.icon className="w-5 h-5 text-[var(--purple-600)]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="text-[16px] font-bold text-foreground">{feature.title}</h4>
                            <span className={`text-[11px] font-bold uppercase tracking-wider ${feature.tagColor} bg-white px-2 py-0.5 rounded-full shadow-sm border border-gray-100`}>
                              {feature.tag}
                            </span>
                          </div>
                          <p className="text-[13px] text-muted-foreground mb-3">{feature.desc}</p>
                          
                          {/* Inner Content Preview Card */}
                          <div className="bg-white border border-gray-100 rounded-lg p-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                            {feature.previewContent}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    
                    {activeTab === 'college' && (
                      <div className="trust-callout mt-2">
                        <div className="flex items-start gap-3">
                          <span className="text-[20px] mt-0.5">🛡️</span>
                          <div>
                            <h4 className="text-[14px] font-bold text-[#92400E] mb-1.5">Verified Workspaces Only</h4>
                            <p className="text-[13px] text-[#B45309] leading-relaxed font-medium">
                              Each campus workspace goes live only after a verified student admin activates and manages it.<br />
                              We don't create empty campuses.<br />
                              Quality over scale — always.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>

        {/* Apply CTA */}
        <Reveal delay={200}>
          <div className="mt-20 flex flex-col items-center justify-center text-center">
            <p className="text-[16px] font-medium text-[#374151] mb-3">Don't see your college?</p>
            <a 
              href={ADMIN_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[var(--border)] shadow-sm text-[15px] font-bold text-[var(--purple-600)] hover:border-[var(--purple-300)] hover:shadow-md transition-all"
            >
              Apply to bring Naavik to your campus
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
