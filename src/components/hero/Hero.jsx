import React from "react"
import "./Hero.css"
import HeroImg from "../../images/illustration-intro.svg"
import GetStarted from "../button/GetStarted"

const Hero = props => {
  return (
    <div className="Hero__container">
      <div className="Hero__info">
        <h1>Bring everyone together to build better products. </h1>
        <p>
          Manage makes it simple for software teams to plan day-to-day tasks while keeping the
          larger team goals in view.
        </p>
        <GetStarted text="Get Started" />
      </div>
      <img src={HeroImg} />
    </div>
  )
}

export default Hero
