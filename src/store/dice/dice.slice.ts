import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { DiceState } from './dice.types'

const initialState: DiceState = {
  multiplier: 50
}

const diceSlice = createSlice({
  name: 'dice',
  initialState,
  reducers: {
    rollGame: (state) => {
      state.rollResult = 0
      state.previousRollResult = state.rollResult
      state.rollResult = Math.floor(Math.random() * 100)
    },
    setResultGame: (state) => {
      state.isWin = state.multiplier <= state.rollResult!
      state.rollResult = undefined!
    },
    setMultiplier: (state, action: PayloadAction<number>) => {
      state.multiplier = action.payload
    },
    resetGame: () => initialState
  }
})

export const diceReducer = diceSlice.reducer
export const { rollGame, resetGame, setMultiplier, setResultGame } = diceSlice.actions
