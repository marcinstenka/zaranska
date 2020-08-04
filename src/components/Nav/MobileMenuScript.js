import React, { useEffect } from 'react'

function MobileMenuScript() {
    useEffect(() => {
        const nav = document.querySelector('.mobile__menu');
        const hamburger = document.querySelector('.mobile__hamburger');
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            hamburger.classList.toggle('active');
        })
    })
    return null
}
export default MobileMenuScript
