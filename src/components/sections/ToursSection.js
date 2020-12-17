import React from 'react'
import { cardData } from './CardData'
export const ToursSection = () => {
    return (
        <section className="tour__section" id="section-tours">
            <div className="tour__container">
                <h1 className="tour__h1">Tours</h1>
                <div className="tour__grid">
                    {cardData.map(card =>
                        
                    <div className="tour__card" style={{backgroundImage: `url(${card.image})`}}>
                        <span className="tour__card-icon">{card.icon}</span>
                        <h3 className="tour__card-h3">{card.title}</h3>
                        <p className="tour__card-p">{card.paragraph}</p>
                        <button><a href="#popup">Saber mas</a></button>
                    </div>
                    )}
                   
                </div>
            </div>
        </section>
    )
}
