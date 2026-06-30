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

  // Live feed ticker state
  const liveFeedItems = [
    { text: 'New hackathon announced by Microsoft', time: '2 min ago' },
    { text: 'Razorpay posted 3 new internships', time: '5 min ago' },
    { text: 'CBIT Placement Drive results are out', time: '12 min ago' },
    { text: '28 students joined Naavik today', time: '18 min ago' },
    { text: 'New study material uploaded for DBMS', time: '25 min ago' },
    { text: 'AI Timetable Generator got 5 new stars', time: '30 min ago' },
    { text: 'Smart India Hackathon registration closing soon', time: '45 min ago' },
  ]
  const [liveFeedIndex, setLiveFeedIndex] = useState(0)
  const [newOpportunityCount, setNewOpportunityCount] = useState(12)

  // Auto-cycle live feed
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveFeedIndex(prev => (prev + 1) % liveFeedItems.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [liveFeedItems.length])

  // Simulate live opportunity count ticking up
  useEffect(() => {
    const interval = setInterval(() => {
      setNewOpportunityCount(prev => {
        const next = prev + 1
        return next > 30 ? 12 : next
      })
    }, 8000)
    return () => clearInterval(interval)
  }, [])

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
                  <div className="mx-auto w-[280px] h-8 bg-black/40 rounded-lg border border-white/5 flex items-center justify-center text-[12px] text-gray-400 font-bold tracking-wide shadow-inner">
                    <Search className="w-3.5 h-3.5 mr-2 opacity-40" />
                    naavik
                  </div>
                  {/* Live Feed Ticker */}
                  <div className="flex items-center gap-2.5 shrink-0">
                    <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[9px] font-extrabold text-emerald-400 uppercase tracking-wider">Live Feed</span>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={liveFeedIndex}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3, ease: premiumEasing }}
                        className="flex items-center gap-2 max-w-[260px]"
                      >
                        <span className="text-[11px] font-bold text-gray-300 truncate">{liveFeedItems[liveFeedIndex].text}</span>
                        <span className="text-[9px] text-gray-600 font-semibold shrink-0">{liveFeedItems[liveFeedIndex].time}</span>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Dashboard Inner App Workspace */}
                <div className="relative w-full flex-1 flex overflow-hidden bg-[#0A0A0E]">
                  {/* Left Sidebar Menu */}
                  <div className="w-[88px] bg-[#050508] border-r border-white/5 flex flex-col items-center py-6 gap-8 hidden sm:flex shrink-0 z-20">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white/5 flex items-center justify-center p-1.5">
                      <Image src="/light-logo.png" alt="Naavik" width={48} height={48} className="object-contain" />
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

                {/* Live Opportunity Counter - Bottom Left */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-28 z-40 hidden sm:flex items-center gap-3 bg-[#101015]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-3 pr-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center font-bold text-white text-lg border-2 border-[#101015] shadow-md">
                    S
                  </div>
                  <div>
                    <span className="text-[9px] font-extrabold text-emerald-400 uppercase tracking-wider">Today</span>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={newOpportunityCount}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25 }}
                        className="text-[13px] font-extrabold text-white leading-tight"
                      >
                        {newOpportunityCount} new opportunities
                      </motion.p>
                    </AnimatePresence>
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
        <div className="flex gap-3 items-center">
          <div className="bg-purple-950/40 border border-purple-500/20 rounded-xl px-3 py-1.5 flex items-center gap-2">
            <Flame className="w-4 h-4 text-purple-400 animate-bounce" />
            <span className="text-[11.5px] font-extrabold text-purple-300">12 Days Streak</span>
          </div>
          <div className="relative cursor-pointer">
            <Bell className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-[#0A0A0E] animate-pulse" />
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
        <input
          type="text"
          placeholder="Search study materials, opportunities, people..."
          className="w-full bg-[#101015] border border-white/5 rounded-xl pl-10 pr-4 py-2.5 text-[12.5px] text-white font-semibold placeholder:text-gray-600 focus:outline-none focus:border-purple-500/40 transition-colors"
          readOnly
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left main feed */}
        <div className="lg:col-span-8 flex flex-col gap-5">
          {/* Quick Actions */}
          <div className="bg-[#101015] border border-white/5 rounded-2xl p-4">
            <h4 className="text-[12px] font-extrabold text-gray-400 uppercase tracking-wider mb-3">Quick Actions</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {['Upload Resource', 'Find Hack Team', 'Search Internships', 'Browse Notes'].map((action, idx) => (
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
            <div className="flex items-center justify-between">
              <span className="text-[13px] text-gray-400 font-semibold">Resources Shared</span>
              <span className="text-[14px] font-extrabold text-emerald-400">14</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[13px] text-gray-400 font-semibold">Opportunities Applied</span>
              <span className="text-[14px] font-extrabold text-orange-400">6</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[13px] text-gray-400 font-semibold">Connections Made</span>
              <span className="text-[14px] font-extrabold text-blue-400">28</span>
            </div>
          </div>

          {/* Continue Learning */}
          <div className="bg-[#101015] border border-white/5 rounded-2xl p-4">
            <h4 className="text-[12px] font-extrabold text-gray-400 uppercase tracking-wider mb-3">Continue Learning</h4>
            <div className="flex flex-col gap-2">
              {[
                { name: 'Normalization_Guide.pdf', sub: 'Unit 3 · Opened 2h ago', color: 'bg-red-500/10 text-red-400' },
                { name: 'OS_Lab_Manual_2024.pdf', sub: 'Exp 6 · Opened yesterday', color: 'bg-blue-500/10 text-blue-400' },
                { name: 'Cloud_PYQ_2023.pdf', sub: 'Sem 5 · Saved 3 days ago', color: 'bg-emerald-500/10 text-emerald-400' },
              ].map((f, idx) => (
                <div key={idx} className="flex gap-3 items-center bg-white/[0.01] hover:bg-white/[0.03] p-2 rounded-xl transition border border-white/5 cursor-pointer">
                  <div className={cn('w-9 h-9 rounded-lg flex items-center justify-center shrink-0', f.color)}>
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[12.5px] font-bold text-white truncate">{f.name}</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">{f.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming deadlines */}
          <div className="bg-[#101015] border border-white/5 rounded-2xl p-4">
            <h4 className="text-[12px] font-extrabold text-gray-400 uppercase tracking-wider mb-3">Upcoming Deadlines</h4>
            <div className="space-y-3">
              {[
                { title: 'DBMS Lab Assignment 4', time: 'Tomorrow, 11:59 PM', color: 'bg-orange-500' },
                { title: 'Smart India Hackathon Reg.', time: 'Ends July 25', color: 'bg-purple-500' },
                { title: 'Mini Project Phase II', time: 'July 30, 5:00 PM', color: 'bg-blue-500' },
                { title: 'Algorithm Mid-Term Exam', time: 'Aug 3, 10:00 AM', color: 'bg-red-500' },
              ].map((d, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className={cn('w-1.5 h-1.5 rounded-full mt-1.5 shrink-0', d.color)} />
                  <div>
                    <p className="text-[12.5px] font-bold text-white">{d.title}</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">{d.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-[#101015] border border-white/5 rounded-2xl p-4">
            <h4 className="text-[12px] font-extrabold text-gray-400 uppercase tracking-wider mb-3">Recent Activity</h4>
            <div className="space-y-2.5">
              {[
                { action: 'Applied to Razorpay Intern', time: '1h ago', icon: '💼' },
                { action: 'Uploaded DBMS Unit 4 notes', time: '3h ago', icon: '📤' },
                { action: 'Connected with Priya S.', time: 'Yesterday', icon: '🤝' },
                { action: 'Voted on campus poll', time: 'Yesterday', icon: '📊' },
              ].map((a, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <span className="text-[14px]">{a.icon}</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11.5px] font-bold text-gray-300 truncate">{a.action}</p>
                    <p className="text-[10px] text-gray-600 mt-0.5">{a.time}</p>
                  </div>
                </div>
              ))}
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
                { id: 'op1', title: 'SDE Intern', company: 'Amazon', loc: 'Bengaluru (Hybrid)', sal: '₹45k/mo', type: 'Internship', skill: ['React', 'Node.js'], deadline: '5 days left', verified: true },
                { id: 'op2', title: 'Frontend Developer', company: 'Zomato', loc: 'Remote', sal: '12 LPA', type: 'Full-time', skill: ['Next.js', 'Framer'], deadline: '12 days left', verified: true },
                { id: 'op3', title: 'GenAI Challenge 2026', company: 'Microsoft', loc: 'Virtual', sal: '₹5L Prize', type: 'Hackathon', skill: ['Python', 'OpenAI API'], deadline: 'Reg Open', verified: true },
                { id: 'op4', title: 'Open Source Contributor', company: 'Naavik Core', loc: 'Remote', sal: 'Equity + Stipend', type: 'Open Source', skill: ['TypeScript', 'GraphQL'], deadline: 'Rolling', verified: false },
                { id: 'op5', title: 'Backend Engineering Intern', company: 'CRED', loc: 'Bangalore', sal: '₹50k/mo', type: 'Internship', skill: ['Go', 'Kafka', 'PostgreSQL'], deadline: '3 days left', verified: true },
                { id: 'op6', title: 'PM Intern — EdTech', company: 'Unacademy', loc: 'Remote', sal: '₹20k/mo', type: 'Internship', skill: ['Excel', 'Product Sense'], deadline: '8 days left', verified: true },
              ].map((opp) => (
                <div key={opp.id} className="bg-[#101015] border border-white/5 rounded-2xl p-4.5 hover:border-white/10 transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-extrabold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/10 uppercase tracking-wider w-fit">{opp.type}</span>
                        {opp.verified && <span className="text-[9px] font-extrabold text-emerald-400 flex items-center gap-0.5">✓ Verified</span>}
                      </div>
                      <button
                        onClick={() => setSaved((p: any) => ({ ...p, [opp.id]: !p[opp.id] }))}
                        className="p-1 rounded-lg hover:bg-white/5 text-gray-500 hover:text-white cursor-pointer"
                      >
                        <Bookmark className={cn('w-4 h-4', saved[opp.id] && 'fill-purple-500 text-purple-500')} />
                      </button>
                    </div>
                    <h4 className="text-[14.5px] font-extrabold text-white group-hover:text-purple-400 transition-colors leading-snug">{opp.title}</h4>
                    <p className="text-[12px] text-gray-500 font-semibold mt-0.5">{opp.company} &middot; {opp.loc}</p>
                    <div className="flex gap-1.5 mt-3 flex-wrap">
                      {opp.skill.map((s, idx) => (
                        <span key={idx} className="rounded bg-white/5 px-2 py-0.5 text-[9px] text-gray-400 font-bold">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 pt-3.5 border-t border-white/5 flex justify-between items-center">
                    <span className="text-[11px] font-bold text-emerald-500">{opp.sal}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-orange-400">{opp.deadline}</span>
                      <button className="rounded-lg bg-purple-600 hover:bg-purple-700 px-3.5 py-1.5 text-[11px] font-bold text-white cursor-pointer">Apply</button>
                    </div>
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
                { id: 'proj1', title: 'Peer-to-Peer Delivery Hub', creator: 'Sai Teja (VNR VJIET)', stars: 12, forks: 3, tech: ['Flutter', 'Node.js', 'PostgreSQL'], des: 'Mobile app connecting students for local deliveries inside campus.', status: '🔍 Looking for: UI Designer' },
                { id: 'proj2', title: 'Naavik Admin Dashboard', creator: 'Rahul K. (Vasavi)', stars: 24, forks: 8, tech: ['Next.js', 'Supabase', 'Tailwind'], des: 'Full-featured server admin management panel for university workspaces.', status: '🟢 Open to contributions' },
                { id: 'proj3', title: 'Campus Lost & Found App', creator: 'Priya S. (CBIT)', stars: 7, forks: 2, tech: ['React Native', 'Firebase'], des: 'Locate lost items across campus with live map and push notifications.', status: '🔍 Looking for: Backend Dev' },
                { id: 'proj4', title: 'AI Timetable Generator', creator: 'Karthik M. (JNTUH)', stars: 19, forks: 5, tech: ['Python', 'FastAPI', 'OpenAI'], des: 'Automatically generates optimal exam timetables using AI scheduling.', status: '🟢 Open to testing' },
                { id: 'proj5', title: 'Smart Attendance Tracker', creator: 'Ananya V. (Vasavi)', stars: 15, forks: 4, tech: ['React', 'TypeScript', 'Node.js'], des: 'QR-code based automated attendance system for lectures.', status: '🔍 Looking for: Tester' },
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
                    <p className="text-[12px] text-gray-400 mt-2 leading-relaxed italic">&quot;{proj.des}&quot;</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {proj.tech.map((t, idx) => (
                        <span key={idx} className="rounded bg-white/5 px-2 py-0.5 text-[9px] text-gray-400 font-bold">{t}</span>
                      ))}
                    </div>
                    <div className="mt-2 text-[10.5px] font-bold text-amber-400">{proj.status}</div>
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
                { name: 'Karthik M.', clg: 'JNTUH &bull; IT 3rd Year', skills: 'Python, PyTorch, FastAPI', project: 'AI Timetable Generator', looking: 'Frontend React Developer', availability: '8h/week' },
                { name: 'Ananya V.', clg: 'Vasavi &bull; CSE 2nd Year', skills: 'React, TypeScript, Tailwind', project: 'Hacktoberfest OSS Bot', looking: 'DevOps / CI Engineer', availability: '12h/week' },
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
              { id: 'f1', author: 'Razorpay Recruiter', badge: '🏢 Company', text: 'We are hiring Frontend Engineering Interns for our Bengaluru workspace! Apply via Naavik. React/TypeScript preferred. Stipend ₹40k/mo.', likes: 42, comments: 14 },
              { id: 'f2', author: 'CBIT Hackathon Club', badge: '🏫 Campus', text: 'Congratulations to our students who placed Top 3 in the National Web3 Hackathon 2026! 🎉 Proud of Team CBIT-X.', likes: 110, comments: 8 },
              { id: 'f3', author: 'Swiggy Hiring', badge: '🏢 Company', text: 'Looking for Mobile App Developers (Android / React Native) for our Hyderabad office. 2024/2025 batch welcome.', likes: 78, comments: 22 },
              { id: 'f4', author: 'Rahul K. (VNR VJIET)', badge: '👨‍💻 Student', text: 'Just shipped the v1 of my SIH Dashboard. 12 stars on GitHub in 24 hours 🚀 Would love design feedback from anyone!', likes: 34, comments: 16 },
            ].map((post) => (
              <div key={post.id} className="bg-[#101015] border border-white/5 rounded-2xl p-4.5">
                <div className="flex gap-2.5 items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-purple-600/10 border border-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs">{post.author.charAt(0)}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h5 className="text-[12.5px] font-extrabold text-white truncate">{post.author}</h5>
                      <span className="text-[9px] font-bold text-gray-500 bg-white/5 border border-white/5 px-1.5 py-0.5 rounded shrink-0">{post.badge}</span>
                    </div>
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
                  <span className="flex items-center gap-1 hover:text-white cursor-pointer"><Share2 className="w-3.5 h-3.5" /> Share</span>
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
              { title: 'Convergence Tech Fest 2026 Registration Open', desc: 'CBIT IEEE Student branch announces the annual tech symposium. Cash prizes worth ₹1L+. 12 technical events, 6 non-technical tracks.', badge: 'Fest Update', time: 'Posted 1h ago' },
              { title: 'Mid-Exam Semester 4 Timetable Released', desc: 'Exams scheduled from Monday July 6. Check official PDF attached. Labs begin from July 14.', badge: 'Exam Update', time: 'Posted 3h ago' },
              { title: 'Campus Placement Drive — Infosys', desc: 'Infosys campus placements start Monday, July 8. Eligible: 2025 batch, 70%+ aggregate. Register via Placement Cell portal.', badge: 'Placement', time: 'Posted 5h ago' },
              { title: 'Holiday Notice: Dr. APJ Abdul Kalam Jayanti', desc: 'The college will remain closed on October 15th in honour of Dr. APJ Abdul Kalam Jayanti. All lab sessions rescheduled.', badge: 'Holiday', time: 'Posted 2 days ago' },
            ].map((up, idx) => (
              <div key={idx} className="bg-[#101015] border border-white/5 rounded-2xl p-4.5 flex flex-col gap-2 relative group hover:border-white/10 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/10 uppercase tracking-wider">{up.badge}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-600 font-semibold">{up.time}</span>
                    <span className="text-[10px] font-bold text-emerald-500">✓ Verified Official</span>
                  </div>
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

            {/* Chat Threads */}
            {[
              { id: 'c1', avatar: 'V', color: 'bg-orange-500/10 border-orange-500/20 text-orange-400', name: 'V. Keerthi (VNR VJIET)', time: '3h ago', text: 'Is the DBMS mid-term syllabus strictly from unit-3 or unit-4 as well?', likes: 24, replies: 12 },
              { id: 'c2', avatar: 'A', color: 'bg-blue-500/10 border-blue-500/20 text-blue-400', name: 'Ananya V. (Vasavi)', time: '5h ago', text: 'Can someone share the Cloud Computing lab manual? The drive link expired.', likes: 18, replies: 9 },
              { id: 'c3', avatar: 'R', color: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400', name: 'Rohit S. (CBIT)', time: 'Yesterday', text: 'The new sports complex construction deadline pushed to August. Anyone know the revised schedule?', likes: 31, replies: 7 },
              { id: 'c4', avatar: 'P', color: 'bg-purple-500/10 border-purple-500/20 text-purple-400', name: 'Priya M. (JNTUH)', time: 'Yesterday', text: 'Looking for teammates for the IEEE paper presentation next week. Topic: Edge Computing in IoT. DM me!', likes: 15, replies: 4 },
            ].map((post) => (
              <div key={post.id} className="bg-[#101015] border border-white/5 rounded-2xl p-4.5">
                <div className="flex gap-2.5 items-center mb-3">
                  <div className={cn('w-8 h-8 rounded-full border flex items-center justify-center font-bold text-xs', post.color)}>{post.avatar}</div>
                  <div>
                    <h5 className="text-[12.5px] font-extrabold text-white">{post.name}</h5>
                    <p className="text-[10px] text-gray-600 font-semibold mt-0.5">{post.time}</p>
                  </div>
                </div>
                <p className="text-[12.5px] text-gray-300 leading-relaxed">&quot;{post.text}&quot;</p>
                <div className="flex items-center gap-4 mt-4 pt-3.5 border-t border-white/5 text-[11.5px] text-gray-500 font-bold">
                  <button
                    onClick={() => setLiked((p: any) => ({ ...p, [post.id]: !p[post.id] }))}
                    className={cn('flex items-center gap-1 hover:text-white cursor-pointer transition-colors', liked[post.id] && 'text-purple-500')}
                  >
                    <Heart className={cn('w-3.5 h-3.5', liked[post.id] && 'fill-purple-500')} /> {post.likes + (liked[post.id] ? 1 : 0)}
                  </button>
                  <span className="flex items-center gap-1"><MessageSquare className="w-3.5 h-3.5" /> {post.replies} replies</span>
                  <span className="flex items-center gap-1 hover:text-white cursor-pointer"><Share2 className="w-3.5 h-3.5" /> Share</span>
                </div>
              </div>
            ))}

            {/* Second Poll */}
            <div className="bg-[#101015] border border-white/5 rounded-2xl p-4.5 text-left">
              <span className="text-[10px] font-extrabold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/10 uppercase tracking-wider">Campus Poll</span>
              <h5 className="text-[13.5px] font-extrabold text-gray-200 mt-2.5 mb-3 leading-snug">Which elective should be introduced next semester?</h5>
              <div className="space-y-2">
                {[
                  { key: 'blockchain', label: 'Blockchain Development (42%)' },
                  { key: 'genai', label: 'Generative AI & LLMs (38%)' },
                  { key: 'cybersec', label: 'Cybersecurity Essentials (20%)' },
                ].map((opt) => {
                  const voted = pollVotes.p2 === opt.key
                  const anyVoted = !!pollVotes.p2
                  return (
                    <button
                      key={opt.key}
                      onClick={() => handleVote('p2', opt.key)}
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
                { title: 'Compiler Design Unit 1-5', size: '12 MB', type: 'PDF', uploader: 'Admin Verified', downloads: 340 },
                { title: 'Web Tech 2024 PYQ Solved', size: '4 MB', type: 'PDF', uploader: 'Admin Verified', downloads: 512 },
                { title: 'Machine Learning Lab Manual', size: '1 MB', type: 'DOCX', uploader: 'Student Contrib', downloads: 87 },
                { title: 'Data Analytics Midnotes', size: '8 MB', type: 'PDF', uploader: 'Admin Verified', downloads: 215 },
                { title: 'Operating Systems PYQ 2023', size: '6 MB', type: 'PDF', uploader: 'Admin Verified', downloads: 429 },
                { title: 'DBMS Normalization Notes', size: '3 MB', type: 'PDF', uploader: 'Student Contrib', downloads: 198 },
                { title: 'Computer Networks Lab Manual', size: '2 MB', type: 'DOCX', uploader: 'Admin Verified', downloads: 156 },
                { title: 'Software Engineering Unit 1-3', size: '9 MB', type: 'PDF', uploader: 'Student Contrib', downloads: 94 },
              ].map((file, idx) => (
                <div key={idx} className="bg-[#101015] border border-white/5 rounded-2xl p-4 flex gap-3.5 items-start hover:bg-[#16161c] transition-colors cursor-pointer group">
                  <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-inner', file.type === 'PDF' ? 'bg-red-500/10 text-red-400' : 'bg-blue-500/10 text-blue-400')}>
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-[13px] font-bold text-white truncate group-hover:text-purple-400 transition-colors">{file.title}</h5>
                    <p className="text-[11px] text-gray-500 font-semibold mt-0.5">{file.size} &bull; {file.type}</p>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="text-[10px] text-emerald-500 inline-flex items-center gap-1 font-bold">✓ {file.uploader}</span>
                      <span className="text-[10px] text-gray-600 font-semibold">{file.downloads} downloads</span>
                    </div>
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
                { title: 'Intro to Web3 Seminar', club: 'GDSC CBIT Branch', status: 'Reg Open', date: 'July 8, 4:00 PM', venue: 'Seminar Hall 2', type: 'Workshop', spots: '45/120 filled' },
                { title: 'Generative AI Hackathon 2026', club: 'IEEE CSE Society', status: 'Reg Open', date: 'July 12-13', venue: 'CS Lab Block A', type: 'Hackathon', spots: '28 teams registered' },
                { title: 'Flutter Dev Bootcamp', club: 'Mobile App Club', status: 'Reg Open', date: 'July 15-17', venue: 'Online (Zoom)', type: 'Bootcamp', spots: '80/100 filled' },
                { title: 'Competitive Programming Contest', club: 'CodeChef CBIT Chapter', status: 'Coming Soon', date: 'July 20, 10:00 AM', venue: 'Lab 304', type: 'Contest', spots: 'Registrations open July 10' },
                { title: 'Resume Building Workshop', club: 'Placement Cell', status: 'Reg Open', date: 'July 22, 2:00 PM', venue: 'Auditorium', type: 'Workshop', spots: '150/200 filled' },
                { title: 'Photography Club Exhibition', club: 'Shutter Club', status: 'Ongoing', date: 'July 1-7', venue: 'Main Gallery', type: 'Exhibition', spots: '32 entries submitted' },
              ].map((ev, idx) => (
                <div key={idx} className="bg-[#101015] border border-white/5 rounded-2xl p-4.5 flex flex-col justify-between group hover:border-white/10 transition-colors">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className={cn(
                        'text-[9.5px] font-extrabold px-2 py-0.5 rounded border uppercase tracking-wider',
                        ev.status === 'Reg Open' ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/10' :
                        ev.status === 'Coming Soon' ? 'text-amber-400 bg-amber-500/10 border-amber-500/10' :
                        'text-blue-400 bg-blue-500/10 border-blue-500/10'
                      )}>{ev.status}</span>
                      <span className="text-[9px] font-bold text-gray-600 bg-white/5 border border-white/5 px-1.5 py-0.5 rounded">{ev.type}</span>
                    </div>
                    <h5 className="text-[13.5px] font-extrabold text-white leading-snug mt-1 group-hover:text-purple-400 transition-colors">{ev.title}</h5>
                    <p className="text-[10.5px] font-bold text-purple-400 mt-1">{ev.club}</p>
                    <div className="mt-2.5 space-y-1 text-[11px] text-gray-500 font-semibold">
                      <div className="flex items-center gap-1.5"><Clock className="w-3 h-3 text-gray-600" /> {ev.date}</div>
                      <div className="flex items-center gap-1.5"><ArrowUpRight className="w-3 h-3 text-gray-600" /> {ev.venue}</div>
                      <div className="text-[10px] text-gray-600 mt-1">{ev.spots}</div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5">
                    <button className={cn(
                      'w-full rounded-xl py-2.5 text-[11.5px] font-bold cursor-pointer transition-colors',
                      ev.status === 'Coming Soon' ? 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white' :
                      'bg-purple-600 hover:bg-purple-700 text-white'
                    )}>
                      {ev.status === 'Coming Soon' ? 'Notify Me' : ev.status === 'Ongoing' ? 'View Details' : 'Register Now'}
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
