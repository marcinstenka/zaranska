import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='top-bar__desktop-nav'>
            <div className='desktop-nav__item'><Link to='/'>STRONA GŁÓWNA</Link></div>
            <div className='desktop-nav__item'><Link to='/'>O MNIE</Link></div>
            <div className='desktop-nav__item'><Link to='/'>OFERTA</Link></div>
            <div className='desktop-nav__item'><Link to='/'>BLOG</Link></div>
            <div className='desktop-nav__item'><Link to='/kontakt'>KONTAKT</Link></div>
        </div>
    )
}

export default Navbar
