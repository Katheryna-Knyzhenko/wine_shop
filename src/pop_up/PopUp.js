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
                    <div className='agy'><label htmlFor='n2'>10 - 20<input type="radio" name="n1" className='age20'/></label></div>
                    <div className='agy'><label htmlFor='n2'>20 - 30<input type="radio" name="n1"
                                                                   className='age30'/></label>
                    </div>
                    <div className='agy'><label htmlFor='n3'>30 - 40<input type="radio" name="n1"
                                                                                         className='age40'/></label>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PopUp;