import { useState } from 'react'
import { Crash } from './components/game/crash/Crash'
import { Dice } from './components/game/dice/Dice'
import { Slide } from './components/game/slide/Slide'
import { PlayerInfo } from './components/player/PlayerInfo/PlayerInfo'
import { Mines } from './components/game/mines/Mines.tsx'
import { Baccarat } from './components/game/baccarat/Baccarat.tsx'

const enum Games {
  Crash,
  Dice,
  Slide,
  Mines,
  Baccarat
}

function App() {
  const [game] = useState(Games.Baccarat)

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
      case Games.Baccarat:
        return <Baccarat />
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
