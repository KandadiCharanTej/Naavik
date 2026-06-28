'use client'

import { useCallback, useEffect, useState } from 'react'
import {
  Download,
  Loader2,
  Lock,
  LogOut,
  Search,
  Users,
  Building2,
  TrendingUp,
  Mail,
  Copy,
} from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Logo } from '@/components/ui/logo'

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

// ─── Main Component ───────────────────────────────────────
export function DashboardContent() {
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('naavik-dashboard-token')
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setToken(saved)
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    )
  }

  if (!token) {
    return <LoginView onLogin={setToken} />
  }

  return <DashboardView token={token} onLogout={() => {
    localStorage.removeItem('naavik-dashboard-token')
    setToken(null)
  }} />
}

// ─── Login View ───────────────────────────────────────────
function LoginView({ onLogin }: { onLogin: (token: string) => void }) {
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/dashboard/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Invalid password')
        return
      }

      localStorage.setItem('naavik-dashboard-token', data.token)
      onLogin(data.token)
    } catch {
      setError('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5">
      <div className="w-full max-w-sm">
        <div className="text-center">
          <Logo theme="dark" className="justify-center scale-150 mb-6" />
          <h1 className="mt-6 text-2xl font-semibold tracking-tight">
            Founder Dashboard
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Enter the dashboard password to continue.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="dashboard-password">Password</Label>
            <Input
              id="dashboard-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              autoFocus
            />
          </div>
          {error && (
            <p className="text-sm text-red-500" role="alert">{error}</p>
          )}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                <Lock className="h-4 w-4" />
                Access Dashboard
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  )
}

// ─── Dashboard View ───────────────────────────────────────
function DashboardView({
  token,
  onLogout,
}: {
  token: string
  onLogout: () => void
}) {
  const [stats, setStats] = useState<Stats | null>(null)
  const [users, setUsers] = useState<WaitlistUser[]>([])
  const [totalUsers, setTotalUsers] = useState(0)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const limit = 50

  const headers = { Authorization: `Bearer ${token}` }

  const fetchStats = useCallback(async () => {
    try {
      const res = await fetch('/api/dashboard/stats', { headers })
      if (res.status === 401) { onLogout(); return }
      const data = await res.json()
      setStats(data)
    } catch (err) {
      console.error('Failed to fetch stats:', err)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  const fetchUsers = useCallback(async () => {
    try {
      const params = new URLSearchParams({
        page: String(page),
        limit: String(limit),
        ...(search ? { search } : {}),
      })
      const res = await fetch(`/api/dashboard/users?${params}`, { headers })
      if (res.status === 401) { onLogout(); return }
      const data = await res.json()
      setUsers(data.users)
      setTotalUsers(data.total)
    } catch (err) {
      console.error('Failed to fetch users:', err)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, page, search])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    Promise.all([fetchStats(), fetchUsers()]).finally(() => setLoading(false))
  }, [fetchStats, fetchUsers])

  async function handleExport() {
    try {
      const res = await fetch('/api/dashboard/export', { headers })
      if (res.status === 401) { onLogout(); return }
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
    toast.success(`${users.length} emails copied!`)
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    )
  }

  const sortedColleges = stats
    ? Object.entries(stats.collegeCounts).sort(([, a], [, b]) => b - a)
    : []

  const totalPages = Math.ceil(totalUsers / limit)

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Background Glow */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(124,58,237,0.15),transparent)]" />
      
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <div className="flex items-center gap-3">
            <Logo theme="dark" className="scale-125 origin-left" />
            <span className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-xs font-semibold text-white/80">
              Admin Dashboard
            </span>
          </div>
          <Button variant="ghost" size="sm" onClick={onLogout} className="text-gray-400 hover:text-white hover:bg-white/5">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-5 py-8">
        <h1 className="sr-only">Founder Dashboard Overview</h1>
        
        {/* Welcome Text */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-white">Welcome back, Founder</h2>
          <p className="text-sm text-gray-400 mt-1">Here is how your waitlist is growing today.</p>
        </div>

        {/* Stats cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={Users}
            label="Total Signups"
            value={stats?.totalCount ?? 0}
          />
          <StatCard
            icon={Building2}
            label="Unique Colleges"
            value={sortedColleges.length}
          />
          <StatCard
            icon={TrendingUp}
            label="Joined Today"
            value={
              stats?.dailySignups[new Date().toISOString().split('T')[0]] ?? 0
            }
          />
          <StatCard
            icon={Mail}
            label="Emails Collected"
            value={stats?.totalCount ?? 0}
          />
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          
          {/* Main Users Table Area - takes up 2 columns */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-semibold tracking-tight text-white">
                Waitlist Users <span className="text-gray-500 font-normal">({totalUsers})</span>
              </h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={copyEmails} className="bg-white/5 border-white/10 text-white hover:bg-white/10">
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Emails
                </Button>
                <Button variant="outline" size="sm" onClick={handleExport} className="bg-[var(--purple-600)] border-[var(--purple-500)] text-white hover:bg-[var(--purple-500)]">
                  <Download className="h-4 w-4 mr-2" />
                  Export CSV
                </Button>
              </div>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-[var(--purple-500)]"
                placeholder="Search by name, email, or college..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value)
                  setPage(1)
                }}
              />
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase text-gray-400 bg-black/20">
                    <tr>
                      <th className="px-5 py-4 font-semibold">Position</th>
                      <th className="px-5 py-4 font-semibold">Student</th>
                      <th className="px-5 py-4 font-semibold">College</th>
                      <th className="px-5 py-4 font-semibold">Joined Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {users.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-5 py-12 text-center text-gray-500">
                          {search ? 'No students found matching your search.' : 'No signups yet. Share your link!'}
                        </td>
                      </tr>
                    ) : (
                      users.map((user) => (
                        <tr key={user.id} className="hover:bg-white/5 transition-colors">
                          <td className="px-5 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center justify-center px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">
                              #{user.position}
                            </span>
                          </td>
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-3">
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--purple-500)] to-[var(--purple-700)] text-white font-bold text-xs uppercase shadow-sm">
                                {user.name.charAt(0)}
                              </div>
                              <div className="flex flex-col">
                                <span className="font-medium text-white">{user.name}</span>
                                <span className="text-xs text-gray-400">{user.email}</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-4 text-gray-300">
                            {user.college}
                          </td>
                          <td className="px-5 py-4 text-gray-400 text-xs">
                            {new Date(user.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-2">
                <p className="text-xs text-gray-400">
                  Showing page {page} of {totalPages}
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled={page <= 1} onClick={() => setPage((p) => p - 1)} className="bg-white/5 border-white/10 text-white hover:bg-white/10">
                    Prev
                  </Button>
                  <Button variant="outline" size="sm" disabled={page >= totalPages} onClick={() => setPage((p) => p + 1)} className="bg-white/5 border-white/10 text-white hover:bg-white/10">
                    Next
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Colleges & Activity */}
          <div className="flex flex-col gap-8">
            {/* College breakdown */}
            {sortedColleges.length > 0 && (
              <section>
                <h2 className="text-lg font-semibold tracking-tight text-white mb-4">
                  Top Colleges
                </h2>
                <div className="flex flex-col gap-2">
                  {sortedColleges.slice(0, 10).map(([college, count]) => (
                    <div key={college} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition-colors">
                      <span className="truncate text-sm text-gray-300 pr-4">{college}</span>
                      <span className="shrink-0 rounded-full bg-[var(--purple-500)]/20 border border-[var(--purple-500)]/30 px-2.5 py-0.5 text-xs font-bold text-[var(--purple-200)]">
                        {count}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Daily signups */}
            {stats && Object.keys(stats.dailySignups).length > 0 && (
              <section>
                <h2 className="text-lg font-semibold tracking-tight text-white mb-4">
                  Activity (30 Days)
                </h2>
                <div className="flex items-end gap-1 overflow-x-auto rounded-xl border border-white/10 bg-white/5 p-5 min-h-[140px]">
                  {Object.entries(stats.dailySignups).map(([date, count]) => {
                    const maxCount = Math.max(...Object.values(stats.dailySignups))
                    const height = maxCount > 0 ? (count / maxCount) * 80 : 0
                    return (
                      <div key={date} className="flex flex-1 flex-col items-center gap-2 group relative" title={`${date}: ${count} signups`}>
                        <div className="absolute -top-8 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                          {count} signups
                        </div>
                        <div
                          className="w-full max-w-[20px] rounded-t bg-[var(--purple-500)]/50 transition-all hover:bg-[var(--purple-400)]"
                          style={{ height: `${Math.max(height, 4)}px` }}
                        />
                      </div>
                    )
                  })}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

// ─── Stat Card ────────────────────────────────────────────
function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType
  label: string
  value: number
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md transition-all hover:border-white/20 group">
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[var(--purple-500)]/20 blur-2xl group-hover:bg-[var(--purple-500)]/30 transition-colors" />
      <div className="flex items-center gap-3 text-gray-400">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[var(--purple-400)] shadow-inner">
          <Icon className="h-5 w-5" />
        </div>
        <span className="text-sm font-medium">{label}</span>
      </div>
      <div className="mt-5 flex items-end justify-between">
        <p className="text-4xl font-black tracking-tight text-white">{value}</p>
      </div>
    </div>
  )
}
