import React from 'react';

export default function Header(){
    return(
        <nav>
            <div className='logo-img'>
                <img src={require('../assets/images/airbnb-logo.png')} alt='air-bnb-logo' className='nav--logo'/>
            </div>
        </nav>
    )
}
