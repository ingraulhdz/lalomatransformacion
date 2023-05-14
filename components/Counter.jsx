import React from 'react'

export const Counter = () => {
  return (

    <section id="counts" className="counts">
      <div className="container" data-aos="fade-up">

        <div className="row">

          <div className="col-lg-3 col-md-6">
            <div className="count-box border border-primary">
              <i className="bi bi-people"></i>
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
              <p>Miembros</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box border border-primary">
              <i className="bi bi-journal-richtext"></i>
              <span data-purecounter-start="0" data-purecounter-end="5" data-purecounter-duration="1" className="purecounter"></span>
              <p>Proyectos</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box border border-primary">
<i className="bi bi-heart-fill"></i>              <span data-purecounter-start="0" data-purecounter-end="541" data-purecounter-duration="1" className="purecounter"></span>
              <p>Donaciones</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box border border-primary">
<i className="bi bi-calendar2-event"></i>              <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
              <p>Eventos</p>
            </div>
          </div>

        </div>

        
      </div>


      <div className="row mt-4 ml-2 mr-2 col-lg-8 offset-lg-2 col-md-12">
        <h3> Video Presentacion de la Fundacion</h3>
          <iframe width="100%" className="mt-4 border border-primary p-1" height="315" src="https://www.youtube.com/embed/1zugrokOwwg" title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
      </div>

    </section>

    )
}
