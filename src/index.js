import React from 'react';
import ReactDOM from 'react-dom';
import WineShop from './wine_shop/WineShop';
import Footer from './footer/Footer'
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
    <WineShop/>
    <Footer/>
</BrowserRouter>,
  document.getElementById('root')
);
