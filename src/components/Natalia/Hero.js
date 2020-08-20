import React, { useEffect, useState, useRef} from 'react'
import ShapeRight from './../../assets/temp/shape-right.png'
import ShapeLeft from './../../assets/temp/shape-left.png'
import MobileShape1 from './../../assets/temp/mobile-shape1.png'
import MobileShape2 from './../../assets/temp/mobile-shape2.png'
function Hero() {
    useEffect(()=>{
        windowWidth < 767 ? setMarginLength(ref.current.clientHeight/0.92) : setWindowWidth(window.innerWidth)
    }, [])

    const [marginLength, setMarginLength] = useState('250px')
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const ref = useRef(null)
    useEffect(() => {
        const p = document.querySelector('.info__p')
        const img = document.querySelector('.mobile-hero')
        p.style.margin = `${marginLength}px 0 0 0`
        const handleResize = () => {
            setMarginLength(img.offsetHeight/1.2);
            windowWidth < 767 ? p.style.margin = '30px 0 0 0' : p.style.margin = `${marginLength}px 0 0 0`
        }
        window.addEventListener('resize', handleResize)
    }, [marginLength])
    return (
        <div className='hero' >
            <img className='hero__shape-right' src={ShapeRight} alt='Zdjęcie Natalii Zarańskiej' />
            <img className='hero__shape-left' src={ShapeLeft} alt='Dekoracja na stronie' />
            <picture className="mobile-hero" ref={ref}>
                <source media="(max-width: 450px)" srcSet={MobileShape1} />
                <img src={MobileShape2} />
            </picture>
            <h1 className="hero__mobile-logo">
                <div className="mobile-logo__first">BIURO</div>
                <div className="mobile-logo__second">PODRÓŻY</div>
            </h1>
            <div className='hero__info'>
                <div className='intro'>
                    <h2 className='intro__name'>Natalia</h2>
                    <h2 className='intro__surname'>Zarańska</h2>
                </div>
                <div className="info__p">
                    <p className='p-left'>Jestem przekonana, że masz w sobie potencjał, unikatowy zestaw zasobów, który raz odkryty pozwoli Tobie realizować wszystko, czego tylko zapragniesz.</p>
                    <div className="p-shape"></div>
                    <p className='p-right'>Wiem, że Twoja budząca się świadomość doprowadzi Ciebie tam, gdzie podążasz. Spośród prawie 8 mld. ludzi na Ziemi jesteś niepowtarzalną istotą. Czego potrzebujesz, aby stać się tym, kim chcesz? Robić to co chcesz i myśleć jak chcesz?</p>
                </div>
                </div>
        </div>
    )
}

export default Hero
