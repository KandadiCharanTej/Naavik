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
          <Logo />
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
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="rounded-md bg-primary/12 px-2 py-0.5 text-xs font-medium text-primary">
              Dashboard
            </span>
          </div>
          <Button variant="outline" size="sm" onClick={onLogout}>
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-8">
        <h1 className="sr-only">Founder Dashboard Overview</h1>
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
            label="Today"
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

        {/* College breakdown */}
        {sortedColleges.length > 0 && (
          <section className="mt-8">
            <h2 className="text-lg font-semibold tracking-tight">
              College Breakdown
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {sortedColleges.map(([college, count]) => (
                <div
                  key={college}
                  className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3"
                >
                  <span className="truncate text-sm">{college}</span>
                  <span className="ml-2 shrink-0 rounded-md bg-primary/12 px-2 py-0.5 text-xs font-semibold text-primary">
                    {count}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Daily signups */}
        {stats && Object.keys(stats.dailySignups).length > 0 && (
          <section className="mt-8">
            <h2 className="text-lg font-semibold tracking-tight">
              Daily Signups (Last 30 Days)
            </h2>
            <div className="mt-4 flex items-end gap-1 overflow-x-auto rounded-xl border border-border bg-card p-4">
              {Object.entries(stats.dailySignups).map(([date, count]) => {
                const maxCount = Math.max(
                  ...Object.values(stats.dailySignups),
                )
                const height = maxCount > 0 ? (count / maxCount) * 120 : 0
                return (
                  <div
                    key={date}
                    className="flex flex-col items-center gap-1"
                    title={`${date}: ${count} signups`}
                  >
                    <span className="text-[10px] text-muted-foreground">
                      {count}
                    </span>
                    <div
                      className="w-6 rounded-t-sm bg-primary/60 transition-all hover:bg-primary"
                      style={{ height: `${Math.max(height, 4)}px` }}
                    />
                    <span className="w-6 text-center text-[9px] text-muted-foreground">
                      {date.slice(5)}
                    </span>
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* User table */}
        <section className="mt-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg font-semibold tracking-tight">
              Waitlist Users ({totalUsers})
            </h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={copyEmails}>
                <Copy className="h-4 w-4" />
                Copy Emails
              </Button>
              <Button variant="outline" size="sm" onClick={handleExport}>
                <Download className="h-4 w-4" />
                Export CSV
              </Button>
            </div>
          </div>

          {/* Search */}
          <div className="mt-4 relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              className="pl-9"
              placeholder="Search by name, email, or college..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setPage(1)
              }}
            />
          </div>

          {/* Table */}
          <div className="mt-4 overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/50">
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                    #
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                    Email
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                    College
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                    Joined
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-4 py-8 text-center text-muted-foreground"
                    >
                      {search ? 'No results found.' : 'No signups yet.'}
                    </td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr
                      key={user.id}
                      className="border-b border-border last:border-0 hover:bg-secondary/30"
                    >
                      <td className="px-4 py-3 font-mono text-muted-foreground">
                        {user.position}
                      </td>
                      <td className="px-4 py-3">{user.name}</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {user.email}
                      </td>
                      <td className="px-4 py-3">{user.college}</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {new Date(user.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Page {page} of {totalPages}
              </p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page <= 1}
                  onClick={() => setPage((p) => p - 1)}
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page >= totalPages}
                  onClick={() => setPage((p) => p + 1)}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </section>
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
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Icon className="h-4 w-4" />
        <span className="text-sm">{label}</span>
      </div>
      <p className="mt-2 text-3xl font-bold tracking-tight">{value}</p>
    </div>
  )
}
