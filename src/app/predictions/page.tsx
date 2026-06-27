'use client'
import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import Navbar from '@/components/Navbar'
import MatchCard from '@/components/MatchCard'
import type { Match, Prediction } from '@/lib/supabase'

type Stage = 'r32' | 'r16' | 'qf' | 'sf' | 'third' | 'final'

const STAGE_ORDER: Stage[] = ['r32', 'r16', 'qf', 'sf', 'third', 'final']
const STAGE_LABELS: Record<Stage, string> = {
  r32: 'دور الـ 32',
  r16: 'دور الـ 16',
  qf: 'ربع النهائي',
  sf: 'نصف النهائي',
  third: 'المركز الثالث',
  final: 'النهائي',
}

export default function PredictionsPage() {
  const router = useRouter()
  const [userId, setUserId] = useState<string | null>(null)
  const [username, setUsername] = useState('')
  const [matches, setMatches] = useState<Match[]>([])
  const [predictions, setPredictions] = useState<Record<number, Prediction>>({})
  const [changedPredictions, setChangedPredictions] = useState<Set<number>>(new Set())
  const [activeStage, setActiveStage] = useState<Stage>('r32')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const init = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/auth/login'); return }
      setUserId(user.id)

      const { data: profile } = await supabase.from('profiles').select('username').eq('id', user.id).single()
      if (profile) setUsername(profile.username)

      const { data: matchData } = await supabase.from('matches').select('*').order('match_number')
      if (matchData) setMatches(matchData)

      const { data: predData } = await supabase.from('predictions').select('*').eq('user_id', user.id)
      if (predData) {
        const predMap: Record<number, Prediction> = {}
        predData.forEach(p => { predMap[p.match_id] = p })
        setPredictions(predMap)
      }

      const { data: changedData } = await supabase
        .from('predictions')
        .select('match_id')
        .eq('user_id', user.id)
        .eq('was_changed', true)
      if (changedData) {
        setChangedPredictions(new Set(changedData.map(p => p.match_id)))
      }

      setLoading(false)
    }
    init()
  }, [router])

  const handleSave = useCallback(async (
    matchId: number,
    predA: number,
    predB: number,
    predWinner?: string
  ) => {
    if (!userId) return
    const match = matches.find(m => m.id === matchId)
    if (!match) return

    const r32Over = matches.some(m => m.stage === 'r16' && m.status !== 'upcoming')
    const isChanging = !!predictions[matchId]
    const wasChanged = isChanging && r32Over && match.stage !== 'r32'

    const upsertData = {
      user_id: userId,
      match_id: matchId,
      pred_a: predA,
      pred_b: predB,
      pred_winner: predWinner ?? null,
      was_changed: wasChanged,
      updated_at: new Date().toISOString(),
    }

    const { data } = await supabase
      .from('predictions')
      .upsert(upsertData, { onConflict: 'user_id,match_id' })
      .select()
      .single()

    if (data) {
      setPredictions(prev => ({ ...prev, [matchId]: data }))
      if (wasChanged) setChangedPredictions(prev => new Set(Array.from(prev).concat(matchId)))
    }
  }, [userId, matches, predictions])

  const stageMatches = matches.filter(m => m.stage === activeStage)
  const visibleMatches = stageMatches

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
      <div className="max-w-2xl mx-auto px-4 py-6">
        <h1 className="font-display text-3xl text-white mb-1">توقعاتك</h1>
        <p className="text-slate-500 text-sm mb-6">احفظ توقعاتك قبل بداية كل ماتش</p>

        <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide">
          {STAGE_ORDER.map(stage => {
            const stageCount = matches.filter(m => m.stage === stage).length
            if (stageCount === 0) return null
            return (
              <button
                key={stage}
                onClick={() => setActiveStage(stage)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors
                  ${activeStage === stage
                    ? 'bg-gold-500 text-pitch-900'
                    : 'bg-pitch-800 text-slate-400 hover:text-white border border-pitch-700'}`}
              >
                {STAGE_LABELS[stage]}
              </button>
            )
          })}
        </div>

        <div className="space-y-3">
          {visibleMatches.map(match => (
            <MatchCard
              key={match.id}
              match={match}
              prediction={predictions[match.id]}
              onSave={handleSave}
              wasChanged={changedPredictions.has(match.id)}
            />
          ))}
          {visibleMatches.length === 0 && (
            <div className="text-center py-16 text-slate-600">
              <p>الماتشات دي هتظهر بعد ما الدور السابق يخلص</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
