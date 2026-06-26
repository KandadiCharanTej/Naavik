interface NumbersStripProps {
  waitlistCount?: number
}

export function NumbersStrip({ waitlistCount = 217 }: NumbersStripProps) {
  const percentage = Math.min(Math.floor((waitlistCount / 500) * 100), 100)

  return (
    <section className="border-y border-border bg-[#F9FAFB] py-12" id="numbers-strip">
      <div className="mx-auto max-w-5xl px-5 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Mission Statement */}
        <div className="text-center md:text-left max-w-sm">
          <p className="text-lg font-bold text-foreground">
            Built for engineering students across Telangana &amp; Andhra Pradesh.
          </p>
        </div>

        {/* Right: Live Counter */}
        <div className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
            <span>Early Access Progress</span>
            <span className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              Live
            </span>
          </div>
          <div className="flex items-center justify-between text-sm font-semibold text-foreground mb-3">
            <span>{waitlistCount} / 500 Students Joined</span>
            <span>{percentage}%</span>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-secondary/20">
            <div 
              className="h-full bg-primary transition-all duration-1000 ease-out rounded-full" 
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

      </div>
    </section>
  )
}
