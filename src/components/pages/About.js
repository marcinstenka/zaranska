import React from 'react'
import TopBar from '../Nav/TopBar'

import AboutUp from './../../assets/temp/about-up.png'
import MobileAboutDown from './../../assets/temp/mobile-about-down.png'
import MobileAboutDecoration from './../../assets/temp/mobile-about-decoration.png'
import Arrow from './../../assets/temp/arrow.svg'
import BrainyLogo from './../../assets/temp/brainy.png'
import ForeverLogo from './../../assets/temp/forever.png'
function About() {
    return (
        <>
            <TopBar />
            <div className="about">
                <div className="about__about-section-first">
                    <h1 className='about-section-first__title'>O MNIE</h1>
                    <div className="about-section-first__container">
                        <div className="container__intro">
                            <h2 className='intro__header'>Cześć</h2>
                            <p className="intro__text"> Myślę, że zanim zaczniemy współpracę, chcesz się dowiedzieć kim jestem. W 2001r. zdobyłam tytuł mgr pedagogiki ze specjalizacją resocjalizacja i rozpoczęłam pracę jako przewodnik młodych ludzi w szkole. Był to czas niezwykły, kiedy mogłam rozwijać swoje pasje, współpracować, tworzyć projekty i zdobywać wykształcenie. Ukończyłam studia podyplomowe w zakresie doradztwa zawodowego, pomocy psychologicznej oraz psychologii pozytywnej. Mojej dzisiejszej drodze zawodowej kierunek wyznaczył coaching. Coachem zostałam w 2017r. </p>
                        </div>
                        <div className="container-description">
                            <p className='description__text'>Ten przełomowy moment sprawił, że połączyłam całą dotychczasową wiedzę, aby uczyć się od najlepszych i stworzyć przestrzeń, w której także Ty będziesz budzić swoją świadomość. Zostałam także facylitatorem Job Craftingu, gdyż wiem, jak ważne jest poczucie sensu i zaangażowania w miejscu pracy.</p>
                            <div className="description__img">
                                <img src={AboutUp} alt="Zdjęcie Natalii Zarańskiej"/>
                            </div>
                        </div>
                        <div className="container__dot"></div>
                    </div>
                </div>
                <div className="about__about-section-second">
                    <p className="about-section-second__mentor">Moimi mentorami są Paul Martinelli oraz Joe Dispenza. To od nich czerpię wiedzę, to oni nadają kierunek mojej pracy. Jestem trenerem, mówcą i coachem The John Maxwell Team, międzynarodowej firmy, wywodzącej się ze Stanów Zjednoczonych, obecnie największej organizacji szkolącej w zakresie przywództwa i komunikacji na świecie, posługującej się autorskimi programami opracowanymi przez dr Johna C. Maxwella. </p>
                    <div className="about-section-second__link">
                        <a href='//wp.pl'>Więcej o John Maxwell Team</a>
                        <img src={Arrow} alt="Ozdoba - strzałka"/>
                    </div>
                    <p className="about-section-second__header">Ponadto współpracuję jeszcze z dwoma innymi międzynarodowymi firmami:</p>
                    <div className="about-section-second__buisnesses">
                        <div className="buisnesses__buisness">
                            <div className="buisness__logo">
                                <img src={BrainyLogo} alt="Logo projektu Brainy" />

                            </div>
                            <h2 className="buisness__header">BRAINY</h2>
                            <p className="buisness__text">Brainy jest symbolem edukacji przyszłości. Pionierem, który napędza wiara w siłę genialnego umysłu dziecka. Innowatorem w zakresie wykorzystania siły ludzkiego mózgu. Jestem właścicielką  Akademii Brainy - Akademii Mistrzów Świata, wierzę bowiem, że  Lepszy Uczeń to Lepszy Człowiek i Lepszy Świat.</p>
                            <div className="buisness__link">
                                <a>więcej o Brainy</a>
                                <img src={Arrow} alt='Ozdoba - strzałka' />
                            </div>
                        </div>
                        <img src={MobileAboutDecoration} alt='Kształt dekoracyjny' className="buisness__decoration" />
                        <div className="buisnesses__buisness">
                            <div className="buisness__logo">
                                <img src={ForeverLogo} alt="Logo projektu Forever" />
                            </div>
                            <h2 className="buisness__header">FOREVER</h2>
                            <p className="buisness__text">Forever Living Products, która od 1978 roku angażuje się w wyszukiwanie najlepszych źródeł zdrowia i urody w naturze, by dzielić się nimi ze światem. Pasją firmy jest pomaganie innym by wyglądać i czuć się lepiej, Do Forever doprowadziły mnie moje wartości. Prowadząc swój zespół uczę jak być wolnym finansowo, żyć zdrowo i ekologicznie. </p>
                            <div className="buisness__link">
                                <a>więcej o Forever</a>
                                <img src={Arrow} alt='Ozdoba - strzałka' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about__about-section-third">
                    <p className="about-section-third__text-up">Widziałam i doświadczyłam niezwykłych przemian, widziałam jak dokonują się cuda. Jak niewiele potrzeba, aby człowiek odnalazł kierunek. Znalazł statek i odciął liny. Widziałam podróżników, którzy odważyli się marzyć i wyruszyli w rejs.</p>
                    <p className="about-section-third__text-down">Wszystko bowiem zaczyna się od wiary, znalezienia mapy, pierwszego kroku i obudzonej świadomości.</p>
                    <h2 className="about-section-third__header">JESTEŚ CIEKAWY/A?</h2>
                    <img className='about-section-third__img' src={MobileAboutDown} alt="Zdjęcie Natalii Zarańskiej z książką"/>
                </div>
            </div>
        </>
    )
}

export default About
