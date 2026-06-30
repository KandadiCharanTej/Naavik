import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  BookOpen,
  Briefcase,
  Compass,
  FolderGit2,
  Users,
  Search,
  Bell,
  Heart,
  Bookmark,
  FileText,
  ArrowUpRight,
  Clock,
  Flame,
  Star,
  TrendingUp,
  Award,
} from 'lucide-react'
import { Logo } from '@/components/ui/logo'

const navItems = [
  { icon: Compass, label: 'Discover', active: true },
  { icon: Briefcase, label: 'Opportunities' },
  { icon: FolderGit2, label: 'Projects' },
  { icon: BookOpen, label: 'Resources' },
  { icon: Users, label: 'Connect' },
]

const PLACEHOLDERS = [
  'Search internships...',
  'Search hackathons...',
  'Search study materials...',
  'Search PYQs...',
  'Search project teams...',
]

const LIVE_NOTIFICATIONS = [
  { text: 'Amazon posted SDE Intern role', time: 'Just now', type: 'opportunity' },
  { text: 'Rahul uploaded DBMS Unit 4 notes', time: '2m ago', type: 'resource' },
  { text: 'New hackathon by Microsoft', time: '5m ago', type: 'opportunity' },
  { text: 'Priya is looking for teammates', time: '8m ago', type: 'connect' },
  { text: 'CBIT placement results are out', time: '12m ago', type: 'update' },
  { text: 'Razorpay hiring Frontend Interns', time: '18m ago', type: 'opportunity' },
]

const OPPORTUNITIES = [
  { title: 'Frontend Developer Intern', company: 'TechCorp India', location: 'Hyderabad', tags: ['React', 'Next.js', '₹15k/mo'], type: 'Internship', color: 'text-[var(--purple-600)] bg-[var(--purple-50)]' },
  { title: 'Backend Engineering Intern', company: 'CRED', location: 'Bangalore', tags: ['Go', 'Kafka', '₹50k/mo'], type: 'Internship', color: 'text-blue-600 bg-blue-50' },
  { title: 'GenAI Challenge 2026', company: 'Microsoft', location: 'Virtual', tags: ['Python', 'OpenAI', '₹5L Prize'], type: 'Hackathon', color: 'text-emerald-600 bg-emerald-50' },
]

const RESOURCES = [
  { title: 'Data Structures & Algorithms', subtitle: 'Complete handwritten notes', progress: 60, icon: BookOpen, color: 'bg-orange-50 text-orange-500' },
  { title: 'DBMS Normalization Guide', subtitle: 'Unit 3 · PDF · 12 MB', progress: 85, icon: FileText, color: 'bg-red-50 text-red-500' },
  { title: 'OS Lab Manual 2024', subtitle: 'Exp 1-8 · DOCX · 2 MB', progress: 40, icon: FileText, color: 'bg-blue-50 text-blue-500' },
]

const TEAMMATES = [
  { name: 'Rahul K.', college: 'VNR VJIET', project: 'SIH Dashboard', needs: 'UI/UX Designer', avatar: 5 },
  { name: 'Priya S.', college: 'CBIT', project: 'Lost & Found App', needs: 'Backend Dev', avatar: 6 },
  { name: 'Karthik M.', college: 'JNTUH', project: 'AI Timetable', needs: 'React Dev', avatar: 7 },
]

export function DashboardMockup({
  variant = 'desktop',
}: {
  variant?: 'desktop' | 'mobile'
}) {
  const isMobile = variant === 'mobile'
  const shouldReduceMotion = useReducedMotion()

  const [currentPlaceholder, setCurrentPlaceholder] = useState('')
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [notifIndex, setNotifIndex] = useState(0)
  const [oppIndex, setOppIndex] = useState(0)
  const [likedOpp, setLikedOpp] = useState(false)
  const [savedOpp, setSavedOpp] = useState(false)
  const [newCount, setNewCount] = useState(12)

  // Typewriter effect for search placeholder
  useEffect(() => {
    if (shouldReduceMotion) {
      setCurrentPlaceholder(PLACEHOLDERS[0])
      return
    }

    const fullText = PLACEHOLDERS[placeholderIndex]
    let timer: NodeJS.Timeout

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentPlaceholder((prev) => prev.slice(0, -1))
      }, 40)
    } else {
      timer = setTimeout(() => {
        setCurrentPlaceholder((prev) => fullText.slice(0, prev.length + 1))
      }, 80)
    }

    if (!isDeleting && currentPlaceholder === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2500)
    } else if (isDeleting && currentPlaceholder === '') {
      setIsDeleting(false)
      setPlaceholderIndex((prev) => (prev + 1) % PLACEHOLDERS.length)
    }

    return () => clearTimeout(timer)
  }, [currentPlaceholder, isDeleting, placeholderIndex, shouldReduceMotion])

  // Auto-cycle notifications
  useEffect(() => {
    const interval = setInterval(() => {
      setNotifIndex((prev) => (prev + 1) % LIVE_NOTIFICATIONS.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Slowly cycle featured opportunity
  useEffect(() => {
    const interval = setInterval(() => {
      setOppIndex((prev) => (prev + 1) % OPPORTUNITIES.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  // Incrementing new opportunity count
  useEffect(() => {
    const interval = setInterval(() => {
      setNewCount((prev) => (prev >= 28 ? 12 : prev + 1))
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  const placeholderText = shouldReduceMotion ? PLACEHOLDERS[0] : currentPlaceholder
  const currentOpp = OPPORTUNITIES[oppIndex]
  const currentNotif = LIVE_NOTIFICATIONS[notifIndex]

  return (
    <div
      className={
        isMobile
          ? 'relative w-full aspect-[16/11]'
          : 'relative w-full aspect-[16/10]'
      }
    >
      <div
        aria-hidden
        className={`absolute inset-0 rounded-[24px] bg-gradient-to-tr from-[var(--purple-600)]/35 to-blue-500/30 ${isMobile ? 'blur-[50px]' : 'blur-[90px]'}`}
      />
      <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-[20px] border border-white/60 bg-white/70 shadow-[0_32px_80px_-12px_rgba(0,0,0,0.14),0_0_0_1px_rgba(255,255,255,0.7)] backdrop-blur-2xl lg:rounded-[24px]">
        {/* Window chrome - desktop only */}
        {!isMobile && (
          <div className="flex h-11 w-full shrink-0 items-center justify-between border-b border-white/5 bg-white/50 px-4">
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <div className="mx-4 max-w-[280px] flex-1">
              <div className="flex h-6 w-full items-center justify-center rounded-md border border-white/70 bg-white/60 text-[10px] font-medium text-gray-500 shadow-sm sm:text-[11px]">
                naavik.in
              </div>
            </div>
            {/* Live notification ticker */}
            <div className="flex items-center gap-2 w-[260px] justify-end">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={notifIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-1.5 overflow-hidden"
                >
                  <span className="text-[10px] font-semibold text-gray-600 truncate">{currentNotif.text}</span>
                  <span className="text-[9px] text-gray-400 shrink-0">{currentNotif.time}</span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        <div className="flex min-h-0 flex-1 overflow-hidden">
          {/* Sidebar — desktop only */}
          {!isMobile && (
            <div className="flex w-[168px] shrink-0 flex-col border-r border-white/40 bg-white/35 p-4 xl:w-[180px]">
              <div className="mb-5 px-1">
                <Logo className="h-14 w-auto" />
              </div>
              <div className="flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] font-medium transition-colors xl:text-[14px] ${
                      item.active
                        ? 'bg-white text-[var(--purple-600)] shadow-sm'
                        : 'text-gray-500 hover:bg-white/50 hover:text-gray-900'
                    }`}
                  >
                    <item.icon
                      size={17}
                      className={
                        item.active ? 'text-[var(--purple-600)]' : 'text-gray-400'
                      }
                    />
                    {item.label}
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-auto flex flex-col gap-2 border-t border-white/40 pt-4">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-gray-500 font-medium">Score</span>
                  <span className="font-bold text-[var(--purple-600)]">490 pts</span>
                </div>
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-gray-500 font-medium">Rank</span>
                  <span className="font-bold text-amber-600">#4</span>
                </div>
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-gray-500 font-medium">Streak</span>
                  <div className="flex items-center gap-1">
                    <Flame size={10} className="text-orange-500" />
                    <span className="font-bold text-orange-600">12d</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-[var(--purple-500)] to-blue-500 p-[2px]">
                    <div className="h-full w-full overflow-hidden rounded-full border-2 border-white bg-white">
                      <img
                        src="https://i.pravatar.cc/100?img=11"
                        alt="Avatar"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-semibold leading-tight text-gray-900">
                      Student
                    </span>
                    <span className="text-[10px] leading-tight text-gray-500">
                      CBIT · CSE 3rd Year
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Main panel */}
          <div
            className={`flex min-w-0 flex-1 flex-col overflow-hidden bg-gradient-to-br from-gray-50/40 to-white/20 ${isMobile ? 'gap-3 p-3' : 'gap-4 p-4 xl:gap-5 xl:p-5'}`}
          >
            <div className="flex shrink-0 items-center justify-between gap-2">
              <div className="flex h-8 min-w-0 flex-1 items-center rounded-full border border-gray-100 bg-white px-3 shadow-sm sm:h-9 sm:max-w-[220px]">
                <Search size={13} className="mr-2 shrink-0 text-gray-400" />
                <span className="truncate text-[11px] font-medium text-gray-400 sm:text-[12px] min-h-[16px] inline-block">
                  {placeholderText}
                  {!shouldReduceMotion && (
                    <span className="inline-block w-[1px] h-[12px] ml-0.5 bg-[var(--purple-500)] animate-pulse" />
                  )}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {/* Live opportunity count badge */}
                <div className="hidden sm:flex items-center gap-1.5 bg-[var(--purple-50)] border border-[var(--purple-100)] rounded-full px-2.5 py-1">
                  <TrendingUp size={11} className="text-[var(--purple-600)]" />
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={newCount}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="text-[10px] font-bold text-[var(--purple-600)]"
                    >
                      {newCount} new
                    </motion.span>
                  </AnimatePresence>
                </div>
                <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-100 bg-white text-gray-400 shadow-sm sm:h-9 sm:w-9 transition-transform duration-300 hover:scale-105">
                  <Bell size={15} />
                  <span className="absolute right-1.5 top-1.5 flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full border border-white bg-red-500" />
                  </span>
                </div>
              </div>
            </div>

            <div className="flex min-h-0 flex-1 gap-3 overflow-hidden xl:gap-4">
              <div className="flex min-w-0 flex-1 flex-col gap-3 xl:gap-4">
                {/* Featured Opportunity Card — auto-cycles */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={oppIndex}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex flex-col rounded-2xl border border-gray-100 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-transform duration-500 group-hover:-translate-y-1 ${isMobile ? 'gap-2.5 p-3.5' : 'gap-3.5 p-4 xl:gap-4 xl:p-5'}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`rounded-md px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider sm:text-[10px] ${currentOpp.color}`}>
                        {currentOpp.type}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button onClick={() => setLikedOpp(!likedOpp)} className="cursor-pointer">
                          <Heart size={13} className={likedOpp ? 'fill-red-500 text-red-500' : 'text-gray-300'} />
                        </button>
                        <button onClick={() => setSavedOpp(!savedOpp)} className="cursor-pointer">
                          <Bookmark size={13} className={savedOpp ? 'fill-[var(--purple-500)] text-[var(--purple-500)]' : 'text-gray-300'} />
                        </button>
                      </div>
                    </div>
                    <div>
                      <h4
                        className={`font-bold leading-tight text-gray-900 ${isMobile ? 'text-[13px]' : 'text-[14px] xl:text-[15px]'}`}
                      >
                        {currentOpp.title}
                      </h4>
                      <p
                        className={`mt-0.5 text-gray-500 ${isMobile ? 'text-[10px]' : 'text-[11px] xl:text-[12px]'}`}
                      >
                        {currentOpp.company} • {currentOpp.location}
                      </p>
                    </div>
                    <div className="mt-0.5 flex flex-wrap gap-1.5">
                      {currentOpp.tags.map((tag, idx) => (
                        <span key={idx} className="rounded-md border border-gray-100 bg-gray-50 px-2 py-0.5 text-[10px] font-medium text-gray-600 sm:text-[11px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Progress dots showing which opportunity */}
                    <div className="flex items-center gap-1 mt-1">
                      {OPPORTUNITIES.map((_, idx) => (
                        <div key={idx} className={`h-1 rounded-full transition-all duration-300 ${idx === oppIndex ? 'w-4 bg-[var(--purple-500)]' : 'w-1 bg-gray-200'}`} />
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Study Resources — show top resource */}
                {(() => {
                  const Res0Icon = RESOURCES[0].icon
                  return (
                <motion.div
                  className={`flex items-start rounded-2xl border border-gray-100 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-transform duration-500 delay-75 group-hover:-translate-y-0.5 ${isMobile ? 'gap-2.5 p-3.5' : 'gap-3.5 p-4 xl:gap-4 xl:p-5'}`}
                >
                  <div
                    className={`flex shrink-0 items-center justify-center rounded-lg ${RESOURCES[0].color} ${isMobile ? 'h-8 w-8' : 'h-9 w-9 xl:h-10 xl:w-10'}`}
                  >
                    <Res0Icon size={isMobile ? 14 : 17} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4
                      className={`font-bold text-gray-900 ${isMobile ? 'text-[12px]' : 'text-[12px] xl:text-[13px]'}`}
                    >
                      {RESOURCES[0].title}
                    </h4>
                    <p
                      className={`mt-0.5 text-gray-500 ${isMobile ? 'text-[10px]' : 'text-[10px] xl:text-[11px]'}`}
                    >
                      {RESOURCES[0].subtitle}
                    </p>
                    <div className="mt-2 h-1.5 w-20 overflow-hidden rounded-full bg-gray-100">
                      <div className="h-full bg-orange-400 transition-all duration-1000" style={{ width: `${RESOURCES[0].progress}%` }} />
                    </div>
                  </div>
                </motion.div>
                  )
                })()}

                {/* Second resource — smaller */}
                {!isMobile && (() => {
                  const Res1Icon = RESOURCES[1].icon
                  return (
                  <motion.div
                    className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-sm"
                  >
                    <div className={`flex shrink-0 items-center justify-center rounded-lg h-8 w-8 ${RESOURCES[1].color}`}>
                      <Res1Icon size={14} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-[11px] font-bold text-gray-900 truncate">{RESOURCES[1].title}</h4>
                      <p className="text-[9px] text-gray-500 mt-0.5">{RESOURCES[1].subtitle}</p>
                    </div>
                    <div className="h-1 w-12 overflow-hidden rounded-full bg-gray-100 shrink-0">
                      <div className="h-full bg-red-400" style={{ width: `${RESOURCES[1].progress}%` }} />
                    </div>
                  </motion.div>
                  )
                })()}
              </div>

              {/* Teammates panel — desktop only */}
              {!isMobile && (
                <div className="hidden w-[156px] shrink-0 flex-col gap-3 xl:flex xl:w-[172px]">
                  <div className="rounded-2xl border border-gray-100 bg-white p-3.5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] xl:p-4">
                    <h5 className="mb-2.5 text-[11px] font-bold text-gray-900 xl:text-[12px]">
                      Looking for Teammates
                    </h5>
                    <div className="flex flex-col gap-2.5">
                      {TEAMMATES.map((t) => (
                        <div key={t.name} className="flex items-center gap-2">
                          <img
                            src={`https://i.pravatar.cc/100?img=${t.avatar}`}
                            className="h-6 w-6 rounded-full bg-gray-200 xl:h-7 xl:w-7"
                            alt=""
                          />
                          <div className="min-w-0 flex flex-col">
                            <span className="truncate text-[10px] font-semibold text-gray-800 xl:text-[11px]">
                              {t.project}
                            </span>
                            <span className="text-[9px] text-gray-500">
                              Needs {t.needs}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Stats Card */}
                  <div className="rounded-2xl border border-gray-100 bg-white p-3.5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] xl:p-4">
                    <h5 className="mb-2 text-[11px] font-bold text-gray-900 xl:text-[12px]">
                      Today&apos;s Activity
                    </h5>
                    <div className="flex flex-col gap-2">
                      {[
                        { label: 'Opportunities', value: `${newCount}+`, color: 'text-[var(--purple-600)]' },
                        { label: 'Resources', value: '8 new', color: 'text-orange-600' },
                        { label: 'Connections', value: '3 pending', color: 'text-blue-600' },
                      ].map((stat) => (
                        <div key={stat.label} className="flex items-center justify-between text-[10px]">
                          <span className="text-gray-500 font-medium">{stat.label}</span>
                          <span className={`font-bold ${stat.color}`}>{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom-left floating live badge — desktop only */}
        {!isMobile && (
          <div className="absolute bottom-3 left-[180px] z-20 flex items-center gap-2.5 rounded-xl border border-[var(--purple-100)] bg-white/95 px-3 py-2 shadow-md backdrop-blur-md xl:left-[194px]">
            <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-[var(--purple-500)] to-blue-500 p-[1.5px]">
              <div className="h-full w-full overflow-hidden rounded-full border border-white bg-white">
                <img
                  src="https://i.pravatar.cc/100?img=11"
                  alt="Avatar"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-extrabold text-emerald-600 uppercase tracking-wider">Today</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={newCount}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="text-[12px] font-bold text-gray-900 leading-tight"
                >
                  {newCount} new opportunities
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
