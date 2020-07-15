import React, {Component} from 'react';
import './WineShop.css';
import PopUp from "../pop_up/PopUp";
import Menu from "../menu/Menu";
import ScrollAnimation from 'react-animate-on-scroll';
import animateIn from "animate.css/animate.min.css";
import AOS from 'aos';
import $ from 'jquery';
import {Link} from "react-router-dom";


AOS.init({
    debounceDelay: 50,
    once: true,
    mirror: true,
});

class WineShop extends Component {

    constructor(props) {
        super(props);
        this.state = {isPopUpShown: false, isMenuShown: false, mainLogo: true, isGrapeMove: false, isScaleBottom: false};
    }


    render() {
        AOS.init({
            debounceDelay: 50,
            once: true,
            mirror: true,
        });
        var cursorX = 0;
        var cursorX = 0;
        $(document).ready(function () {

            // $.scrollify({
            //     section : ".headerPicture",
            //     sectionName : "section-name",
            //     interstitialSection : "",
            //     easing: "easeOutExpo",
            //     scrollSpeed: 1100,
            //     offset : 0,
            //     scrollbars: true,
            //     standardScrollElements: "",
            //     setHeights: true,
            //     overflowScroll: true,
            //     updateHash: true,
            //     touchScroll:true,
            //
            // });
            // $.scrollify({
            //     section : ".headerPicture",
            // });
            var wrap = document.querySelector('#wrapper');
            wrap.addEventListener('mousemove', function (event) {
                event.preventDefault();
                var cursorX = event.pageX - $(this).offset().left;
                var cursorY = event.pageY - $(this).offset().top;
                var lastX = cursorX;


                if (cursorX === lastX) {
                    var introGrape1 = document.querySelector('#grapeImg');


                    introGrape1.classList.add('grapeAnimate');

                    var grape4 = document.querySelector('#grape4Img');
                    grape4.classList.add(('grape4Animate'));
                    var grape3 = document.querySelector('#grape3Img');
                    grape3.classList.add(('grape3Animate'));
                    var grape2 = document.querySelector('#grape2Img');
                    grape2.classList.add(('grape2Animate'));
                    var grape1 = document.querySelector('#grape1Img');
                    grape1.classList.add(('grape1Animate'));
                    var introGrape13 = document.querySelector('#introgrape13');
                    introGrape13.classList.add(('introGrape13'));
                    var introGrape12 = document.querySelector('#introgrape12');
                    introGrape12.classList.add(('introGrape12'));
                    var singleGrapeMain31 = document.querySelector('#singleGrapeMain31');
                    singleGrapeMain31.classList.add(('singleGrapeMain31'));
                    var singleGrapeMain1 = document.querySelector('#singleGrapeMain1');
                    singleGrapeMain1.classList.add(('singleGrapeMain1'));
                    var singleGrapeMain3 = document.querySelector('#singleGrapeMain3');
                    singleGrapeMain3.classList.add(('singleGrapeMain3'));
                    var leafBig = document.querySelector('#leafBig');
                    leafBig.classList.add(('leafBigA'));
                    var leafSmaller1 = document.querySelector('#leafSmaller1');
                    leafSmaller1.classList.add(('leafSmaller1A'));
                    var leafSmaller2 = document.querySelector('#leafSmaller2');
                    leafSmaller2.classList.add(('leafSmaller2A'));
                    var bottleA = document.querySelector('#bot');
                    bottleA.classList.add(('bottleA'));
                    var glassL = document.querySelector('#glassLeft');
                    glassL.classList.add(('glassLA'));
                    var glassR = document.querySelector('#glassRight');
                    glassR.classList.add(('glassRA'));

                }
                if (cursorX !== lastX) {
                    wrap.attr('animation', 'paused')
                }
            })


        })

        const showMenu = () => {
            console.log('isMenuShown', this.state.isMenuShown);
            this.setState({isMenuShown: !this.state.isMenuShown})
        };
        const showPopUp = () => {
            this.setState({isPopUpShown: !this.state.isPopUpShown})
        };

        const scroll = () => {
            window.scrollY === 0 ? this.setState({mainLogo: true}) : this.setState({mainLogo: false});
        };
const scaleLandscape = () => {
        console.log('scale', this.state.isScaleBottom)
    this.setState({ isScaleBottom: !this.state.isScaleBottom });
    // var doc = document.body.className ='bottom';
    //     // doc.classList.add('bottomScale')}
    var elem = document.querySelector('#bottom');

}
        return (

            <div className="wrapper" id='wrapper' onWheel={scroll}>

                {this.state.isScaleBotoom ? document.querySelector('#bottom').className = 'bottomScale' : null}
                {this.state.mainLogo ?
                    <div className='fullLogoStatic'>
                        <img id='fullLogoImg' src={require('../pictures/full logo ver.jpg')} alt='logo'/></div> :
                    <div className='fullLogoMove'>
                        <img id='fullLogoImg' src={require('../pictures/Winehis..png')} alt='logo'/></div>
                }

                {this.state.isPopUpShown && <PopUp close={showPopUp}/>}
                {this.state.isMenuShown && <Menu openClose={showMenu}/>}
                <div className='head'>
                    <div className='menu'>
                        <div className='item aboutUsBut'>About us</div>
                        <div className='item'>History</div>
                        <div className='item call' onClick={showPopUp}>Call me plz</div>
                        <div className='item phone'><span>+35 987 654 32 10</span></div>
                    </div>
                    <div onClick={showMenu} className='burger'><img src={require('../pictures/Vector.png')}
                                                                    className='burgerLines'/>
                        <div className='burgerRound'/>
                    </div>
                    <div className='headerPicture'>
                    </div>
                    <div className='grape' id='grapeImg'><img className='grapeImg'
                                                              src={require('../pictures/intro-grape11.png')}
                                                              alt='grape'/></div>


                    <div className='bottle aos-item' id='bot'><img src={require('../pictures/bottle (1).png')}
                                                                   alt='bottle'/></div>


                    <div className='fullLogo'>
                        <img data-aos='reveal-right' id='fullLogoImg' src={require('../pictures/full logo ver.jpg')}
                             alt='logo'/></div>

                    <div><img data-aos='fade-in' data-aos='fade-out' id='grape4Img' className='grape4Img'
                              src={require('../pictures/single-grape-main 4 (1).png')}/></div>
                    <div><img className='grape1Img' id='grape1Img'
                              src={require('../pictures/single-grape-main 1.png')}/></div>
                    <div><img className='grape2Img' id='grape2Img'
                              src={require('../pictures/single-grape-main 2 (1).png')}/></div>
                    <div><img className='grape3Img' id='grape3Img'
                              src={require('../pictures/single-grape-main 3.png')}/></div>

                    <div className='exploreText'>Explore the world of wine</div>
                    <div className='learnAbout'>Learn about the vast world of wine in a relaxed and fun atmosphere with
                        other wine lovers and enthusiasts.
                        <br/>Wine trails are suitable for those who are already in love with the world of
                        <br/>wine and those who are just beginning to appreciate it.
                    </div>
                </div>
                <div className='middle'>
                    <div className='middlePicture'>
                        <div><img id='introgrape13' className='introgrape13'
                                  src={require('../pictures/intro-grape1 3 (2).png')}/></div>
                        <div><img className='introgrape12' id='introgrape12'
                                  src={require('../pictures/intro-grape1 2.png')}/></div>
                        <div><img id='singleGrapeMain31' className='singleGrapeMain31'
                                  src={require('../pictures/single-grape-main 3 (1).png')}/>
                        </div>
                        <div><img className='singleGrapeMain1' id='singleGrapeMain1'
                                  src={require('../pictures/single-grape-main 1 (1).png')}/>
                        </div>
                        <div><img className='singleGrapeMain3' id='singleGrapeMain3'
                                  src={require('../pictures/single-grape-main 3.png')}/>
                        </div>
                        <div><img src={require('../pictures/Ellipse 4.png')} className='greenCircle'></img><img
                            className='ellipse' src={require('../pictures/Ellipse 2.png')}/>
                            <img className='n1941' src={require('../pictures/1901 (1).png')}/>
                        </div>
                        <div  className='midText'>Give the wine lover in
                            your life a gift they will love. <a className='linkWine'
                                                                href='https://snipp.ru/jquery/cursor-coords'>Wine
                                trails</a> are
                            a fun way of exploring the great food and wine venues we have in the city while making great
                            memories
                        </div>
                        <div><img id='leafBig' className='leafBig'
                                  src={require('../pictures/kisspng-leaf-clip-art-grape-vine-leaf-5a754b8e03a590 3.png')}/>
                        </div>
                        <div><img className='leafSmaller1' id='leafSmaller1'
                                  src={require('../pictures/kisspng-leaf-clip-art-grape-vine-leaf-5a754b8e03a590 2.png')}/>
                        </div>
                        <div><img className='leafSmaller2' id='leafSmaller2'
                                  src={require('../pictures/kisspng-leaf-clip-art-grape-vine-leaf-5a754b8e03a590 1.png')}/>
                        </div>

                    </div>
                </div>

                <div id = 'bottom' className='bottom' onWheel={scaleLandscape}>
                    <div className='region'>About region</div>
                        <div className='climate'>The climate and diversity of soils in the Stara Zagora region present
                            great
                            opportunities for viticulture and winemaking. Our winery benefits from fantastic geography
                            and
                            weather conditions that allow us to grow both exotic international grapes as well as local
                            traditional grape varieties.
                        </div>
                    <div><img className='glassLeft' id='glassLeft'
                              src={require('../pictures/glass 1.png')}/>
                    </div>
                    <button className='recButton'><span className='textLearnMore'>
                  Learn more</span>
                    </button>
                    <div><img className='glassRight' id='glassRight'
                              src={require('../pictures/glass 2.png')}/>
                    </div>
                    <div className='bottomPicture'/>
                </div>
            </div>
        );
    }
}

export default WineShop;
