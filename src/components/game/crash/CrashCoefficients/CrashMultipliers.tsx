import './CrashMultipliers.scss'

interface CrashMultipliersProps {
  multiplier: number
  gameOver: boolean
}

export const CrashMultipliers = (props: CrashMultipliersProps) => {
  const { multiplier, gameOver } = props

  return (
    <div className='crash-multipliers'>
      <div className={`crash-multipliers-main ${gameOver ? 'game-over' : ''}`}>x{multiplier.toFixed(2)}</div>
    </div>
  )
}
