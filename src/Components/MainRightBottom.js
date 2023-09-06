import React from 'react'
import TopSeller from './TopSeller'

function MainRightBottom() {
  return (
    <div className='bottomcard'>
      <div className="bottomname">
        <h2>Top Seller</h2>
        <a href="#">View More</a>
      </div>

      {
        TopSeller && TopSeller.map((seller) => 
        <div className="topseller" key={seller.id}>
        <div className="topsellerImg">
            <img src={seller?.imgSrc} alt="" />
        </div>
        <p className="topsellername">{seller?.Seller_name}<span>{seller.username}</span></p>

        <a href="#" className="button1 btn">Follow</a>
      </div>
        )
      }
    
    </div>
  )
}

export default MainRightBottom
