import React from 'react';
import './PopUp.css';

function PopUp(props) {
    return (
        <div className='popup'>
            <div className='cross1' onClick={props.close}><img src={require('../pictures/Vector (1).png')}/></div>
            <div className='formPop'>
                <input className= 'nameInput' value='Name'></input>
                <input className='telInput' value='Phone'></input>
            </div>
        </div>
    )
}

export default PopUp;