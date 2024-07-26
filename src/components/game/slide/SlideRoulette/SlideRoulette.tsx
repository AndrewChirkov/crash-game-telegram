import { useEffect, useRef, useState } from 'react'
import './SlideRoulette.scss'

const enum SlideResult {
  Lose,
  Win
}

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

  const [result, setResult] = useState<SlideResult | null>(null)
  const [hitMultiplier, setHitMultiplier] = useState(0)
  const [multipliers, setMultipliers] = useState(() => generateRandomNumbers())

  const resetGame = () => {
    if (!rouletteRef.current || !rouletteWrapperRef.current) return
    rouletteRef.current.style.transition = `transform 0.5s ease`
    rouletteRef.current.style.transform = `translateX(${0}px)`

    setHitMultiplier(0)
    setResult(null)
  }

  useEffect(() => {
    if (!rouletteRef.current || !rouletteWrapperRef.current) return
    resetGame()

    const updatedHitMultiplier = ':) 0' || parseFloat((Math.random() * 100).toFixed(1))

    setMultipliers((multipliers) => {
      //@ts-ignore
      multipliers[90] = updatedHitMultiplier
      return [...multipliers]
    })

    setTimeout(() => {
      if (!rouletteRef.current || !rouletteWrapperRef.current) return

      const wrapperWidth = rouletteWrapperRef.current.getBoundingClientRect().width
      const itemWidth = rouletteRef.current.children[0].getBoundingClientRect().width
      const offsetX = 5 * 98
      const transformX = itemWidth * 91 - itemWidth - wrapperWidth / 2 + getRandomInt(-itemWidth / 2 + 5, itemWidth / 2 - 5) + offsetX

      rouletteRef.current.style.transition = `transform 8s ease`
      rouletteRef.current.style.transform = `translateX(${-transformX}px)`

      setTimeout(() => {
        setResult(SlideResult.Lose)
        setHitMultiplier(updatedHitMultiplier as unknown as number)
      }, 8200)
    }, 1000)
  }, [])

  const getMultiplierStyles = (multiplier: number) => {
    if (multiplier >= 7) {
      return {
        background: 'radial-gradient(circle, rgba(129,1,208,0.45) 0%, rgba(0,0,0,0) 85%)'
      }
    }

    if (multiplier >= 6) {
      return {
        background: 'radial-gradient(circle, rgba(208,1,130,0.45) 0%, rgba(0,0,0,0) 85%)'
      }
    }

    if (multiplier >= 5) {
      return {
        background: 'radial-gradient(circle, rgba(208,1,1,0,0.45) 0%, rgba(0,0,0,0) 85%)'
      }
    }

    if (multiplier >= 4) {
      return {
        background: 'radial-gradient(circle, rgba(255,128,0,0.45) 0%, rgba(0,0,0,0) 85%)'
      }
    }

    if (multiplier >= 3) {
      return {
        background: 'radial-gradient(circle, rgba(255,226,33,0.45) 0%, rgba(0,0,0,0) 85%)'
      }
    }

    if (multiplier >= 2.5) {
      return {
        background: 'radial-gradient(circle, rgba(99,245,44,0.45) 0%, rgba(0,0,0,0) 85%)'
      }
    }

    if (multiplier >= 2) {
      return {
        background: 'radial-gradient(circle, rgba(44,245,165,0.45) 0%, rgba(0,0,0,0) 85%)'
      }
    }

    if (multiplier >= 1) {
      return {
        background: 'radial-gradient(circle, rgba(117,133,138,0.9) 0%, rgba(0,0,0,0) 75%)'
      }
    }

    return {
      background: 'radial-gradient(circle, rgba(117,133,138,0.9) 0%, rgba(0,0,0,0) 75%)'
    }
  }

  const getMultiplierBorderStyles = (multiplier: number) => {
    if (multiplier >= 7) {
      return {
        borderColor: 'rgba(129,1,208,0.45)'
      }
    }

    if (multiplier >= 6) {
      return {
        borderColor: 'rgba(208,1,130,0.8)'
      }
    }

    if (multiplier >= 5) {
      return {
        borderColor: 'rgba(208,1,1,0,0.8'
      }
    }

    if (multiplier >= 4) {
      return {
        borderColor: 'rgba(255,128,0,0.8)'
      }
    }

    if (multiplier >= 3) {
      return {
        borderColor: 'rgba(255,226,33,0.8)'
      }
    }

    if (multiplier >= 2.5) {
      return {
        borderColor: 'rgba(99,245,44,0.8)'
      }
    }

    if (multiplier >= 2) {
      return {
        borderColor: 'rgba(44,245,165,0.8)'
      }
    }

    if (multiplier >= 1) {
      return {
        borderColor: 'rgba(117,133,138,0.8)'
      }
    }

    return {
      borderColor: 'rgba(117,133,138,0.8)'
    }
  }

  return (
    <div className='slide-roulette-container'>
      <div className='slide-roulette-wrapper' ref={rouletteWrapperRef}>
        <div className='slide-roulette' ref={rouletteRef}>
          {multipliers.map((multiplier, index) => (
            <div key={index} className='slide-roulette-item'>
              <span style={getMultiplierBorderStyles(multiplier)}>{multiplier}x</span>
              <div className='slide-roulette-item-background' style={getMultiplierStyles(multiplier)}></div>
            </div>
          ))}
        </div>
        <div className='slide-roulette-separator'></div>
      </div>
      <div className='slide-roulette-result'>
        <div className={`slide-roulette-result-text ${result === SlideResult.Win && 'win'} ${result === SlideResult.Lose && 'lose'}`}>
          {result === SlideResult.Lose ? 'You lose!' : 'Waiting fortune...'}
        </div>
        <div className='slide-roulette-result-hit'>{result === SlideResult.Lose ? `${hitMultiplier}x` : ''}</div>
      </div>
    </div>
  )
}
