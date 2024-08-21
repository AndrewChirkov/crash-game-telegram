import { configureStore } from '@reduxjs/toolkit'
import { diceReducer } from './dice/dice.slice'
import { minesReducer } from './mines/mines.slice.ts'
import { baccaratReducer } from './baccarat/baccarat.slice.ts'

export const store = configureStore({
  reducer: {
    dice: diceReducer,
    mines: minesReducer,
    baccarat: baccaratReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
