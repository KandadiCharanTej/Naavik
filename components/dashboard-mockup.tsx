import {
  BookOpen,
  Briefcase,
  Compass,
  FolderGit2,
  Megaphone,
  Users,
  Lock,
} from 'lucide-react'
import { Logo } from '@/components/logo'

const navItems = [
  { icon: Compass, label: 'Discover', active: true },
  { icon: Briefcase, label: 'Opportunities' },
  { icon: FolderGit2, label: 'Projects' },
  { icon: BookOpen, label: 'Study Vault' },
  { icon: Users, label: 'Team Finder' },
]

export function ConceptPreview() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-foreground/5 dark:shadow-black/40">
        {/* window bar */}
        <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          </div>
          <div className="flex h-6 w-48 items-center justify-center rounded-md bg-background/70 px-3 text-[10px] font-medium text-muted-foreground">
            naviko.app/preview
          </div>
          <div className="w-12" />
        </div>

        <div className="flex">
          {/* sidebar */}
          <aside className="hidden w-48 shrink-0 flex-col gap-1 border-r border-border bg-secondary/10 p-3 sm:flex">
            <div className="mb-4 flex items-center px-2">
              <Logo className="h-6 w-auto" />
            </div>
            {navItems.map((item) => (
              <div
                key={item.label}
                className={
                  'flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[12px] font-semibold transition-colors ' +
                  (item.active
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground')
                }
              >
                <item.icon className="h-4 w-4 shrink-0" />
                {item.label}
              </div>
            ))}
            <div className="mt-auto rounded-xl border border-border bg-background p-3 text-left">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-[10px] font-bold text-foreground">VNRVJIET Hub</p>
              </div>
              <p className="text-[8px] text-muted-foreground mt-1 leading-tight">
                Campus space active. Verified by Admin Priyanka.
              </p>
            </div>
          </aside>

          {/* main */}
          <div className="min-w-0 flex-1 p-5 text-left">
            {/* top search bar mock */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex h-8 flex-1 items-center gap-2 rounded-lg border border-border bg-[#FAFAFC] px-3">
                <span className="text-[11px] text-muted-foreground">
                  Search notes, hackathons, and project teams...
                </span>
              </div>
              <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">
                P
              </div>
            </div>

            {/* opportunities feed */}
            <div className="mt-5 flex items-center justify-between">
              <p className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground">Opportunities for your branch</p>
              <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-600">
                Verified
              </span>
            </div>

            <div className="mt-3 space-y-3">
              <div className="rounded-xl border border-primary/20 bg-primary/[0.02] p-4 hover:border-primary/45 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="rounded bg-indigo-50 px-2 py-0.5 text-[9px] font-bold text-indigo-600">
                      INTERNSHIP
                    </span>
                    <h4 className="text-xs font-bold text-foreground mt-2 leading-snug">Full-Stack Intern (React & Node.js)</h4>
                    <p className="text-[10px] text-muted-foreground mt-1">Razorpay • Hyderabad / Remote • Stipend: ₹35,000/mo</p>
                  </div>
                  <button className="rounded-lg bg-primary px-3 py-1.5 text-[9px] font-bold text-white shadow-xs select-none">
                    Apply
                  </button>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-background p-4 hover:border-primary/20 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="rounded bg-rose-50 px-2 py-0.5 text-[9px] font-bold text-rose-600">
                      HACKATHON
                    </span>
                    <h4 className="text-xs font-bold text-foreground mt-2 leading-snug">Smart India Hackathon 2026</h4>
                    <p className="text-[10px] text-muted-foreground mt-1">National Govt • Prize: ₹2,000,000 • Hyderabad Hub</p>
                  </div>
                  <button className="rounded-lg border border-border bg-white hover:bg-muted text-foreground px-3 py-1.5 text-[9px] font-bold shadow-2xs select-none">
                    Register
                  </button>
                </div>
              </div>
            </div>

            {/* split bottom cards */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border bg-[#FAFAFC] p-3 text-left">
                <div className="flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5 text-primary" />
                  <p className="text-xs font-bold text-foreground">Study Vault</p>
                </div>
                <div className="mt-2 space-y-1.5">
                  <div className="rounded bg-white border border-border/60 p-1.5 text-[9px] font-semibold text-foreground truncate shadow-2xs">
                    DBMS PYQ (2024).pdf
                  </div>
                  <div className="rounded bg-white border border-border/60 p-1.5 text-[9px] font-semibold text-foreground truncate shadow-2xs">
                    OS Unit-3 Notes.pdf
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-[#FAFAFC] p-3 text-left">
                <div className="flex items-center gap-1.5">
                  <Megaphone className="h-3.5 w-3.5 text-primary" />
                  <p className="text-xs font-bold text-foreground">Updates</p>
                </div>
                <div className="mt-2 space-y-1.5">
                  <div className="rounded bg-white border border-border/60 p-1.5 text-[9px] font-semibold text-foreground truncate shadow-2xs">
                    Tech Fest Schedule live
                  </div>
                  <div className="rounded bg-white border border-border/60 p-1.5 text-[9px] font-semibold text-foreground truncate shadow-2xs">
                    Lab exams timeline
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* honest caption */}
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Concept Preview · Example Interface
      </p>
    </div>
  )
}
