import React from 'react'
import ShapeRight from './../../assets/temp/shape-right.png'
import ShapeLeft from './../../assets/temp/shape-left.png'
import MobileShape1 from './../../assets/temp/mobile-shape1.png'
import MobileShape2 from './../../assets/temp/mobile-shape2.png'
import TEST from './TEST'
function Hero() {
    return (
        <div className='hero' >
            <img className='hero__shape-right' src={ShapeRight} alt='Zdjęcie Natalii Zarańskiej' />
            <img className='hero__shape-left' src={ShapeLeft} alt='Dekoracja na stronie' />
            <picture className="mobile-hero" >
                <source media="(max-width: 450px)" srcSet={MobileShape1} />
                <img src={MobileShape2} alt='Zdjęcie Natalii Zarańskiej'/>
            </picture>
            <h1 className="hero__mobile-logo">
                <div className="mobile-logo__first">BIURO</div>
                <div className="mobile-logo__second">PODRÓŻY</div>
            </h1>
            <div className='hero__intro'>
                    <h2 className='intro__name'>Natalia</h2>
                    <h2 className='intro__surname'>Zarańska</h2>
            </div>
            <div className="hero__info">
                <p className='info-left'>Jestem przekonana, że masz w sobie potencjał, unikatowy zestaw zasobów, który raz odkryty pozwoli Tobie realizować wszystko, czego tylko zapragniesz.</p>
                <div className="info-shape"></div>
                <p className='info-right'>Wiem, że Twoja budząca się świadomość doprowadzi Ciebie tam, gdzie podążasz. Spośród prawie 8 mld. ludzi na Ziemi jesteś niepowtarzalną istotą. Czego potrzebujesz, aby stać się tym, kim chcesz? Robić to co chcesz i myśleć jak chcesz?</p>
            </div>
            <div className='hero__gallery'>
                <h3 className="gallery__header">Galeria</h3>
                <div className="gallery__gallery-container">
                    <div className="gallery-container__photos">
                        <TEST />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
