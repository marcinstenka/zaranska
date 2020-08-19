import React, { useEffect, useState, useRef} from 'react'
import ShapeRight from './../../assets/temp/shape-right.png'
import ShapeLeft from './../../assets/temp/shape-left.png'
import MobileShape from './../../assets/temp/mobile-shape.png'
function Hero() {
    useEffect(()=>{
        setMarginLength(ref.current.clientHeight/1.6)
    }, [])

    const [marginLength, setMarginLength] = useState('10')
    const ref = useRef(null)
    useEffect(() => {
        const p = document.querySelector('.info__p')
        const img = document.querySelector('.hero__shape-mobile')
        p.style.margin = `${marginLength}px 0 0 0`
        const handleResize = () => {
            setMarginLength(img.offsetHeight/1.6);
            p.style.margin = `${marginLength}px 0 0 0`
        }
        window.addEventListener('resize', handleResize)
    }, [marginLength])
    const mobileImgStyles = {
        backgroundImage: 'url(' + MobileShape + ')'
    };
    return (
        <div className='hero' >
            <img className='hero__shape-right' src={ShapeRight} alt='Zdjęcie Natalii Zarańskiej' />
            <img className='hero__shape-left' src={ShapeLeft} alt='Dekoracja na stronie' />
            <div style={mobileImgStyles} className='hero__shape-mobile' ref={ref}></div>
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
