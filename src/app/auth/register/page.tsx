'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { Trophy } from 'lucide-react'

export default function RegisterPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (username.length < 3) {
      setError('الاسم لازم يكون 3 حروف على الأقل')
      setLoading(false)
      return
    }

    // Check username unique
    const { data: existing } = await supabase
      .from('profiles')
      .select('id')
      .eq('username', username)
      .single()

    if (existing) {
      setError('الاسم ده موجود بالفعل، اختار اسم تاني')
      setLoading(false)
      return
    }

    const { data, error: signUpError } = await supabase.auth.signUp({ email, password })
    if (signUpError) {
      setError(signUpError.message)
      setLoading(false)
      return
    }

    if (data.user) {
      await supabase.from('profiles').insert({
        id: data.user.id,
        username,
        total_points: 0,
      })
    }

    router.push('/predictions')
    router.refresh()
  }

  return (
    <main className="min-h-screen bg-pitch-gradient flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Trophy className="w-10 h-10 text-gold-400 mx-auto mb-3" />
          <h1 className="font-display text-3xl text-white">حساب جديد</h1>
        </div>

        <form onSubmit={handleRegister} className="bg-pitch-800 border border-pitch-700 rounded-2xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-slate-400 mb-1.5">اسمك في المسابقة</label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              className="w-full bg-pitch-900 border border-pitch-700 rounded-lg px-3 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-gold-500 transition-colors"
              placeholder="مثلاً: المحلل_الكبير"
            />
          </div>

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
              minLength={6}
              className="w-full bg-pitch-900 border border-pitch-700 rounded-lg px-3 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-gold-500 transition-colors"
              placeholder="6 حروف على الأقل"
              dir="ltr"
            />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gold-500 text-pitch-900 font-bold py-2.5 rounded-lg hover:bg-gold-400 disabled:opacity-50 transition-colors"
          >
            {loading ? 'جاري التسجيل...' : 'سجّل دلوقتي'}
          </button>
        </form>

        <p className="text-center text-slate-500 text-sm mt-4">
          عندك حساب؟{' '}
          <Link href="/auth/login" className="text-gold-400 hover:underline">سجّل دخول</Link>
        </p>
      </div>
    </main>
  )
}
