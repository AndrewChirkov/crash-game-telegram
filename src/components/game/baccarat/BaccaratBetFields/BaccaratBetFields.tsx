import './BaccaratBetFields.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/global.store.ts'
import { BaccaratField } from '../../../../store/baccarat/baccarat.types.ts'
import { BaccaratCard } from '../BaccaratCard/BaccaratCard.tsx'

export const BaccaratBetFields = () => {
  const {
    bets,
    cards: [bankerCardField, playerCardField]
  } = useSelector((state: RootState) => state.baccarat)

  let playerBet = 0
  let bankerBet = 0
  let tieBet = 0
  let bankerPairBet = 0
  let playerPairBet = 0

  bets.forEach((bet) => {
    switch (bet.field) {
      case BaccaratField.Banker:
        bankerBet = bet.amount
        break
      case BaccaratField.Player:
        playerBet = bet.amount
        break
      case BaccaratField.Tie:
        tieBet = bet.amount
        break
      case BaccaratField.BankerPair:
        bankerPairBet = bet.amount
        break
      case BaccaratField.PlayerPair:
        playerPairBet = bet.amount
        break
    }
  })

  return (
    <div className='baccarat-bet-fields'>
      {playerCardField?.score !== undefined && <div className='bet-fields-score player'>{playerCardField?.score}</div>}
      {bankerCardField?.score !== undefined && <div className='bet-fields-score banker'>{bankerCardField?.score}</div>}

      <div className='bet-field-cards player'>{playerCardField?.cards?.map((card, index) => <BaccaratCard key={index} card={card} />)}</div>
      <div className='bet-field-cards banker'>{bankerCardField?.cards?.map((card, index) => <BaccaratCard key={index} card={card} />)}</div>
      <div className='baccarat-bet-field player'>
        {playerBet > 0 && (
          <div className='bet-field-amount'>
            {playerBet} <span className='currency diamonds'>D</span>
          </div>
        )}
      </div>
      <div className='baccarat-bet-field banker'>
        {bankerBet > 0 && (
          <div className='bet-field-amount'>
            {bankerBet} <span className='currency diamonds'>D</span>
          </div>
        )}
      </div>
      <div className='baccarat-bet-field tie'>
        {tieBet > 0 && (
          <div className='bet-field-amount'>
            {tieBet} <span className='currency diamonds'>D</span>
          </div>
        )}
      </div>
      <div className='baccarat-bet-field player-pair'>
        {playerPairBet > 0 && (
          <div className='bet-field-amount'>
            {playerPairBet} <span className='currency diamonds'>D</span>
          </div>
        )}
      </div>
      <div className='baccarat-bet-field banker-pair'>
        {bankerPairBet > 0 && (
          <div className='bet-field-amount'>
            {bankerPairBet} <span className='currency diamonds'>D</span>
          </div>
        )}
      </div>
    </div>
  )
}
