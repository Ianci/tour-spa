import React from 'react'
import brctest from '../../images/brctest.jpg'
import testimonio2 from '../../images/testimonio2.jpg'

export const StoriesSection = () => {
    return (
        <section className="stories__section">
          
                <h1 className="popular__h1">
                    Experiencias 
                </h1>
            <div className="stories__container">
                <figure className="stories__shape">
                    <img src={brctest} alt="testimonios" className="stories__img"/>
                </figure>
                <div className="stories__text">
                   
                        <p className="stories__exp">Fue una de las mejores excursiones. NECESARIA. Fuimos a puntos hermosos, siendo lo más maravilloso EL CERRO CAMPANARIO. ¡Visita obligada!. Dura aproximadamente 4 hs con las excursiones guiadas. Lo recomiendo!!!!</p>
                        <span className="stories__exp-name">Micaela</span>
                </div>
            </div>
            <div className="stories__separation-div"></div>
            <div className="stories__container">
                <figure className="stories__shape">
                    <img src={testimonio2} alt="testimonios" className="stories__img"/>
                </figure>
                <div className="stories__text">
                    <p className="stories__exp">Me encantó la guiada y fue muy dinámica. Muy bueno el contenido y el guía súper atento. Único detalle a tener en cuenta es que sí hay turistas que hablen en Inglés la guiada va a ser en Los dos idiomas</p>
                    <span className="stories__exp-name">Juan Pablo</span>
                </div>
            </div>
        </section>
    )
}
