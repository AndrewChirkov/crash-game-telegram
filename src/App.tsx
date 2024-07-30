import { useState } from 'react'
import { Crash } from './components/game/crash/Crash'
import { Dice } from './components/game/dice/Dice'
import { Slide } from './components/game/slide/Slide'
import { PlayerInfo } from './components/player/PlayerInfo/PlayerInfo'
import { Mines } from './components/game/mines/Mines.tsx'

const enum Games {
  Crash,
  Dice,
  Slide,
  Mines
}

function App() {
  const [game] = useState(Games.Mines)

  const renderGame = () => {
    switch (game) {
      case Games.Crash:
        return <Crash />
      case Games.Dice:
        return <Dice />
      case Games.Slide:
        return <Slide />
      case Games.Mines:
        return <Mines />
      default:
        return null
    }
  }

  return (
    <div className='app-container'>
      <PlayerInfo />
      {renderGame()}
    </div>
  )
}

export default App
