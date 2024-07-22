import './DiceMultiplier.scss'

interface DiceMultiplierProps {
  multiplier: number
  chance: number
}

export const DiceMultiplier = (props: DiceMultiplierProps) => {
  const { multiplier, chance } = props

  const probability = chance / 100
  const coefficient = 1 / probability

  return (
    <div className='dice-multiplier'>
      <div className='dice-multiplier-background'>{coefficient.toFixed(2)}x</div>
      <div className='dice-multiplier-main'>{coefficient.toFixed(2)}x</div>
      <div className='dice-multiplier-chance'>
        <div className='dice-multiplier-chance-amount'>{chance}%</div>
        <div className='dice-multiplier-chance-title'>Chance to win</div>
      </div>
    </div>
  )
}
