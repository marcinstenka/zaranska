import React from 'react'
import Logo from './../../assets/temp/logo.png'
import ShapeRight from './../../assets/temp/shape-right.png'
import ShapeLeft from './../../assets/temp/shape-left.png'
import MobileShape1 from './../../assets/temp/mobile-shape1.png'
import MobileShape2 from './../../assets/temp/mobile-shape2.png'
import MobileShape3 from './../../assets/temp/mobile-shape3.png'
import Gallery from './Gallery'
import Recomendations from './Recomendations'
function Hero() {
    return (
        <div className='hero' >
            <img className='hero__shape-right' src={ShapeRight} alt='Zdjęcie Natalii Zarańskiej' />
            <img className='hero__shape-left' src={ShapeLeft} alt='Dekoracja na stronie' />
            <picture className="mobile-hero" >
                <img src={MobileShape3} alt='Zdjęcie Natalii Zarańskiej'/>
            </picture>
            <div className="hero__logo">
                <img src={Logo} alt='Logo'/>
            </div>
            <div className='hero__intro'>
                    <h2 className='intro__name'>Natalia</h2>
                    <h2 className='intro__surname'>Zarańska</h2>
            </div>
            <div className="hero__info">
                <p className='info-left'>Jestem przekonana, że masz w sobie potencjał, unikatowy zestaw zasobów, który raz odkryty pozwoli Tobie realizować wszystko, czego tylko zapragniesz.</p>
                <div className="info-shape">
                    <img src={Logo} alt="logo"/>
                </div>
                <p className='info-right'>Wiem, że Twoja budząca się świadomość doprowadzi Ciebie tam, gdzie podążasz. Spośród prawie 8 mld. ludzi na Ziemi jesteś niepowtarzalną istotą. Czego potrzebujesz, aby stać się tym, kim chcesz? Robić to co chcesz i myśleć jak chcesz?</p>
            </div>
            <div className="hero__question">
                <p className='question__text'>Czego potrzebujesz, aby stać się tym kim chcesz? <br></br> Robić to co chcesz i myśleć jak chcesz?</p>
            </div>
            <div className='hero__gallery'>
                <div className='gallery__header'>
                    <h3>Galeria</h3>
                </div>
                <div className="gallery__gallery-container">
                    <div className="gallery-container__photos">
                        <Gallery />
                    </div>
                </div>
            </div>
            <div className='hero__recemendations'>
                <div className='recomendations__header'>
                    <h3>Rekomendacje</h3>
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
