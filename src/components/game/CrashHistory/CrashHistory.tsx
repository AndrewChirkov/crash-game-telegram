import { useState } from 'react'
import './CrashHistory.scss'

export const CrashHistory = () => {
  const [history, setHistory] = useState([1.25, 1.5, 1.8, 2.13, 1.77, 10.13, 1.01, 1.04, 1.89, 1.15])

  const getMultiplierColor = (multiplier: number) => {
    if (multiplier <= 1.5) {
      return {
        backgroundColor: 'rgba(223, 0, 57, 0.61)'
      }
    }

    if (multiplier > 2) {
      return {
        backgroundColor: 'rgb(102 102 255 / 60%)'
      }
    }

    return {
      backgroundColor: 'rgb(12 152 1 / 55%)'
    }
  }

  return (
    <div className='crash-history'>
      <div className='crash-history-title'>History</div>
      <div className='crash-history-list'>
        {history.map((multiplier) => {
          const colors = getMultiplierColor(multiplier)

          return (
            <div key={multiplier} className='crash-history-mutliplier' style={colors}>
              {multiplier.toFixed(2)}
            </div>
          )
        })}
      </div>
    </div>
  )
}
