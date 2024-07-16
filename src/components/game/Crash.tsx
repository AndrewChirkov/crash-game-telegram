import { useEffect, useRef, useState } from 'react'
import RocketImage from './../../assets/game/rocket.svg'
import './Crash.scss'
import { CrashMultipliers } from './CrashCoefficients/CrashMultipliers'

const ROCKET_SPRITE_WIDTH = 250
const ROCKET_SPRITE_HEIGHT = 300
const ROCKET_LINE_COLOR = '#4da6ff'

const OFFSET_Y = 20
const OFFSET_X = 60

const MULTIPLIER_ADJUSTER = 0.002

export const Crash = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [multiplier, setMultiplier] = useState(1)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current

    const ctx = canvas.getContext('2d')

    const rocketImg = new Image()
    rocketImg.src = RocketImage

    if (!canvas || !ctx) return

    let running = false
    let stopLine = true

    let lineMultiplier = 1.0
    let startTime = 0
    let rocketX = 0
    let rocketY = 0
    let staticX = 0
    let staticY = 0
    let points: { x: number; y: number }[] = []

    let frame: number = 0
    let multiplierInterval: number

    const startGame = () => {
      if (running) return

      running = true
      stopLine = false
      startTime = Date.now()
      points = []

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      frame = requestAnimationFrame(update)

      multiplierInterval = setInterval(() => {
        setMultiplier((prevMultiplier) => prevMultiplier + MULTIPLIER_ADJUSTER)
      }, 20)
    }

    const update = () => {
      if (!running) return

      const elapsedTime = (Date.now() - startTime) / 500
      lineMultiplier = 0 + Math.exp(elapsedTime / 4)
      const x = stopLine ? staticX : elapsedTime * 80 + OFFSET_X
      const y = stopLine ? staticY : canvas.height - lineMultiplier * 15 - OFFSET_Y
      const verticalOffset = 5 * Math.sin(elapsedTime * 5) // Rocket jumping offset

      if ((!stopLine && x >= canvas.width * 0.7) || y <= canvas.height * 0.3) {
        stopLine = true
        staticX = x
        staticY = y
        rocketX = x
        rocketY = y
      }

      if (!stopLine) {
        points.push({ x, y })
        rocketX = x
        rocketY = y
      } else {
        rocketX = staticX
        rocketY = staticY
      }

      points.push({ x, y })

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Main line
      ctx.beginPath()
      ctx.moveTo(60, canvas.height - 25)

      points.forEach((point) => {
        ctx.lineTo(point.x, point.y)
      })

      ctx.strokeStyle = ROCKET_LINE_COLOR
      ctx.lineWidth = 20
      ctx.stroke()
      ctx.closePath()

      if (rocketImg) {
        const rocketAngle = Math.atan2(y, x)
        const rocketTranslateX = x - 15
        const rocketTranslateY = y + verticalOffset * 2

        ctx.save()
        ctx.translate(rocketTranslateX, rocketTranslateY)
        ctx.rotate(rocketAngle)
        ctx.drawImage(rocketImg, -ROCKET_SPRITE_WIDTH / 2, -ROCKET_SPRITE_HEIGHT, ROCKET_SPRITE_WIDTH, ROCKET_SPRITE_HEIGHT)
        ctx.restore()
      }

      frame = requestAnimationFrame(update)
    }

    startGame()

    return () => {
      running = false
      clearInterval(multiplierInterval)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className='game-container'>
      <canvas ref={canvasRef} id='crash-game' width='1920' height='1080'></canvas>
      <CrashMultipliers multiplier={multiplier} />
    </div>
  )
}
