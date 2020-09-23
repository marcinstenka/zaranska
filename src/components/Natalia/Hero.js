import React from 'react'
import Logo from './../../assets/temp/logo.png'
import ShapeRight from './../../assets/temp/shape-right.png'
import ShapeLeft from './../../assets/temp/shape-left.png'
import MobileShape from './../../assets/temp/mobile-shape.png'
import Gallery from './Gallery'
import Recomendations from './Recomendations'
function Hero() {
    return (
        <div className='hero' >
            <img className='hero__shape-right' src={ShapeRight} alt='Zdjęcie Natalii Zarańskiej' />
            <img className='hero__shape-left' src={ShapeLeft} alt='Dekoracja na stronie' />
            <picture className="mobile-hero" >
                <img src={MobileShape} alt='Zdjęcie Natalii Zarańskiej'/>
            </picture>
            <div data-aos="zoom-in" className="hero__logo">
                <img src={Logo} alt='Logo'/>
            </div>
            <div data-aos="fade-up" className='hero__intro'>
                    <h2 className='intro__name'>Natalia</h2>
                    <h2 className='intro__surname'>Zarańska</h2>
            </div>
            <div className="hero__info">
                <p data-aos="fade-up" className='info-left'>Jestem przekonana, że masz w sobie potencjał, unikatowy zestaw zasobów, który raz odkryty pozwoli Tobie realizować wszystko, czego tylko zapragniesz.</p>
                <div className="info-shape">
                    <img src={Logo} alt="logo"/>
                </div>
                <p data-aos="fade-up" className='info-right'>Wiem, że Twoja budząca się świadomość doprowadzi Ciebie tam, gdzie podążasz. Spośród prawie 8 mld. ludzi na Ziemi jesteś niepowtarzalną istotą.</p>
            </div>
            <div className="hero__question">
                <p data-aos="fade-up" className='question__text'>Czego potrzebujesz, aby stać się tym kim chcesz? <br></br> Robić to co chcesz i myśleć jak chcesz?</p>
            </div>
            <div className='hero__gallery'>
                <div className='gallery__header'>
                    <h3>GALERIA</h3>
                </div>
                <div className="gallery__gallery-container">
                    <div className="gallery-container__photos">
                        <Gallery />
                    </div>
                </div>
            </div>
            <div className='hero__recemendations'>
                <div className='recomendations__header'>
                    <h3>REKOMENDACJE</h3>
                </div>
                <div className="recomendations__recomendations-container">
                    <div className="recomendations-container__recomendations">
                        <Recomendations />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
