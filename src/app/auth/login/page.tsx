'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { Trophy } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError('إيميل أو باسورد غلط')
      setLoading(false)
      return
    }
    router.push('/predictions')
    router.refresh()
  }

  return (
    <main className="min-h-screen bg-pitch-gradient flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Trophy className="w-10 h-10 text-gold-400 mx-auto mb-3" />
          <h1 className="font-display text-3xl text-white">سجّل دخول</h1>
        </div>

        <form onSubmit={handleLogin} className="bg-pitch-800 border border-pitch-700 rounded-2xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-slate-400 mb-1.5">الإيميل</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full bg-pitch-900 border border-pitch-700 rounded-lg px-3 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-gold-500 transition-colors"
              placeholder="your@email.com"
              dir="ltr"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-1.5">الباسورد</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full bg-pitch-900 border border-pitch-700 rounded-lg px-3 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-gold-500 transition-colors"
              placeholder="••••••••"
              dir="ltr"
            />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gold-500 text-pitch-900 font-bold py-2.5 rounded-lg hover:bg-gold-400 disabled:opacity-50 transition-colors"
          >
            {loading ? 'جاري الدخول...' : 'دخول'}
          </button>
        </form>

        <p className="text-center text-slate-500 text-sm mt-4">
          مش عندك حساب؟{' '}
          <Link href="/auth/register" className="text-gold-400 hover:underline">سجّل دلوقتي</Link>
        </p>
      </div>
    </main>
  )
}
