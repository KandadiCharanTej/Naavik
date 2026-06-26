'use client'

import { useState } from 'react'
import { Reveal } from '@/components/reveal'
import { Home, Globe, Library, Users, FolderKanban, Search, Bell, Pin } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ProductPreview() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'opportunities' | 'notes' | 'team'>('dashboard')

  const tabs = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'opportunities', label: 'Opportunities' },
    { id: 'notes', label: 'Notes Library' },
    { id: 'team', label: 'Team Finder' },
  ] as const

  return (
    <section className="bg-[var(--bg-purple-tint)] py-[72px] lg:py-[120px]" id="product-preview">
      <div className="mx-auto max-w-[1200px] px-5 flex flex-col lg:flex-row gap-12 lg:gap-16">
        
        {/* Left Column */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit">
          <Reveal>
            <span className="eyebrow-label">PRODUCT PREVIEW</span>
            <h2 className="text-[28px] md:text-[40px] font-extrabold text-[#111827] tracking-tight leading-tight mb-4">
              This is what it looks like.
            </h2>
            <p className="text-[17px] text-[#374151] mb-6">
              Designed for how engineering students actually work.
            </p>
            <p className="text-[14px] text-[#9CA3AF] leading-relaxed hidden lg:block">
              Everything you see is a realistic example of what the product will contain. No placeholders.
            </p>
          </Reveal>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-2/3">
          <Reveal delay={100}>
            
            {/* Tab Nav */}
            <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-6 -mx-5 px-5 lg:mx-0 lg:px-0">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "whitespace-nowrap px-4 py-2 rounded-[8px] text-[14px] font-medium transition-colors border",
                    activeTab === tab.id 
                      ? "bg-white text-[var(--purple-600)] border-[var(--purple-600)] border-b-[2px] shadow-sm"
                      : "bg-transparent text-[#6B7280] border-transparent hover:text-[#374151] hover:bg-black/5"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="ui-preview-card !p-0 overflow-hidden relative shadow-[0_20px_60px_rgba(0,0,0,0.06)] min-h-[500px] flex">
              <div className="absolute top-3 right-3 z-20 px-2 py-0.5 rounded-[4px] bg-white text-[11px] text-[#9CA3AF] font-medium border border-border shadow-sm">
                Preview
              </div>
              
              {/* Dashboard Content */}
              {activeTab === 'dashboard' && (
                <div className="flex w-full animate-in fade-in duration-300">
                  {/* Sidebar */}
                  <div className="w-[64px] bg-[#0F0F0F] shrink-0 hidden sm:flex flex-col items-center py-6 gap-6">
                    <div className="h-6 w-6 rounded bg-primary/20 text-primary flex items-center justify-center font-bold text-[12px] mb-4">N</div>
                    <button className="text-[var(--purple-500)] p-2 rounded-lg bg-white/10"><Home className="w-5 h-5" /></button>
                    <button className="text-white/50 hover:text-white transition-colors p-2"><Globe className="w-5 h-5" /></button>
                    <button className="text-white/50 hover:text-white transition-colors p-2"><Library className="w-5 h-5" /></button>
                    <button className="text-white/50 hover:text-white transition-colors p-2"><Users className="w-5 h-5" /></button>
                    <button className="text-white/50 hover:text-white transition-colors p-2"><FolderKanban className="w-5 h-5" /></button>
                  </div>
                  
                  {/* Main Content */}
                  <div className="flex-1 bg-[#F9FAFB] flex flex-col h-full overflow-hidden">
                    {/* Topbar */}
                    <div className="h-[60px] border-b border-border bg-white flex items-center px-4 md:px-6 justify-between">
                      <div className="relative w-[240px]">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input type="text" placeholder="Search..." className="w-full pl-9 pr-4 py-1.5 bg-muted rounded-md text-[13px] outline-none" disabled />
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="hidden md:inline-flex px-2.5 py-1 bg-primary/10 text-primary text-[11px] font-semibold rounded-full border border-primary/20">
                          CSE &middot; Sem 4 &middot; 2nd Year
                        </span>
                        <button className="text-muted-foreground hover:text-foreground"><Bell className="w-4 h-4" /></button>
                        <div className="w-7 h-7 rounded-full bg-slate-200"></div>
                      </div>
                    </div>
                    
                    {/* Feed */}
                    <div className="p-4 md:p-6 flex flex-col gap-4 overflow-y-auto">
                      {/* Pinned */}
                      <div className="bg-white border-l-4 border-l-amber-400 border border-border rounded-lg p-4 shadow-sm">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-600 uppercase mb-2">
                          <Pin className="w-3.5 h-3.5" /> Pinned
                        </div>
                        <h4 className="text-[15px] font-semibold text-[#111827]">DBMS Exam in 3 days</h4>
                        <p className="text-[13px] text-[#374151] mt-1 mb-3">DBMS Previous Year Paper 2024 uploaded. Download now.</p>
                        <button className="text-[12px] font-semibold text-primary">Download &rarr;</button>
                      </div>

                      {/* Opportunity */}
                      <div className="bg-white border border-border rounded-lg p-4 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[11px] font-bold text-primary uppercase">🔔 Opportunity &middot; CSE &middot; 2nd Year</span>
                          <span className="text-[11px] font-medium text-orange-500 bg-orange-50 px-2 py-0.5 rounded">2 days left</span>
                        </div>
                        <h4 className="text-[15px] font-semibold text-[#111827]">Razorpay Full-Stack Intern &middot; ₹35K/mo &middot; Remote</h4>
                        <button className="mt-3 text-[12px] font-medium bg-primary text-white px-3 py-1.5 rounded-md">Apply</button>
                      </div>

                      {/* Campus */}
                      <div className="bg-white border border-border rounded-lg p-4 shadow-sm">
                        <span className="text-[11px] font-bold text-emerald-600 uppercase mb-2 block">📢 Campus</span>
                        <h4 className="text-[15px] font-semibold text-[#111827]">IEEE Convergence Fest &middot; Registration open</h4>
                        <p className="text-[13px] text-[#374151] mt-0.5 mb-3">March 15–18 &middot; ₹30,000 Prize</p>
                        <button className="text-[12px] font-semibold text-emerald-600">View Details &rarr;</button>
                      </div>
                      
                      {/* Team Finder */}
                      <div className="bg-white border border-border rounded-lg p-4 shadow-sm">
                        <span className="text-[11px] font-bold text-blue-600 uppercase mb-2 block">👥 Team Finder</span>
                        <p className="text-[14px] text-[#374151] mb-3">"Need React dev for SIH" &middot; Rahul K. &middot; CBIT</p>
                        <button className="text-[12px] font-semibold text-blue-600">Connect &rarr;</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Opportunities Content */}
              {activeTab === 'opportunities' && (
                <div className="flex flex-col w-full h-full bg-[#F9FAFB] animate-in fade-in duration-300">
                  <div className="p-4 md:p-6 border-b border-border bg-white flex flex-wrap gap-2 items-center">
                    <span className="text-[13px] text-muted-foreground mr-2">Filter:</span>
                    <span className="px-2.5 py-1 text-[12px] font-medium border border-border rounded bg-muted/50">Branch: CSE ▼</span>
                    <span className="px-2.5 py-1 text-[12px] font-medium border border-border rounded bg-muted/50">Year: 2nd ▼</span>
                    <span className="px-2.5 py-1 text-[12px] font-medium border border-border rounded bg-muted/50">Type: All ▼</span>
                    <span className="ml-auto px-2.5 py-1 text-[12px] font-medium border border-border rounded bg-muted/50">Sort: Newest ▼</span>
                  </div>
                  
                  <div className="p-4 md:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto">
                    {/* Card 1 */}
                    <div className="bg-white border border-border rounded-lg p-4 shadow-sm">
                      <div className="text-[11px] font-bold text-primary uppercase mb-2">💼 INTERNSHIP &middot; Remote</div>
                      <h4 className="text-[16px] font-bold text-[#111827] mb-1">Full-Stack Developer Intern</h4>
                      <p className="text-[13px] text-[#374151] mb-3">Razorpay &middot; ₹35,000/month</p>
                      <div className="flex gap-2 mb-4">
                        <span className="text-[11px] px-1.5 py-0.5 bg-muted rounded">CSE / IT</span>
                        <span className="text-[11px] px-1.5 py-0.5 bg-muted rounded">5 openings</span>
                      </div>
                      <div className="flex justify-between items-center mt-auto">
                        <button className="text-[12px] font-medium bg-primary text-white px-3 py-1.5 rounded-md">Apply</button>
                        <span className="text-[11px] font-medium text-orange-500 bg-orange-50 px-2 py-0.5 rounded border border-orange-100">2d left</span>
                      </div>
                    </div>
                    
                    {/* Card 2 */}
                    <div className="bg-white border border-border rounded-lg p-4 shadow-sm">
                      <div className="text-[11px] font-bold text-emerald-600 uppercase mb-2">🏆 HACKATHON &middot; National</div>
                      <h4 className="text-[16px] font-bold text-[#111827] mb-1">Smart India Hackathon 2026</h4>
                      <p className="text-[13px] text-[#374151] mb-3">Govt of India &middot; ₹2,00,000 Prize</p>
                      <div className="flex gap-2 mb-4">
                        <span className="text-[11px] px-1.5 py-0.5 bg-muted rounded">All branches</span>
                        <span className="text-[11px] px-1.5 py-0.5 bg-muted rounded">Teams of 4</span>
                      </div>
                      <div className="flex justify-between items-center mt-auto">
                        <button className="text-[12px] font-medium bg-primary text-white px-3 py-1.5 rounded-md">Register</button>
                        <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">Open</span>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white border border-border rounded-lg p-4 shadow-sm">
                      <div className="text-[11px] font-bold text-blue-600 uppercase mb-2">🎓 SCHOLARSHIP &middot; Open</div>
                      <h4 className="text-[16px] font-bold text-[#111827] mb-1">Google Generation Scholarship</h4>
                      <p className="text-[13px] text-[#374151] mb-3">Google &middot; ₹75,000</p>
                      <div className="flex gap-2 mb-4">
                        <span className="text-[11px] px-1.5 py-0.5 bg-muted rounded">CSE / IT</span>
                        <span className="text-[11px] px-1.5 py-0.5 bg-muted rounded">CGPA 8+</span>
                      </div>
                      <div className="flex justify-between items-center mt-auto">
                        <button className="text-[12px] font-medium bg-primary text-white px-3 py-1.5 rounded-md">Apply</button>
                        <span className="text-[11px] text-[#6B7280]">30d left</span>
                      </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white border border-border rounded-lg p-4 shadow-sm">
                      <div className="text-[11px] font-bold text-amber-600 uppercase mb-2">🛠 WORKSHOP &middot; Hyderabad</div>
                      <h4 className="text-[16px] font-bold text-[#111827] mb-1">Full-Stack Bootcamp — Node + React</h4>
                      <p className="text-[13px] text-[#374151] mb-3">TechMinds HYD &middot; Free for students</p>
                      <div className="flex gap-2 mb-4">
                        <span className="text-[11px] px-1.5 py-0.5 bg-muted rounded">All years</span>
                      </div>
                      <div className="flex justify-between items-center mt-auto">
                        <button className="text-[12px] font-medium bg-primary text-white px-3 py-1.5 rounded-md">Register</button>
                        <span className="text-[11px] text-[#6B7280]">10d left</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notes Library Content */}
              {activeTab === 'notes' && (
                <div className="flex flex-col w-full h-full bg-[#F9FAFB] animate-in fade-in duration-300">
                  <div className="p-4 md:p-6 border-b border-border bg-white flex flex-col gap-3">
                    <h3 className="text-[18px] font-bold text-[#111827]">📚 Study Vault — CSE &middot; Semester 4</h3>
                    <p className="text-[13px] text-emerald-600 font-medium">Uploaded and verified by student admins.</p>
                    <div className="flex gap-4 mt-2 border-b border-border">
                      <span className="text-[13px] font-medium text-muted-foreground pb-2 border-b-2 border-transparent">PYQs</span>
                      <span className="text-[13px] font-medium text-muted-foreground pb-2 border-b-2 border-transparent">Unit Notes</span>
                      <span className="text-[13px] font-medium text-muted-foreground pb-2 border-b-2 border-transparent">Lab Records</span>
                      <span className="text-[13px] font-medium text-primary pb-2 border-b-2 border-primary">All</span>
                    </div>
                  </div>
                  
                  <div className="p-4 md:p-6 flex flex-col gap-3 overflow-y-auto">
                    {[
                      { icon: '📄', name: 'DBMS Previous Year Paper 2024', meta: 'CSE · Sem 4 · Uploaded by E. Sai · 3 days ago' },
                      { icon: '📄', name: 'Operating Systems — Unit 3 & 4 Notes', meta: 'CSE · Sem 4 · Uploaded by V. Keerthi · 1 week ago' },
                      { icon: '🧪', name: 'Basic Electrical Engineering Lab Record', meta: 'EEE · Sem 2 · Uploaded by Admin · 2 weeks ago' },
                      { icon: '📄', name: 'Computer Networks — Full Notes', meta: 'CSE · Sem 5 · Uploaded by T. Arjun · 1 month ago' },
                    ].map((row, i) => (
                      <div key={i} className="bg-white border border-border rounded-lg p-4 shadow-sm flex items-start sm:items-center justify-between gap-4 flex-col sm:flex-row group">
                        <div className="flex items-start gap-3">
                          <div className="text-[20px] bg-muted/50 p-2 rounded-md leading-none">{row.icon}</div>
                          <div>
                            <h4 className="text-[15px] font-semibold text-[#111827]">{row.name}</h4>
                            <p className="text-[12px] text-[#6B7280] mt-0.5">{row.meta}</p>
                          </div>
                        </div>
                        <button className="text-[12px] font-semibold text-primary opacity-0 sm:opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                          Download PDF &rarr;
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Team Finder Content */}
              {activeTab === 'team' && (
                <div className="flex flex-col w-full h-full bg-[#F9FAFB] animate-in fade-in duration-300">
                   <div className="p-4 md:p-6 border-b border-border bg-white flex flex-wrap gap-2 items-center">
                    <span className="px-2.5 py-1 text-[12px] font-medium border border-border rounded bg-muted/50">Skills: React Native ▼</span>
                    <span className="px-2.5 py-1 text-[12px] font-medium border border-border rounded bg-muted/50">Purpose: Hackathon ▼</span>
                    <span className="px-2.5 py-1 text-[12px] font-medium border border-border rounded bg-muted/50">College: Any ▼</span>
                  </div>

                  <div className="p-4 md:p-6 flex flex-col gap-4 overflow-y-auto">
                    {/* Post 1 */}
                    <div className="bg-white border border-border rounded-lg p-5 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[13px]">R</div>
                        <div>
                          <div className="text-[14px] font-bold text-[#111827]">Rahul K.</div>
                          <div className="text-[12px] text-[#6B7280]">CBIT &middot; CSE &middot; Hyderabad</div>
                        </div>
                      </div>
                      <p className="text-[14px] text-[#374151] italic border-l-2 border-muted pl-3 my-4">
                        "Forming a team for Smart India Hackathon. Initial prototype ready. Need a React Native developer. DMs open!"
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        <span className="text-[11px] px-2 py-0.5 bg-blue-50 text-blue-700 rounded border border-blue-100">React Native</span>
                        <span className="text-[11px] px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded border border-emerald-100">SIH 2026</span>
                        <span className="text-[11px] px-2 py-0.5 bg-purple-50 text-purple-700 rounded border border-purple-100">Team of 4</span>
                      </div>
                      <div className="flex justify-between items-center border-t border-border pt-3 mt-3">
                        <button className="text-[13px] font-semibold text-primary">Connect Now &rarr;</button>
                        <span className="text-[11px] text-[#9CA3AF]">2 hours ago</span>
                      </div>
                    </div>

                    {/* Post 2 */}
                    <div className="bg-white border border-border rounded-lg p-5 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center font-bold text-[13px]">P</div>
                        <div>
                          <div className="text-[14px] font-bold text-[#111827]">Priya S.</div>
                          <div className="text-[12px] text-[#6B7280]">JNTUH &middot; IT &middot; Hyderabad</div>
                        </div>
                      </div>
                      <p className="text-[14px] text-[#374151] italic border-l-2 border-muted pl-3 my-4">
                        "Looking for UI/UX designer for SIH project on agriculture tech. Stipend if selected by SIH committee."
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        <span className="text-[11px] px-2 py-0.5 bg-blue-50 text-blue-700 rounded border border-blue-100">UI/UX</span>
                        <span className="text-[11px] px-2 py-0.5 bg-pink-50 text-pink-700 rounded border border-pink-100">Figma</span>
                        <span className="text-[11px] px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded border border-emerald-100">SIH 2026</span>
                      </div>
                      <div className="flex justify-between items-center border-t border-border pt-3 mt-3">
                        <button className="text-[13px] font-semibold text-primary">Connect Now &rarr;</button>
                        <span className="text-[11px] text-[#9CA3AF]">5 hours ago</span>
                      </div>
                    </div>

                    {/* Post 3 */}
                    <div className="bg-white border border-border rounded-lg p-5 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-[13px]">A</div>
                        <div>
                          <div className="text-[14px] font-bold text-[#111827]">Aditya M.</div>
                          <div className="text-[12px] text-[#6B7280]">VNRVJIET &middot; CSE</div>
                        </div>
                      </div>
                      <p className="text-[14px] text-[#374151] italic border-l-2 border-muted pl-3 my-4">
                        "Building a startup MVP — need a backend dev (Node.js). College project that could go further."
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        <span className="text-[11px] px-2 py-0.5 bg-green-50 text-green-700 rounded border border-green-100">Node.js</span>
                        <span className="text-[11px] px-2 py-0.5 bg-amber-50 text-amber-700 rounded border border-amber-100">Startup</span>
                        <span className="text-[11px] px-2 py-0.5 bg-slate-100 text-slate-700 rounded border border-slate-200">Backend</span>
                      </div>
                      <div className="flex justify-between items-center border-t border-border pt-3 mt-3">
                        <button className="text-[13px] font-semibold text-primary">Connect Now &rarr;</button>
                        <span className="text-[11px] text-[#9CA3AF]">1 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
            
            <p className="text-[14px] text-[#9CA3AF] mt-4 text-center lg:hidden">
              Everything you see is a realistic example of what the product will contain. No placeholders.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
