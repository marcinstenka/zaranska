import React from 'react'
import ShapeRight from './../../assets/temp/shape-right.png'
import ShapeLeft from './../../assets/temp/shape-left.png'
function Hero() {
    return (
        <div className='hero'>
            <img className='hero__shape-right' src={ShapeRight} alt='Zdjęcie Natalii Zarańskiej' />
            <img className='hero__shape-left' src={ShapeLeft} alt='Dekoracja na stronie' />
            <div className='hero__info'>
                <div className='intro'>
                    <h2 className='intro__name'>NATALIA</h2>
                    <h2 className='intro__surname'>ZARAŃSKA</h2>
                </div>
                <div className="info__p">
                    <p className='p-left'>Jestem przekonana, że ludzkie granice nie istnieją, a jedyne co nas ogranicza to brak dostatecznej wiedzy, do zdobycia umiejętności, które pozwolą nam je przekraczać.</p>
                    <p className='p-right'>Biuro Podróży powstało z myślą o tych, którzy pragną rozwoju osobistego. Bazując na swoim 20-letnim doświadczeniu, pragnę stworzyć miejsce, gdzie każdy będzie mógł, we własnym tempie, tworzyć swoje mapy życia, kierować się nimi na drodze i realizować marzenia.</p>
                </div>
                </div>
        </div>
    )
}

export default Hero
