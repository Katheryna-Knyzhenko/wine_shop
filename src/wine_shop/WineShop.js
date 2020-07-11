import React from 'react';
import './WineShop.css';

function WineShop() {
    return (
        <div className="wrapper">
            <div className='head'>
                <div className='headerPicture'>
                </div>
                <div className='grape'><img className='grapeImg' src={require('../pictures/intro-grape11.png')}
                                            alt='grape'/></div>
                <div className='bottle'><img src={require('../pictures/bottle (1).png')}
                                             alt='bottle'/></div>
                <div className='fullLogo'><img src={require('../pictures/full logo ver.jpg')} alt='logo'/></div>
                <div><img className='grape4Img' src={require('../pictures/single-grape-main 4 (1).png')}/></div>
                <div><img className='grape1Img' src={require('../pictures/single-grape-main 1.png')}/></div>
                <div><img className='grape2Img' src={require('../pictures/single-grape-main 2 (1).png')}/></div>
                <div><img className='grape3Img' src={require('../pictures/single-grape-main 3.png')}/></div>

                <div className='exploreText'>Explore the world of wine</div>
                <div className='learnAbout'>Learn about the vast world of wine in a relaxed and fun atmosphere with
                    other wine lovers and enthusiasts.
                    <br/>Wine trails are suitable for those who are already in love with the world of
                    <br/>wine and those who are just beginning to appreciate it.
                </div>
            </div>
            <div className='middle'>
                <div className='middlePicture'>
                    <div><img className='introgrape13' src={require('../pictures/intro-grape1 3 (2).png')}/></div>
                    <div><img className='introgrape12' src={require('../pictures/intro-grape1 2.png')}/></div>
                    <div><img className='singleGrapeMain31' src={require('../pictures/single-grape-main 3 (1).png')}/>
                    </div>
                    <div><img className='singleGrapeMain1' src={require('../pictures/single-grape-main 1 (1).png')}/>
                    </div>
                    <div><img className='singleGrapeMain3' src={require('../pictures/single-grape-main 3.png')}/></div>
                    <div><img className='ellipse' src={require('../pictures/Ellipse 2.png')}/>
                        <div><img className='n1941' src={require('../pictures/1901 (1).png')}/></div>
                    </div>
                    <div><img className='leaveBig'
                              src={require('../pictures/kisspng-leaf-clip-art-grape-vine-leaf-5a754b8e03a590 3.png')}/>
                    </div>
                    <div><img className='leaveSmaller1'
                              src={require('../pictures/kisspng-leaf-clip-art-grape-vine-leaf-5a754b8e03a590 2.png')}/>
                    </div>
                    <div><img className='leaveSmaller2'
                              src={require('../pictures/kisspng-leaf-clip-art-grape-vine-leaf-5a754b8e03a590 1.png')}/>
                    </div>

                </div>
            </div>
            <div className='bottom'>
                <div className='region'>About region</div>
                <div className='climate'>The climate and diversity of soils in the Stara Zagora region present great
                    opportunities for viticulture and winemaking. Our winery benefits from fantastic geography and
                    weather conditions that allow us to grow both exotic international grapes as well as local
                    traditional grape varieties.
                </div>
                <div><img className='glassLeft'
                                 src={require('../pictures/glass 1.png')}/>
            </div>
                <div><img className='recButton'
                          src={require('../pictures/Rectangle 9.png')}/>
                    <div className='textLearnMore'>Learn more</div>
                </div>
                <div><img className='glassRight'
                          src={require('../pictures/glass 2.png')}/>
                </div>
                <div className='bottomPicture'/>
            </div>
        </div>
    );
}

export default WineShop;
