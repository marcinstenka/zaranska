import React from 'react'
import { Link } from 'react-router-dom'

import ProjectLogo1 from './../../assets/temp/offer-project-logo1.png'
import ProjectLogo2 from './../../assets/temp/offer-project-logo2.png'
import ProjectLogo3 from './../../assets/temp/offer-project-logo3.png'
import ProjectLogo4 from './../../assets/temp/offer-project-logo4.png'

function Navbar() {
    return (
        <div className='top-bar__desktop-nav'>
            <div className='desktop-nav__item'><Link to='/'>STRONA GŁÓWNA</Link></div>
            <div className='desktop-nav__item'><Link to='/o-mnie'>O MNIE</Link></div>
            <div className='desktop-nav__item'><Link to='/oferta'>OFERTA</Link></div>
            <div className='desktop-nav__item'><Link to='/'>BLOG</Link></div>
            <div className='desktop-nav__item'><Link to='/kontakt'>KONTAKT</Link></div>
            <div className="desktop-nav__offer-menu">
                <div className="offer-menu__list">
                    <ul>
                        <li><a href=''>live coaching</a></li>
                        <li><a href=''>coaching biznesowy</a></li>
                        <li><a href=''>warsztaty job crafting</a></li>
                        <li><a href=''>warsztaty "Szczęśliwe rodzicielstwo"</a></li>
                        <li><a href=''>warsztaty "W poszukiwaniu pewności siebie"</a></li>
                    </ul>
                </div>
                <div className="offer-menu__projects-links">
                    <a href="" className="projects__project"><img src={ProjectLogo1} alt="Logo projektu Brainy"/></a>
                    <a href="//osadawiedzy.pl" className="projects__project"><img src={ProjectLogo2} alt="Logo projektu Osada Wiedzy"/></a>
                    <a href="" className="projects__project"><img src={ProjectLogo3} alt="Logo projektu Still Up"/></a>
                    <a href="" className="projects__project"><img src={ProjectLogo4} alt="Logo projektu Wild Women"/></a>
                </div>
                <div className="offer-menu__link"><Link to='/oferta'>WYŚWIETL CAŁĄ OFERTĘ</Link></div>
            </div>
        </div>
    )
}

export default Navbar
