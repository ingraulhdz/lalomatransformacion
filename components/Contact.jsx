import React from 'react'

export const Contact = () => {
  return (



    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Contacto</h2>
          <p>Agradecemos infitamente tu interes en nuestro pueblo, tu apoyo y tu amor por La Loma. puedes mantenerte en contacto con la fundacion atravez de los distintos medios.</p>
        </div>

        <div class="row" data-aos="fade-up" data-aos-delay="100">

          <div class="col-lg-6">

            <div class="row">
              <div class="col-md-12">
                <div class="info-box">
                  <i class="bx bx-map"></i>
                  <h3>Direccion registrade de la fundacion </h3>
                  <p>1261 Adler LN, Carol Stream, Illinois 60188</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box mt-4">
                  <i class="bx bx-envelope"></i>
                  <h3>Email</h3>
                  <p>lalomatransformacion@gmail.com<br/>info@lalomamexico.com</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box mt-4">
                  <i class="bx bx-phone-call"></i>
                  <h3>Telefono</h3>
                  <p>+1 5589 55488 55<br/>+1 6678 254445 41</p>
                </div>
              </div>
            </div>

          </div>

          <div class="col-lg-6">
            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="row">
                <div class="col form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Nombre" required />
                </div>
                <div class="col form-group">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Email" required/>
                </div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Asunto" required/>
              </div>
              <div class="form-group">
                <textarea class="form-control" name="message" rows="5" placeholder="Mensaje" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>
<div class="map wow fadeInDown m-5" data-wow-duration=".8s" data-wow-delay=".5s">
  {/* map w100% h 450px */}
</div>
      </div>
    </section>
    

  )
}
