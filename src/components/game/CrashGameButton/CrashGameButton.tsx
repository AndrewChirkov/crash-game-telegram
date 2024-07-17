import { useState } from 'react'
import './CrashGameButton.scss'

interface CrashGameButtonProps {
  multiplier: number
}

export const CrashGameButton = (props: CrashGameButtonProps) => {
  const { multiplier } = props
  const [runningGame, setRunningGame] = useState(true)

  return (
    <div className='crash-game-button-wrapper'>
      <button className='crash-game-button'>
        {runningGame ? (
          <span>
            Stop on <span className='multiplier'>x{multiplier.toFixed(2)}</span>
          </span>
        ) : (
          'Start game'
        )}
      </button>
    </div>
  )
}
