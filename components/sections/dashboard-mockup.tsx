import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  BookOpen,
  Briefcase,
  Compass,
  FolderGit2,
  Users,
  Search,
  Bell,
  Heart,
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

  const placeholderText = shouldReduceMotion ? PLACEHOLDERS[0] : currentPlaceholder

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
            <div className="w-10" />
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
              <div className="mt-auto flex items-center gap-2.5 border-t border-white/40 pt-4">
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
                    JNTUH
                  </span>
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
              <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-100 bg-white text-gray-400 shadow-sm sm:h-9 sm:w-9 transition-transform duration-300 hover:scale-105">
                <Bell size={15} />
                <span className="absolute right-1.5 top-1.5 flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full border border-white bg-red-500" />
                </span>
              </div>
            </div>

            <div className="flex min-h-0 flex-1 gap-3 overflow-hidden xl:gap-4">
              <div className="flex min-w-0 flex-1 flex-col gap-3 xl:gap-4">
                <motion.div
                  className={`flex flex-col rounded-2xl border border-gray-100 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-transform duration-500 group-hover:-translate-y-1 ${isMobile ? 'gap-2.5 p-3.5' : 'gap-3.5 p-4 xl:gap-4 xl:p-5'}`}
                  initial={false}
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-md bg-[var(--purple-50)] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[var(--purple-600)] sm:text-[10px]">
                      Internship
                    </span>
                    <Heart size={13} className="text-gray-300" />
                  </div>
                  <div>
                    <h4
                      className={`font-bold leading-tight text-gray-900 ${isMobile ? 'text-[13px]' : 'text-[14px] xl:text-[15px]'}`}
                    >
                      Frontend Developer Intern
                    </h4>
                    <p
                      className={`mt-0.5 text-gray-500 ${isMobile ? 'text-[10px]' : 'text-[11px] xl:text-[12px]'}`}
                    >
                      TechCorp India • Hyderabad
                    </p>
                  </div>
                  <div className="mt-0.5 flex flex-wrap gap-1.5">
                    <span className="rounded-md border border-gray-100 bg-gray-50 px-2 py-0.5 text-[10px] font-medium text-gray-600 sm:text-[11px]">
                      React
                    </span>
                    <span className="rounded-md border border-gray-100 bg-gray-50 px-2 py-0.5 text-[10px] font-medium text-gray-600 sm:text-[11px]">
                      Next.js
                    </span>
                    <span className="rounded-md border border-gray-100 bg-gray-50 px-2 py-0.5 text-[10px] font-medium text-gray-600 sm:text-[11px]">
                      ₹15kmo
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  className={`flex items-start rounded-2xl border border-gray-100 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-transform duration-500 delay-75 group-hover:-translate-y-0.5 ${isMobile ? 'gap-2.5 p-3.5' : 'gap-3.5 p-4 xl:gap-4 xl:p-5'}`}
                >
                  <div
                    className={`flex shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-500 ${isMobile ? 'h-8 w-8' : 'h-9 w-9 xl:h-10 xl:w-10'}`}
                  >
                    <BookOpen size={isMobile ? 14 : 17} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4
                      className={`font-bold text-gray-900 ${isMobile ? 'text-[12px]' : 'text-[12px] xl:text-[13px]'}`}
                    >
                      Data Structures & Algorithms
                    </h4>
                    <p
                      className={`mt-0.5 text-gray-500 ${isMobile ? 'text-[10px]' : 'text-[10px] xl:text-[11px]'}`}
                    >
                      Complete handwritten notes
                    </p>
                    <div className="mt-2 h-1.5 w-20 overflow-hidden rounded-full bg-gray-100">
                      <div className="h-full w-[60%] bg-orange-400" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Teammates panel — desktop only */}
              {!isMobile && (
                <div className="hidden w-[156px] shrink-0 flex-col gap-3 xl:flex xl:w-[172px]">
                  <div className="rounded-2xl border border-gray-100 bg-white p-3.5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] xl:p-4">
                    <h5 className="mb-2.5 text-[11px] font-bold text-gray-900 xl:text-[12px]">
                      Looking for Teammates
                    </h5>
                    <div className="flex flex-col gap-2.5">
                      {[1, 2].map((i) => (
                        <div key={i} className="flex items-center gap-2">
                          <img
                            src={`https://i.pravatar.cc/100?img=${i + 4}`}
                            className="h-6 w-6 rounded-full bg-gray-200 xl:h-7 xl:w-7"
                            alt=""
                          />
                          <div className="min-w-0 flex flex-col">
                            <span className="truncate text-[10px] font-semibold text-gray-800 xl:text-[11px]">
                              Hackathon
                            </span>
                            <span className="text-[9px] text-gray-500">
                              Needs UI/UX
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
