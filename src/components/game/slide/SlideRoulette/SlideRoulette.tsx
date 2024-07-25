import { useRef, useState } from 'react'
import './SlideRoulette.scss'

const generateRandomNumbers = () => {
  return Array(100)
    .fill(null)
    .map(() => parseFloat((Math.random() * 10).toFixed(1)))
}

const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const SlideRoulette: React.FC = () => {
  const rouletteRef = useRef<HTMLDivElement>(null)
  const rouletteWrapperRef = useRef<HTMLDivElement>(null)

  const [multipliers, setMultipliers] = useState(() => generateRandomNumbers())

  const resetGame = () => {
    if (!rouletteRef.current || !rouletteWrapperRef.current) return
    rouletteRef.current.style.transition = `transform 0.5s ease`
    rouletteRef.current.style.transform = `translateX(${0}px)`
  }

  const spin = () => {
    if (!rouletteRef.current || !rouletteWrapperRef.current) return
    resetGame()

    const hitMultiplier = ':) 0' || parseFloat((Math.random() * 100).toFixed(1))

    setMultipliers((multipliers) => {
      //@ts-ignore
      multipliers[90] = hitMultiplier
      return [...multipliers]
    })

    setTimeout(() => {
      if (!rouletteRef.current || !rouletteWrapperRef.current) return

      const wrapperWidth = rouletteWrapperRef.current.getBoundingClientRect().width
      const itemWidth = rouletteRef.current.children[0].getBoundingClientRect().width
      const offsetX = 5 * 98
      const transformX = itemWidth * 91 - itemWidth - wrapperWidth / 2 + getRandomInt(-29, 29) + offsetX

      rouletteRef.current.style.transition = `transform 8s ease`
      rouletteRef.current.style.transform = `translateX(${-transformX}px)`
    }, 500)
  }

  const getMultiplierStyles = (multiplier: number) => {
    if (multiplier >= 7) {
      return {
        background: `radial-gradient(circle, rgba(129,1,208,0.35) 0%, rgba(0,0,0,0) 75%)`
      }
    }

    if (multiplier >= 6) {
      return {
        background: `radial-gradient(circle, rgba(208,1,130,0.35) 0%, rgba(0,0,0,0) 75%)`
      }
    }

    if (multiplier >= 5) {
      return {
        background: `radial-gradient(circle, rgba(208,1,1,0,0.35) 0%, rgba(0,0,0,0) 75%)`
      }
    }

    if (multiplier >= 4) {
      return {
        background: `radial-gradient(circle, rgba(255,128,0,0.35) 0%, rgba(0,0,0,0) 75%)`
      }
    }

    if (multiplier >= 3) {
      return {
        background: `radial-gradient(circle, rgba(255,226,33,0.35) 0%, rgba(0,0,0,0) 75%)`
      }
    }

    if (multiplier >= 2.5) {
      return {
        background: `radial-gradient(circle, rgba(99,245,44,0.35) 0%, rgba(0,0,0,0) 75%)`
      }
    }

    if (multiplier >= 2) {
      return {
        background: `radial-gradient(circle, rgba(44,245,165,0.35) 0%, rgba(0,0,0,0) 75%)`
      }
    }

    if (multiplier >= 1) {
      return {
        background: `radial-gradient(circle, rgba(117,133,138,0.9) 0%, rgba(0,0,0,0) 75%)`
      }
    }

    return {
      background: `radial-gradient(circle, rgba(117,133,138,0.9) 0%, rgba(0,0,0,0) 75%)`
    }
  }

  return (
    <div className='slide-roulette-container'>
      <div className='slide-roulette-wrapper' ref={rouletteWrapperRef}>
        <div className='slide-roulette' ref={rouletteRef}>
          {multipliers.map((multiplier, index) => (
            <div className='slide-roulette-item'>
              <span>{multiplier}x</span>
              <div className='slide-roulette-item-background' style={getMultiplierStyles(multiplier)}></div>
            </div>
          ))}
        </div>
        <div className='slide-roulette-separator'></div>
      </div>
    </div>
  )
}
