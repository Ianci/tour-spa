import React from 'react'
import { Header } from '../header/Header'
import { AboutSection } from '../sections/AboutSection'
import { FooterSection } from '../sections/FooterSection'
import { FormSection } from '../sections/FormSection'
import { PopularTours } from '../sections/PopularTours'
import { StoriesSection } from '../sections/StoriesSection'
import { ToursSection } from '../sections/ToursSection'
import cardimage from '../../images/cardimage.jpg'
import brc from '../../images/brc.jpg'
export const Main = () => {
    return (
        <>
      
        <div>
            <header>
                <Header />
            </header>
            <main className="base__main">
                <AboutSection />
                <ToursSection />
                <PopularTours />
                <StoriesSection />
                <FormSection />
            </main>
            <footer>
                <FooterSection />
            </footer>
            <div className="popup" id="popup">
                <div className="popup__content">
                    <div className="popup__left">
                        <img src={cardimage} alt="tour" className="popup__img"/>
                        <img src={brc} alt="tour2" className="popup__img"/>
                    </div>
                    <div className="popup__right">
                        <a href="#section-tours" className="popup__close">X</a>
                    
                    <h1 className="popup__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cupiditate ipsum quasi veniam! Id, rem! Nisi illum aliquid placeat aliquam repellendus! Quidem ipsa quia adipisci, repudiandae ab fugit qui atque.</h1>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
