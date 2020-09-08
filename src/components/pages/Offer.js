import React from 'react'
import TopBar from '../Nav/TopBar'
import Logo1 from './../../assets/temp/offer-logo1.png'
import Logo2 from './../../assets/temp/offer-logo2.png'
import Logo3 from './../../assets/temp/offer-logo3.png'
import Logo4 from './../../assets/temp/offer-logo4.png'
import Logo5 from './../../assets/temp/offer-logo5.png'
import OfferShape1Section1 from './../../assets/temp/offer-shape1-section1.png'
import OfferShape1Section2 from './../../assets/temp/offer-shape1-section2.png'
import OfferShape1Section3 from './../../assets/temp/offer-shape1-section3.png'
import OfferShape2Section3 from './../../assets/temp/offer-shape2-section3.png'
import OfferShape1Section4 from './../../assets/temp/offer-shape1-section4.png'
import OfferShape2Section4 from './../../assets/temp/offer-shape2-section4.png'
import OfferShape1Section5 from './../../assets/temp/offer-shape1-section5.png'

import MobileOfferShape1Section1 from './../../assets/temp/mobile-offer-shape1-section1.png'
import MobileOfferShape2Section1 from './../../assets/temp/mobile-offer-shape2-section1.png'
import MobileOfferShape1Section2 from './../../assets/temp/mobile-offer-shape1-section2.png'
import MobileOfferShape2Section2 from './../../assets/temp/mobile-offer-shape2-section2.png'
import MobileOfferShape1Section3 from './../../assets/temp/mobile-offer-shape1-section3.png'
import MobileOfferShape2Section3 from './../../assets/temp/mobile-offer-shape2-section3.png'
import MobileOfferShape1Section4 from './../../assets/temp/mobile-offer-shape1-section4.png'
import MobileOfferShape1Section5 from './../../assets/temp/mobile-offer-shape1-section5.png'
import ProjectLogo1 from './../../assets/temp/offer-project-logo1.png'
import ProjectLogo2 from './../../assets/temp/offer-project-logo2.png'
import ProjectLogo3 from './../../assets/temp/offer-project-logo3.png'
import ProjectLogo4 from './../../assets/temp/offer-project-logo4.png'

function Offer() {
    return (
        <>
            <TopBar />
            <div className="offer">
                <div className="offer__interval interval-one"></div>

                <div className="offer__offer-section offer-section-one">
                    <img className='offer-section__one-mobile-img1 mobile-img' src={MobileOfferShape1Section1} alt="Ozdobny kształt"/>
                    <img className='offer-section__one-mobile-img2 mobile-img' src={MobileOfferShape2Section1} alt="Ozdobny kształt"/>
                    <img className='offer-section__one-img' src={OfferShape1Section1} alt="Ozdobny kształt"/>
                    <h1 className="offer-section__header">LIVE COACHING</h1>
                    <div data-aos="fade-down" className="offer-section__logo">
                        <img src={Logo1} alt="Ozdobne logo"/>
                    </div>
                    <div className="offer-section__p-one">
                        <p data-aos="fade-left" className="p-one__header">Jest formą rozwoju osobistego.</p>
                        <p data-aos="fade-left" className="p-one__text">Podczas sesji rozwijasz te sfery życia, którymi chcesz się zająć, określasz cele i sposoby realizacji. Form cochingu może być wiele. To Ty ustalasz czym chcesz się zająć, a ja towarzyszę Tobie w tej podróży.</p>
                    </div>
                    <p data-aos="fade-right" className="offer-section__p-two">Podczas sesji będziemy sami/same. <br></br> Dostosuję się do Ciebie i będę uważnie dotrzymywać Tobie kroku. <br></br>  Wykorzystam zarówno znane i powszechnie stosowane metody <br></br> coachingowe, jak i własne, wypracowane osobistym doświadczeniem. </p>
                    <div className="offer-section__dot"></div>
                    <p data-aos="fade-right" className="offer-section__p-three">Na pierwszym spotkaniu poznam Twoje potrzeby i możliwości. <br></br> Sprawdzimy czy chcemy ze sobą współpracować. <br></br> To spotkanie będzie niezobowiązujące. <br></br> To Ty podejmiesz decyzję, czy chcesz ze mną współpracować. </p>
                    <div data-aos="fade-left" className="offer-section__p-four">
                        <p className="p-four__header">Dla kogo coaching? </p>
                        <p className="p-four__text">Dla wszystkich, którzy chcą świadomie wpływać na swoje życie, dla tych, którzy chcą się rozwijać i potrzebują zmiany, dla tych, którzy poszukują siebie.</p>
                    </div>
                </div>
                <div className="offer__interval"></div>
                <div className="offer__offer-section offer-section-two">
                    <img className='offer-section__two-mobile-img1 mobile-img' src={MobileOfferShape1Section2} alt="Ozdobny kształt"/>
                    <img className='offer-section__two-mobile-img2 mobile-img' src={MobileOfferShape2Section2} alt="Ozdobny kształt"/>
                    <img className='offer-section__two-img1 ' src={OfferShape1Section2} alt="Ozdobny kształt"/>
                    <h1 className="offer-section__header">COACHING BIZNESOWY</h1>
                    <div data-aos="fade-right" className="offer-section__logo">
                        <img src={Logo2} alt="Ozdobne logo"/>
                    </div>
                    <div data-aos="fade-right" className="offer-section__p-one">
                        <p className="p-one__header">To odmiana coachingu wspierająca organizacje w rozwoju.</p>
                        <p className="p-one__text">Wspiera przedsiębiorców/pracowników w pracy nad celami <br></br> i wartościami firmy. Dzięki sprawdzonym narzędziom <br></br> coachingowym, wdrażanym w organizacje jako podstawowe <br></br> i kluczowe narzędzie do wspierania pracy <br></br> nad celami i dążeniami firmy, uzyskujemy efekt świetnie <br></br> zarządzanym czasem i zasobami przedsiębiorstwa przy <br></br> ograniczonych nakładach finansowych.</p>
                    </div>
                    <div className="offer-section__dot"></div>
                    <p data-aos="fade-left" className="offer-section__p-two">Jeśli chodzi o przykłady obszarów zastosowań coachingu biznesowego, staje się on skutecznym narzędziem w przypadku gdy mamy do czynienia z: brakiem wystarczających umiejętności przywódczych oraz interpersonalnych, niepowodzeniem w tworzeniu zespołu,  problemami z morale pracowników w organizacji, tak by odpowiadały one oczekiwaniom organizacji i utrzymaniu zaangażowania pracowników, wsparciem procesu wprowadzania zmian i zarządzania zmianami w organizacji, wyznaczaniem celów i osiąganiem sukcesów, wyborem i rozwijaniem kariery zawodowej, radzeniem sobie ze stresem i zapobieganie wypaleniu zawodowemu,  doskonaleniem umiejętności przywódczych, podejmowaniem nowych wyzwań (osobistych i zawodowych), uwalnianiem się od ograniczeń,  automotywowaniem i motywowaniem innych itd.</p>
                    <div data-aos="fade-up" className="offer-section__p-three">
                        <p className="p-three__header">W coachingu bizsnesowym to właściciele firm ustalają cel procesowy pracowników. </p>
                    </div>
                </div>
                <div className="offer__interval interval-two"></div>
                <div className="offer__offer-section offer-section-three">
                    <img className='offer-section__three-mobile-img1 mobile-img' src={MobileOfferShape1Section3} alt="Ozdobny kształt"/>
                    <img className='offer-section__three-mobile-img2 mobile-img' src={MobileOfferShape2Section3} alt="Ozdobny kształt"/>
                    <img className='offer-section__three-img1' src={OfferShape1Section3} alt="Ozdobny kształt"/>
                    <h1 className="offer-section__header">WARSZTATY JOB CRAFTING</h1>
                    <div data-aos="fade-left" className="offer-section__logo">
                        <img src={Logo3} alt="Ozdobne logo"/>
                    </div>
                    <p className="offer-section__p-one">
                        <p data-aos="fade-right" className="p-one__text">Wychodząc naprzeciw dynamicznej sytuacji na rynku pracy, <br></br> trudnościom z tym związanych zapraszam na warsztaty <br></br> Job Crafting czyli</p>
                        <p data-aos="fade-left" className="p-one__header">nowe metody budowania <br></br> zaangażowania <br></br> i poczucia sensu pracy.</p>
                    </p>
                    <p data-aos="fade-right" className="offer-section__p-two">Job crafting jest strategią, wyłaniającą stan faktyczny - co jest i co mogłoby być, nie skupia się na tym co jest złe i procesem łączenia pracy z tożsamością osobową - to kim jesteś, faktycznie ma znaczenie, kiedy jesteś w pracy. Job crafting generuje zmiany w znaczeniu samej pracy, jak też jej tożsamości, a także odmienia znaczenie samego pojęcia "praca" poprzez przesunięcia w poszczególnych zadaniach lub powiązaniach, na drodze zmian, które pozwalają pracownikowi na przekierowanie celu pracy oraz zmienienie sposobu jej odbierania. Psychologiczny sens pracy wyłania się, kiedy ludzie czują, że jest ona warta ich wysiłku. Wykorzystywanie w pracy swoich mocnych stron i działanie zgodnie z wartościami, wzmacnia poczucie własnej skuteczności i pozwala widzieć sens w swoich działaniach.</p>
                    <div data-aos="fade-left" className="offer-section__list">
                        <p>Korzyści płynące z job craftingu:</p>
                        <ul>
                            <li>wzrost satysfakcji</li>
                            <li>wzrost zaangażowania</li>
                            <li>wzrost zaangażowania</li>
                            <li>lepsze radzenie sobie ze zmianami</li>
                            <li>spostrzeganie większego sensu pracy</li>
                            <li>wzrost efektywności</li>
                        </ul>
                    </div>
                    <div  className="offer-section__p-three">
                        <img className='offer-section__three-img2' src={OfferShape2Section3} alt="Ozdobny kształt"/>
                        <p data-aos="fade-up">Warsztaty kierowane są do firm, instytucji, które kierują się <br></br> odpowiedzialnością za swoich pracowników i dbając o zrównoważony <br></br> rozwój, dbają o człowieka, aby jego praca przynosiła mu zadowolenie <br></br> i satysfakcję a także była zgodna z jego systemem wartości.</p>
                    </div>
                </div>
                <div className="offer__interval interval-three"></div>
                <div className="offer__offer-section offer-section-four">
                    <img className='offer-section__four-mobile-img1 mobile-img' src={MobileOfferShape1Section4} alt="Ozdobny kształt"/>
                    <img className='offer-section__four-img1' src={OfferShape1Section4} alt="Ozdobny kształt"/>
                    <img className='offer-section__four-img2' src={OfferShape2Section4} alt="Ozdobny kształt"/>
                    <h1 className="offer-section__header">WARSZTATY "SZCZĘŚLIWE RODZICIELSTWO"</h1>
                    <div data-aos="fade-right" className="offer-section__logo">
                        <img src={Logo4} alt="Ozdobne logo"/>
                    </div>
                    <div data-aos="fade-down" className="offer-section__p-one">
                        <p className="p-one__header">WARSZTATY DLA RODZICÓW</p>
                    </div>
                    <div data-aos="fade-left" className="offer-section__list">
                        <p>Cele:</p>
                        <ul>
                            <li>wartość własna  i pewność siebie u dzieci,</li>
                            <li>pewność siebie jako ogólny koncept, stanowiący podstawę w świadomym rodzicielstwie,</li>
                            <li>komunikacja interpersonalna w rodzinie,</li>
                            <li>znaczenie emocji członków rodziny, których zrozumienie prowadzi do lepszej komunikacji,</li>
                            <li>przekonania dotyczące idealnego rodzicielstwa, które nie istnieje,</li>
                            <li>praca nad pozytywnym budowaniem relacji w rodzinie,</li>
                            <li>tworzenie rodzinnych gier planszowych,</li>
                            <li>praca nad znaczeniem akceptacji i wiary w dziecko,</li>
                            <li>stworzenie przestrzeni wymiany doświadczeń, wzajemnego wsparcia w oparciu o zaufanie.</li>
                        </ul>
                    </div>
                    <div className="offer-section__dot"></div>
                    <p data-aos="fade-up" className="offer-section__p-two">Kurs zakłada 9 spotkań, każde trwające trzy godziny.</p>
                    <div data-aos="fade-up" className="offer-section__p-three">
                        <p className="p-three__header">Spotkania będą prowadzone warsztatowo, aby każdy świadomy rodzic mógł w praktyce doświadczać pozyskiwaną wiedzę. </p>
                    </div>
                </div>
                <div className="offer__interval interval-four"></div>
                <div className="offer__offer-section offer-section-five">
                    <img className='offer-section__five-mobile-img1 mobile-img' src={MobileOfferShape1Section5} alt="Ozdobny kształt"/>
                    <img className='offer-section__five-img1' src={OfferShape1Section5} alt="Ozdobny kształt"/>
                    <h1 className="offer-section__header">WARSZTATY "W POSZUKIWANIU PEWNOŚCI SIEBIE"</h1>
                    <div data-aos="fade-left" className="offer-section__logo">
                        <img src={Logo5} alt="Ozdobne logo"/>
                    </div>
                    <div data-aos="fade-down" className="offer-section__p-one">
                        <p className="p-one__header">WARSZTATY DLA MŁODZIEŻY 14+</p>
                    </div>
                    <div data-aos="fade-right" className="offer-section__list">
                        <p>Cele:</p>
                        <ul>
                            <li>kształtowanie poczucia własnej wartości,</li>
                            <li>pewności siebie, odpowiedzialności za własne decyzje,</li>
                            <li>umiejętności odmawiania, radzenia sobie z trudnymi sytuacjami <br></br> w szkole i grupie rówieśniczej,</li>
                            <li>poprawa komunikacji w relacjach z najbliższymi,</li>
                            <li>kształtowanie postaw sprzyjających rozwijaniu własnego potencjału,</li>
                            <li>stworzenie konstruktywnego i stabilnego systemu wartości,</li>
                            <li>rozbudzanie wiary we własne siły i możliwości.</li>
                        </ul>
                    </div>
                    <p data-aos="fade-up" className="offer-section__p-two">Warsztaty będą odbywały się co dwa tygodnie przez 7 miesięcy. Czas trwania jednego spotkania  3 godziny. Liczebność grupy 8-10 osób.</p>
                </div>
                <div className="offer__projects">
                    <a href="" className="projects__project"><img src={ProjectLogo1} alt="Logo projektu Brainy"/></a>
                    <a href="//osadawiedzy.pl" className="projects__project"><img src={ProjectLogo2} alt="Logo projektu Osada Wiedzy"/></a>
                    <a href="" className="projects__project"><img src={ProjectLogo3} alt="Logo projektu Still Up"/></a>
                    <a href="" className="projects__project"><img src={ProjectLogo4} alt="Logo projektu Wild Women"/></a>
                </div>
            </div>
        </>
    )
}

export default Offer
