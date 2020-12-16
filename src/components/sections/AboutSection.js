import React from 'react'
import img1 from '../../images/nat-1.jpg'
import img2 from '../../images/nat-2.jpg'
import img3 from '../../images/nat-3.jpg'
export const AboutSection = () => {
    return (
        <section className="about__section">
            <div className="about__container">
                <h2 className="about__h2">
                    Los mejores tours de la patagonia 
                </h2>
            

            <div className="about__grid">
                <div className="about__col-1">
                    <h3 className="about__heading">
                        Bariloche, el lugar que podes disfrutar los 365 días del año
                    </h3>
                    <p className="about__paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero qui iste maxime inventore illum architecto fugit? Sed assumenda labore unde incidunt hic ab autem exercitationem omnis. Nesciunt ab quisquam corrupti?
                    </p>
                    <h3 className="about__heading">
                    Reserva entre nuestra variedad de tours y actividades trekkings en los glaciares, avistamiento de ballenas y pingüinos y muchos paseos más para conocer lo mejor de Argentina.
                    </h3>
                    <p className="about__paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero qui iste maxime inventore illum architecto fugit? Sed assumenda labore unde incidunt hic ab autem exercitationem omnis. Nesciunt ab quisquam corrupti?
                    </p>
                    <button className="btn about__btn-learn-more">Saber mas →</button>


                </div>



                <div className="about__col-2">
                   <div className="about__composition">
                       <img src={img1} alt="p-1" className="about__composition-photo about__photo-1"/>
                       <img src={img2} alt="p-2" className="about__composition-photo about__photo-2"/>
                       <img src={img3} alt="p-3" className="about__composition-photo about__photo-3"/>
                    </div>
                </div>

                </div>
            </div>
        </section>
    )
}
