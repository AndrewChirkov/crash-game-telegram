import { BaccaratTable } from './BaccaratTable/BaccaratTable.tsx'
import { BaccaratBets } from './BaccaratBets/BaccaratBets.tsx'
import { BaccaratResult } from './BaccaratResult/BaccaratResult.tsx'

export const Baccarat = () => {
  return (
    <div className='baccarat-wrapper'>
      <BaccaratTable />
      <BaccaratResult />
      <BaccaratBets />
    </div>
  )
}
