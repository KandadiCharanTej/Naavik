import { Reveal, StaggerContainer, StaggerItem } from '@/components/reveal'

export function WhatsReady() {
  const columns = [
    {
      title: '✅ AT LAUNCH',
      items: [
        { name: 'Opportunities', desc: 'Find internships, hackathons and scholarships filtered for your branch and year.' },
        { name: 'Study Vault', desc: 'Notes, PYQs, and semester study materials uploaded and verified by student admins.' },
        { name: 'Projects', desc: 'Showcase your builds to peers, founders, and recruiters looking for student developers.' },
        { name: 'Connect & Team Finder', desc: 'Find and chat with teammates for hackathons from colleges across TG & AP.' },
      ]
    },
    {
      title: '⏳ COMING SOON',
      items: [
        { name: 'College Workspace', desc: 'Your private campus hub for notes, announcements, and community.' },
        { name: 'Campus Updates', desc: 'Verified fests and official notices from your college — before they\'re buried.' },
        { name: 'Leaderboards', desc: 'Recognition for students who contribute the most to their campus community.' },
      ]
    },
    {
      title: '🔮 PLANNED',
      items: [
        { name: 'AI Study Assistant', desc: 'Semantic search across notes and study vaults — find anything in seconds.' },
        { name: 'Recruiter Hub', desc: 'Get found by companies based on your verified projects and skills.' },
        { name: 'Placement Reviews', desc: 'Verified interview experiences from your seniors at top companies.' },
        { name: 'Clubs & Alumni', desc: 'Connect with active student chapters and graduates from your college.' },
      ]
    }
  ]

  return (
    <section className="bg-[var(--bg-white)] py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5">
        
        {/* Header */}
        <Reveal>
          <div className="mb-16">
            <span className="eyebrow-label">WHAT YOU GET</span>
            <h2 className="text-[32px] md:text-[48px] font-bold tracking-tight leading-[1.1] text-foreground">
              Available at <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--purple-600)] to-[var(--purple-400)]">launch.</span>
            </h2>
          </div>
        </Reveal>

        {/* 3 Column Table */}
        <StaggerContainer delay={100} className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 gap-x-0 lg:divide-x divide-border">
          
          {columns.map((col, i) => (
            <StaggerItem key={i} className="flex flex-col lg:px-10 first:lg:pl-0 last:lg:pr-0">
              <h3 className="text-[14px] font-semibold tracking-widest uppercase text-[#111827] mb-8">
                {col.title}
              </h3>
              <div className="flex flex-col gap-8">
                {col.items.map((item, j) => (
                  <div key={j} className="flex flex-col transition-all hover:translate-x-1 duration-300">
                    <h4 className="text-[18px] font-bold text-foreground mb-1.5">{item.name}</h4>
                    <p className="text-[15px] text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </StaggerItem>
          ))}

        </StaggerContainer>


      </div>
    </section>
  )
}
