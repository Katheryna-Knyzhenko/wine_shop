import React, {Component} from 'react';
import './Menu.css';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className='menuPress'>
                <div className='cross' onClick={this.props.openClose}><img className='vector' src={require('../pictures/Vector (1).png')}/></div>
                <div className='logoW'><img className='log' src={require('../pictures/full logo ver.jpg')}/></div>
                <div className='aboutUs'>About us</div>
                <div className='history'>History</div>
                <div className='regionW'>Region & Wine</div>
                <div className='prod'>Our products</div>
                <div className='news'>News</div>
                <div className='contacts'>Contacts</div>
                <div className='fb'>Facebook</div>
                <div className='insta'>Instagram</div>
                <div className='ytbe'>YouTube</div>
            </div>
        )
    }
}
export default Menu;