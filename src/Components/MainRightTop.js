import React from 'react'

function MainRightTop() {
  return (
    <div className='topcard'>
      <div className="topcard_name">
        <h2>Statistics</h2>
        <a href="#">View More</a>
      </div>
      <div className="earnings">
        <p>Artwork Sold <span>187</span></p>
        <p>Artwork cancelled <span>5</span></p>
        <p>Artwork instock <span>25</span></p>
        <p>Artwork outstock <span>200</span></p>
        <p>Total earnings <span>262 ETH</span></p>
      </div>
    </div>
  )
}

export default MainRightTop
