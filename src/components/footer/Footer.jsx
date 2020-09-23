import React from "react"
import "./footer.css"
import logo from "../../images/logo-blanco.svg"
import GetStarted from "../button/GetStarted"
import twitter from "../../images/icon-twitter.svg"
import youtube from "../../images/icon-youtube.svg"
import facebook from "../../images/icon-facebook.svg"
import instagram from "../../images/icon-instagram.svg"
import pinterest from "../../images/icon-pinterest.svg"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__secction-one">
        <h1>Simplify how your team works today.</h1>
        <GetStarted fondo='#fff' colorFont='hsl(13, 100%, 60%)' text='Get Started'/>
      </div>
      <div className="footer__secction-two">
        <div className="footer__img">
          <div>
            <img className="footer__img-logo" src={logo} />
          </div>
          <div>
            <img className="footer__img-redes" src={facebook} />
            <img className="footer__img-redes" src={youtube} />
            <img className="footer__img-redes" src={twitter} />
            <img className="footer__img-redes" src={pinterest} />
            <img className="footer__img-redes" src={instagram} />
          </div>
        </div>
        <ul>
          <li>Home</li>
          <li>Pricing</li>
          <li>Product</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Community</li>
          <li>Privacy Policy</li>
        </ul>
        <div className="footer__contact-wrap">
          <div className="footer__contact">
            <input className="contact__input"></input>
            <GetStarted ancho='5vw' text='Go' />
          </div>
          <h5>Copyright 2020. All Rights Reserved</h5>
        </div>
      </div>
    </div>
  )
}

export default Footer
