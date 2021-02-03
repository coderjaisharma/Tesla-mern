import React from 'react'
import './Header.css'
import TeslaLogo from '../assets/teslaLogoSmall.svg'
const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={TeslaLogo} alt="Tesla Logo"/>
            </div>
            <div className="header__center">
                <p>model s</p>
                <p>model x</p>
                <p>model panel</p>
                <p>model solar roof</p>
            </div>
            <div className="header__right">
                <p>shop</p>
                <p>tesla account</p>
            </div>
        </div>
    )
}

export default Header
