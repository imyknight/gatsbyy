import React from 'react'
//style
import './Section2.scss'

const Section2 = () => {
  return (
    <section className="section2">
      <div className="container list-logo">
        <img alt="logo" src={require("./img/img-client1.png")} />
        <img alt="logo" src={require("./img/img-client2.png")} />
        <img alt="logo" src={require("./img/img-client3.png")} />
        <img alt="logo" src={require("./img/img-client4.png")} />
        <img alt="logo" src={require("./img/img-client5.png")} />
      </div>
    </section>
  )
}
export default Section2;