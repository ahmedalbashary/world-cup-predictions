import type { Match, Prediction } from './supabase'

export type StageMultiplier = {
  winner: number
  winner_changed: number
}

export const STAGE_POINTS: Record<Match['stage'], StageMultiplier> = {
  r32:   { winner: 1, winner_changed: 1 },
  r16:   { winner: 2, winner_changed: 1 },
  qf:    { winner: 3, winner_changed: 2 },
  sf:    { winner: 4, winner_changed: 2 },
  third: { winner: 5, winner_changed: 2 },
  final: { winner: 5, winner_changed: 2 },
}

export function calculatePoints(
  match: Match,
  prediction: Prediction,
  wasChanged: boolean = false
): number {
  if (match.status !== 'finished') return 0
  if (match.result_a === null || match.result_b === null) return 0

  let points = 0
  const multiplier = STAGE_POINTS[match.stage]

  const actualWinner = match.result_a! > match.result_b!
    ? match.team_a
    : match.result_b! > match.result_a!
    ? match.team_b
    : 'draw'

  const actualFinalWinner = actualWinner === 'draw'
    ? match.penalty_winner
    : actualWinner

  const predictedWinner = prediction.pred_a > prediction.pred_b
    ? match.team_a
    : prediction.pred_b > prediction.pred_a
    ? match.team_b
    : 'draw'

  const predictedFinalWinner = predictedWinner === 'draw'
    ? prediction.pred_winner
    : predictedWinner

  const winnerCorrect = predictedFinalWinner === actualFinalWinner

  if (winnerCorrect) {
    points += wasChanged ? multiplier.winner_changed : multiplier.winner
  }

  if (!wasChanged) {
    if (prediction.pred_a === match.result_a) points += 1
    if (prediction.pred_b === match.result_b) points += 1
  }

  return points
}
