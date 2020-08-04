import React from 'react'
import { Link } from 'react-router-dom'
import MobileMenuScript from './MobileMenuScript'
function Logo() {
    return (
        <div className='top-bar'>
            <h1 className='top-bar__logo'>BIURO PODRÓŻY</h1>
            <div className='top-bar__mobile'>
                <div className="mobile__hamburger">
                    <div className="hamburger__line hamburger__line-top"></div>
                    <div className="hamburger__line hamburger__line-mid"></div>
                    <div className="hamburger__line hamburger__line-bottom"></div>
                </div>
                <div className='mobile__menu'>
                    <div className="menu__cross">
                        <div className="cross__line"></div>
                        <div className="cross__line"></div>
                    </div>
                    <ul className='menu__mobile-nav'>
                        <li className='mobile-nav__item'><Link to='/'>STRONA GŁÓWNA</Link></li>
                        <li className='mobile-nav__item'><Link to='/'>O MNIE</Link></li>
                        <li className='mobile-nav__item'><Link to='/'>OFERTA</Link></li>
                        <li className='mobile-nav__item'><Link to='/'>BLOG</Link></li>
                        <li className='mobile-nav__item'><Link to='/kontakt'>KONTAKT</Link></li>
                    </ul>
                    <div className="menu__shape"></div>
                    <h1 className="menu__logo">BIURO PODRÓŻY</h1>
                </div>
                <MobileMenuScript />
            </div>
        </div>
    )
}

export default Logo
