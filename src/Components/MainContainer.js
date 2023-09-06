import React from 'react'
import "./MainContainer.css";

import  Banner from "../images/image21.webp";
import CardMain from './CardMain';
import card1 from '../images/image9.png'
import card2 from '../images/image10.png'
import card3 from '../images/image11.png'
import card4 from '../images/image12.png'
import card5 from '../images/image13.png'
import card6 from '../images/image14.png'
import MainRightTop from './MainRightTop';
import MainRightBottom from './MainRightBottom';

function MainContainer() {
  return (
    <div className='mainContainer'>
        <div className="left">
            <div className="banner" style = {{background : `url(${Banner})` , 
            backgroundRepeat : 'no-repeat' , backgroundPosition : 'center' , 
            backgroundSize : 'cover',
        }}>

                <div className="textContainer">
                    <h1>Company</h1>
                    <h2>1.5 ETH</h2>
                    <p>Uploaded by owner of company</p>
                    <div className="bid">
                        <a href="#" className='button1'>Bid Now</a>
                        <p>Ending In <span>2d:15h:20m</span></p>
                    </div>
                </div>
            </div>

            <div className="cards">
                <div className="filters">
                    <div className="popular">
                        <h2>Feed</h2>
                        <a href="#" className='button2'>Popular</a>
                    </div>
                    <div className="filter_buttons">
                        <a href="#" className='button1'>All</a>
                        <a href="#" className='button2'>Illustrations</a>
                        <a href="#" className='button2'>Art</a>
                        <a href="#" className='button2'>Games</a>
                    </div>
                </div>

                <main>
                    <CardMain imgSrc = {card1} title = {"cubic Thunder"} hearts={"65"}/>
                    <CardMain imgSrc = {card2} title = {"Pokemon ball"} hearts={"45"}/>
                    <CardMain imgSrc = {card3} title = {"Rubic Cube"} hearts={"55"}/>
                    <CardMain imgSrc = {card4} title = {"star bugs"} hearts={"75"}/>
                    <CardMain imgSrc = {card5} title = {"T-shirt pants"} hearts={"35"}/>
                    <CardMain imgSrc = {card6} title = {"Blalbalbla"} hearts={"100"}/>
                </main>
            </div>
        </div>
        <div className="right">
            <MainRightTop/>
            <MainRightBottom/>
        </div>
      
    </div>
  )
}

export default MainContainer
