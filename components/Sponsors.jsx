import React from 'react'

export const Sponsors = () => {
  return (
    <section id="clients" className="clients">
    <div className="container" data-aos="zoom-in">

      <div className="clients-slider swiper">
        <h5> Principales patrocinadores</h5>
        <div className="swiper-wrapper align-items-center">
          <div className="swiper-slide"><img src="assets/img/clients/client-1.png" className="img-fluid" alt=""/></div>
          <div className="swiper-slide"><img src="assets/img/clients/client-2.png" className="img-fluid" alt=""/></div>
          <div className="swiper-slide"><img src="assets/img/clients/client-3.png" className="img-fluid" alt=""/></div>
          <div className="swiper-slide"><img src="assets/img/clients/client-4.png" className="img-fluid" alt=""/></div>

        </div>
        <div className="swiper-pagination"></div>
      </div>

    </div>
  </section>
  
    )
}
