import { useState } from 'react'
import './CrashAutostop.scss'

const MULTIPLIER_STEP = 0.25
const MIN_MULTIPLIER_STOP = 1
const MAX_MULTIPLIER_STOP = 10

export const CrashAutostop = () => {
  const [stopMultiplier, setStopMultiplier] = useState(MIN_MULTIPLIER_STOP)

  const increaseStopMultiplier = () => {
    const updatedMultiplier = stopMultiplier + MULTIPLIER_STEP

    if (updatedMultiplier > MAX_MULTIPLIER_STOP) return

    setStopMultiplier(updatedMultiplier)
  }

  const decreaseStopMultiplier = () => {
    const updatedMultiplier = stopMultiplier - MULTIPLIER_STEP

    if (updatedMultiplier < MIN_MULTIPLIER_STOP) return

    setStopMultiplier(updatedMultiplier)
  }

  const resetStopMultiplier = () => {
    setStopMultiplier(MIN_MULTIPLIER_STOP)
  }

  return (
    <div className='crash-bets-autostop'>
      <div className='crash-bets-title'>Auto stop</div>
      <div className='crash-bets-buttons'>
        <button className='crash-bets-button' onClick={decreaseStopMultiplier}>
          -
        </button>
        <div className='crash-bets-multiplier'>{stopMultiplier.toFixed(2)}</div>
        <button className='crash-bets-button' onClick={increaseStopMultiplier}>
          +
        </button>
      </div>
      <div className='crash-bets-additional'>
        <div className='crash-bets-buttons'>
          <button className='crash-bets-button' onClick={resetStopMultiplier}>
            Reset
          </button>
          <button className='crash-bets-button'>Apply</button>
        </div>
      </div>
    </div>
  )
}
