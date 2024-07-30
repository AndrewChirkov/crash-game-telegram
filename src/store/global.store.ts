import { configureStore } from '@reduxjs/toolkit'
import { diceReducer } from './dice/dice.slice'
import { minesReducer } from './mines/mines.slice.ts'

export const store = configureStore({
  reducer: {
    dice: diceReducer,
    mines: minesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
