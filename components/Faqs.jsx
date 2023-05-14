import React from 'react'

export const Faqs = () => {
  return (


    <section id="faq" className="faq">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Preguntas y respuestas</h2>
        </div>

        <ul className="faq-list accordion" data-aos="fade-up">

          <li>
            <a data-bs-toggle="collapse" className="collapsed" data-bs-target="#faq1">Es seguro ? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-x icon-close"></i></a>
            <div id="faq1" className="collapse" data-bs-parent=".faq-list">
              <p>Para evitar fraudes y mal uso de tu informacion, los pagos son realizados usando la API de Paypal la cual proove la seguridad necesaria para realizar transacciones
              </p>
            </div>
          </li>

          <li>
            <a data-bs-toggle="collapse" data-bs-target="#faq2" className="collapsed">Puedo cancelar? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-x icon-close"></i></a>
            <div id="faq2" className="collapse" data-bs-parent=".faq-list">
              <p>Seria muy triste que cancelaras, pero si puedes cancelar en cualquier momento si asi lo deseas.
              </p>
            </div>
          </li>

          <li>
            <a data-bs-toggle="collapse" data-bs-target="#faq3" className="collapsed">
              Como se que se hace con el dinero? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-x icon-close"></i></a>
            <div id="faq3" className="collapse" data-bs-parent=".faq-list">
              <p>Para generar confianza y transparencia la Fundacion invirtio en un sistema web al cual tendras acceso una vez que estes regisrado se te proveera un usuario y contraseña, con este puedes monitorear todos los proyectos realizados, avances  que se hace y donde se invierte el dinero.

              </p>
            </div>
          </li>

          <li>
            <a data-bs-toggle="collapse" data-bs-target="#faq4" className="collapsed">Como puedo deducir? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-x icon-close"></i></a>
            <div id="faq4" className="collapse" data-bs-parent=".faq-list">
              <p>
                Se te enviara un recibo de tu aportacion mensual y tus aportaciones anuales a nombre de la fundacion, con este tu contador te podra ayudar a deducir de tus impuestos anuales. 
              </p>
            </div>
          </li>

          <li>
            <a data-bs-toggle="collapse" data-bs-target="#faq5" className="collapsed">Puedo modificar la cantidad? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-x icon-close"></i></a>
            <div id="faq5" className="collapse" data-bs-parent=".faq-list">
              <p>Si, puedes modificar tu donacion mensual en cualquier momento las cantidades de planes son solo sugeridas.
              </p>
            </div>
          </li>

         

        </ul>

      </div>
    </section>
    


  )
}
