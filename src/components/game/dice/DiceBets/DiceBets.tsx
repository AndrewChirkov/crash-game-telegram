import { useState } from 'react'
import './DiceBets.scss'

const AMOUNT_STEP = 100
const TABLE_LIMITS_MAX = 10000

export const DiceBets = () => {
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
    <div className='dice-bets-wrapper'>
      <div className='dice-bets'>
        <div className='dice-bets-maker'>
          <div className='dice-bets-title'>Bet amount</div>
          <div className='dice-bets-buttons'>
            <button className='dice-bets-button' onClick={decreaseBetAmount}>
              -
            </button>
            <div className='dice-bets-amount'>{betAmount.toFixed(0)}</div>
            <button className='dice-bets-button' onClick={increaseBetAmount}>
              +
            </button>
          </div>
          <div className='dice-bets-parts'>
            <div className='dice-bets-buttons'>
              <button className='dice-bets-button' onClick={multiplyBetAmount(0.5)}>
                1/2
              </button>
              <button className='dice-bets-button' onClick={multiplyBetAmount(2)}>
                x2
              </button>
              <button className='dice-bets-button' onClick={placeMaxBetAmount}>
                Max
              </button>
            </div>
          </div>
        </div>
        <div className='dice-bets-roll'>
          <div className='dice-bets-title'>Start game</div>
          <div className='dice-bets-buttons'>
            <button className='dice-bets-button'>Roll</button>
          </div>
        </div>
      </div>
    </div>
  )
}
