import React from 'react'

export const About = () => {
  return (


    <section id="about" className="about section-bg">
      <div className="container" data-aos="fade-up">

        <div className="row no-gutters">
          <div className="content col-xl-5 d-flex align-items-stretch">
            <div className="content">
              <h3>Bienvenidos</h3>
              <p>En el año 2020 un grupo de ciudadanos de la comunidad de La Loma, que radican en Estados Unidos crea una Fundacion con el 
                proposito de crear un mejor futuro y hacer una mejor hisotira para el desarrollo comunidad
              </p>
              <a href="fundation.html" className="about-btn"><span>Leer mas de la fundacion </span> <i className="bx bx-chevron-right"></i></a>
            </div>
          </div>
          <div className="col-xl-7 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">

              <div className="row">
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                  <i className="bx bx-receipt"></i>
                  <h4>Mision</h4>
                  <p>Diseño y ejecuccion de proyectos de calidad en pro de La Loma, realizados con donaciones, recaudacion de fondos atravez de eventos y 
                    un sistema de  recaudacion mensual asi como trabajo en conjunto con el Gobierno en turno, presentar proyectos, avances y rendicion de cuentas con 
                  total transparencia.</p>
                </div>
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
<i className="bi bi-bullseye"></i>
                  <h4>Vision</h4>
                  <p>En un plan de 10 años Cambiar el aspecto estetico y apoyar en mejorar la calidad de vida de los habitantes de La Loma,
                  promoviendo fuentes de trabajo e inversiones que ayuden a mejorar la calidad de vida de la comunidad,
                  sin comprometer la intgridaded da nuestra poblacion riqueza natural y cultural.</p>
                </div>
<hr/>

                
               
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
      )
}
