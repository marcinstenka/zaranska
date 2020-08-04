import React, { useEffect } from 'react'

function MobileMenuScript() {
    useEffect(() => {
        const nav = document.querySelector('.mobile__menu');
        const hamburger = document.querySelector('.mobile__hamburger');
        hamburger.addEventListener('click', () => {
            nav.style.transform = 'translateX(0)';
        })
        const cross = document.querySelector('.menu__cross');
        cross.addEventListener('click', () => {
            nav.style.transform = 'translateX(100%)';
        })
    })
    return null
}
export default MobileMenuScript
