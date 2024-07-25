import './SlideBets.scss'

import { useState } from 'react'
import { useDispatch } from 'react-redux'

const AMOUNT_STEP = 100
const TABLE_LIMITS_MAX = 10000

export const SlideBets = () => {
  const [betAmount, setBetAmount] = useState(AMOUNT_STEP)

  const dispatch = useDispatch()

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
    <div className='slide-bets-wrapper'>
      <div className='slide-bets'>
        <div className='slide-bets-maker'>
          <div className='slide-bets-title'>Bet amount</div>
          <div className='slide-bets-buttons'>
            <button className='slide-bets-button' onClick={decreaseBetAmount}>
              -
            </button>
            <div className='slide-bets-amount'>{betAmount.toFixed(0)}</div>
            <button className='slide-bets-button' onClick={increaseBetAmount}>
              +
            </button>
          </div>
          <div className='slide-bets-parts'>
            <div className='slide-bets-buttons'>
              <button className='slide-bets-button' onClick={multiplyBetAmount(0.5)}>
                1/2
              </button>
              <button className='slide-bets-button' onClick={multiplyBetAmount(2)}>
                x2
              </button>
              <button className='slide-bets-button' onClick={placeMaxBetAmount}>
                Max
              </button>
            </div>
          </div>
        </div>
        <div className='slide-bets-roll'>
          <div className='slide-bets-title'>Start game</div>
          <div className='slide-bets-buttons'>
            <button className='slide-bets-button'>Roll</button>
          </div>
        </div>
      </div>
    </div>
  )
}
