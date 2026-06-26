'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Lock, CheckCircle2 } from 'lucide-react'
import type { Match, Prediction } from '@/lib/supabase'

type Props = {
  match: Match
  prediction?: Prediction
  onSave: (matchId: number, predA: number, predB: number, predWinner?: string) => Promise<void>
  wasChanged?: boolean
}

export default function MatchCard({ match, prediction, onSave, wasChanged }: Props) {
  const [predA, setPredA] = useState(prediction?.pred_a ?? '')
  const [predB, setPredB] = useState(prediction?.pred_b ?? '')
  const [predWinner, setPredWinner] = useState(prediction?.pred_winner ?? '')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const isLocked = match.status === 'locked' || match.status === 'finished'
  const isKnockout = match.stage !== 'group'
  const isDraw = Number(predA) === Number(predB)
  const hasResult = match.result_a !== null && match.result_b !== null

  const stageLabel: Record<Match['stage'], string> = {
    group: `المجموعة ${match.group_name}`,
    r16: 'دور الـ 32',
    qf: 'ربع النهائي',
    sf: 'نصف النهائي',
    third: 'المركز الثالث',
    final: 'النهائي',
  }

  const handleSave = async () => {
    if (predA === '' || predB === '') return
    if (isKnockout && isDraw && !predWinner) return
    setSaving(true)
    await onSave(match.id, Number(predA), Number(predB), predWinner || undefined)
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

const pointsColor = (prediction?.points_earned ?? 0) > 0 ? 'text-grass-400' : 'text-slate-500'
  
  return (
    <div className={`bg-pitch-800 border rounded-xl p-4 transition-all
      ${isLocked ? 'border-pitch-700 opacity-80' : 'border-pitch-600 hover:border-gold-500/40'}`}>

      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-slate-500">{stageLabel[match.stage]} · #{match.match_number}</span>
        <div className="flex items-center gap-2">
          {wasChanged && <span className="text-xs text-amber-500">توقع معدّل</span>}
          {hasResult && (
            <span className={`text-sm font-bold ${pointsColor}`}>
              {prediction?.points_earned ?? 0} نقطة
            </span>
          )}
          {isLocked && <Lock className="w-3.5 h-3.5 text-slate-600" />}
        </div>
      </div>

      {/* Teams */}
      <div className="flex items-center gap-3">
        {/* Team A */}
        <div className="flex-1 flex flex-col items-center gap-1.5">
          <img src={match.team_a_flag} alt={match.team_a} className="w-10 h-7 object-cover rounded-sm" />
          <span className="text-xs text-center text-slate-300 leading-tight">{match.team_a}</span>
          {hasResult && (
            <span className="text-lg font-bold text-white">{match.result_a}</span>
          )}
        </div>

        {/* Score inputs */}
        <div className="flex items-center gap-2">
          <input
            type="number"
            min={0}
            max={20}
            value={predA}
            onChange={e => { setPredA(e.target.value); setSaved(false) }}
            disabled={isLocked}
            className="w-12 h-12 text-center text-xl font-bold bg-pitch-900 border border-pitch-700 rounded-lg text-white
              focus:outline-none focus:border-gold-500 disabled:cursor-not-allowed disabled:text-slate-600 transition-colors"
          />
          <span className="text-slate-600 font-bold">-</span>
          <input
            type="number"
            min={0}
            max={20}
            value={predB}
            onChange={e => { setPredB(e.target.value); setSaved(false) }}
            disabled={isLocked}
            className="w-12 h-12 text-center text-xl font-bold bg-pitch-900 border border-pitch-700 rounded-lg text-white
              focus:outline-none focus:border-gold-500 disabled:cursor-not-allowed disabled:text-slate-600 transition-colors"
          />
        </div>

        {/* Team B */}
        <div className="flex-1 flex flex-col items-center gap-1.5">
          <img src={match.team_b_flag} alt={match.team_b} className="w-10 h-7 object-cover rounded-sm" />
          <span className="text-xs text-center text-slate-300 leading-tight">{match.team_b}</span>
          {hasResult && (
            <span className="text-lg font-bold text-white">{match.result_b}</span>
          )}
        </div>
      </div>

      {/* Penalty winner picker (knockout + draw) */}
      {isKnockout && !isLocked && isDraw && predA !== '' && predB !== '' && (
        <div className="mt-3 pt-3 border-t border-pitch-700">
          <p className="text-xs text-slate-400 mb-2 text-center">من هيكسب بالركلات؟</p>
          <div className="flex gap-2">
            {[match.team_a, match.team_b].map(team => (
              <button
                key={team}
                onClick={() => setPredWinner(team)}
                className={`flex-1 py-1.5 text-xs rounded-lg border transition-colors
                  ${predWinner === team
                    ? 'bg-gold-500 text-pitch-900 border-gold-500 font-bold'
                    : 'border-pitch-700 text-slate-400 hover:border-gold-500/50'}`}
              >
                {team}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Locked penalty winner display */}
      {isKnockout && isLocked && prediction?.pred_winner && (
        <div className="mt-3 pt-3 border-t border-pitch-700 text-center">
          <span className="text-xs text-slate-500">كسبان الركلات: </span>
          <span className="text-xs text-gold-400">{prediction.pred_winner}</span>
        </div>
      )}

      {/* Save button */}
      {!isLocked && (
        <button
          onClick={handleSave}
          disabled={saving || predA === '' || predB === '' || (isKnockout && isDraw && !predWinner)}
          className={`w-full mt-3 py-2 rounded-lg text-sm font-medium transition-all
            ${saved
              ? 'bg-grass-500/20 text-grass-400 border border-grass-500/30'
              : 'bg-gold-500/10 text-gold-400 border border-gold-500/30 hover:bg-gold-500/20 disabled:opacity-40 disabled:cursor-not-allowed'}`}
        >
          {saving ? 'جاري الحفظ...' : saved ? '✓ اتحفظ' : prediction ? 'تحديث التوقع' : 'حفظ التوقع'}
        </button>
      )}
    </div>
  )
}
