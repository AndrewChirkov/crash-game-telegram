import './MinesField.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../store/global.store.ts'
import { openCellField } from '../../../../store/mines/mines.slice.ts'
import { Field, FieldCell, Result } from '../../../../store/mines/mines.types.ts'

export const MinesField = () => {
  const { field, result, resultMultiplier } = useSelector((state: RootState) => state.mines)
  const dispatch = useDispatch()

  const handleOpenFieldCell = (fieldCell: FieldCell) => () => {
    dispatch(openCellField(fieldCell))
  }

  return (
    <div className='mines-field-wrapper'>
      <div className={`mines-field ${result !== undefined ? 'has-result' : ''}`}>
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
      <div className={`mines-field-result ${result !== undefined ? 'has-result' : ''}`}>
        <div className={`field-cell-text ${result === Result.Won ? 'won' : 'lose'}`}>{result === Result.Won ? 'You won!' : 'You lose...'}</div>
        <span className={`field-cell-icon ${result === Result.Won ? 'diamond' : 'mine'}`}>
          <div className='field-cell-coeff'>{result === Result.Won ? `${resultMultiplier!.toFixed(2)}x` : ''}</div>
        </span>
      </div>
    </div>
  )
}
