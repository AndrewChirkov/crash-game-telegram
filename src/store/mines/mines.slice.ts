import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Field, FieldCell, MinesState, Result } from './mines.types.ts'
import { DEFAULT_MINES_COUNT, generateField, getOpenedAllField, getOpenedField, RESULT_COEFF } from './mines.utils.ts'

const initialState: MinesState = {
  playing: false,
  openedCellsCount: 0,
  field: generateField(DEFAULT_MINES_COUNT)
}

const minesSlice = createSlice({
  name: 'mines',
  initialState,
  reducers: {
    play: (state, action: PayloadAction<number>) => {
      const minesCount = action.payload || DEFAULT_MINES_COUNT

      state.playing = true
      state.field = generateField(minesCount)
    },
    openCellField: (state, action: PayloadAction<FieldCell>) => {
      const openedField = getOpenedField([...state.field], action.payload)

      state.field = openedField.field
      state.openedCellsCount = (state.openedCellsCount || 0) + 1

      if (openedField.openedCell.type === Field.Mine) {
        state.field = getOpenedAllField(state.field)
        state.result = Result.Lose
        state.playing = false
      }
    },
    openAllCellFields: (state) => {
      state.field = getOpenedAllField([...state.field])
    },
    cashOut: (state) => {
      state.field = getOpenedAllField([...state.field])
      state.result = Result.Won
      state.resultMultiplier = (state.openedCellsCount! + 1) * RESULT_COEFF
      state.playing = false
    },
    resetGame: () => initialState
  }
})

export const minesReducer = minesSlice.reducer
export const { play, resetGame, openCellField, cashOut, openAllCellFields } = minesSlice.actions
