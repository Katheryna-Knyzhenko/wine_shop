import React from 'react';
import './PopUp.css';

function PopUp(props) {
    return (
        <div className='popup'>
            <div className='cross1' onClick={props.close}><img alt='img' src={require('../pictures/Vector (1).png')}/>
            </div>
            <div className='formPop'>
                <input className='nameInput' placeholder='Name'/>
                <input className='telInput' placeholder='Phone'/>
                <div className='userInfo'><span className='ageChoose'>Your age:</span>
                    <div className='agy'><label htmlFor='check1'>10 - 20<input id='check1' type="radio" name="n1"
                                                                               className='age20'/></label></div>
                    <div className='agy'><label htmlFor='check2'><span className="radio">20 - 30</span><input
                        id='check2' type="radio" name="n1"
                        className='age30'/></label>
                    </div>
                    <div className='agy'><label htmlFor='check3'>30 - 40<input id='check3' type="radio" name="n1"
                                                                               className='age40'/></label>
                    </div>

                </div>
                <div className='buttons'>
                    <button className='downloadFoto'><span>Download your photo:</span>
                        <div className='cloudB'/>
                    </button>
                    <button className='sendB'><span className='sendT'>Send</span></button>
                </div>
            </div>
        </div>
    )
}

export default PopUp;