import React, {useEffect}from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SRLWrapper } from 'simple-react-lightbox'
import SwiperCore, {Scrollbar} from 'swiper'
import 'swiper/swiper-bundle.css';

import Thumb1 from './../../assets/gallery/hero/thumb/1.jpg'
import Thumb2 from './../../assets/gallery/hero/thumb/2.jpg'
import Thumb3 from './../../assets/gallery/hero/thumb/3.jpg'
import Thumb4 from './../../assets/gallery/hero/thumb/4.jpg'
import Thumb5 from './../../assets/gallery/hero/thumb/5.jpg'
import Thumb6 from './../../assets/gallery/hero/thumb/6.jpg'
import Thumb7 from './../../assets/gallery/hero/thumb/7.jpg'
import Full1 from './../../assets/gallery/hero/full/1.jpg'
import Full2 from './../../assets/gallery/hero/full/2.jpg'
import Full3 from './../../assets/gallery/hero/full/3.jpg'
import Full4 from './../../assets/gallery/hero/full/4.jpg'
import Full5 from './../../assets/gallery/hero/full/5.jpg'
import Full6 from './../../assets/gallery/hero/full/6.jpg'
import Full7 from './../../assets/gallery/hero/full/7.jpg'
SwiperCore.use([Scrollbar]);



const Gallery = () => {
    useEffect(() => {
        const images = document.querySelectorAll('.swiper-slide');
        let i = 1000;
        images.forEach(image => {
            image.addEventListener('mouseover', () => {
                image.style.zIndex = ++i;

            })
            image.addEventListener('mouseout', () => {
                image.style.zIndex = i-1;
            })
        })
    })
    return(
        <>
        <SRLWrapper >
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                scrollbar={true}
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
                        slidesPerView:4
                    },
                    1675:{
                        slidesPerView:5
                    },
                    1950:{
                        slidesPerView:6
                    }
                }}
            >
                <SwiperSlide>
                    <a href={Full1} data-attribute="SRL">
                        <img src={Thumb1} alt="Warsztaty dla par Dzień Kobiet" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href={Full2} data-attribute="SRL">
                        <img src={Thumb2} alt='Musical "Szepty serc"' />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href={Full3} data-attribute="SRL">
                        <img src={Thumb3} alt="Osada Wiedzy" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href={Full4} data-attribute="SRL">
                        <img src={Thumb4} alt='Musical "Szepty serc"' />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href={Full5} data-attribute="SRL">
                        <img src={Thumb5} alt='Warsztaty dla kobiet "Dogonić czas"' />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href={Full6} data-attribute="SRL">
                        <img src={Thumb6} alt="Warsztaty Osada Wiedzy" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href={Full7} data-attribute="SRL">
                        <img src={Thumb7} alt="Kongres Praw Obywatelskich" />
                    </a>
                </SwiperSlide>
                <br></br>
            </Swiper>
        </SRLWrapper>
        </>
    )
}
export default Gallery;