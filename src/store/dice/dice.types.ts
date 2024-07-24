export interface DiceState {
  multiplier: number
  previousRollResult?: number
  rollResult?: number
  isWin?: boolean
  payout?: number
  newBalance?: number
}
