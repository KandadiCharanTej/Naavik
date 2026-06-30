'use client'

import { useState } from 'react'
import { premiumEasing } from '@/components/animations/reveal'
import { ADMIN_FORM_URL } from '@/lib/constants'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Briefcase,
  BookOpen,
  Users,
  Trophy,
  Globe,
  Rocket,
  FileText,
  MessageSquare,
  GraduationCap,
  ArrowRight,
  Shield,
} from 'lucide-react'
import { PageContainer, Section, Eyebrow } from '@/components/design/primitives'
import { cn } from '@/lib/utils'

type TabId = 'growth' | 'college'

function FeaturePills({ accent }: { accent: TabId }) {
  const growthPills = [
    { label: 'Opportunities', dotColor: 'bg-red-500' },
    { label: 'Connect', dotColor: 'bg-orange-500' },
    { label: 'Project Hub', dotColor: 'bg-orange-500' },
    { label: 'Growth Feed', dotColor: 'bg-purple-500' },
  ]
  const collegePills = [
    { label: 'Updates', dotColor: 'bg-red-500' },
    { label: 'College Feed', dotColor: 'bg-blue-500' },
    { label: 'Study Vault', dotColor: 'bg-emerald-500' },
    { label: 'Events', dotColor: 'bg-purple-500' },
  ]
  const pills = accent === 'growth' ? growthPills : collegePills

  return (
    <div className="flex flex-wrap gap-2">
      {pills.map((pill) => (
        <span
          key={pill.label}
          className="inline-flex items-center gap-2 rounded-full border border-gray-150 bg-white px-3.5 py-1.5 text-[12px] font-bold text-gray-700 shadow-sm transition-all duration-200 hover:-translate-y-px hover:shadow-md"
        >
          <span className={cn('h-1.5 w-1.5 rounded-full', pill.dotColor)} />
          {pill.label}
        </span>
      ))}
    </div>
  )
}

function HeroCard({ activeTab }: { activeTab: TabId }) {
  const isGrowth = activeTab === 'growth'

  return (
    <article
      className={cn(
        'group transform-gpu relative h-full overflow-hidden rounded-[24px] border p-6 transition-all duration-300',
        isGrowth
          ? 'border-purple-100 bg-purple-50/20 shadow-[0_8px_32px_rgba(124,58,237,0.03)] hover:shadow-[0_16px_48px_rgba(124,58,237,0.07)]'
          : 'border-emerald-100 bg-emerald-50/15 shadow-[0_8px_32px_rgba(16,185,129,0.03)] hover:shadow-[0_16px_48px_rgba(16,185,129,0.07)]',
      )}
    >
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-40 blur-2xl',
          isGrowth ? 'bg-[var(--purple-150)]' : 'bg-emerald-100',
        )}
      />
      <div className="relative flex flex-col h-full justify-between">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  'flex h-11 w-11 items-center justify-center rounded-xl ring-1',
                  isGrowth
                    ? 'bg-[#7C3AED] text-white ring-purple-500'
                    : 'bg-emerald-600 text-white ring-emerald-500',
                )}
              >
                {isGrowth ? <Briefcase className="h-5 w-5" /> : <BookOpen className="h-5 w-5" />}
              </span>
              <h4 className="text-[17px] font-extrabold text-gray-900 tracking-tight sm:text-[18px]">
                {isGrowth ? 'Opportunities' : 'Study Vault'}
              </h4>
            </div>
            <span
              className={cn(
                'rounded-full px-2.5 py-0.5 text-[9.5px] font-extrabold uppercase tracking-wider',
                isGrowth
                  ? 'bg-orange-100 text-orange-700 border border-orange-200'
                  : 'bg-emerald-100 text-emerald-800 border border-emerald-200',
              )}
            >
              {isGrowth ? 'FEATURED' : 'RESOURCES'}
            </span>
          </div>

          <p className="mt-4 text-[13px] leading-relaxed text-gray-500 font-semibold">
            {isGrowth
              ? 'Find internships, full-time jobs, and scholarships tailored to your year and branch.'
              : 'Semester-wise study materials, notes, lab manuals, and previous year papers.'}
          </p>
        </div>

        {/* Nested white card */}
        <div className="mt-5 rounded-2xl border border-gray-150 bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.015)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
          {isGrowth ? (
            <div className="flex flex-col gap-2.5">
              <div className="flex items-start justify-between">
                <div>
                  <h5 className="text-[13.5px] font-extrabold text-gray-900 sm:text-[14.5px]">
                    Software Engineering Intern
                  </h5>
                  <p className="text-[11px] font-bold text-gray-500">Google</p>
                </div>
                <span className="shrink-0 rounded bg-emerald-50 px-1.5 py-0.5 text-[10.5px] font-bold text-emerald-600 sm:text-[11px]">
                  ₹35k/mo
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[11px] text-gray-400 font-bold">
                <span>Bengaluru (Hybrid)</span>
                <span>•</span>
                <span className="text-orange-600">Ends July 15</span>
                <span>•</span>
                <span className="inline-flex items-center gap-0.5 text-emerald-600 font-extrabold bg-emerald-50/50 px-1.5 py-0.2 rounded">
                  ✓ Verified
                </span>
              </div>
              <div className="flex gap-1.5 mt-1">
                <span className="rounded bg-gray-100 px-2 py-0.5 text-[9px] text-gray-500 font-extrabold">React</span>
                <span className="rounded bg-gray-100 px-2 py-0.5 text-[9px] text-gray-500 font-extrabold">Next.js</span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <div>
                  <h5 className="text-[13.5px] font-extrabold text-gray-900 sm:text-[14.5px]">
                    DBMS Prev. Year Paper 2025
                  </h5>
                  <p className="text-[11px] font-bold text-gray-500">CSE · Semester 4</p>
                </div>
                <span className="shrink-0 rounded bg-emerald-50 px-1.5 py-0.5 text-[9.5px] font-extrabold text-emerald-600 border border-emerald-100 uppercase tracking-wider">
                  VERIFIED PDF
                </span>
              </div>
              <div className="flex items-center justify-between text-[11.5px] text-gray-400 font-bold">
                <span>Uploader: E. Sai (Senior Admin)</span>
                <span>Downloads: 142</span>
              </div>
              <button className="w-full rounded-xl bg-gray-900 py-2 text-[12.5px] font-extrabold text-white hover:bg-gray-800 transition-colors duration-200 cursor-pointer">
                Download PDF
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

function SupportingStack({ activeTab }: { activeTab: TabId }) {
  if (activeTab === 'growth') {
    return (
      <div className="flex flex-col gap-4">
        {/* Hackathons */}
        <article className="group transform-gpu relative overflow-hidden rounded-[20px] border border-gray-150 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-[#7C3AED] ring-1 ring-purple-100">
              <Trophy className="h-4.5 w-4.5" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-[13.5px] font-extrabold text-gray-900">Hackathons</h4>
                <span className="rounded-full bg-purple-50 px-2 py-0.5 text-[8.5px] font-extrabold text-[#7C3AED] uppercase tracking-wider border border-purple-100">
                  LIVE NOW
                </span>
              </div>
              <p className="mt-0.5 text-[11.5px] leading-relaxed text-gray-500 font-semibold">
                Team up and compete in regional and national hackathons.
              </p>
              
              {/* Nested mini card */}
              <div className="mt-2.5 rounded-xl bg-[#F8F8FA] p-3 ring-1 ring-gray-150">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[11.5px] font-extrabold text-gray-900">Smart India Hackathon 2026</span>
                  <span className="text-[9.5px] font-extrabold text-orange-600 bg-orange-50 px-1 py-0.2 rounded">₹2L Prize</span>
                </div>
                <p className="text-[10px] text-gray-400 font-bold mt-0.5">
                  Team: 2-4 members · Reg: Ends July 25
                </p>
                <div className="flex gap-1.5 mt-1.5">
                  <span className="rounded bg-white border border-gray-150 px-1.5 py-0.2 text-[8px] text-gray-500 font-extrabold">AI/ML</span>
                  <span className="rounded bg-white border border-gray-150 px-1.5 py-0.2 text-[8px] text-gray-500 font-extrabold">Web3</span>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Connect */}
        <article className="group transform-gpu relative overflow-hidden rounded-[20px] border border-gray-150 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
              <Users className="h-4.5 w-4.5" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-[13.5px] font-extrabold text-gray-900">Connect</h4>
                <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[8.5px] font-extrabold text-blue-700 uppercase tracking-wider border border-blue-100">
                  COMMUNITY
                </span>
              </div>
              <p className="mt-0.5 text-[11.5px] leading-relaxed text-gray-500 font-semibold">
                Find and chat with classmates or teammate co-founders across campuses.
              </p>
              
              {/* Nested mini card */}
              <div className="mt-2.5 rounded-xl bg-[#F8F8FA] p-3 ring-1 ring-gray-150">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11.5px] font-extrabold text-gray-900">Sai Teja</span>
                    <p className="text-[9.5px] font-bold text-gray-400">VNR VJIET · CSE 3rd Year</p>
                  </div>
                  <button className="shrink-0 rounded bg-[#7C3AED] px-2.5 py-0.5 text-[9px] font-extrabold text-white hover:bg-purple-700 cursor-pointer">
                    Connect
                  </button>
                </div>
                <div className="mt-2 space-y-0.5 text-[9.5px] text-gray-600 font-bold leading-normal">
                  <div><span className="text-gray-400">Project:</span> Peer-to-peer delivery app</div>
                  <div><span className="text-gray-400">Skills:</span> Flutter, Firebase, Node.js</div>
                  <div><span className="text-gray-400">Looking For:</span> Backend Dev (PostgreSQL)</div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Project Hub */}
        <article className="group transform-gpu relative overflow-hidden rounded-[20px] border border-gray-150 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 ring-1 ring-orange-100">
              <Rocket className="h-4.5 w-4.5" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-[13.5px] font-extrabold text-gray-900">Project Hub</h4>
                <span className="rounded-full bg-orange-50 px-2 py-0.5 text-[8.5px] font-extrabold text-orange-700 uppercase tracking-wider border border-orange-100">
                  BUILDS
                </span>
              </div>
              <p className="mt-0.5 text-[11.5px] leading-relaxed text-gray-500 font-semibold">
                Showcase your builds, get feedback, and build a public portfolio.
              </p>
              
              {/* Nested mini card */}
              <div className="mt-2.5 rounded-xl bg-[#F8F8FA] p-3 ring-1 ring-gray-150">
                <div className="flex items-start justify-between">
                  <span className="text-[11.5px] font-extrabold text-gray-900">Naavik Dev Dashboard</span>
                  <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-bold">
                    <span>⭐ 14</span>
                    <span>🍴 11</span>
                  </div>
                </div>
                <div className="flex gap-2 text-[10px] font-extrabold mt-1">
                  <span className="text-blue-600 hover:underline cursor-pointer">GitHub</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-emerald-600 hover:underline cursor-pointer">Live Demo</span>
                </div>
                <div className="flex gap-1 mt-1.5">
                  <span className="rounded bg-white border border-gray-150 px-1.5 py-0.2 text-[8px] text-gray-500 font-extrabold">Next.js</span>
                  <span className="rounded bg-white border border-gray-150 px-1.5 py-0.2 text-[8px] text-gray-500 font-extrabold">Supabase</span>
                  <span className="rounded bg-white border border-gray-150 px-1.5 py-0.2 text-[8px] text-gray-500 font-extrabold">Tailwind</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 max-h-[580px] overflow-y-auto pr-1 scrollbar-hide">
      {/* College Updates */}
      <article className="group transform-gpu relative overflow-hidden rounded-[20px] border border-gray-150 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
            <FileText className="h-4.5 w-4.5" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-[13.5px] font-extrabold text-gray-900">College Updates</h4>
              <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[8.5px] font-extrabold text-blue-700 uppercase tracking-wider border border-blue-100">
                UPDATES
              </span>
            </div>
            <p className="mt-0.5 text-[11.5px] leading-relaxed text-gray-500 font-semibold">
              Official announcements, circulars, department events, and holiday notices.
            </p>
            
            {/* Nested mini card */}
            <div className="mt-2.5 rounded-xl bg-[#F8F8FA] p-3 ring-1 ring-gray-150">
              <div className="flex items-start justify-between">
                <span className="text-[11.5px] font-extrabold text-gray-900">Convergence Tech Fest 2026</span>
                <span className="rounded bg-blue-100 border border-blue-200 px-1 py-0.2 text-[8px] font-bold text-blue-700 uppercase">CSE</span>
              </div>
              <p className="text-[10px] text-gray-400 font-bold mt-0.5">
                IEEE Student Branch · Prize Pool: ₹30,000 · March 15–18
              </p>
              <button className="w-full rounded border border-gray-250 bg-white py-1 text-[10px] font-extrabold text-gray-700 hover:bg-gray-50 mt-2 cursor-pointer">
                View Details
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Events & Clubs */}
      <article className="group transform-gpu relative overflow-hidden rounded-[20px] border border-gray-150 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-[#7C3AED] ring-1 ring-purple-100">
            <Globe className="h-4.5 w-4.5" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-[13.5px] font-extrabold text-gray-900">Events & Clubs</h4>
              <span className="rounded-full bg-purple-50 px-2 py-0.5 text-[8.5px] font-extrabold text-[#7C3AED] uppercase tracking-wider border border-purple-100">
                CLUBS
              </span>
            </div>
            <p className="mt-0.5 text-[11.5px] leading-relaxed text-gray-500 font-semibold">
              Stay updated with campus technical clubs and upcoming workshops.
            </p>
            
            {/* Nested mini card */}
            <div className="mt-2.5 rounded-xl bg-[#F8F8FA] p-3 ring-1 ring-gray-150">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11.5px] font-extrabold text-gray-900">Intro to Web3 Workshop</span>
                  <p className="text-[9.5px] font-bold text-gray-400">GDSC CBIT Branch</p>
                </div>
                <span className="shrink-0 text-[8.5px] font-extrabold text-emerald-700 bg-emerald-50 px-1 py-0.2 rounded tracking-wider border border-emerald-100">REG OPEN</span>
              </div>
              <button className="w-full rounded bg-[#7C3AED] py-1.5 text-[10px] font-extrabold text-white hover:bg-purple-700 mt-2 cursor-pointer">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* College Feed */}
      <article className="group transform-gpu relative overflow-hidden rounded-[20px] border border-gray-150 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 ring-1 ring-amber-100">
            <MessageSquare className="h-4.5 w-4.5" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-[13.5px] font-extrabold text-gray-900">College Feed</h4>
              <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[8.5px] font-extrabold text-amber-800 uppercase tracking-wider border border-amber-200">
                FEED
              </span>
            </div>
            <p className="mt-0.5 text-[11.5px] leading-relaxed text-gray-500 font-semibold">
              Anonymous questions, campus chat rooms, and peer-to-peer discussions.
            </p>
            
            {/* Nested mini card */}
            <div className="mt-2.5 rounded-xl bg-[#F8F8FA] p-3 ring-1 ring-gray-150">
              <p className="text-[11.5px] font-bold text-gray-800 leading-snug italic">
                &quot;Is the DBMS mid-term syllabus strictly from unit-3 or unit-4 as well?&quot;
              </p>
              <div className="flex items-center justify-between text-[9.5px] text-gray-455 font-extrabold mt-2">
                <span>💬 12 replies</span>
                <span>❤️ 24 likes</span>
                <span>Active 2m ago</span>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Leaderboards */}
      <article className="group transform-gpu relative overflow-hidden rounded-[20px] border border-gray-150 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
            <Trophy className="h-4.5 w-4.5" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-[13.5px] font-extrabold text-gray-900">Leaderboards</h4>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[8.5px] font-extrabold text-emerald-800 uppercase tracking-wider border border-emerald-150">
                LEADERS
              </span>
            </div>
            <p className="mt-0.5 text-[11.5px] leading-relaxed text-gray-500 font-semibold">
              Earn points and get recognized by contributing resources to your campus.
            </p>
            
            {/* Nested mini card */}
            <div className="mt-2.5 rounded-xl bg-[#F8F8FA] p-3 ring-1 ring-gray-150 flex flex-col gap-1.5">
              <div className="flex items-center justify-between border-b border-gray-100 py-1 text-[11.5px] font-bold text-gray-700">
                <span>E. Sai (CBIT)</span>
                <div className="flex items-center gap-1"><span className="font-extrabold text-gray-900">490 pts</span> 🥇</div>
              </div>
              <div className="flex items-center justify-between py-1 text-[11.5px] font-bold text-gray-700">
                <span>V. Keerthi (VNR VJIET)</span>
                <div className="flex items-center gap-1"><span className="font-extrabold text-gray-900">430 pts</span> 🥈</div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

function ConnectorLines({ accent }: { accent: TabId }) {
  const stroke = accent === 'growth' ? 'rgba(124,58,237,0.18)' : 'rgba(16,185,129,0.2)'
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full lg:block animate-pulse duration-1000"
      viewBox="0 0 800 520"
      preserveAspectRatio="none"
      fill="none"
    >
      <path d="M 120 80 C 200 120, 280 60, 380 140" stroke={stroke} strokeWidth="1.5" strokeDasharray="6 6" opacity="0.9" />
      <path d="M 380 140 C 420 200, 500 180, 560 280" stroke={stroke} strokeWidth="1.5" strokeDasharray="6 6" opacity="0.9" />
      <path d="M 200 360 C 300 320, 400 380, 520 340" stroke={stroke} strokeWidth="1.5" strokeDasharray="6 6" opacity="0.9" />
      <path d="M 560 280 C 620 340, 680 400, 720 460" stroke={stroke} strokeWidth="1.5" strokeDasharray="6 6" opacity="0.9" />
    </svg>
  )
}

function EcosystemCanvas({ activeTab }: { activeTab: TabId }) {
  return (
    <div className="relative w-full rounded-2xl border border-gray-100 bg-white p-6 shadow-xl">
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute -inset-8 rounded-[40px] opacity-60 blur-3xl',
          activeTab === 'growth'
            ? 'bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.06),transparent_65%)]'
            : 'bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.06),transparent_65%)]',
        )}
      />
      <ConnectorLines accent={activeTab} />
      
      <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-5">
        {/* Left side (~55% width) */}
        <div className="col-span-12 md:col-span-7">
          <HeroCard activeTab={activeTab} />
        </div>

        {/* Right side (~45% width) */}
        <div className="col-span-12 md:col-span-5">
          <SupportingStack activeTab={activeTab} />
        </div>
      </div>
    </div>
  )
}

function QuickTags({ activeTab }: { activeTab: TabId }) {
  const isGrowth = activeTab === 'growth'

  return (
    <div className="flex flex-wrap items-center gap-2 text-left mt-2">
      <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-gray-400 mr-2.5 select-none">
        QUICK TAGS:
      </span>
      {isGrowth ? (
        <>
          {['Internships', 'Jobs', 'Hackathons', 'Projects', 'Startups', 'Open Source'].map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-gray-150 bg-white px-3 py-1.5 text-[11.5px] font-bold text-gray-600 shadow-sm transition-transform duration-200 hover:-translate-y-px hover:shadow"
            >
              {tag}
            </span>
          ))}
          {/* Distinct AI Tag */}
          <div className="inline-flex items-center gap-2.5 rounded-2xl border border-purple-200 bg-purple-50/45 p-1.5 px-3.5 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md cursor-default">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#7C3AED] text-[10px] font-black text-white uppercase select-none">AI</span>
            <div className="flex flex-col text-left leading-none">
              <span className="text-[10px] font-extrabold text-gray-950 uppercase tracking-wide">AI</span>
              <span className="text-[9.5px] text-gray-500 font-semibold mt-0.5">Monthly Opportunities</span>
            </div>
          </div>
          <span className="inline-flex items-center rounded-full border border-gray-150 bg-white px-3 py-1.5 text-[11.5px] font-bold text-gray-600 shadow-sm transition-transform duration-200 hover:-translate-y-px hover:shadow">
            Workshops
          </span>
        </>
      ) : (
        ['Announcements', 'Events', 'Clubs', 'Resources', 'Seniors', 'Discussions', 'Verify'].map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full border border-gray-150 bg-white px-3 py-1.5 text-[11.5px] font-bold text-gray-600 shadow-sm transition-transform duration-200 hover:-translate-y-px hover:shadow"
          >
            {tag}
          </span>
        ))
      )}
    </div>
  )
}

function VerifiedBanner({ activeTab }: { activeTab: TabId }) {
  return (
    <AnimatePresence>
      {activeTab === 'college' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="flex items-start gap-3.5 rounded-2xl border border-amber-200 bg-amber-50 p-4.5 shadow-sm text-left mt-2"
        >
          <Shield className="h-5.5 w-5.5 shrink-0 text-amber-600 mt-0.5" />
          <div>
            <h4 className="text-[13.5px] font-bold text-amber-900 leading-none mb-1">
              Verified Workspaces Only
            </h4>
            <p className="text-[12.5px] leading-relaxed text-amber-800 font-semibold">
              Each campus workspace goes live only after a verified student admin activates and manages it.<br />
              We don&apos;t create empty campuses. Quality over scale — always.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function TabToggle({ 
  activeTab, 
  setActiveTab,
  layoutIdPrefix = 'desktop'
}: { 
  activeTab: TabId; 
  setActiveTab: (t: TabId) => void;
  layoutIdPrefix?: string;
}) {
  return (
    <div className="inline-flex w-full max-w-[280px] rounded-full bg-gray-150 p-1 ring-1 ring-gray-200/80 sm:max-w-none">
      {([
        { id: 'growth' as const, label: 'Growth', icon: Globe },
        { id: 'college' as const, label: 'College', icon: GraduationCap },
      ]).map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={cn(
            'relative flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 text-[13.5px] font-bold transition-colors sm:px-6 cursor-pointer',
            activeTab === tab.id ? 'text-gray-900 font-extrabold' : 'text-gray-500 hover:text-gray-900',
          )}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId={`${layoutIdPrefix}-inside-ecosystem-tab-pill`}
              className="absolute inset-0 rounded-full bg-white shadow-sm"
              transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
            />
          )}
          <tab.icon className="relative z-10 h-4 w-4" />
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  )
}

function LeftColumn({ activeTab }: { activeTab: TabId }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="flex flex-col gap-4"
      >
        <div>
          <h3 className="text-[1.5rem] font-extrabold leading-[1.1] tracking-[-0.035em] xl:text-[1.75rem] text-gray-900">
            {activeTab === 'growth' ? 'Everything beyond your college.' : 'Everything inside your college.'}
          </h3>
          <p className="mt-2 max-w-sm text-[14px] font-semibold leading-relaxed text-gray-500">
            {activeTab === 'growth'
              ? 'Discover opportunities, build projects, connect with engineering students and grow beyond your own campus.'
              : 'Verified announcements, student discussions, clubs, events and organized study resources.'}
          </p>
        </div>

        <FeaturePills accent={activeTab} />

        <div className="mt-4">
          <p className="text-[12.5px] font-bold text-[#7C3AED] leading-none">Don&apos;t see your college?</p>
          <a
            href={ADMIN_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3.5 inline-flex items-center gap-2 rounded-full border border-gray-900 bg-white px-5 py-2.5 text-[13.5px] font-bold text-gray-900 transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] hover:bg-gray-50 cursor-pointer"
          >
            Apply to bring Naavik to your campus <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export function InsideNaavik() {
  const [activeTab, setActiveTab] = useState<TabId>('growth')

  return (
    <Section id="inside-naavik" surface="white" pad="compact">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_0%_50%,rgba(124,58,237,0.04),transparent_60%)]"
      />

      <PageContainer size="full" className="relative">
        {/* Desktop — premium split */}
        <div className="hidden lg:grid lg:grid-cols-[minmax(0,35%)_minmax(0,65%)] lg:items-start lg:gap-10 xl:gap-14">
          <div className="sticky top-28 space-y-5 bg-white">
            <span className="inline-flex items-center rounded-full border border-gray-900 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-gray-900 select-none">
              Inside Naavik
            </span>
            <h2 className="text-[2.5rem] font-extrabold leading-[1.06] tracking-[-0.04em] xl:text-[3rem] text-gray-900">
              Two spaces. Everything you <span className="text-[#7C3AED]">need.</span>
            </h2>
            <p className="max-w-sm text-[14px] font-medium leading-snug text-gray-500">
              One for your growth, one for your college — together in one app.
            </p>

            <TabToggle activeTab={activeTab} setActiveTab={setActiveTab} />
            <LeftColumn activeTab={activeTab} />
          </div>

          <div className="flex flex-col gap-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: premiumEasing }}
              >
                <EcosystemCanvas activeTab={activeTab} />
              </motion.div>
            </AnimatePresence>
            <QuickTags activeTab={activeTab} />
            <VerifiedBanner activeTab={activeTab} />
          </div>
        </div>

        {/* Mobile — dedicated storytelling flow */}
        <div className="lg:hidden flex flex-col gap-6 text-left">
          <div>
            <span className="inline-flex items-center rounded-full border border-gray-900 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-gray-900 select-none">
              Inside Naavik
            </span>
            <h2 className="mt-3 text-[1.875rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-gray-900">
              Two spaces. Everything you <span className="text-[#7C3AED]">need.</span>
            </h2>
            <p className="mt-2 text-[14px] font-medium leading-snug text-gray-500">
              One for your growth, one for your college — together in one app.
            </p>
          </div>

          <TabToggle activeTab={activeTab} setActiveTab={setActiveTab} layoutIdPrefix="mobile" />

          <LeftColumn activeTab={activeTab} />

          <div className="flex flex-col gap-5 mt-2">
            <HeroCard activeTab={activeTab} />
            <SupportingStack activeTab={activeTab} />
            <QuickTags activeTab={activeTab} />
            <VerifiedBanner activeTab={activeTab} />
          </div>
        </div>
      </PageContainer>
    </Section>
  )
}
