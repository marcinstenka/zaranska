import React, {useEffect}from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {Scrollbar} from 'swiper'
import Test from './../../assets/temp/test.jpg'
import 'swiper/swiper-bundle.css';
SwiperCore.use([Scrollbar]);



const Gallery = () => {
    useEffect(() => {
        const images = document.querySelectorAll('.swiper-slide');
        let i = 1000;
        images.forEach(image => {
            image.addEventListener('mouseover', () => {
                image.style.zIndex = ++i;
                console.log(`wjechał i dał mu ${i}`)

            })
            image.addEventListener('mouseout', () => {
                image.style.zIndex = i-1;
                console.log(`wyjechałi zostawił ${i}`)
            })
        })
    })
    const slides = []
    for (let i=0; i<10; i++){
        slides.push(
            <SwiperSlide key={`slide-${i}`}>
                <img src={Test} alt={`slide-${i}`} />
            </SwiperSlide>
        )
    }
    return(
        <>
            <Swiper id='main'
                slidesPerView={1}
                scrollbar={true}
                freeMode={false}
                grabCursor={true}
                breakpoints={{
                    610:{
                        slidesPerView:2
                    },
                    840:{
                        slidesPerView:3
                    },
                    1050:{
                        slidesPerView:2
                    },
                    1160:{
                        slidesPerView:3
                    },
                    1415:{
                        slidesPerView:4,
                        freeMode: true
                    },
                    1675:{
                        slidesPerView:5
                    },
                    1950:{
                        slidesPerView:6
                    }
                }}
            >
                {slides}
                <br></br>
            </Swiper>
        </>
    )
}
export default Gallery;