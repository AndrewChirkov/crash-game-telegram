import { useState } from 'react'
import { useDispatch } from 'react-redux'
import './BaccaratBets.scss'
import { dealCard, makeGameResult, resetGame } from '../../../../store/baccarat/baccarat.slice.ts'
import { BaccaratField } from '../../../../store/baccarat/baccarat.types.ts'
import { getBaccaratShoe } from '../../../../store/baccarat/baccarat.utils.ts'

const AMOUNT_STEP = 100
const TABLE_LIMITS_MAX = 10000

export const BaccaratBets = () => {
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

  const startGame = () => {
    const shoe = getBaccaratShoe()

    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        const randomCard = shoe[Math.floor(Math.random() * shoe.length)]
        const dealTo = i % 2 > 0 ? BaccaratField.Player : BaccaratField.Banker
        const dealtCard = { to: dealTo, card: randomCard }

        dispatch(dealCard(dealtCard))
      }, i * 1000)
    }

    setTimeout(() => {
      dispatch(makeGameResult())
    }, 6000)

    setTimeout(() => {
      dispatch(resetGame())
    }, 10000)
  }

  return (
    <div className='baccarat-bets-wrapper'>
      <div className='baccarat-bets'>
        <div className='baccarat-bets-maker'>
          <div className='baccarat-bets-title'>Bet amount</div>
          <div className='baccarat-bets-buttons'>
            <button className='baccarat-bets-button' onClick={decreaseBetAmount}>
              -
            </button>
            <div className='baccarat-bets-amount'>{betAmount.toFixed(0)}</div>
            <button className='baccarat-bets-button' onClick={increaseBetAmount}>
              +
            </button>
          </div>
          <div className='baccarat-bets-parts'>
            <div className='baccarat-bets-buttons'>
              <button className='baccarat-bets-button' onClick={multiplyBetAmount(0.5)}>
                1/2
              </button>
              <button className='baccarat-bets-button' onClick={multiplyBetAmount(2)}>
                x2
              </button>
              <button className='baccarat-bets-button' onClick={placeMaxBetAmount}>
                Max
              </button>
            </div>
          </div>
        </div>
        <div className='baccarat-bets-roll'>
          <div className='baccarat-bets-title'>Start game</div>
          <div className='baccarat-bets-buttons'>
            <button className='baccarat-bets-button' onClick={startGame}>
              Deal cards
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
