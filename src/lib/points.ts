import type { Match, Prediction } from './supabase'

/**
 * Points system:
 * - Correct winner (or draw): 1 pt (group), 2 pts (R16), 3 pts (QF+)
 * - Correct goals for team A: 1 pt
 * - Correct goals for team B: 1 pt
 * - Correct penalty winner (knockout only): 1 pt
 *
 * If user CHANGED prediction after group stage ended:
 * - QF winner correct: 1 pt (not 3)
 * - SF winner correct: 1 pt (not 2) ... wait, let me re-read the rules
 *
 * Original rules:
 * - Changed prediction for R16 → winner correct = 1pt (was 2pt)
 * - Changed prediction for QF → winner correct = 2pt (was 3pt)
 */

export type StageMultiplier = {
  winner: number
  winner_changed: number
}

export const STAGE_POINTS: Record<Match['stage'], StageMultiplier> = {
  group: { winner: 1, winner_changed: 1 },
  r16:   { winner: 2, winner_changed: 1 },
  qf:    { winner: 3, winner_changed: 2 },
  sf:    { winner: 3, winner_changed: 2 },
  third: { winner: 3, winner_changed: 2 },
  final: { winner: 3, winner_changed: 2 },
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

  // Determine actual match winner
const actualWinner = match.result_a! > match.result_b!
  ? match.team_a
: match.result_b! > match.result_a!
  ? match.team_b
    : 'draw'

  // For knockout: actual winner considers penalty winner if draw
  const actualKnockoutWinner = match.stage !== 'group' && actualWinner === 'draw'
    ? match.penalty_winner
    : actualWinner

  // Predicted winner
  const predictedWinner = prediction.pred_a > prediction.pred_b
    ? match.team_a
    : prediction.pred_b > prediction.pred_a
    ? match.team_b
    : 'draw'

  // For knockout: predicted winner from penalty
  const predictedKnockoutWinner = match.stage !== 'group' && predictedWinner === 'draw'
    ? prediction.pred_winner
    : predictedWinner

  // Check winner
  const winnerCorrect = match.stage === 'group'
    ? predictedWinner === actualWinner
    : predictedKnockoutWinner === actualKnockoutWinner

  if (winnerCorrect) {
    points += wasChanged ? multiplier.winner_changed : multiplier.winner
  }

  // Check individual goals (only if NOT changed - original prediction)
  if (!wasChanged) {
    if (prediction.pred_a === match.result_a) points += 1
    if (prediction.pred_b === match.result_b) points += 1
  }

  return points
}
