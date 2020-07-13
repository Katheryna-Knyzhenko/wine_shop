import React from 'react';
import './Footer.css';

function Footer () {
    return (
        <div className='wrap'>
            <div className='logo'> ® Winehis 2020</div>
            <div className='form'><span>Follow us:</span>
                <input value='Name'/>
                <input value='Phone'/>
                <button className='send'><span>Send</span></button>
        </div>
            <div className='agency'>Development by <span>Mango.agency</span></div>
        </div>
    )
}
export default Footer;