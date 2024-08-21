import './BaccaratTable.scss'
import { BaccaratField } from '../../../../store/baccarat/baccarat.types.ts'
import { BaccaratBetFields } from '../BaccaratBetFields/BaccaratBetFields.tsx'
import { placeBet } from '../../../../store/baccarat/baccarat.slice.ts'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../store/global.store.ts'

export const BaccaratTable = () => {
  const dispatch = useDispatch()
  const winners = useSelector((state: RootState) => state.baccarat.winners)

  const handleClickField = (field: BaccaratField) => () => {
    dispatch(placeBet({ field, amount: 100 }))
  }

  return (
    <div className='baccarat-table'>
      <BaccaratBetFields />
      <svg
        width='100%'
        height='100%'
        viewBox='0 0 360 197'
        version='1.1'
        style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}
      >
        <defs>
          <linearGradient
            id='_Linear1'
            x1='0'
            y1='0'
            x2='1'
            y2='0'
            gradientUnits='userSpaceOnUse'
            gradientTransform='matrix(1.22464e-14,200,-200,1.22464e-14,50,0.000230109)'
          >
            <stop offset='0' style={{ stopColor: '#761111', stopOpacity: 0.8 }} />
            <stop offset='1' style={{ stopColor: '#8a1313', stopOpacity: 0.8 }} />
          </linearGradient>
          <linearGradient
            id='_Linear2'
            x1='0'
            y1='0'
            x2='1'
            y2='0'
            gradientUnits='userSpaceOnUse'
            gradientTransform='matrix(1.22465e-14,200,-200,1.22465e-14,121,0)'
          >
            <stop offset='0' style={{ stopColor: '#113c7c', stopOpacity: 0.8 }} />
            <stop offset='1' style={{ stopColor: '#113c7c', stopOpacity: 0.8 }} />
          </linearGradient>
          <linearGradient
            id='_Linear3'
            x1='0'
            y1='0'
            x2='1'
            y2='0'
            gradientUnits='userSpaceOnUse'
            gradientTransform='matrix(1.06544e-14,174,-174,1.06544e-14,599.356,52.5424)'
          >
            <stop offset='0' style={{ stopColor: '#127e11', stopOpacity: 0.8 }} />
            <stop offset='1' style={{ stopColor: '#127e11', stopOpacity: 0.8 }} />
          </linearGradient>
          <linearGradient
            id='_Linear4'
            x1='0'
            y1='0'
            x2='1'
            y2='0'
            gradientUnits='userSpaceOnUse'
            gradientTransform='matrix(1.22465e-14,200,-200,1.22465e-14,121,0)'
          >
            <stop offset='0' style={{ stopColor: 'black', stopOpacity: 0.8 }} />
            <stop offset='1' style={{ stopColor: 'black', stopOpacity: 0.8 }} />
          </linearGradient>
          <linearGradient
            id='_Linear5'
            x1='0'
            y1='0'
            x2='1'
            y2='0'
            gradientUnits='userSpaceOnUse'
            gradientTransform='matrix(1.22464e-14,200,-200,1.22464e-14,50,0.000230109)'
          >
            <stop offset='0' style={{ stopColor: 'black', stopOpacity: 0.8 }} />
            <stop offset='1' style={{ stopColor: 'black', stopOpacity: 0.8 }} />
          </linearGradient>
        </defs>
        <g id='path562' transform='matrix(-0.988888,0,0,0.986578,360.011,0.0134222)'>
          <path
            onClick={handleClickField(BaccaratField.Banker)}
            id='TableSvg_Banker'
            className={`bet-field ${winners.includes(BaccaratField.Banker) ? 'blink' : ''}`}
            d='M179,1L179,12.116C161.467,13.133 145.716,20.793 134.227,32.616C122.563,44.62 115.292,60.915 115.009,78.914L115,80L115,148L3.198,148C2.591,148 2.042,147.754 1.644,147.356C1.246,146.958 1,146.409 1,145.802L1,3.198C1,2.591 1.246,2.042 1.644,1.644C2.042,1.246 2.591,1 3.198,1L179,1Z'
            style={{ fill: 'url(#_Linear1)', fillOpacity: '0.9', stroke: '#d51414', strokeWidth: '2px' }}
          />
        </g>
        <g id='path5621' transform='matrix(0.988888,0,0,0.986578,0,0)'>
          <path
            onClick={handleClickField(BaccaratField.Player)}
            id='TableSvg_Player'
            className={`bet-field ${winners.includes(BaccaratField.Player) ? 'blink' : ''}`}
            d='M179,1L179,12.116C161.467,13.133 145.716,20.793 134.227,32.616C122.563,44.62 115.292,60.915 115.009,78.914L115,80L115,148L3.198,148C2.591,148 2.042,147.754 1.644,147.356C1.246,146.958 1,146.409 1,145.802L1,3.198C1,2.591 1.246,2.042 1.644,1.644C2.042,1.246 2.591,1 3.198,1L179,1Z'
            style={{
              fill: 'url(#_Linear2)',
              fillOpacity: '0.9',
              stroke: '#065bd8',
              strokeWidth: '2px',
              strokeLinejoin: 'miter'
            }}
          />
        </g>
        <path
          onClick={handleClickField(BaccaratField.Tie)}
          id='TableSvg_Tie'
          className={`bet-field ${winners.includes(BaccaratField.Tie) ? 'blink' : ''}`}
          d='M180,18.988C196.434,18.988 211.312,25.708 222.081,36.571C232.851,47.435 239.512,62.444 239.512,79.022L239.512,146.002L120.488,146.002L120.488,79.022C120.488,62.444 127.149,47.435 137.919,36.571C148.688,25.708 163.566,18.988 180,18.988Z'
          style={{ fill: 'url(#_Linear3)', fillOpacity: '0.9', stroke: '#08d307', strokeWidth: '2px' }}
        />
        <path
          onClick={handleClickField(BaccaratField.PlayerPair)}
          id='TableSvg_PlayerPair'
          className={`bet-field player-pair ${winners.includes(BaccaratField.PlayerPair) ? 'blink' : ''}`}
          d='M177.362,157.432C177.362,154.234 174.766,151.638 171.568,151.638L6.432,151.638C3.234,151.638 0.638,154.234 0.638,157.432L0.638,188.568C0.638,191.766 3.234,194.362 6.432,194.362L171.568,194.362C174.766,194.362 177.362,191.766 177.362,188.568L177.362,157.432Z'
          style={{ fill: 'url(#_Linear2)', fillOpacity: '0.9', stroke: '#065bd8', strokeWidth: '2px' }}
        />
        <path
          onClick={handleClickField(BaccaratField.BankerPair)}
          id='TableSvg_BankerPair'
          className={`bet-field banker-pair ${winners.includes(BaccaratField.BankerPair) ? 'blink' : ''}`}
          d='M359.362,157.432C359.362,154.234 356.766,151.638 353.568,151.638L188.432,151.638C185.234,151.638 182.638,154.234 182.638,157.432L182.638,188.568C182.638,191.766 185.234,194.362 188.432,194.362L353.568,194.362C356.766,194.362 359.362,191.766 359.362,188.568L359.362,157.432Z'
          style={{ fill: 'url(#_Linear1)', fillOpacity: '0.9', stroke: '#d51414', strokeWidth: '2px' }}
        />
        <g width='100%' height='100%' x={0} y={0}>
          <text className='field-name' x={273} y={130}>
            Banker
          </text>
          <text className='field-name' x={30} y={130}>
            Player
          </text>
          <text className='field-name' x={166} y={130}>
            Tie
          </text>
          <text className='field-name pair' x={52} y={178}>
            Player Pair
          </text>
          <text className='field-name pair' x={231} y={178}>
            Banker Pair
          </text>
        </g>
      </svg>
    </div>
  )
}
