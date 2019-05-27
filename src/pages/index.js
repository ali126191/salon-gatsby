import React from "react"
import Helmet from 'react-helmet'
import SEO from "../components/seo"
import './../style.sass'
import img1 from './images/rez-img-17.jpg';
import img8 from './images/rez-img-18.jpg';
import img7 from './images/rez-img-19.jpg';
import img5 from './images/rez-img-20.jpg';
import img4 from './images/rez-img-21.jpg';
import img9 from './images/rez-img-22.jpg';
import croppedLogo from "./images/croppedAgain.png"

const IndexPage = () => (
    <>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `purple hair salon`, `purple hair salon calgary`, `salon in calgary`, `calgary salon`]} />
        <Helmet>
            <meta charset="UTF-8"/>
            <meta name="descirption" content="Hair salon website"></meta>
            <title>Purple Hair in Calgary Alberta</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <meta name="keywords" content="hair salon, cutting hair, barber, hair cut"></meta> 
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Sacramento" rel="stylesheet"/>
            <link rel="stylesheet" href="style.css"/>
        </Helmet>
            <header className="header">
                <nav className="nav">
                    <ul className="nav__ul">
                        <li className="nav__li"><img className="img croppedLogo" src={croppedLogo} alt="logo of purple hair"/></li>
                        <span className="nav--right">
                            <li className="nav__li"><a className="nav__a" href="#services">Services</a></li>
                            <li className="nav__li"><a className="nav__a" href="#portfolio">Portfolio</a></li>
                            <li className="nav__li"><a className="nav__a" href="#contact">Contact</a></li>
                        </span>
                    </ul>
                </nav>
            </header>
            <main>
              <div className="hero">
                  <h1 className="h1">Let your hair shine!</h1>
              </div>
              <div className="container">
                <div className="statement">
                      <h2 className="h2">Purple Hair is a salon of creators, educators, learners and enthusiasts</h2>
                  </div>

                <section className="section" id="services">
                  <h3 className="h3 h3__standard">Services</h3>
                  <div className="services">
                    <div className="service__chunk">
                          <h6 className="h6">Cuts &amp; Styles</h6>
                          <p className="services__p">Women Hair Cut<span className="services__cost">32</span></p>               
                          <p className="services__p">Womens Cut &amp; Blow Dry<span className="services__cost">39</span></p>
                          <p className="services__p">Mens Hair Cut<span className="services__cost">26</span></p>
                          <p className="services__p">Children (Under 13) Hair Cut<span className="services__cost">15</span></p>
                          <p className="services__p">Bangs Trim<span className="services__cost">7</span></p>
                      </div>
                      <div className="service__chunk">
                          <h6 className="h6">Colour</h6>
                          <p className="services__p">Colour (up to) <span className="services__cost">68</span></p>               
                          <p className="services__p">Colour &amp; Cut (up to) <span className="services__cost">80</span></p>
                          <p className="services__p">Colour, Cut &amp; Style (up to) <span className="services__cost">90</span></p>
                          <p className="services__p">Toner<span className="services__cost">25</span></p>
                      </div>   
                      <div className="service__chunk">
                          <h6 className="h6">Highlight</h6>
                          <p className="services__p">Hightlight <span className="services__cost">75</span></p>               
                          <p className="services__p">Hightlight &amp; Colour <span className="services__cost">95</span></p>
                          <p className="services__p">Hightlight, Cut, &amp; Colour <span className="services__cost">125</span></p>
                          <p className="services__p">Hightlight, Cut, Color &amp; Style <span className="services__cost">145</span></p>
                      </div>
                      <div className="service__chunk">
                          <h6 className="h6">Other Services</h6>
                          <p className="services__p">Perm (up to) <span className="services__cost">65</span></p>               
                          <p className="services__p">Perm &amp; Cut (up to) <span className="services__cost">95</span></p>
                          <p className="services__p">Eyebrow Wax<span className="services__cost">12</span></p>
                          <p className="services__p">Lip Wax<span className="services__cost">8</span></p>
                          <p className="services__p">Chin Wax<span className="services__cost">8</span></p>
                          <p className="services__p">Hair Extensions &amp; Other Services</p>
                      </div>
                      <div className="service__chunk">
                          <h6 className="h6">Treatments</h6>
                          <p className="services__p">We offer a wide selection of treatments, including moisturizing, repairing, and scalp repair</p>               
                      </div>
                  </div>
                </section>
             
                <section className="gallery section" id="portfolio">
                    <h3 className="h3 h3--blue">Portfolio</h3>
                    <div className="gallery__images">
                          <div className="img__wrapper">
                              <img className="img gallery__img gallery--bottom" src={img1} alt="Image text"/>             
                          </div>
                          <div className="img__wrapper">
                              <img className="img gallery__img gallery--bottom" src={img4} alt="Image text"/>             
                          </div>
                          <div className="img__wrapper">
                              <img className="img gallery__img gallery--bottom" src={img7} alt="Image text"/>             
                          </div>
                          <div className="img__wrapper">
                              <img className="img gallery__img" src={img8} alt="Image text"/>             
                          </div>
                          <div className="img__wrapper">
                              <img className="img gallery__img" src={img9} alt="Image text"/>             
                          </div>
                          <div className="img__wrapper">
                              <img className="img gallery__img" src={img5} alt="Image text"/>             
                          </div>
                    </div>
              </section>
                 
              <section className="section" id="contact">
                  <h3 className="h3 h3--blue">Contact</h3>
                  <div className="contact">
                      <div className="other">                  
                          <p className="contact__logo"><img className="img logo-bottom" src={croppedLogo} alt="logo of purple hair"/></p>
                          <p className="contact__number">204-891-1026</p>
                          <p className="contact__address">738 3rd Ave S.W</p>
                          <p className="contact__city">Calgary, Alberta</p>
                          <p className="contact__email">purplehair@gmail.com</p>
                      </div>
                      <div className="map-responsive">
                        <iframe title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.1209382078573!2d-114.07985168394204!3d51.05085467956264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716fe56a979d3b%3A0x54ee310aac7419fa!2s738+3+Ave+SW%2C+Calgary%2C+AB+T2P+0G7!5e0!3m2!1sen!2sca!4v1557673711628!5m2!1sen!2sca" frameBorder="0" style={{"border":"0", "width":"600", "height":"450"}} allowfullscreen></iframe>
                      </div>
                  </div>
              </section>     

            </div>
          </main>
    </>
  )

export default IndexPage
