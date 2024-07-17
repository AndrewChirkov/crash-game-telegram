import './PlayerInfo.scss'

export const PlayerInfo = () => {
  return (
    <div className='player-info'>
      <div className='player-info-profile'>
        <div className='player-info-avatar'>A</div>
        <div className='player-info-col'>
          <div className='player-info-name'>Andrew Tester</div>
          <div className='player-info-level'>Level: 10</div>
        </div>
      </div>
      <div className='player-info-balance'>
        <div className='player-info-amount'>
          18 <span className='currency stars'>S</span>
        </div>
        <div className='player-info-amount '>
          16.1K <span className='currency diamonds'>D</span>
        </div>
      </div>
    </div>
  )
}
