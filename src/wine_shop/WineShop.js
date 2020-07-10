import React from 'react';
import './WineShop.css';

function WineShop() {
  return (
    <div className="wrapper">
        <div className='head'>
        <div className ='headerPicture'>
        </div>
            <div className='grape'><img  className='grapeImg' src={require('../pictures/intro-grape11.png')} alt='grape'/></div>
            <div className='bottle'><img  className='bottleImg' src={require('../pictures/bottle (1).png')} alt='grape'/></div>
    </div>
        <div className='middle'>
        <div className='middlePicture'/>
    </div>
        <div className='bottom'>
            <div className='bottomPicture'/>
        </div>
    </div>
  );
}

export default WineShop;
