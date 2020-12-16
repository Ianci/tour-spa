import React from 'react'

export const FormSection = () => {
    return (
        <section className="form__section">
            <div className="form__container">
                <div className="form__box">
                   <form className="form__box-form">
                       <h2 className="form__h2">Contactanos</h2>
                       <div className="form__group">
                           
                           <input type="text" id="name" className="form__group-input" placeholder="Nombre" required autoComplete="off"/>
                           <label htmlFor="name" className="form__group-label">Nombre</label>

                           <input type="email" id="email" className="form__group-input" placeholder="Email" required autoComplete="off"/>
                           <label htmlFor="email" className="form__group-label">Email</label>
                       
                           <input type="text" id="name" className="form__group-input" placeholder="Introduce tu mensaje aquí" required autoComplete="off"/>
                        
                        
                       <button type="submit" className="form__group-btn">Enviar</button>
                       </div>
                   </form>
                </div>
            </div>
        </section>
    )
}
