import React from 'react';
import './PopUp.css';

function PopUp(props) {
    return (
        <div className='popup'>
            <div className='cross1' onClick={props.close}><img src={require('../pictures/Vector (1).png')}/></div>
            <div className='formPop'>
                <input className='nameInput' value='Name'></input>
                <input className='telInput' value='Phone'></input>
                <div className='userInfo'><span className='ageChoose'>Your age:</span>
                    <div className='agy'><label htmlFor='check1'>10 - 20<input id='check1' type="radio" name="n1" className='age20'/></label></div>
                    <div className='agy'><label htmlFor='check2'>20 - 30<input id='check2' type="radio" name="n1"
                                                                   className='age30'/></label>
                    </div>
                    <div className='agy'><label htmlFor='check3'>30 - 40<input id='check3' type="radio" name="n1"
                                                                                         className='age40'/></label>
                    </div>

                </div>
                <div className='buttons'>
                    <div className='downloadFoto'><span>Download your photo:</span>
                        <button className='cloudB'><img src={require('../pictures/Vector (4).png')}/></button> </div>
                    <button className='sendB'><span className='sendT'>Send</span></button>
                </div>
            </div>
        </div>
    )
}

export default PopUp;