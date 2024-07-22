import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { useState } from 'react'
import { DiceMultiplier } from '../DiceMultiplier/DiceMultiplier'
import './DiceSlider.scss'

const DICE_CHANCE_MIN = 2
const DICE_CHANCE_MAX = 98

const sliderMarks = { 0: '0', 25: '25', 50: '50', 75: '75', 100: '100' }

export const DiceSlider = () => {
  const [multiplier, setMultiplier] = useState(50)
  const [chance, setChance] = useState(50)

  const handleChangeMultiplier = (value: number | number[]) => {
    const multiplierValue = value as number

    if (multiplierValue >= DICE_CHANCE_MIN && multiplierValue <= DICE_CHANCE_MAX) {
      setMultiplier(multiplierValue)
      setChance(100 - multiplierValue)
    }
  }

  return (
    <>
      <DiceMultiplier multiplier={multiplier} chance={chance} />
      <div className='dice-slider'>
        <Slider marks={sliderMarks} min={0} max={100} step={1} value={multiplier} onChange={handleChangeMultiplier} />
      </div>
    </>
  )
}
