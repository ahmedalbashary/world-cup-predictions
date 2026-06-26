'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Trophy, ListChecks, BarChart2, LogOut, Shield } from 'lucide-react'

export default function Navbar({ username }: { username?: string }) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  const links = [
    { href: '/predictions', label: 'التوقعات', icon: ListChecks },
    { href: '/leaderboard', label: 'الترتيب', icon: BarChart2 },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-pitch-700 bg-pitch-900/95 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-gold-400" />
          <span className="font-display text-xl text-gold-400 tracking-wide">WC 2026</span>
        </Link>

        <div className="flex items-center gap-1">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors
                ${pathname === href
                  ? 'bg-gold-500 text-pitch-900'
                  : 'text-slate-300 hover:text-white hover:bg-pitch-700'}`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{label}</span>
            </Link>
          ))}

          {username && (
            <>
              <Link
                href="/admin"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-pitch-700 transition-colors"
              >
                <Shield className="w-4 h-4" />
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-slate-400 hover:text-red-400 hover:bg-pitch-700 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline text-xs">{username}</span>
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
