'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import Navbar from '@/components/Navbar'
import { Trophy, Medal } from 'lucide-react'

type LeaderboardEntry = {
  username: string
  total_points: number
  rank: number
}

export default function LeaderboardPage() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([])
  const [currentUser, setCurrentUser] = useState('')
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const init = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        const { data: profile } = await supabase.from('profiles').select('username').eq('id', user.id).single()
        if (profile) {
          setCurrentUser(profile.username)
          setUsername(profile.username)
        }
      }

      const { data } = await supabase
        .from('profiles')
        .select('username, total_points')
        .order('total_points', { ascending: false })

      if (data) {
        setEntries(data.map((e, i) => ({ ...e, rank: i + 1 })))
      }
      setLoading(false)
    }
    init()
  }, [])

  const rankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-5 h-5 text-gold-400" />
    if (rank === 2) return <Medal className="w-5 h-5 text-slate-300" />
    if (rank === 3) return <Medal className="w-5 h-5 text-amber-600" />
    return <span className="text-slate-500 font-mono text-sm w-5 text-center">{rank}</span>
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-pitch-900 flex items-center justify-center">
        <div className="text-gold-400 font-display text-2xl animate-pulse">جاري التحميل...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-pitch-900">
      <Navbar username={username} />

      <div className="max-w-lg mx-auto px-4 py-6">
        <h1 className="font-display text-3xl text-white mb-1">الترتيب</h1>
        <p className="text-slate-500 text-sm mb-6">بيتحدث بعد كل ماتش</p>

        {/* Top 3 podium */}
        {entries.length >= 3 && (
          <div className="flex items-end justify-center gap-3 mb-8">
            {/* 2nd */}
            <div className="flex-1 text-center">
              <div className="bg-pitch-800 border border-pitch-700 rounded-t-xl pt-4 pb-3 px-2">
                <Medal className="w-6 h-6 text-slate-300 mx-auto mb-2" />
                <p className="text-white font-semibold text-sm truncate">{entries[1].username}</p>
                <p className="text-slate-400 text-lg font-bold">{entries[1].total_points}</p>
                <p className="text-xs text-slate-600">نقطة</p>
              </div>
              <div className="bg-slate-600 h-12 rounded-b" />
            </div>
            {/* 1st */}
            <div className="flex-1 text-center">
              <div className="bg-pitch-800 border border-gold-500/40 rounded-t-xl pt-4 pb-3 px-2">
                <Trophy className="w-7 h-7 text-gold-400 mx-auto mb-2" />
                <p className="text-white font-bold text-sm truncate">{entries[0].username}</p>
                <p className="text-gold-400 text-xl font-bold">{entries[0].total_points}</p>
                <p className="text-xs text-slate-500">نقطة</p>
              </div>
              <div className="bg-gold-500 h-16 rounded-b" />
            </div>
            {/* 3rd */}
            <div className="flex-1 text-center">
              <div className="bg-pitch-800 border border-pitch-700 rounded-t-xl pt-4 pb-3 px-2">
                <Medal className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                <p className="text-white font-semibold text-sm truncate">{entries[2].username}</p>
                <p className="text-slate-400 text-lg font-bold">{entries[2].total_points}</p>
                <p className="text-xs text-slate-600">نقطة</p>
              </div>
              <div className="bg-amber-700 h-8 rounded-b" />
            </div>
          </div>
        )}

        {/* Full list */}
        <div className="space-y-2">
          {entries.map(entry => (
            <div
              key={entry.username}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-colors
                ${entry.username === currentUser
                  ? 'bg-gold-500/10 border-gold-500/30'
                  : 'bg-pitch-800 border-pitch-700'}`}
            >
              <div className="w-6 flex items-center justify-center flex-shrink-0">
                {rankIcon(entry.rank)}
              </div>
              <span className={`flex-1 font-medium ${entry.username === currentUser ? 'text-gold-400' : 'text-white'}`}>
                {entry.username}
                {entry.username === currentUser && <span className="text-xs text-gold-600 mr-2">(انت)</span>}
              </span>
              <span className="font-bold text-white">{entry.total_points}</span>
              <span className="text-slate-600 text-xs">نقطة</span>
            </div>
          ))}

          {entries.length === 0 && (
            <div className="text-center py-16 text-slate-600">
              <p>لسه محدش سجّل نقاط</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
