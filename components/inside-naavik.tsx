'use client'

import { Reveal, StaggerContainer, StaggerItem, premiumEasing } from '@/components/reveal'
import { ADMIN_FORM_URL } from '@/lib/constants'
import { motion } from 'framer-motion'

function MiniUICard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div 
      whileHover={{ y: -4, boxShadow: '0 10px 25px rgba(0,0,0,0.06)' }}
      transition={{ duration: 0.3, ease: premiumEasing }}
      className="bg-white border border-border rounded-[10px] p-3 shadow-sm relative group overflow-hidden"
    >
      <div className="absolute top-3 right-3 text-[10px] text-[#9CA3AF] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        Preview
      </div>
      {children}
    </motion.div>
  )
}

export function InsideNaavik() {
  const growthChips = [
    '💼 Internships', '🏆 Hackathons', '🎓 Scholarships',
    '🛠 Workshops', '💡 Startups', '🤝 Co-founders',
    '🗂 Projects', '👥 Team Finder', '📅 Events'
  ]

  const collegeChips = [
    '📁 Notes', '📄 PYQs', '🧪 Lab Manuals',
    '📢 Announcements', '🎪 Clubs', '📅 Events',
    '🎓 Seniors', '🏆 Leaderboard', '📚 Resources'
  ]

  return (
    <section className="bg-[var(--bg-gray)] py-[72px] lg:py-[120px]" id="inside-naavik">
      <div className="mx-auto max-w-[1200px] px-5">
        
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16">
            <span className="eyebrow-label">INSIDE NAAVIK</span>
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-foreground tracking-tight">
              Two spaces. Everything you need.
            </h2>
            <p className="mt-4 text-[17px] text-[#6B7280] max-w-[600px] mx-auto">
              Naavik is organised into two core areas.<br className="hidden sm:block" /> Everything flows from these.
            </p>
          </div>
        </Reveal>

        {/* Two Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* LEFT CARD - GROWTH */}
          <Reveal delay={100} className="w-full">
            <div className="ui-preview-card !p-8 h-full flex flex-col">
              <div className="flex flex-col items-start text-left">
                <span className="text-[32px] mb-4">🌍</span>
                <span className="text-[11px] text-[var(--purple-600)] uppercase tracking-wider font-bold mb-2">GROWTH</span>
                <h3 className="text-[22px] font-bold text-[#111827] mb-1">Everything beyond your college.</h3>
                <p className="text-[14px] text-[#6B7280] mb-4">Opportunities, teams, and connections across TG & AP.</p>
                <span className="inline-flex items-center rounded-full border border-[var(--chip-growth-border)] bg-[var(--chip-growth-bg)] text-[var(--chip-growth-text)] px-3 py-1 text-[12px] font-medium">
                  50+ opportunities monthly
                </span>
              </div>

              <div className="h-px bg-[#F3F4F6] w-full my-6" />

              <div className="flex flex-wrap gap-2">
                {growthChips.map(chip => (
                  <span key={chip} className="feature-chip chip-growth">{chip}</span>
                ))}
              </div>

              <div className="h-px bg-[#F3F4F6] w-full my-6" />

              <div className="flex flex-col gap-2 flex-grow">
                {/* Internship */}
                <MiniUICard>
                  <div className="text-[11px] text-[var(--purple-600)] font-bold uppercase mb-1 flex justify-between">
                    <span>💼 INTERNSHIP</span>
                    <span className="text-orange-500 normal-case">2 days left</span>
                  </div>
                  <h4 className="text-[16px] font-semibold text-[#111827]">Full-Stack Developer Intern</h4>
                  <p className="text-[13px] text-[#374151]">Razorpay &middot; Remote &middot; ₹35,000/month</p>
                  <p className="text-[12px] text-[#6B7280] mt-0.5">CSE / IT &middot; 2nd & 3rd Year</p>
                  <div className="mt-3 flex justify-between items-center">
                    <button className="text-[12px] font-semibold text-[var(--purple-600)] flex items-center gap-1 hover:underline">
                      Apply Now &rarr;
                    </button>
                  </div>
                </MiniUICard>

                {/* Hackathon */}
                <MiniUICard>
                  <div className="text-[11px] text-[var(--purple-600)] font-bold uppercase mb-1 flex justify-between">
                    <span>🏆 HACKATHON</span>
                    <span className="text-emerald-500 normal-case">Open now</span>
                  </div>
                  <h4 className="text-[16px] font-semibold text-[#111827]">Smart India Hackathon 2026</h4>
                  <p className="text-[13px] text-[#374151]">Govt of India &middot; Hyderabad Centre</p>
                  <p className="text-[12px] text-[#6B7280] mt-0.5">Prize: ₹2,00,000 &middot; Team of 4</p>
                  <div className="mt-3 flex justify-between items-center">
                    <button className="text-[12px] font-semibold text-[var(--purple-600)] flex items-center gap-1 hover:underline">
                      Register &rarr;
                    </button>
                    <span className="text-[11px] text-[#6B7280]">Deadline: Aug 31</span>
                  </div>
                </MiniUICard>

                {/* Team Finder */}
                <MiniUICard>
                  <div className="text-[11px] text-[var(--purple-600)] font-bold uppercase mb-1">
                    <span>👥 TEAM FINDER</span>
                  </div>
                  <h4 className="text-[16px] font-semibold text-[#111827]">Need React Native Developer</h4>
                  <p className="text-[13px] text-[#374151]">Smart India Hackathon &middot; SIH 2026</p>
                  <p className="text-[12px] text-[#6B7280] mt-1 flex items-center gap-1.5">
                    Rahul K. &middot; <span className="bg-muted px-1.5 py-0.5 rounded text-[10px] font-medium">CBIT</span> &middot; Hyderabad
                  </p>
                  <div className="mt-3">
                    <button className="text-[12px] font-semibold text-[var(--purple-600)] flex items-center gap-1 hover:underline">
                      View Post &rarr;
                    </button>
                  </div>
                </MiniUICard>
              </div>
            </div>
          </Reveal>

          {/* RIGHT CARD - COLLEGE */}
          <Reveal delay={200} className="w-full">
            <div className="ui-preview-card !p-8 h-full flex flex-col">
              <div className="flex flex-col items-start text-left">
                <span className="text-[32px] mb-4">🏫</span>
                <span className="text-[11px] text-[var(--purple-600)] uppercase tracking-wider font-bold mb-2">COLLEGE</span>
                <h3 className="text-[22px] font-bold text-[#111827] mb-1">Everything inside your college.</h3>
                <p className="text-[14px] text-[#6B7280] mb-4">Notes, events, and resources — verified and organised.</p>
                <span className="inline-flex items-center rounded-full border border-[var(--chip-college-border)] bg-[var(--chip-college-bg)] text-[var(--chip-college-text)] px-3 py-1 text-[12px] font-medium">
                  Activated by a verified student admin
                </span>
              </div>

              <div className="h-px bg-[#F3F4F6] w-full my-6" />

              <div className="flex flex-wrap gap-2">
                {collegeChips.map(chip => (
                  <span key={chip} className="feature-chip chip-college">{chip}</span>
                ))}
              </div>

              <div className="h-px bg-[#F3F4F6] w-full my-6" />

              <div className="flex flex-col gap-2 mb-6">
                {/* Study Resource */}
                <MiniUICard>
                  <div className="text-[11px] text-emerald-600 font-bold uppercase mb-1">
                    <span>📁 STUDY RESOURCE</span>
                  </div>
                  <h4 className="text-[16px] font-semibold text-[#111827]">DBMS Previous Year Paper 2024</h4>
                  <p className="text-[13px] text-[#374151]">CSE &middot; Semester 4 &middot; Uploaded by Senior Admin</p>
                  <div className="mt-3">
                    <button className="text-[12px] font-semibold text-[var(--purple-600)] flex items-center gap-1 hover:underline">
                      Download PDF &rarr;
                    </button>
                  </div>
                </MiniUICard>

                {/* Campus Update */}
                <MiniUICard>
                  <div className="text-[11px] text-[var(--purple-600)] font-bold uppercase mb-1">
                    <span>📢 CAMPUS UPDATE &middot; March 15–18</span>
                  </div>
                  <h4 className="text-[16px] font-semibold text-[#111827]">Convergence Tech Fest 2026</h4>
                  <p className="text-[13px] text-[#374151]">IEEE Student Branch &middot; Prize Pool: ₹30,000</p>
                  <div className="mt-3">
                    <button className="text-[12px] font-semibold text-[var(--purple-600)] flex items-center gap-1 hover:underline">
                      View Details &rarr;
                    </button>
                  </div>
                </MiniUICard>

                {/* Leaderboard */}
                <MiniUICard>
                  <div className="text-[11px] text-[var(--purple-600)] font-bold uppercase mb-1">
                    <span>🏆 TOP CONTRIBUTORS — This Month</span>
                  </div>
                  <div className="flex flex-col gap-1.5 mt-2">
                    <div className="flex justify-between items-center text-[13px] font-medium text-[#111827]">
                      <span>E. Sai</span>
                      <span>490 pts &middot; 🥇</span>
                    </div>
                    <div className="flex justify-between items-center text-[13px] font-medium text-[#374151]">
                      <span>V. Keerthi</span>
                      <span>430 pts &middot; 🥈</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <button className="text-[12px] font-semibold text-[var(--purple-600)] flex items-center gap-1 hover:underline">
                      See Full Board &rarr;
                    </button>
                  </div>
                </MiniUICard>
              </div>

              {/* Trust Callout inside College card */}
              <div className="mt-auto trust-callout text-[14px] text-[#111827] leading-relaxed">
                <div className="font-bold mb-1">🛡️ Verified Workspaces Only</div>
                <p>
                  Each campus goes live only after a verified student admin activates it. 
                  We don't create empty campuses. Quality over scale — always.
                </p>
              </div>

            </div>
          </Reveal>

        </div>

        {/* Apply CTA */}
        <Reveal delay={300}>
          <div className="mt-16 flex flex-col items-center justify-center text-center">
            <p className="text-[15px] text-[#374151] mb-2">Don't see your college?</p>
            <a 
              href={ADMIN_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-semibold text-[var(--purple-600)] hover:underline flex items-center gap-1 transition-colors"
            >
              &rarr; Apply to bring Naavik to your campus
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
