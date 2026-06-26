import { Compass, BookOpen, Layers, Users, Building2, Bell, BookMarked, Sparkles, BrainCircuit, LineChart } from 'lucide-react'

export function WhatsReady() {
  const columns = [
    {
      title: '🌍 Growth',
      desc: 'Everything that helps you grow beyond your college.',
      groups: [
        {
          name: 'Opportunities',
          icon: Compass,
          items: ['Internships', 'Hackathons', 'Workshops', 'Competitions', 'Scholarships']
        },
        {
          name: 'Projects',
          icon: Layers,
          items: ['Project Showcase', 'Team Finder', 'Collaboration']
        },
        {
          name: 'Network',
          icon: Users,
          items: ['Student Profiles', 'Public Feed', 'Mentorship']
        }
      ]
    },
    {
      title: '🏫 College Space',
      desc: 'Everything related to your own college.',
      groups: [
        {
          name: 'Academics',
          icon: BookOpen,
          items: ['Verified Notes', 'PYQs', 'Lab Manuals']
        },
        {
          name: 'Campus Life',
          icon: Building2,
          items: ['Clubs', 'Communities', 'Events', 'Announcements']
        },
        {
          name: 'Community',
          icon: BookMarked,
          items: ['Campus Leaderboards', 'Seniors', 'Alumni Connect']
        }
      ]
    },
    {
      title: '🚀 Future',
      desc: "What we're planning based on student feedback.",
      groups: [
        {
          name: 'AI Integration',
          icon: BrainCircuit,
          items: ['AI Study Assistant', 'Resume Screener', 'Smart Match']
        },
        {
          name: 'Career',
          icon: Sparkles,
          items: ['Direct Recruiters', 'Interview Experiences', 'Mock Interviews']
        },
        {
          name: 'College Systems',
          icon: LineChart,
          items: ['ERP Integration', 'Attendance Tracking', 'Performance Analytics']
        }
      ]
    }
  ]

  return (
    <section className="bg-white py-24 sm:py-32" id="features">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-wider text-primary uppercase bg-primary/5 px-3 py-1.5 rounded-full border border-primary/20">Product Overview</span>
          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Everything Inside Naavik
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {columns.map((col, i) => (
            <div key={i} className="group flex flex-col rounded-[2.5rem] border border-border bg-white shadow-xl shadow-primary/5 p-8 sm:p-10 hover:shadow-2xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
              <div className="border-b border-border pb-8 mb-8">
                <h3 className="text-2xl font-extrabold text-foreground mb-3">{col.title}</h3>
                <p className="text-sm font-medium text-muted-foreground leading-relaxed">{col.desc}</p>
              </div>
              
              <div className="flex flex-col gap-10 flex-1">
                {col.groups.map((group, j) => (
                  <div key={j} className="flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-8 w-8 rounded-lg bg-secondary/10 flex items-center justify-center text-foreground border border-border group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                        <group.icon className="h-4 w-4" />
                      </div>
                      <h4 className="text-base font-bold text-foreground">{group.name}</h4>
                    </div>
                    
                    <ul className="flex flex-wrap gap-2.5 pl-[2.75rem]">
                      {group.items.map((item, k) => (
                        <li key={k} className="text-[11px] font-bold text-muted-foreground bg-[#F9FAFB] border border-border px-3 py-1.5 rounded-lg">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
