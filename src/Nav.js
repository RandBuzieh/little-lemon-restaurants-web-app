import React from  'react';
import littleLemonLogo from './Asstes/Logo .svg';

function Nav ()
{
    return(
        <nav>
            <ul>
                <il><img src={littleLemonLogo} alt="littleLemonLogo"/></il>
                <li><a href="/">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Menu</a></li>
        <li><a href="">Reservations</a></li>
        <li><a href="">Order online</a></li>
        <li><a href="">login</a></li>
            </ul>
        </nav>
    )
}
export default Nav;