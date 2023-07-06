import React from 'react'
import {Link} from 'react-router-dom'
import {HashLink as Scroll} from 'react-router-hash-link'
import Footer from './Section/Footer'
  
function PageWrapper(props) {

  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-light shadow rounded-bottom" id="mainNav">
       <div className="d-block d-lg-none bg-light fixed-top" id="goldPrice">
        <div className="container-fluid d-flex justify-content-center align-items-center text-light bg-secondary bg-opacity-75">
        <p className="m-0 p-0 text-light">FIXING</p>&nbsp;
          <p className="m-0 p-0 text-default">&euro;</p><p className="m-0 p-0 text-default prezzoG"></p>&nbsp;&nbsp;
          <p className="m-0 p-0 text-default arrow-gold"></p>&nbsp;
          <p className="m-0 p-0 text-default variazioneG"></p><span className="text-default">%</span>
        </div>
       </div>
            <div className="container" id="navbarGP">
                <Link className="navbar-brand" to="/">
                <p className="text-dark">il tuo logo</p>
                  {/* <img className="img-fluid l-size" src={Logo} alt="logo" /> */}
                </Link>
                <button className="navbar-toggler icon_menu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><Scroll className="nav-link text-dark text-opacity-75" to="/">Home</Scroll></li>
                        <li className="nav-item"><Scroll className="nav-link text-dark text-opacity-75" to="/azienda">Azienda</Scroll></li>
                        <li className="nav-item"><Scroll className="nav-link text-dark text-opacity-75" to="/prodotti">Prodotti</Scroll></li>
                        <li className="nav-item"><Link className="nav-link text-dark text-opacity-75" to="/collabora-con-noi">Collabora con noi</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark text-opacity-75" to="/contatti">Contatti</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        {props.children}
        <Footer/>
    </div>
  )

}

export default (PageWrapper)
