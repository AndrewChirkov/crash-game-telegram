import './Dice.scss'
import { DiceBets } from './DiceBets/DiceBets'
import { DiceSlider } from './DiceSlider/DiceSlider'

export const Dice = () => {
  return (
    <div className='dice-wrapper'>
      <DiceSlider />
      <DiceBets />
    </div>
  )
}
