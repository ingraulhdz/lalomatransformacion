import React from 'react'

export const Header = () => {
  return (

    <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center">
      <h1 className="logo me-auto"><a href="index.html"><img src="assets/img/logo-2.svg" width="120px"/></a></h1>
    
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">Acerca de</a></li>
          <li><a className="nav-link scrollto" href="#services">La Loma</a></li>
          <li><a className="nav-link scrollto " href="#portfolio">Galeria</a></li>
          <li><a className="nav-link scrollto" href="#proyectos">Proyectos</a></li>
          <li><a className="nav-link scrollto" href="#mensualidades">Mensualidades</a></li>
        
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          <li><a className="nav-link scrollto " href="login.html">Iniciar Sesion</a></li>
          <li><a className="nav-link scrollto " href="#"></a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>





    </div>
  </header>

)
}
