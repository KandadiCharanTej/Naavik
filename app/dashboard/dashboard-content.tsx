'use client'

import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Download,
  Loader2,
  LogOut,
  Search,
  Users,
  Building2,
  TrendingUp,
  Copy,
  ChevronLeft,
  ChevronRight,
  Flame,
  Target,
  Trophy,
  RefreshCw,
  BarChart3,
  MoreVertical,
  Activity
} from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Logo } from '@/components/ui/logo'
import { motion, Variants } from 'framer-motion'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts'

// ─── Constants ────────────────────────────────────────────
const GOAL = 500

// ─── Types ────────────────────────────────────────────────
type WaitlistUser = {
  id: number
  name: string
  email: string
  college: string
  position: number
  created_at: string
}

type Stats = {
  totalCount: number
  collegeCounts: Record<string, number>
  dailySignups: Record<string, number>
}

// ─── Animations ───────────────────────────────────────────
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, ease: 'easeOut' },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
}

// ─── Main Dashboard Component ─────────────────────────────
export function DashboardContent() {
  const router = useRouter()
  const [stats, setStats] = useState<Stats | null>(null)
  const [users, setUsers] = useState<WaitlistUser[]>([])
  const [totalUsers, setTotalUsers] = useState(0)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const limit = 15

  const fetchStats = useCallback(async () => {
    try {
      const res = await fetch('/api/dashboard/stats')
      if (res.status === 401) { router.push('/dashboard/login'); return }
      const data = await res.json()
      setStats(data)
    } catch (err) {
      console.error('Failed to fetch stats:', err)
    }
  }, [router])

  const fetchUsers = useCallback(async () => {
    try {
      const params = new URLSearchParams({
        page: String(page),
        limit: String(limit),
        ...(search ? { search } : {}),
      })
      const res = await fetch(`/api/dashboard/users?${params}`)
      if (res.status === 401) { router.push('/dashboard/login'); return }
      const data = await res.json()
      setUsers(data.users)
      setTotalUsers(data.total)
    } catch (err) {
      console.error('Failed to fetch users:', err)
    }
  }, [page, search, router])

  const refreshAll = useCallback(async () => {
    setRefreshing(true)
    await Promise.all([fetchStats(), fetchUsers()])
    setRefreshing(false)
  }, [fetchStats, fetchUsers])

  useEffect(() => {
    refreshAll().finally(() => setLoading(false))
  }, [refreshAll])

  async function handleLogout() {
    try {
      await fetch('/api/dashboard/logout', { method: 'POST' })
      router.push('/dashboard/login')
      router.refresh()
    } catch {
      toast.error('Failed to log out')
    }
  }

  async function handleExport() {
    try {
      const res = await fetch('/api/dashboard/export')
      if (res.status === 401) { router.push('/dashboard/login'); return }
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `naavik-waitlist-${new Date().toISOString().split('T')[0]}.csv`
      a.click()
      URL.revokeObjectURL(url)
      toast.success('CSV downloaded!')
    } catch {
      toast.error('Failed to export')
    }
  }

  function copyEmails() {
    const emails = users.map((u) => u.email).join('\n')
    navigator.clipboard?.writeText(emails)
    toast.success(`${users.length} emails copied to clipboard!`)
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#06060A]">
        <Loader2 className="h-6 w-6 animate-spin text-[var(--purple-500)]" />
      </div>
    )
  }

  // --- Computed Metrics ---
  const todayStr = new Date().toISOString().split('T')[0]
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const yesterdayStr = yesterday.toISOString().split('T')[0]

  const todaySignups = stats?.dailySignups[todayStr] || 0
  const yesterdaySignups = stats?.dailySignups[yesterdayStr] || 0
  
  let growthRate = 0
  if (yesterdaySignups === 0 && todaySignups > 0) growthRate = 100
  else if (yesterdaySignups > 0) growthRate = Math.round(((todaySignups - yesterdaySignups) / yesterdaySignups) * 100)

  const sortedColleges = stats ? Object.entries(stats.collegeCounts).sort(([, a], [, b]) => b - a) : []
  const topCollege = sortedColleges[0]
  const topCollegePercent = stats?.totalCount && topCollege ? Math.round((topCollege[1] / stats.totalCount) * 100) : 0
  const remainingGoal = Math.max(0, GOAL - (stats?.totalCount || 0))
  const goalPercent = stats ? Math.min(100, Math.round((stats.totalCount / GOAL) * 100)) : 0

  // Format data for Recharts
  const chartData = []
  if (stats) {
    const dates = Object.keys(stats.dailySignups).sort()
    // Take last 30 days
    const recentDates = dates.slice(-30)
    for (const d of recentDates) {
      chartData.push({
        date: new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        signups: stats.dailySignups[d]
      })
    }
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-xl border border-white/10 bg-[#0A0A0A]/90 p-3 shadow-2xl backdrop-blur-xl">
          <p className="mb-1 text-xs font-semibold text-gray-400">{label}</p>
          <p className="text-sm font-bold text-white">
            <span className="text-[var(--purple-400)]">{payload[0].value}</span> signups
          </p>
        </div>
      )
    }
    return null
  }

  const totalPages = Math.ceil(totalUsers / limit)
  const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })

  return (
    <div className="min-h-screen bg-[#06060A] text-white selection:bg-[var(--purple-500)] selection:text-white pb-20">
      
      {/* Premium Background */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_-20%,rgba(124,58,237,0.12),transparent)]" />
      <div className="fixed top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-[var(--purple-900)]/10 to-transparent pointer-events-none z-0" />
      
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#06060A]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6">
          <div className="flex items-center gap-6">
            <Logo theme="dark" className="scale-110" />
            <div className="h-4 w-px bg-white/10" />
            <span className="hidden text-sm font-medium text-gray-300 sm:block">Founder Dashboard</span>
            <span className="hidden rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-gray-400 border border-white/5 sm:block">
              {currentDate}
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={refreshAll} 
              disabled={refreshing}
              className="text-gray-400 hover:text-white hover:bg-white/5 hidden sm:flex"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <div className="h-4 w-px bg-white/10 hidden sm:block" />
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--purple-500)] to-indigo-600 font-bold shadow-[0_0_15px_rgba(124,58,237,0.5)] ring-2 ring-white/10">
              F
            </div>
            <Button variant="ghost" size="icon" onClick={handleLogout} className="text-gray-400 hover:text-white hover:bg-white/5">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-[1400px] px-6 py-10">
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="show"
          className="flex flex-col gap-8"
        >
          {/* Header Row */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white">Overview</h1>
              <p className="text-[15px] text-gray-400 mt-1">Real-time waitlist analytics and growth.</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={copyEmails} className="bg-white/[0.02] border-white/10 text-white hover:bg-white/10 h-10 px-4 rounded-xl shadow-sm">
                <Copy className="h-4 w-4 mr-2 text-gray-400" />
                Copy List
              </Button>
              <Button variant="outline" size="sm" onClick={handleExport} className="bg-white text-black hover:bg-gray-100 border-0 h-10 px-4 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all hover:scale-105">
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </motion.div>

          {/* Hero Metrics */}
          <motion.div variants={itemVariants} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              label="Total Waitlist"
              value={stats?.totalCount || 0}
              icon={Users}
              trend={growthRate > 0 ? `+${growthRate}% vs yesterday` : 'No change today'}
              trendUp={growthRate >= 0}
            />
            <MetricCard
              label="Joined Today"
              value={todaySignups}
              icon={TrendingUp}
              trend={`${yesterdaySignups} joined yesterday`}
              trendUp={todaySignups >= yesterdaySignups}
              highlight
            />
            <MetricCard
              label="Unique Colleges"
              value={sortedColleges.length}
              icon={Building2}
              trend="Expanding reach"
              trendUp={true}
            />
            <MetricCard
              label="Goal Progress"
              value={`${goalPercent}%`}
              icon={Target}
              trend={`${remainingGoal} to reach ${GOAL}`}
              trendUp={true}
            />
          </motion.div>

          {/* Middle Row: Progress & Chart & Insights */}
          <div className="grid gap-6 lg:grid-cols-3">
            
            <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col gap-6">
              
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl shadow-lg relative overflow-hidden">
                <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[var(--purple-500)]/5 to-transparent pointer-events-none" />
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <h3 className="text-[15px] font-semibold text-white flex items-center gap-2">
                      <Target className="h-4 w-4 text-[var(--purple-400)]" />
                      Milestone: {GOAL} Students
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">{stats?.totalCount || 0} / {GOAL} registered</p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-black text-white">{goalPercent}%</span>
                  </div>
                </div>
                <div className="h-3 w-full bg-black/50 rounded-full overflow-hidden border border-white/5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${goalPercent}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[var(--purple-600)] to-indigo-400 rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </motion.div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[15px] font-semibold text-white flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-[var(--purple-400)]" />
                    Growth Trend (30 Days)
                  </h3>
                  <div className="flex gap-1 bg-black/40 rounded-lg p-1 border border-white/5">
                    <button className="px-3 py-1 text-xs font-medium rounded-md bg-white/10 text-white shadow-sm">30d</button>
                    <button className="px-3 py-1 text-xs font-medium rounded-md text-gray-400 hover:text-white transition-colors">All</button>
                  </div>
                </div>
                <div className="h-[280px] w-full">
                  {chartData.length > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorSignups" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="var(--purple-500)" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="var(--purple-500)" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                        <XAxis 
                          dataKey="date" 
                          stroke="rgba(255,255,255,0.3)" 
                          fontSize={12} 
                          tickLine={false}
                          axisLine={false}
                          minTickGap={20}
                        />
                        <YAxis 
                          stroke="rgba(255,255,255,0.3)" 
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 }} />
                        <Area 
                          type="monotone" 
                          dataKey="signups" 
                          stroke="var(--purple-400)" 
                          strokeWidth={3}
                          fillOpacity={1} 
                          fill="url(#colorSignups)" 
                          animationDuration={1500}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-gray-500">Not enough data to display chart.</div>
                  )}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[var(--purple-900)]/20 to-black p-6 backdrop-blur-xl shadow-lg relative overflow-hidden">
                <div className="absolute -right-10 -top-10 h-32 w-32 bg-[var(--purple-500)]/20 blur-3xl" />
                <h3 className="text-[15px] font-semibold text-white flex items-center gap-2 mb-4">
                  <Flame className="h-4 w-4 text-orange-400" />
                  Smart Insights
                </h3>
                <div className="space-y-4">
                  {topCollege && (
                    <div className="flex gap-3 items-start p-3 rounded-xl bg-white/5 border border-white/5">
                      <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                      <p className="text-sm text-gray-300 leading-snug">
                        <strong className="text-white">{topCollege[0]}</strong> is leading with {topCollegePercent}% of all signups ({topCollege[1]} students).
                      </p>
                    </div>
                  )}
                  <div className="flex gap-3 items-start p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                    <p className="text-sm text-gray-300 leading-snug">
                      You need <strong className="text-white">{remainingGoal}</strong> more signups to reach your next major milestone.
                    </p>
                  </div>
                  {growthRate > 0 && (
                    <div className="flex gap-3 items-start p-3 rounded-xl bg-white/5 border border-white/5">
                      <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <p className="text-sm text-gray-300 leading-snug">
                        Signups increased by <strong className="text-white">{growthRate}%</strong> compared to yesterday!
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl shadow-lg flex-1 flex flex-col">
                <h3 className="text-[15px] font-semibold text-white flex items-center gap-2 mb-5">
                  <Trophy className="h-4 w-4 text-yellow-400" />
                  College Leaderboard
                </h3>
                <div className="flex flex-col gap-3 flex-1 overflow-y-auto max-h-[250px] pr-2 custom-scrollbar">
                  {sortedColleges.length > 0 ? sortedColleges.slice(0, 15).map(([college, count], idx) => (
                    <div key={college} className="flex items-center justify-between group">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                          idx === 0 ? 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/30' :
                          idx === 1 ? 'bg-gray-300/20 text-gray-300 border border-gray-300/30' :
                          idx === 2 ? 'bg-amber-700/20 text-amber-500 border border-amber-700/30' :
                          'bg-white/5 text-gray-500'
                        }`}>
                          {idx + 1}
                        </div>
                        <span className="truncate text-[13px] font-medium text-gray-300 group-hover:text-white transition-colors">{college}</span>
                      </div>
                      <div className="flex items-center gap-2 pl-3">
                        <span className="text-[13px] font-semibold text-white">{count}</span>
                      </div>
                    </div>
                  )) : (
                    <p className="text-sm text-gray-500 text-center my-auto">No data available.</p>
                  )}
                </div>
              </div>

            </motion.div>
          </div>

          {/* Bottom Row */}
          <motion.div variants={itemVariants} className="grid gap-6 lg:grid-cols-4">
            <div className="lg:col-span-3 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-lg flex flex-col overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border-b border-white/5 gap-4">
                <h3 className="text-[15px] font-semibold text-white flex items-center gap-2">
                  <Users className="h-4 w-4 text-[var(--purple-400)]" />
                  Waitlist Database
                </h3>
                <div className="relative max-w-sm w-full">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    className="pl-9 h-9 bg-black/40 border-white/10 text-sm text-white placeholder:text-gray-500 focus-visible:ring-[var(--purple-500)] rounded-xl"
                    placeholder="Search name, email, college..."
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value)
                      setPage(1)
                    }}
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead className="text-[11px] uppercase tracking-wider text-gray-400 bg-black/20 sticky top-0 z-10">
                    <tr>
                      <th className="px-6 py-4 font-semibold w-16">Pos</th>
                      <th className="px-6 py-4 font-semibold">Student Profile</th>
                      <th className="px-6 py-4 font-semibold">College</th>
                      <th className="px-6 py-4 font-semibold">Date Joined</th>
                      <th className="px-6 py-4 font-semibold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {users.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-6 py-12 text-center text-gray-500 bg-white/[0.01]">
                          {search ? 'No results found.' : 'Waitlist is empty.'}
                        </td>
                      </tr>
                    ) : (
                      users.map((user) => (
                        <tr key={user.id} className="hover:bg-white/[0.04] transition-colors group">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center justify-center px-2 py-1 rounded bg-white/5 text-gray-300 font-mono text-xs border border-white/5">
                              #{user.position}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white font-bold text-xs uppercase shadow-inner border border-white/10 group-hover:border-[var(--purple-500)]/50 transition-colors">
                                {user.name.charAt(0)}
                              </div>
                              <div className="flex flex-col">
                                <span className="font-medium text-white text-[14px]">{user.name}</span>
                                <span className="text-[12px] text-gray-400">{user.email}</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-300 border border-white/5">
                              {user.college}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-400 text-[13px]">
                            {new Date(user.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-white hover:bg-white/10 rounded-lg">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {totalPages > 1 && (
                <div className="flex items-center justify-between p-4 border-t border-white/5 bg-black/10">
                  <p className="text-[13px] text-gray-400">
                    Showing <strong className="text-white">{users.length}</strong> of <strong className="text-white">{totalUsers}</strong>
                  </p>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      disabled={page <= 1} 
                      onClick={() => setPage((p) => p - 1)} 
                      className="h-8 bg-white/5 border-white/10 text-white hover:bg-white/10 text-xs rounded-lg"
                    >
                      <ChevronLeft className="h-4 w-4 mr-1" /> Prev
                    </Button>
                    <div className="flex items-center justify-center h-8 px-3 rounded-lg bg-white/5 text-xs text-white border border-white/5">
                      {page} / {totalPages}
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      disabled={page >= totalPages} 
                      onClick={() => setPage((p) => p + 1)} 
                      className="h-8 bg-white/5 border-white/10 text-white hover:bg-white/10 text-xs rounded-lg"
                    >
                      Next <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl shadow-lg flex flex-col">
              <h3 className="text-[15px] font-semibold text-white flex items-center gap-2 mb-6">
                <Activity className="h-4 w-4 text-[var(--purple-400)]" />
                Recent Activity
              </h3>
              
              <div className="relative pl-3 border-l border-white/10 space-y-6 flex-1 overflow-y-auto custom-scrollbar">
                {users.slice(0, 8).map((user, i) => (
                  <div key={user.id} className="relative">
                    <div className="absolute -left-[17px] top-1 h-2 w-2 rounded-full bg-[var(--purple-500)] ring-4 ring-[#06060A]" />
                    <div className="flex flex-col gap-1 pl-3">
                      <p className="text-[13px] text-white">
                        <strong className="font-semibold">{user.name}</strong> joined the waitlist.
                      </p>
                      <p className="text-[11px] text-gray-500">
                        {user.college} &bull; Position #{user.position}
                      </p>
                    </div>
                  </div>
                ))}
                {users.length === 0 && (
                  <p className="text-sm text-gray-500 pl-3">No recent activity.</p>
                )}
              </div>
            </div>

          </motion.div>
        </motion.div>
      </main>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  )
}

function MetricCard({
  icon: Icon,
  label,
  value,
  trend,
  trendUp,
  highlight = false
}: {
  icon: React.ElementType
  label: string
  value: string | number
  trend: string
  trendUp: boolean
  highlight?: boolean
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border bg-white/[0.02] p-5 backdrop-blur-xl shadow-lg transition-all hover:-translate-y-1 ${
      highlight ? 'border-[var(--purple-500)]/40 shadow-[0_0_30px_rgba(124,58,237,0.15)]' : 'border-white/10 hover:border-white/20'
    }`}>
      {highlight && (
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--purple-500)]/20 blur-2xl" />
      )}
      <div className="flex items-start justify-between relative z-10">
        <div>
          <p className="text-[13px] font-medium text-gray-400">{label}</p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white">{value}</p>
        </div>
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border shadow-inner ${
          highlight ? 'bg-[var(--purple-600)]/20 border-[var(--purple-500)]/30 text-[var(--purple-400)]' : 'bg-white/5 border-white/10 text-gray-400'
        }`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="mt-4 flex items-center gap-1.5 relative z-10">
        {trendUp ? (
          <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
        ) : (
          <TrendingUp className="h-3.5 w-3.5 text-rose-400 rotate-180" />
        )}
        <span className={`text-xs font-medium ${trendUp ? 'text-emerald-400/90' : 'text-rose-400/90'}`}>
          {trend}
        </span>
      </div>
    </div>
  )
}
