import { useEffect, useState } from 'react'
import './CrashMultipliers.scss'

interface CrashMultipliersProps {
  multiplier: number
}

const initialMultipliers = [1, 1.5, 2, 2.5, 3]

export const CrashMultipliers = (props: CrashMultipliersProps) => {
  const [targetMultipliers, setTargetMultipliers] = useState(initialMultipliers)
  const { multiplier } = props

  useEffect(() => {
    const middleMultiplier = targetMultipliers[2]
    const firstMultiplier = targetMultipliers[0]

    if (multiplier > middleMultiplier) {
      const updatedMultipliers = targetMultipliers.map((targetMultiplier) => targetMultiplier + 0.5)
      setTargetMultipliers(updatedMultipliers)
    }

    if (multiplier === 1 || multiplier < firstMultiplier) {
      setTargetMultipliers(initialMultipliers)
    }
  }, [multiplier])

  return (
    <div className='crash-multipliers'>
      <div className='crash-multipliers-grid'>
        {targetMultipliers.map((targetMultiplier) => (
          <div key={targetMultiplier} className='crash-multiplier-grid'>
            <span className='crash-multiplier-text'>{targetMultiplier}</span>
            <span className='crash-multiplier-line'></span>
          </div>
        ))}
      </div>
      <div className='crash-multipliers-main'>x{multiplier.toFixed(2)}</div>
    </div>
  )
}
