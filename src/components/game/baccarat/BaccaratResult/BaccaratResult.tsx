import './BaccaratResult.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/global.store.ts'
import { BaccaratField } from '../../../../store/baccarat/baccarat.types.ts'

export const BaccaratResult = () => {
  const { winners, wins } = useSelector((state: RootState) => state.baccarat)

  const totalWinAmount = wins.reduce((acc, winBetField) => winBetField.amount + acc, 0)
  const winFieldsString = winners
    .map((winField) => {
      switch (winField) {
        case BaccaratField.Player:
          return 'Player'
        case BaccaratField.Banker:
          return 'Banker'
        case BaccaratField.Tie:
          return 'Tie'
        case BaccaratField.PlayerPair:
          return 'Player Pair'
        case BaccaratField.BankerPair:
          return 'Banker Pair'
      }
    })
    .join(', ')

  if (!winFieldsString.length) {
    return null
  }

  return (
    <div className='baccarat-result'>
      <div className={`baccarat-result-background ${winFieldsString}`}>
        <span className='win-fields'>{winFieldsString} Won</span>
        {totalWinAmount > 0 && <span className='win-amount'>{totalWinAmount}$</span>}
      </div>
    </div>
  )
}
