import React from 'react';
import logo from '../images/airbnb-logo.png'

export default function Header(){
    return(
        <nav>
            <div className='logo-img'>
                <img src={logo} alt='air-bnb-logo'/>
            </div>
        </nav>
    )
}