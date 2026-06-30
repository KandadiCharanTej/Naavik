'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Reveal, premiumEasing } from '@/components/animations/reveal'
import {
  Home,
  Globe,
  Library,
  Users,
  Search,
  Bell,
  Bookmark,
  Download,
  MessageSquare,
  Filter,
  ArrowUpRight,
  Flame,
  Clock,
  FileText,
  CheckCircle2,
  Award,
  Send,
  Heart,
  Share2,
  Lock,
  Link2,
  ThumbsUp,
  User,
  Settings,
  BookOpen,
  Rocket,
} from 'lucide-react'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  )
}
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

// Define interfaces for tabs
type TabId = 'home' | 'growth' | 'college' | 'profile'
type GrowthSubTab = 'opportunities' | 'project_hub' | 'connect' | 'growth_feed'
type CollegeSubTab = 'college_updates' | 'college_feed' | 'study_vault' | 'events_clubs'

export function ProductPreview() {
  const [activeTab, setActiveTab] = useState<TabId>('home')
  const [growthTab, setGrowthTab] = useState<GrowthSubTab>('opportunities')
  const [collegeTab, setCollegeTab] = useState<CollegeSubTab>('college_updates')

  // Interactive mockup states
  const [connectedUsers, setConnectedUsers] = useState<Record<string, 'idle' | 'loading' | 'connected'>>({})
  const [chatUser, setChatUser] = useState<string | null>(null)
  const [chatMessages, setChatMessages] = useState<Record<string, { sender: string; text: string }[]>>({
    'Rahul K.': [
      { sender: 'You', text: 'Hey Rahul, saw your post looking for a backend developer for SIH. Is the slot open?' },
      { sender: 'Rahul K.', text: 'Hey Sai! Yes it is. We are building in Node.js/PostgreSQL. Send your GitHub link!' }
    ],
    'Priya S.': [
      { sender: 'You', text: 'Hi Priya, I saw your design portfolio on Naavik. Your Figma files look amazing.' },
      { sender: 'Priya S.', text: 'Thank you Sai! Down to collaborate on any projects you are building.' }
    ]
  })
  const [currentMessageText, setCurrentMessageText] = useState('')
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({})
  const [savedItems, setSavedItems] = useState<Record<string, boolean>>({})
  const [pollVotes, setPollVotes] = useState<Record<string, string>>({})

  const mainTabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'growth', label: 'Growth', icon: Globe },
    { id: 'college', label: 'College', icon: BookOpen },
    { id: 'profile', label: 'Profile', icon: User },
  ] as const

  const tabContentVariants = {
    hidden: { opacity: 0, scale: 0.985, y: 4 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 1.015, y: -4 },
  }

  // Handle Connect Click Simulation
  const handleConnectClick = (userName: string) => {
    setConnectedUsers(prev => ({ ...prev, [userName]: 'loading' }))
    setTimeout(() => {
      setConnectedUsers(prev => ({ ...prev, [userName]: 'connected' }))
    }, 600)
  }

  // Handle Send Chat Message Simulation
  const handleSendMessage = (userName: string) => {
    if (!currentMessageText.trim()) return
    setChatMessages(prev => ({
      ...prev,
      [userName]: [...(prev[userName] || []), { sender: 'You', text: currentMessageText }]
    }))
    setCurrentMessageText('')
    // Mock response after 1 second
    setTimeout(() => {
      setChatMessages(prev => ({
        ...prev,
        [userName]: [...(prev[userName] || []), { sender: userName, text: 'Awesome! Let\'s catch up on Slack/WhatsApp.' }]
      }))
    }, 1000)
  }

  return (
    <section
      className="naavik-section-connector relative overflow-hidden bg-[#030306] pb-0 pt-20 text-white sm:pt-24 lg:pt-32"
      id="product-preview"
    >
      {/* Visual background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white via-[#F8F8FA] to-transparent opacity-[0.03]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(124,58,237,0.35),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 30%, black, transparent)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <Reveal>
            <div className="max-w-2xl lg:pb-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400">
                Live Preview
              </p>
              <h2 className="mt-4 text-[2.25rem] font-extrabold tracking-[-0.04em] text-balance sm:text-[3rem] lg:text-[3.5rem] lg:leading-[1.02]">
                Explore the actual product.
              </h2>
              <p className="mt-5 max-w-lg text-[16px] font-medium leading-relaxed text-gray-400 sm:text-[18px]">
                Interact with Naavik tabs and walkthrough screens exactly as you would inside our mobile and web apps.
              </p>
            </div>
          </Reveal>

          {/* Desktop tab rails switcher */}
          <Reveal delay={60} className="hidden lg:block">
            <div className="naavik-glass-dark flex gap-1.5 rounded-2xl p-1.5 border border-white/5 bg-white/[0.02] backdrop-blur-xl">
              {mainTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id)
                    setChatUser(null)
                  }}
                  className={cn(
                    'flex items-center gap-2 rounded-xl px-4 py-2.5 text-[13px] font-bold transition-all duration-300 cursor-pointer',
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

        {/* Mobile Tab Strip switcher */}
        <Reveal delay={40} className="mt-8 lg:hidden">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {mainTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id)
                  setChatUser(null)
                }}
                className={cn(
                  'flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-[13px] font-bold transition-all border cursor-pointer',
                  activeTab === tab.id
                    ? 'bg-white text-black border-white'
                    : 'naavik-glass-dark border-white/5 text-gray-400',
                )}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Browser Mockup Canvas frame container */}
        <Reveal delay={100}>
          <div className="relative mt-10 lg:mt-14 lg:-mx-8 xl:-mx-16">
            <div className="absolute -left-4 top-8 hidden h-48 w-64 rounded-3xl naavik-glass-dark shadow-[var(--shadow-dark)] lg:block xl:-left-12 opacity-30" />
            <div className="absolute -right-2 bottom-24 hidden h-36 w-52 rounded-3xl border border-purple-500/20 bg-purple-600/10 shadow-[0_0_80px_rgba(124,58,237,0.15)] lg:block xl:-right-8" />
            <div className="absolute left-1/2 top-1/2 hidden h-[70%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.1)_0%,transparent_70%)] blur-3xl lg:block" />

            <div className="naavik-stage-perspective relative">
              <div className="naavik-stage-tilt relative flex w-full flex-col overflow-hidden rounded-[20px] border border-white/10 bg-[#0A0A0E] shadow-[0_60px_120px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.05)] sm:rounded-[32px] h-[640px] sm:h-[680px] lg:h-[720px]">
                
                {/* macOS Mock browser header bar */}
                <div className="hidden sm:flex items-center gap-2 px-6 py-4.5 border-b border-white/10 bg-[#121215]">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/20"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/20"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/20"></div>
                  </div>
                  <div className="mx-auto w-[320px] h-8 bg-black/40 rounded-lg border border-white/5 flex items-center justify-center text-[12px] text-gray-400 font-bold tracking-wide shadow-inner">
                    <Search className="w-3.5 h-3.5 mr-2 opacity-40" />
                    naavik.in/{activeTab}{activeTab === 'growth' ? `/${growthTab}` : activeTab === 'college' ? `/${collegeTab}` : ''}
                  </div>
                </div>

                {/* Dashboard Inner App Workspace */}
                <div className="relative w-full flex-1 flex overflow-hidden bg-[#0A0A0E]">
                  {/* Left Sidebar Menu */}
                  <div className="w-[88px] bg-[#050508] border-r border-white/5 flex flex-col items-center py-6 gap-8 hidden sm:flex shrink-0 z-20">
                    <div className="relative h-9 w-9 overflow-hidden rounded-full bg-gradient-to-tr from-purple-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-inner">
                      N
                    </div>

                    <div className="flex flex-col gap-3 w-full px-3">
                      {mainTabs.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => {
                            setActiveTab(tab.id)
                            setChatUser(null)
                          }}
                          className={cn(
                            'p-3.5 rounded-2xl transition-all w-full flex items-center justify-center relative group cursor-pointer',
                            activeTab === tab.id ? 'bg-white/10 text-white shadow-inner border border-white/5' : 'text-gray-500 hover:text-gray-300 hover:bg-white/[0.02]'
                          )}
                        >
                          <tab.icon className="w-5 h-5 relative z-10" />
                          <div className="absolute left-full ml-4 px-2.5 py-1.5 bg-white text-black text-[11px] font-bold rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap shadow-xl transition-opacity duration-200">
                            {tab.label}
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="flex-1" />

                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 border border-white/20 shadow-md flex items-center justify-center text-sm font-extrabold cursor-pointer hover:scale-105 transition-transform">
                      S
                    </div>
                  </div>

                  {/* Dynamic Scrollable Content Workspace */}
                  <div className="flex-1 overflow-y-auto scrollbar-hide pb-[80px] sm:pb-0 relative bg-[#0C0C10]/95">
                    <AnimatePresence mode="wait">
                      {activeTab === 'home' && (
                        <HomeTab
                          key="home"
                          variants={tabContentVariants}
                          saved={savedItems}
                          setSaved={setSavedItems}
                          liked={likedItems}
                          setLiked={setLikedItems}
                        />
                      )}
                      {activeTab === 'growth' && (
                        <GrowthTab
                          key="growth"
                          variants={tabContentVariants}
                          subTab={growthTab}
                          setSubTab={setGrowthTab}
                          connected={connectedUsers}
                          setConnected={handleConnectClick}
                          chatUser={chatUser}
                          setChatUser={setChatUser}
                          saved={savedItems}
                          setSaved={setSavedItems}
                          liked={likedItems}
                          setLiked={setLikedItems}
                        />
                      )}
                      {activeTab === 'college' && (
                        <CollegeTab
                          key="college"
                          variants={tabContentVariants}
                          subTab={collegeTab}
                          setSubTab={setCollegeTab}
                          saved={savedItems}
                          setSaved={setSavedItems}
                          liked={likedItems}
                          setLiked={setLikedItems}
                          pollVotes={pollVotes}
                          setPollVotes={setPollVotes}
                        />
                      )}
                      {activeTab === 'profile' && (
                        <ProfileTab key="profile" variants={tabContentVariants} />
                      )}
                    </AnimatePresence>

                    {/* Interactive chat overlay widget */}
                    {chatUser && (
                      <div className="absolute bottom-4 right-4 w-[320px] h-[360px] rounded-2xl border border-white/10 bg-[#16161A] shadow-2xl flex flex-col z-50">
                        <div className="p-3 border-b border-white/5 flex items-center justify-between bg-black/25">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center font-bold text-white text-xs">
                              {chatUser.charAt(0)}
                            </div>
                            <div>
                              <p className="text-[13px] font-bold text-white leading-none">{chatUser}</p>
                              <p className="text-[10px] text-emerald-400 mt-1 font-semibold">Online</p>
                            </div>
                          </div>
                          <button
                            onClick={() => setChatUser(null)}
                            className="text-gray-400 hover:text-white font-bold text-[13px] px-2 py-1 cursor-pointer"
                          >
                            ✕
                          </button>
                        </div>
                        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2.5">
                          {(chatMessages[chatUser] || []).map((msg, idx) => (
                            <div
                              key={idx}
                              className={cn(
                                'max-w-[80%] rounded-xl p-2.5 text-[12.5px] leading-relaxed',
                                msg.sender === 'You'
                                  ? 'bg-purple-600 text-white self-end rounded-tr-none'
                                  : 'bg-white/5 text-gray-200 self-start rounded-tl-none border border-white/5'
                              )}
                            >
                              {msg.text}
                            </div>
                          ))}
                        </div>
                        <div className="p-3 border-t border-white/5 bg-black/10 flex gap-2">
                          <input
                            type="text"
                            value={currentMessageText}
                            onChange={(e) => setCurrentMessageText(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(chatUser)}
                            placeholder="Type a message..."
                            className="flex-1 bg-white/5 rounded-xl border border-white/10 px-3.5 py-1.5 text-[12px] text-white focus:outline-none focus:border-purple-500"
                          />
                          <button
                            onClick={() => handleSendMessage(chatUser)}
                            className="w-8 h-8 rounded-xl bg-purple-600 hover:bg-purple-700 flex items-center justify-center shrink-0 cursor-pointer text-white"
                          >
                            <Send className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile screen Bottom Navigation Bar */}
                <div className="sm:hidden absolute bottom-0 left-0 right-0 bg-[#050508]/95 backdrop-blur-2xl border-t border-white/10 pb-safe z-50">
                  <div className="flex items-center justify-between px-6 py-2.5">
                    {mainTabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => {
                          setActiveTab(tab.id)
                          setChatUser(null)
                        }}
                        className={cn(
                          'flex flex-col items-center justify-center gap-1.5 min-w-[56px] cursor-pointer',
                          activeTab === tab.id ? 'text-white' : 'text-gray-500'
                        )}
                      >
                        <div className={cn('p-1.5 rounded-full transition-colors', activeTab === tab.id && 'bg-white/10')}>
                          <tab.icon className="w-5 h-5" />
                        </div>
                        <span className="text-[9px] font-bold uppercase tracking-wider">{tab.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>
            
            <div aria-hidden className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(124,58,237,0.15),transparent)]" />
          </div>
        </Reveal>
      </div>
      <div aria-hidden className="pointer-events-none relative z-0 mt-8 h-16 bg-gradient-to-b from-transparent to-white sm:h-24" />
    </section>
  )
}

/* -------------------------------------------------------------------------------------------------
 * TAB SCREEN SUB-COMPONENTS
 * -----------------------------------------------------------------------------------------------*/

// 🏠 HOME TAB
function HomeTab({
  variants,
  saved,
  setSaved,
  liked,
  setLiked,
}: {
  variants: any
  saved: Record<string, boolean>
  setSaved: any
  liked: Record<string, boolean>
  setLiked: any
}) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.28, ease: premiumEasing }}
      className="p-5 sm:p-7 flex flex-col min-h-full gap-6 text-left"
    >
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-white/5 pb-4">
        <div>
          <h3 className="text-[20px] sm:text-[24px] font-bold text-white tracking-tight">Good morning, Student 👋</h3>
          <p className="text-[12.5px] text-gray-500 mt-1 font-semibold">B.Tech CSE &middot; 3rd Year &middot; CBIT Hyderabad</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-purple-950/40 border border-purple-500/20 rounded-xl px-3 py-1.5 flex items-center gap-2">
            <Flame className="w-4 h-4 text-purple-400 animate-bounce" />
            <span className="text-[11.5px] font-extrabold text-purple-300">12 Days Streak</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left main feed */}
        <div className="lg:col-span-8 flex flex-col gap-5">
          {/* Quick Actions */}
          <div className="bg-[#101015] border border-white/5 rounded-2xl p-4">
            <h4 className="text-[12px] font-extrabold text-gray-400 uppercase tracking-wider mb-3">Quick Actions</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {['Upload Resource', 'Find Hack Team', 'Search Internships'].map((action, idx) => (
                <button
                  key={idx}
                  className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5 text-[12px] font-bold text-gray-300 hover:bg-white/5 hover:text-white transition-colors cursor-pointer text-center"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>

          {/* Recommended Opportunity */}
          <div className="bg-[#101015] border border-white/5 rounded-2xl p-5 relative overflow-hidden group">
            <div className="flex justify-between items-start mb-3.5">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center font-bold text-white text-lg">G</div>
                <div>
                  <h4 className="text-[15px] font-extrabold text-white group-hover:text-purple-400 transition-colors">Software Engineering Intern</h4>
                  <p className="text-[12px] text-gray-500 font-semibold mt-0.5">Google · Bengaluru (Hybrid)</p>
                </div>
              </div>
              <button
                onClick={() => setSaved((p: any) => ({ ...p, google: !p.google }))}
                className="p-1.5 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white cursor-pointer transition-colors"
              >
                <Bookmark className={cn('w-4 h-4', saved.google && 'fill-purple-500 text-purple-500')} />
              </button>
            </div>
            <p className="text-[13px] text-gray-400 leading-relaxed line-clamp-2">
              Join the Android Core team to build next-generation platform interfaces. Looking for knowledge in Java/Kotlin.
            </p>
            <div className="flex items-center justify-between mt-4 pt-3.5 border-t border-white/5">
              <span className="text-[12px] font-bold text-emerald-500">₹35k/mo &middot; 4 weeks left</span>
              <button className="rounded-lg bg-purple-600 hover:bg-purple-700 px-3.5 py-1.5 text-[11px] font-bold text-white cursor-pointer transition-colors">
                Apply Now
              </button>
            </div>
          </div>

          {/* Today's Events */}
          <div className="bg-[#101015] border border-white/5 rounded-2xl p-5">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-[12px] font-extrabold text-gray-400 uppercase tracking-wider">Today&apos;s Events</h4>
              <span className="text-[10px] bg-red-500/10 text-red-400 border border-red-500/10 px-2 py-0.5 rounded font-extrabold">LIVE NOW</span>
            </div>
            <div className="flex items-center justify-between bg-white/[0.01] border border-white/5 rounded-xl p-3.5">
              <div className="min-w-0">
                <h5 className="text-[13.5px] font-bold text-white truncate">Intro to Web3 & Smart Contracts</h5>
                <p className="text-[11.5px] text-gray-500 font-semibold mt-0.5">GDSC CBIT &bull; Seminar Hall 2 &bull; 4:00 PM</p>
              </div>
              <button className="rounded-lg border border-purple-500/30 text-purple-400 px-3 py-1.5 text-[11px] font-bold hover:bg-purple-500 hover:text-white transition-all cursor-pointer">
                RSVP
              </button>
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-5">
          {/* Streaks & Contributions */}
          <div className="bg-[#101015] border border-white/5 rounded-2xl p-4 flex flex-col gap-3">
            <h4 className="text-[12px] font-extrabold text-gray-400 uppercase tracking-wider border-b border-white/5 pb-2">Your Dashboard</h4>
            <div className="flex items-center justify-between">
              <span className="text-[13px] text-gray-400 font-semibold">Contribution Score</span>
              <span className="text-[14px] font-extrabold text-white">490 pts</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[13px] text-gray-400 font-semibold">Rank in Campus</span>
              <span className="text-[14px] font-extrabold text-purple-400">#4 (Top 1%)</span>
            </div>
          </div>

          {/* Continue Learning */}
          <div className="bg-[#101015] border border-white/5 rounded-2xl p-4">
            <h4 className="text-[12px] font-extrabold text-gray-400 uppercase tracking-wider mb-3">Continue Learning</h4>
            <div className="flex gap-3 items-center bg-white/[0.01] hover:bg-white/[0.03] p-2 rounded-xl transition border border-white/5 cursor-pointer">
              <div className="w-9 h-9 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
                <FileText className="w-5.5 h-5.5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[12.5px] font-bold text-white truncate">Normalization_Guide.pdf</p>
                <p className="text-[10px] text-gray-500 mt-0.5">Unit 3 &bull; Opened 2h ago</p>
              </div>
            </div>
          </div>

          {/* Upcoming deadlines */}
          <div className="bg-[#101015] border border-white/5 rounded-2xl p-4">
            <h4 className="text-[12px] font-extrabold text-gray-400 uppercase tracking-wider mb-3">Upcoming Deadlines</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                <div>
                  <p className="text-[12.5px] font-bold text-white">DBMS Lab Assignment 4 Submission</p>
                  <p className="text-[10px] text-orange-400 mt-0.5">Tomorrow, 11:59 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                <div>
                  <p className="text-[12.5px] font-bold text-white">Smart India Hackathon Registration</p>
                  <p className="text-[10px] text-purple-400 mt-0.5">Ends July 25</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// 🌱 GROWTH TAB
function GrowthTab({
  variants,
  subTab,
  setSubTab,
  connected,
  setConnected,
  chatUser,
  setChatUser,
  saved,
  setSaved,
  liked,
  setLiked,
}: {
  variants: any
  subTab: GrowthSubTab
  setSubTab: (t: GrowthSubTab) => void
  connected: Record<string, string>
  setConnected: (n: string) => void
  chatUser: string | null
  setChatUser: (n: string | null) => void
  saved: Record<string, boolean>
  setSaved: any
  liked: Record<string, boolean>
  setLiked: any
}) {
  const subTabs = [
    { id: 'opportunities' as const, label: 'Opportunities' },
    { id: 'project_hub' as const, label: 'Project Hub' },
    { id: 'connect' as const, label: 'Connect' },
    { id: 'growth_feed' as const, label: 'Growth Feed' },
  ]

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.28, ease: premiumEasing }}
      className="p-5 sm:p-7 flex flex-col min-h-full gap-5 text-left"
    >
      {/* Secondary Sub Navigation Tabs */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide border-b border-white/5 pb-2.5 -mx-5 px-5 sm:mx-0 sm:px-0 shrink-0">
        {subTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setSubTab(tab.id)
              setChatUser(null)
            }}
            className={cn(
              'px-4 py-2 rounded-xl text-[12.5px] font-bold transition-all border whitespace-nowrap cursor-pointer',
              subTab === tab.id
                ? 'bg-purple-600/10 text-purple-400 border-purple-500/20'
                : 'bg-transparent text-gray-500 border-transparent hover:text-gray-300'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* Subtab content switcher */}
        {subTab === 'opportunities' && (
          <motion.div key="opps" variants={variants} initial="hidden" animate="visible" exit="exit" className="space-y-4">
            <div className="flex flex-wrap gap-2 mb-2">
              {['All Opportunities', 'Internships', 'Jobs', 'Hackathons', 'Scholarships', 'Open Source', 'Saved'].map((chip, idx) => (
                <span key={idx} className={cn('px-3.5 py-1.5 rounded-full text-[11px] font-extrabold border', idx === 0 ? 'bg-white text-black border-white' : 'bg-white/[0.02] text-gray-400 border-white/5')}>{chip}</span>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 'op1', title: 'SDE Intern', company: 'Amazon', loc: 'Bengaluru (Hybrid)', sal: '₹45k/mo', type: 'Internship', skill: ['React', 'Node.js'] },
                { id: 'op2', title: 'Frontend Developer', company: 'Zomato', loc: 'Remote', sal: '12 LPA', type: 'Full-time', skill: ['Next.js', 'Framer Motion'] },
                { id: 'op3', title: 'Generative AI Challenge', company: 'Microsoft', loc: 'Virtual', sal: '₹5L Prize', type: 'Hackathon', skill: ['Python', 'OpenAI API'] },
                { id: 'op4', title: 'OpenSource Contributor', company: 'Naavik Core', loc: 'Remote', sal: 'Unpaid', type: 'Open Source', skill: ['TypeScript', 'GraphQL'] },
              ].map((opp) => (
                <div key={opp.id} className="bg-[#101015] border border-white/5 rounded-2xl p-4.5 hover:border-white/10 transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-[10px] font-extrabold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/10 uppercase tracking-wider">{opp.type}</span>
                      <button
                        onClick={() => setSaved((p: any) => ({ ...p, [opp.id]: !p[opp.id] }))}
                        className="p-1 rounded-lg hover:bg-white/5 text-gray-500 hover:text-white cursor-pointer"
                      >
                        <Bookmark className={cn('w-4 h-4', saved[opp.id] && 'fill-purple-500 text-purple-500')} />
                      </button>
                    </div>
                    <h4 className="text-[14.5px] font-extrabold text-white group-hover:text-purple-400 transition-colors leading-snug">{opp.title}</h4>
                    <p className="text-[12px] text-gray-500 font-semibold mt-0.5">{opp.company} &middot; {opp.loc}</p>
                    <div className="flex gap-1.5 mt-3">
                      {opp.skill.map((s, idx) => (
                        <span key={idx} className="rounded bg-white/5 px-2 py-0.5 text-[9px] text-gray-400 font-bold">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 pt-3.5 border-t border-white/5 flex justify-between items-center">
                    <span className="text-[12px] font-bold text-emerald-500">{opp.sal}</span>
                    <button className="rounded-lg bg-purple-600 hover:bg-purple-700 px-3.5 py-1.5 text-[11px] font-bold text-white cursor-pointer">Apply</button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {subTab === 'project_hub' && (
          <motion.div key="p_hub" variants={variants} initial="hidden" animate="visible" exit="exit" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 'proj1', title: 'Peer-to-Peer Delivery Hub', creator: 'Sai Teja (VNR VJIET)', stars: 12, forks: 3, tech: ['Flutter', 'Node.js', 'PostgreSQL'], des: 'Mobile app connecting students for local deliveries inside campus.' },
                { id: 'proj2', title: 'Naavik Admin Dashboard', creator: 'Rahul K. (Vasavi)', stars: 24, forks: 8, tech: ['Next.js', 'Supabase', 'Tailwind'], des: 'Full-featured server admin management panel for university workspaces.' },
              ].map((proj) => (
                <div key={proj.id} className="bg-[#101015] border border-white/5 rounded-2xl p-4.5 flex flex-col justify-between group">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[12.5px] font-extrabold text-white truncate max-w-[70%]">{proj.title}</span>
                      <div className="flex items-center gap-2 text-[11px] text-gray-500 font-bold shrink-0">
                        <span>⭐ {proj.stars}</span>
                        <span>🍴 {proj.forks}</span>
                      </div>
                    </div>
                    <p className="text-[10px] font-bold text-purple-400">By {proj.creator}</p>
                    <p className="text-[12px] text-gray-400 mt-2 leading-relaxed italic">"{proj.des}"</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {proj.tech.map((t, idx) => (
                        <span key={idx} className="rounded bg-white/5 px-2 py-0.5 text-[9px] text-gray-400 font-bold">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 pt-3.5 border-t border-white/5 flex gap-2">
                    <button className="flex-1 h-9 rounded-xl bg-purple-600 hover:bg-purple-700 text-[11.5px] font-bold text-white cursor-pointer transition-colors flex items-center justify-center gap-1.5">
                      <Rocket className="w-3.5 h-3.5" /> Demo
                    </button>
                    <button className="flex-1 h-9 rounded-xl border border-white/10 hover:border-white/20 text-[11.5px] font-bold text-gray-300 hover:text-white cursor-pointer transition-colors flex items-center justify-center gap-1.5">
                      <GithubIcon className="w-3.5 h-3.5" /> Fork
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {subTab === 'connect' && (
          <motion.div key="connect_tab" variants={variants} initial="hidden" animate="visible" exit="exit" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Rahul K.', clg: 'VNR VJIET &bull; CSE 3rd Year', skills: 'React, Node.js, SQL', project: 'SIH Hackathon Dashboard', looking: 'Frontend UI/UX Designer', availability: '10h/week' },
                { name: 'Priya S.', clg: 'CBIT &bull; ECE 4th Year', skills: 'Figma, Tailwind, Flutter', project: 'Campus Lost & Found Portal', looking: 'Backend Developer', availability: '15h/week' },
              ].map((p) => {
                const status = connected[p.name] || 'idle'
                return (
                  <div key={p.name} className="bg-[#101015] border border-white/5 rounded-2xl p-4.5 flex flex-col justify-between group">
                    <div>
                      <div className="flex gap-3 items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center font-bold text-white text-lg">
                          {p.name.charAt(0)}
                        </div>
                        <div>
                          <h5 className="text-[13.5px] font-extrabold text-white">{p.name}</h5>
                          <p className="text-[11px] text-gray-500 font-semibold mt-0.5" dangerouslySetInnerHTML={{ __html: p.clg }} />
                        </div>
                      </div>
                      <div className="space-y-1 text-[11.5px] text-gray-400 mt-2">
                        <div><span className="text-gray-600 font-bold">Skills:</span> {p.skills}</div>
                        <div><span className="text-gray-600 font-bold">Current Project:</span> {p.project}</div>
                        <div><span className="text-gray-600 font-bold">Looking For:</span> {p.looking}</div>
                        <div className="text-purple-400 font-bold">⚡ Available {p.availability}</div>
                      </div>
                    </div>
                    <div className="mt-4 pt-3.5 border-t border-white/5 flex gap-2">
                      <button
                        onClick={() => status === 'idle' && setConnected(p.name)}
                        className={cn(
                          'flex-1 h-9 rounded-xl text-[11.5px] font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5',
                          status === 'idle' && 'bg-purple-600 hover:bg-purple-700 text-white',
                          status === 'loading' && 'bg-purple-600/30 text-purple-300 pointer-events-none animate-pulse',
                          status === 'connected' && 'bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 pointer-events-none'
                        )}
                      >
                        {status === 'idle' && 'Connect'}
                        {status === 'loading' && 'Connecting...'}
                        {status === 'connected' && 'Connected ✓'}
                      </button>
                      {status === 'connected' && (
                        <button
                          onClick={() => setChatUser(p.name)}
                          className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center cursor-pointer text-white"
                        >
                          <MessageSquare className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        )}

        {subTab === 'growth_feed' && (
          <motion.div key="feed_tab" variants={variants} initial="hidden" animate="visible" exit="exit" className="space-y-4">
            {[
              { id: 'f1', author: 'Razorpay Recruiter', text: 'We are hiring Frontend Engineering Interns for our Bengaluru workspace! Apply via Naavik dashboard. React/TypeScript preferred.', likes: 42, comments: 14 },
              { id: 'f2', author: 'CBIT Hackathon Club', text: 'Congratulations to our students who finished top 3 in the National Web3 hackathon!', likes: 110, comments: 8 }
            ].map((post) => (
              <div key={post.id} className="bg-[#101015] border border-white/5 rounded-2xl p-4.5">
                <div className="flex gap-2.5 items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-purple-600/10 border border-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs">{post.author.charAt(0)}</div>
                  <div>
                    <h5 className="text-[12.5px] font-extrabold text-white">{post.author}</h5>
                    <p className="text-[10px] text-gray-600 font-semibold mt-0.5">2h ago</p>
                  </div>
                </div>
                <p className="text-[12.5px] text-gray-300 leading-relaxed">{post.text}</p>
                <div className="flex items-center gap-4 mt-4 pt-3.5 border-t border-white/5 text-[11.5px] text-gray-500 font-bold">
                  <button
                    onClick={() => setLiked((p: any) => ({ ...p, [post.id]: !p[post.id] }))}
                    className={cn('flex items-center gap-1 hover:text-white cursor-pointer transition-colors', liked[post.id] && 'text-purple-500 hover:text-purple-600')}
                  >
                    <Heart className={cn('w-3.5 h-3.5', liked[post.id] && 'fill-purple-500')} /> {post.likes + (liked[post.id] ? 1 : 0)}
                  </button>
                  <span className="flex items-center gap-1"><MessageSquare className="w-3.5 h-3.5" /> {post.comments}</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// 🎓 COLLEGE TAB
function CollegeTab({
  variants,
  subTab,
  setSubTab,
  saved,
  setSaved,
  liked,
  setLiked,
  pollVotes,
  setPollVotes,
}: {
  variants: any
  subTab: CollegeSubTab
  setSubTab: (t: CollegeSubTab) => void
  saved: Record<string, boolean>
  setSaved: any
  liked: Record<string, boolean>
  setLiked: any
  pollVotes: Record<string, string>
  setPollVotes: any
}) {
  const subTabs = [
    { id: 'college_updates' as const, label: 'College Updates' },
    { id: 'college_feed' as const, label: 'College Feed' },
    { id: 'study_vault' as const, label: 'Study Vault' },
    { id: 'events_clubs' as const, label: 'Events & Clubs' },
  ]

  const handleVote = (pollId: string, option: string) => {
    if (pollVotes[pollId]) return // single vote simulation
    setPollVotes((p: any) => ({ ...p, [pollId]: option }))
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.28, ease: premiumEasing }}
      className="p-5 sm:p-7 flex flex-col min-h-full gap-5 text-left"
    >
      {/* Secondary Sub Navigation Tabs */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide border-b border-white/5 pb-2.5 -mx-5 px-5 sm:mx-0 sm:px-0 shrink-0">
        {subTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSubTab(tab.id)}
            className={cn(
              'px-4 py-2 rounded-xl text-[12.5px] font-bold transition-all border whitespace-nowrap cursor-pointer',
              subTab === tab.id
                ? 'bg-purple-600/10 text-purple-400 border-purple-500/20'
                : 'bg-transparent text-gray-500 border-transparent hover:text-gray-300'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {subTab === 'college_updates' && (
          <motion.div key="updates" variants={variants} initial="hidden" animate="visible" exit="exit" className="space-y-4">
            {[
              { title: 'Convergence Tech Fest 2026 Registration Open', desc: 'CBIT IEEE Student branch announces the annual tech symposium. Cash prizes worth ₹1L.', badge: 'Fest Update' },
              { title: 'Mid-Exam Semester 4 Timetable Released', desc: 'Exams scheduled from Monday July 6. Check official PDF attachment.', badge: 'Exam Update' }
            ].map((up, idx) => (
              <div key={idx} className="bg-[#101015] border border-white/5 rounded-2xl p-4.5 flex flex-col gap-2 relative group hover:border-white/10 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/10 uppercase tracking-wider">{up.badge}</span>
                  <span className="text-[11px] font-bold text-gray-600">✓ Verified Official</span>
                </div>
                <h4 className="text-[14.5px] font-extrabold text-white mt-1 leading-snug">{up.title}</h4>
                <p className="text-[12.5px] text-gray-400 leading-relaxed font-semibold">{up.desc}</p>
                <div className="mt-3.5 flex justify-end gap-2">
                  <button className="rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white px-3.5 py-1.5 text-[11px] font-bold cursor-pointer">View PDF</button>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {subTab === 'college_feed' && (
          <motion.div key="c_feed" variants={variants} initial="hidden" animate="visible" exit="exit" className="space-y-4">
            {/* Poll Widget */}
            <div className="bg-[#101015] border border-white/5 rounded-2xl p-4.5 text-left">
              <span className="text-[10px] font-extrabold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/10 uppercase tracking-wider">Campus Poll</span>
              <h5 className="text-[13.5px] font-extrabold text-gray-200 mt-2.5 mb-3 leading-snug">Are you attending the upcoming Google Developers Group bootcamp in seminar hall?</h5>
              <div className="space-y-2">
                {[
                  { key: 'yes', label: 'Yes, registered! (64%)' },
                  { key: 'no', label: 'No, busy with midterms (36%)' }
                ].map((opt) => {
                  const voted = pollVotes.p1 === opt.key
                  const anyVoted = !!pollVotes.p1
                  return (
                    <button
                      key={opt.key}
                      onClick={() => handleVote('p1', opt.key)}
                      className={cn(
                        'w-full text-left rounded-xl border p-3 text-[12px] font-bold transition-all cursor-pointer',
                        voted ? 'border-purple-500 bg-purple-500/10 text-purple-300' : 'border-white/5 bg-white/[0.01] hover:border-white/10 text-gray-300',
                        anyVoted && !voted && 'opacity-60'
                      )}
                    >
                      {opt.label} {voted && '✓'}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Chat Thread */}
            <div className="bg-[#101015] border border-white/5 rounded-2xl p-4.5">
              <div className="flex gap-2.5 items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-xs">V</div>
                <div>
                  <h5 className="text-[12.5px] font-extrabold text-white">V. Keerthi (VNR VJIET)</h5>
                  <p className="text-[10px] text-gray-600 font-semibold mt-0.5">3h ago</p>
                </div>
              </div>
              <p className="text-[12.5px] text-gray-300 leading-relaxed">&quot;Is the DBMS mid-term syllabus strictly from unit-3 or unit-4 as well?&quot;</p>
              <div className="flex items-center gap-4 mt-4 pt-3.5 border-t border-white/5 text-[11.5px] text-gray-500 font-bold">
                <button
                  onClick={() => setLiked((p: any) => ({ ...p, c1: !p.c1 }))}
                  className={cn('flex items-center gap-1 hover:text-white cursor-pointer transition-colors', liked.c1 && 'text-purple-500')}
                >
                  <Heart className={cn('w-3.5 h-3.5', liked.c1 && 'fill-purple-500')} /> {24 + (liked.c1 ? 1 : 0)}
                </button>
                <span className="flex items-center gap-1"><MessageSquare className="w-3.5 h-3.5" /> 12 replies</span>
              </div>
            </div>
          </motion.div>
        )}

        {subTab === 'study_vault' && (
          <motion.div key="notes_tab" variants={variants} initial="hidden" animate="visible" exit="exit" className="space-y-4">
            <div className="flex flex-wrap gap-1.5 mb-2">
              {['All Semesters', 'CSE Sem 4', 'Lab Manuals', 'Syllabus', 'PYQs', 'Notes'].map((chip, idx) => (
                <span key={idx} className={cn('px-3.5 py-1.5 rounded-full text-[10.5px] font-extrabold border', idx === 1 ? 'bg-white text-black border-white' : 'bg-white/[0.02] text-gray-400 border-white/5')}>{chip}</span>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Compiler Design Unit 1-5', size: '12 MB', type: 'PDF', uploader: 'Admin Verified' },
                { title: 'Web Tech 2024 PYQ Solved', size: '4 MB', type: 'PDF', uploader: 'Admin Verified' },
                { title: 'Machine Learning Lab Manual', size: '1 MB', type: 'DOCX', uploader: 'Student Contrib' },
                { title: 'Data Analytics Midnotes', size: '8 MB', type: 'PDF', uploader: 'Admin Verified' }
              ].map((file, idx) => (
                <div key={idx} className="bg-[#101015] border border-white/5 rounded-2xl p-4 flex gap-3.5 items-start hover:bg-[#16161c] transition-colors cursor-pointer group">
                  <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-inner', file.type === 'PDF' ? 'bg-red-500/10 text-red-400' : 'bg-blue-500/10 text-blue-400')}>
                    <FileText className="w-5.5 h-5.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-[13px] font-bold text-white truncate group-hover:text-purple-400 transition-colors">{file.title}</h5>
                    <p className="text-[11px] text-gray-500 font-semibold mt-0.5">{file.size} &bull; {file.type}</p>
                    <span className="text-[10px] text-emerald-500 mt-2 inline-flex items-center gap-1 font-bold">✓ {file.uploader}</span>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-white/5 hover:bg-white hover:text-black flex items-center justify-center transition-colors cursor-pointer shrink-0">
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {subTab === 'events_clubs' && (
          <motion.div key="events" variants={variants} initial="hidden" animate="visible" exit="exit" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Intro to Web3 Seminar', club: 'GDSC CBIT Branch', status: 'Reg Open' },
                { title: 'Generative AI Hackathon 2026', club: 'IEEE CSE Society', status: 'Reg Open' }
              ].map((ev, idx) => (
                <div key={idx} className="bg-[#101015] border border-white/5 rounded-2xl p-4.5 flex flex-col justify-between group">
                  <div>
                    <div className="flex justify-between items-start mb-3.5">
                      <div>
                        <span className="text-[13px] font-extrabold text-white leading-snug">{ev.title}</span>
                        <p className="text-[10px] font-bold text-gray-500 mt-0.5">{ev.club}</p>
                      </div>
                      <span className="text-[9.5px] font-extrabold text-emerald-500 uppercase shrink-0">{ev.status}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5">
                    <button className="w-full rounded-xl bg-purple-600 hover:bg-purple-700 py-2.5 text-[11.5px] font-bold text-white cursor-pointer transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// 👤 PROFILE TAB
function ProfileTab({ variants }: { variants: any }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.28, ease: premiumEasing }}
      className="p-5 sm:p-7 flex flex-col min-h-full gap-5 text-left"
    >
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-white/5 pb-4.5">
        <div className="flex gap-4 items-center">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center font-extrabold text-white text-xl shadow-md border border-white/10">
            S
          </div>
          <div>
            <h3 className="text-[18px] sm:text-[20px] font-extrabold text-white">Sai Teja</h3>
            <p className="text-[12.5px] text-gray-500 font-semibold mt-0.5">B.Tech CSE &middot; CBIT Hyderabad &middot; Semester 6</p>
          </div>
        </div>
        <div className="bg-purple-950/40 border border-purple-500/20 rounded-xl px-3.5 py-2 flex items-center gap-2 max-w-[180px]">
          <Award className="w-4.5 h-4.5 text-purple-400 shrink-0" />
          <div>
            <span className="text-[13px] font-black text-white block leading-none">490 pts</span>
            <span className="text-[9px] font-bold text-purple-300 uppercase tracking-wide mt-1 block">Resource Score</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
        {/* Main profile contents */}
        <div className="md:col-span-8 flex flex-col gap-5">
          {/* Bio */}
          <div className="bg-[#101015] border border-white/5 rounded-2xl p-4.5">
            <h4 className="text-[11.5px] font-extrabold text-gray-500 uppercase tracking-wider mb-2.5">Bio & Portfolio</h4>
            <p className="text-[13px] text-gray-300 leading-relaxed">
              Mobile application developer working in Flutter and React Native. Currently building a P2P local delivery network inside university workspaces.
            </p>
            <div className="flex gap-3 mt-4">
              <button className="rounded-xl border border-white/10 hover:border-white/20 bg-white/[0.01] px-4 py-2 text-[12px] font-bold text-gray-300 flex items-center gap-1.5 transition cursor-pointer">
                <GithubIcon className="w-4 h-4" /> GitHub
              </button>
              <button className="rounded-xl border border-white/10 hover:border-white/20 bg-white/[0.01] px-4 py-2 text-[12px] font-bold text-gray-300 flex items-center gap-1.5 transition cursor-pointer">
                <Link2 className="w-4 h-4" /> Resume PDF
              </button>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-[#101015] border border-white/5 rounded-2xl p-4.5">
            <h4 className="text-[11.5px] font-extrabold text-gray-500 uppercase tracking-wider mb-3">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {['Flutter', 'React Native', 'React', 'TypeScript', 'Node.js', 'Firebase', 'PostgreSQL', 'Figma'].map((skill, idx) => (
                <span
                  key={idx}
                  className="rounded-full border border-white/5 bg-white/[0.02] px-3.5 py-1.5 text-[11px] font-extrabold text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right column settings */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <div className="bg-[#101015] border border-white/5 rounded-2xl p-4 flex flex-col gap-3.5">
            <h4 className="text-[11px] font-extrabold text-gray-500 uppercase tracking-wider border-b border-white/5 pb-2">Portfolio Badges</h4>
            <div className="flex items-center gap-3">
              <span className="text-[20px]">🥇</span>
              <div>
                <p className="text-[12.5px] font-bold text-white">Resource Guru</p>
                <p className="text-[10px] text-gray-500 font-semibold mt-0.5">Uploaded 10+ verified resources</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[20px]">🚀</span>
              <div>
                <p className="text-[12.5px] font-bold text-white">Active Builder</p>
                <p className="text-[10px] text-gray-500 font-semibold mt-0.5">Showcased 3 campus dashboard apps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
