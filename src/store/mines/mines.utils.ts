import { Field, FieldCell } from './mines.types.ts'

const FIELD_SIZE = 5

export const generateField = (bombCount: number): FieldCell[][] => {
  const field: FieldCell[][] = []
  const totalCells = FIELD_SIZE * FIELD_SIZE

  const bombIndices = new Set<number>()

  while (bombIndices.size < bombCount) {
    const randomIndex = Math.floor(Math.random() * totalCells)
    bombIndices.add(randomIndex)
  }

  for (let i = 0; i < FIELD_SIZE; i++) {
    const row: FieldCell[] = []

    for (let j = 0; j < FIELD_SIZE; j++) {
      const cellFieldId = i * FIELD_SIZE + j
      const cellType = bombIndices.has(cellFieldId) ? Field.Mine : Field.Diamond

      row.push({ id: cellFieldId, type: cellType, opened: false })
    }

    field.push(row)
  }

  return field
}

export const getOpenedField = (field: FieldCell[][], fieldToOpen: FieldCell) => {
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      if (field[i][j].id === fieldToOpen.id) {
        field[i][j].opened = true
      }
    }
  }

  return field
}

export const getOpenedAllField = (field: FieldCell[][]) => {
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      field[i][j].opened = true
    }
  }

  return field
}
