import React from 'react'

const Section6 = () => (
  <div className="container">
    <div className="title">
      <h6>app screen</h6>
      <h2>How our app looks like</h2>
    </div>
    <div className="screens">
      <img className="screen" alt="scr" src={require('../../images/img-screen1.jpg')} />
      <img className="screen" alt="scr" src={require('../../images/img-screen2.jpg')} />
      <img className="screen" alt="scr" src={require('../../images/img-screen3.jpg')} />
    </div>
    <div className="owl-dots">
      <div className="owl-dot active"></div>
      <div className="owl-dot"></div>
      <div className="owl-dot"></div>
    </div>
  </div>
)

export default Section6;