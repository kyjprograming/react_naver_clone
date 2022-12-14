import React from 'react';
import './Header.css'
const Header = () => {
    return(
        <div id='header'>
            <img src={require('../../image/logo.png')} className='logo'/>
            <input type={'text'} className='search_input'/>
            <img src={require('../../image/search_icon.png')} className='search_bar'/>
        </div>
    )
}

export default Header;