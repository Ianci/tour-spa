import React from 'react'
import logofooter1 from '../../images/logofooter.png'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
export const FooterSection = () => {
    return (
        <div className="footer__container">
            <div className="footer__box">
                <img src={logofooter1} alt="footer-logo" className="footer__box-logo"/>
            </div>
            <div className="footer__content-container">

            
                <div className="footer__content">
                    <div className="footer__content-div">
                        <p className="footer__content-div-p">Inicio</p>
                        <p className="footer__content-div-p">Sobre nosotros</p>
                        <p className="footer__content-div-p">Contáctanos</p>
                        <p className="footer__content-div-p">Términos y condiciones</p>
                    </div>
                    <div className="footer__content-div">
                        <span className="footer__content-div-icon"><AiFillFacebook /></span>
                        <span className="footer__content-div-icon"><AiOutlineTwitter /></span>
                        <span className="footer__content-div-icon"><AiFillInstagram /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
