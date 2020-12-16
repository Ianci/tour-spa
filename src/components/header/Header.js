import React from 'react'
import imgLogo from '../../images/logo-white.png'
export const Header = () => {
    return (
        <div className="header__main-div">
            <div className="header__logo-div">
                <img src={imgLogo} alt="logo" className="header__logo"/>
            </div>
            <div className="header__text-container">
                <h1 className="header__h1">
                    <span className="header__h1-main">Bariloche</span>
                    <span className="header__h1-sub">lo mejor de la patagonia Argentina</span>
                </h1>
                <button className="btn header__btn-main">Saber mas</button>
            </div>
        </div>
    )
}
