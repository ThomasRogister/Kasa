import React from 'react'
import LOGO from '../../Assets/img/LOGO.png'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
    return(
        <header>
            <img className='LOGO' src={LOGO} alt='logo Kasa' />
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/About'>About</Link>
            </nav>
        </header>
    )
}
export default Header