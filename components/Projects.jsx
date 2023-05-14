import React from 'react'

export const Projects = () => {
  return (




    <section id="proyectos" className="tabs">
      <div className="section-title">
        <h2>Proyectos</h2>
        <p>Ultimos proyectos realizados en La Loma</p>
      </div>
      <div className="container" data-aos="fade-up">
        <ul className="nav nav-tabs row d-flex">
          <li className="nav-item col-3">
            <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
              <i className="ri-gps-line"></i>
              <h4 className="d-none d-lg-block">Lienzo charro</h4>
            </a>
          </li>
          <li className="nav-item col-3">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
              <i className="ri-body-scan-line"></i>
              <h4 className="d-none d-lg-block">Escuela Primaria</h4>
            </a>
          </li>
          <li className="nav-item col-3">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
              <i className="ri-sun-line"></i>
              <h4 className="d-none d-lg-block">Iluminacion solar</h4>
            </a>
          </li>
          <li className="nav-item col-3">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
              <i className="ri-store-line"></i>
              <h4 className="d-none d-lg-block">Centro</h4>
            </a>
          </li>
        </ul>
    
        <div className="tab-content">
          <div className="tab-pane active show" id="tab-1">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0" data-aos="fade-up" data-aos-delay="100">
                <h3>Lienzo charro</h3>
                <p className="fst-italic">
                  Inversion 1.2 MDP
                </p>
                <ul>
                  <li><i className="ri-check-double-line"></i> Unica comunidad con lienzo charro propio </li>
                  <li><i className="ri-check-double-line"></i> Eventos de Charreria y Jaripeos </li>
                  <li><i className="ri-check-double-line"></i> Lienzo con medidas oficiliales</li>
               
                </ul>
                <p>A travez de la gestion de los amigs de a caballo de La Loma, se realizaron donaciones, eventos y rifas para recudar los recursos necesarios para construir la primer obra de la fundacion.
                </p>
                <p>
<a href="#" className="btn btn-outline-primary"><span>Leer mas </span> <i className="bx bx-chevron-right"></i></a>

                </p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center " data-aos="fade-up" data-aos-delay="200">
                <img src="assets/img/tabs-1.jpg" alt="" className="img-fluid border border-primary"/>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-2">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Escuela Primaria Nicolas Bravo</h3>
                <p>Se remodelo El exterior de la escuela Primaria 
                </p>
              
                <ul>
                        <li><i className="ri-check-double-line"></i> Nuevos vidrios</li>
                        <li><i className="ri-check-double-line"></i> Pintura banquetas y arboles</li>
                        <li><i className="ri-check-double-line"></i> Jardineria Interior </li>
                </ul>
                <p>descripcion proyecto
                </p>
                <a href="#" className="btn btn-outline-primary"><span>Leer mas </span> <i className="bx bx-chevron-right"></i></a>

              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/tabs-2.jpg" alt="" className="img-fluid border border-primary"/>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-3">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>iluminacion solar</h3>
              <p>Se iluminan las calles con lamparas solares
              </p>
              
              <ul>
                <li><i className="ri-check-double-line"></i> Se han instalado mas de 20 lamparas solares en el centro </li>
                <li><i className="ri-check-double-line"></i> Se instalan lamparas solares en calles donde los vecinos donan lamparas e instalacion</li>
                <li><i className="ri-check-double-line"></i> Las lamparas solares permiten tener iluminacion aun cuando la energia electrica falla.</li>
              </ul>
            
              <a href="#" className="btn btn-outline-primary"><span>Leer mas </span> <i className="bx bx-chevron-right"></i></a>

              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/tabs-3.jpg" alt="" className="img-fluid border border-primary"/>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-4">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Remodelacion centro</h3>
                <p>Constantemente se hacen trabajos de mantenimiento y remodelacion del centro
                </p>
                <ul>
                  <li><i className="ri-check-double-line"></i> Se han reabilitado las areas verdes </li>
                  <li><i className="ri-check-double-line"></i> Se rehabilitaron las jardineras</li>
                  <li><i className="ri-check-double-line"></i> Construccion de banquetas con pintura y topes para  garantizar al seguridad de los peatones.</li>
                </ul>
                <p>descripcion proyecto
                </p>
                <a href="#" className="btn btn-outline-primary"><span>Leer mas </span> <i className="bx bx-chevron-right"></i></a>

              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/tabs-4.jpg" alt="" className="img-fluid border border-primary"/>
              </div>
            </div>
          </div>
        </div>
    
      </div>
    </section>
    
 
      )
}
