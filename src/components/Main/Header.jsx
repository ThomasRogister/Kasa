import React from 'react'
import LOGO from '../../Assets/img/LOGO.png'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
    return(
        <header>
            <img className='logo' src={LOGO} alt='logo Kasa' />
            <nav>
                <Link to='/' className='linkOut'>Home</Link>
                <Link to='/About'className='linkOut'>About</Link>
            </nav>
        </header>
    )
}
export default Header