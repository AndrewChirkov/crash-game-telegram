import { Crash } from './components/game/Crash'
import { CrashBets } from './components/game/CrashBets/CrashBets'
import { PlayerInfo } from './components/player/PlayerInfo/PlayerInfo'

function App() {
  return (
    <div className='app-container'>
      <PlayerInfo />
      <Crash />
      <CrashBets />
    </div>
  )
}

export default App
