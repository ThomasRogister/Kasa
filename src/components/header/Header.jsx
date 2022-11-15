import React from 'react'
import LOGO from '../../Assets/img/LOGO.png'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
    return(
        <header>
            <img className='header__logo' src={LOGO} alt='logo Kasa' />
            <nav>
                <Link to='/' className='header__nav'>Home</Link>
                <Link to='/About'className='header__nav'>About</Link>
            </nav>
        </header>
    )
}
export default Header