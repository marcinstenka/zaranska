import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <ul className='top-bar__desktop-nav'>
            <li className='desktop-nav__item'><Link to='/'>STRONA GŁÓWNA</Link></li>
            <li className='desktop-nav__item'><Link to='/'>O MNIE</Link></li>
            <li className='desktop-nav__item'><Link to='/'>OFERTA</Link></li>
            <li className='desktop-nav__item'><Link to='/'>BLOG</Link></li>
            <li className='desktop-nav__item'><Link to='/kontakt'>KONTAKT</Link></li>
        </ul>
    )
}

export default Navbar
