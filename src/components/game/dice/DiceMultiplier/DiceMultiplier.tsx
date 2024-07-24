import CountUp from 'react-countup'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/global.store'
import './DiceMultiplier.scss'

interface DiceMultiplierProps {
  multiplier: number
  chance: number
}

export const DiceMultiplier = (props: DiceMultiplierProps) => {
  const { multiplier, chance } = props

  const probability = chance / 100
  const coefficient = 1 / probability
  const { rollResult, isWin } = useSelector((state: RootState) => state.dice)
  const hasRollResult = Number.isFinite(rollResult)

  return (
    <div className='dice-multiplier'>
      {typeof isWin === 'boolean' && <div className={`dice-multiplier-result ${isWin ? 'win' : 'lose'}`}>{isWin ? 'You winner' : 'You lose'}</div>}
      <div className='dice-multiplier-background'>
        {hasRollResult ? <CountUp end={rollResult!} duration={5} /> : <span>{coefficient.toFixed(2)}x</span>}
      </div>
      <div className='dice-multiplier-main'>
        {hasRollResult ? <CountUp end={rollResult!} duration={5} /> : <span>{coefficient.toFixed(2)}x</span>}
      </div>
      <div className='dice-multiplier-chance'>
        <div className='dice-multiplier-chance-amount'>{chance}%</div>
        <div className='dice-multiplier-chance-title'>Chance to win</div>
      </div>
    </div>
  )
}
