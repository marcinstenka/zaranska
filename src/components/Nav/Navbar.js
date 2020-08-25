import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='top-bar__desktop-nav'>
            <div className='desktop-nav__item'><Link to='/'>STRONA GŁÓWNA</Link></div>
            <div className='desktop-nav__item'><Link to='/o-mnie'>O MNIE</Link></div>
            <div className='desktop-nav__item'><Link to='/oferta'>OFERTA</Link></div>
            <div className='desktop-nav__item'><Link to='/'>BLOG</Link></div>
            <div className='desktop-nav__item'><Link to='/kontakt'>KONTAKT</Link></div>
        </div>
    )
}

export default Navbar
