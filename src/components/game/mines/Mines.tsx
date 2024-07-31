import './Mines.scss'
import { MinesField } from './MinesField/MinesField.tsx'
import { MinesBets } from './MinesBets/MinesBets.tsx'

export const Mines = () => {
  return (
    <div className='mines-wrapper'>
      <MinesField />
      <MinesBets />
    </div>
  )
}
