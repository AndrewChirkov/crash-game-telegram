import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './MinesBets.scss'
import { cashOut, play, resetGame } from '../../../../store/mines/mines.slice.ts'
import { RootState } from '../../../../store/global.store.ts'
import { DEFAULT_MINES_COUNT } from '../../../../store/mines/mines.utils.ts'

const AMOUNT_STEP = 100
const TABLE_LIMITS_MAX = 10000

export const MinesBets = () => {
  const [betAmount, setBetAmount] = useState(AMOUNT_STEP)
  const [minesCount, setMinesCount] = useState(DEFAULT_MINES_COUNT)

  const { playing, openedCellsCount, result } = useSelector((state: RootState) => state.mines)

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

  const changeMinesCount = (count: number) => () => {
    setMinesCount(count)
  }

  const startGame = () => {
    dispatch(resetGame())
    dispatch(play(minesCount))
  }

  const cashOutGame = () => {
    dispatch(cashOut())
  }

  return (
    <div className='mines-bets-wrapper'>
      <div className='mines-bets'>
        <div className='mines-bets-maker'>
          <div className='mines-bets-title'>Bet amount</div>
          <div className='mines-bets-buttons'>
            <button className='mines-bets-button' onClick={decreaseBetAmount}>
              -
            </button>
            <div className='mines-bets-amount'>{betAmount.toFixed(0)}</div>
            <button className='mines-bets-button' onClick={increaseBetAmount}>
              +
            </button>
          </div>
          <div className='mines-bets-parts'>
            <div className='mines-bets-buttons'>
              <button className='mines-bets-button' onClick={multiplyBetAmount(0.5)}>
                1/2
              </button>
              <button className='mines-bets-button' onClick={multiplyBetAmount(2)}>
                x2
              </button>
              <button className='mines-bets-button' onClick={placeMaxBetAmount}>
                Max
              </button>
            </div>
          </div>
        </div>
        <div className='mines-bets-maker'>
          <div className='mines-bets-title'>Mines settings</div>
          <div className='mines-bets-buttons'>
            <button className='mines-bets-button' onClick={changeMinesCount(minesCount - 1)}>
              -
            </button>
            <div className='mines-bets-amount'>{minesCount}</div>
            <button className='mines-bets-button' onClick={changeMinesCount(minesCount + 1)}>
              +
            </button>
          </div>
          <div className='mines-bets-parts'>
            <div className='mines-bets-buttons'>
              <button
                className={`mines-play-button ${playing ? 'playing' : ''}`}
                disabled={playing && openedCellsCount! < 1}
                onClick={playing ? cashOutGame : startGame}
              >
                {playing && result === undefined ? 'Cash out' : 'Play'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
