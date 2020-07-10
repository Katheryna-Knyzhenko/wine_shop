import React from 'react';
import './WineShop.css';

function WineShop() {
  return (
    <div className="wrapper">
        <div className='head'>
        <div className ='headerPicture'>
        </div>
            <div className='grape'><img  className='grapeImg' src={require('../pictures/intro-grape11.png')} alt='grape'/></div>
            <div className='bottle'><img  className='bottleImg' src={require('../pictures/bottle (1).png')} alt='bottle'/></div>
            <div className='fullLogo'><img src={require('../pictures/full logo ver.jpg')} alt='logo'/></div>
            <div><img className='grape4Img' src={require('../pictures/single-grape-main 4 (1).png')}/></div>
            <div><img className='grape1Img' src={require('../pictures/single-grape-main 1.png')}/></div>
            <div><img className='grape2Img' src={require('../pictures/single-grape-main 2 (1).png')}/></div>
            <div><img className='grape3Img' src={require('../pictures/single-grape-main 3.png')}/></div>
            <div className='exploreText'>Explore the world of wine</div>
            <div className='learnAbout'>Learn about the vast world of wine in a relaxed and fun atmosphere with other wine lovers and enthusiasts.
                <br/>Wine trails are suitable for those who are already in love with the world of
                <br/>wine and those who are just beginning to appreciate it.
            </div>
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
