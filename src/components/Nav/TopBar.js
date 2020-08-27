import React from 'react'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import Navbar from './Navbar'
import ScrollRestoration from './ScrollRestoration'

function TopBar() {
    return (
        <>
            <Logo />
            <MobileMenu />
            <Navbar />
            <ScrollRestoration />
        </>
    )
}

export default TopBar
