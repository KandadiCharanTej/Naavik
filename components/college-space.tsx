'use client'

import { useState } from 'react'
import { ShieldCheck, ChevronRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const collegesData = {
  cbit: {
    name: 'CBIT Workspace',
    shortName: 'CBIT',
    logoLetter: 'C',
    themeColor: 'bg-primary text-white',
    feed: [
      { type: 'resource', title: 'DBMS Semester 4 PYQ Solutions', info: 'CSE • Uploaded by Rahul K.' },
      { type: 'update', title: 'Carpe Diem Fest Coordinators', info: 'Student Activity Center • Deadline: July 10' },
    ],
    leaderboard: [
      { name: 'Rahul K.', points: '540 pts', avatarBg: 'bg-purple-100 text-purple-700' },
      { name: 'Srinivas M.', points: '480 pts', avatarBg: 'bg-indigo-100 text-indigo-700' },
    ],
  },
  jntuh: {
    name: 'JNTUH Workspace',
    shortName: 'JNTUH',
    logoLetter: 'J',
    themeColor: 'bg-indigo-600 text-white',
    feed: [
      { type: 'resource', title: 'Operating Systems Notes Unit 1-5', info: 'IT • Uploaded by Priyanka S.' },
      { type: 'update', title: 'JNTUH HackFest Registration Open', info: 'CSE Department • March 15-18' },
    ],
    leaderboard: [
      { name: 'Priyanka S.', points: '610 pts', avatarBg: 'bg-emerald-100 text-emerald-700' },
      { name: 'Tarun G.', points: '520 pts', avatarBg: 'bg-pink-100 text-pink-700' },
    ],
  },
  vnrvjiet: {
    name: 'VNRVJIET Workspace',
    shortName: 'VNRVJIET',
    logoLetter: 'V',
    themeColor: 'bg-emerald-600 text-white',
    feed: [
      { type: 'resource', title: 'Basic Electrical Eng Lab Record', info: 'EEE • Uploaded by E. Sai' },
      { type: 'update', title: 'Convergence Tech Fest Registrations', info: 'IEEE Branch • Prize: ₹30,000' },
    ],
    leaderboard: [
      { name: 'E. Sai', points: '490 pts', avatarBg: 'bg-blue-100 text-blue-700' },
      { name: 'V. Keerthi', points: '430 pts', avatarBg: 'bg-amber-100 text-amber-700' },
    ],
  },
}

export function CollegeSpace() {
  const [selectedCollege, setSelectedCollege] = useState<'cbit' | 'jntuh' | 'vnrvjiet'>('vnrvjiet')
  const data = collegesData[selectedCollege]

  return (
    <section id="college-space" className="scroll-mt-20 py-16 sm:py-28 lg:py-36 bg-[#FAFAFC] relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left: Pitch & College Switcher Selector */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/5 px-2.5 py-1 rounded-full">
              COLLEGE SPACE
            </span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] leading-[1.15]">
              Your campus's notes, events,<br />and updates — in one verified place.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Every college on Naviko gets its own private workspace. Think of it as your campus's organized digital hub — for resources, announcements, and community, all in one tab.
            </p>

            {/* "What you get" 4-item horizontal strip */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-b border-border/60 py-6 w-full">
              <div className="flex gap-2">
                <span className="text-lg">📁</span>
                <div>
                  <h4 className="text-xs font-bold text-foreground">Semester Notes</h4>
                  <p className="text-[11px] text-muted-foreground mt-0.5 leading-tight">Organized by branch & year</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="text-lg">📢</span>
                <div>
                  <h4 className="text-xs font-bold text-foreground">Campus Events</h4>
                  <p className="text-[11px] text-muted-foreground mt-0.5 leading-tight">Official updates before they're buried</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="text-lg">📄</span>
                <div>
                  <h4 className="text-xs font-bold text-foreground">PYQ Archive</h4>
                  <p className="text-[11px] text-muted-foreground mt-0.5 leading-tight">Exam prep, always current</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="text-lg">🏆</span>
                <div>
                  <h4 className="text-xs font-bold text-foreground">Contributor Board</h4>
                  <p className="text-[11px] text-muted-foreground mt-0.5 leading-tight">See who's helping most</p>
                </div>
              </div>
            </div>

            {/* Trust statement Callout Box */}
            <div className="mt-6 w-full rounded-2xl border border-primary/20 bg-primary/[0.02] p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/[0.03] rounded-full translate-x-8 -translate-y-8" />
              <div className="flex gap-3">
                <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">We don't create empty workspaces.</h4>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Each college is activated only after a verified student admin joins and takes responsibility for it. Quality matters more than scale. Your workspace will be real or it won't exist.
                  </p>
                </div>
              </div>
            </div>

            {/* Clickable Switcher tabs */}
            <div className="mt-8 space-y-3.5 w-full">
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">
                → These campuses are live. Is yours next?
              </p>
              {(Object.keys(collegesData) as Array<'cbit' | 'jntuh' | 'vnrvjiet'>).map((key) => {
                const isActive = selectedCollege === key
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedCollege(key)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'border-primary bg-primary/5 font-semibold text-primary shadow-xs'
                        : 'border-border bg-white text-muted-foreground hover:text-foreground hover:border-border-hover'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`h-6 w-6 rounded-md flex items-center justify-center text-xs font-bold ${isActive ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
                        {collegesData[key].logoLetter}
                      </span>
                      <span className="text-sm font-semibold">{collegesData[key].name}</span>
                    </div>
                    <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${isActive ? 'translate-x-0.5' : ''}`} />
                  </button>
                )
              })}
            </div>

            {/* Soft bottom CTA */}
            <div className="mt-6 flex flex-col sm:flex-row items-start gap-1">
              <span className="text-xs text-muted-foreground">Don't see your college?</span>
              <a href="#become-admin" className="text-xs text-primary font-semibold hover:underline flex items-center gap-0.5">
                Apply to bring Naviko to your campus <ChevronRight className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Right: The Dynamic Workspace Mockup */}
          <div className="lg:col-span-7 w-full max-w-xl mx-auto">
            <Reveal key={selectedCollege} delay={50} className="overflow-hidden rounded-3xl border border-border bg-[#FAFAFC] p-4 sm:p-6 shadow-md transition-all duration-500">
              
              {/* Workspace Screen */}
              <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-lg">
                {/* Header navbar */}
                <div className="flex items-center justify-between border-b border-border bg-[#FAFAFC] px-5 py-4">
                  <div className="flex items-center gap-2.5">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-lg font-bold text-sm ${data.themeColor}`}>
                      {data.logoLetter}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground">{data.name}</p>
                      <p className="text-[9px] text-muted-foreground">✓ Verified Student Workspace · Workspace Online</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                    <ShieldCheck className="h-3.5 w-3.5" /> Workspace Online
                  </span>
                </div>

                {/* Sub-grid workspace */}
                <div className="grid sm:grid-cols-5 divide-x divide-border min-h-[280px]">
                  {/* channels */}
                  <div className="hidden sm:block col-span-2 p-3 space-y-2 bg-[#FAFAFC] text-[11px] font-semibold text-muted-foreground text-left">
                    <div className="bg-primary/5 text-primary rounded px-2.5 py-1.5 font-bold flex flex-col">
                      <span># main-board</span>
                      <span className="text-[8px] font-normal text-muted-foreground mt-0.5">Campus announcements</span>
                    </div>
                    <div className="rounded px-2.5 py-1.5 hover:bg-muted/50 cursor-pointer flex flex-col">
                      <span className="text-foreground"># study-vault</span>
                      <span className="text-[8px] font-normal text-muted-foreground mt-0.5">Notes & PYQs</span>
                    </div>
                    <div className="rounded px-2.5 py-1.5 hover:bg-muted/50 cursor-pointer flex flex-col">
                      <span className="text-foreground"># event-board</span>
                      <span className="text-[8px] font-normal text-muted-foreground mt-0.5">Fests & deadlines</span>
                    </div>
                    <div className="rounded px-2.5 py-1.5 hover:bg-muted/50 cursor-pointer flex flex-col">
                      <span className="text-foreground"># contributor-ladder</span>
                      <span className="text-[8px] font-normal text-muted-foreground mt-0.5">Top contributors</span>
                    </div>
                  </div>

                  {/* dynamic feed content */}
                  <div className="col-span-3 p-4 space-y-4">
                    
                    {/* feed cards */}
                    <div className="space-y-2 text-left">
                      <p className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">Recent Campus Activity</p>
                      {data.feed.map((item, idx) => (
                        <div key={idx} className="rounded-lg border border-border p-3 text-left text-xs bg-white shadow-xs">
                          <span className={`text-[8px] font-bold uppercase px-1.5 py-0.5 rounded-sm ${item.type === 'resource' ? 'bg-indigo-50 text-indigo-600' : 'bg-amber-50 text-amber-600'}`}>
                            {item.type}
                          </span>
                          <p className="mt-1.5 font-bold text-foreground leading-tight">{item.title}</p>
                          <p className="mt-0.5 text-[9px] text-muted-foreground">{item.info}</p>
                        </div>
                      ))}
                    </div>

                    {/* leaderboards */}
                    <div className="space-y-2 pt-2 border-t border-border text-left">
                      <p className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                        🏆 Top Contributors
                      </p>
                      <div className="space-y-1.5">
                        {data.leaderboard.map((student, idx) => (
                          <div key={idx} className="flex items-center justify-between text-xs py-0.5">
                            <div className="flex items-center gap-2">
                              <span className="text-[9px] font-bold text-muted-foreground/60 w-3">{idx + 1}</span>
                              <span className={`h-5 w-5 rounded-full flex items-center justify-center text-[9px] font-bold ${student.avatarBg}`}>
                                {student.name[0]}
                              </span>
                              <span className="font-semibold text-foreground">{student.name}</span>
                            </div>
                            <span className="text-[9px] font-semibold text-primary">{student.points}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}
