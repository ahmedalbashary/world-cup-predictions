'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { calculatePoints } from '@/lib/points'
import { Shield, Save, RefreshCw } from 'lucide-react'
import type { Match, Prediction } from '@/lib/supabase'

export default function AdminPage() {
  const [authed, setAuthed] = useState(false)
  const [password, setPassword] = useState('')
  const [pwError, setPwError] = useState('')
  const [matches, setMatches] = useState<Match[]>([])
  const [editing, setEditing] = useState<Record<number, { a: string; b: string; penWinner: string }>>({})
  const [saving, setSaving] = useState<number | null>(null)
  const [recalculating, setRecalculating] = useState(false)
  const [activeStage, setActiveStage] = useState<Match['stage']>('r32')

  const ADMIN_PW = process.env.NEXT_PUBLIC_ADMIN_PW || 'admin123'

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PW) {
      setAuthed(true)
      loadMatches()
    } else {
      setPwError('باسورد غلط')
    }
  }

  const loadMatches = async () => {
    const { data } = await supabase.from('matches').select('*').order('match_number')
    if (data) setMatches(data)
  }

  const handleResult = async (match: Match) => {
    const ed = editing[match.id]
    if (!ed || ed.a === '' || ed.b === '') return

    setSaving(match.id)

    const resultA = Number(ed.a)
    const resultB = Number(ed.b)
    const isDraw = resultA === resultB
    const winner = isDraw ? 'draw' : resultA > resultB ? match.team_a : match.team_b
    const penWinner = isDraw ? ed.penWinner : null

    await supabase.from('matches').update({
      result_a: resultA,
      result_b: resultB,
      winner,
      penalty_winner: penWinner || null,
      status: 'finished',
    }).eq('id', match.id)

    await loadMatches()
    setSaving(null)
  }

  const lockMatch = async (matchId: number) => {
    await supabase.from('matches').update({ status: 'locked' }).eq('id', matchId)
    await loadMatches()
  }

  const recalculateAllPoints = async () => {
    setRecalculating(true)

    const finishedMatches = matches.filter(m => m.status === 'finished')

    for (const match of finishedMatches) {
      const { data: preds } = await supabase
        .from('predictions')
        .select('*')
        .eq('match_id', match.id)

      if (!preds) continue

      for (const pred of preds) {
        const pts = calculatePoints(match, pred, pred.was_changed)
        await supabase.from('predictions').update({ points_earned: pts }).eq('id', pred.id)
      }
    }

    // Recalculate total points per user
    const { data: allPreds } = await supabase.from('predictions').select('user_id, points_earned')
    if (allPreds) {
      const totals: Record<string, number> = {}
      allPreds.forEach(p => {
        totals[p.user_id] = (totals[p.user_id] || 0) + (p.points_earned || 0)
      })
      for (const [userId, total] of Object.entries(totals)) {
        await supabase.from('profiles').update({ total_points: total }).eq('id', userId)
      }
    }

    setRecalculating(false)
    alert('✅ تم إعادة حساب كل النقاط')
  }

  const stageMatches = matches.filter(m => m.stage === activeStage)
  const stages: Match['stage'][] = ['r32', 'r16', 'qf', 'sf', 'third', 'final']
  const stageLabels: Record<Match['stage'], string> = {
    r32: 'دور 32', r16: 'دور 16', qf: 'ربع النهائي',
    sf: 'نصف النهائي', third: 'المركز 3', final: 'النهائي',
  }

  if (!authed) {
    return (
      <main className="min-h-screen bg-pitch-gradient flex items-center justify-center px-4">
        <div className="w-full max-w-xs">
          <div className="text-center mb-6">
            <Shield className="w-10 h-10 text-gold-400 mx-auto mb-2" />
            <h1 className="font-display text-2xl text-white">Admin Panel</h1>
          </div>
          <form onSubmit={handleAuth} className="bg-pitch-800 border border-pitch-700 rounded-2xl p-5 space-y-3">
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="الباسورد"
              className="w-full bg-pitch-900 border border-pitch-700 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-gold-500"
              dir="ltr"
            />
            {pwError && <p className="text-red-400 text-sm">{pwError}</p>}
            <button type="submit" className="w-full bg-gold-500 text-pitch-900 font-bold py-2.5 rounded-lg">
              دخول
            </button>
          </form>
        </div>
      </main>
    )
  }

  return (
    <div className="min-h-screen bg-pitch-900 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-gold-400" />
            <h1 className="font-display text-2xl text-white">Admin Panel</h1>
          </div>
          <button
            onClick={recalculateAllPoints}
            disabled={recalculating}
            className="flex items-center gap-2 px-4 py-2 bg-grass-500/10 text-grass-400 border border-grass-500/30 rounded-lg text-sm hover:bg-grass-500/20 disabled:opacity-50 transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${recalculating ? 'animate-spin' : ''}`} />
            إعادة حساب النقاط
          </button>
        </div>

        {/* Stage tabs */}
        <div className="flex gap-2 flex-wrap mb-5">
          {stages.map(s => (
            <button key={s} onClick={() => setActiveStage(s)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors
                ${activeStage === s ? 'bg-gold-500 text-pitch-900 font-bold' : 'bg-pitch-800 text-slate-400 border border-pitch-700'}`}>
              {stageLabels[s]}
            </button>
          ))}
        </div>

        {/* Matches list */}
        <div className="space-y-3">
          {stageMatches.map(match => {
            const ed = editing[match.id] || { a: match.result_a?.toString() ?? '', b: match.result_b?.toString() ?? '', penWinner: match.penalty_winner ?? '' }
            const isDraw = Number(ed.a) === Number(ed.b)
            const isKnockout = true // all stages are knockout

            return (
              <div key={match.id} className="bg-pitch-800 border border-pitch-700 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-slate-500">#{match.match_number}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full
                    ${match.status === 'finished' ? 'bg-grass-500/20 text-grass-400'
                      : match.status === 'locked' ? 'bg-amber-500/20 text-amber-400'
                      : 'bg-pitch-700 text-slate-400'}`}>
                    {match.status === 'finished' ? 'انتهى' : match.status === 'locked' ? 'مقفول' : 'قادم'}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex-1 text-white text-sm text-center">{match.team_a}</span>

                  <div className="flex items-center gap-2">
                    <input type="number" min={0} max={20} value={ed.a}
                      onChange={e => setEditing(prev => ({ ...prev, [match.id]: { ...ed, a: e.target.value } }))}
                      className="w-12 h-10 text-center bg-pitch-900 border border-pitch-700 rounded-lg text-white font-bold focus:outline-none focus:border-gold-500"
                    />
                    <span className="text-slate-600">-</span>
                    <input type="number" min={0} max={20} value={ed.b}
                      onChange={e => setEditing(prev => ({ ...prev, [match.id]: { ...ed, b: e.target.value } }))}
                      className="w-12 h-10 text-center bg-pitch-900 border border-pitch-700 rounded-lg text-white font-bold focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <span className="flex-1 text-white text-sm text-center">{match.team_b}</span>
                </div>

                {isKnockout && isDraw && ed.a !== '' && ed.b !== '' && (
                  <div className="mt-3 flex gap-2">
                    {[match.team_a, match.team_b].map(team => (
                      <button key={team} onClick={() => setEditing(prev => ({ ...prev, [match.id]: { ...ed, penWinner: team } }))}
                        className={`flex-1 py-1.5 text-xs rounded-lg border transition-colors
                          ${ed.penWinner === team ? 'bg-gold-500 text-pitch-900 border-gold-500 font-bold' : 'border-pitch-700 text-slate-400'}`}>
                        {team} (بالركلات)
                      </button>
                    ))}
                  </div>
                )}

                <div className="flex gap-2 mt-3">
                  {match.status === 'upcoming' && (
                    <button onClick={() => lockMatch(match.id)}
                      className="flex-1 py-1.5 text-xs rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:bg-amber-500/20 transition-colors">
                      قفّل التوقعات
                    </button>
                  )}
                  <button onClick={() => handleResult(match)} disabled={saving === match.id}
                    className="flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs rounded-lg bg-grass-500/10 text-grass-400 border border-grass-500/30 hover:bg-grass-500/20 disabled:opacity-50 transition-colors">
                    <Save className="w-3.5 h-3.5" />
                    {saving === match.id ? 'جاري الحفظ...' : 'حفظ النتيجة'}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
