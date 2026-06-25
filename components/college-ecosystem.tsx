import { BookOpen, Megaphone, Users, Trophy, ChevronRight, GraduationCap } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const collegeCards = [
  {
    icon: BookOpen,
    title: 'Resources',
    desc: 'Syllabus copy, notes, previous year questions, and lab manuals organized by branch.',
  },
  {
    icon: Megaphone,
    title: 'Updates',
    desc: 'Official notifications, campus club recruitments, and upcoming tech fest schedules.',
  },
  {
    icon: Users,
    title: 'Community',
    desc: 'Direct connections with peers and senior mentors from your own campus.',
  },
  {
    icon: Trophy,
    title: 'Leaderboards',
    desc: 'Recognition and profile badges for top academic and project contributors.',
  },
]

const mockFeed = [
  {
    type: 'resource',
    title: 'DBMS Previous Year Papers (2024)',
    info: 'Uploaded by Rahul S. • CSE • Sem 5',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    type: 'update',
    title: 'Google Developer Group Core Team Registrations',
    info: 'Deadline: July 12 • Campus Club',
    color: 'bg-emerald-50 text-emerald-600',
  },
]

const mockLeaderboard = [
  { rank: '1', name: 'Rahul S.', points: '540 pts', avatar: 'bg-purple-100 text-purple-700' },
  { rank: '2', name: 'Ananya K.', points: '480 pts', avatar: 'bg-indigo-100 text-indigo-700' },
  { rank: '3', name: 'Sai Kumar', points: '410 pts', avatar: 'bg-blue-100 text-blue-700' },
]

export function CollegeEcosystem() {
  return (
    <section
      id="colleges"
      className="scroll-mt-20 border-t border-border py-20 sm:py-28 bg-white"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="College Ecosystem"
          title={
            <>
              A workspace for{' '}
              <span className="text-primary">your campus.</span>
            </>
          }
          description="Everything on Naviko is filtered dynamically to show only what is relevant to your exact college."
        />

        {/* 4 Core pillars */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collegeCards.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 80}
              className="rounded-2xl border border-border bg-[#FAFAFC] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold tracking-tight text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Visual Mockup representation of workspace */}
        <Reveal delay={200} className="mt-12 overflow-hidden rounded-3xl border border-border bg-[#FAFAFC] p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            {/* mock left */}
            <div className="flex-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/5 px-2.5 py-1 rounded-full">
                Interactive Concept
              </span>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                One workspace, tailored to you
              </h3>
              <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Join your classmates in a clean space. Filtered by your college, branch, and current semester.
              </p>

              <div className="mt-6 space-y-3.5">
                <div className="flex items-center gap-3 text-sm text-foreground/80">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  No noisy, unorganized spam
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground/80">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Moderated by verified student admins
                </div>
              </div>
            </div>

            {/* mock right: visual UI */}
            <div className="w-full lg:w-[500px] shrink-0 overflow-hidden rounded-2xl border border-border bg-white shadow-lg">
              {/* mock header */}
              <div className="flex items-center justify-between border-b border-border bg-[#FAFAFC] px-5 py-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm">
                    C
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">CBIT Hyderabad</p>
                    <p className="text-[10px] text-muted-foreground">Student Workspace</p>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>

              {/* mock layout grid */}
              <div className="grid sm:grid-cols-5 divide-x divide-border">
                {/* mini sidebar */}
                <div className="hidden sm:block col-span-2 p-3 space-y-1 bg-[#FAFAFC] text-[11px] font-medium text-muted-foreground">
                  <div className="bg-primary/5 text-primary rounded px-2.5 py-1.5 font-semibold"># main-board</div>
                  <div className="rounded px-2.5 py-1.5 hover:bg-muted/50 cursor-pointer"># pyq-archive</div>
                  <div className="rounded px-2.5 py-1.5 hover:bg-muted/50 cursor-pointer"># club-updates</div>
                  <div className="rounded px-2.5 py-1.5 hover:bg-muted/50 cursor-pointer"># team-up</div>
                </div>

                {/* mini feed & leaderboard */}
                <div className="col-span-3 p-4 space-y-4">
                  {/* feed section */}
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Recent Activity</p>
                    {mockFeed.map((item, i) => (
                      <div key={i} className="rounded-lg border border-border p-2.5 text-left text-xs bg-white">
                        <div className="flex items-center gap-1.5">
                          <span className={`rounded-sm px-1.5 py-0.5 text-[8px] font-semibold uppercase ${item.color}`}>
                            {item.type}
                          </span>
                        </div>
                        <p className="mt-1 font-semibold text-foreground leading-tight">{item.title}</p>
                        <p className="mt-0.5 text-[9px] text-muted-foreground">{item.info}</p>
                      </div>
                    ))}
                  </div>

                  {/* contributors board section */}
                  <div className="space-y-2 pt-2 border-t border-border">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                      <Trophy className="h-3 w-3 text-amber-500" /> Top Contributors
                    </p>
                    <div className="space-y-1.5">
                      {mockLeaderboard.map((item, i) => (
                        <div key={i} className="flex items-center justify-between text-xs py-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold text-muted-foreground/60 w-3">{item.rank}</span>
                            <span className={`h-5 w-5 rounded-full flex items-center justify-center text-[9px] font-bold ${item.avatar}`}>
                              {item.name[0]}
                            </span>
                            <span className="font-medium text-foreground">{item.name}</span>
                          </div>
                          <span className="text-[10px] font-semibold text-primary">{item.points}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
