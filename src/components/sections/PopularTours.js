import React from 'react'
import { popularData } from './PopularData'

export const PopularTours = () => {
    return (
        <section className="popular__section">
            <div className="popular__container">
                <h1 className="popular__h1">Los tours mas populares</h1>

                <div className="popular__grid">

                    {popularData.map(card =>
                         <div className="popular__card">

                         <div className="popular__card__front">
                         <img src={card.image} alt="card-img"/>
                        </div>

                        <div className="popular__card__back">
                            
                            <span className="tour__card-icon">{card.icon}</span>
                            <h3 className="tour__card-h3">{card.title}</h3>
                            <p className="tour__card-p">{card.paragraph}</p>
                                
                        </div>
                        <div className="">
                            <span className="tour__card-icon">{card.icon}</span>
                            <h3 className="tour__card-h3">{card.title}</h3>
                            <p className="tour__card-p">{card.paragraph}</p></div>
                        </div>
                    )}
                   

                   
                    
                </div>
            </div>
        </section>
    )
}
