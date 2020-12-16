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
    )
}
