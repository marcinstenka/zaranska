import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import ProjectLogo1 from './../../assets/temp/offer-project-logo1.png'
import ProjectLogo2 from './../../assets/temp/offer-project-logo2.png'
import ProjectLogo3 from './../../assets/temp/offer-project-logo3.png'
import ProjectLogo4 from './../../assets/temp/offer-project-logo4.png'

const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
        top: elementPosition,
        behavior: "smooth"
    });
}
function Navbar() {
    function TranslateDown(){
        const offerMenu = document.querySelector('.desktop-nav__offer-menu');
        offerMenu.style.transform ='translateY(91px)'
    }
    function TranslateUp(){
        const offerMenu = document.querySelector('.desktop-nav__offer-menu');
        offerMenu.style.transform ='translateY(-216px)'
    }
    return (
        <>
            <div className='top-bar__desktop-nav'>
                <div className='desktop-nav__item'><Link to='/'>STRONA GŁÓWNA</Link></div>
                <div className='desktop-nav__item'><Link to='/o-mnie'>O MNIE</Link></div>
                <div onMouseOver={TranslateDown} onMouseOut={TranslateUp} className='desktop-nav__item'><Link to='/oferta'>OFERTA</Link></div>
                <div className='desktop-nav__item'><Link to='/'>BLOG</Link></div>
                <div className='desktop-nav__item'><Link to='/kontakt'>KONTAKT</Link></div>
            </div>
            <div onMouseOver={TranslateDown} onMouseOut={TranslateUp} className="desktop-nav__offer-menu">
                <div className="offer-menu__list">
                    <ul>
                        <li><HashLink scroll={el => scrollWithOffset(el, 200)} to='/oferta#live-coaching'>live coaching</HashLink></li>
                        <li><HashLink scroll={el => scrollWithOffset(el, 200)} to='/oferta#coaching-biznesowy'>coaching biznesowy</HashLink></li>
                        <li><HashLink scroll={el => scrollWithOffset(el, 220)} to='/oferta#warsztaty-job-crafting'>warsztaty job crafting</HashLink></li>
                        <li><HashLink scroll={el => scrollWithOffset(el, 220)} to='/oferta#warsztaty-szczesliwe-rodzicielstwo'>warsztaty "Szczęśliwe rodzicielstwo"</HashLink></li>
                        <li><HashLink scroll={el => scrollWithOffset(el, 200)} to='/oferta#warsztaty-w-poszukiwaniu-pewnosci-siebie'>warsztaty "W poszukiwaniu pewności siebie"</HashLink></li>
                    </ul>
                </div>
                <div className="offer-menu__projects-links">
                    <a href="//brainylebork.pl" className="projects__project"><img src={ProjectLogo1} alt="Logo projektu Brainy"/></a>
                    <a href="//osadawiedzy.pl" className="projects__project"><img src={ProjectLogo2} alt="Logo projektu Osada Wiedzy"/></a>
                    <a href="" className="projects__project"><img src={ProjectLogo3} alt="Logo projektu Still Up"/></a>
                    <a href="" className="projects__project"><img src={ProjectLogo4} alt="Logo projektu Wild Women"/></a>
                </div>
                <div className="offer-menu__link"><HashLink scroll={el => scrollWithOffset(el, 200)} to='/oferta#live-coaching'>WYŚWIETL CAŁĄ OFERTĘ</HashLink></div>
            </div>
        </>
    )
}

export default Navbar
