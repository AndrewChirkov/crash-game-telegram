import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { useState } from 'react'
import CountUp from 'react-countup'
import { useDispatch, useSelector } from 'react-redux'
import { setMultiplier } from '../../../../store/dice/dice.slice'
import { RootState } from '../../../../store/global.store'
import { DiceMultiplier } from '../DiceMultiplier/DiceMultiplier'
import './DiceSlider.scss'

const DICE_CHANCE_MIN = 2
const DICE_CHANCE_MAX = 98

const sliderMarks = { 0: '0', 25: '25', 50: '50', 75: '75', 100: '100' }

export const DiceSlider = () => {
  const [chance, setChance] = useState(50)

  const dispatch = useDispatch()
  const { rollResult, previousRollResult, multiplier } = useSelector((state: RootState) => state.dice)
  const hasRollResult = Number.isFinite(rollResult)

  const rollCubeStyle = {
    '--roll-result': `${rollResult || 5}%`,
    '--prev-roll-result': `${previousRollResult || 5}%`
  } as any

  const handleChangeMultiplier = (value: number | number[]) => {
    const multiplierValue = value as number

    if (multiplierValue >= DICE_CHANCE_MIN && multiplierValue <= DICE_CHANCE_MAX) {
      dispatch(setMultiplier(multiplierValue))
      setChance(100 - multiplierValue)
    }
  }

  return (
    <>
      <DiceMultiplier multiplier={multiplier} chance={chance} />
      <div className={`dice-slider ${hasRollResult ? 'roll' : ''}`}>
        {hasRollResult && (
          <div className='dice-cube-slider' style={rollCubeStyle}>
            <div className='dice-cube'>
              <CountUp end={rollResult!} duration={5} />
            </div>
          </div>
        )}
        <Slider marks={sliderMarks} min={0} max={100} step={1} value={multiplier} onChange={handleChangeMultiplier} />
      </div>
    </>
  )
}
