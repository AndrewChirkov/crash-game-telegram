import './BaccaratCard.scss'

interface BaccaratCardProps {
  card: string
}

export const BaccaratCard = (props: BaccaratCardProps) => {
  const { card } = props

  return (
    <div className='baccarat-card-container'>
      <div className={`baccarat-card-background ${card}`}></div>
    </div>
  )
}
