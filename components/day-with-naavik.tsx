import { ArrowRight, Compass, Bell, BookOpen, Users } from 'lucide-react'

export function DayWithNaavik() {
  const events = [
    {
      time: '🌅 Morning',
      icon: Compass,
      situation: 'New Internship Posted',
      action: "You see the notification on your dashboard.",
      outcome: 'Apply in one tap.',
      preview: (
        <div className="mt-4 rounded-xl border border-border bg-white p-4 shadow-sm flex items-center justify-between">
           <div>
             <h5 className="text-sm font-bold text-foreground">Frontend Intern</h5>
             <p className="text-[10px] text-muted-foreground mt-0.5">Deadline: Today</p>
           </div>
           <button className="h-8 rounded-lg bg-primary px-4 text-xs font-bold text-white">Apply</button>
        </div>
      )
    },
    {
      time: '☀️ Afternoon',
      icon: Bell,
      situation: 'Workshop Registration',
      action: 'College announces a new AI workshop.',
      outcome: 'Register before seats fill up.',
      preview: (
        <div className="mt-4 rounded-xl border border-border bg-white p-4 shadow-sm flex items-center gap-3">
           <div className="h-10 w-10 rounded-lg bg-orange-100 flex items-center justify-center text-sm shadow-sm border border-orange-200">🎪</div>
           <div>
             <h5 className="text-sm font-bold text-foreground">AI Workshop</h5>
             <p className="text-[10px] text-emerald-600 font-bold mt-0.5 uppercase">Registration Open</p>
           </div>
        </div>
      )
    },
    {
      time: '🌆 Evening',
      icon: BookOpen,
      situation: 'Study Material Uploaded',
      action: 'Your senior uploads new DBMS notes.',
      outcome: 'Download instantly from Vault.',
      preview: (
        <div className="mt-4 rounded-xl border border-border bg-white p-4 shadow-sm flex items-center gap-3">
           <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 text-sm shadow-sm border border-emerald-500/20">📁</div>
           <div>
             <h5 className="text-sm font-bold text-foreground">DBMS Notes.pdf</h5>
             <p className="text-[10px] text-muted-foreground mt-0.5">2.4 MB</p>
           </div>
        </div>
      )
    },
    {
      time: '🌙 Night',
      icon: Users,
      situation: 'Hackathon Team Building',
      action: "Need a designer for tomorrow's hackathon?",
      outcome: 'Find and connect in seconds.',
      preview: (
        <div className="mt-4 rounded-xl border border-border bg-white p-4 shadow-sm flex items-center justify-between">
           <div className="flex items-center gap-3">
             <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-[10px] border border-primary/20">SK</div>
             <h5 className="text-sm font-bold text-foreground">Sai Kumar</h5>
           </div>
           <span className="text-[10px] font-bold bg-secondary/10 text-primary px-2 py-1 rounded border border-border">Designer</span>
        </div>
      )
    },
  ]

  return (
    <section className="bg-[#F9FAFB] py-24 sm:py-32 border-y border-border" id="day-in-life">
      <div className="mx-auto max-w-5xl px-5">
        <div className="text-center sm:text-left mb-20">
          <span className="text-xs font-bold tracking-wider text-primary uppercase bg-primary/5 px-3 py-1.5 rounded-full border border-primary/20">Daily Routine</span>
          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            A day with Naavik.
          </h2>
        </div>

        <div className="relative border-l-2 border-border pl-8 sm:pl-12 space-y-20 ml-4 sm:ml-0">
          {events.map((event, i) => (
            <div key={i} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] sm:-left-[57px] flex h-5 w-5 items-center justify-center rounded-full bg-primary outline outline-[10px] outline-[#F9FAFB] shadow-sm" />
              
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 w-full max-w-4xl items-start">
                {/* Left side text */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-extrabold text-foreground bg-white px-3 py-1.5 rounded-lg border border-border shadow-sm">{event.time}</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Situation</span>
                      <h3 className="text-lg font-bold text-foreground mt-1">{event.situation}</h3>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Action</span>
                      <p className="text-sm font-medium text-muted-foreground mt-1">{event.action}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Result</span>
                      <div className="flex items-center gap-2 mt-1">
                        <ArrowRight className="h-4 w-4 text-primary" />
                        <p className="text-base font-bold text-foreground">{event.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side UI Card */}
                <div className="w-full sm:w-[350px] shrink-0">
                  <div className="rounded-2xl border border-border bg-white p-6 shadow-xl shadow-primary/5 group-hover:border-primary/30 transition-all hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                       <div className="h-8 w-8 rounded-lg bg-secondary/10 flex items-center justify-center text-foreground border border-border">
                         <event.icon className="h-4 w-4" />
                       </div>
                       <div className="h-2 w-full bg-secondary/20 rounded-full"></div>
                    </div>
                    {event.preview}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
