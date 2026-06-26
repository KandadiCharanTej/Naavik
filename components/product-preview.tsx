'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { LayoutDashboard, Compass, BookOpen, Layers, Users, UserCircle, Bell, Trophy, MessageSquare } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const TABS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'opportunities', label: 'Opportunity Feed', icon: Compass },
  { id: 'vault', label: 'Study Vault', icon: BookOpen },
  { id: 'projects', label: 'Projects', icon: Layers },
  { id: 'team', label: 'Team Finder', icon: Users },
  { id: 'profile', label: 'Student Profile', icon: UserCircle },
  { id: 'updates', label: 'College Updates', icon: MessageSquare },
  { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
  { id: 'notifications', label: 'Notifications', icon: Bell },
]

export function ProductPreview() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <section className="bg-[#F9FAFB] py-24 sm:py-32 border-y border-border" id="product-preview">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-wider text-primary uppercase bg-primary/5 px-3 py-1 rounded-full border border-primary/20">The Interface</span>
          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Take a product tour.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Tabs Navigation */}
          <div className="flex flex-row overflow-x-auto hide-scrollbar lg:flex-col gap-2 lg:w-64 shrink-0 pb-4 lg:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
            {TABS.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'flex shrink-0 items-center gap-3 px-5 py-4 sm:py-3.5 text-sm font-bold transition-all rounded-xl lg:rounded-2xl',
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]'
                      : 'bg-white lg:bg-transparent border border-border lg:border-transparent text-muted-foreground hover:bg-secondary/10 hover:text-foreground',
                  )}
                >
                  <Icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Screenshot Area */}
          <div className="flex-1 w-full max-w-[100vw] overflow-hidden -mx-4 sm:mx-0 px-4 sm:px-0">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-2xl shadow-primary/5 min-h-[550px] w-full flex flex-col">
              
              <div className="absolute right-6 top-6 z-10 rounded-lg bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground backdrop-blur-md border border-border/50 shadow-sm">
                Concept Preview
              </div>

              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex-1 flex flex-col"
                >
                  {/* Tab 1: Dashboard */}
                  {activeTab === 'dashboard' && (
                    <div className="p-6 sm:p-10 h-full flex flex-col bg-[#F9FAFB]">
                      <div className="mb-8">
                        <h3 className="text-2xl font-extrabold text-foreground">Good Morning.</h3>
                        <p className="text-sm font-medium text-muted-foreground mt-2">Here is what&apos;s happening across your campus today.</p>
                      </div>
                      <div className="flex flex-col gap-5">
                        <div className="rounded-2xl bg-white p-6 border border-border shadow-sm flex flex-col hover:border-primary/20 transition-colors">
                          <div className="text-[11px] font-bold text-emerald-600 mb-3 uppercase tracking-wider flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span> College Update
                          </div>
                          <h4 className="font-bold text-base text-foreground">Semester Registration Deadline</h4>
                          <p className="text-sm font-medium text-muted-foreground mt-1.5 leading-relaxed">Ensure all pending fee clearances are complete by Friday to register for the upcoming semester.</p>
                        </div>
                        <div className="rounded-2xl bg-white p-6 border border-border shadow-sm flex flex-col hover:border-primary/20 transition-colors">
                          <div className="text-[11px] font-bold text-primary mb-3 uppercase tracking-wider">Opportunity Match</div>
                          <h4 className="font-bold text-base text-foreground">Frontend Developer Intern</h4>
                          <p className="text-sm font-medium text-muted-foreground mt-1.5 mb-5">Remote · Stipend: ₹25,000/mo</p>
                          <button className="w-full sm:w-auto self-start rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-sm hover:scale-[1.02] transition-transform">Apply Now</button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tab 2: Opportunities */}
                  {activeTab === 'opportunities' && (
                    <div className="p-6 sm:p-10 bg-white h-full">
                      <div className="flex gap-2 pb-6 overflow-x-auto hide-scrollbar mb-2 border-b border-border">
                        {['All', 'Internships', 'Hackathons', 'Full-Time'].map((f, i) => (
                          <button key={f} className={cn("shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition-all", i === 1 ? "bg-primary text-white shadow-md" : "bg-secondary/10 border border-border text-foreground hover:bg-secondary/20")}>{f}</button>
                        ))}
                      </div>
                      <div className="space-y-5 mt-6">
                        {[1, 2].map((i) => (
                          <div key={i} className="rounded-2xl bg-white p-6 border border-border shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-5 hover:border-primary/20 transition-colors">
                            <div>
                              <h4 className="font-bold text-base text-foreground">{i === 1 ? 'Software Engineering Intern' : 'UI/UX Design Intern'}</h4>
                              <p className="text-sm font-medium text-muted-foreground mt-1.5">{i === 1 ? 'Tech Startup · Hyderabad · Stipend: ₹20k-30k/mo' : 'Fintech Co · Remote · Stipend: ₹15,000/mo'}</p>
                              <div className="flex gap-2 mt-4">
                                <span className="text-[11px] font-bold bg-secondary/10 text-primary px-2.5 py-1 rounded-md border border-border">3rd Year</span>
                                <span className="text-[11px] font-bold bg-secondary/10 text-primary px-2.5 py-1 rounded-md border border-border">{i === 1 ? 'React/Node' : 'Figma'}</span>
                              </div>
                            </div>
                            <button className="w-full sm:w-auto rounded-xl bg-primary px-8 py-3 text-sm font-bold text-white shadow-sm hover:scale-[1.02] transition-transform">Apply</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tab 3: Study Vault */}
                  {activeTab === 'vault' && (
                    <div className="p-6 sm:p-10 bg-white h-full">
                      <div className="relative mb-8">
                        <input type="text" placeholder="Search notes, PYQs, lab manuals..." className="w-full rounded-2xl border border-border bg-[#F9FAFB] px-5 py-4 text-base font-medium shadow-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                      </div>
                      <h3 className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-5">Recent Uploads</h3>
                      <div className="grid grid-cols-2 gap-4 sm:gap-5">
                        {['OS Unit 1-3 Notes', 'DBMS Lab Manual', 'Networks PYQs (2023)', 'Java Assignments'].map((item, i) => (
                          <div key={i} className="group rounded-2xl bg-[#F9FAFB] p-5 border border-border shadow-sm flex flex-col justify-center text-center aspect-square sm:aspect-auto sm:h-36 hover:border-emerald-500/20 transition-colors cursor-pointer">
                            <div className="mx-auto h-12 w-12 rounded-full bg-emerald-500/10 mb-4 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">📁</div>
                            <h4 className="font-bold text-sm text-foreground">{item}</h4>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tab 4: Projects */}
                  {activeTab === 'projects' && (
                    <div className="p-6 sm:p-10 bg-[#F9FAFB] h-full">
                      <div className="flex justify-between items-center mb-8">
                        <h3 className="text-2xl font-extrabold text-foreground">Discover</h3>
                        <button className="rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-md hover:scale-[1.02] transition-transform">+ Post Project</button>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {[1, 2].map((i) => (
                          <div key={i} className="rounded-2xl bg-white p-5 border border-border shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-36 rounded-xl bg-secondary/10 mb-5 border border-border border-dashed flex items-center justify-center">
                              <div className="text-primary/40 text-xs font-bold uppercase tracking-wider">Project Image</div>
                            </div>
                            <h4 className="font-bold text-base text-foreground">{i === 1 ? 'AI Resume Screener' : 'Campus Event Manager'}</h4>
                            <p className="text-sm font-medium text-muted-foreground mt-1.5 mb-5">{i === 1 ? 'Next.js, OpenAI, Tailwind' : 'React Native, Firebase'}</p>
                            <button className="w-full rounded-xl bg-secondary/10 border border-border py-3 text-sm font-bold text-foreground hover:bg-secondary/20 transition-colors">View Details</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tab 5: Team Finder */}
                  {activeTab === 'team' && (
                    <div className="p-6 sm:p-10 bg-[#F9FAFB] h-full">
                      <div className="mb-8">
                        <h3 className="text-2xl font-extrabold text-foreground">Looking for Teammates</h3>
                      </div>
                      <div className="space-y-5">
                        <div className="rounded-2xl bg-white p-6 border border-border shadow-sm hover:border-primary/20 transition-colors">
                          <div className="flex items-center gap-2 mb-4">
                            <span className="text-[11px] font-bold text-orange-600 bg-orange-500/10 px-2.5 py-1 rounded-md">Smart India Hackathon</span>
                          </div>
                          <h4 className="font-bold text-base text-foreground">Healthcare App Pitch</h4>
                          <p className="text-sm font-medium text-muted-foreground mt-2 mb-6 leading-relaxed">We are a team of 3 looking for a Flutter developer and a UI Designer to complete our SIH team.</p>
                          <div className="flex items-center justify-between border-t border-border pt-5">
                            <div className="flex -space-x-3">
                              <div className="h-10 w-10 rounded-full border-2 border-white bg-primary/20"></div>
                              <div className="h-10 w-10 rounded-full border-2 border-white bg-emerald-500/20"></div>
                              <div className="h-10 w-10 rounded-full border-2 border-white bg-amber-500/20"></div>
                            </div>
                            <button className="rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-sm hover:scale-[1.02] transition-transform">Join Team</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tab 6: Profile */}
                  {activeTab === 'profile' && (
                    <div className="p-6 sm:p-10 bg-[#F9FAFB] h-full">
                      <div className="flex flex-col items-center text-center mt-6">
                        <div className="h-24 w-24 rounded-full bg-white border border-border shadow-md flex items-center justify-center text-primary font-bold text-2xl mb-5">
                          SK
                        </div>
                        <h3 className="text-2xl font-extrabold text-foreground">Sai Kumar</h3>
                        <p className="text-sm font-medium text-muted-foreground mt-1.5">Computer Science · 3rd Year</p>
                        <p className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider bg-emerald-500/10 px-4 py-1.5 rounded-full mt-4 border border-emerald-500/20">
                          Looking for internships
                        </p>
                      </div>
                      
                      <div className="mt-10 rounded-2xl bg-white p-6 border border-border shadow-sm">
                        <h4 className="font-bold text-sm text-foreground uppercase tracking-wider mb-5">Top Skills</h4>
                        <div className="flex flex-wrap gap-2.5">
                          {['React', 'TypeScript', 'Node.js', 'Figma', 'Python'].map(skill => (
                            <span key={skill} className="px-4 py-2 bg-secondary/10 border border-border rounded-xl text-sm font-bold text-foreground">{skill}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tab 7: College Updates */}
                  {activeTab === 'updates' && (
                    <div className="p-6 sm:p-10 bg-white h-full">
                      <div className="mb-8 flex items-center justify-between border-b border-border pb-6">
                        <h3 className="text-2xl font-extrabold text-foreground">Campus Updates</h3>
                        <span className="text-[11px] font-bold text-emerald-600 bg-emerald-500/10 px-3 py-1.5 rounded-full uppercase tracking-wider">Verified Campus</span>
                      </div>
                      <div className="space-y-4">
                        {[
                          { type: 'Event', title: 'Guest Lecture: AI in 2026', time: 'Tomorrow, 10:00 AM', color: 'text-orange-600 bg-orange-500/10' },
                          { type: 'Notice', title: 'Mid-Sem Time Table Released', time: '2 hours ago', color: 'text-primary bg-primary/10' }
                        ].map((update, i) => (
                          <div key={i} className="rounded-2xl bg-[#F9FAFB] p-6 border border-border shadow-sm hover:border-primary/20 transition-colors">
                            <span className={cn("text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-4 inline-block", update.color)}>{update.type}</span>
                            <h4 className="font-bold text-base text-foreground">{update.title}</h4>
                            <p className="text-sm font-medium text-muted-foreground mt-1.5">{update.time}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tab 8: Leaderboard */}
                  {activeTab === 'leaderboard' && (
                    <div className="p-6 sm:p-10 bg-white h-full">
                      <div className="mb-8 text-center border-b border-border pb-8">
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-600 text-2xl mb-4 shadow-sm border border-amber-200">🏆</div>
                        <h3 className="text-2xl font-extrabold text-foreground">Campus Leaderboard</h3>
                        <p className="text-sm font-medium text-muted-foreground mt-2">Top contributors this month</p>
                      </div>
                      <div className="space-y-3">
                        {[
                          { rank: 1, name: 'Rahul K.', points: 1250 },
                          { rank: 2, name: 'Priya M.', points: 980 },
                          { rank: 3, name: 'Arjun S.', points: 850 }
                        ].map((user) => (
                          <div key={user.rank} className="rounded-2xl bg-[#F9FAFB] p-5 border border-border flex items-center justify-between hover:border-amber-500/20 transition-colors">
                            <div className="flex items-center gap-5">
                              <span className={cn("text-lg font-extrabold w-8 text-center", user.rank === 1 ? 'text-amber-500' : 'text-muted-foreground')}>#{user.rank}</span>
                              <h4 className="font-bold text-base text-foreground">{user.name}</h4>
                            </div>
                            <span className="text-sm font-bold text-emerald-600 bg-emerald-500/10 px-3 py-1.5 rounded-lg">{user.points} pts</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tab 9: Notifications */}
                  {activeTab === 'notifications' && (
                    <div className="p-6 sm:p-10 bg-[#F9FAFB] h-full">
                      <div className="mb-8 border-b border-border pb-6 flex items-center justify-between">
                        <h3 className="text-2xl font-extrabold text-foreground">Notifications</h3>
                        <span className="text-[11px] font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full uppercase tracking-wider">3 New</span>
                      </div>
                      <div className="space-y-4">
                        {[
                          { icon: '🚀', text: 'Your application for Frontend Intern was viewed by the recruiter.', time: '10m ago', unread: true },
                          { icon: '👋', text: 'Arjun sent you a connection request.', time: '2h ago', unread: true },
                          { icon: '📁', text: 'New notes uploaded in DBMS.', time: '5h ago', unread: true },
                          { icon: '✅', text: 'Your profile has been verified successfully.', time: '1d ago', unread: false },
                        ].map((notif, i) => (
                          <div key={i} className={cn("rounded-2xl p-5 border flex gap-4 items-start transition-colors", notif.unread ? "bg-white border-border shadow-sm" : "bg-transparent border-transparent opacity-60")}>
                            <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 border border-border">
                              <span className="text-lg">{notif.icon}</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-bold text-foreground leading-relaxed">{notif.text}</p>
                              <p className="text-[11px] font-bold text-muted-foreground mt-2 uppercase tracking-wider">{notif.time}</p>
                            </div>
                            {notif.unread && (
                              <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
