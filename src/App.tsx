import { useState } from 'react'
import { Crash } from './components/game/crash/Crash'
import { Dice } from './components/game/dice/Dice'
import { PlayerInfo } from './components/player/PlayerInfo/PlayerInfo'

const enum Games {
  Crash,
  Dice
}

function App() {
  const [game, setGame] = useState(Games.Dice)

  const renderGame = () => {
    switch (game) {
      case Games.Crash:
        return <Crash />
      case Games.Dice:
        return <Dice />
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
