import { useState } from 'react'
import { Crash } from './components/game/crash/Crash'
import { Dice } from './components/game/dice/Dice'
import { Slide } from './components/game/slide/Slide'
import { PlayerInfo } from './components/player/PlayerInfo/PlayerInfo'

const enum Games {
  Crash,
  Dice,
  Slide
}

function App() {
  const [game, setGame] = useState(Games.Slide)

  const renderGame = () => {
    switch (game) {
      case Games.Crash:
        return <Crash />
      case Games.Dice:
        return <Dice />
      case Games.Slide:
        return <Slide />
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
