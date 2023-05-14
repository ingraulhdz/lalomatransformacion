import React from 'react';

const Footer = () => (
 

  <footer id="footer">

    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>Fundacion La Loma Mexico 2020-30 NFP<span>.</span></h3>
            <p>
              1261 Adler LN,<br/> Carol Stream, <br/>Illinois <br/> Estados Unidos 60188 <br/>
         
              <strong>Phone:</strong> +1 5589 55488 55<br/>
              <strong>Email:</strong> lalomatransformacion@gmail.com<br/>
            </p>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
         <img src="assets/img/logo.png" width="100px"/>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Informacion</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Fundacion La Loma Mexico NFP</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Santa Maria La Loma, Mexico</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Acambay, Mexico</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
        
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Unete a nuestro boletin informativo </h4>
            <p>Recibe en tu correo reportes mensuales de lo que se esta realizando en La Loma</p>
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </form>
          </div>

        </div>
      </div>
    </div>

    <div className="container d-md-flex py-4">

      <div className="me-md-auto text-center text-md-start">
        <div className="copyright">
          &copy; Copyright <strong><span>La Loma Mexico</span></strong>. Todos los derechos reservados
        </div>
        <div className="credits">

      
          Designed by <a href="https://ber-it.com/">Ber-it</a>
        </div>
      </div>
      <div className="social-links text-center text-md-end pt-3 pt-md-0">
       Redes sociales
        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
        <a href="#" className="google-plus"><i className="bx bxl-whatsapp"></i></a>

      </div>
    </div>
  </footer>
  




);

export default Footer;
