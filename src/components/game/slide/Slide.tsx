import { SlideBets } from './SlideBets/SlideBets'
import { SlideRoulette } from './SlideRoulette/SlideRoulette'

export const Slide = () => {
  return (
    <div className='slide-wrapper'>
      <SlideRoulette />
      <SlideBets />
    </div>
  )
}
