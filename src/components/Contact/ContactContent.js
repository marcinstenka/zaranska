import React from 'react'
import ContactShape from '../../assets/temp/contact-shape2.png'
import MobileContactShape from '../../assets/temp/mobile-contact.png'
import SocialMediaBlog from '../../assets/temp/social-media-blog.png'
import SocialMediaFb from '../../assets/temp/social-media-fb.png'
function ContactContent() {
    return (
        <div className='contact-container'>
            <img className="contact-shape" src={ContactShape} alt='Dekoracja na stronie'/>
            <img className="mobile-contact-shape" src={MobileContactShape} alt='Dekoracja na stronie'/>
            <div className="contact" data-aos="zoom-in">
                <div className="contact__map"><iframe title='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2314.0103004250072!2d17.791033215884198!3d54.550943880249065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fdc2bf1b2b5b27%3A0x2f90741ed2c06d06!2sD%C5%82uga%2024%2C%2084-353!5e0!3m2!1spl!2spl!4v1601372090479!5m2!1spl!2spl" frameBorder={'0'}
        width={'100%'}
        height={'100%'} ></iframe></div>
                <div data-aos="fade-up" className="contact__info">
                    <h2 className="contact__info-title">KONTAKT</h2>
                    <p className="contact__info-p">Natalia Zarańska</p>
                    <p className="contact__info-shape"></p>
                    <p className="contact__info-p">zaranskanatalia@gmail.com</p>
                    <p className="contact__info-p">601 069 863</p>
                    <p className="contact__info-shape"></p>
                    <p className="contact__info-p">ul. Długa 24A</p>
                    <p className="contact__info-p">84-353 Lębork-Mosty</p>
                </div>
                <div data-aos='zoom-in' className="contact__social">
                    <a href='//podrozybiuro.blogspot.com/?fbclid=IwAR0zYG00ZnMp8Y4PCTQ9dVAdhpkuz0IwYzbzWQhfbs_o595ncUOD5ZohDG0'><img src={SocialMediaBlog} alt='Ikonka przekierowujące do bloga'/></a>
                    <a href='//www.facebook.com/BiuroPodrozyNZ'><img src={SocialMediaFb} alt='Ikonka przekierowująca do Facebooka'/></a>
                </div>
            </div>
        </div>
    )
}

export default ContactContent