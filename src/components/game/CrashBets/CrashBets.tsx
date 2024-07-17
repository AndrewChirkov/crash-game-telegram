import { useState } from 'react'
import { CrashAutostop } from '../CrashAutostop/CrashAutostop'
import './CrashBets.scss'

const AMOUNT_STEP = 100
const TABLE_LIMITS_MAX = 10000

export const CrashBets = () => {
  const [betAmount, setBetAmount] = useState(AMOUNT_STEP)

  const increaseBetAmount = () => {
    const updatedBetAmount = betAmount + AMOUNT_STEP

    if (updatedBetAmount > TABLE_LIMITS_MAX) return

    setBetAmount(updatedBetAmount)
  }

  const decreaseBetAmount = () => {
    const updatedBetAmount = betAmount - AMOUNT_STEP

    if (updatedBetAmount < 0) return

    setBetAmount(updatedBetAmount)
  }

  const multiplyBetAmount = (multiplier: number) => () => {
    const updatedBetAmount = betAmount * multiplier

    if (updatedBetAmount > TABLE_LIMITS_MAX || updatedBetAmount < 0) return

    setBetAmount(updatedBetAmount)
  }

  const placeMaxBetAmount = () => {
    setBetAmount(TABLE_LIMITS_MAX)
  }

  return (
    <div className='crash-bets-wrapper'>
      <div className='crash-bets'>
        <div className='crash-bets-maker'>
          <div className='crash-bets-title'>Bet amount</div>
          <div className='crash-bets-buttons'>
            <button className='crash-bets-button' onClick={decreaseBetAmount}>
              -
            </button>
            <div className='crash-bets-amount'>{betAmount.toFixed(0)}</div>
            <button className='crash-bets-button' onClick={increaseBetAmount}>
              +
            </button>
          </div>
          <div className='crash-bets-parts'>
            <div className='crash-bets-buttons'>
              <button className='crash-bets-button' onClick={multiplyBetAmount(0.5)}>
                1/2
              </button>
              <button className='crash-bets-button' onClick={multiplyBetAmount(2)}>
                x2
              </button>
              <button className='crash-bets-button' onClick={placeMaxBetAmount}>
                Max
              </button>
            </div>
          </div>
        </div>
        <CrashAutostop />
      </div>
    </div>
  )
}
