import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function InsideNaavik() {
  const growthCategories = [
    {
      title: '💼 Opportunities',
      items: ['Internships', 'Hackathons', 'Workshops', 'Competitions', 'Scholarships'],
      desc: 'Discover opportunities matched to your branch, year and interests.',
      preview: (
        <div className="group rounded-2xl border border-border bg-[#F9FAFB] p-6 shadow-sm hover:border-primary/30 transition-all cursor-pointer">
          <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">Frontend Developer Intern</h4>
          <p className="text-sm font-medium text-muted-foreground mt-1 mb-5">Remote · ₹35,000/month</p>
          <div className="flex items-center justify-between border-t border-border pt-4">
            <span className="text-[11px] font-bold text-orange-600 bg-orange-500/10 px-2.5 py-1 rounded-md uppercase tracking-wider">Deadline: 3 days</span>
            <button className="text-sm font-bold text-primary flex items-center gap-1.5 group-hover:underline">Apply <ArrowRight className="h-4 w-4" /></button>
          </div>
        </div>
      )
    },
    {
      title: '🚀 Projects',
      items: ['Showcase Projects', 'Build Together', 'Team Finder'],
      desc: 'Find teammates, collaborate on projects and build your portfolio.',
      preview: (
        <div className="group rounded-2xl border border-border bg-[#F9FAFB] p-6 shadow-sm hover:border-primary/30 transition-all cursor-pointer">
          <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">AI Attendance App</h4>
          <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mt-4 mb-3 border-t border-border pt-4">Looking for:</p>
          <div className="flex flex-wrap gap-2">
            <span className="text-[11px] font-bold bg-secondary/10 text-primary px-3 py-1.5 rounded-lg border border-border">Frontend Developer</span>
            <span className="text-[11px] font-bold bg-secondary/10 text-primary px-3 py-1.5 rounded-lg border border-border">Backend Developer</span>
            <span className="text-[11px] font-bold bg-secondary/10 text-primary px-3 py-1.5 rounded-lg border border-border">Designer</span>
          </div>
        </div>
      )
    },
    {
      title: '🤝 Connect',
      items: ['Students', 'Search', 'Networking', 'Public Feed'],
      desc: 'Meet students across Telangana & Andhra Pradesh who share your interests.',
      preview: (
        <div className="group rounded-2xl border border-border bg-[#F9FAFB] p-6 shadow-sm hover:border-primary/30 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm border border-primary/20">SK</div>
            <div>
              <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">Sai Kumar</h4>
              <p className="text-xs font-medium text-muted-foreground mt-0.5">CBIT • AI/ML</p>
              <p className="text-[11px] font-bold text-emerald-600 mt-2 bg-emerald-500/10 inline-block px-2 py-0.5 rounded uppercase tracking-wider">Available for SIH Team</p>
            </div>
          </div>
          <button className="text-sm font-bold text-primary flex items-center gap-1.5 group-hover:underline self-start sm:self-center">Connect <ArrowRight className="h-4 w-4" /></button>
        </div>
      )
    }
  ]

  const collegeCategories = [
    {
      title: '📚 Resources',
      items: ['Notes', 'PYQs', 'Lab Manuals'],
      desc: 'A structured vault of materials specifically for your college.',
      preview: (
        <div className="group rounded-2xl border border-border bg-[#F9FAFB] p-6 shadow-sm hover:border-emerald-500/30 transition-all cursor-pointer flex flex-col gap-4">
          <div className="flex items-center gap-4 p-2 rounded-xl hover:bg-white transition-colors">
            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 text-base shadow-sm border border-emerald-500/20">📁</div>
            <h4 className="text-sm font-bold text-foreground">DBMS Unit 4 Notes</h4>
          </div>
          <div className="flex items-center gap-4 p-2 rounded-xl hover:bg-white transition-colors">
            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 text-base shadow-sm border border-emerald-500/20">📁</div>
            <h4 className="text-sm font-bold text-foreground">Operating Systems Lab</h4>
          </div>
        </div>
      )
    },
    {
      title: '📢 Campus Updates',
      items: ['Announcements', 'Clubs', 'Communities', 'Events'],
      desc: 'Never miss an important notice, event, or club deadline again.',
      preview: (
        <div className="group rounded-2xl border border-border bg-[#F9FAFB] p-6 shadow-sm hover:border-emerald-500/30 transition-all cursor-pointer">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-8 w-8 rounded-lg bg-orange-100 flex items-center justify-center text-sm shadow-sm border border-orange-200">🎪</div>
            <h4 className="text-base font-bold text-foreground">Google Developer Student Club</h4>
          </div>
          <div className="flex items-center justify-between border-t border-border pt-4">
            <p className="text-[11px] font-bold text-emerald-600 bg-emerald-500/10 px-2.5 py-1 rounded-md uppercase tracking-wider">Recruitments Open</p>
            <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Deadline: Friday</p>
          </div>
        </div>
      )
    },
    {
      title: '🏆 Community',
      items: ['Leaderboards', 'Seniors', 'Alumni'],
      desc: 'Earn reputation points for helping your college community.',
      preview: (
        <div className="group rounded-2xl border border-border bg-[#F9FAFB] p-6 shadow-sm hover:border-emerald-500/30 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xl shadow-sm border border-amber-200">👑</div>
            <div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Top Contributor</p>
              <h4 className="text-base font-bold text-foreground group-hover:text-emerald-600 transition-colors">Sai Kumar</h4>
            </div>
          </div>
          <span className="text-sm font-bold text-emerald-600 bg-emerald-500/10 px-3 py-1.5 rounded-lg self-start sm:self-center">540 pts</span>
        </div>
      )
    }
  ]

  return (
    <section className="bg-white py-24 sm:py-32" id="inside-naavik">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <span className="text-xs font-bold tracking-wider text-primary uppercase bg-primary/5 px-3 py-1.5 rounded-full border border-primary/20">Inside Naavik</span>
          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Two spaces.<br className="hidden sm:block" /> Everything you need.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          
          {/* LEFT CARD — GROWTH */}
          <div className="flex flex-col rounded-[2.5rem] border border-border bg-white shadow-2xl shadow-primary/5 overflow-hidden">
            <div className="p-8 sm:p-12 border-b border-border bg-gradient-to-b from-secondary/10 to-transparent">
              <span className="text-xs font-bold tracking-wider text-primary uppercase flex items-center gap-2 mb-4 bg-white/50 backdrop-blur-sm w-fit px-3 py-1.5 rounded-full border border-primary/10">
                <span className="text-base">🌍</span> GROWTH
              </span>
              <h3 className="text-3xl font-extrabold text-foreground tracking-tight">Beyond your college.</h3>
            </div>
            
            <div className="p-8 sm:p-12 flex flex-col gap-16">
              {growthCategories.map((cat, i) => (
                <div key={i} className="flex flex-col">
                  <h4 className="text-xl font-extrabold text-foreground mb-3 flex items-center gap-2">
                    {cat.title}
                  </h4>
                  <p className="text-base font-medium text-muted-foreground leading-relaxed mb-6">{cat.desc}</p>
                  
                  <ul className="flex flex-wrap gap-2.5 mb-6">
                    {cat.items.map((item, j) => (
                      <li key={j} className="text-xs font-bold text-muted-foreground bg-[#F9FAFB] border border-border px-3 py-1.5 rounded-lg hover:bg-secondary/10 transition-colors cursor-default">
                        {item}
                      </li>
                    ))}
                  </ul>

                  {cat.preview}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD — COLLEGE */}
          <div className="flex flex-col rounded-[2.5rem] border border-border bg-white shadow-2xl shadow-emerald-500/5 overflow-hidden">
            <div className="p-8 sm:p-12 border-b border-border bg-gradient-to-b from-emerald-500/10 to-transparent">
              <span className="text-xs font-bold tracking-wider text-emerald-600 uppercase flex items-center gap-2 mb-4 bg-white/50 backdrop-blur-sm w-fit px-3 py-1.5 rounded-full border border-emerald-500/10">
                <span className="text-base">🏫</span> COLLEGE SPACE
              </span>
              <h3 className="text-3xl font-extrabold text-foreground tracking-tight">Inside your campus.</h3>
            </div>
            
            <div className="p-8 sm:p-12 flex flex-col gap-16">
              {collegeCategories.map((cat, i) => (
                <div key={i} className="flex flex-col">
                  <h4 className="text-xl font-extrabold text-foreground mb-3 flex items-center gap-2">
                    {cat.title}
                  </h4>
                  <p className="text-base font-medium text-muted-foreground leading-relaxed mb-6">{cat.desc}</p>
                  
                  <ul className="flex flex-wrap gap-2.5 mb-6">
                    {cat.items.map((item, j) => (
                      <li key={j} className="text-xs font-bold text-muted-foreground bg-[#F9FAFB] border border-border px-3 py-1.5 rounded-lg hover:bg-emerald-500/5 transition-colors cursor-default">
                        {item}
                      </li>
                    ))}
                  </ul>

                  {cat.preview}
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
