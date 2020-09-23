import React from "react"
import "./navbar.css"
import logo from "../../images/logo.svg"
import GetStarted from "../button/GetStarted"

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} />
      <ul className="navbar__menu">
        <li>Pricing</li>
        <li>Product</li>
        <li>About Us</li>
        <li>Careers</li>
        <li>Community</li>
      </ul>
      <GetStarted text='Get Started'/>
    </div>
  )
}

export default Navbar
