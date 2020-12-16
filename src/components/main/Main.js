import React from 'react'
import { Header } from '../header/Header'
import { AboutSection } from '../sections/AboutSection'
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
            </main>
        </div>
    )
}
