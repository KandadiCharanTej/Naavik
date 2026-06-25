import {
  BookOpen,
  Briefcase,
  Compass,
  FolderGit2,
  Megaphone,
  Users,
} from 'lucide-react'
import { Logo } from '@/components/logo'

const navItems = [
  { icon: Compass, label: 'Discover', active: true },
  { icon: Briefcase, label: 'Opportunities' },
  { icon: FolderGit2, label: 'Projects' },
  { icon: BookOpen, label: 'Resources' },
  { icon: Users, label: 'Connect' },
]

const opportunityTypes = [
  { tag: 'Internships', accent: true },
  { tag: 'Hackathons', accent: false },
  { tag: 'Workshops', accent: false },
]

/**
 * A clean, honest concept preview of the planned product.
 * It deliberately shows the structure of the app with generic placeholders
 * instead of fake companies, salaries, or traction numbers.
 */
export function ConceptPreview() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-foreground/5 dark:shadow-black/40">
        {/* window bar */}
        <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-foreground/10" />
          <span className="h-3 w-3 rounded-full bg-foreground/10" />
          <span className="h-3 w-3 rounded-full bg-foreground/10" />
          <div className="ml-3 flex h-6 flex-1 items-center justify-center rounded-md bg-background/70 px-3 text-[11px] text-muted-foreground">
            Concept preview · design in progress
          </div>
        </div>

        <div className="flex">
          {/* sidebar */}
          <aside className="hidden w-44 shrink-0 flex-col gap-1 border-r border-border bg-secondary/30 p-3 sm:flex">
            <div className="mb-3 flex items-center px-2">
              <Logo className="h-15 w-auto" />
            </div>
            {navItems.map((item) => (
              <div
                key={item.label}
                className={
                  'flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] ' +
                  (item.active
                    ? 'bg-primary/12 text-foreground'
                    : 'text-muted-foreground')
                }
              >
                <item.icon
                  className={'h-4 w-4 ' + (item.active ? 'text-primary' : '')}
                />
                {item.label}
              </div>
            ))}
            <div className="mt-auto rounded-lg border border-dashed border-border p-2.5">
              <p className="text-[11px] text-muted-foreground">
                Your college workspace
              </p>
              <div className="mt-1.5 h-1.5 w-3/4 rounded-full bg-primary/25" />
            </div>
          </aside>

          {/* main */}
          <div className="min-w-0 flex-1 p-4">
            {/* top bar */}
            <div className="flex items-center gap-3">
              <div className="flex h-8 flex-1 items-center gap-2 rounded-lg border border-border bg-background/60 px-3">
                <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
                <span className="text-[12px] text-muted-foreground">
                  Personalised to your college, branch &amp; year
                </span>
              </div>
              <div className="h-8 w-8 rounded-full bg-primary/20" />
            </div>

            {/* opportunities feed */}
            <div className="mt-4 flex items-center justify-between">
              <p className="text-[13px] font-semibold">For you</p>
              <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] text-muted-foreground">
                Concept
              </span>
            </div>

            <div className="mt-2.5 space-y-2.5">
              {opportunityTypes.map((o) => (
                <div
                  key={o.tag}
                  className={
                    'rounded-xl border p-3 ' +
                    (o.accent
                      ? 'border-primary/40 bg-primary/[0.06]'
                      : 'border-border bg-background/50')
                  }
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                      {o.tag}
                    </span>
                    <div className="h-1.5 w-10 rounded-full bg-muted-foreground/25" />
                  </div>
                  <div className="mt-2 h-2 w-3/4 rounded-full bg-foreground/15" />
                  <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-muted-foreground/20" />
                </div>
              ))}
            </div>

            {/* bottom split */}
            <div className="mt-3 grid grid-cols-2 gap-2.5">
              <div className="rounded-xl border border-border bg-background/50 p-3">
                <div className="flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5 text-primary" />
                  <p className="text-[12px] font-medium">Resources</p>
                </div>
                <div className="mt-2.5 space-y-2">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                      <div className="h-1.5 flex-1 rounded-full bg-muted-foreground/20" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-border bg-background/50 p-3">
                <div className="flex items-center gap-1.5">
                  <Megaphone className="h-3.5 w-3.5 text-primary" />
                  <p className="text-[12px] font-medium">College updates</p>
                </div>
                <div className="mt-2.5 space-y-2">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                      <div className="h-1.5 flex-1 rounded-full bg-muted-foreground/20" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* honest caption */}
      <p className="mt-3 text-center text-xs text-muted-foreground">
        An early concept of what we&apos;re building — not a live product yet.
      </p>
    </div>
  )
}
