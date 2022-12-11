import React from 'react';
import './Header.css'
const Header = ({content}) => {
    return(
        <div id='header'>
            {
                content
            }
        </div>
    )
}

export default Header;