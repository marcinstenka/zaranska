import React from 'react'
import ContactShape from '../../assets/temp/contact-shape2.png'
import SocialMediaBlog from '../../assets/temp/social-media-blog.png'
import SocialMediaFb from '../../assets/temp/social-media-fb.png'
function ContactContent() {
    return (
        <div className='contact-container'>
            <img className="contact-shape" src={ContactShape} alt='Dekoracja na stronie'/>
            <div className="contact">
                <div className="contact__map"><iframe title='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2314.411412502009!2d17.748591415883947!3d54.54387268024744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fddd53e65ca03b%3A0x94ccc8576b453e8f!2sPlac%20Pokoju%209%2C%2084-351%20L%C4%99bork!5e0!3m2!1spl!2spl!4v1595932339897!5m2!1spl!2spl" frameBorder={'0'}
        width={'100%'}
        height={'100%'} ></iframe></div>
                <div className="contact__info">
                    <h2 className="contact__info-title">KONTAKT</h2>
                    <p className="contact__info-p">601 069 863</p>
                    <p className="contact__info-shape"></p>
                    <p className="contact__info-p">podrozybiuro@wp.pl</p>
                    <p className="contact__info-shape"></p>
                    <p className="contact__info-p">Plac Pokoju 9/4</p>
                    <p className="contact__info-p">84-300 Lębork</p>
                </div>
                <div className="contact__social">
                    <a href='//podrozybiuro.blogspot.com/?fbclid=IwAR0zYG00ZnMp8Y4PCTQ9dVAdhpkuz0IwYzbzWQhfbs_o595ncUOD5ZohDG0'><img src={SocialMediaBlog} alt='Ikonka przekierowujące do bloga'/></a>
                    <a href='//www.facebook.com/BiuroPodrozyNZ'><img src={SocialMediaFb} alt='Ikonka przekierowujące do Facebooka'/></a>
                </div>
            </div>
        </div>
    )
}

export default ContactContent