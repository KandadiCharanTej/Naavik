import { Reveal } from '@/components/reveal'

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
    <section className="bg-[var(--bg-white)] py-[72px] lg:py-[120px]">
      <div className="mx-auto max-w-[1200px] px-5">
        
        {/* Header */}
        <Reveal>
          <div className="mb-16">
            <span className="eyebrow-label">WHAT YOU GET</span>
            <h2 className="text-[28px] md:text-[40px] font-extrabold text-[#111827] tracking-tight">
              Available at launch.
            </h2>
          </div>
        </Reveal>

        {/* 3 Column Table */}
        <Reveal delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 gap-x-0 lg:divide-x divide-border">
            
            {columns.map((col, i) => (
              <div key={i} className="flex flex-col lg:px-10 first:lg:pl-0 last:lg:pr-0">
                <h3 className="text-[14px] font-semibold tracking-widest uppercase text-[#111827] mb-8">
                  {col.title}
                </h3>
                <div className="flex flex-col gap-8">
                  {col.items.map((item, j) => (
                    <div key={j} className="flex flex-col">
                      <h4 className="text-[15px] font-semibold text-[#111827] mb-1.5">{item.name}</h4>
                      <p className="text-[14px] text-[#6B7280] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </Reveal>

        {/* Footer */}
        <Reveal delay={200}>
          <div className="mt-16 pt-8 border-t border-border lg:border-none lg:pt-0">
            <p className="text-[14px] text-[#6B7280] text-center italic">
              We build in public. Early members vote on what gets prioritised.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
