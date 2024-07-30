import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FieldCell, MinesState } from './mines.types.ts'
import { generateField, getOpenedAllField, getOpenedField } from './mines.utils.ts'

const initialState: MinesState = {
  field: generateField(10)
}

const minesSlice = createSlice({
  name: 'mines',
  initialState,
  reducers: {
    play: (state) => {
      state.field = generateField(10)
    },
    openCellField: (state, action: PayloadAction<FieldCell>) => {
      state.field = getOpenedField([...state.field], action.payload)
    },
    openAllCellFields: (state) => {
      state.field = getOpenedAllField([...state.field])
    },
    resetGame: () => initialState
  }
})

export const minesReducer = minesSlice.reducer
export const { play, openCellField, openAllCellFields } = minesSlice.actions
