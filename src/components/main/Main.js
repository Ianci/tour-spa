import React from 'react'
import { Header } from '../header/Header'
import { AboutSection } from '../sections/AboutSection'
import { FooterSection } from '../sections/FooterSection'
import { FormSection } from '../sections/FormSection'
import { PopularTours } from '../sections/PopularTours'
import { StoriesSection } from '../sections/StoriesSection'
import { ToursSection } from '../sections/ToursSection'


export const Main = () => {
    return (
        <>
        <div className="navigation">
            <input type="checkbox" id="navi-toggle" className="navigation__check"/>
            <label htmlFor="navi-toggle" className="navigation__label">MENU</label>
        
            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item">Inicio</li>
                    <li className="navigation__item">Tours</li>
                    <li className="navigation__item">Tours mas populares</li>
                    <li className="navigation__item">Experiencias</li>
                    <li className="navigation__item">Contáctanos</li>
                </ul>
            </nav>
        </div>
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
        </div>
        </>
    )
}
