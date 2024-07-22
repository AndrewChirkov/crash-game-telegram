import { useEffect, useRef, useState } from 'react'
import './Crash.scss'
import { CrashBets } from './CrashBets/CrashBets'
import CrashChart from './CrashChart/CrashChart'
import { CrashMultipliers } from './CrashCoefficients/CrashMultipliers'
import { CrashGameButton } from './CrashGameButton/CrashGameButton'
import { CrashHistory } from './CrashHistory/CrashHistory'

const MULTIPLIER_ADJUSTER = 0.002
const MAX_Y_FACTOR = 1.75
const INITIAL_MAX_Y = 2

export const Crash = () => {
  const [multiplier, setMultiplier] = useState(1)
  const [multiplierData, setMultiplierData] = useState([1])
  const [maxY, setMaxY] = useState(INITIAL_MAX_Y)
  const [gameOver, setGameOver] = useState(false)
  const multiplierInterval = useRef<number>()

  useEffect(() => {
    const startGame = () => {
      setMultiplier(1)
      setMultiplierData([1])
      setMaxY(INITIAL_MAX_Y)

      multiplierInterval.current = setInterval(() => {
        setMultiplier((prevMultiplier) => {
          const newMultiplier = prevMultiplier + MULTIPLIER_ADJUSTER
          const dataset = [1, newMultiplier]

          setMultiplierData(dataset)
          setMaxY((prevMaxY) => Math.max(prevMaxY, newMultiplier * MAX_Y_FACTOR))
          return newMultiplier
        })
      }, 10)
    }

    startGame()

    return () => {
      clearInterval(multiplierInterval.current)
    }
  }, [])

  const handleGameOver = () => {
    setMultiplierData((prevMultiplierData) => [...prevMultiplierData, -10])
    setGameOver(true)
    clearInterval(multiplierInterval.current)
  }

  return (
    <>
      <div className='game-wrapper'>
        <div className={`game-container ${gameOver ? 'game-over' : ''}`}>
          <CrashChart data={multiplierData} maxY={maxY} gameOver={gameOver} />
          <CrashMultipliers multiplier={multiplier} gameOver={gameOver} />
        </div>
        <CrashHistory />
      </div>
      <CrashGameButton onClick={handleGameOver} multiplier={multiplier} />
      <CrashBets />
    </>
  )
}
