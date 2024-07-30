import './MinesField.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../store/global.store.ts'
import { openCellField } from '../../../../store/mines/mines.slice.ts'
import { Field, FieldCell } from '../../../../store/mines/mines.types.ts'

export const MinesField = () => {
  const field = useSelector((state: RootState) => state.mines.field)
  const dispatch = useDispatch()

  const handleOpenFieldCell = (fieldCell: FieldCell) => () => {
    dispatch(openCellField(fieldCell))
  }

  return (
    <div className='mines-field-wrapper'>
      <div className='mines-field'>
        {field.map((fieldRow) => (
          <div className='mines-field-row'>
            {fieldRow.map((fieldCell) => (
              <div
                className={`mines-field-rect ${fieldCell.opened ? `${fieldCell.type === Field.Diamond ? 'diamond' : 'mine'} opened` : ''}`}
                onClick={handleOpenFieldCell(fieldCell)}
              >
                <span className='field-cell-icon'></span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
