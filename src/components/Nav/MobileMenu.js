import React from 'react'
import { Link } from 'react-router-dom'
import MobileMenuScript from './MobileMenuScript'

function MobileMenu() {
    return (
        <div className='mobile__menu'>
            <div className="menu__cross">
                <div className="cross__line"></div>
                <div className="cross__line"></div>
            </div>
            <ul className='menu__mobile-nav'>
                <li className='mobile-nav__item'><Link to='/'>STRONA GŁÓWNA</Link></li>
                <li className='mobile-nav__item'><Link to='/o-mnie'>O MNIE</Link></li>
                <li className='mobile-nav__item'><Link to='/oferta'>OFERTA</Link></li>
                <li className='mobile-nav__item'><Link to='/'>BLOG</Link></li>
                <li className='mobile-nav__item'><Link to='/kontakt'>KONTAKT</Link></li>
            </ul>
            <div className="menu__shape"></div>
            <h1 className="menu__logo">NATALIA<br></br>ZARAŃSKA</h1>
            <MobileMenuScript />
        </div>
    )
}

export default MobileMenu
