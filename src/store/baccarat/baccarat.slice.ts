import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BaccaratBet, BaccaratField, BaccaratState, DealCard } from './baccarat.types.ts'
import { getCardsScore, getPairs, getWinMultiplier } from './baccarat.utils.ts'

const initialState: BaccaratState = {
  wins: [],
  bets: [],
  cards: [],
  winners: []
}

const baccaratSlice = createSlice({
  name: 'baccarat',
  initialState,
  reducers: {
    placeBet: (state, action: PayloadAction<BaccaratBet>) => {
      const betInBets = state.bets.find((bet) => bet.field === action.payload.field)

      if (betInBets) {
        state.bets.forEach((bet) => {
          if (bet.field === action.payload.field) {
            bet.amount += action.payload.amount
          }
        })
      } else {
        state.bets.push(action.payload)
      }

      return state
    },
    dealCard: (state, action: PayloadAction<DealCard>) => {
      const cardInCards = state.cards.find((cardField) => cardField.field === action.payload.to)

      const updatedCards = state.cards.slice()

      if (cardInCards) {
        updatedCards.forEach((cardField) => {
          if (cardField.field === action.payload.to) {
            const cards = [...cardField.cards, action.payload.card]

            cardField.field = action.payload.to
            cardField.score = getCardsScore(cards)
            cardField.cards = cards
          }
        })
      } else {
        const cards = [action.payload.card]
        updatedCards.push({ field: action.payload.to, score: getCardsScore(cards), cards })
      }

      state.cards = updatedCards
    },
    makeGameResult: (state) => {
      const [bankerCards, playerCards] = state.cards
      const pairs = getPairs(bankerCards.cards, playerCards.cards)

      if (pairs.hasBankerPair) {
        state.winners.push(BaccaratField.BankerPair)
      }

      if (pairs.hasPlayerPair) {
        state.winners.push(BaccaratField.PlayerPair)
      }

      if (bankerCards.score === playerCards.score) {
        state.winners.push(BaccaratField.Tie)
      } else if (bankerCards.score > playerCards.score) {
        state.winners.push(BaccaratField.Banker)
      } else {
        state.winners.push(BaccaratField.Player)
      }

      state.bets.forEach((bet) => {
        if (state.winners.includes(bet.field)) {
          const winAmount = bet.amount * getWinMultiplier(bet.field)

          state.wins.push({ ...bet, amount: winAmount })
        }
      })
    },
    resetGame: (state) => {
      state.winners = []
      state.wins = []
      state.cards = []
      state.bets = []
    }
  }
})

export const baccaratReducer = baccaratSlice.reducer
export const { placeBet, dealCard, makeGameResult, resetGame } = baccaratSlice.actions
