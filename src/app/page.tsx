import Link from 'next/link'
import { Trophy, Zap, Users, Lock } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-pitch-gradient flex flex-col">
      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-20 text-center">
        <div className="mb-6 w-20 h-20 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
          <Trophy className="w-10 h-10 text-gold-400" />
        </div>

        <h1 className="font-display text-6xl sm:text-8xl text-white tracking-wider mb-2">
          كأس العالم
        </h1>
        <p className="font-display text-4xl sm:text-5xl text-gold-400 tracking-widest mb-6">
          2026
        </p>
        <p className="text-slate-400 text-lg max-w-md mb-10">
          توقّع نتائج الماتشات، اجمع نقاط، وتنافس مع أصدقائك على لقب المحلل الأول
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/auth/register"
            className="px-8 py-3 bg-gold-500 text-pitch-900 font-bold text-lg rounded-xl hover:bg-gold-400 transition-colors"
          >
            ابدأ دلوقتي
          </Link>
          <Link
            href="/leaderboard"
            className="px-8 py-3 border border-pitch-700 text-slate-300 text-lg rounded-xl hover:bg-pitch-700 transition-colors"
          >
            شوف الترتيب
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-4xl mx-auto w-full px-4 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { icon: Zap, title: 'نظام نقاط ذكي', desc: 'نقاط على الكسبان + نقاط إضافية لو توقعت الأهداف بالظبط' },
          { icon: Lock, title: 'قفل تلقائي', desc: 'التوقعات بتتقفل أوتوماتيك قبل ما الماتش يبدأ' },
          { icon: Users, title: 'تنافس مع الكل', desc: 'ليدربورد مباشر بيتحدث بعد كل ماتش' },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-pitch-800/50 border border-pitch-700 rounded-xl p-5">
            <Icon className="w-6 h-6 text-gold-400 mb-3" />
            <h3 className="font-semibold text-white mb-1">{title}</h3>
            <p className="text-slate-400 text-sm">{desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center pb-6">
        <Link href="/auth/login" className="text-slate-500 text-sm hover:text-slate-300 transition-colors">
          عندك حساب؟ سجّل دخول
        </Link>
      </div>
    </main>
  )
}
