import React from 'react'

export const Plans = () => {
  return (



    <section id="mensualidades" className="pricing section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Mensualidades</h2>
          <p>Los proyectos  son  realizados en un 100% con donaciones, Unete a esta gran lista de gente que apoya el proyecto La Loma Transformacion</p>
        </div>
<h3>Planes sugeridos</h3>

        <div className="row">

          <div className="col-lg-3 col-md-6">
            <div className="box" data-aos="fade-up" data-aos-delay="100">
              <h3>JR</h3>
              <h4><sup>$</sup>10<span> / month</span></h4>
              <p>
              Creado para  personas  que sus ingresos por el momento no son muy altos.
              </p>
              <div className="btn-wrap">
                  <button className="btn btn-outline-primary">Unirse Ahora </button>
              </div>

              
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
            <div className="box featured" data-aos="fade-up" data-aos-delay="200">
              <h3>SR</h3>
              <h4><sup>$</sup>50<span> / month</span></h4>
              <p>Diseñado para personas  que cuentan con un estilo de vida mas estable que  no afecta sus gastos.  
              </p>
              <div className="btn-wrap">
                  <button className="btn btn-outline-light">Unirse Ahora</button>
              </div>




            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div className="box" data-aos="fade-up" data-aos-delay="300">
              <h3>BUSSINESS</h3>
              <h4><sup>$</sup>100<span> / month</span></h4>
              <p>Para aquellos dueños de negocio las donaciones se realizan directamente entre el
                negocio y la fundacion.</p>
              <div className="btn-wrap">
                  <button className="btn btn-outline-primary">Unirse Ahora</button>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div className="box featured" data-aos="fade-up" data-aos-delay="300">
              <h3>PERSONALISADO</h3>
              <h4> <span>  Mensualidad personalisada</span></h4>
                  <p>Puedes crear tu plan de mensualidades ingresando la cantidad que tu puedas donar mensualemnte </p>


              <div className="btn-wrap">
                <form action="https://www.paypal.com/donate" method="post" target="_top">
                  <input type="hidden" name="hosted_button_id" value="6F5ZGS37WK9F4" />
                  <button className="btn btn-outline-light">Crear Plan </button>
                </form>

              </div>
            </div>
          </div>
          
          </div>

      </div>
    </section>
    
  )
}
