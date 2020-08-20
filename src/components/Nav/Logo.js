import React from 'react'
function Logo() {
    return (
        <div className='top-bar'>
            <h1 className='top-bar__logo'>BIURO PODRÓŻY</h1>
            <div className='top-bar__mobile'>
                <input type="checkbox" className='mobile__checkbox' />
                <div className="mobile__hamburger">
                    <div className="hamburger__line hamburger__line-top"></div>
                    <div className="hamburger__line hamburger__line-mid"></div>
                    <div className="hamburger__line hamburger__line-bottom"></div>
                </div>
            </div>
        </div>
    )
}

export default Logo
