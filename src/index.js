import React from 'react';
import ReactDOM from 'react-dom';
import WineShop from './wine_shop/WineShop';
import Footer from './footer/Footer'

ReactDOM.render(
  <React.StrictMode>
    <WineShop/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
