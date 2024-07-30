export interface MinesState {
  field: FieldCell[][]
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
