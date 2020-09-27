import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {Scrollbar} from 'swiper'
import 'swiper/swiper-bundle.css';

SwiperCore.use([Scrollbar]);



const Gallery = () => {
    return(
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                scrollbar={true}
                freeMode={false}
                grabCursor={true}
                breakpoints={{
                    710:{
                        slidesPerView:2
                    },
                    970:{
                        slidesPerView:3
                    },
                    1050:{
                        slidesPerView:2
                    },
                    1180:{
                        slidesPerView:3
                    },
                    1415:{
                        slidesPerView:4
                        // freeMode: true
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
                    <div className="recomendation__container">
                        <div className="recomendation"><p>"Warsztaty z Natalią są bardzo emocjonujące, przeżyłam je bardzo mocno, do dziś nie potrafię się ogarnąć. Jestem osoba raczej nieufną, ale profesjonalizm Natalii i sposób jej dotarcia do mnie spowodował, że zupełnie się otworzyłam. Wypowiedziałam słowa, które długo dusiłam w sobie. W moim wnętrzu jest teraz dużo więcej pewności siebie, poczucia własnej wartości. Natalia pokazała mi jak ważne jest być dobrą dla siebie. Mam taką burze myśli w głowie, że nie potrafię tego opisać jeszcze w tej chwili. Myślę jednak, że warsztaty z Natalią miały pomóc nam znaleźć piękno w nas, w sercu. Miały nas przygotować do otwarcia się na zupełnie dla nas nowe doświadczenia. Miały nam pokazać, że jesteśmy silne, piękne i wartościowe w pełni pomimo trudnych doświadczeń, pomimo choroby i przykrych dla nas zdarzeń." </p></div>
                        <h6>Barbara Krawczyk</h6>
                        <p className='recomendation__subtitle'>uczestniczka warsztatów w ramach projektu „Wychodzę z cienia”</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="recomendation__container">
                        <div className="recomendation"><p>"Warsztaty to najważniejsza cześć projektu. Natalka to cudowna, cudowna osoba. Będąc z nią, fruniemy nad chodnikami, czujemy się dopieszczone, zadbane. Nie chodzi tutaj o ogolone nogi i fajny ciuch, ale o otulone ciepłym swetrem serducho i wykasowany mózg. Każda minuta z nią to lekcja na całe życie. Uwielbiam!!!" </p></div>
                        <h6>Sara Badziąg</h6>
                        <p className='recomendation__subtitle'>uczestniczka warsztatów w ramach projektu „Wychodzę z cienia”</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="recomendation__container">
                        <div className="recomendation"><p>„Przełomowe były warsztaty prowadzone przez Natalię, za które osobiście bardzo dziękuję. Podczas nich zamazała się bariera wiekowa, którą ja dostrzegałam. Mogłam się bardziej otworzyć. Potwierdziłam moje przypuszczenia o tym, że jestem kimś wyjątkowym. Natalia pomogła mi spojrzeć na siebie i całą sytuację z perspektywy kobiety, a nie tylko matki czy żony. Wisienką na torcie była przygotowana dla nas relaksacja, „odpłynęłam” (myślę, że nie tylko ja)." </p></div>
                        <h6>Barbara Barcz</h6>
                        <p className='recomendation__subtitle'>uczestniczka warsztatów w ramach projektu „Wychodzę z cienia”</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="recomendation__container">
                        <div className="recomendation"><p>„Dzięki Natalii urosły mi skrzydła, przekonałam się, że mogę i potrafię dokonać zmiany w swoim życiu i że ta zmiana dokonuje się przeze mnie i dzięki mnie. Natalia w tym procesie pozostała skromnie z boku, ale zdaję sobie sprawę, że to ona zadała mi pytania, na które znalazłam odpowiedź, to ona dała mi narzędzia do zmiany nawyków i przekonań”</p></div>
                        <h6>Iwona</h6>
                        <div className="recomendation__subtitle">live coaching</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="recomendation__container">
                        <div className="recomendation"><p>„Wspaniałe warsztaty w głąb ludzkiego ciała. Pełen profesjonalizm i wspaniały przekaz. Bardzo dziękuje."</p></div>
                        <h6>Anna Miłoszewska</h6>
                        <div className="recomendation__subtitle">uczestniczka warsztatów dla rodziców</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="recomendation__container">
                        <div className="recomendation"><p>„Dzisiaj byłam w podróży w poszukiwaniu własnych wartości oraz rozmowy z dorastającym dzieckiem!!! Naprawdę warto spotykać się z takimi przewodnikami jakim jest Pani Natalia. Wytłumaczy wskaże drogę i mam nadzieję że uda mi się choć w jakieś części zrealizować wskazówki. Dziękuję i Polecam!!!”</p></div>
                        <h6>Joanna Tarnowska</h6>
                        <div className="recomendation__subtitle">uczestniczka warsztatów dla rodziców</div>
                    </div>
                </SwiperSlide>
                <br></br>
            </Swiper>
        </>
    )
}
export default Gallery;