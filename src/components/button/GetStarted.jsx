import React from "react"
import "./GetStarted.css"

const GetStarted = (props) => {
  return (
    <div>
      <button style={{ 
          color: props.colorFont,
          width: props.ancho,  
          background: props.fondo }}
           className="button">{props.text}</button>
    </div>
  )
}

export default GetStarted
