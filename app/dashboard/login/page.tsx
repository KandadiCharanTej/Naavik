'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Logo } from '@/components/ui/logo'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

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

      // The API set an HttpOnly cookie, so we just redirect
      router.push('/dashboard')
      router.refresh() // Force refresh to re-evaluate server components/middleware
    } catch {
      setError('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[#06060A] px-5 overflow-hidden text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(124,58,237,0.15),transparent)]" />
      <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[var(--purple-600)]/10 blur-[120px]" />
      <div className="absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-[var(--purple-500)]/15 blur-[100px]" />
      
      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      <div className="relative z-10 w-full max-w-md animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
        <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.02] p-8 shadow-[0_0_80px_-20px_rgba(124,58,237,0.15)] backdrop-blur-xl sm:p-10">
          
          <div className="text-center">
            <div className="mx-auto mb-8 flex justify-center">
              <Logo theme="dark" className="scale-125" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Founder Dashboard
            </h1>
            <p className="mt-2.5 text-[14px] text-gray-400">
              Enter the master password to access your workspace.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="space-y-2.5">
              <Label htmlFor="dashboard-password" className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="dashboard-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="h-12 border-white/10 bg-white/5 pl-4 pr-10 text-white placeholder:text-gray-600 focus-visible:border-[var(--purple-500)] focus-visible:ring-1 focus-visible:ring-[var(--purple-500)] transition-all"
                  required
                  autoFocus
                />
              </div>
            </div>
            
            {error && (
              <div className="rounded-lg bg-red-500/10 p-3 border border-red-500/20 text-center animate-in zoom-in-95 duration-200">
                <p className="text-xs font-medium text-red-400" role="alert">{error}</p>
              </div>
            )}
            
            <Button 
              type="submit" 
              className="group relative h-12 w-full overflow-hidden rounded-xl bg-[var(--purple-600)] text-white hover:bg-[var(--purple-500)] transition-all" 
              disabled={loading}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <span className="flex items-center gap-2 font-semibold text-[15px]">
                  Access Dashboard
                  <Lock className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                </span>
              )}
            </Button>
          </form>
          
        </div>
        
        {/* Footer */}
        <p className="mt-8 text-center text-xs text-gray-600">
          Secure area. Unauthorized access is prohibited.
        </p>
      </div>
    </div>
  )
}
