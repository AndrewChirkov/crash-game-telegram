export interface MinesState {
  field: FieldCell[][]
  playing: boolean
  result?: Result
  resultMultiplier?: number
  openedCellsCount?: number
}

export interface FieldCell {
  id: number
  type: Field
  opened: boolean
}

export const enum Field {
  Diamond,
  Mine
}

export const enum Result {
  Lose,
  Won
}
